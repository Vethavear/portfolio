const nav = document.querySelector('.nav');
const portfolioProjects = document.querySelectorAll('.portfolioProject');
// portfolioProjects.item(0).children.
const portfolioMenu = document.querySelector('#portfolioMenu');
let scroll_position = 0;
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
    }, 500);
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

portfolioMenu.addEventListener('click', e => {

    if (e.target.classList.contains('portfolioBtn')) {
        filter(e.target.dataset.type);
    }
})


window.addEventListener('scroll', e => {
    scroll_direction = (document.body.getBoundingClientRect()).top > scroll_position ? 'up' : 'down';
    scroll_position = (document.body.getBoundingClientRect()).top;
    if (scroll_direction == 'down') {
        nav.classList.add('hideNav');
    } else {
        nav.classList.remove('hideNav');
    }
});

