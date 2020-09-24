const navSlide = () => {
    const info = document.querySelector('.info'); 
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li');

    info.addEventListener('click', ()  => {
        nav.classList.toggle('nav-active');
        console.log(navLinks);

        info.classList.toggle('toggle');
        
    });
}

navSlide();