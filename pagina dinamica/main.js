const DOM = function( ){
    this.id = str=>document.getElementById(str);
    this.query = (regla_css,one=false) =>
            one === true ? 
                document.querySelector(regla_css) :
                document.querySelectorAll(regla_css);


    this.create = (str, props={} )=> Object.assign(document.createElement(str), props);

    this.append = (hijos,padre=document.body) => {
            hijos.length ?
                hijos.map( hijo => padre.appendChild(hijo) ):
                padre.appendChild(hijos);
    }

    this.remove = e => e.remove( );
}

const D = new DOM( );
const btn_agregar = document.getElementById('agregar');
btn_agregar.addEventListener("click", function( ){
    const div_principal = D.create('div');
    const div_idiomas = D.create('div');
    const div_nivel = D.create('div');
    const span_idiomas = D.create('span', { innerHTML: 'Idiomas' } );
    const span_nivel = D.create('span', { innerHTML: 'Nivel' });
    const input_idiomas = D.create('input', { type: 'text', name: 'idiomas[]', autocomplete: 'off', placeholder: 'Idiomas del usuario' } );

    const input_nivel = D.create('input', { type: 'text', name: 'nivel[]', autocomplete: 'off', placeholder: 'Nivel del idioma' });
    const borrar = D.create('a', { href: 'javascript:void(0)', innerHTML: 'eliminar', onclick: function( ){ D.remove(div_principal); } } );

    D.append(span_idiomas, div_idiomas);
    D.append(input_idiomas, div_idiomas);

    D.append([span_nivel, input_nivel], div_nivel);

    D.append([div_idiomas, div_nivel, borrar], div_principal);
    D.append(div_principal, D.id('davidlpls') );
} );
const btn1_agregar = document.getElementById('agregar1');
btn1_agregar.addEventListener("click", function( ){
    const div_principal = D.create('div');
    const div_campo = D.create('div');
    const div_pais = D.create('div');
    const div_fecha = D.create('div');
    const div_hizo = D.create('div');

    const span_campo = D.create('span', { innerHTML: 'Campo' } );
    const span_pais = D.create('span', { innerHTML: 'Pais' });
    const span_fecha = D.create('span', { innerHTML: 'Fecha' } );
    const span_hizo = D.create('span', { innerHTML: 'Hizo' });

    const input_campo = D.create('input', { type: 'text', name: 'campo[]', autocomplete: 'off', placeholder: 'Campo' } );

    const input_pais = D.create('input', { type: 'text', name: 'pais[]', autocomplete: 'off', placeholder: 'pais' });
    const input_fecha = D.create('input', { type: 'text', name: 'fecha[]', autocomplete: 'off', placeholder: 'Fecha' } );

    const input_hizo = D.create('input', { type: 'text', name: 'hizo[]', autocomplete: 'off', placeholder: 'hizo' });

    const borrar = D.create('a', { href: 'javascript:void(0)', innerHTML: 'eliminar', onclick: function( ){ D.remove(div_principal); } } );

    D.append(span_campo, div_campo);
    D.append(input_campo, div_campo);

    D.append([span_pais, input_pais], div_pais);
    D.append([span_fecha, input_fecha], div_fecha);
    D.append([span_hizo, input_hizo], div_hizo);

    D.append([div_campo, div_pais,div_fecha,div_hizo, borrar], div_principal);
    D.append(div_principal, D.id('david1') );
} );

const btn2_agregar = document.getElementById('agregar2');
btn2_agregar.addEventListener("click", function( ){
    const div_principal = D.create('div');
    const div_estudio = D.create('div');
    const div_centro = D.create('div');
    const div_pais = D.create('div');
    const div_fecha = D.create('div');

    const span_estudio = D.create('span', { innerHTML: 'Estudio Realizado' } );
    const span_centro = D.create('span', { innerHTML: 'Centro' });
    const span_pais = D.create('span', { innerHTML: 'Pais' } );
    const span_fecha = D.create('span', { innerHTML: 'Fecha' });

    const input_estudio = D.create('input', { type: 'text', name: 'estudio[]', autocomplete: 'off', placeholder: 'Estudio' } );

    const input_centro = D.create('input', { type: 'text', name: 'centro[]', autocomplete: 'off', placeholder: 'centro donde estudio' });
    const input_pais= D.create('input', { type: 'text', name: 'pais[]', autocomplete: 'off', placeholder: 'pais' } );

    const input_fecha = D.create('input', { type: 'text', name: 'fecha[]', autocomplete: 'off', placeholder: 'fecha' });

    const borrar = D.create('a', { href: 'javascript:void(0)', innerHTML: 'eliminar', onclick: function( ){ D.remove(div_principal); } } );

    D.append(span_estudio, div_estudio);
    D.append(input_estudio, div_estudio);
    D.append([span_centro, input_centro], div_centro);
    D.append([span_pais, input_pais], div_pais);
    D.append([span_fecha, input_fecha], div_fecha);
   

    D.append([div_estudio,div_centro, div_pais,div_fecha, borrar], div_principal);
    D.append(div_principal, D.id('david2') );
} );

const btn3_agregar = document.getElementById('agregar3');
btn3_agregar.addEventListener("click", function( ){
    const div_principal = D.create('div');
    const div_habilidades = D.create('div');
    const span_habilidades = D.create('span', { innerHTML: 'Habilidades' } );
    const input_habilidades = D.create('input', { type: 'text', name: 'idiomas[]', autocomplete: 'off', placeholder: 'Habilidades' } );
    const borrar = D.create('a', { href: 'javascript:void(0)', innerHTML: 'eliminar', onclick: function( ){ D.remove(div_principal); } } );

    D.append(span_habilidades, div_habilidades);
    D.append(input_habilidades, div_habilidades);
    D.append([div_habilidades,borrar], div_principal);
    D.append(div_principal, D.id('david3') );
} );

const btn4_agregar = document.getElementById('agregar4');
btn4_agregar.addEventListener("click", function( ){
    const div_principal = D.create('div');
    const div_aptitudes = D.create('div');
    const span_aptitudes = D.create('span', { innerHTML: 'Aptitudes' } );
    const input_aptitudes = D.create('input', { type: 'text', name: 'Aptitudes[]', autocomplete: 'off', placeholder: 'Aptitudes' } );
    const borrar = D.create('a', { href: 'javascript:void(0)', innerHTML: 'eliminar', onclick: function( ){ D.remove(div_principal); } } );

    D.append(span_aptitudes, div_aptitudes);
    D.append(input_aptitudes, div_aptitudes);
    D.append([div_aptitudes,borrar], div_principal);
    D.append(div_principal, D.id('david4') );
} );

