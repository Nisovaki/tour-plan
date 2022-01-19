ymaps.ready(init);
   function init() {
      var myMap = new ymaps.Map("map", {
         center: [36.98795964, 35.33195151],
         zoom: 16
         
      });
   }

myCircle.events.add('drag', function () {
    // Геобъекты, попадающие в круг, будут красными.
    var objectsInsideCircle = objects.searchInside(myCircle);
    objectsInsideCircle.setOptions({
        preset: 'islands#redIcon',
        fillColor: '#ff001a',
        strokeColor: '#ff001a'
    });

    // Оставшиеся объекты - синими.
    objects.remove(objectsInsideCircle).setOptions({
        preset: 'islands#blueIcon',
        fillColor: '#0081ff',
        strokeColor: '#0081ff'
    });
});
 