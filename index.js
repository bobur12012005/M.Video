// a
let top_cont = document.querySelector('.top')
let container = document.querySelector('.container')

// overheader
let over_header = document.createElement('div')
let over_left = document.createElement('div')
let over_right = document.createElement('div')
let over_city = document.createElement('a')
let over_shop = document.createElement('a')
let over_delivery = document.createElement('a')
let over_click = document.createElement('a')
let over_club = document.createElement('a')
let over_business = document.createElement('a')
let over_phone = document.createElement('a')
let img_phone = document.createElement('img')
let span_phone = document.createElement('a')

// header
let header = document.createElement('header')
let logo = document.createElement('img')
let catalog = document.createElement('button')
let catalog_span = document.createElement('span')
let catalog_img = document.createElement('img')
let search_div = document.createElement('div')
let search_inp = document.createElement('input')
let search_btn = document.createElement('button')
let search_btn_img = document.createElement('img')
let div_status = document.createElement('div')
let status_img = document.createElement('img')
let status_span = document.createElement('span')
let div_enterance = document.createElement('div')
let enterance_img = document.createElement('img')
let enterance_span = document.createElement('span')
let div_comparison = document.createElement('div')
let comparison_img = document.createElement('img')
let comparison_span = document.createElement('span')
let div_liked = document.createElement('div')
let liked_img = document.createElement('img')
let liked_span = document.createElement('span')
let div_basket = document.createElement('div')
let basket_img = document.createElement('img')
let basket_span = document.createElement('span')

// underheader
let db = {
    sites: [
        "все акции",
        "скидки на подарки",
        "samsung s24 + кешбэк 10 000 ₽",
        "ноутбуки",
        "успей купить",
        "холодильники",
        "телевизоры",
        "premium",
        "стиральные машины",
        "красота и здороье",
        "м.мерч",
        "все товары"
    ]
}
let under_header = document.createElement('div')
function put(arr, place) {
    for (let item of arr) {
        let span = document.createElement('span')
        span.classList.add('scrolling_span')
        span.innerHTML = item
        place.append(span)
    }
}

// b
// overheader
over_header.classList.add('over_header')
img_phone.classList.add('img_phone')
over_right.classList.add('over_right')
over_left.classList.add('over_left')
over_phone.classList.add('over_phone')
over_city.classList.add('over_city')
over_city.innerText = 'Москва'
over_shop.innerText = 'Магазины'
over_delivery.innerText = 'Доставка'
over_click.innerText = 'Блог <<М.Клик>>'
over_club.innerText = 'M.Club'
over_business.innerText = 'Для бизнеса'
span_phone.innerText = '8-800-600-7775'
img_phone.src = './img/phone.png'

// header 
header.classList.add('head')
logo.classList.add('logo')
catalog.classList.add('catalog')
search_div.classList.add('search_div')
search_inp.classList.add('search_inp')
search_btn.classList.add('search_btn')
search_btn_img.classList.add('serach_btn_img')
div_status.classList.add('header_oth')
div_enterance.classList.add('header_oth')
div_comparison.classList.add('header_oth')
div_liked.classList.add('header_oth')
div_basket.classList.add('header_oth')
status_img.classList.add('header_oth_img')
enterance_img.classList.add('header_oth_img')
comparison_img.classList.add('header_oth_img')
liked_img.classList.add('header_oth_img')
basket_img.classList.add('header_oth_img')
status_span.classList.add('heder_oth_span')
enterance_span.classList.add('heder_oth_span')
comparison_span.classList.add('heder_oth_span')
liked_span.classList.add('heder_oth_span')
basket_span.classList.add('heder_oth_span')
catalog_img.classList.add('catalog_img')
status_span.innerText = 'Статус заказа'
enterance_span.innerText = 'Войти'
comparison_span.innerText = 'Сравнение'
liked_span.innerText = 'Избранное'
basket_span.innerText = 'Корзина'
catalog_span.innerText = 'КАТАЛОГ'
catalog_img.src = './img/three_lines.png'
logo.src = './img/logo.png'
status_img.src = './img/status.png'
enterance_img.src = './img/enterance.png'
comparison_img.src = './img/comparison.png'
liked_img.src = './img/liked.png'
basket_img.src = './img/basket.png'
search_btn_img.src = './img/search.png'
search_inp.placeholder = 'Искать топ скидки до 50%'

//underheader
under_header.classList.add('scrolling_underheader')

// c
top_cont.append(over_header)
over_header.append(over_left, over_right)
over_left.append(over_city, over_shop, over_delivery)
over_right.append(over_click, over_club, over_business, over_phone)
over_phone.append(img_phone, span_phone)
container.append(header, under_header)
header.append(logo, catalog, search_div, div_status, div_enterance, div_comparison, div_liked, div_basket)
catalog.append(catalog_img, catalog_span)
search_div.append(search_inp, search_btn)
search_btn.append(search_btn_img)
div_status.append(status_img, status_span)
div_enterance.append(enterance_img, enterance_span)
div_comparison.append(comparison_img, comparison_span)
div_liked.append(liked_img, liked_span)
div_basket.append(basket_img, basket_span)
put(db.sites, under_header)









let products_cont = document.querySelector('.products_container')
let box = document.createElement('div')
let box_top = document.createElement('div')
let box_top_l = document.createElement('span')
let box_top_r = document.createElement('span')
let box_img = document.createElement('img')
let box_img_name = document.createElement('span')
let box_img_rates = document.createElement('div')
let rate1 = document.createElement('span')
let rate2 = document.createElement('span')
let prices = document.createElement('div')
let price1 = document.createElement('span')
let price2 = document.createElement('span')
let payback = document.createElement('span')
let box_btns = document.createElement('div')
let buy_btn = document.createElement('button')
let like_btn = document.createElement('button')
let rate_btn = document.createElement('button')
let buy_img = document.createElement('img')
let like_img = document.createElement('img')
let rate_img = document.createElement('img')

box.classList.add('box')
box_top.classList.add('box_top')
box_top_l.classList.add('box_top_l')
box_top_r.classList.add('box_top_r')
box_img.classList.add('box_img')
box_img_rates.classList.add('box_img_rates')
rate1.classList.add('rate1')
rate2.classList.add('rate2')
box_img_name.classList.add('box_img_name')
prices.classList.add('prices')
price1.classList.add('price1')
price2.classList.add('price2')
payback.classList.add('payback')
box_btns.classList.add('box_btns')
buy_img.classList.add('blr_img')
like_img.classList.add('blr_img')
rate_img.classList.add('blr_img')

box_img.src = './img/product2.png'
buy_img.src = './img/basket.png'
like_img.src = './img/liked.png'
rate_img.src = './img/comparison.png'

box_img_name.innerText = 'Фен Carrera №535'
box_top_l.innerText = 'Топ-скидки до 50%'
box_top_r.innerHTML = '>'
rate1.innerText = '★5.0'
rate2.innerText = '8 отзывов'
price1.innerText = '4 899 ₽'
price2.innerText = '6 999'
payback.innerText = 'М.кешбэк + 200'

products_cont.append(box)
box.append(box_top, box_img, box_img_name, box_img_rates, prices, payback, box_btns)
box_top.append(box_top_l, box_top_r)
box_img_rates.append(rate1, rate2)
prices.append(price1, price2)
box_btns.append(buy_btn, like_btn, rate_btn)
buy_btn.append(buy_img)
like_btn.append(like_img)
rate_btn.append(rate_img)