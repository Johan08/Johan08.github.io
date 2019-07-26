$(document).on('change',"#filtro_feature, #filtro_estado",function() {
    console.log(this);
    /* Filtrar Pasos */
    var valorFiltro = $("#filtro_estado").val();
    var pasosMostrar = null;
    var pasosOcultar = null;

    if (valorFiltro == 1) {
        pasosMostrar = $(".aprobada");
        pasosOcultar = $(".fallida, .no-definida, .ignorada, .pendiente");
    } else if (valorFiltro == 2) {
        pasosMostrar = $(".fallida");
        pasosOcultar = $(".aprobada, .no-definida, .ignorada, .pendiente");
    } else if (valorFiltro == 3) {
        pasosMostrar = $(".no-definida");
        pasosOcultar = $(".aprobada, .fallida, .ignorada, .pendiente");
    } else if (valorFiltro == 4) {
        pasosMostrar = $(".pendiente");
        pasosOcultar = $(".aprobada, .fallida, .ignorada, .no-definida");
    } else if (valorFiltro == 5) {
        pasosMostrar = $(".ignorada");
        pasosOcultar = $(".aprobada, .fallida, .pendiente, .no-definida");
    } else {
        pasosMostrar = $(".ignorada, .aprobada, .fallida, .pendiente, .no-definida");
    }

    if(pasosMostrar != null){ pasosMostrar.slideDown('fast'); } //{ pasosMostrar.show(); }
    if(pasosOcultar != null){ pasosOcultar.slideUp('fast'); }   //{ pasosOcultar.hide(); }

    /* Filtrar Feature */
    var featureSeleccionado = $("#filtro_feature").val();
    var algunResultado = false;
    $(".feature").each(function() {
        if (featureSeleccionado == "0" || this.id == ("feature" + featureSeleccionado)) {
            if (valorFiltro == 1 && $(this).find('div.aprobada').length == 0) {
                $(this).slideUp('fast');// hide();
            } else if (valorFiltro == 2 && $(this).find('div.fallida').length == 0) {
                $(this).slideUp('fast');// .hide();
            } else if (valorFiltro == 3 && $(this).find('div.no-definida').length == 0) {
                $(this).slideUp('fast');// .hide();
            } else if (valorFiltro == 4 && $(this).find('div.pendiente').length == 0) {
                $(this).slideUp('fast');// .hide();
            } else if (valorFiltro == 5 && $(this).find('div.ignorada').length == 0) {
                $(this).slideUp('fast');// .hide();
            } else {
                $(this).slideDown('fast');
                algunResultado = true;
            }
        } else {
            $(this).slideUp('fast');// .hide();
        }
    });
    algunResultado ? $("#sin-resultado").hide() : $("#sin-resultado").show();
});

$(document).on('click','.ver-mas',function() {

    var clase = $(this).attr('class');
    var div_error = $(this).parent().parent().parent().parent().find('div.row.detalle-paso');
    console.log(this);
    div_error.toggle(); //.slideToggle('fast');
    if ($(div_error).is(':visible')) {
        $(this).html('(Cerrar)');
        $('html,body').animate({
            scrollTop: $(this).parent().parent().parent().offset().top - 30
        });
    } else {
        if(clase.indexOf('fallida') < 0){
             $(this).html('(Ver Imagen)');
        }else{
            $(this).html('(Ver mas)');
        }
    }
});

$(document).on('click','.ver-imagen',function() {

    var div_error = $(this).parent().nextAll('div.imagen-detalle');
    div_error.toggle(); //.slideToggle('fast');
    if ($(div_error).is(':visible')) {
        $(this).html('(Cerrar imagen)');
            $('html,body').animate({
            scrollTop: $(this).parent().parent().parent().offset().top - 30
        });
    } else {
        $(this).html('(Ver imagen)');
    }
});

$(document).on('click','.ver-mas2',function() {

    var div_error = $(this).parent().nextAll('div.detalle-paso2');
    div_error.toggle(); //.slideToggle('fast');
    if ($(div_error).is(':visible')) {
        $(this).html('(Cerrar detalle)');
        $('html,body').animate({
            scrollTop: $(this).parent().parent().parent().offset().top - 30
        });
    } else {
        $(this).html('(Ver detalle)');
    }
});

$(pieChart);