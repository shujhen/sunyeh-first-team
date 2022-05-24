// 翻背面
let but1 = document.querySelectorAll('.button1');
let but2 = document.querySelectorAll('.button2');
let but3 = document.querySelectorAll('.button3');
let but4 = document.querySelectorAll('.button4');
let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');
let card4 = document.querySelector('.card4');
let card_back1 = document.querySelector('.card-back1');
let card_back2 = document.querySelector('.card-back2');
let card_back3 = document.querySelector('.card-back3');
let card_back4 = document.querySelector('.card-back4');

but1.forEach((e) => {
    console.log(e);
    e.addEventListener('click', function () {
        card1.classList.add('cardk')
        card_back1.classList.add('cardS')
        card_back1.classList.add('card-backNew')
        card_back1.style.marginTop = '0 0 0 0!important'
    })
})

but2.forEach((e) => {
    console.log(e);
    e.addEventListener('click', function () {
        card2.classList.add('cardk')
        card_back2.classList.add('cardS')
        card_back2.classList.add('card-backNew')
        card_back2.style.marginTop = '0.5rem 0 0 0!important'
    })
})

but3.forEach((e) => {
    console.log(e);
    e.addEventListener('click', function () {
        card3.classList.add('cardk')
        card_back3.classList.add('cardS')
        card_back3.classList.add('card-backNew')
        card_back3.style.marginTop = '0.5rem 0 0 0!important'
    })
})

but4.forEach((e) => {
    console.log(e);
    e.addEventListener('click', function () {
        card4.classList.add('cardk')
        card_back4.classList.add('cardS')
        card_back4.classList.add('card-backNew')
        card_back4.style.marginTop = '0.5rem 0 0 0!important'
    })
})

// 翻回正面
let back1 = document.querySelector('.back');
let back2 = document.querySelector('.back2');
let back3 = document.querySelector('.back3');
let back4 = document.querySelector('.back4');

back1.addEventListener('click', function(){
    card1.classList.remove('cardk')
    card_back1.classList.remove('cardS')
    card_back1.classList.remove('card-backNew')
    card_back1.style.marginTop = '0.5rem 0 0 0!important'
});

back2.addEventListener('click', function(){
    card2.classList.remove('cardk')
    card_back2.classList.remove('cardS')
    card_back2.classList.remove('card-backNew')
    card_back2.style.marginTop = '0.5rem 0 0 0!important'
});

back3.addEventListener('click', function(){
    card3.classList.remove('cardk')
    card_back3.classList.remove('cardS')
    card_back3.classList.remove('card-backNew')
    card_back3.style.marginTop = '0.5rem 0 0 0!important'
});

back4.addEventListener('click', function(){
    card4.classList.remove('cardk')
    card_back4.classList.remove('cardS')
    card_back4.classList.remove('card-backNew')
    card_back4.style.marginTop = '0.5rem 0 0 0!important'
});