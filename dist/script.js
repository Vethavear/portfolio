const nav = document.querySelector('.nav');
const portfolioProjects = document.querySelectorAll('.portfolioProject');
const portfolioMenu = document.querySelector('.portfolioMenu');
const burgerIcon = document.querySelector('.burgerIcon');
const burger = document.querySelector('.burger');
let scroll_position = 0;
let projectsVisible = false;
let scroll_direction;


const hideProject = el => {
    el.classList.add('hideProject');
    el.classList.add('removeOpacity');
    const projectChildren = el.children;
    for (i = 0; i < projectChildren.length; i++) {
        projectChildren.item(i).classList.add('removeOpacity');
    }
}

const showProject = el => {
    el.classList.remove('hideProject');
    el.classList.remove('removeOpacity');
    const projectChildren = el.children;
    setTimeout(() => {
        for (i = 0; i < projectChildren.length; i++) {
            projectChildren.item(i).classList.remove('removeOpacity');
        }
    }, 100);
}

const filter = (type) => {

    if (type == 'all') {
        portfolioProjects.forEach(project => {
            showProject(project);
        })
    } else {
        portfolioProjects.forEach(project => {
            if (project.dataset.type != type) {
                hideProject(project);
            } else {
                showProject(project);
            }
        })
    }
}

const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const slideNav = () => {
    scroll_direction = (document.body.getBoundingClientRect()).top > scroll_position ? 'up' : 'down';
    scroll_position = (document.body.getBoundingClientRect()).top;
    if (scroll_direction == 'down') {
        nav.classList.add('hideNav');
    } else {
        nav.classList.remove('hideNav');
    }
}

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if (isMobile.any()) {
} else {
    window.addEventListener('scroll', slideNav);
}

portfolioMenu.addEventListener('click', e => {
    if (e.target.classList.contains('portfolioBtn')) {
        filter(e.target.dataset.type);
    }
})
burger.addEventListener('click', e => {
    nav.classList.toggle('showMenu');
    burger.classList.toggle('hideLines');

})
nav.addEventListener('click', e => {
    nav.classList.toggle('showMenu');
    burgerIcon.classList.toggle('hide');
    burger.classList.toggle('hideLines');

})
$('.link a, .link').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100

        },
            800
        );
    }
});