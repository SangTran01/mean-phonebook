'use strict';

var app = angular.module('myApp');

app.service('nameOfService',function($http){
	this.sayHello = function(){
		console.log('hello from service');
	}

	//to get our mock data must use $http provider
	this.getContacts = function(callback){
		$http.get('mock/contacts.json')
			.then(callback)
	}


	this.deleteContact = function(contact){
		console.log('The ' + contact.name + " contact has been deleted");
	}

	this.saveContact = function(contact){
		console.log('The ' + contact.name + " contacts has been saved");
	}
})