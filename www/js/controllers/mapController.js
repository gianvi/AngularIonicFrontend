angular.module('starter').controller('MapController',
  [ '$scope',
    '$cordovaGeolocation',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    'LocationsService',
    'InstructionsService',
    'CafesService',
    'DistributionsService',
    
    function(
      $scope,
      $cordovaGeolocation,
      $stateParams,
      $ionicModal,
      $ionicPopup,
      LocationsService,
      InstructionsService,
      CafesService,
      DistributionsService
      ) {

      /**
       * Once state loaded, get put map on scope.
       */
      $scope.$on("$stateChangeSuccess", function() {

        $scope.locations = LocationsService.savedLocations;
        $scope.newLocation;
        
        $scope.distributions = DistributionsService.savedDistributions;
        $scope.newDistribution;
        
        $scope.cafes = CafesService.savedCafes;
        $scope.newCafe;
        
        

        if(!InstructionsService.instructions.newLocations.seen) {

          var instructionsPopup = $ionicPopup.alert({
            title: 'Add Locations',
            template: InstructionsService.instructions.newLocations.text
          });
          instructionsPopup.then(function(res) {
            InstructionsService.instructions.newLocations.seen = true;
            });

        }

        $scope.map = {
          defaults: {
            //tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        	//  tileLayer: 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
              tileLayer: 'https://{s}.tiles.mapbox.com/v3/examples.map-i87786ca/{z}/{x}/{y}.png',
            //    attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>',

        	maxZoom: 18,
            zoomControlPosition: 'bottomleft'
          },
          markers : {},
          events: {  
            map: {
              enable: ['context'],
              logic: 'emit'
            }
          }
        };

        $scope.goTo3();

      });

      var Location = function() {
        if ( !(this instanceof Location) ) return new Location();
        this.lat  = "";
        this.lng  = "";
        this.name = "";
      };

      $ionicModal.fromTemplateUrl('templates/addLocation.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
          $scope.modal = modal;
        });

      /**
       * Detect user long-pressing on map to add new location
       */
      $scope.$on('leafletDirectiveMap.contextmenu', function(event, locationEvent){
        $scope.newLocation = new Location();
        $scope.newLocation.lat = locationEvent.leafletEvent.latlng.lat;
        $scope.newLocation.lng = locationEvent.leafletEvent.latlng.lng;
        $scope.modal.show();
      });

      $scope.saveLocation = function() {
        LocationsService.savedLocations.push($scope.newLocation);
        $scope.modal.hide();
        $scope.goTo(LocationsService.savedLocations.length - 1);
      };
      
     /* $scope.saveDistribution = function() {
    	DistributionsService.savedDistributions.push($scope.newDistribution);  
    	$scope.modal.hide();
    	$scope.goTo2(DistributionsService.savedDistributions.length - 1)
      };*/

      /**
       * Center map on specific saved location
       * @param locationKey
       */
      $scope.goTo = function(locationKey) {

        var location = LocationsService.savedLocations[locationKey];

        $scope.map.center  = {
          lat : location.lat,
          lng : location.lng,
          zoom : 12
        };

        $scope.map.markers[locationKey] = {
          lat:location.lat,
          lng:location.lng,
          message: location.name,
          focus: true,
          draggable: false
        };

      };
      
      /**
       * Center map on specific saved distribution
       * @param locationKey
       */
      $scope.goTo2 = function(distributionKey) {

        var distribution = DistributionsService.savedDistributions[distributionKey];

        $scope.map.center  = {
          lat : distribution.lat,
          lng : distribution.lng,
          zoom : 12
        };

        $scope.map.markers[distributionKey] = {
          lat:distribution.lat,
          lng:distribution.lng,
          message: distribution.saved_name,
          focus: true,
          draggable: false
        };

      };
      
      
      $scope.goTo3 = function(){
          
    	 
    	  
          
    	  var business = cafesObj.savedBusinesses;


          // THIS IS NEW
          var geojsonLayerCafes = new L.geoJson(data, {
              filter: function(feature, layer) {
                  return feature.properties.BusType == "Cafe";
              }
          });

          var geojsonLayerOthers = L.geoJson(data, {
              filter: function(feature, layer) {
                  return feature.properties.BusType != "Cafe";
              }
          });
          
          var geojsonLayerAll = L.geoJson(states, {
        	    style: function(feature) {
        	        switch (feature.properties.BusType) {
        	            case 'Cafe': return {color: "#ff0000"};
        	            default:   return {color: "#0000ff"};
        	        }
        	    }
        	}).addTo(map);
          
          geojsonLayerAll.addGeoJSON(data);

          // Add the GeoJSON layer
          map.addLayer(geojsonLayer);

          // THIS IS NEW
          //cafes.addTo(map)
          //others.addTo(map)
          
          
      }

  

      /**
       * Center map on user's current position
       */
      $scope.locate = function(){

        $cordovaGeolocation
          .getCurrentPosition()
          .then(function (position) {
            $scope.map.center.lat  = position.coords.latitude;
            $scope.map.center.lng = position.coords.longitude;
            $scope.map.center.zoom = 15;

            $scope.map.markers.now = {
              lat:position.coords.latitude,
              lng:position.coords.longitude,
              message: "You Are Here",
              focus: true,
              draggable: false
            };

          }, function(err) {
            // error
            console.log("Location error!");
            console.log(err);
          });

      };

    }]);