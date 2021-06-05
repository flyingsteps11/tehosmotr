$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(".menu__box").on("click", "a", function (event) {
        $('#menu__toggle').prop('checked', false);
    });
    $("#datepicker").datepicker({
        dateFormat: "yy-mm-dd",
        minDate: new Date($('#hiddendelivdate').val()),
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    });
    $(".phone_mask").mask("+7(999)999-99-99");

    $('.phone button, .first-stage__btn, .price_btn').on('click', () => {
        document.body.style.overflowY = 'hidden';
        document.querySelector('html').style.overflowY = 'hidden';
        $('#popup').addClass('overlay-visible');
    });
    $('#popup .close').click(() => {
        document.body.style.overflowY = 'auto';
        document.querySelector('html').style.overflowY = 'auto';
        $('#popup').removeClass('overlay-visible');
    });

    $(document).mouseup(function (e) {
        var container = $("#popup");
        if (container.has(e.target).length === 0) {
            $('#popup').removeClass('overlay-visible');
            document.body.style.overflowY = 'auto';
            document.querySelector('html').style.overflowY = 'auto';
        }
    });

});