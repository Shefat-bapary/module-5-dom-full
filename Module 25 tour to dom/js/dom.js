console.log(document);
console.log(document.body);

const listCollatiopn = document.getElementsByTagName('li');

for (const li of listCollatiopn) {
    console.log(li);
}

const pleses = document.getElementsByClassName('importent-plases');

for(const plase of pleses){
    // console.log(plase);
    console.log(plase.innerText);
}

// querySelectorAll
const allListByQ = document.querySelectorAll('.container li');
for(const listByQ of allListByQ){
    console.log(listByQ);
}


// querySelector
const FristListByQ = document.querySelector('.container li');
console.log('Hi this is query Selector not query selector all')
console.log(FristListByQ);

//      Style

document.getElementById('fruits-i-like').style;
document.getElementById('fruits-i-like').style.textAlign = 'center';
document.getElementById('fruits-i-like').style.backgroundColor = 'black';

// Get attribule

const title = document.getElementById('fruits-i-like');
console.log(title.getAttribute('class'))

//get and set and removove class..........

title.classList.remove('shefat')  
title.classList.add('batten')
console.log(title.classList );


// set attrubute ............
title.setAttribute('title', 'This Set by js');

// innne HTML..............?

const innnerHtml = document.getElementsByClassName('container')[0].innerHTML;
console.log(innnerHtml);
const innnerHtml1 = document.getElementsByClassName('container')[0].innerHTML = '<h1> wow dom is changeing!!!!!!!!!!!!!!!!!!!!!!! by js <h1/>';

// innerText
const innnerText = document.getElementsByClassName('plases')[0].innerText;
console.log(innnerText);
const innnerText1 = document.getElementsByClassName('plases')[0].innerText = ' wow dom is changeing!!!!!!!!!!!!!!!!!!!!!!! by js ';