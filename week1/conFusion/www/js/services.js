'use strict';

angular.module('conFusion.services', ['ngResource'])
        .constant("baseURL","http://localhost:3000/")//ip-port of the server
        .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {

                this.getDishes = function(){

                    return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});

                };

                // implement a function named getPromotion
                // that returns a selected promotion.
                this.getPromotion = function() {
                    return   $resource(baseURL+"promotions/:id");;
                }


        }])

        .service('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {
			this.getLeadership = function(){
        	    return $resource(baseURL+"leadership/:id");//, null,  {'update':{method:'PUT' }});
			}
        }])

		.factory('contactusFactory', ['$resource', 'baseURL', function($resource,baseURL) {
			//this.getContact = function(){
	            return $resource(baseURL+"contactus/:id");
            	//return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
			//}
        }])
        .factory('aboutFactory', ['$resource', 'baseURL', function($resource,baseURL) {
			return $resource(baseURL+"aboutus/:id");
        }])

        .factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {

            return $resource(baseURL+"feedback/:id");

        }])

;
