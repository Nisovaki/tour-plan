ymaps.ready(init);
   function init() {
      var myMap = new ymaps.Map("map", {
         center: [36.98795964, 35.33195151],
         zoom: 16
         
      });
   };

var myPlacemark = new ymaps.GeoObject({
    geometry: {
        type: "Point",
        coordinates: [36.99, 35.34]
    }
});
var myPlacemark = new ymaps.Placemark([36.99, 35.34]);