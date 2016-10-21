"use strict";function setHome(){console.log("Home");var a=document.getElementById("nav-items");a.classList.remove("blue-links");var b=document.getElementById("footer-items");b.classList.remove("blue-links");var c=document.getElementById("nav");c.className+=" posabs width-100";var d=document.getElementById("footer");d.className+=" posabs width-100 top-90"}function setPortfolio(){console.log("Portfolio");var a=document.getElementById("nav-items");a.className+=" blue-links";var b=document.getElementById("footer-items");b.className+=" blue-links";var c=document.getElementById("nav");c.classList.remove("posabs");var d=document.getElementById("footer");d.classList.remove("posabs"),d.classList.remove("top-90")}function setAbout(){console.log("About");var a=document.getElementById("nav-items");a.className+=" blue-links";var b=document.getElementById("footer-items");b.className+=" blue-links";var c=document.getElementById("nav");c.classList.remove("posabs");var d=document.getElementById("footer");d.classList.remove("posabs"),d.classList.remove("top-90")}angular.module("loriahsiteApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/portfolio",{templateUrl:"views/portfolio.html",controller:"PortfolioCtrl",controllerAs:"portfolio"}).when("/portfolio/material-design-practice",{templateUrl:"views/portfolio/material-design-practice.html",controller:"PortfolioMaterialDesignPracticeCtrl",controllerAs:"portfolio/materialDesignPractice"}).when("/portfolio/self-portrait-logo",{templateUrl:"views/portfolio/self-portrait-logo.html",controller:"PortfolioSelfPortraitLogoCtrl",controllerAs:"portfolio/selfPortraitLogo"}).when("/portfolio/get-it-done",{templateUrl:"views/portfolio/get-it-done.html",controller:"PortfolioGetItDoneCtrl",controllerAs:"portfolio/getItDone"}).otherwise({redirectTo:"/"})}]),document.getElementById("hometab").addEventListener("click",setHome),document.getElementById("portfoliotab").addEventListener("click",setPortfolio),document.getElementById("abouttab").addEventListener("click",setAbout),angular.module("loriahsiteApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("loriahsiteApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("loriahsiteApp").controller("PortfolioCtrl",["$scope",function(a){a.portfolioItems=[{_id:0,imgSrc:"/images/portfolio_imgs/all_icons.35b1d56e.png",title:"Material Design Practice",description:"Simple icons/logos inspired by Material Design created with Adobe Photoshop/Illustrator",href:"material-design-practice",tags:[{name:"Visual Design "},{name:"Adobe Illustrator "},{name:"Adobe Photoshop "}]},{_id:1,imgSrc:"/images/portfolio_imgs/loriah-avatar.bc307bbe.png",title:"Self-Portrait Logo",description:"Myself as an icon!",href:"self-portrait-logo",tags:[{name:"Visual Design "},{name:"Adobe Illustrator "}]},{_id:2,imgSrc:"/images/portfolio_imgs/done-site.82b03302.png",title:"Get it Done",description:"Set categorical goals for yourself and view analytics as you check them off.",href:"#",tags:[{name:"Interaction Design "},{name:"Axure "}]}]}]),angular.module("loriahsiteApp").controller("PortfolioMaterialDesignPracticeCtrl",["$scope",function(a){a.images=[{featured:!1,imgSrc:"/images/portfolio_imgs/all_icons.35b1d56e.png",altText:"All Icons"},{featured:!1,imgSrc:"/images/portfolio_imgs/gear_double.e99f1f4f.png",altText:"All Icons"},{featured:!1,imgSrc:"/images/portfolio_imgs/laptop.98827567.png",altText:"All Icons"},{featured:!1,imgSrc:"/images/portfolio_imgs/lightbulb.674e9ae8.png",altText:"All Icons"},{featured:!1,imgSrc:"/images/portfolio_imgs/magnifying_glass.a6d60c81.png",altText:"All Icons"},{featured:!1,imgSrc:"/images/portfolio_imgs/post_it.4b822908.png",altText:"All Icons"},{featured:!1,imgSrc:"/images/portfolio_imgs/solid_heart.f7dcac79.png",altText:"All Icons"}]}]),angular.module("loriahsiteApp").controller("PortfolioSelfPortraitLogoCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("loriahsiteApp").controller("PortfolioGetItDoneCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("loriahsiteApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="container text-roboto"> <div class="container"> <div class="row mar-vert-10"> <div class="col-xs-12 col-sm-4"> <img src="/images/portfolio_img.44cedb38.jpg" class="max-width-100" id="portfolio-img"> <p class="text-center pad-top-10 blue-links"><a href="/Loriah_Pope_Resume.pdf" download="">Resume</a></p> </div> <div class="col-xs-12 col-sm-8"> <h2 class="mar-top-0">Hello! I\'m Loriah.</h2> <p>I am a User Experience Designer and Front End Developer in New York. I graduated from New York University in 2015 with a degree in Computer Science, however at the end of my time there, I discovered the world of designing simple, interesting, and effective experiences for the user. I strongly believe that all developers need to have an respect for the end user experience in order to develop with purpose. This principle guides all of my work on a daily basis.</p> <p>In my spare time, I love exploring the city and the world. I am a strong defender of weekend trips (even solo!), a remnant of my time studying abroad in London and jetting off every weekend for a new adventures. I love to experiment with cooking new cuisines, and I have been playing volleyball for the last year.</p> </div> </div> </div> </div>'),a.put("views/main.html",'<div id="home_bkgd"> <div class="vertical"> <h1 class="text-white text-center text-roboto text-xlarge">Loriah Pope</h1> <h2 class="text-white text-roboto text-center text-large">User Experience Designer and Front End Developer</h2> </div> </div>'),a.put("views/portfolio.html",'<div class="container text-roboto"> <div class="container"> <div class="row mar-vert-10"> <h2 class="mar-top-0">Portfolio</h2> <p class="subtitle">Note: Due to my current position, much of my creative cannot be posted. Please reach out directly if you would like to know more about my professional work.</p> <div class="col-xs-12 no-pad"> <input ng-model="searchFilter" class="width-100 pad-5" placeholder="search through tags, ex: angularjs or photoshop"> </div> <div class="col-xs-12 pad-top-20" ng-repeat="p in portfolioItems | filter:{tags:p.tag} | filter:searchFilter"> <div class="row pad-bot-20 border-bot"> <div class="col-xs-12 col-sm-4 text-center"> <img src="{{p.imgSrc}}" class="max-width-100"> </div> <div class="col-xs-12 col-sm-8"> <h3 class="bold"><a class="blue-links">{{p.title}}</a></h3> <p>{{p.description}}</p> <p class="subtitle"><a ng-repeat="tag in p.tags" class="blue-links"><i class="fa fa-plus-circle" aria-hidden="true"></i> {{tag.name}}</a></p> </div> </div> </div> <div class="col-xs-12"> <h4>More coming soon!</h4> </div> </div> </div> </div>'),a.put("views/portfolio/get-it-done.html","<p>This is the portfolio/get-it-done view.</p>"),a.put("views/portfolio/material-design-practice.html",'<div class="container"> <div class="row"> <div class="col-sm-3"> <div class="row" ng-repeat="img in images"> <div class="col-xs-12"> <img src="{{img.imgSrc}}" class="max-width-100"> </div> </div> </div> <div class="col-sm-9"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis tempor libero id sodales. Aenean elit massa, finibus id felis eu, accumsan tristique justo. Donec euismod mauris eget ante lacinia dignissim. Nullam at vulputate ipsum, vulputate euismod mauris. Quisque scelerisque tempus venenatis. Ut fringilla tempor risus et ornare. Proin semper ante faucibus quam fermentum, sed tincidunt arcu vehicula. Quisque pretium facilisis commodo. Aenean volutpat quam ac consectetur tempor. Etiam hendrerit lobortis felis, sed euismod mauris porttitor id.</p> <p>Sed ullamcorper lacus ut velit tristique semper. Fusce dignissim neque maximus dui tempus commodo. Donec feugiat nisi sed risus luctus vestibulum. Vivamus vel massa a turpis aliquet iaculis rhoncus eget est. Phasellus vitae lectus sed magna suscipit laoreet et ut elit. Nullam consectetur, purus ac lobortis interdum, arcu dolor dictum sem, non dignissim augue urna sagittis nulla. Ut aliquet lacus vitae accumsan laoreet. Sed vitae ante eget ex luctus hendrerit. Proin massa massa, sagittis vitae ornare euismod, convallis eu justo. Duis id ornare magna. Nunc tincidunt magna at neque ultrices, interdum pulvinar mauris elementum. Fusce in feugiat felis. Integer scelerisque nisi luctus eros malesuada, at sodales elit lacinia. In finibus at lorem non fringilla. Nulla feugiat blandit ipsum non molestie. Curabitur in ultricies lacus.</p> </div> </div> </div>'),a.put("views/portfolio/self-portrait-logo.html","<p>This is the portfolio/self-portrait-logo view.</p>")}]);