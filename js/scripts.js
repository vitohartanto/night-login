// const project = require('./project.json');
import project from './project.json' assert {type: 'json'};

const listItems = document.querySelectorAll('.dropdown-item');
const btn = document.querySelectorAll('.btn');
const proj = document.querySelector('.proj');
const card = document.querySelector('.card');
const hero = document.querySelector('.hero');

const NCPC = project.NCPC;
const NUXC = project.NUXC;
const NADC = project.NADC;
const NDDC = project.NDDC;
const NLNC = project.NLNC;
const NWDC = project.NWDC;

const projects = [NCPC, NUXC, NADC, NDDC, NLNC, NWDC];

for(let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function() {

        if(proj.innerHTML !== '') {
            proj.innerHTML = '';
        }
        
        btn[0].innerText = this.innerHTML
        for (let j = 0; j < projects[i].length; j++) {
            const project = projects[i][j];
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `
            <div class="head-card">
                <img class="img-card" src="${project.img}">
                <div class="title-card">
                    <h3>${project.title}</h3>
                    <img class="cont-card" src="${project.contribute}">
                </div>
            </div>
            <div class="desc-card">
                <p>${project.description}</p>
            </div>
            <p>Read More</p>
            `;
            proj.appendChild(div);
        }
        
        // const footer = document.createElement('div');
        // footer.classList.add('footer');
        // footer.innerHTML = `
                            
        // `;
        hero.appendChild(footer);
    });
}