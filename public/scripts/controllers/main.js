'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, nameOfService){

	nameOfService.getContacts(function(response){
			//console.log(response.data);
			$scope.contacts =  response.data;
	});

	$scope.saveContact = function(contact){
		// var editedContacts = $scope.contacts.filter(function(contact){
		// 	if(contact.edited){
		// 		return contact;
		// 	}
		// });
		nameOfService.saveContact(contact);
	}

	$scope.addContact = function(){
		$scope.contacts.push({name:$scope.name, number:$scope.number});
		$scope.name = null;
		$scope.number = null;
	}


	//remember using ng-repeat provides the $index
	//using $index causes bugs when used with filters 
	$scope.deleteContact = function(contact){
		nameOfService.deleteContact(contact);
		$scope.contacts.splice($scope.contacts.indexOf(contact),1);
	};

})