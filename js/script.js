var  markers = [
    {
         coords:{lat:-34.0972041,lng:18.377911700000027},
         iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
         //iconImage:'beer.png',
         content:'<h1>Noordhoek Farm Village</h1>',
         label:'Noordhoek Farm Village'
    },
    {
         coords:{lat:-34.099052214344724,lng:18.38208496570587},
         iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
         content:'<h1>Cape Point Vineyards</h1>',
         label:'Cape Point Vineyards'
    },
    {
         coords:{lat:-34.09687110947399,lng:18.372305631637573},
         iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
         content:'<h1>Jakes Steakhouse</h1>',
         label:'Jakes Steakhouse'
    },
    {
         coords:{lat:-34.09827928340744,lng:18.363819122314453},
         iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
         content:'<h1>Aegir Brewery</h1>',
         label:'Aegir Brewery'
    },
    {
         coords:{lat:-34.098230419720146,lng:18.35763931274414},
         iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
         content:'<h1>Noordhoek Beach</h1>',
         label:'Noordhoek Beach'
    },
    {
         coords:{lat:-34.096759,lng:18.352614},
         iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
         content:'<h1>The Hoek Surf Break</h1>',
         label:'The Hoek Surf Break'
    },
  ];


function initMap(){
    // Map options
    var options = {
        zoom: 15,
        center: {lat:-34.0972041,lng:18.377911700000027}
    }
    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Array of markers
  
   // Loop through the markers
   // data loop for (var m in markers) {
  
  $.each(markers, function(i,v){
      addMarker(markers[i], i);
  });
  var markersArr = [];

  function addMarker(location, i) {
      var marker = new google.maps.Marker({
          position: location.coords,
          map: map,
          icon:location.iconImage
      });

      var infoWindow = new google.maps.InfoWindow({
        content: location.content
       });
       marker.addListener('click', function() {
          infoWindow.open(map, marker);
          marker.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(() => {
            marker.setAnimation(null);     
          }, 2000);
      });
  }
 }
 

 var keywords = [];


$.each(markers, function(i,v){
    if (markers[i]['label'] != undefined)
    keywords.push(markers[i]['label']);
});


var viewModel = {
    keywords: keywords,
    multiComplete: new examples.MultiCompleteModel(keywords),
    //levenshtein: new examples.LevenshteinModel(keywords),
    flashWord: ko.observable(),
    //timeComplete: new examples.TimeComplete()
};

viewModel.flashWord.subscribe(function (newValue) {
    setTimeout(function () {
        if (viewModel.flashWord() === newValue) {
            viewModel.flashWord('');
        }
    }, 1000);
});

ko.applyBindings(viewModel, document.getElementById('application'));
