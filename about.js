window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) { // Change color when scrolled more than 50px
        header.style.backgroundColor = 'rgb(18, 18, 62)';
    } else {
        header.style.backgroundColor = 'rgb(0,0,33)';
    }
});