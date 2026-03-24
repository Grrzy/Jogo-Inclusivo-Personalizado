function parabens(){
    let botaoPress = document.getElementById("alvo")

    let larguraJanela = window.innerWidth;
    let alturaJanela = window.innerHeight;

    let maxX = larguraJanela - botaoPress.offsetWidth;
    let maxY = alturaJanela - botaoPress.offsetHeight;

    let aleatorioX = Math.floor(Math.random() * maxX);
    let aleatorioY = Math.floor(Math.random() * maxY);

    botaoPress.style.left = aleatorioX + "px";
    botaoPress.style.top = aleatorioY + "px";

}