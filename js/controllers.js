angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  // $scope.$on('$ionicView.enter', function(e) {
  // });

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  // log out
  $scope.logout = function() {
    console.log("loged out");
  };
  
  $scope.dishmenu = dishMenu;
  //alert($scope.dishmenu[0].name);
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('OrderSummaryCtrl', function($scope ) {
})

.controller('OrderHistoryCtrl', function($scope ) {
})

.controller('MenuCtrl', function($scope ) {
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

var dishMenu=[{ name: "Appetizer 开胃菜", id: 1, icon:"",
				dishes:[
                  {
                	  id: "000",
                	  name:"手工素豆花",
                	  price:2.99,
                	  status: 0,
                	  icon:"www/img/000.jpe",
                	  ingredients:"tbd",
                	  nutrition:"tbd",
                	  sold:"1"
                  }
                                                                  
                  ]},
              { name: "Soup 汤粥", id: 2, icon:"",
  				dishes:[
                    {
                  	  id: "001",
                  	  name:"手工素豆花",
                  	  price:2.99,
                  	  status: 0,
                  	  icon:"www/img/001.jpe",
                  	  ingredients:"tbd",
                  	  nutrition:"tbd",
                  	  sold:"1"
                    }
                                                                    
                    ]},
                { name: "Staple Food 主食", id: 3, icon:"",
      				dishes:[
                        {
                      	  id: "002",
                      	  name:"手工素豆花",
                      	  price:2.99,
                      	  status: 0,
                      	  icon:"www/img/002.jpe",
                      	  ingredients:"tbd",
                      	  nutrition:"tbd",
                      	  sold:"1"
                        }
                                                                        
                        ]},
                { name: "Side Dishes 小菜", id: 3, icon:"",
      				dishes:[
                        {
                      	  id: "002",
                      	  name:"手工素豆花",
                      	  price:2.99,
                      	  status: 0,
                      	  icon:"www/img/002.jpe",
                      	  ingredients:"tbd",
                      	  nutrition:"tbd",
                      	  sold:"1"
                        }
                                                                        
                        ]},                
                { name: "Meat Plates 肉类", id: 3, icon:"",
      				dishes:[
                            {
                          	  id: "002",
                          	  name:"手工素豆花",
                          	  price:2.99,
                          	  status: 0,
                          	  icon:"www/img/002.jpe",
                          	  ingredients:"tbd",
                          	  nutrition:"tbd",
                          	  sold:"1"
                            }
                                                                            
                            ]},  
                { name: "Poultry Plates 家禽", id: 3, icon:"",
      				dishes:[
                            {
                          	  id: "002",
                          	  name:"手工素豆花",
                          	  price:2.99,
                          	  status: 0,
                          	  icon:"www/img/002.jpe",
                          	  ingredients:"tbd",
                          	  nutrition:"tbd",
                          	  sold:"1"
                            }
                                                                            
                            ]},       
                { name: "Sea Food 海鲜", id: 3, icon:"",
                          				dishes:[
                                                {
                                              	  id: "002",
                                              	  name:"手工素豆花",
                                              	  price:2.99,
                                              	  status: 0,
                                              	  icon:"www/img/002.jpe",
                                              	  ingredients:"tbd",
                                              	  nutrition:"tbd",
                                              	  sold:"1"
                                                }
                                                                                                
                                                ]},        
                { name: "Vegie Plates 素菜", id: 3, icon:"",
                  				dishes:[
                                        {
                                      	  id: "002",
                                      	  name:"手工素豆花",
                                      	  price:2.99,
                                      	  status: 0,
                                      	  icon:"www/img/002.jpe",
                                      	  ingredients:"tbd",
                                      	  nutrition:"tbd",
                                      	  sold:"1"
                                        }
                                                                                        
                                        ]},   
                { name: "Special 特价", id: 3, icon:"",
      				dishes:[
                            {
                          	  id: "002",
                          	  name:"手工素豆花",
                          	  price:2.99,
                          	  status: 0,
                          	  icon:"www/img/002.jpe",
                          	  ingredients:"tbd",
                          	  nutrition:"tbd",
                          	  sold:"1"
                            }
                                                                            
                            ]},  
                { name: "Drinks 饮料", id: 3, icon:"",
      				dishes:[
                            {
                          	  id: "002",
                          	  name:"手工素豆花",
                          	  price:2.99,
                          	  status: 0,
                          	  icon:"www/img/002.jpe",
                          	  ingredients:"tbd",
                          	  nutrition:"tbd",
                          	  sold:"1"
                            }
                                                                            
                            ]}            
              
              ];
