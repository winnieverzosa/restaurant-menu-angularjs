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
    var app = angular.module('restaurant-products', []);
    app.directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: '../templates/product-title.html'
        };
    });

    app.directive('productDescription', function () {
        return {
            restrict: 'E',
            templateUrl: '../templates/product-description.html',
            controller: function () {
                this.tab = 1;

                this.setTab = function(value){
                    this.tab = value;
                };

                this.isSet = function(value){
                    return value === this.tab;
                }
            },
            controllerAs: 'tab'
        } ;
    });
})();
