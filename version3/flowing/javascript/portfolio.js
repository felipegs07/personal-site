class portfolio {
    constructor(){
        let ajax = new XMLHttpRequest();
        let projects = [];
        ajax.open("GET", "/projects.json", true);
        ajax.send();
        ajax.onreadystatechange = () => {
            if(ajax.readyState == 4 && ajax.status == 200){
                let data = JSON.parse(ajax.responseText);
                for(let i = 0; i < data.projects.length; i++){
                    projects.push(data.projects[i]);
                }
                this.loadProjects(projects);
            }
        }
    }

    loadProjects(projects){
        const portfolioSection = document.querySelector('.content-box__slider');
        portfolioSection.innerHTML = this.createMarkupProjects(projects);
    }

    createMarkupProjects(projects){
        return projects.map(project => `
            <article class="project-item project-item--white">
                <img class="project-item__image" src="${project.image}" alt="${project.alt}">
                <h5 class="font-xs project-item__title">${project.title}</h5>
                <a href="${project.link}" class="btn btn--secondary" target="_blank">ver projeto</a>
            </article>`).join('');
    } 
}

document.addEventListener('DOMContentLoaded', () => {
    new portfolio();
});

//<a href="${project.link}" class="btn-project" target="_blank">ver projeto</a>