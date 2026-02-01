import { Analytics, Newsletter, AppConfig } from "@hashtagcms/web-sdk";


window.HashtagCms = { configData: {} };
window.HashtagCms.Newsletter = new Newsletter();
window.HashtagCms.Subscribe = window.HashtagCms.Newsletter; // Legacy support
window.HashtagCms.Analytics = new Analytics();
window.HashtagCms.AppConfig = new AppConfig();
//console.log('Basic Theme loaded');