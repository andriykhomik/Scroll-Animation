const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);
boxes.forEach((el)=>{
    let isClicked = true;
    const h2 = el.getElementsByTagName('h2');
    el.addEventListener('click', ()=>{
        if (isClicked){
            background(el, h2);
        } else {
            el.style.background = '';
            h2[0].style.display = 'flex'
        }
        isClicked = !isClicked;
    })
})

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 3.7;

    boxes.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom){
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}

function background(el, h2){
    h2[0].style.display = 'none';
    el.style.background = 'URL(image/20190616_142632.jpg)';
}
