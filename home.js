var content_frontend = document.getElementById('number');

var counted = 0;

content_frontend.innerHTML = counted +' Times';

function counter(){
    counted+=1;
    content_frontend.innerHTML = counted +' Times';
}
