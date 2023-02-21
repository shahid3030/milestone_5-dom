const sections = document.querySelectorAll('section');
for(const section of sections){
    // console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom ='10px';
    section.style.borderRadius = '5px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
    section.style.width = '30%';
}