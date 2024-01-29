let githubbutton = document.getElementById('githubbutton');

const width = screen.width;
const height = screen.height;
const widthMax = 420;
const heightMax = 900;

githubbutton.onclick = function() {
    window.open('https://github.com/8bitbug', '_blank')
};

if (width < widthMax && height < heightMax) {
    document.getElementById('navigation').style.width='360px';
    document.getElementById('navbuttons').style.right='10px';
    alert('Hello looks like you are on your phone. this website is not optimised for mobile yet so expect bugs.')
};