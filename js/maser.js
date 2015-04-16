/// <reference path="../Scripts/angular.min.js" />


angular.module('demoapp', ['ui.router']).factory('Demo', [function () {


    return {
        title: "SHOPPING AREA",
        subtitle: "BANGALORE STOP",
        signin: "SignIn",
        register: "Register and get 15% off*",
        wishlist: "My Wishlist",
        men: "Mens",
        women: "Womens",
        Access: "Accessories",
        kid: "Kids",
        gift: "Jwellery",
        Brand: "FeaturedBrand",
        bangaloreTitle: "Welcome to Bangalore Shopping Stop",
        shipping: "Free Shipping",
        cod: "Check Pin we deliver",
        contact: "Contact us",
        order: "OrderStatus",
        registertitle: "New to Bangalorestop?- Register & get 15% off*",
        CheckpinHeader: "Check PinCode We Deliver To",
        checksubtile: "Enter PIN Code to check delivery Location and Cash on Delivery availability"



    };
}]).config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home'
       );

    $stateProvider.state('log',
        {
            url: '/log',
            templateUrl: 'log.html',
            controller: 'DemoCtrl'
        }
        ).state('forgot',
    {
        url: '/forgot',
        templateUrl: 'forgot.html'
    }).state('home',
    {
        url: '/home',
        templateUrl: 'home.html',

    }).state('contact',
    {
        url: '/contact',
        templateUrl: 'contact.html',
        controller: 'CntctCtrl'
    }).state('order',
    {
        url: '/order',
        templateUrl: 'order.html',
        controller: 'HomeCtrl'
    }).state('pinstatus',
    {
        url: '/pinstatus',
        templateUrl: 'PinStatus.html',
        controller: 'HomeCtrl'
    }).state('wishlist',
    {
        url: '/wishlist',
        templateUrl: 'wishlist.html',
        controller: 'HomeCtrl'
    })
}]).controller('DemoCtrl', ['$scope', 'Demo', function ($scope, Demo) {
    //$scope.home = function () {
    //    $location.path('/home');
    //}

    $scope.titles = Demo.title;
    $scope.contact = "ContactUs";
    $scope.sign = "SignIn/Up";
    $scope.menu = [
        {
            name: "Bangalore Shopping"
        },
        {
            name: "ContactUs",

        },
        {
            name: "SignIn/Up"
        }
    ]

    $scope.index = 0;
    $scope.setIndex = function (val) {
        $scope.index = val;
    }
    $scope.getIndex = function () {
        return ($scope.index);
    }
}]).controller('CntctCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.title1 = "you can now";
    $scope.order = "ordered items";
    $scope.title = "Frequently Asked Question";
    $scope.title2 = "you can give";
    $scope.order1 = "your feedback";
    //"Frequently Asked Question";
    $http.get('../js/contactdtl.json').success(function (data) {
        $scope.getdata = data;
    });

    $scope.images = [
        {
            imag: 'conact'
        },
        {
            imag: 'contacts'
        },
        {
            imag: 'contactss'
        }
    ]

}]).directive('homeDirec', function () {
    return {
        restrict: 'E',
        templateUrl: "../html_pages/homemaster.html",
        controller: "HomeCtrl"
    }
}).controller('HomeCtrl', ['$scope', 'Demo', '$http', function ($scope, Demo, $http) {
    $scope.odertitle = "Order Status";
    $scope.ordersub = "To track your order, please enter your Order Number in the field provided below and click on the Submit button."
    $scope.subtitl = Demo.subtitle;
    $scope.caption = "Start Something New";
    $scope.signin = Demo.signin,
    $scope.regstr = Demo.register,
    $scope.wishlist = Demo.wishlist,
    $scope.men = Demo.men,
    $scope.women = Demo.women,
    $scope.Access = Demo.Access,
    $scope.kid = Demo.kid,
    $scope.gift = Demo.gift,
    $scope.Brand = Demo.Brand,
    $scope.modalsign1 = "If you have an account with us,",
    $scope.modalsign2 = "Sign in using your name.",
    $scope.bangaloreTitle = Demo.bangaloreTitle,
    $scope.shipping = Demo.shipping,
    $scope.cod = Demo.cod,
    $scope.contact = Demo.contact,
    $scope.order = Demo.order,
    $scope.registertitle = Demo.registertitle,
    $scope.CheckpinHeader = Demo.CheckpinHeader,
    $scope.checksubtile = Demo.checksubtile;


    $http.get('../js/submenu.json').success(function (response) {
        $scope.getmenu = response;
    });

    $scope.menu = [
        {
            list: "Express Checkout"
        },
        {
            list: "Redeem your First Citizen Reward Point"
        },
        {
            list: "Create a Wish List",
        },
    {
        list: "Track your orders"
    }
    ]
}
]).directive('homeDetail', function () {
    return {
        restrict: 'E',
        templateUrl: '../html_pages/Homedetails.html'
    }
})
   
