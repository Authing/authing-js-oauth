# authing-js-oauth
authing js oauth sdk

----------

## 需要编写后端代码的OAuth调用方法

```第一步```：在对应开放平台中配置好自己的回调URL；
```第二步```：下载SDK[```Github```]；
```第三步```：在开放平台中配置好的回调URL中调用后端SDK；

## SDK OAuth验证使用说明

### 以Github为例

``` javascript
let oauth = new OAuth({
	type: 'github', //OAuth类型，目前支持github和wechat，小写
	params: {
		state: '' //Github传给您在Github OAuth设置中配置好的URL中的state参数
		code: '' //Github传给您在Github OAuth设置中配置好的URL中的code参数
	}
});

oauth.auth()
.then(function(res) {
	//success
})
.catch(function(res) {
	//error
});

```

微信只需要把github换成wechat即可。

