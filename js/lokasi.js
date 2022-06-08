function initMap() {
    let map;
    let style = [
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "saturation": 100
          },
          {
            "lightness": 100
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.school",
        "elementType": "labels",
        "stylers": [
          {
            "color": "#ff5a3d"
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "poi.school",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.sports_complex",
        "stylers": [
          {
            "color": "#27abec"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.sports_complex",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#27abec"
          },
          {
            "visibility": "on"
          }
        ]
      }
    ]
    let position =  { lat: -0.353013, lng: 102.302829 };
    let styled = new google.maps.StyledMapType(style, {name: "Styled Map"});
        
    map = new google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 16,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        },
        scaleControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        zoomControl: false,
        scrollwheel: false,
        fullscreenControl: true
    });
    map.mapTypes.set('map_style', styled);
    map.setMapTypeId('map_style');

    let icon = "https://indahady.my.id/image/location.png";
    let marker = new google.maps.Marker({
          position,
          map: map,
          icon,
          animation: google.maps.Animation.BOUNCE,
          title: 'Simple Marker - java-sc.blogspot.com'
    });
}