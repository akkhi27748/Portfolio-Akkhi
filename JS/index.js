'use strict';

const skills = document.querySelector('#change-skills');
const projects = document.querySelector('#change-project');
const contact = document.querySelector('#change-contact');

skills.addEventListener('mouseover', () => {
    skills.innerHTML = "Skills";
});

skills.addEventListener('mouseout', () => { 
    skills.innerHTML = 'Hi there,'
});