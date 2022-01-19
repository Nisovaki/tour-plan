function init() {
   var myMap = new ymaps.Map('map', {
      center: [36.98795964, 35.33195151],
      zoom: 16,
      controls: []

   myGeoObject = new ymaps.GeoObject({
      geometry: {
      type: "Point",
      coordinates: [36.98795964, 35.33195151]
         }});
      myMap.geoObjects
               .add(myGeoObject)
               .add(new ymaps.Placemark([55.790139, 37.814052], {
                  iconCaption: 'Очень длиннный, но невероятно интересный текст'
               }
    });
    
    // Создадим экземпляр элемента управления «поиск по карте»
    // с установленной опцией провайдера данных для поиска по организациям.
    var searchControl = new ymaps.control.SearchControl({
        options: {
            provider: 'yandex#search'
        }
    });
    
    myMap.controls.add(searchControl);
    
    // Программно выполним поиск определённых кафе в текущей
    // прямоугольной области карты.
    searchControl.search('Hotel Bosnali - Special Class');
}

ymaps.ready(init);

