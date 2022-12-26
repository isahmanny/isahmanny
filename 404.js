var container = document.getElementById('cotainer');
window.onmousemove = function(e){
    var x = - e.clientX/5,
        y = - e.clientX/5;
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionX = y + 'px';
}