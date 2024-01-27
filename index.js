//Allows me to manipulate html elemnts

let button = document.getElementById('button');
let aboutMe = document.getElementById('aboutme');
let moreAboutMe = document.getElementById('moreAboutMe');
let popup = document.getElementById('popup');
let languageKnow = document.getElementById('languageKnow');
let closepopup = document.getElementById('closepopup');
let contactbutton = document.getElementById('contactbutton');
let blogbutton = document.getElementById('blogbutton');
let githubbutton = document.getElementById('githubbutton');
let contactcontent = document.getElementById('contactbuttoncontent');

//Opens the popup

button.onclick = function popup() {
    button.style.display='none';
    aboutMe.style.display='none';
    contactbutton.style.display='none';
    blogbutton.style.display='none';
    githubbutton.style.display='none';
    moreAboutMe.style.display='block';
    popup.style.display='block';
    languageKnow.style.display='block';
    closepopup.style.display='block';
};

//Closes the popup

closepopup.onclick = function closespopups() {
    button.style.display='block';
    aboutMe.style.display='block';
    moreAboutMe.style.display='none'
    popup.style.display='none';
    languageKnow.style.display='none';
    closepopup.style.display='none';
    contactbutton.style.display='flex';
    blogbutton.style.display='flex';
    githubbutton.style.display='flex';
    contactcontent.style.display='none';
};

contactbutton.onclick = function() {
    button.style.display='none';
    aboutMe.style.display='none';
    closepopup.style.display='block';
    contactbutton.style.display='none';
    blogbutton.style.display='none';
    githubbutton.style.display='none';
    contactcontent.style.display='block';
};

githubbutton.onclick = function() {
    window.open('https://github.com/8bitbug', '_blank');
};