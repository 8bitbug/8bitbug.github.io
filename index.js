//Opens the popup

document.getElementById('button').onclick = function popup() {
    document.getElementById('button').style.display='none';
    document.getElementById('aboutMe').style.display='none';
    document.getElementById('moreAboutMe').style.display='block'
    document.getElementById('popup').style.display='block';
    document.getElementById('languageKnow').style.display='block';
    document.getElementById('closepopup').style.display='block';
};

//Closes the popup

document.getElementById('closepopup').onclick = function closespopup() {
    document.getElementById('button').style.display='block';
    document.getElementById('aboutMe').style.display='block';
    document.getElementById('moreAboutMe').style.display='none'
    document.getElementById('popup').style.display='none';
    document.getElementById('languageKnow').style.display='none';
    document.getElementById('closepopup').style.display='none';
}