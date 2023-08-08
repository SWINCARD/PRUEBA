const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function() {
    alert('En geogebra 3D coloca --->   a(x,y)=(((x^(2)+((9)/(80)) y^(2))^(((1)/(2)))+(-3 x^(2)-((729)/(80)) y^(2)+4)^(((1)/(2))))/(2))-0.02 y tambien b(x,y)=(((x^(2)+((9)/(80)) y^(2))^(((1)/(2)))-(-3 x^(2)-((729)/(80)) y^(2)+4)^(((1)/(2))))/(2))')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform', 'translate(-${randomX}%, -${randomY}%)');
})
