class Gestion_congreso extends GestionEntidad{
    static resetearformcongreso() {
        GestionEntidad.resetearForm();
    }

//Formularios------------------------------------------------------------------------------------
    static async createForm_ADD(){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_congreso";  
        document.getElementById('IU_form').action = 'javascript:Gestion_congreso.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_congreso.comprobar_submit();');

        document.getElementById('codigo_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_codigo_congreso()');

        document.getElementById('nombre_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_nombre_congreso()');
        
        document.getElementById('acronimo_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_acronimo_congreso()');
        
        document.getElementById('anho_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_anho_congreso()');
        
        document.getElementById('lugar_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_lugar_congreso()');

        document.getElementById('nuevo_ficheropdf_congreso').setAttribute('onblur','Gestion_congreso.comprobar_nuevo_ficheropdf_congreso()');
        
        document.getElementById("label_ficheropdf_congreso").style.display = 'none';
        document.getElementById("ficheropdf_congreso").style.display = 'none';
        document.getElementById("link_ficheropdf_congreso").style.display = 'none';

        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/ADD.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);

        setLang();

        document.getElementById('div_IU_form').style.display = 'block';

    }
    
    //Ver tema de atributos pasados
    static async createForm_EDIT(datostupla){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_congreso";
        document.getElementById('IU_form').action = 'javascript:Gestion_congreso.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_congreso.comprobar_submit_EDIT();');

        document.getElementById('codigo_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_codigo_congreso()');
        document.getElementById('codigo_congreso').value = datostupla.codigo_congreso;
        document.getElementById('codigo_congreso').setAttribute("readonly","");

        document.getElementById('nombre_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_nombre_congreso()');
        document.getElementById('nombre_congreso').value = datostupla.nombre_congreso;

        document.getElementById('acronimo_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_acronimo_congreso()');
        document.getElementById('acronimo_congreso').value = datostupla.acronimo_congreso;

        document.getElementById('anho_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_anho_congreso()');
        document.getElementById('anho_congreso').value = datostupla.anho_congreso;

        document.getElementById('lugar_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_lugar_congreso()');
        document.getElementById('lugar_congreso').value = datostupla.lugar_congreso;

        document.getElementById('ficheropdf_congreso').value = datostupla.ficheropdf_congreso;
        document.getElementById('link_ficheropdf_congreso').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_ficheropdf_congreso/'+ficheropdf_congreso.value);
        document.getElementById('ficheropdf_congreso').setAttribute("readonly",true);

        document.getElementById('nuevo_ficheropdf_congreso').setAttribute('onblur','Gestion_congreso.comprobar_nuevo_ficheropdf_congreso()');

        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/EDIT.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);

        setLang();

        document.getElementById('div_IU_form').style.display = 'block';

    }

    static async createForm_DELETE(datostupla){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_congreso";
        document.getElementById('IU_form').action = 'javascript:Gestion_congreso.DELETE();';

        document.getElementById('codigo_congreso').value = datostupla.codigo_congreso;
        document.getElementById('codigo_congreso').setAttribute('readonly',true);

        document.getElementById('nombre_congreso').value = datostupla.nombre_congreso;
        document.getElementById('nombre_congreso').setAttribute('readonly',true);

        document.getElementById('acronimo_congreso').value = datostupla.acronimo_congreso;
        document.getElementById('acronimo_congreso').setAttribute('readonly',true);

        document.getElementById('anho_congreso').value = datostupla.anho_congreso;
        document.getElementById('anho_congreso').setAttribute('readonly',true);

        document.getElementById('lugar_congreso').value = datostupla.lugar_congreso;
        document.getElementById('lugar_congreso').setAttribute('readonly',true);

        document.getElementById('ficheropdf_congreso').value = datostupla.ficheropdf_congreso;
        document.getElementById('ficheropdf_congreso').setAttribute('readonly',true);
        document.getElementById('ficheropdf_congreso').setAttribute("readonly", true);
        document.getElementById("link_ficheropdf_congreso").href += datostupla.ficheropdf_congreso;

        document.getElementById("label_nuevo_ficheropdf_congreso").style.display = 'none';
        document.getElementById("nuevo_ficheropdf_congreso").style.display = 'none';

        let botondelete = document.createElement('button');
        botondelete.id = 'botondelete';
        botondelete.type = 'submit';
        let imgdelete = document.createElement('img');
        imgdelete.src = './iconos/DELETE.png';
        botondelete.append(imgdelete);
        document.getElementById('IU_form').append(botondelete);

        setLang();

        document.getElementById('div_IU_form').style.display = 'block';
    }

    static async createForm_SHOWCURRENT(datostupla){
        this.createForm_DELETE(datostupla);

        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SHOWCURRENT_congreso";
        document.getElementById('botondelete').remove();

        let imgshowcurrent = document.createElement('img');
        imgshowcurrent.src = './iconos/SHOWCURRENT.png';
        imgshowcurrent.setAttribute("onclick","DOM_class.cerrar_div_formulario();")
        document.getElementById('IU_form').append(imgshowcurrent);

        setLang();
    }

    static async createForm_SEARCH(){

        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SEARCH_congreso"; 
        this.recargarform();
        document.getElementById('IU_form').action = 'javascript:Gestion_congreso.SEARCH();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_congreso.comprobar_submit_SEARCH();');

        document.getElementById('codigo_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_codigo_congreso_SEARCH()');
        
        document.getElementById('nombre_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_nombre_congreso_SEARCH()');
        
        document.getElementById('acronimo_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_acronimo_congreso_SEARCH()');
        
        document.getElementById('anho_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_anho_congreso_SEARCH()');
        
        document.getElementById('lugar_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_lugar_congreso_SEARCH()');

        document.getElementById("label_nuevo_ficheropdf_congreso").style.display = 'none';
        document.getElementById("nuevo_ficheropdf_congreso").style.display = 'none';
        document.getElementById("link_ficheropdf_congreso").style.display = 'none';

        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/SEARCH.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);

        setLang();

        document.getElementById('div_IU_form').style.display = 'block';

    }

//Submits---------------------------------------------------------------------------------------

    static comprobar_submit(){

        let valor1 = this.comprobar_codigo_congreso();
        let valor2 = this.comprobar_nombre_congreso();
        let valor3 = this.comprobar_acronimo_congreso();
        let valor4 = this.comprobar_anho_congreso();
        let valor5 = this.comprobar_lugar_congreso();
        let valor6 = this.comprobar_nuevo_ficheropdf_congreso();

        let resultado = (
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 
        );
        return resultado;
        
    }

    static comprobar_submit_EDIT(){

        let valor1 = this.comprobar_codigo_congreso();
        let valor2 = this.comprobar_nombre_congreso();
        let valor3 = this.comprobar_acronimo_congreso();
        let valor4 = this.comprobar_anho_congreso();
        let valor5 = this.comprobar_lugar_congreso();
        let valor6 = this.comprobar_nuevo_ficheropdf_congreso_EDIT();

        let resultado = (
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 
        );
        return resultado;
        
    }

    static comprobar_submit_SEARCH(){

        let valor1 = this.comprobar_codigo_congreso_SEARCH();
        let valor2 = this.comprobar_nombre_congreso_SEARCH();
        let valor3 = this.comprobar_acronimo_congreso_SEARCH();
        let valor4 = this.comprobar_anho_congreso_SEARCH();
        let valor5 = this.comprobar_lugar_congreso_SEARCH();
        let valor6 = this.comprobar_ficheropdf_congreso_SEARCH();

        let resultado = (
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 
        );
        return resultado;
        
    }

//Back-----------------------------------------------------------------------------------

    static async ADD(){
        await this.peticionBackGeneral('IU_form', 'congreso', 'ADD')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async EDIT(){
        await this.peticionBackGeneral('IU_form', 'congreso', 'EDIT')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.resetearformcongreso();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async DELETE(){
        await this.peticionBackGeneral('IU_form', 'congreso', 'DELETE')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.resetearformcongreso();
                this.SEARCH();
            }
            else{
                alert(respuesta['code']);
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async SEARCH(){
        await this.peticionBackGeneral('IU_form', 'congreso', 'SEARCH')
        .then((respuesta) => {
            this.recargarform();
            // !! comprobar que el array solo tiene que tener codigo_congreso
            let congreso = new Gestion_congreso('congreso',respuesta['resource'],Array('CodigoC', 'NombreC', 'AcronimoC', 'AnhoC', 'LugarC', 'FicheropdfC')); congreso.mostrartabla();
            if (respuesta['code'] == 'RECORDSET_VACIO'){
                document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
            }
        });
    }

//Validaciones----------------------------------------------------------------------

    //Validaciones de CodigoC:
    static comprobar_codigo_congreso() {

        if (validacionesatomicas.size_minimo('codigo_congreso', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('codigo_congreso', 'KO_codigo_congreso_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('codigo_congreso', 11)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('codigo_congreso', 'KO_codigo_congreso_tam_max');
            return false;
        }
        if(validacionesatomicas.solo_numeros('codigo_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('codigo_congreso','KO_codigo_congreso_numeros');
            return false;
        }
        DOM_class.mostrarexitovalor('codigo_congreso');
        return true;
    }

    static comprobar_codigo_congreso_SEARCH() {

        if (validacionesatomicas.es_vacio('codigo_congreso')) {
        } else {
            DOM_class.mostrarexitovalor('codigo_congreso');
            return true;
        } if (validacionesatomicas.size_maximo('codigo_congreso', 11)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('codigo_congreso', 'KO_codigo_congreso_tam_max');
            DOM_class.mostrarerrorvalor('codigo_congreso');
            return false;
        }
        if(validacionesatomicas.solo_numeros('codigo_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('codigo_congreso','KO_codigo_congreso_numeros');
            DOM_class.mostrarerrorvalor('codigo_congreso');
            return false;
        }
        DOM_class.mostrarexitovalor('codigo_congreso');
        return true;
    }

    //Validaciones de NombreC:
    static comprobar_nombre_congreso() {

        if (validacionesatomicas.size_minimo('nombre_congreso', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_congreso', 'KO_nombre_congreso_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('nombre_congreso', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_congreso', 'KO_nombre_congreso_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('nombre_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_congreso','KO_nombre_congreso_acentos_ñ_espacios');
            return false;
        }
        DOM_class.mostrarexitovalor('nombre_congreso');
        return true;
    }

    static comprobar_nombre_congreso_SEARCH() {

        if (validacionesatomicas.es_vacio('nombre_congreso')) {
            DOM_class.mostrarexitovalor('nombre_congreso');
            return true;
        }
        if (validacionesatomicas.size_maximo('nombre_congreso', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_congreso', 'KO_nombre_congreso_tam_max');
            DOM_class.mostrarerrorvalor('nombre_congreso');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('nombre_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_congreso','KO_nombre_congreso_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('nombre_congreso');
            return false;
        }
        DOM_class.mostrarexitovalor('nombre_congreso');
        return true;
    }

    //Validaciones de AcronimoC:
    static comprobar_acronimo_congreso() {

        if (validacionesatomicas.size_minimo('acronimo_congreso', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimo_congreso', 'KO_acronimo_congreso_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('acronimo_congreso', 20)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimo_congreso', 'KO_acronimo_congreso_tam_max');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios('acronimo_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimo_congreso','KO_acronimo_congreso_no_acentos_ñ_espacios');
            return false;
        }
        DOM_class.mostrarexitovalor('acronimo_congreso');
        return true;
    }

    static comprobar_acronimo_congreso_SEARCH() {

        if (validacionesatomicas.es_vacio('acronimo_congreso')) {
            DOM_class.mostrarexitovalor('acronimo_congreso');
            return false;
        } if (validacionesatomicas.size_maximo('acronimo_congreso', 20)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimo_congreso', 'KO_acronimo_congreso_tam_max');
            DOM_class.mostrarerrorvalor('acronimo_congreso');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios('acronimo_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimo_congreso','KO_acronimo_congreso_no_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('acronimo_congreso');
            return false;
        }
        DOM_class.mostrarexitovalor('acronimo_congreso');
        return true;
    }

    //Validaciones de AnhoC:
    static comprobar_anho_congreso() {

        if (validacionesatomicas.size_minimo('anho_congreso', 10)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('anho_congreso', 'KO_anho_congreso_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('anho_congreso', 10)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('anho_congreso', 'KO_anho_congreso_tam_max');
            return false;
        }
        if(validacionesatomicas.formato_fecha_correcto('anho_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('anho_congreso','KO_anho_congreso_formato_fecha_correcto');
            return false;
        }
        DOM_class.mostrarexitovalor('anho_congreso');
        return true;
    }

    static comprobar_anho_congreso_SEARCH() {

        if (validacionesatomicas.es_vacio('anho_congreso')) {
            DOM_class.mostrarexitovalor('anho_congreso');
            return false;
        } if (validacionesatomicas.size_maximo('anho_congreso', 10)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('anho_congreso', 'KO_anho_congreso_tam_max');
            DOM_class.mostrarerrorvalor('anho_congreso');
            return false;
        }
        if(validacionesatomicas.formato_fecha_correcto('anho_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('anho_congreso','KO_anho_congreso_formato_fecha_correcto');
            DOM_class.mostrarerrorvalor('anho_congreso');
            return false;
        }
        DOM_class.mostrarexitovalor('anho_congreso');
        return true;
    }

    //Validaciones de LugarC:
    static comprobar_lugar_congreso() {

        if (validacionesatomicas.size_minimo('lugar_congreso', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('lugar_congreso', 'KO_lugar_congreso_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('lugar_congreso', 20)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('lugar_congreso', 'KO_lugar_congreso_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('lugar_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('lugar_congreso','KO_lugar_congreso_acentos_ñ_espacios');
            return false;
        }
        DOM_class.mostrarexitovalor('lugar_congreso');
        return true;
    }

    static comprobar_lugar_congreso_SEARCH() {

        if (validacionesatomicas.es_vacio('lugar_congreso')) {
            DOM_class.mostrarexitovalor('lugar_congreso');
            return true;
        } if (validacionesatomicas.size_maximo('lugar_congreso', 20)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('lugar_congreso', 'KO_lugar_congreso_tam_max');
            DOM_class.mostrarerrorvalor('lugar_congreso');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('lugar_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('lugar_congreso','KO_lugar_congreso_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('lugar_congreso');
            return false;
        }
        DOM_class.mostrarexitovalor('lugar_congreso');
        return true;
    }

    //Validaciones de FihceropdfC:
    static comprobar_nuevo_ficheropdf_congreso(){
        if(validacionesatomicas.size_minimo_extension('nuevo_ficheropdf_congreso',1)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_ficheropdf_congreso','KO_nuevo_ficheropdf_congreso_tam_min');
            return false;
        }
        if(validacionesatomicas.size_maximo_extension('nuevo_ficheropdf_congreso',20)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_ficheropdf_congreso','KO_nuevo_ficheropdf_congreso_tam_max');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios_fich('nuevo_ficheropdf_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_ficheropdf_congreso','KO_nuevo_ficheropdf_congreso_no_acentos_ñ_espacios_fich');
            return false;
        }
        if(validacionesatomicas.extension_fich_pdf('nuevo_ficheropdf_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_ficheropdf_congreso','KO_nuevo_ficheropdf_congreso_extension_fich_pdf');
            return false;
        }
        DOM_class.mostrarexitovalor('nuevo_ficheropdf_congreso');
        return true;
    }

    static comprobar_nuevo_ficheropdf_congreso_EDIT(){
        if(!validacionesatomicas.es_vacio('nuevo_ficheropdf_congreso')){
            if(validacionesatomicas.size_minimo_extension('nuevo_ficheropdf_congreso',1)){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nuevo_ficheropdf_congreso','KO_nuevo_ficheropdf_congreso_tam_min');
                return false;
            }
            if(validacionesatomicas.size_maximo_extension('nuevo_ficheropdf_congreso',20)){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nuevo_ficheropdf_congreso','KO_nuevo_ficheropdf_congreso_tam_max');
                return false;
            }
            if(validacionesatomicas.no_acentos_ñ_espacios_fich('nuevo_ficheropdf_congreso')){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nuevo_ficheropdf_congreso','KO_nuevo_ficheropdf_congreso_no_acentos_ñ_espacios_fich');
                return false;
            }
            if(validacionesatomicas.extension_fich_pdf('nuevo_ficheropdf_congreso')){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nuevo_ficheropdf_congreso','KO_nuevo_ficheropdf_congreso_extension_fich_pdf');
                return false;
            }
        }
        DOM_class.mostrarexitovalor('nuevo_ficheropdf_congreso');
        return true;
    }

    static comprobar_nuevo_ficheropdf_congreso_SEARCH(){
        if(validacionesatomicas.es_vacio('nuevo_ficheropdf_congreso')){
            DOM_class.mostrarexitovalor('nuevo_ficheropdf_congreso');
            return true;
        }
        if(validacionesatomicas.size_maximo_extension('nuevo_ficheropdf_congreso',20)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_ficheropdf_congreso','KO_nuevo_ficheropdf_congreso_tam_max');
            DOM_class.mostrarerrorvalor('nuevo_ficheropdf_congreso');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios_fich('nuevo_ficheropdf_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_ficheropdf_congreso','KO_nuevo_ficheropdf_congreso_no_acentos_ñ_espacios_fich');
            DOM_class.mostrarerrorvalor('nuevo_ficheropdf_congreso');
            return false;
        }

        DOM_class.mostrarexitovalor('nuevo_ficheropdf_congreso');
        return true;
    }

    static comprobar_ficheropdf_congreso(){
        if(validacionesatomicas.size_minimo_extension('ficheropdf_congreso',1)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ficheropdf_congreso','KO_ficheropdf_congreso_tam_min');
            return false;
        }
        if(validacionesatomicas.size_maximo_extension('ficheropdf_congreso',20)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ficheropdf_congreso','KO_ficheropdf_congreso_tam_max');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios_fich('ficheropdf_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ficheropdf_congreso','KO_ficheropdf_congreso_no_acentos_ñ_espacios_fich');
            return false;
        }
        if(validacionesatomicas.extension_fich_pdf('ficheropdf_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ficheropdf_congreso','KO_ficheropdf_congreso_extension_fich_pdf');
            return false;
        }
        DOM_class.mostrarexitovalor('ficheropdf_congreso');
        return true;
    }

    static comprobar_ficheropdf_congreso_SEARCH(){
        if(validacionesatomicas.es_vacio('ficheropdf_congreso')){
            DOM_class.mostrarexitovalor('ficheropdf_congreso');
            return true;
        }
        if(validacionesatomicas.size_maximo_extension('ficheropdf_congreso',20)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ficheropdf_congreso','KO_ficheropdf_congreso_tam_max');
            DOM_class.mostrarerrorvalor('ficheropdf_congreso');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios_fich('ficheropdf_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ficheropdf_congreso','KO_ficheropdf_congreso_no_acentos_ñ_espacios_fich');
            DOM_class.mostrarerrorvalor('ficheropdf_congreso');
            return false;
        }
        DOM_class.mostrarexitovalor('ficheropdf_congreso');
        return true;
    }

static recargarform(){

    document.getElementById("IU_form").innerHTML= '';
    document.getElementById("IU_form").innerHTML=`
    
    <label class="label_codigo_congreso">Codigo de congreso: </label>
    <input type='text' id='codigo_congreso' name='codigo_congreso'></input>
    <div id="div_error_codigo_congreso" class="errorcampo"><a id="error_codigo_congreso"></a></div>
    <br>

    <label class="label_nombre_congreso">Nombre del congreso: </label>
    <input type='text' id='nombre_congreso' name='nombre_congreso'></input>
    <div id="div_error_nombre_congreso" class="errorcampo"><a id="error_nombre_congreso"></a></div>
    <br>

    <label class="label_acronimo_congreso">Acronimo del congreso: </label>
    <input type='text' id='acronimo_congreso' name='acronimo_congreso'></input>
    <div id="div_error_acronimo_congreso" class="errorcampo"><a id="error_acronimo_congreso"></a></div>
    <br>

    <label class="label_anho_congreso">Fecha del congreso: </label>
    <input type='date' id='anho_congreso' name='anho_congreso'></input>
    <div id="div_error_anho_congreso" class="errorcampo"><a id="error_anho_congreso"></a></div>
    <br>

    <label class="label_lugar_congreso">Lugar del congreso: </label>
    <input type='text' id='lugar_congreso' name='lugar_congreso'></input>
    <div id="div_error_lugar_congreso" class="errorcampo"><a id="error_lugar_congreso"></a></div>
    <br>

    <label id="label_ficheropdf_congreso" class="label_ficheropdf_congreso">Fichero PDF del congreso: </label>
    <input type='text' id='ficheropdf_congreso' name='ficheropdf_congreso'></input>
    <a id="link_ficheropdf_congreso" href="http://193.147.87.202/ET2/filesuploaded/files_ficheropdf_congreso/"><img src="./iconos/FILE.png" />

    <div id="div_error_ficheropdf_congreso" class="errorcampo"><a id="error_ficheropdf_congreso"></a></div>
        
    <label id="label_nuevo_ficheropdf_congreso" class="label_nuevo_ficheropdf_congreso">Nuevo fichero pdf del congreso: </label>
    <input type='file' id='nuevo_ficheropdf_congreso' name='nuevo_ficheropdf_congreso'></input>
    <div id="div_error_nuevo_ficheropdf_congreso" class="errorcampo"><a id="error_nuevo_ficheropdf_congreso"></a></div>
    <br>

    `;

        let campos = document.forms['IU_form'].elements;
        for (let i = 0; i < campos.length; i++) {
            if (eval(document.getElementById('div_error_' + campos[i].id))) {
                document.getElementById('div_error_' + campos[i].id).style.display = 'none';
            }
        }
        setLang();
    }

}