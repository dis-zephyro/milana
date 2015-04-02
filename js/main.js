// Подключние Яндекс-Карты

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [45.0122,41.9082],
            zoom: 14
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Я тащусь',
                hintContent: 'Ну давай уже тащи'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });

        myMap.behaviors.disable('scrollZoom');


    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([45.0121,41.9154], {
            balloonContent: '<strong>ул. Пирогова 18/3</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
        .add(new ymaps.Placemark([45.0122,41.9082], {
            balloonContent: '<strong>ул. Тухачевского 20/8</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#735184'
        }))
        .add(new ymaps.Placemark([45.0168,41.9038], {
            balloonContent: '<strong>ул. Тухачевского 21/3</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([45.0028,41.9025], {
            balloonContent: '<strong>ул. Родосская 9</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#330055'
        }))
        .add(new ymaps.Placemark([45.0151,41.9023], {
            balloonContent: '<strong>ул. Тухачевского 26/5</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#a5260a'
        }));

    $('#map1').bind({
        click: function () {

            myMap.destroy();
            myMap = new ymaps.Map('map', {
                center: [45.0121,41.9154], // Новосибирск
                zoom: 16
            });

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/placemark-p18.png',
                // Размеры метки.
                iconImageSize: [255, 109],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-127, -115]
            });

            myMap.behaviors.disable('scrollZoom');
            myMap.geoObjects.add(myPlacemark);
        }
    });

    $('#map2').bind({
        click: function () {

            myMap.destroy();
            myMap = new ymaps.Map('map', {
                center: [45.0122,41.9082], // Новосибирск
                zoom: 16
            });

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/placemark-t20.png',
                iconImageSize: [255, 109],
                iconImageOffset: [-127, -115]
            });

            myMap.behaviors.disable('scrollZoom');
            myMap.geoObjects.add(myPlacemark);
        }
    });

    $('#map3').bind({
        click: function () {

            myMap.destroy();
            myMap = new ymaps.Map('map', {
                center: [45.0168,41.9038], // Новосибирск
                zoom: 16
            });

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/placemark-t21.png',
                iconImageSize: [255, 109],
                iconImageOffset: [-127, -115]
            });

            myMap.behaviors.disable('scrollZoom');
            myMap.geoObjects.add(myPlacemark);
        }
    });

    $('#map4').bind({
        click: function () {

            myMap.destroy();
            myMap = new ymaps.Map('map', {
                center: [45.0028,41.9025], // Новосибирск
                zoom: 16
            });

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/placemark-r9.png',
                iconImageSize: [255, 109],
                iconImageOffset: [-127, -115]
            });

            myMap.behaviors.disable('scrollZoom');
            myMap.geoObjects.add(myPlacemark);
        }
    });

    $('#map5').bind({
        click: function () {

            myMap.destroy();
            myMap = new ymaps.Map('map', {
                center: [45.0151,41.9023], // Новосибирск
                zoom: 16
            });

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/placemark-t26.png',
                iconImageSize: [255, 109],
                iconImageOffset: [-127, -115]
            });

            myMap.behaviors.disable('scrollZoom');
            myMap.geoObjects.add(myPlacemark);
        }
    });
}

$(".policy").fancybox({
    "padding" : 30,
    "maxWidth" : 1200
});

$(".popup").fancybox({
    "padding"  : 0,
    "maxWidth" : '1000',
    "helpers"  : {
        title  : {
            type: 'inside'
        },
        thumbs : {
            width	: 50,
            height	: 50
        }
    }
});

$(".btn-order").fancybox({
    'padding' : 0,
    'closeBtn' : false
});

$('.btn-close').click(function(){
    $.fancybox.close();
});



$(function() {
    $(".btn-up").hide();
    $(window).scroll(function() {
        if($(this).scrollTop() > 50) {
            $('.btn-up').fadeIn();
        } else {
            $('.btn-up').fadeOut();
        }
    });

    $('.btn-up').click(function() {
        $('body,html').animate({scrollTop:0},0);
    });
});

