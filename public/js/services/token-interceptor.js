angular.module('alurapic')
	.factory('tokenInterceptor', function () {
		var interceptor = {};

		interceptor.response = function (response) {
			console.log("resposta do server");
			return response;
		};

		return interceptor;
	};
