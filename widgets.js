$(document).ready(function() {
    $( "#tabs" ).tabs();
    $( "#tabmyline" ).click(function(){
        alert("Ahora cargaria el JSONP")
    });
    $.getJSON("timeline.json").done(function( data ) {
          $.each( data, function(i, item) {
             $("<p>").text("De: " + item["autor"]).appendTo("#timeline");
            $("<img>").attr("src", item["avatar"]).appendTo("#timeline");
             $("<p>").text("Titulo: " + item["titulo"]).appendTo("#timeline");
             $("<p>").text("Contenido: " + item["contenido"]).appendTo("#timeline");
             $("<p>").text("Fecha: " + item["fecha"]).appendTo("#timeline");
          });
    }); 
});
