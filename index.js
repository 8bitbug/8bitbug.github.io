//Opens the popup

document.getElementById('button').onclick = function openpopup() {
    document.getElementById('button').style.display='none';
    document.getElementById('aboutMe').style.display='none';
    document.getElementById('contactbutton').style.display='none';
    document.getElementById('blogbutton').style.display='none';
    document.getElementById('githubbutton').style.display='none';
    document.getElementById('moreAboutMe').style.display='block';
    document.getElementById('languageKnow').style.display='block';
    document.getElementById('closepopup').style.display='block';
};

//Closes the popup

document.getElementById('closepopup').onclick = function closepopup() {
    document.getElementById('button').style.display='block';
    document.getElementById('aboutMe').style.display='block';
    document.getElementById('contactbutton').style.display='flex';
    document.getElementById('blogbutton').style.display='flex';
    document.getElementById('githubbutton').style.display='flex';
    document.getElementById('moreAboutMe').style.display='none';
    document.getElementById('languageKnow').style.display='none';
    document.getElementById('closepopup').style.display='none';
    document.getElementById('contactbuttoncontent').style.display='block';
};

//opens popup

document.getElementById('contactbutton').onclick = function openContactcontent() {
    document.getElementById('button').style.display='none';
    document.getElementById('aboutMe').style.display='none';
    document.getElementById('contactbutton').style.display='none';
    document.getElementById('blogbutton').style.display='none';
    document.getElementById('githubbutton').style.display='none';
    document.getElementById('closepopup').style.display='block';
    document.getElementById('contactbuttoncontent').style.display='block';
};

//Makes div open a website in a new tab

document.getElementById('githubbutton').onclick = function opengithub() {
    window.open('https://github.com/8bitbug', '_blank');
};