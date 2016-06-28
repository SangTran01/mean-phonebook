'use strict';

var app = angular.module('myApp');

app.directive('contacts', function(){
	return {
		templateUrl: 'templates/contacts.html',
		controller: 'mainCtrl',
		replace:true
	}
});