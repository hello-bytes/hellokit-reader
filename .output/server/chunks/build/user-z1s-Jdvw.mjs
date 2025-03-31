import { h as helper, j as devicebiz } from './server.mjs';
import Cookies from 'js-cookie';

const userbiz = {
  // 用户已经登录
  isUserMode(deviceID, fileID) {
    return helper.getUserToken().length > 0;
  },
  // 用户未登录，使用设备标识操作
  isDeviceMode(deviceID, fileID) {
    return helper.getUserToken().length == 0;
  },
  getNickName() {
    let mstObj = helper.getMst();
    if (mstObj == null) {
      return "";
    }
    if (mstObj.n != void 0 && mstObj.n.length > 0) {
      return mstObj.n;
    }
    return "";
  },
  async getWxLoginURL() {
    return helper.postClientJsonAsync("/api/tbs/wechat/login-qrcode", { "device_id": devicebiz.getDeviceID() });
  },
  async fetchWxLoginState(ticket) {
    return helper.postClientJsonAsync("/api/tbs/wechat/login-state-fetch", { "ticket": ticket });
  },
  saveAuthWithWxCookie(uid, name, phoneNumber, email, wxOpenID, token) {
    this._saveToken(uid, name, phoneNumber, email, wxOpenID, token);
  },
  _saveToken(uid, name, phoneNumber, email, wxOpenID, token) {
    var domain = "";
    var url = (void 0).location.href.toString();
    if (url.indexOf("codingsky.com") > 0) {
      domain = ".codingsky.com";
    } else if (url.indexOf("tuboshu.mobi") > 0) {
      domain = ".tuboshu.mobi";
    } else if (url.indexOf("androidos.net.cn") > 0) {
      domain = ".androidos.net.cn";
    } else if (url.indexOf("hellokit.com.cn") > 0) {
      domain = ".hellokit.com.cn";
    } else if (url.indexOf("hellobit.com.cn") > 0) {
      domain = ".hellobit.com.cn";
    } else if (url.indexOf("helloandroid.cn") > 0) {
      domain = ".helloandroid.cn";
    }
    let obj = { u: uid, t: token, e: email, p: phoneNumber, n: name, wxid: wxOpenID };
    let objstr = JSON.stringify(obj);
    if (domain != "") {
      Cookies.set("mst", objstr, { domain, expires: 30 });
    } else {
      Cookies.set("mst", objstr, { expires: 30 });
    }
  },
  saveLocalUser(userInfo) {
    helper.setKVObject("hb.vip.user", userInfo);
  },
  async getMyUserInfoWithToken(token) {
    return helper.postClientJsonAsyncWithToken("/api/user/v1/token/info", token, {});
  }
};

export { userbiz as u };
//# sourceMappingURL=user-z1s-Jdvw.mjs.map
