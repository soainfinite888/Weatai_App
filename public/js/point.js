var map;
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: new google.maps.LatLng(24.795296, 120.994722), //地圖起始中心
          mapTypeId: 'roadmap'
        });

        //var URL = 'https://localhost:9292/' //網址 上傳時更動
        //var iconBase = URL + 'public/img/icon'; //icon圖片放的地方 
        var iconBase = '/img/icon/'
        var icons = {  <!--地圖起始中心-->
          parking: {
            icon: iconBase + 'weather_sunny.png' 
          },
          library: {
            icon: iconBase + 'weather_typhoon.png'
          },
          info: {
            icon: iconBase + 'weather_smallrainy.png'
          }
        };

        function addMarker(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        }

        var features = [
          {
            position: new google.maps.LatLng(24.794443, 120.993240),
            type: 'info'
          }, {
            position: new google.maps.LatLng(24.794920, 120.992167),
            type: 'info'
          }, {
            position: new google.maps.LatLng(24.795563, 120.989721),
            type: 'info'
          }, {
            position: new google.maps.LatLng(24.795296, 120.994720),
            type: 'info'
          }, {
            position: new google.maps.LatLng(24.795296, 120.994722),
            type: 'info'
          }, {
            position: new google.maps.LatLng(24.795296, 120.994723),
            type: 'info'
          }, {
            position: new google.maps.LatLng(24.795296, 120.994722),
            type: 'info'
          }, {
            position: new google.maps.LatLng(24.795296, 120.994721),
            type: 'info'
          }, {
            position: new google.maps.LatLng(24.795296, 120.994722),
            type: 'info'
          }, {
            position: new google.maps.LatLng(24.795296, 120.994726),
            type: 'info'
          }, {
            position: new google.maps.LatLng(24.795296, 120.994724),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
            type: 'library'
          }
        ];

        for (var i = 0, feature; feature = features[i]; i++) {
          addMarker(feature);
        }
      }