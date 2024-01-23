//Opens the popup

document.getElementById('button').onclick = function popup() {
    document.getElementById('button').style.display='none';
    document.getElementById('aboutMe').style.display='none';
    document.getElementById('moreAboutMe').style.display='visible'
    document.getElementById('popup').style.display='visible';
    document.getElementById('languageKnow').style.display='visible';
    document.getElementById('closepopup').style.display='visible';
};

//Closes the popup

document.getElementById('closepopup').onclick = function closespopup() {
    document.getElementById('button').style.display='visible';
    document.getElementById('aboutMe').style.display='visible';
    document.getElementById('moreAboutMe').style.display='none'
    document.getElementById('popup').style.display='none';
    document.getElementById('languageKnow').style.display='none';
    document.getElementById('closepopup').style.display='none';
}