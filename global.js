<<<<<<< HEAD
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 75; // Adjust for header height
            const topPosition = targetElement.offsetTop - offset;

            window.scrollTo({
                top: topPosition,
                behavior: 'smooth' // Smooth scrolling
            });
        }
    });
});


document.querySelectorAll('footer a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 75; // Adjust for header height (can adjust depending on footer position)
            const topPosition = targetElement.offsetTop - offset;

            window.scrollTo({
                top: topPosition,
                behavior: 'smooth' // Smooth scrolling
            });
        }
    });
});



new Typed('#element', {
    strings: ['Web Developer', 'Graphic Designer', 'AI Enthusiast'],
    typeSpeed: 50,
    loop: true
});
=======
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 75; // Adjust for header height
            const topPosition = targetElement.offsetTop - offset;

            window.scrollTo({
                top: topPosition,
                behavior: 'smooth' // Smooth scrolling
            });
        }
    });
});


document.querySelectorAll('footer a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 75; // Adjust for header height (can adjust depending on footer position)
            const topPosition = targetElement.offsetTop - offset;

            window.scrollTo({
                top: topPosition,
                behavior: 'smooth' // Smooth scrolling
            });
        }
    });
});



new Typed('#element', {
    strings: ['Web Developer', 'Graphic Designer', 'AI Enthusiast'],
    typeSpeed: 50,
    loop: true
});
>>>>>>> c12eb2c74f7e5a3975138e9660a7a3effafe2f89
