var head = document.getElementById('heading');

var paratag1 = document.getElementById('para1');

var pic = document.getElementById('tree');

var menu1 = document.getElementById('mbar1');
menu1.classList.add('sty');

var menu2 = document.getElementById('mbar2');
var menu3 = document.getElementById('mbar3');


menu1.addEventListener('click',historyfun)

function historyfun(){
    menu1.classList.remove('sty');
    head.innerText='History';
    paratag1.innerText='"History" is an umbrella term comprising past events as well as the memory, discovery, collection, organization, presentation, and interpretation of these events. Historians seek knowledge of the past using historical sources such as written documents, oral accounts, art and material artifacts, and ecological markers.'
    pic.setAttribute('src','pic1.jpeg');
    menu1.style.backgroundColor='white';
    menu2.style.backgroundColor='';
    menu3.style.backgroundColor='';

}

menu2.addEventListener('click',visionfun);

function visionfun(){
    menu1.classList.remove('sty');
    head.innerText='Vision';
    paratag1.innerText='A content vision is a forward-facing statement of the very soul of your company that propels your content marketing. Ultimately, your company depends on having this kind of innovation so it has a future far beyond goals you have set this year, even five years from now.'
    pic.setAttribute('src','pic2.jpeg');
    menu1.style.backgroundColor='';
    menu2.style.backgroundColor='white';
    menu3.style.backgroundColor='';
}

menu3.addEventListener('click',goalsfun);

function goalsfun(){
    menu1.classList.remove('sty');
    head.innerText='Goals';
    paratag1.innerText='Common content goals are centered around driving audience members through the sales funnel, from awareness to the point of purchase and onward into brand advocacy. Content may directly boost revenue by converting customers to make a purchase.'
    pic.setAttribute('src','pic3.jpeg');
    menu2.style.backgroundColor='';
    menu1.style.backgroundColor='';
    menu3.style.backgroundColor='white';
}


