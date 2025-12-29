#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

async function run() {
    try {
        // Resolve the source path (the themes folder inside this package)
        const sourcePath = path.resolve(__dirname, '../src/themes');

        if (!fs.existsSync(sourcePath)) {
            console.error(chalk.red(`Error: Source themes directory not found at ${sourcePath}`));
            process.exit(1);
        }

        // Get all available themes
        const themes = await fs.readdir(sourcePath);
        const validThemes = [];

        for (const theme of themes) {
            if ((await fs.stat(path.join(sourcePath, theme))).isDirectory()) {
                validThemes.push(theme);
            }
        }

        if (validThemes.length === 0) {
            console.error(chalk.red('Error: No themes found in the package.'));
            process.exit(1);
        }

        const questions = [
            {
                type: 'list',
                name: 'theme',
                message: 'Which theme would you like to install?',
                choices: validThemes,
            },
            {
                type: 'input',
                name: 'destination',
                message: 'Where would you like to copy the assets?',
                default: './resources/assets/fe',
            },
        ];

        const answers = await inquirer.prompt(questions);

        // Resolve the destination path based on the user's input (relative to their project root)
        const destinationPath = path.resolve(process.cwd(), answers.destination);

        // Selected theme path
        const selectedThemePath = path.join(sourcePath, answers.theme);

        console.log(chalk.blue(`Copying assets for theme '${answers.theme}'...`));

        // Copy only specific asset folders
        const assets = ['img', 'fonts', 'images', 'vendor'];
        let copiedCount = 0;

        for (const asset of assets) {
            const assetSrc = path.join(selectedThemePath, asset);
            // Destination structure: destination/themeName/assetFolder
            // Example: ./resources/assets/fe/basic/img
            const assetDest = path.join(destinationPath, answers.theme, asset);

            if (await fs.pathExists(assetSrc)) {
                // Copy the files recursively
                await fs.copy(assetSrc, assetDest);
                console.log(chalk.gray(`✓ Copied ${answers.theme}/${asset}`));
                copiedCount++;
            }
        }

        if (copiedCount === 0) {
            console.warn(chalk.yellow(`No assets (${assets.join(', ')}) were found to copy for theme '${answers.theme}'.`));
        } else {
            // Log a success message in green
            console.log(chalk.green(`\nSuccess! Assets for '${answers.theme}' copied to ${answers.destination}/${answers.theme}`));
        }

    } catch (error) {
        console.error(chalk.red('Error copying assets:'), error);
        process.exit(1);
    }
}

run();
