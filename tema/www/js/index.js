document.addEventListener('deviceready', onDeviceReady, false);
var claro = false;

function onDeviceReady() {
    var botao = document.getElementById('botao');
    botao.addEventListener('click', mudaTema);
}

function mudaTema() {
    navigator.notification.confirm(
    'You are the winner!', // message
     onConfirm,            // callback to invoke with index of button pressed
    'Game Over',           // title
    ['Restart','Exit']     // buttonLabels
    );
}

function finalizado(buttonIndex) {
    console.log('Claro: ' + claro);
    console.log('Botao: ' + buttonIndex);
}
