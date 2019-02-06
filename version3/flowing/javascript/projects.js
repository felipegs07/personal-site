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

        loadProjects(projects);
    }
}

function loadProjects(projects){
    const portfolioSection = document.querySelector('.content-box__slider');
    portfolioSection.innerHTML = createMarkupProjects(projects);
}

function createMarkupProjects(projects){
    return projects.map(project => `
        <article class="project-item">
            <img class="project-item__image" src="${project.image}">
            <h5 class="font-xs project-item__title">${project.title}</h5>
            <a href="${project.link}" class="btn-project" target="_blank">ver projeto</a>
        </article>`).join('');
} 