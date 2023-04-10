$(function () {
    var cadena="";
    $.ajax({
        type: 'post', // the method (could be GET btw)
        url: 'https://boletines.guanajuato.gob.mx/apiboletines/api-boletinesgto.php', // The file where my php code is
        data: {
            'autor': 35, 'metodo':'lista','limite':4// all variables i want to pass.
        },
        success: function(data) { // in case of success get the output, i named data
            for (let index = 0; index < data.length; index++) {
                const objeto = data[index];
                console.log(objeto);
                var titulo = objeto.titulo;
                var imagen = objeto.imagen;
                var urll   = objeto.url;
                var fecha  = objeto.fecha;
                
            /*}
            for (var flup=0; flup< data.length; flup++){
                titulo=data[flup]['titulo'];
                imagen=data[flup]['imagen'];
                urll=data[flup]['url'];
                fecha=data[flup]['fecha'];*/
                if (titulo !="") {
                    if (typeof imagen === "undefined") {//

                        
                        imagen='https://www.guanajuato.gob.mx/imagesD/gto-default.jpg';
                        cadena=cadena+'<div class="col-xs-12 col-sm-3 item-eventox fade-in-animate"><div class="general-padf"><div class="outer-div-img"><div class="img-evet inner-div-img" style="background-image: url('+imagen+');"></div></div><div class="tittle-dv"></div><div class="contenido-dv"><a class="no-deco" href="'+urll+'" target="_blank"><p class="contenido-blo">'+titulo+'</p></a></div><div class="row"><div class="col-xs-6"><a href="'+urll+'"><img src="https://migrante.guanajuato.gob.mx/wp-content/uploads/2022/01/btn-boletiness.png" class="img-responsive"/></a></div><div class="col-xs-6 fecha-dv"><p>'+fecha+'</p></div></div></div></div>'

                    }else{
                        //console.log(data[flup]['contenido'])
                        //var contenido = data[flup]['contenido'];
                        var contenido = objeto.contenido;
                        
                        contenido = contenido.replace(/(<([^>]+)>)/ig,"");
                        contenido = contenido.replace(/&nbsp;/g, "");
                        fecha = fecha.replace(/-/g, " · ");

                        cadena=cadena+'<div class="col-xs-12 col-sm-3 item-eventox fade-in-animate"><div class="general-padf"><div class="outer-div-img"><div class="img-evet inner-div-img" style="background-image: url('+imagen+');"></div></div><div class="tittle-dv"></div><div class="contenido-dv"><a class="no-deco" href="'+urll+'" target="_blank"><p class="contenido-blo">'+titulo+'</p></a></div><div class="row"><div class="col-xs-6"><a href="'+urll+'"><img src="https://migrante.guanajuato.gob.mx/wp-content/uploads/2022/01/btn-boletiness.png" class="img-responsive"/></a></div><div class="col-xs-6 fecha-dv"><p>'+fecha+'</p></div></div></div></div>'
                    }
                }
            }
            $( "#res" ).html( cadena );
        }
    });
});
