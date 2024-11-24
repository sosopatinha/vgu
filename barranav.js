// Abrir menu ao clicar no ícone de menu (três barras)
document.querySelector('.menu-toggle').addEventListener('click', function() {
    // Exibe o menu
    document.querySelector('nav ul').classList.toggle('show');
    
    // Exibe o botão de fechar (X) quando o menu abrir
    document.querySelector('.close-menu').style.display = 'block';
    
    // Esconde o botão de menu (três barras) quando o menu abrir
    document.querySelector('.menu-toggle').style.display = 'none';
    
    // Exibe os botões de redes sociais quando o menu abrir
    document.querySelector('.redes-sociais-container').style.display = 'flex';
});

// Fechar menu ao clicar no botão "X"
document.querySelector('.close-menu').addEventListener('click', function() {
    // Esconde o menu
    document.querySelector('nav ul').classList.remove('show');
    
    // Esconde o botão de fechar (X) quando o menu for fechado
    document.querySelector('.close-menu').style.display = 'none';
    
    // Exibe o botão de menu (três barras) quando o menu for fechado
    document.querySelector('.menu-toggle').style.display = 'block';
    
    // Esconde os botões de redes sociais quando o menu for fechado
    document.querySelector('.redes-sociais-container').style.display = 'none';
});
