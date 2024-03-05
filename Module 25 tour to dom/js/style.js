const sections = document.querySelectorAll('section');

for( const section of sections){
    section.style.border = '2px solid';
    section.style.marginBottom = '34px';
    section.style.padding = '34px';
    section.style.borderRadius = '34px';
    section.style.backgroundColor = 'pink';
    section.style.color = '#fff';
}

// style useing id.............

// const plasesContainer = document.getElementById('plases-container');
// plasesContainer.style.backgroundColor = 'yellow';



const plasesContainer = document.getElementById('plases-container');
plasesContainer.classList.add('text-center');
plasesContainer.classList.remove('large-text');
console.log(plasesContainer)