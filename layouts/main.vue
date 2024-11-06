<template>
	<div>
		<div class="tbs-nav" style="box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);background:#fff;">
			<div class="container">
				<div class="tbs-navbar-header">
					<a class="tbs-navbar-brand" href="/">
						<img style="vertical-align:middle;height:50px;width:260px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/hellokit-brand.png">
					</a>
				</div>
				<ul class="tbs-navbar-nav">
					<li class="active"><a style="color:#555;" href="/web">在线工具</a></li>
					<li ><a style="color:#555;" href="/software">软件推荐</a></li>
					<li ><a style="color:#555;" href="/hao">好站导航</a></li>
					<li ><a style="color:#555;" href="/mytool">我的工具</a></li>
				</ul>
				<ul class="tbs-navbar-right">
					<li v-if="name.length == 0">
                        <a href="/user/login"><el-button type="primary">注册/登录</el-button></a>
                    </li>

					<div v-if="name.length > 0" id="userinfo-nav-menu" class="dropdown is-hoverable" style="margin-top:8px;font-size:16px;">
						<div class="dropdown-trigger">
							<button class="button is-link"  style="padding:7px 16px!important;font-size:16px;">
								<span id="username-label" style="font-size:16px;line-height:24px;display:inline-block;height:24px;">{{ name }}</span>
								<span class="icon is-small"><i class="fas fa-angle-down" aria-hidden="true"></i></span>
							</button>
						</div>
						<div class="dropdown-menu" id="dropdown-menu4" role="menu">
							<div class="dropdown-content" style="width:150px;">
								<el-link style="font-size:16px;line-height:24px;" href="/user/my/info" text="我的账号" />
								<hr class="dropdown-divider">
								<el-link style="font-size:16px;line-height:24px;" href="/user/logout" text="退出登录" />
							</div>
						</div>
					</div>
				</ul>
				<div style="clear:both;"></div>
			</div>
		</div>
        <slot></slot>

		<section id="footer" class="footer" style="margin-top:50px;">
			<div class="container wow fadeInDown">
				<div class="col-sm-12 text-center">
					<p class="text-white">哈喽工具箱致力于为您提供最好用的全平台软件</p>
					<p class="text-white">
						<span>关于哈喽工具箱 · </span>
						<a style="color:white;" href="/updatelog">更新日志</a>
					</p>
					<p class="text-white">Copyright© 2013-2023  All Rights Reserved <a style="color:#fff;" href="https://beian.miit.gov.cn">京ICP备2023019179号-7</a>&nbsp;<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502044969" style="color:#fff;"><img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn1/codingsky/images/ga.jpg" style="width:15px;">京公网安备 11010502044969号</a></p>			
				</div>
			</div>
		</section>
	</div>
</template>
  
<script>
import helper from '@/utils/helper';
import loginbiz from '@/utils/loginbiz';

export default {
	name: 'HeaderComp',

	data() {
		return {
			name : "",
			// userStatue : 1, // 1 : 未登录，2 : 已登录
		}
	},

	mounted() {
        
		this.loadUserInfo();
	},

	methods: {
		async loadUserInfo(){
			let responseData = await loginbiz.getMyInfoOnline();
			if(helper.isResultOk(responseData)){
				//console.log(responseData);
				let name = responseData.data.name == "" ? responseData.data.email : responseData.data.name;
				this.name = name;
			}
		}
	}
};
</script>