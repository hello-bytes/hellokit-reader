import{l as i}from"./C-CnRt1-.js";import{u as o}from"./B6AwB7wT.js";const n={async getRssListByFile(e){let s={file_id:e};return i.postJsonAsync(!1,"/api/tbs/rss/import/opml/get-feeds",s)},async checkFeedURL(e,s){let r={user_type:o.isUserMode()?2:1,device_id:e,urls:s};return i.postJsonAsync(!1,"/api/tbs/rss/import/opml/check-feeds",r)},async subscribeFeedURL(e,s,r,t,p,l,a){let d={user_type:o.isUserMode()?2:1,device_id:e,folder_id:s,title:r,desc:l,url:t,feed_url:p,language:a};return i.postJsonAsync(!1,"/api/tbs/rss/import/opml/subscribe-feed",d)},async importAllFeed(e,s,r){let t={user_type:o.isUserMode()?2:1,device_id:e,folder_id:r,file_id:s};return i.postJsonAsync(!1,"/api/tbs/rss/import/opml/import-all",t)}};export{n as i};