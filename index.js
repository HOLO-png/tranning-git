document.addEventListener("DOMContentLoaded", function(){
    var btn = document.querySelector('.container button.btn');
    console.log(btn);
    var menu = document.querySelector('.menu');
    console.log(menu);
    var blackDiv = document.querySelector('.container .blackDiv');
    console.log(blackDiv);
    var container = document.querySelector('.container');

    btn.addEventListener('click', function() {
        menu.classList.add('active');
        container.classList.add('active2');
        blackDiv.classList.add('active3');
    })
    blackDiv.addEventListener('click', function(){
        menu.classList.remove('active');
        container.classList.remove('active2');
        blackDiv.classList.remove('active3');
    })
},false)
