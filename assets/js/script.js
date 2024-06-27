let btn_showmenu = document.getElementById('btn_showmenu');
let btn_hidemenu = document.getElementById('btn_hidemenu');
let sidebar = document.querySelector('.sidebar');
let content = document.querySelector('.content');
let menu_list = document.querySelectorAll('.menu_list');
let modal = document.querySelector('.modal');
window.onclick = (event) => {
    if (event.target == btn_showmenu) {
        sidebar.style.left = '0%';
        showElement(btn_hidemenu);
        hideElement(btn_showmenu);
    } else if (event.target == btn_hidemenu) {
        sidebar.style.left = '-100%';
        showElement(btn_showmenu);
        hideElement(btn_hidemenu);
    } else if (event.target == menu_list[0]) {
        content.innerHTML = `
        <p class="title">${about_me[0].title}</p>
        <p>${about_me[0].description}</p>`;
    } else if (event.target == menu_list[1]) {
        content.innerHTML = ` 
        <p class="title">projects</p>
        <div class="project-container">
            <div class="project-box"></div>
        </div>`;
        let project_box = document.querySelector('.project-box');
        for (let i = 0; i < project.length; i++) {
            project_box.innerHTML += `
            <div class="project-item">
                <img src='${project[i].img}' />
                <h2>${project[i].title}</h2>
                <div class="btn-container">
                    <a href="${project[i].demo}" target="_blank">
                        <button>Live Demo</button>
                    </a>
                    <a href="${project[i].repository}" target="_blank">
                        <button>Repository</button>
                    </a>
                </div>
            </div>
            `;
        }
    } else if (event.target == menu_list[2]) {
        content.innerHTML = `
        <p class="title">tech knowledge</p>
        <div class="project-container">
            <div class="card-box">
                <div class="box1">
                    <ul class="knowledge-list"></ul>
                </div>
                <div class="box2"></div>
            </div>
        </div>`;
        let knowledge_list = document.querySelector('.knowledge-list');
        for (let i = 0; i < knowledge.length; i++) {
            knowledge_list.innerHTML += `
                <li>${knowledge[i].title}</li>    
            `;
        }
    } else if (event.target == menu_list[3]) {
        content.innerHTML = `
        <p class="title">certifications</p>
        <div class="project-container">
            <div class='certification-container'>
                
            </div>
        </div>`;
        let certification = document.querySelector('.certification-container');
        for (let i = 0; i < certifications.length; i++) {
            certification.innerHTML += `
            <div class='certification-item'>
                <img src='${certifications[i].image}' />
                <a href='${certifications[i].link}' target='_blank'>${certifications[i].title}</a>
            </div>
            
            `;
        }
    } else if (event.target == modal) {
        modal.style.display = 'none';
    }
}

const showElement = (element) => {
    element.style.display = 'block';
}

const hideElement = (element) => {
    element.style.display = 'none';
}

window.onload = () => {
    content.innerHTML = `<p class="title">${about_me[0].title}</p>
        <p>${about_me[0].description}</p>`;
}