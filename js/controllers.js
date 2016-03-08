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
	$scope.dishid = 1;
	$scope.dishmenu = dishMenu;
	$scope.foundDish = true;
	$scope.dish = $scope.dishmenu[0].dishes[0];
	$scope.searchDish = function(id){
		$scope.foundDish = false;
		angular.forEach(dishMenu, function(category, catindex) {
			 
			angular.forEach(category.dishes, function(dish, dishindex) {
				if(dish.id == id)  
					$scope.dish = dish;
				    $scope.foundDish = true;
				});
			});
		
	}
	
})
.controller('SubMenuCtrl', function($scope ) {
	
	$scope.dishmenu = dishMenu;
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
});

var dishMenu=[{ name: "Appetizer 开胃菜", id: 1, icon:"",
				dishes:[
                  {
                	  id: 1,
                	  name:"手工素豆花",
                	  price:2.99,
                	  status: 0,
                	  icon:"img/1.jpe",
                	  ingredients:"四川的小伙伴们可能对手工豆花都不陌生，出了四川就很难吃到正宗的四川豆花。四川豆花与其它地方不同，吃咸口，而且豆花要口感绵密粗糙，豆香味特别重！口福居的手工豆花可是姥姥每天早上现磨豆子现做的，点豆花的时候对火候相当讲究！在湾区这手艺绝对是第一把手！绵软的豆腐配上口福居特调的花生辣椒蘸料，绝对还原正宗四川豆花！",
                	  nutrition:"tbd",
                	  sold:1
                  }
                                                                  
                  ]},
              { name: "Soup 汤粥", id: 2, icon:"",
  				dishes:[
                    {
	                  	  id: 2,
	                  	  name:"鲜榨花生豆浆",
	                  	  price:2.00,
	                  	  status: 0,
	                  	  icon:"img/2.jpe",
	                  	  ingredients:"tbd",
	                  	  nutrition:"tbd",
	                  	  sold:15
                    },
                    {
	                	  id: 3,
	                	  name:"香醇红糖酒酿",
	                	  price:4.00,
	                	  status: 0,
	                	  icon:"img/3.jpe",
	                	  ingredients:"因酒酿的制作过程，本品含少量酒精",
	                	  nutrition:"tbd",
	                	  sold:12
                      } ,
                      {
	                	  id: 4,
	                	  name:"墨鱼鸡汤面",
	                	  price:9.50,
	                	  status: 0,
	                	  icon:"img/4.png",
	                	  ingredients:" ",
	                	  nutrition:"tbd",
	                	  sold:10
                      } ,
                      {
                    	  id: 5,
                    	  name:"酸菜肉丝面",
                    	  price:9.00,
                    	  status: 0,
                    	  icon:"img/5.jpe",
                    	  ingredients:" ",
                    	  nutrition:"tbd",
                    	  sold:10
                          } 
                    ]
                  
              },
                { name: "Staple Food 主食", id: 3, icon:"",
      				dishes:[
                        {
                      	  id: 6,
                      	  name:"手工小笼汤包 （冷冻 50个）",
                      	  price:25.00,
                      	  status: 0,
                      	  icon:"img/6.jpe",
                      	  ingredients:"tbd",
                      	  nutrition:"tbd",
                      	  sold:34
                        },
                        {
                    	  id: 7,
                    	  name:"手工四川碱皮抄手 （冷冻50个）",
                    	  price:10.00,
                    	  status: 0,
                    	  icon:"img/7.jpe",
                    	  ingredients:"tbd",
                    	  nutrition:"tbd",
                    	  sold:13
                          }
                                                                        
                        ]},
                { name: "Side Dishes 小菜", id: 4, icon:"",
      				dishes:[
                        {
                      	  id: 8,
                      	  name:"酸辣粉",
                      	  price:8.00,
                      	  status: 0,
                      	  icon:"img/8.jpe",
                      	  ingredients:"tbd",
                      	  nutrition:"tbd",
                      	  sold:100
                        }
                                                                        
                        ]},                
                { name: "Meat Plates 肉类", id: 5, icon:"",
      				dishes:[
                            {
                          	  id: 9,
                          	  name:"卤牛健（附炕辣椒蘸料）",
                          	  price:12.99,
                          	  status: 0,
                          	  icon:"img/9.jpe",
                          	  ingredients:"tbd",
                          	  nutrition:"tbd",
                          	  sold:100
                            },                            
                            {
                        	  id: 10,
                          	  name:"四川花椒熏腊肉",
                          	  price:15.99,
                          	  status: 0,
                          	  icon:"img/10.jpe",
                          	  ingredients:"tbd",
                          	  nutrition:"tbd",
                          	  sold:92
                            },                            
                            {
                        	  id: 11,
                          	  name:"卤味五香猪蹄",
                          	  price:7.99,
                          	  status: 0,
                          	  icon:"img/11.jpe",
                          	  ingredients:"tbd",
                          	  nutrition:"tbd",
                          	  sold:60
                            },                            
                            {
                          	  id: 12,
                            	  name:"干锅田鸡",
                            	  price:25.99,
                            	  status: 0,
                            	  icon:"img/12.jpe",
                            	  ingredients:"tbd",
                            	  nutrition:"tbd",
                            	  sold:30
                              }
                                                                            
                            ]},  
                { name: "Poultry Plates 家禽", id: 6, icon:"",
      				dishes:[
                            {
                          	  id: "13",
                          	  name:"干锅双脆（鹅肠鸡脆骨）",
                          	  price:35.00,
                          	  status: 0,
                          	  icon:"img/13.jpe",
                          	  ingredients:"tbd",
                          	  nutrition:"tbd",
                          	  sold:35
                            },
                            {
                            	  id: "14",
                            	  name:"香辣鸭脖",
                            	  price:8.00,
                            	  status: 0,
                            	  icon:"img/14.jpe",
                            	  ingredients:"人见人爱卤味五香鸭脖，拌上四川海椒油和调料，瞬间成为下酒小菜！香辣可口香料老卤和海椒调料都是口福居姥爷亲自制作，味道飘香不死咸。不含任何防腐剂添加剂，色素，请安心食用",
                            	  nutrition:"tbd",
                            	  sold:21
                              }
                                                                            
                            ]},       
                { name: "Sea Food 海鲜", id: 7, icon:"",
      				dishes:[
                            {
                          	  id: 15,
                          	  name:"干锅香辣蟹",
                          	  price:30,
                          	  status: 0,
                          	  icon:"img/15.jpe",
                          	  ingredients:"tbd",
                          	  nutrition:"tbd",
                          	  sold:5
                            }
                                                                            
                            ]},        
                { name: "Vegie Plates 素菜", id: 8, icon:"",
      				dishes:[
                            {
                          	  id: 2,
                          	  name:"手工素豆花",
                          	  price:2.99,
                          	  status: 0,
                          	  icon:"img/2.jpe",
                          	  ingredients:"tbd",
                          	  nutrition:"tbd",
                          	  sold:"1"
                            }
                                                                            
                            ]},   
                { name: "Special 特价", id: 9, icon:"",
      				dishes:[
                            {
                          	  id: 16,
                          	  name:"梅菜扣肉（咸烧白）",
                          	  price:5.99,
                          	  status: 0,
                          	  icon:"img/16.jpe",
                          	  ingredients:"tbd",
                          	  nutrition:"tbd",
                          	  sold:"123"
                            }
                                                                            
                            ]},  
                { name: "Drinks 饮料", id: 10, icon:"",
      				dishes:[
                            {
                          	  id: 2,
                          	  name:"手工素豆花",
                          	  price:2.99,
                          	  status: 0,
                          	  icon:"img/2.jpe",
                          	  ingredients:"tbd",
                          	  nutrition:"tbd",
                          	  sold:"67"
                            }
                                                                            
                            ]}            
              
              ];
