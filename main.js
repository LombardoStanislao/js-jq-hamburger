// Al click sull'icona dell'hamburger menu, deve essere visualizzato il menu mobile e al click sull'icona "X" il menu mobile deve scomparire.

// Intercetto il click sull'hamburger menu

$('a i.fa-bars').click(function() {

    // Visualizzo il menu
    $('div.hamburger-menu').show();
});

$('a i.fa-times').click(function() {

    // Nascondo il Menu
    $('div.hamburger-menu').hide();
})
