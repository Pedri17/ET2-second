class Gestion_congreso extends GestionEntidad{
    static resetearformcongreso() {
        GestionEntidad.resetearForm();
    }

//Formularios------------------------------------------------------------------------------------
    static async createForm_ADD(){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_programa";  
        document.getElementById('IU_form').action = 'javascript:Gestion_congreso.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_congreso.comprobar_submit();');

        document.getElementById('codigo_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_codigo_congreso()');

        document.getElementById('nombre_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_nombre_congreso()');
        
        document.getElementById('acronimo_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_acronimo_congreso()');
        
        document.getElementById('anho_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_anho_congreso()');
        
        document.getElementById('lugar_congreso').setAttribute('onblur', 'Gestion_congreso.comprobar_lugar_congreso()');

        document.getElementById('nuevo_ficheropdf_congreso').setAttribute('onblur','Gestion_programa.comprobar_nuevo_ficheropdf_congreso()');
        
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
    static async createForm_EDIT(codigo_congreso, nombre_congreso, acronimo_congreso, anho_congreso, lugar_congreso, ficheropdf_congreso){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_programa";
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit_EDIT();');

        document.getElementById('codigo_congreso').setAttribute('onblur', 'Gestion_programa.comprobar_codigo_congreso()');
        document.getElementById('codigo_congreso').value = codigo_congreso;
        document.getElementById('codigo_congreso').setAttribute("readonly","");

        document.getElementById('nombre_congreso').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_congreso()');
        document.getElementById('nombre_congreso').value = nombre_congreso;

        document.getElementById('acronimo_congreso').setAttribute('onblur', 'Gestion_programa.comprobar_acronimo_congreso()');
        document.getElementById('acronimo_congreso').value = acronimo_congreso;

        document.getElementById('anho_congreso').setAttribute('onblur', 'Gestion_programa.comprobar_anho_congreso()');
        document.getElementById('anho_congreso').value = anho_congreso;

        document.getElementById('lugar_congreso').setAttribute('onblur', 'Gestion_programa.comprobar_lugar_congreso()');
        document.getElementById('lugar_congreso').value = lugar_congreso;

        document.getElementById('ficheropdf_congreso').value = ficheropdf_congreso;
        document.getElementById('link_ficheropdf_congreso').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_ficheropdf_congreso/'+ficheropdf_congreso.value);
        document.getElementById('ficheropdf_congreso').setAttribute("readonly",true);

        document.getElementById('nuevo_ficheropdf_congreso').setAttribute('onblur','Gestion_programa.comprobar_nuevo_ficheropdf_congreso()');

        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/EDIT.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);

        setLang();

        document.getElementById('div_IU_form').style.display = 'block';

    }

    static async createForm_DELETE(codigo_congreso, nombre_congreso, acronimo_congreso, anho_congreso, lugar_congreso, ficheropdf_congreso){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_programa";
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.DELETE();';

        document.getElementById('codigo_congreso').value = codigo_congreso;
        document.getElementById('codigo_congreso').setAttribute('readonly',true);

        document.getElementById('nombre_congreso').value = nombre_congreso;
        document.getElementById('nombre_congreso').setAttribute('readonly',true);

        document.getElementById('acronimo_congreso').value = acronimo_congreso;
        document.getElementById('acronimo_congreso').setAttribute('readonly',true);

        document.getElementById('anho_congreso').value = anho_congreso;
        document.getElementById('anho_congreso').setAttribute('readonly',true);

        document.getElementById('lugar_congreso').value = lugar_congreso;
        document.getElementById('lugar_congreso').setAttribute('readonly',true);

        document.getElementById('ficheropdf_congreso').value = ficheropdf_congreso;
        document.getElementById('ficheropdf_congreso').setAttribute('readonly',true);
        document.getElementById('ficheropdf_congreso').setAttribute("readonly", true);
        document.getElementById("link_ficheropdf_congreso").href += ficheropdf_congreso;

        document.getElementById("label_nuevo_ficheropdf_congreso").style.display = 'none';
        document.getElementById("nuevo_ficheropdf_congreso").style.display = 'none';

        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/DELETE.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);

        GestionEntidad.ponerReadOnly();

        setLang();

        document.getElementById('div_IU_form').style.display = 'block';
    }

    static async createForm_SHOWCURRENT(codigo_congreso, nombre_congreso, acronimo_congreso, anho_congreso, lugar_congreso, ficheropdf_congreso){
        this.createForm_DELETE(codigo_congreso, nombre_congreso, acronimo_congreso, anho_congreso, lugar_congreso, ficheropdf_congreso);

        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SHOWCURRENT_programa";
        document.getElementById('botondelete').remove();

        let imgshowcurrent = document.createElement('img');
        imgshowcurrent.src = './iconos/SHOWCURRENT.png';
        imgshowcurrent.setAttribute("onclick","DOM_class.cerrar_div_formulario();")
        document.getElementById('IU_form').append(imgshowcurrent);

        setLang();
    }

    static async createForm_SEARCH(){

        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SEARCH_programa"; 
        this.recargarform();
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.SEARCH();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit_SEARCH();');

        document.getElementById('codigo_congreso').setAttribute('onblur', 'Gestion_programa.comprobar_codigo_congreso_SEARCH()');
        
        document.getElementById('nombre_congreso').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_congreso_SEARCH()');
        
        document.getElementById('acronimo_congreso').setAttribute('onblur', 'Gestion_programa.comprobar_acronimo_congreso_SEARCH()');
        
        document.getElementById('anho_congreso').setAttribute('onblur', 'Gestion_programa.comprobar_anho_congreso_SEARCH()');
        
        document.getElementById('lugar_congreso').setAttribute('onblur', 'Gestion_programa.comprobar_lugar_congreso_SEARCH()');

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
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async SEARCH(){
        await this.peticionBackGeneral('IU_form', 'congreso', 'SEARCH')
        .then((respuesta) => {
            this.recargarform();
            let congreso = new Gestion_programa('congresos',respuesta['resource'],Array('dni','nombre_congreso')); congreso.mostrarTabla();
            if (respuesta['code'] == 'RECORDSET_VACIO'){
                document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
            }
        });
    }

//Validaciones----------------------------------------------------------------------

    //Validaciones de CodigoC:
    static comprobar_codigo_congreso() {

        if (ValidacionesAtomicas.size_minimo('codigo_congreso', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('codigo_congreso', 'KO_codigo_congreso_tam_min');
            return false;
        } if (ValidacionesAtomicas.size_maximo('codigo_congreso', 11)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('codigo_congreso', 'KO_codigo_congreso_tam_max');
            return false;
        }
        if(ValidacionesAtomicas.solo_numeros('codigo_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('codigo_congreso','KO_codigo_congreso_numeros');
            return false;
        }
        DOM_class.exito('codigo_congreso');
        return true;
    }

    static comprobar_codigo_congreso_SEARCH() {

        if (ValidacionesAtomicas.es_vacio('codigo_congreso')) {
        } else {
            DOM_class.mostrarexitovalor('codigo_congreso');
            return true;
        } if (ValidacionesAtomicas.size_maximo('codigo_congreso', 11)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('codigo_congreso', 'KO_codigo_congreso_tam_max');
            DOM_class.mostrarerrorvalor('codigo_congreso');
            return false;
        }
        if(ValidacionesAtomicas.solo_numeros('codigo_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('codigo_congreso','KO_codigo_congreso_numeros');
            DOM_class.mostrarerrorvalor('codigo_congreso');
            return false;
        }
        DOM_class.exito('codigo_congreso');
        return true;
    }

    //Validaciones de NombreC:
    static comprobar_nombre_congreso() {

        if (ValidacionesAtomicas.size_minimo('nombre_congreso', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_congreso', 'KO_nombre_congreso_tam_min');
            return false;
        } if (ValidacionesAtomicas.size_maximo('nombre_congreso', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_congreso', 'KO_nombre_congreso_tam_max');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios('nombre_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_congreso','KO_nombre_congreso_acentos_ñ_espacios');
            return false;
        }
        DOM_class.exito('nombre_congreso');
        return true;
    }

    static comprobar_nombre_congreso_SEARCH() {

        if (ValidacionesAtomicas.es_vacio('nombre_congreso')) {
        } else {
            DOM_class.mostrarexitovalor('nombre_congreso');
            return true;
        } if (ValidacionesAtomicas.size_maximo('nombre_congreso', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_congreso', 'KO_nombre_congreso_tam_max');
            DOM_class.mostrarerrorvalor('nombre_congreso');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios('nombre_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_congreso','KO_nombre_congreso_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('nombre_congreso');
            return false;
        }
        DOM_class.exito('nombre_congreso');
        return true;
    }

    //Validaciones de AcronimoC:
    static comprobar_acronimo_congreso() {

        if (ValidacionesAtomicas.size_minimo('acronimo_congreso', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimo_congreso', 'KO_acronimo_congreso_tam_min');
            return false;
        } if (ValidacionesAtomicas.size_maximo('acronimo_congreso', 20)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimo_congreso', 'KO_acronimo_congreso_tam_max');
            return false;
        }
        if(ValidacionesAtomicas.no_acentos_ñ_espacios('acronimo_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimo_congreso','KO_acronimo_congreso_no_acentos_ñ_espacios');
            return false;
        }
        DOM_class.exito('acronimo_congreso');
        return true;
    }

    static comprobar_acronimo_congreso_SERACH() {

        if (ValidacionesAtomicas.es_vacio('acronimo_congreso')) {
        } else {
            DOM_class.mostrarexitovalor('acronimo_congreso');
            return false;
        } if (ValidacionesAtomicas.size_maximo('acronimo_congreso', 20)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimo_congreso', 'KO_acronimo_congreso_tam_max');
            DOM_class.mostrarerrorvalor('acronimo_congreso');
            return false;
        }
        if(ValidacionesAtomicas.no_acentos_ñ_espacios('acronimo_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimo_congreso','KO_acronimo_congreso_no_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('acronimo_congreso');
            return false;
        }
        DOM_class.exito('acronimo_congreso');
        return true;
    }

    //Validaciones de AnhoC:


    //Validaciones de LugarC:
    static comprobar_lugar_congreso() {

        if (ValidacionesAtomicas.size_minimo('lugar_congreso', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('lugar_congreso', 'KO_lugar_congreso_tam_min');
            return false;
        } if (ValidacionesAtomicas.size_maximo('lugar_congreso', 20)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('lugar_congreso', 'KO_lugar_congreso_tam_max');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios('lugar_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('lugar_congreso','KO_lugar_congreso_acentos_ñ_espacios');
            return false;
        }
        DOM_class.exito('lugar_congreso');
        return true;
    }

    static comprobar_lugar_congreso_SEARCH() {

        if (ValidacionesAtomicas.es_vacio('lugar_congreso')) {
        } else {
            DOM_class.mostrarexitovalor('lugar_congreso');
            return true;
        } if (ValidacionesAtomicas.size_maximo('lugar_congreso', 20)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('lugar_congreso', 'KO_lugar_congreso_tam_max');
            DOM_class.mostrarerrorvalor('lugar_congreso');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios('lugar_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('lugar_congreso','KO_lugar_congreso_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('lugar_congreso');
            return false;
        }
        DOM_class.exito('lugar_congreso');
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
        if(validacionesatomicas.extension_fich('nuevo_ficheropdf_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_ficheropdf_congreso','KO_nuevo_ficheropdf_congreso_extension_fich');
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
            if(validacionesatomicas.extension_fich('nuevo_ficheropdf_congreso')){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nuevo_ficheropdf_congreso','KO_nuevo_ficheropdf_congreso_extension_fich');
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
        if(validacionesatomicas.extension_fich('ficheropdf_congreso')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ficheropdf_congreso','KO_ficheropdf_congreso_extension_fich');
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
    <input type='text' id='anho_congreso' name='anho_congreso'></input>
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