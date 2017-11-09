import angular from 'angular';

const wxPanelModule = angular.module('app.wxPanelModule',[]);
wxPanelModule.directive('wxPanel', function() {
	return {
		restrict: 'E',
		templateUrl: './src/components/wxPanel/wxPanelTemplate.html',
		link: function($scope, elm, attr, controller) {
			//console.log($scope, elm, attr, controller);
		},
		controller: function($scope, $element, $attrs) {
			//console.log($scope, $element, $attrs);
		}
	}
})
.controller('wxPanelCtrl', [ '$scope', function($scope){
	$scope.a=1;
}]);

export {wxPanelModule};
