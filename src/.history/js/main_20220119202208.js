const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [36.98795964, 35.33195151],
    zoom: 16
      }, {
    searchControlProvider: 'yandex#search'
      }),
    myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point",
        coordinates: [36.98795964, 35.33195151]
                }});
                myMap.geoObjects
                    .add(myGeoObject)
                    .add(new ymaps.Placemark([36.98795964, 35.33195151], {
                        iconCaption: 'GRAND HILTON HOTEL'
                    }));
}

