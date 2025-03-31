import { h as helper } from './server.mjs';
import { u as userbiz } from './user-z1s-Jdvw.mjs';

const importbiz = {
  async getRssListByFile(fileID) {
    let params = {
      file_id: fileID
    };
    return helper.postJsonAsync(false, "/api/tbs/rss/import/opml/get-feeds", params);
  },
  async checkFeedURL(deviceID, feedURLs) {
    let params = {
      user_type: userbiz.isUserMode() ? 2 : 1,
      device_id: deviceID,
      urls: feedURLs
    };
    return helper.postJsonAsync(false, "/api/tbs/rss/import/opml/check-feeds", params);
  },
  async subscribeFeedURL(deviceID, folderID, title, url, feedUrl, desc, lang) {
    let params = {
      user_type: userbiz.isUserMode() ? 2 : 1,
      device_id: deviceID,
      folder_id: folderID,
      title,
      desc,
      url,
      feed_url: feedUrl,
      language: lang
    };
    return helper.postJsonAsync(false, "/api/tbs/rss/import/opml/subscribe-feed", params);
  },
  async importAllFeed(deviceID, fileID, folderID) {
    let params = {
      user_type: userbiz.isUserMode() ? 2 : 1,
      device_id: deviceID,
      folder_id: folderID,
      file_id: fileID
    };
    return helper.postJsonAsync(false, "/api/tbs/rss/import/opml/import-all", params);
  }
};

export { importbiz as i };
//# sourceMappingURL=import-DUQd4H5-.mjs.map
