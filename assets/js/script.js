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
                <img src='${project[i].logo}' />
                <h2>${project[i].title}</h2>
            </div>
            `;
        }
        let project_item = document.querySelectorAll('.project-item');

        for (let i = 0; i < project_item.length; i++) {
            project_item[i].onclick = () => {
                modal.style.display = 'flex';
                let text = '';
                for (let x = 0; x < project[i].tools.length; x++) {
                    text += `<li>${project[i].tools[x]}</li>`;
                }
                modal.innerHTML = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>${project[i].title}</h2>
                    </div>
                    <div class="modal-body">
                        <p>${project[i].description}</p>
                        <p>Tools Used:</p>
                        <ul>
                            ${text}
                        </ul>
                        <a href='${project[i].live_demo}'  target='_blank'>
                        <button id="btn_livedemo">live demo</button></a>
                        <a href='${project[i].repository}'  target='_blank' ><button id="btn_repository">repository</button></a>
                    </div>
                </div>`;
            }
        }
    } else if (event.target == menu_list[2]) {
        content.innerHTML = `
        <p class="title">tech knowledge</p>
        <div class="project-container">
            <div class="card-box"></div>
        </div>`;
        let card_box = document.querySelector('.card-box');
        for (let i = 0; i < knowledge.length; i++) {
            let text = '';
            for (let x = 0; x < knowledge[i].list.length; x++) {
                text += `<li>${knowledge[i].list[x]}</li>`;
            }
            card_box.innerHTML += `
                    <div class="card-sm">
                        <h2>${knowledge[i].title}</h2>
                        <hr>
                        <p>${knowledge[i].description}</p>
                        
                        <ul class="knowledge-list">
                            ${text}
                        </ul>
                    </div>`;
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
                <img src='../../img/certificate.jpg' />
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