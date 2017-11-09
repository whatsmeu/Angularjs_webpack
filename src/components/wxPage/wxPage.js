import angular from 'angular';

const wxPageModule = angular.module('app.wxPageModule', []);
wxPageModule.directive('wxPage', function() {
		return {
			restrict: 'E',
			templateUrl: './src/components/wxPage/wxPageTemplate.html',
			link: function($scope, elm, attr, controller) {
				//console.log($scope, elm, attr, controller);
				$scope.name="手机";
			},
			controller: function($scope, $element, $attrs) {
				//console.log($scope, $element, $attrs);
			},
			scope: {//独立作用域
				buttonsData:'='
			}
		}
	});

export { wxPageModule }; 