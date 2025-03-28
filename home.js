    
        var options = {
            strings: ['Software Developer', 'MERN Stack Developer'],
            typeSpeed: 100,
            backSpeed: 25,
            backDelay: 1000,
            startDelay: 500,
            loop: true
        };

        var typed = new Typed('#element', options);

        window.addEventListener('scroll', function() {
            var header = document.querySelector('header');
            if (window.scrollY > 50) { // Change color when scrolled more than 50px
                header.style.backgroundColor = 'rgb(18, 18, 62)';
            } else {
                header.style.backgroundColor = 'rgb(0,0,33)';
            }
        });

        

        function reload(){
            location.reload();
        }
    