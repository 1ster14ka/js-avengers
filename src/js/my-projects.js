`use strict`

const projects = document.querySelectorAll(".project-card");
const btnLoadMore = document.querySelector(".js-load-more");
const btnShowLess = document.querySelector(".js-show-less");
const sectionTitle = document.querySelector(".catalog-title");

let visibleProjects = 3;

function showProjects() {
    projects.forEach((project, index) => {
        if (index < visibleProjects) {
            project.classList.add('visible')
        } else {
            project.classList.remove('visible')
        }
    });

    if (visibleProjects >= projects.length) {
        btnLoadMore.style.display = 'none';
        btnShowLess.style.display = 'block';
    } else {
        btnLoadMore.style.display = 'block';
        btnShowLess.style.display = 'none';
    }
}

btnLoadMore.addEventListener("click", () => {
    visibleProjects += 3;
    showProjects();
});

btnShowLess.addEventListener("click", () => {
    visibleProjects = 3;
    showProjects();

    sectionTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

showProjects();
