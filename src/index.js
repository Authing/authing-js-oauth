var axios = require('axios');

var OAuth = function(params) {

	this.oAuthUrls = {
		wechat: 'http://oauth.authing.cn/oauth/wechat/redirect',
		github: 'http://oauth.authing.cn/oauth/github/redirect'
	}

	this.requiredParams = ['code', 'state'];

	if(!params.type) {
		throw "缺少参数：请提供OAuth类型";
	}

	if(!params.params) {
		throw "缺少参数：请提供OAuth回调参数";
	}

	if(!this.oAuthUrls[params.type]) {
		throw "不合法的OAuth类型";
	}

	for(var key in params.params) {
		if(this.requiredParams.indexOf(key) === -1) {
			throw "缺少OAuth回调参数：" + key;
		}
	}

	this.currentUrl = this.oAuthUrls[params.type];
	this.params = this.params;

}

OAuth.prototype = {
	auth: function() {
		var self = this;
		return axios.get(this.currentUrl, {
			params: self.params
		});
	}
}

module.exports = OAuth;
