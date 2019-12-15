// var marks = [
//     		{
//     			latitude: 59.97,
//     			longitude: 30.31,
//     			hintContent: "ул. Литераторов, д. 19",
//     			balloonContent: "ул. Литераторов, д. 19"
//     		},
//     		{
//     			latitude: 59.94,
//     			longitude: 30.25,
//     			hintContent: "Малый проспект ВО, д 64",
//     			balloonContent: "Малый проспект ВО, д 64"
//     		},
//     		{
//     			latitude: 59.93,
//     			longitude: 30.34,
//     			hintContent: "наб. реки Фонтанки, д. 56",
//     			balloonContent: "наб. реки Фонтанки, д. 56"
//     		}
//     	];


// function ready() {
//     ymaps.ready(init);
//     function init(){
//         var myMap = new ymaps.Map("map", {
//             center: [59.94, 30.32],
//             zoom: 7
            
//         });
//         myMap.behaviors.disable('ScrollZoom');

//     }
//     myMap.behaviors.disable("scrollZoom");
// };



// document.addEventListener("DOMContentLoaded", ready);







ymaps.ready(function () {

        var myMap = new ymaps.Map("map", {
            center: [55.764400, 37.595862],
            zoom: 10

        }, {

            searchControlProvider: 'yandex#search'

        }),



        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

            hintContent: 'Собственный значок метки',

        }, {

            iconLayout: 'default#image',

            iconImageHref: '/icons/map-marker.svg',

            iconImageSize: [30, 42],

            iconImageOffset: [-30, -42]

        }),



        myPlacemarkWithContent = new ymaps.Placemark([55.846024, 37.460632], {

            hintContent: 'Открыто с 8 до 22',

            balloonContent: 'Открыто с 8 до 22'

        }, {

            iconLayout: 'default#imageWithContent',

            iconImageHref: '/images/map-marker.svg',

            iconImageSize: [30, 42],

            iconImageOffset: [-24, -24],

            iconContentOffset: [15, 15]

        }),

        myPlacemarkWithContent2 = new ymaps.Placemark([55.751475, 37.618248], {

            hintContent: 'Открыто с 9 до 21',

            balloonContent: 'Открыто с 9 до 21'

        }, {

            iconLayout: 'default#imageWithContent',

            iconImageHref: '/images/map-marker.svg',

            iconImageSize: [30, 42],

            iconImageOffset: [-24, -24],

            iconContentOffset: [15, 15]

        });

        myPlacemarkWithContent3 = new ymaps.Placemark([55.612487, 37.569466], {

            hintContent: 'Открыто с 9 до 21',

            balloonContent: 'Открыто с 9 до 21'

        }, {

            iconLayout: 'default#imageWithContent',

            iconImageHref: '/images/map-marker.svg',

            iconImageSize: [30, 42],

            iconImageOffset: [-24, -24],

            iconContentOffset: [15, 15]

        });
        myPlacemarkWithContent4 = new ymaps.Placemark([55.839352, 37.655372], {

            hintContent: 'Открыто с 9 до 21',

            balloonContent: 'Открыто с 9 до 21'

        }, {


            iconLayout: 'default#imageWithContent',

            iconImageHref: '/images/map-marker.svg',

            iconImageSize: [30, 42],

            iconImageOffset: [-24, -24],

            iconContentOffset: [20, 20]

        });
        myPlacemarkWithContent5 = new ymaps.Placemark([55.757392, 37.823924], {

            hintContent: 'Открыто с 9 до 21',

            balloonContent: 'Открыто с 9 до 21'

        }, {

            iconLayout: 'default#imageWithContent',

            iconImageHref: '/images/map-marker.svg',

            iconImageSize: [30, 42],

            iconImageOffset: [-24, -24],

            iconContentOffset: [15, 15]

        });


    myMap.geoObjects

        .add(myPlacemark)

        .add(myPlacemarkWithContent)

        .add(myPlacemarkWithContent2)

        .add(myPlacemarkWithContent3)

        .add(myPlacemarkWithContent4)

        .add(myPlacemarkWithContent5);


        myMap.behaviors.disable("scrollZoom");
});





document.addEventListener("DOMContentLoaded", ready);