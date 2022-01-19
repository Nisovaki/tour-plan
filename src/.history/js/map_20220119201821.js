ymaps.ready(init);

function init() {
var myMap = new ymaps.Map("map", {
            center: [36.98795964, 35.33195151],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
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

