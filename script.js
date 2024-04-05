const nav = document.getElementById('nav');
const boton = document.getElementById('boton');

boton?.addEventListener('click', function() {
    nav?.classList.toggle('hidden');
});

const links = document.querySelectorAll('.link');
links?.forEach(link => {
    link.addEventListener('click',function(){
        nav?.classList.toggle('hidden');
    });
});

