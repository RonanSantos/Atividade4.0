let urso = document.getElementById('urso');
let img = 1;
let mover  = 0;

setInterval(function() {
    img++;
    mover += 5;

    urso.src = 'images/chara-' + img + '.png';
    urso.style.marginTop = mover + 'px';
    
    if(img > 2) {
        img = 1;
    }
}, 70);
