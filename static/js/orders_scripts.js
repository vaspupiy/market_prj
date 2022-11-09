window.onload = function () {
    $('.table').on('click','input[type="number"]', function () {
        let t_href = event.target;

        let form_set_name = t_href.name.split('-', 2).join('-'); // находим первую часть названия
        let price_clc = '.' + form_set_name + '-price'  // имя класса где отображается price
        let total_price_clc = '.' + form_set_name + '-total_price'  // имя класса где отображается total_price
        let pre_total_price = parseFloat($(total_price_clc)[0].innerText);  // состояние total_price до клика
        let pre_total_nights = parseFloat($(total_price_clc)[0].innerText);  // состояние total_price до клика

        // состояние total_price после клика = прайс умноженный на число ночей после клика
        let total_price = parseFloat($(price_clc)[0].innerText) * parseFloat(t_href.value);

        // общая стоимость = общая стоимость до клика - total_price до клика + total_price после клика
        let order_total_cost = parseFloat($('.order_total_cost')[0].innerText) - pre_total_price + total_price;

        //  отображаем total_price после клика
        $(total_price_clc)[0].innerText = total_price.toFixed(2);
        //  отображаем общую стоимость после клика
        $('.order_total_cost')[0].innerText = order_total_cost.toFixed(2);

        calculateSumNights();
    });
}

const calculateSumNights = function () {

    let sum = 0;

    $('input[type="number"]').each(function(index, element){
            sum += parseInt(element.value);
        });

    $('.order_total_quantity')[0].innerText = sum;
}