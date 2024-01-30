let githubbutton = document.getElementById('githubbutton');
let contactbutton = document.getElementById('contactbutton');
let aboutgroup = document.getElementById('aboutgroup');
let contactcontent = document.getElementById('contactcontent');
let blogbutton = document.getElementById('blogbutton');
let cctext = document.getElementById('cctext');
let memecc = document.getElementById('memecc');
let blogcontent = document.getElementById('blogcontent');
let memebc = document.getElementById('memebc');

const width = screen.width;
const height = screen.height;
const widthMax = 420;
const heightMax = 900;

githubbutton.onclick = function() {
    window.open('https://github.com/8bitbug', '_blank')
};

contactbutton.onclick = function() {
    if (contactbutton && contactbutton.textContent === 'Contact Me') {
        aboutgroup.style.display = 'none';
        contactbutton.innerHTML = 'Home';
        contactcontent.style.display = 'flex';
        cctext.style.display = 'flex';
        memecc.style.display = 'flex';
        blogbutton.innerHTML = 'Blog';
        blogcontent.style.display = 'none';
        memebc.style.display = 'none';
    } else {
        aboutgroup.style.display = 'flex';
        contactbutton.innerHTML = 'Contact Me';
        contactcontent.style.display = 'none';
        cctext.style.display = 'none';
        memecc.style.display = 'none';
    };
};

blogbutton.onclick = function() {
    if (blogbutton && blogbutton.textContent == 'Blog') {
        aboutgroup.style.display = 'none';
        blogbutton.innerHTML = 'Home';
        contactbutton.innerHTML = 'Contact Me';
        blogcontent.style.display = 'flex';
        cctext.style.display = 'none';
        memecc.style.display = 'none';
        contactcontent.style.display = 'none';
        memebc.style.display = 'block';
    } else {
        blogcontent.style.display = 'none';
        aboutgroup.style.display = 'flex';
        blogbutton.innerHTML = 'Blog';
        memebc.style.display = 'none';
    };
};

if (width < widthMax && height < heightMax) {
    document.getElementById('navigation').style.width='360px';
    document.getElementById('navbuttons').style.right='10px';
    alert('Hey looks like you are on your phone. this website is not optimised for mobile yet so expect bugs.')
};