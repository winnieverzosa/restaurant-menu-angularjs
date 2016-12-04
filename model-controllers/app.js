/**
 *
 * RESTAURANT MENU
 *
 * This project is an application built using AngularJS and Bootstrap.
 * There is no data persistence on this project.
 *
 * Created by Winnie Verzosa
 * Website: http:// winnieverzosa.com
 * Resume: http://winnieverzosa.com/resume
 * LinkedIn: https://www.linkedin.com/in/winnieverzosa
 * GitHub: https://github.com/winnieverzosa
 *
 */

(function(){
    var app = angular.module('restaurant', ['restaurant-products']);

    app.controller('MenuController', ['$http', function($http){
        var menu = this;
        menu.products = [];
        $http.get('../restaurant-products.json').then(function(response){
            menu.products = response['data'];
        });
    }]);

    app.controller('ReviewController', function(){
       this.review = {};

       this.addReview = function(product){
           this.review.createdOn = Date.now();
           product.reviews.push(this.review);
           this.review = {};
       };
    });
})();