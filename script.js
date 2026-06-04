$(document).ready(function () {
    let veces = 0;

    $("#btn-activar").click(function () {
        alert("¡Habilidad activada: Programación Instantánea!");
        
        $(".carta").toggleClass("activa");

        veces++;
        $("#contador").text("¡Habilidad potenciada " + veces + " veces!");
    });

    $(".carta").hover(
        function () {
            $(".rareza").text("¡NIVEL DIOS!");
        },
        function () {
            $(".rareza").text("CARTA LEGENDARIA");
        }
    );
});
