'use strict';

const skills = document.querySelector('#change-skills');
const projects = document.querySelector('#change-project');
const contact = document.querySelector('#change-contact');

skills.addEventListener('mouseover', () => {
    skills.innerHTML = "Skills";
    skills.style.color = "#fc9003";
});

skills.addEventListener('mouseout', () => { 
    skills.innerHTML = 'Hi there,';
    skills.style.color = 'white';
});

projects.addEventListener('mouseover', () => {
    projects.innerHTML = 'Projects';
    projects.style.color = "#fc9003";
});
projects.addEventListener('mouseout', () => {
    projects.innerHTML = " I'm <span id = 'nameSpan'>Akhilesh</span>,";
    projects.style.color = "white";
    document.getElementById("nameSpan").style.color = "#5FB6EC";
});

contact.addEventListener("mouseover", () => {
    contact.innerHTML = "Contact";
    contact.style.color = "#fc9003";
});

contact.addEventListener("mouseout", () => {
    contact.innerHTML = "a Front-End Developer.";
    contact.style.color = "white";
});



