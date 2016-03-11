(function () {
    var slider = new fz.Scroll('.ui-slider', {
        role: 'slider',
        indicator: true,
        autoplay: true,
        interval: 3000
    });

    slider.on('beforeScrollStart', function (fromIndex, toIndex) {
        console.log(fromIndex, toIndex)
    });

    slider.on('scrollEnd', function (cruPage) {
        console.log(cruPage)
    });
})();