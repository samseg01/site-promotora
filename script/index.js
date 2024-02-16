document.querySelectorAll('.entrar').forEach((element) =>
    element.addEventListener('click', function(){
    window.location.href = 'login.html'
}));
document.querySelectorAll('.btnCadastro').forEach((element) =>
    element.addEventListener('click', function(){
    window.location.href = 'cadastro.html'
}))
document.querySelector('.btn-menu')
        .addEventListener('click', function(){
        document.querySelector('header').style.display = 'none';
            
        const menu = document.getElementById('menu-portrait');
        if(window.getComputedStyle(menu).display === 'none'){
            menu.style.display = 'block';
        }else{
            menu.style.display = 'none';
        }
    })