let burger = document.querySelector('.burger');
let nav = document.querySelector('.archans');
let nava = document.querySelectorAll('.navlink');

burger.addEventListener('click', ()=> {
    nav.classList.toggle('active')
});

nava.forEach(link => {
    link.addEventListener('click', ()=> {
        nav.classList.remove('active')
    })
})