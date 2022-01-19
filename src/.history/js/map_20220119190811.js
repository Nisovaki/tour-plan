ymaps.ready(init);
   function init() {
      var myMap = new ymaps.Map("map", {
         center: [36.98795964, 35.33195151],
         zoom: 16
         
      });
   }
var myGeoObject = new ymaps.GeoObject({
    geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [55.8, 37.8] // координаты точки
    }
});