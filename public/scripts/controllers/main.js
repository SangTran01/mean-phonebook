'use strict';

var app = angular.module('myApp');

app.controller('myCtrl', function($scope){
	$scope.contacts = [
		{name:'Sang',   number: '111-111-1111'},
		{name:'Bob',    number: '222-222-2222'},
		{name:'Jessie', number: '333-333-3333'},
		{name:'Angie',  number: '444-444-4444'}
	];

	$scope.saveContact = function(){
		console.log('saved!');
	}

	$scope.addContact = function(){
		$scope.contacts.push({name:$scope.name, number:$scope.number});
	}
})