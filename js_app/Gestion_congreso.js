class Gestion_congreso extends GestionEntidad{
//Formularios------------------------------------------------------------------------------------
    static async createForm_ADD(){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_congreso";  
        document.getElementById('IU_form').action = 'javascript:Gestion_congreso.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_congreso.comprobar_submit();');

        document.getElementById('CodigoC').setAttribute('onblur', 'Gestion_congreso.comprobar_CodigoC()');

        document.getElementById('NombreC').setAttribute('onblur', 'Gestion_congreso.comprobar_NombreC()');
        
        document.getElementById('AcronimoC').setAttribute('onblur', 'Gestion_congreso.comprobar_AcronimoC()');
        
        document.getElementById('AnhoC').setAttribute('onblur', 'Gestion_congreso.comprobar_AnhoC()');
        
        document.getElementById('LugarC').setAttribute('onblur', 'Gestion_congreso.comprobar_LugarC()');

        document.getElementById('nuevo_FicheropdfC').setAttribute('onblur','Gestion_congreso.comprobar_nuevo_FicheropdfC()');
        
        document.getElementById("label_FicheropdfC").style.display = 'none';
        document.getElementById("FicheropdfC").style.display = 'none';
        document.getElementById("link_FicheropdfC").style.display = 'none';

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

        document.getElementById('CodigoC').setAttribute('onblur', 'Gestion_congreso.comprobar_CodigoC()');
        document.getElementById('CodigoC').value = datostupla.CodigoC;
        document.getElementById('CodigoC').setAttribute("readonly","");

        document.getElementById('NombreC').setAttribute('onblur', 'Gestion_congreso.comprobar_NombreC()');
        document.getElementById('NombreC').value = datostupla.NombreC;

        document.getElementById('AcronimoC').setAttribute('onblur', 'Gestion_congreso.comprobar_AcronimoC()');
        document.getElementById('AcronimoC').value = datostupla.AcronimoC;

        document.getElementById('AnhoC').setAttribute('onblur', 'Gestion_congreso.comprobar_AnhoC()');
        document.getElementById('AnhoC').value = datostupla.AnhoC;

        document.getElementById('LugarC').setAttribute('onblur', 'Gestion_congreso.comprobar_LugarC()');
        document.getElementById('LugarC').value = datostupla.LugarC;

        document.getElementById('FicheropdfC').value = datostupla.FicheropdfC;
        document.getElementById('link_FicheropdfC').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_FicheropdfC/'+FicheropdfC.value);
        document.getElementById('FicheropdfC').setAttribute("readonly",true);

        document.getElementById('nuevo_FicheropdfC').setAttribute('onblur','Gestion_congreso.comprobar_nuevo_FicheropdfC()');

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

        document.getElementById('CodigoC').value = datostupla.CodigoC;
        document.getElementById('CodigoC').setAttribute('readonly',true);

        document.getElementById('NombreC').value = datostupla.NombreC;
        document.getElementById('NombreC').setAttribute('readonly',true);

        document.getElementById('AcronimoC').value = datostupla.AcronimoC;
        document.getElementById('AcronimoC').setAttribute('readonly',true);

        document.getElementById('AnhoC').value = datostupla.AnhoC;
        document.getElementById('AnhoC').setAttribute('readonly',true);

        document.getElementById('LugarC').value = datostupla.LugarC;
        document.getElementById('LugarC').setAttribute('readonly',true);

        document.getElementById('FicheropdfC').value = datostupla.FicheropdfC;
        document.getElementById('FicheropdfC').setAttribute('readonly',true);
        document.getElementById('FicheropdfC').setAttribute("readonly", true);
        document.getElementById("link_FicheropdfC").href += datostupla.FicheropdfC;

        document.getElementById("label_nuevo_FicheropdfC").style.display = 'none';
        document.getElementById("nuevo_FicheropdfC").style.display = 'none';

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

        document.getElementById('CodigoC').setAttribute('onblur', 'Gestion_congreso.comprobar_CodigoC_SEARCH()');
        
        document.getElementById('NombreC').setAttribute('onblur', 'Gestion_congreso.comprobar_NombreC_SEARCH()');
        
        document.getElementById('AcronimoC').setAttribute('onblur', 'Gestion_congreso.comprobar_AcronimoC_SEARCH()');
        
        document.getElementById('AnhoC').setAttribute('onblur', 'Gestion_congreso.comprobar_AnhoC_SEARCH()');
        
        document.getElementById('LugarC').setAttribute('onblur', 'Gestion_congreso.comprobar_LugarC_SEARCH()');

        document.getElementById("label_nuevo_FicheropdfC").style.display = 'none';
        document.getElementById("nuevo_FicheropdfC").style.display = 'none';
        document.getElementById("link_FicheropdfC").style.display = 'none';

        let botonsearch = document.createElement('button');
        botonsearch.type = 'submit';
        let imgsearch = document.createElement('img');
        imgsearch.src = './iconos/SEARCH.png';
        botonsearch.append(imgsearch);
        document.getElementById('IU_form').append(botonsearch);        

        // para actualizar idioma
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';

    }

//Submits---------------------------------------------------------------------------------------

    static comprobar_submit(){

        let valor1 = this.comprobar_CodigoC();
        let valor2 = this.comprobar_NombreC();
        let valor3 = this.comprobar_AcronimoC();
        let valor4 = this.comprobar_AnhoC();
        let valor5 = this.comprobar_LugarC();
        let valor6 = this.comprobar_nuevo_FicheropdfC();

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

        let valor1 = this.comprobar_CodigoC();
        let valor2 = this.comprobar_NombreC();
        let valor3 = this.comprobar_AcronimoC();
        let valor4 = this.comprobar_AnhoC();
        let valor5 = this.comprobar_LugarC();
        let valor6 = this.comprobar_nuevo_FicheropdfC_EDIT();

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

        let valor1 = this.comprobar_CodigoC_SEARCH();
        let valor2 = this.comprobar_NombreC_SEARCH();
        let valor3 = this.comprobar_AcronimoC_SEARCH();
        let valor4 = this.comprobar_AnhoC_SEARCH();
        let valor5 = this.comprobar_LugarC_SEARCH();
        let valor6 = this.comprobar_FicheropdfC_SEARCH();

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
                this.recargarform();
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
                this.recargarform();
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
            // !! comprobar que el array solo tiene que tener CodigoC
            let congreso = new Gestion_congreso('congreso',respuesta['resource'],Array('CodigoC', 'NombreC', 'AcronimoC', 'AnhoC', 'LugarC', 'FicheropdfC')); congreso.mostrartabla();
            if (respuesta['code'] == 'RECORDSET_VACIO'){
                document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
            }
        });
    }

//Validaciones----------------------------------------------------------------------

    //Validaciones de CodigoC:
    static comprobar_CodigoC() {

        if (validacionesatomicas.size_minimo('CodigoC', 1)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('CodigoC', 'KO_CodigoC_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('CodigoC', 11)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('CodigoC', 'KO_CodigoC_tam_max');
            return false;
        }
        if(validacionesatomicas.solo_numeros('CodigoC')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('CodigoC','KO_CodigoC_numeros');
            return false;
        }
        DOM_class.mostrarexitovalor('CodigoC');
        return true;
    }

    static comprobar_CodigoC_SEARCH() {

        if (validacionesatomicas.es_vacio('CodigoC')) {
            DOM_class.mostrarexitovalor('CodigoC');
            return true;
        } if (validacionesatomicas.size_maximo('CodigoC', 11)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('CodigoC', 'KO_CodigoC_tam_max');
            DOM_class.mostrarerrorvalor('CodigoC');
            return false;
        }
        if(validacionesatomicas.solo_numeros('CodigoC')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('CodigoC','KO_CodigoC_numeros');
            DOM_class.mostrarerrorvalor('CodigoC');
            return false;
        }
        DOM_class.mostrarexitovalor('CodigoC');
        return true;
    }

    //Validaciones de NombreC:
    static comprobar_NombreC() {

        if (validacionesatomicas.size_minimo('NombreC', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('NombreC', 'KO_NombreC_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('NombreC', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('NombreC', 'KO_NombreC_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('NombreC')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('NombreC','KO_NombreC_acentos_ñ_espacios');
            return false;
        }
        DOM_class.mostrarexitovalor('NombreC');
        return true;
    }

    static comprobar_NombreC_SEARCH() {

        if (validacionesatomicas.es_vacio('NombreC')) {
            DOM_class.mostrarexitovalor('NombreC');
            return true;
        }
        if (validacionesatomicas.size_maximo('NombreC', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('NombreC', 'KO_NombreC_tam_max');
            DOM_class.mostrarerrorvalor('NombreC');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('NombreC')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('NombreC','KO_NombreC_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('NombreC');
            return false;
        }
        DOM_class.mostrarexitovalor('NombreC');
        return true;
    }

    //Validaciones de AcronimoC:
    static comprobar_AcronimoC() {

        if (validacionesatomicas.size_minimo('AcronimoC', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('AcronimoC', 'KO_AcronimoC_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('AcronimoC', 20)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('AcronimoC', 'KO_AcronimoC_tam_max');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios('AcronimoC')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('AcronimoC','KO_AcronimoC_no_acentos_ñ_espacios');
            return false;
        }
        DOM_class.mostrarexitovalor('AcronimoC');
        return true;
    }

    static comprobar_AcronimoC_SEARCH() {

        if (validacionesatomicas.es_vacio('AcronimoC')) {
            DOM_class.mostrarexitovalor('AcronimoC');
            return false;
        } if (validacionesatomicas.size_maximo('AcronimoC', 20)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('AcronimoC', 'KO_AcronimoC_tam_max');
            DOM_class.mostrarerrorvalor('AcronimoC');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios('AcronimoC')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('AcronimoC','KO_AcronimoC_no_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('AcronimoC');
            return false;
        }
        DOM_class.mostrarexitovalor('AcronimoC');
        return true;
    }

    //Validaciones de AnhoC:
    static comprobar_AnhoC() {

        if (validacionesatomicas.size_minimo('AnhoC', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('AnhoC', 'KO_AnhoC_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('AnhoC', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('AnhoC', 'KO_AnhoC_tam_max');
            return false;
        }
        if(validacionesatomicas.solo_numeros('AnhoC')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('AnhoC','KO_AnhoC_formato_fecha_correcto');
            return false;
        }
        DOM_class.mostrarexitovalor('AnhoC');
        return true;
    }

    static comprobar_AnhoC_SEARCH() {

        if (validacionesatomicas.es_vacio('AnhoC')) {
            DOM_class.mostrarexitovalor('AnhoC');
            return true;
        } 
        if (validacionesatomicas.size_maximo('AnhoC', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('AnhoC', 'KO_AnhoC_tam_max');
            DOM_class.mostrarerrorvalor('AnhoC');
            return false;
        }
        if(validacionesatomicas.solo_numeros('AnhoC')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('AnhoC','KO_AnhoC_formato_fecha_correcto');
            DOM_class.mostrarerrorvalor('AnhoC');
            return false;
        }
        DOM_class.mostrarexitovalor('AnhoC');
        return true;
    }

    //Validaciones de LugarC:
    static comprobar_LugarC() {

        if (validacionesatomicas.size_minimo('LugarC', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('LugarC', 'KO_LugarC_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('LugarC', 20)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('LugarC', 'KO_LugarC_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('LugarC')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('LugarC','KO_LugarC_acentos_ñ_espacios');
            return false;
        }
        DOM_class.mostrarexitovalor('LugarC');
        return true;
    }

    static comprobar_LugarC_SEARCH() {

        if (validacionesatomicas.es_vacio('LugarC')) {
            DOM_class.mostrarexitovalor('LugarC');
            return true;
        } if (validacionesatomicas.size_maximo('LugarC', 20)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('LugarC', 'KO_LugarC_tam_max');
            DOM_class.mostrarerrorvalor('LugarC');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('LugarC')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('LugarC','KO_LugarC_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('LugarC');
            return false;
        }
        DOM_class.mostrarexitovalor('LugarC');
        return true;
    }

    //Validaciones de FihceropdfC:
    static comprobar_nuevo_FicheropdfC(){
        if(validacionesatomicas.size_minimo_extension('nuevo_FicheropdfC',1)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_FicheropdfC','KO_nuevo_FicheropdfC_tam_min');
            return false;
        }
        if(validacionesatomicas.size_maximo_extension('nuevo_FicheropdfC',20)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_FicheropdfC','KO_nuevo_FicheropdfC_tam_max');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios_fich('nuevo_FicheropdfC')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_FicheropdfC','KO_nuevo_FicheropdfC_no_acentos_ñ_espacios_fich');
            return false;
        }
        if(validacionesatomicas.extension_fich_pdf('nuevo_FicheropdfC')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_FicheropdfC','KO_nuevo_FicheropdfC_extension_fich_pdf');
            return false;
        }
        DOM_class.mostrarexitovalor('nuevo_FicheropdfC');
        return true;
    }

    static comprobar_nuevo_FicheropdfC_EDIT(){
        if(!validacionesatomicas.es_vacio('nuevo_FicheropdfC')){
            if(validacionesatomicas.size_minimo_extension('nuevo_FicheropdfC',1)){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nuevo_FicheropdfC','KO_nuevo_FicheropdfC_tam_min');
                return false;
            }
            if(validacionesatomicas.size_maximo_extension('nuevo_FicheropdfC',20)){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nuevo_FicheropdfC','KO_nuevo_FicheropdfC_tam_max');
                return false;
            }
            if(validacionesatomicas.no_acentos_ñ_espacios_fich('nuevo_FicheropdfC')){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nuevo_FicheropdfC','KO_nuevo_FicheropdfC_no_acentos_ñ_espacios_fich');
                return false;
            }
            if(validacionesatomicas.extension_fich_pdf('nuevo_FicheropdfC')){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nuevo_FicheropdfC','KO_nuevo_FicheropdfC_extension_fich_pdf');
                return false;
            }
        }
        DOM_class.mostrarexitovalor('nuevo_FicheropdfC');
        return true;
    }

    static comprobar_nuevo_FicheropdfC_SEARCH(){
        if(validacionesatomicas.es_vacio('nuevo_FicheropdfC')){
            DOM_class.mostrarexitovalor('nuevo_FicheropdfC');
            return true;
        }
        if(validacionesatomicas.size_maximo_extension('nuevo_FicheropdfC',20)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_FicheropdfC','KO_nuevo_FicheropdfC_tam_max');
            DOM_class.mostrarerrorvalor('nuevo_FicheropdfC');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios_fich('nuevo_FicheropdfC')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_FicheropdfC','KO_nuevo_FicheropdfC_no_acentos_ñ_espacios_fich');
            DOM_class.mostrarerrorvalor('nuevo_FicheropdfC');
            return false;
        }

        DOM_class.mostrarexitovalor('nuevo_FicheropdfC');
        return true;
    }

    static comprobar_FicheropdfC(){
        if(validacionesatomicas.size_minimo_extension('FicheropdfC',1)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('FicheropdfC','KO_FicheropdfC_tam_min');
            return false;
        }
        if(validacionesatomicas.size_maximo_extension('FicheropdfC',20)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('FicheropdfC','KO_FicheropdfC_tam_max');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios_fich('FicheropdfC')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('FicheropdfC','KO_FicheropdfC_no_acentos_ñ_espacios_fich');
            return false;
        }
        if(validacionesatomicas.extension_fich_pdf('FicheropdfC')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('FicheropdfC','KO_FicheropdfC_extension_fich_pdf');
            return false;
        }
        DOM_class.mostrarexitovalor('FicheropdfC');
        return true;
    }

    static comprobar_FicheropdfC_SEARCH(){
        if(validacionesatomicas.es_vacio('FicheropdfC')){
            DOM_class.mostrarexitovalor('FicheropdfC');
            return true;
        }
        if(validacionesatomicas.size_maximo_extension('FicheropdfC',20)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('FicheropdfC','KO_FicheropdfC_tam_max');
            DOM_class.mostrarerrorvalor('FicheropdfC');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios_fich('FicheropdfC')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('FicheropdfC','KO_FicheropdfC_no_acentos_ñ_espacios_fich');
            DOM_class.mostrarerrorvalor('FicheropdfC');
            return false;
        }
        DOM_class.mostrarexitovalor('FicheropdfC');
        return true;
    }

static recargarform(){

    document.getElementById("IU_form").innerHTML= '';
    document.getElementById("IU_form").innerHTML=`
    
    <label class="label_CodigoC">Codigo de congreso: </label>
    <input type='text' id='CodigoC' name='CodigoC'></input>
    <div id="div_error_CodigoC" class="errorcampo"><a id="error_CodigoC"></a></div>
    <br>

    <label class="label_NombreC">Nombre del congreso: </label>
    <input type='text' id='NombreC' name='NombreC'></input>
    <div id="div_error_NombreC" class="errorcampo"><a id="error_NombreC"></a></div>
    <br>

    <label class="label_AcronimoC">Acronimo del congreso: </label>
    <input type='text' id='AcronimoC' name='AcronimoC'></input>
    <div id="div_error_AcronimoC" class="errorcampo"><a id="error_AcronimoC"></a></div>
    <br>

    <label class="label_AnhoC">Fecha del congreso: </label>
    <input type='number' id='AnhoC' name='AnhoC'></input>
    <div id="div_error_AnhoC" class="errorcampo"><a id="error_AnhoC"></a></div>
    <br>

    <label class="label_LugarC">Lugar del congreso: </label>
    <input type='text' id='LugarC' name='LugarC'></input>
    <div id="div_error_LugarC" class="errorcampo"><a id="error_LugarC"></a></div>
    <br>

    <label id="label_FicheropdfC" class="label_FicheropdfC">Fichero PDF del congreso: </label>
    <input type='text' id='FicheropdfC' name='FicheropdfC'></input>
    <a id="link_FicheropdfC" href="http://193.147.87.202/ET2/filesuploaded/files_FicheropdfC/"><img src="./iconos/FILE.png" />

    <div id="div_error_FicheropdfC" class="errorcampo"><a id="error_FicheropdfC"></a></div>
        
    <label id="label_nuevo_FicheropdfC" class="label_nuevo_FicheropdfC">Nuevo fichero pdf del congreso: </label>
    <input type='file' id='nuevo_FicheropdfC' name='nuevo_FicheropdfC'></input>
    <div id="div_error_nuevo_FicheropdfC" class="errorcampo"><a id="error_nuevo_FicheropdfC"></a></div>
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