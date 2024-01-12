class Gestion_usuario extends GestionEntidad{
//Formularios------------------------------------------------------------------------------------
    static async createForm_ADD(){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_usuario";  
        document.getElementById('IU_form').action = 'javascript:Gestion_usuario.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_usuario.comprobar_submit();');

        document.getElementById('LoginU').setAttribute('onblur', 'Gestion_usuario.comprobar_LoginU()');

        document.getElementById('PasswordU').setAttribute('onblur', 'Gestion_usuario.comprobar_PasswordU()');
        
        document.getElementById('NombreU').setAttribute('onblur', 'Gestion_usuario.comprobar_NombreU()');
        
        document.getElementById('ApellidosU').setAttribute('onblur', 'Gestion_usuario.comprobar_ApellidosU()');
        
        document.getElementById('TituloAcademicoU').setAttribute('onblur', 'Gestion_usuario.comprobar_TituloAcademicoU()');

        document.getElementById('TipoContratoU').setAttribute('onblur', 'Gestion_usuario.comprobar_TipoContratoU()');
        
        document.getElementById('CentroU').setAttribute('onblur', 'Gestion_usuario.comprobar_CentroU()');

        document.getElementById('DepartamentoU').setAttribute('onblur', 'Gestion_usuario.comprobar_DepartamentoU()');

        document.getElementById('UniversidadU').setAttribute('onblur', 'Gestion_usuario.comprobar_UniversidadU()');

        document.getElementById('nueva_FotoU').setAttribute('onblur','Gestion_usuario.comprobar_nueva_FotoU()');
        
        document.getElementById("label_FotoU").style.display = 'none';
        document.getElementById("FotoU").style.display = 'none';
        document.getElementById("link_FotoU").style.display = 'none';

        document.getElementById('TipoU').setAttribute('onblur', 'Gestion_usuario.comprobar_TipoU()');

        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/ADD.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);

        setLang();

        document.getElementById('div_IU_form').style.display = 'block';

    }

    static async createForm_EDIT(datostupla){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_usuario";
        document.getElementById('IU_form').action = 'javascript:Gestion_usuario.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_usuario.comprobar_submit_EDIT();');

        document.getElementById('LoginU').setAttribute('onblur', 'Gestion_usuario.comprobar_LoginU()');
        document.getElementById('LoginU').value = datostupla.LoginU;
        document.getElementById('LoginU').setAttribute("readonly","");

        document.getElementById('PasswordU').setAttribute('onblur', 'Gestion_usuario.comprobar_PasswordU()');
        document.getElementById('PasswordU').value = datostupla.PasswordU;

        document.getElementById('NombreU').setAttribute('onblur', 'Gestion_usuario.comprobar_NombreU()');
        document.getElementById('NombreU').value = datostupla.NombreU;

        document.getElementById('ApellidosU').setAttribute('onblur', 'Gestion_usuario.comprobar_ApellidosU()');
        document.getElementById('ApellidosU').value = datostupla.ApellidosU;

        document.getElementById('TituloAcademicoU').setAttribute('onblur', 'Gestion_usuario.comprobar_TituloAcademicoU()');
        document.getElementById('TituloAcademicoU').value = datostupla.TituloAcademicoU;

        document.getElementById('TipoContratoU').setAttribute('onblur', 'Gestion_usuario.comprobar_TipoContratoU()');
        document.getElementById('TipoContratoU').value = datostupla.TipoContratoU;

        document.getElementById('CentroU').setAttribute('onblur', 'Gestion_usuario.comprobar_CentroU()');
        document.getElementById('CentroU').value = datostupla.CentroU;

        document.getElementById('DepartamentoU').setAttribute('onblur', 'Gestion_usuario.comprobar_DepartamentoU()');
        document.getElementById('DepartamentoU').value = datostupla.DepartamentoU;

        document.getElementById('UniversidadU').setAttribute('onblur', 'Gestion_usuario.comprobar_UniversidadU()');
        document.getElementById('UniversidadU').value = datostupla.UniversidadU;

        document.getElementById('FotoU').value = datostupla.FotoU;
        document.getElementById('link_FotoU').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_FotoU/'+FotoU.value);
        document.getElementById('FotoU').setAttribute("readonly",true);

        document.getElementById('nueva_FotoU').setAttribute('onblur','Gestion_usuario.comprobar_nueva_FotoU()');

        document.getElementById('TipoU').setAttribute('onblur', 'Gestion_usuario.comprobar_TipoU()');
        document.getElementById('TipoU').value = datostupla.TipoU;

        let botonedit = document.createElement('button');
        botonedit.type = 'submit';
        let imgedit = document.createElement('img');
        imgedit.src = './iconos/EDIT.png';
        botonedit.append(imgedit);
        document.getElementById('IU_form').append(botonedit);

        setLang();

        document.getElementById('div_IU_form').style.display = 'block';

    }

    static async createForm_DELETE(datostupla){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_usuario";
        document.getElementById('IU_form').action = 'javascript:Gestion_usuario.DELETE();';

        document.getElementById('LoginU').value = datostupla.LoginU;
        document.getElementById('LoginU').setAttribute('readonly',true);

        document.getElementById('PasswordU').value = datostupla.PasswordU;
        document.getElementById('PasswordU').setAttribute('readonly',true);

        document.getElementById('NombreU').value = datostupla.NombreU;
        document.getElementById('NombreU').setAttribute('readonly',true);

        document.getElementById('ApellidosU').value = datostupla.ApellidosU;
        document.getElementById('ApellidosU').setAttribute('readonly',true);

        document.getElementById('TituloAcademicoU').value = datostupla.TituloAcademicoU;
        document.getElementById('TituloAcademicoU').setAttribute('readonly',true);

        document.getElementById('TipoContratoU').value = datostupla.TipoContratoU;
        document.getElementById('TipoContratoU').setAttribute('readonly',true);

        document.getElementById('CentroU').value = datostupla.CentroU;
        document.getElementById('CentroU').setAttribute('readonly',true);

        document.getElementById('DepartamentoU').value = datostupla.DepartamentoU;
        document.getElementById('DepartamentoU').setAttribute('readonly',true);

        document.getElementById('UniversidadU').value = datostupla.UniversidadU;
        document.getElementById('UniversidadU').setAttribute('readonly',true);

        document.getElementById('FotoU').value = datostupla.FotoU;
        document.getElementById('FotoU').setAttribute('readonly',true);
        document.getElementById('FotoU').setAttribute("readonly", true);
        document.getElementById("link_FotoU").href += datostupla.FotoU;

        document.getElementById("label_nueva_FotoU").style.display = 'none';
        document.getElementById("nueva_FotoU").style.display = 'none';

        document.getElementById('TipoU').value = datostupla.TipoU;
        document.getElementById('TipoU').setAttribute('readonly',true);

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

        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SHOWCURRENT_usuario";
        document.getElementById('botondelete').remove();

        let imgshowcurrent = document.createElement('img');
        imgshowcurrent.src = './iconos/SHOWCURRENT.png';
        imgshowcurrent.setAttribute("onclick","DOM_class.cerrar_div_formulario();")
        document.getElementById('IU_form').append(imgshowcurrent);

        setLang();
    }

    static async createForm_SEARCH(){

        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SEARCH_usuario"; 
        this.recargarform();
        document.getElementById('IU_form').action = 'javascript:Gestion_usuario.SEARCH();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_usuario.comprobar_submit_SEARCH();');

        document.getElementById('LoginU').setAttribute('onblur', 'Gestion_usuario.comprobar_LoginU_SEARCH()');
        
        document.getElementById('PasswordU').setAttribute('onblur', 'Gestion_usuario.comprobar_PasswordU_SEARCH()');
        
        document.getElementById('NombreU').setAttribute('onblur', 'Gestion_usuario.comprobar_NombreU_SEARCH()');
        
        document.getElementById('ApellidosU').setAttribute('onblur', 'Gestion_usuario.comprobar_ApellidosU_SEARCH()');
        
        document.getElementById('TituloAcademicoU').setAttribute('onblur', 'Gestion_usuario.comprobar_TituloAcademicoU_SEARCH()');

        document.getElementById('TipoContratoU').setAttribute('onblur', 'Gestion_usuario.comprobar_TipoContratoU_SEARCH()');
        
        document.getElementById('CentroU').setAttribute('onblur', 'Gestion_usuario.comprobar_CentroU_SEARCH()');
        
        document.getElementById('DepartamentoU').setAttribute('onblur', 'Gestion_usuario.comprobar_DepartamentoU_SEARCH()');
        
        document.getElementById('UniversidadU').setAttribute('onblur', 'Gestion_usuario.comprobar_UniversidadU_SEARCH()');

        document.getElementById("label_nueva_FotoU").style.display = 'none';
        document.getElementById("nueva_FotoU").style.display = 'none';
        document.getElementById("link_FotoU").style.display = 'none';

        document.getElementById('TipoU').setAttribute('onblur', 'Gestion_usuario.comprobar_TipoU_SEARCH()');

        let botonsearch = document.createElement('button');
        botonsearch.type = 'submit';
        let imgsearch = document.createElement('img');
        imgsearch.src = './iconos/SEARCH.png';
        botonsearch.append(imgsearch);
        document.getElementById('IU_form').append(botonsearch);

        setLang();

        document.getElementById('div_IU_form').style.display = 'block';
    }

//Submits---------------------------------------------------------------------------------------

    static comprobar_submit(){

        let valor1 = this.comprobar_LoginU();
        let valor2 = this.comprobar_PasswordU();
        let valor3 = this.comprobar_NombreU();
        let valor4 = this.comprobar_ApellidosU();
        let valor5 = this.comprobar_TituloAcademicoU();
        let valor6 = this.comprobar_TipoContratoU();
        let valor7 = this.comprobar_CentroU();
        let valor8 = this.comprobar_DepartamentoU();
        let valor9 = this.comprobar_UniversidadU();
        let valor10 = this.comprobar_nueva_FotoU();
        let valor11= this.comprobar_TipoU();

        let resultado = (
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7 &&
            valor8 &&
            valor9 &&
            valor10 &&
            valor11
        );
        return resultado;
        
    }

    static comprobar_submit_EDIT(){

        let valor1 = this.comprobar_LoginU();
        let valor2 = this.comprobar_PasswordU();
        let valor3 = this.comprobar_NombreU();
        let valor4 = this.comprobar_ApellidosU();
        let valor5 = this.comprobar_TituloAcademicoU();
        let valor6 = this.comprobar_TipoContratoU();
        let valor7 = this.comprobar_CentroU();
        let valor8 = this.comprobar_DepartamentoU();
        let valor9 = this.comprobar_UniversidadU();
        let valor10 = this.comprobar_nueva_FotoU_EDIT();
        let valor11= this.comprobar_TipoU();

        let resultado = (
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7 &&
            valor8 &&
            valor9 &&
            valor10 &&
            valor11
        );
        return resultado;
        
    }

    static comprobar_submit_SEARCH(){

        let valor1 = this.comprobar_LoginU_SEARCH();
        let valor2 = this.comprobar_PasswordU_SEARCH();
        let valor3 = this.comprobar_NombreU_SEARCH();
        let valor4 = this.comprobar_ApellidosU_SEARCH();
        let valor5 = this.comprobar_TituloAcademicoU_SEARCH();
        let valor6 = this.comprobar_TipoContratoU_SEARCH();
        let valor7 = this.comprobar_CentroU_SEARCH();
        let valor8 = this.comprobar_DepartamentoU_SEARCH();
        let valor9 = this.comprobar_UniversidadU_SEARCH();
        let valor10 = this.comprobar_FotoU_SEARCH();
        let valor11= this.comprobar_TipoU_SEARCH();

        let resultado = (
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7 &&
            valor8 &&
            valor9 &&
            valor10 &&
            valor11
        );
        return resultado;
        
    }

//Back-----------------------------------------------------------------------------------

static async ADD(){
    await this.peticionBackGeneral('IU_form', 'usuario', 'ADD')
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
    await this.peticionBackGeneral('IU_form', 'usuario', 'EDIT')
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
    await this.peticionBackGeneral('IU_form', 'usuario', 'DELETE')
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

static async SEARCH(){
    await this.peticionBackGeneral('IU_form', 'usuario', 'SEARCH')
    .then((respuesta) => {
        this.recargarform();
        let usuario = new Gestion_usuario('usuario',respuesta['resource'],Array('LoginU', 'PasswordU', 'NombreU', 'ApellidosU', 'TituloAcademicoU', 'TipoContratoU', 'CentroU', 'DepartamentoU', 'UniversidadU', 'FotoU', 'TipoU')); usuario.mostrartabla();
        if (respuesta['code'] == 'RECORDSET_VACIO'){
            document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
        }
    });
}

//Validaciones----------------------------------------------------------------------

    //Validaciones de LoginU:
    static comprobar_LoginU() {

        if (validacionesatomicas.size_minimo('LoginU', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('LoginU', 'KO_LoginU_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('LoginU', 15)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('LoginU', 'KO_LoginU_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_numeros('LoginU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('LoginU','KO_LoginU_acentos_ñ_espacios_numeros');
            return false;
        }
        DOM_class.mostrarexitovalor('LoginU');
        return true;
    }

    static comprobar_LoginU_SEARCH() {

        if (validacionesatomicas.es_vacio('LoginU')) {
            DOM_class.mostrarexitovalor('LoginU');
            return true;
        } if (validacionesatomicas.size_maximo('LoginU', 15)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('LoginU', 'KO_LoginU_tam_max');
            DOM_class.mostrarerrorvalor('LoginU');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_numeros('LoginU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('LoginU','KO_LoginU_acentos_ñ_espacios_numeros');
            DOM_class.mostrarerrorvalor('LoginU');
            return false;
        }
        DOM_class.mostrarexitovalor('LoginU');
        return true;
    }

    //Validaciones de PasswordU:
    static comprobar_PasswordU() {

        if (validacionesatomicas.size_minimo('PasswordU', 3)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('PasswordU', 'KO_PasswordU_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('PasswordU', 32)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('PasswordU', 'KO_PasswordU_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_numeros('PasswordU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('PasswordU','KO_PasswordU_acentos_ñ_espacios_numeros');
            return false;
        }
        DOM_class.mostrarexitovalor('PasswordU');
        return true;
    }

    static comprobar_PasswordU_SEARCH() {

        if (validacionesatomicas.es_vacio('PasswordU')) {
            DOM_class.mostrarexitovalor('PasswordU');
            return true;
        } if (validacionesatomicas.size_maximo('PasswordU', 32)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('PasswordU', 'KO_PasswordU_tam_max');
            DOM_class.mostrarerrorvalor('PasswordU');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_numeros('PasswordU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('PasswordU','KO_PasswordU_acentos_ñ_espacios_numeros');
            DOM_class.mostrarerrorvalor('PasswordU');
            return false;
        }
        DOM_class.mostrarexitovalor('PasswordU');
        return true;
    }

    //Validaciones de NombreU:
    static comprobar_NombreU() {

        if (validacionesatomicas.size_minimo('NombreU', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('NombreU', 'KO_NombreU_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('NombreU', 15)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('NombreU', 'KO_NombreU_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('NombreU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('NombreU','KO_NombreU_acentos_ñ_espacios');
            return false;
        }
        DOM_class.mostrarexitovalor('NombreU');
        return true;
    }

    static comprobar_NombreU_SEARCH() {

        if (validacionesatomicas.es_vacio('NombreU')) {
            DOM_class.mostrarexitovalor('NombreU');
            return true;
        } if (validacionesatomicas.size_maximo('NombreU', 15)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('NombreU', 'KO_NombreU_tam_max');
            DOM_class.mostrarerrorvalor('NombreU');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('NombreU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('NombreU','KO_NombreU_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('NombreU');
            return false;
        }
        DOM_class.mostrarexitovalor('NombreU');
        return true;
    }

    //Validaciones de ApellidosU:
    static comprobar_ApellidosU() {

        if (validacionesatomicas.size_minimo('ApellidosU', 3)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ApellidosU', 'KO_ApellidosU_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('ApellidosU', 30)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ApellidosU', 'KO_ApellidosU_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('ApellidosU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ApellidosU','KO_ApellidosU_acentos_ñ_espacios');
            return false;
        }
        DOM_class.mostrarexitovalor('ApellidosU');
        return true;
    }

    static comprobar_ApellidosU_SEARCH() {

        if (validacionesatomicas.es_vacio('ApellidosU')) {
            DOM_class.mostrarexitovalor('ApellidosU');
            return true;
        } if (validacionesatomicas.size_maximo('ApellidosU', 30)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ApellidosU', 'KO_ApellidosU_tam_max');
            DOM_class.mostrarerrorvalor('ApellidosU');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('ApellidosU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ApellidosU','KO_ApellidosU_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('ApellidosU');
            return false;
        }
        DOM_class.mostrarexitovalor('ApellidosU');
        return true;
    }

    //Validaciones de TituloAcademicoU:
    static comprobar_TituloAcademicoU() {

        if (validacionesatomicas.size_minimo('TituloAcademicoU', 5)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('TituloAcademicoU', 'KO_TituloAcademicoU_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('TituloAcademicoU', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('TituloAcademicoU', 'KO_TituloAcademicoU_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_puntuacion('TituloAcademicoU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('TituloAcademicoU','KO_TituloAcademicoU_acentos_ñ_espacios_puntuacion');
            return false;
        }
        DOM_class.mostrarexitovalor('TituloAcademicoU');
        return true;
    }

    static comprobar_TituloAcademicoU_SEARCH() {

        if (validacionesatomicas.es_vacio('TituloAcademicoU')) {
            DOM_class.mostrarexitovalor('TituloAcademicoU');
            return true;
        } if (validacionesatomicas.size_maximo('TituloAcademicoU', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('TituloAcademicoU', 'KO_TituloAcademicoU_tam_max');
            DOM_class.mostrarerrorvalor('TituloAcademicoU');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_puntuacion('TituloAcademicoU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('TituloAcademicoU','KO_TituloAcademicoU_acentos_ñ_espacios_puntuacion');
            DOM_class.mostrarerrorvalor('TituloAcademicoU');
            return false;
        }
        DOM_class.mostrarexitovalor('TituloAcademicoU');
        return true;
    }

    //Validaciones de TipoContratoU:
    static comprobar_TipoContratoU() {

        if (validacionesatomicas.size_minimo('TipoContratoU', 1)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('TipoContratoU', 'KO_TipoContratoU_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('TipoContratoU', 40)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('TipoContratoU', 'KO_TipoContratoU_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_puntuacion('TipoContratoU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('TipoContratoU','KO_TipoContratoU_acentos_ñ_espacios_puntuacion');
            return false;
        }
        DOM_class.mostrarexitovalor('TipoContratoU');
        return true;
    }

    static comprobar_TipoContratoU_SEARCH() {

        if (validacionesatomicas.es_vacio('TipoContratoU')) {
            DOM_class.mostrarexitovalor('TipoContratoU');
            return true;
        } if (validacionesatomicas.size_maximo('TipoContratoU', 40)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('TipoContratoU', 'KO_TipoContratoU_tam_max');
            DOM_class.mostrarerrorvalor('TipoContratoU');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_puntuacion('TipoContratoU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('TipoContratoU','KO_TipoContratoU_acentos_ñ_espacios_puntuacion');
            DOM_class.mostrarerrorvalor('TipoContratoU');
            return false;
        }
        DOM_class.mostrarexitovalor('TipoContratoU');
        return true;
    }

    //Validaciones de CentroU:
    static comprobar_CentroU() {

        if (validacionesatomicas.size_minimo('CentroU', 5)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('CentroU', 'KO_CentroU_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('CentroU', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('CentroU', 'KO_CentroU_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_puntuacion('CentroU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('CentroU','KO_CentroU_acentos_ñ_espacios_puntuacion');
            return false;
        }
        DOM_class.mostrarexitovalor('CentroU');
        return true;
    }

    static comprobar_CentroU_SEARCH() {

        if (validacionesatomicas.es_vacio('CentroU')) {
            DOM_class.mostrarexitovalor('CentroU');
            return true;
        } if (validacionesatomicas.size_maximo('CentroU', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('CentroU', 'KO_CentroU_tam_max');
            DOM_class.mostrarerrorvalor('CentroU');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_puntuacion('CentroU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('CentroU','KO_CentroU_acentos_ñ_espacios_puntuacion');
            DOM_class.mostrarerrorvalor('CentroU');
            return false;
        }
        DOM_class.mostrarexitovalor('CentroU');
        return true;
    }

    //Validaciones de DepartamentoU:
    static comprobar_DepartamentoU() {

        if (validacionesatomicas.size_minimo('DepartamentoU', 5)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('DepartamentoU', 'KO_DepartamentoU_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('DepartamentoU', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('DepartamentoU', 'KO_DepartamentoU_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('DepartamentoU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('DepartamentoU','KO_DepartamentoU_acentos_ñ_espacios');
            return false;
        }
        DOM_class.mostrarexitovalor('DepartamentoU');
        return true;
    }

    static comprobar_DepartamentoU_SEARCH() {

        if (validacionesatomicas.es_vacio('DepartamentoU')) {
            DOM_class.mostrarexitovalor('DepartamentoU');
            return true;
        } if (validacionesatomicas.size_maximo('DepartamentoU', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('DepartamentoU', 'KO_DepartamentoU_tam_max');
            DOM_class.mostrarerrorvalor('DepartamentoU');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('DepartamentoU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('DepartamentoU','KO_DepartamentoU_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('DepartamentoU');
            return false;
        }
        DOM_class.mostrarexitovalor('DepartamentoU');
        return true;
    }

    //Validaciones de UniversidadU:
    static comprobar_UniversidadU() {

        if (validacionesatomicas.size_minimo('UniversidadU', 5)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('UniversidadU', 'KO_UniversidadU_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('UniversidadU', 40)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('UniversidadU', 'KO_UniversidadU_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('UniversidadU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('UniversidadU','KO_UniversidadU_acentos_ñ_espacios');
            return false;
        }
        DOM_class.mostrarexitovalor('UniversidadU');
        return true;
    }

    static comprobar_UniversidadU_SEARCH() {

        if (validacionesatomicas.es_vacio('UniversidadU')) {
            DOM_class.mostrarexitovalor('UniversidadU');
            return true;
        } if (validacionesatomicas.size_maximo('UniversidadU', 40)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('UniversidadU', 'KO_UniversidadU_tam_max');
            DOM_class.mostrarerrorvalor('UniversidadU');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('UniversidadU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('UniversidadU','KO_UniversidadU_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('UniversidadU');
            return false;
        }
        DOM_class.mostrarexitovalor('UniversidadU');
        return true;
    }

    //Validaciones de FotoU:
    static comprobar_nueva_FotoU(){
        if(validacionesatomicas.size_minimo_extension('nueva_FotoU',1)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nueva_FotoU','KO_nueva_FotoU_tam_min');
            return false;
        }
        if(validacionesatomicas.size_maximo_extension('nueva_FotoU',20)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nueva_FotoU','KO_nueva_FotoU_tam_max');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios_fich('nueva_FotoU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nueva_FotoU','KO_nueva_FotoU_no_acentos_ñ_espacios_fich');
            return false;
        }
        if(validacionesatomicas.extension_fich_jpg_jpeg('nueva_FotoU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nueva_FotoU','KO_nueva_FotoU_extension_fich_jpg_jpeg');
            return false;
        }
        DOM_class.mostrarexitovalor('nueva_FotoU');
        return true;
    }

    static comprobar_nueva_FotoU_EDIT(){
        if(!validacionesatomicas.es_vacio('nueva_FotoU')){
            if(validacionesatomicas.size_minimo_extension('nueva_FotoU',1)){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nueva_FotoU','KO_nueva_FotoU_tam_min');
                return false;
            }
            if(validacionesatomicas.size_maximo_extension('nueva_FotoU',20)){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nueva_FotoU','KO_nueva_FotoU_tam_max');
                return false;
            }
            if(validacionesatomicas.no_acentos_ñ_espacios_fich('nueva_FotoU')){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nueva_FotoU','KO_nueva_FotoU_no_acentos_ñ_espacios_fich');
                return false;
            }
            if(validacionesatomicas.extension_fich_jpg_jpeg('nueva_FotoU')){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nueva_FotoU','KO_nueva_FotoU_extension_fich_jpg_jpeg');
                return false;
            }
        }
        DOM_class.mostrarexitovalor('nueva_FotoU');
        return true;
    }

    static comprobar_nueva_FotoU_SEARCH(){
        if(validacionesatomicas.es_vacio('nueva_FotoU')){
            DOM_class.mostrarexitovalor('nueva_FotoU');
            return true;
        }
        if(validacionesatomicas.size_maximo_extension('nueva_FotoU',20)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nueva_FotoU','KO_nueva_FotoU_tam_max');
            DOM_class.mostrarerrorvalor('nueva_FotoU');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios_fich('nueva_FotoU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nueva_FotoU','KO_nueva_FotoU_no_acentos_ñ_espacios_fich');
            DOM_class.mostrarerrorvalor('nueva_FotoU');
            return false;
        }

        DOM_class.mostrarexitovalor('nueva_FotoU');
        return true;
    }

    static comprobar_FotoU(){
        if(validacionesatomicas.size_minimo_extension('FotoU',1)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('FotoU','KO_FotoU_tam_min');
            return false;
        }
        if(validacionesatomicas.size_maximo_extension('FotoU',20)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('FotoU','KO_FotoU_tam_max');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios_fich('FotoU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('FotoU','KO_FotoU_no_acentos_ñ_espacios_fich');
            return false;
        }
        if(validacionesatomicas.extension_fich_jpg_jpeg('FotoU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('FotoU','KO_FotoU_extension_fich_jpg_jpeg');
            return false;
        }
        DOM_class.mostrarexitovalor('FotoU');
        return true;
    }

    static comprobar_FotoU_SEARCH(){
        if(validacionesatomicas.es_vacio('FotoU')){
            DOM_class.mostrarexitovalor('FotoU');
            return true;
        }
        if(validacionesatomicas.size_maximo_extension('FotoU',20)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('FotoU','KO_FotoU_tam_max');
            DOM_class.mostrarerrorvalor('FotoU');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios_fich('FotoU')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('FotoU','KO_FotoU_no_acentos_ñ_espacios_fich');
            DOM_class.mostrarerrorvalor('FotoU');
            return false;
        }
        DOM_class.mostrarexitovalor('FotoU');
        return true;
    }

    //Validaciones de TipoU:
    static comprobar_TipoU() {
        var valor = document.getElementById("TipoU").value;
        if (valor === 'A' || valor === 'P') {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('TipoU', 'KO_TipoU_formato');
            return false;
        }
        DOM_class.mostrarexitovalor('TipoU');
        return true;
    }

    static comprobar_TipoU_SEARCH() {
        DOM_class.mostrarexitovalor('TipoU');
        return true;
    }

    static recargarform(){

        document.getElementById("IU_form").innerHTML= '';
        document.getElementById("IU_form").innerHTML=`
        
        <label class="label_LoginU">Login del usuario: </label>
        <input type='text' id='LoginU' name='LoginU'></input>
        <div id="div_error_LoginU" class="errorcampo"><a id="error_LoginU"></a></div>
        <br>

        <label class="label_PasswordU">Password del usuario: </label>
        <input type='text' id='PasswordU' name='PasswordU'></input>
        <div id="div_error_PasswordU" class="errorcampo"><a id="error_PasswordU"></a></div>
        <br>

        <label class="label_NombreU">Nombre del usuario: </label>
        <input type='text' id='NombreU' name='NombreU'></input>
        <div id="div_error_NombreU" class="errorcampo"><a id="error_NombreU"></a></div>
        <br>

        <label class="label_ApellidosU">Apellidos del usuario: </label>
        <input type='text' id='ApellidosU' name='ApellidosU'></input>
        <div id="div_error_ApellidosU" class="errorcampo"><a id="error_ApellidosU"></a></div>
        <br>

        <label class="label_TituloAcademicoU">Titulo academico del usuario: </label>
        <input type='text' id='TituloAcademicoU' name='TituloAcademicoU'></input>
        <div id="div_error_TituloAcademicoU" class="errorcampo"><a id="error_TituloAcademicoU"></a></div>
        <br>

        <label class="label_TipoContratoU">Tipo de contrato del usuario: </label>
        <input type='text' id='TipoContratoU' name='TipoContratoU'></input>
        <div id="div_error_TipoContratoU" class="errorcampo"><a id="error_TipoContratoU"></a></div>
        <br>

        <label class="label_CentroU">Centro del usuario: </label>
        <input type='text' id='CentroU' name='CentroU'></input>
        <div id="div_error_CentroU" class="errorcampo"><a id="error_CentroU"></a></div>
        <br>

        <label class="label_DepartamentoU">Departamento del usuario: </label>
        <input type='text' id='DepartamentoU' name='DepartamentoU'></input>
        <div id="div_error_DepartamentoU" class="errorcampo"><a id="error_DepartamentoU"></a></div>
        <br>

        <label class="label_UniversidadU">Universidad del usuario: </label>
        <input type='text' id='UniversidadU' name='UniversidadU'></input>
        <div id="div_error_UniversidadU" class="errorcampo"><a id="error_UniversidadU"></a></div>
        <br>
    
        <label id="label_FotoU" class="label_FotoU">Foto del usuario: </label>
        <input type='text' id='FotoU' name='FotoU'></input>
        <a id="link_FotoU" href="http://193.147.87.202/ET2/filesuploaded/files_FotoU/"><img src="./iconos/FILE.png" />
    
        <div id="div_error_FotoU" class="errorcampo"><a id="error_FotoU"></a></div>
            
        <label id="label_nueva_FotoU" class="label_nueva_FotoU">Nueva foto del usuario: </label>
        <input type='file' id='nueva_FotoU' name='nueva_FotoU'></input>
        <div id="div_error_nueva_FotoU" class="errorcampo"><a id="error_nueva_FotoU"></a></div>
        <br>

        <label class="label_TipoU">Tipo de usuario: </label>
        <select name="TipoU" id="TipoU">
            <option value="">Selecciona</option>
            <option value="A">ALUMNO</option>
            <option value="P">PROFESOR</option>
        </select>
        <div id="div_error_TipoU" class="errorcampo"><a id="error_TipoU"></a></div>
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