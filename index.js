import angular from 'angular';
import _ from 'lodash';
import { wxPageModule } from './src/components/wxPage/wxPage.js';
import { wxPanelModule } from './src/components/wxPanel/wxPanel.js';
import 'bootstrap/dist/css/bootstrap.css';
import './src/css/wxPage.css';

/*import 'babel-polyfill';
import uiRouter from 'angular-ui-router';
import services from './server'
import appRouter from './config/app.router';
*/

const app = angular.module('app', ['app.wxPageModule', 'app.wxPanelModule']);

app.controller('wxCtrl', ['$scope', function($scope) {
	$scope.buttonsData = { //模拟数据，实际应从server拉取，将$http服务依赖进来
		"button": [{
			"type": "click",
			"name": "webpack",
			"key": "V1001_TODAY_MUSIC"
		}, {
			"name": "angular",
			"sub_button": [{
				"type": "view",
				"name": "angular1",
				"url": "http://www.soso.com/"
			}, {
				"type": "view",
				"name": "angular2",
				"url": "http://mp.weixin.qq.com"
			}, {
				"type": "click",
				"name": "angular4",
				"key": "V1001_GOOD"
			}]
		}]
	};

	$scope.addTopMenu = function(){
		const buttons = $scope.buttonsData.button;
		if(buttons.length == 3) return; //一级上限3个
		const btn = {
			"type": "click",
			"name": "",
			"key": ""
		};
		buttons.push(btn);
	}

	$scope.addSubMenu = function(top){
		if(!top.sub_button){//如果没有二级菜单，创建二级菜单数组
			top.sub_button=[];
		}else if(top.sub_button.length == 5){//二级上限5个
			return;
		}
		const sub = {
			"type": "click",
			"name": "",
			"key": ""
		};
		top.sub_button.push(sub);
	}

	$scope.removeTopMenu = function(top){
		$scope.buttonsData.button = _.without($scope.buttonsData.button, top);
	}

	$scope.removeSubMenu = function(top, sub){
		top.sub_button = _.without(top.sub_button, sub);
	}

}]);