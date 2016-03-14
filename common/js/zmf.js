function bindLink() {
    $('.ui-grid-full li,.ui-list li,.ui-row li,.ui-avatar,.ui-col,.ui-slider-content li,.ui-btn-wrap').unbind('click').click(function () {
        if ($(this).attr('data-href')) {
            if($(this).attr('data-href')=='#'){
                alert('请在data-href中指定链接');
                return false;
            }else{
                location.href = $(this).attr('data-href');
            }            
        }
    });
}

if ($('.ui-slider').length > 0) {
    var slider = new fz.Scroll('.ui-slider', {
        role: 'slider',
        indicator: true,
        autoplay: true,
        interval: 3000
    });
    slider.on('beforeScrollStart', function (fromIndex, toIndex) {

    });
    slider.on('scrollEnd', function (cruPage) {

    });
}

/*搜索*/
$('.ui-searchbar').tap(function () {
    $('.ui-searchbar-wrap').addClass('focus');
    $('.ui-searchbar-input input').focus();
});
$('.ui-searchbar-cancel').tap(function () {
    $('.ui-searchbar-wrap').removeClass('focus');
});
/*导航条上菜单按钮*/
$('.fa-list').unbind('tap').tap(function(){
    var _dom=$('#header-scroller');
    var _dom2=$('#body-cover');
    if(_dom.css('display')=='none'){
        _dom.show().animate({top:0},800); 
        if(!_dom2.length){
            $('body').append('<div class="body-cover" id="body-cover"></div>');
        }
    }else{
        _dom.hide().animate({top:'-2000'},300); 
        _dom2.remove();
    }      
})
/*购房直通车的条件筛选*/
$(".condition-item").unbind('tap').tap(function () {
    var _dom = $(this);
    var _type = _dom.attr('data-type');
    var _value = _dom.attr('data-value');
    if (!_type) {
        return false;
    }
    _dom.parent('.ui-btn-wrap').children('.condition-item').each(function () {
        $(this).removeClass('active');
    });
    _dom.addClass('active');
    $('#condition-' + _type).val(_value);
});
$('.condition-reset').unbind('tap').tap(function () {
    $(".condition-item").each(function () {
        $(this).removeClass('active');
    });
    $('#condition-area').val('');
    $('#condition-type').val('');
    $('#condition-apartment').val('');
    $('#condition-tag').val('');
})
bindLink();