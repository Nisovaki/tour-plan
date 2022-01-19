ymaps.ready(init);
   function init() {
      var myMap = new ymaps.Map("map", {
         center: [36.98795964, 35.33195151],
         zoom: 16
         
      });
   }

var myPlacemark = new ymaps.GeoObject({
    geometry: {
        type: "Point",
        coordinates: [55.76, 37.56]
    }
});
var myPlacemark = new ymaps.Placemark([55.8, 37.6]);