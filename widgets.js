$(document).ready(function() {
    $( "#tabs" ).tabs();
    
    //TAB MYLINE
    $( "#tabmyline" ).click(function(){
        $( "#myline" ).empty();
        $.getJSON("myline.json").done(function( data ) {
            insertarMensajesAntes(data, "#myline")
        }).fail(function(){ 
            $("<strong>").text("No hay mensajes de usuario").prependTo("#myline");
        });
    });
    
    //TAB TIMELINE
    $.getJSON("timeline.json").done(function( data ) {
          insertarMensajesAntes(data, "#timeline");
    });
        
    
    //SI HAY MENSAJES NUEVOS
    $.getJSON("update.json").done(function( data ) {
          $("<button>").html("Hay " + data.length + " mensajes nuevos").prependTo("#timeline").click(function(){
                insertarMensajesAntes(data, "#timeline")
                $(this).hide();
            })
    }).fail(function(){  
        $("<strong>").text("No hay mensajes nuevos").prependTo("#timeline");
    });
    
    
    
    function insertarMensajesAntes(data, place){
        $.each( data, function(i, item) {
             $("</div>").prependTo(place); 
             $("<button>").html("Mostrar más").prependTo(place).click(function(){
                 $("<p>Contenido: " + item["contenido"] + "</p>").insertBefore(this);
                 $("<p>Fecha: " + item["fecha"] + "</p>").insertBefore(this);
                 $(this).hide();
             });
             $("<p>").text("Titulo: " + item["titulo"]).prependTo(place);
             $("<p>").text("De: " + item["autor"]).prependTo(place);
             $("<img>").attr("src", item["avatar"]).prependTo(place);
             
             $("<div class='casilla'>").prependTo(place);
          });
    }


});
