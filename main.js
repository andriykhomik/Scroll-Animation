const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

// checkBoxes();
console.log (window.innerHeight);

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 3.7;

    boxes.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom){
            console.log (boxTop);
            console.log (triggerBottom);
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }

    })
}
