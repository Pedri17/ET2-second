class Gestion_usuario extends GestionEntidad{
    static resetearformusuario() {
        GestionEntidad.resetearForm();
    }

//Formularios------------------------------------------------------------------------------------
    static async createForm_ADD(){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_usuario";  
        document.getElementById('IU_form').action = 'javascript:Gestion_usuario.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_usuario.comprobar_submit();');

        document.getElementById('login_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_login_usuario()');

        document.getElementById('password_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_password_usuario()');
        
        document.getElementById('nombre_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_nombre_usuario()');
        
        document.getElementById('apellidos_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_apellidos_usuario()');
        
        document.getElementById('tituloacademico_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_tituloacademico_usuario()');

        document.getElementById('tipocontrato_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_tipocontrato_usuario()');
        
        document.getElementById('centro_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_centro_usuario()');

        document.getElementById('departamento_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_departamento_usuario()');

        document.getElementById('universidad_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_universidad_usuario()');

        document.getElementById('nueva_foto_usuario').setAttribute('onblur','Gestion_usuario.comprobar_nueva_foto_usuario()');
        
        document.getElementById("label_foto_usuario").style.display = 'none';
        document.getElementById("foto_usuario").style.display = 'none';
        document.getElementById("link_foto_usuario").style.display = 'none';

        document.getElementById('tipo_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_tipo_usuario()');

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

        document.getElementById('login_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_login_usuario()');
        document.getElementById('login_usuario').value = datostupla.login_usuario;
        document.getElementById('login_usuario').setAttribute("readonly","");

        document.getElementById('password_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_password_usuario()');
        document.getElementById('password_usuario').value = datostupla.password_usuario;

        document.getElementById('nombre_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_nombre_usuario()');
        document.getElementById('nombre_usuario').value = datostupla.nombre_usuario;

        document.getElementById('apellidos_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_apellidos_usuario()');
        document.getElementById('apellidos_usuario').value = datostupla.apellidos_usuario;

        document.getElementById('tituloacademico_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_tituloacademico_usuario()');
        document.getElementById('tituloacademico_usuario').value = datostupla.tituloacademico_usuario;

        document.getElementById('tipocontrato_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_tipocontrato_usuario()');
        document.getElementById('tipocontrato_usuario').value = datostupla.tipocontrato_usuario;

        document.getElementById('centro_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_centro_usuario()');
        document.getElementById('centro_usuario').value = datostupla.centro_usuario;

        document.getElementById('departamento_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_departamento_usuario()');
        document.getElementById('departamento_usuario').value = datostupla.departamento_usuario;

        document.getElementById('universidad_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_universidad_usuario()');
        document.getElementById('universidad_usuario').value = datostupla.universidad_usuario;

        document.getElementById('foto_usuario').value = datostupla.foto_usuario;
        document.getElementById('link_foto_usuario').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_foto_usuario/'+foto_usuario.value);
        document.getElementById('foto_usuario').setAttribute("readonly",true);

        document.getElementById('nueva_foto_usuario').setAttribute('onblur','Gestion_usuario.comprobar_nueva_foto_usuario()');

        document.getElementById('tipo_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_tipo_usuario()');
        document.getElementById('tipo_usuario').value = datostupla.tipo_usuario;

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

        document.getElementById('login_usuario').value = datostupla.login_usuario;
        document.getElementById('login_usuario').setAttribute('readonly',true);

        document.getElementById('password_usuario').value = datostupla.password_usuario;
        document.getElementById('password_usuario').setAttribute('readonly',true);

        document.getElementById('nombre_usuario').value = datostupla.nombre_usuario;
        document.getElementById('nombre_usuario').setAttribute('readonly',true);

        document.getElementById('apellidos_usuario').value = datostupla.apellidos_usuario;
        document.getElementById('apellidos_usuario').setAttribute('readonly',true);

        document.getElementById('tituloacademico_usuario').value = datostupla.tituloacademico_usuario;
        document.getElementById('tituloacademico_usuario').setAttribute('readonly',true);

        document.getElementById('tipocontrato_usuario').value = datostupla.tipocontrato_usuario;
        document.getElementById('tipocontrato_usuario').setAttribute('readonly',true);

        document.getElementById('centro_usuario').value = datostupla.centro_usuario;
        document.getElementById('centro_usuario').setAttribute('readonly',true);

        document.getElementById('departamento_usuario').value = datostupla.departamento_usuario;
        document.getElementById('departamento_usuario').setAttribute('readonly',true);

        document.getElementById('universidad_usuario').value = datostupla.universidad_usuario;
        document.getElementById('universidad_usuario').setAttribute('readonly',true);

        document.getElementById('foto_usuario').value = datostupla.foto_usuario;
        document.getElementById('foto_usuario').setAttribute('readonly',true);
        document.getElementById('foto_usuario').setAttribute("readonly", true);
        document.getElementById("link_foto_usuario").href += datostupla.foto_usuario;

        document.getElementById("label_nueva_foto_usuario").style.display = 'none';
        document.getElementById("nueva_foto_usuario").style.display = 'none';

        document.getElementById('tipo_usuario').value = datostupla.tipo_usuario;
        document.getElementById('tipo_usuario').setAttribute('readonly',true);

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

        document.getElementById('login_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_login_usuario_SEARCH()');
        
        document.getElementById('password_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_password_usuario_SEARCH()');
        
        document.getElementById('nombre_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_nombre_usuario_SEARCH()');
        
        document.getElementById('apellidos_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_apellidos_usuario_SEARCH()');
        
        document.getElementById('tituloacademico_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_tituloacademico_usuario_SEARCH()');

        document.getElementById('tipocontrato_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_tipocontrato_usuario_SEARCH()');
        
        document.getElementById('centro_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_centro_usuario_SEARCH()');
        
        document.getElementById('departamento_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_departamento_usuario_SEARCH()');
        
        document.getElementById('universidad_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_universidad_usuario_SEARCH()');

        document.getElementById("label_nueva_foto_usuario").style.display = 'none';
        document.getElementById("nueva_foto_usuario").style.display = 'none';
        document.getElementById("link_foto_usuario").style.display = 'none';

        document.getElementById('tipo_usuario').setAttribute('onblur', 'Gestion_usuario.comprobar_tipo_usuario_SEARCH()');

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

        let valor1 = this.comprobar_login_usuario();
        let valor2 = this.comprobar_password_usuario();
        let valor3 = this.comprobar_nombre_usuario();
        let valor4 = this.comprobar_apellidos_usuario();
        let valor5 = this.comprobar_tituloacademico_usuario();
        let valor6 = this.comprobar_tipocontrato_usuario();
        let valor7 = this.comprobar_centro_usuario();
        let valor8 = this.comprobar_departamento_usuario();
        let valor9 = this.comprobar_universidad_usuario();
        let valor10 = this.comprobar_nueva_foto_usuario();
        let valor11= this.comprobar_tipo_usuario();

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

        let valor1 = this.comprobar_login_usuario();
        let valor2 = this.comprobar_password_usuario();
        let valor3 = this.comprobar_nombre_usuario();
        let valor4 = this.comprobar_apellidos_usuario();
        let valor5 = this.comprobar_tituloacademico_usuario();
        let valor6 = this.comprobar_tipocontrato_usuario();
        let valor7 = this.comprobar_centro_usuario();
        let valor8 = this.comprobar_departamento_usuario();
        let valor9 = this.comprobar_universidad_usuario();
        let valor10 = this.comprobar_nueva_foto_usuario_EDIT();
        let valor11= this.comprobar_tipo_usuario();

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

        let valor1 = this.comprobar_login_usuario_SEARCH();
        let valor2 = this.comprobar_password_usuario_SEARCH();
        let valor3 = this.comprobar_nombre_usuario_SEARCH();
        let valor4 = this.comprobar_apellidos_usuario_SEARCH();
        let valor5 = this.comprobar_tituloacademico_usuario_SEARCH();
        let valor6 = this.comprobar_tipocontrato_usuario_SEARCH();
        let valor7 = this.comprobar_centro_usuario_SEARCH();
        let valor8 = this.comprobar_departamento_usuario_SEARCH();
        let valor9 = this.comprobar_universidad_usuario_SEARCH();
        let valor10 = this.comprobar_foto_usuario_SEARCH();
        let valor11= this.comprobar_tipo_usuario_SEARCH();

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
            this.resetearformusuario();
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
            this.resetearformusuario();
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
    static comprobar_login_usuario() {

        if (validacionesatomicas.size_minimo('login_usuario', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('login_usuario', 'KO_login_usuario_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('login_usuario', 15)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('login_usuario', 'KO_login_usuario_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_numeros('login_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('login_usuario','KO_login_usuario_acentos_ñ_espacios_numeros');
            return false;
        }
        DOM_class.mostrarexitovalor('login_usuario');
        return true;
    }

    static comprobar_login_usuario_SEARCH() {

        if (validacionesatomicas.es_vacio('login_usuario')) {
            DOM_class.mostrarexitovalor('login_usuario');
            return true;
        } if (validacionesatomicas.size_maximo('login_usuario', 15)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('login_usuario', 'KO_login_usuario_tam_max');
            DOM_class.mostrarerrorvalor('login_usuario');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_numeros('login_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('login_usuario','KO_login_usuario_acentos_ñ_espacios_numeros');
            DOM_class.mostrarerrorvalor('login_usuario');
            return false;
        }
        DOM_class.mostrarexitovalor('login_usuario');
        return true;
    }

    //Validaciones de PasswordU:
    static comprobar_password_usuario() {

        if (validacionesatomicas.size_minimo('password_usuario', 3)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('password_usuario', 'KO_password_usuario_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('password_usuario', 32)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('password_usuario', 'KO_password_usuario_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_numeros('password_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('password_usuario','KO_password_usuario_acentos_ñ_espacios_numeros');
            return false;
        }
        DOM_class.mostrarexitovalor('password_usuario');
        return true;
    }

    static comprobar_password_usuario_SEARCH() {

        if (validacionesatomicas.es_vacio('password_usuario')) {
            DOM_class.mostrarexitovalor('password_usuario');
            return true;
        } if (validacionesatomicas.size_maximo('password_usuario', 32)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('password_usuario', 'KO_password_usuario_tam_max');
            DOM_class.mostrarerrorvalor('password_usuario');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_numeros('password_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('password_usuario','KO_password_usuario_acentos_ñ_espacios_numeros');
            DOM_class.mostrarerrorvalor('password_usuario');
            return false;
        }
        DOM_class.mostrarexitovalor('password_usuario');
        return true;
    }

    //Validaciones de NombreU:
    static comprobar_nombre_usuario() {

        if (validacionesatomicas.size_minimo('nombre_usuario', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_usuario', 'KO_nombre_usuario_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('nombre_usuario', 15)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_usuario', 'KO_nombre_usuario_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('nombre_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_usuario','KO_nombre_usuario_acentos_ñ_espacios');
            return false;
        }
        DOM_class.mostrarexitovalor('nombre_usuario');
        return true;
    }

    static comprobar_nombre_usuario_SEARCH() {

        if (validacionesatomicas.es_vacio('nombre_usuario')) {
            DOM_class.mostrarexitovalor('nombre_usuario');
            return true;
        } if (validacionesatomicas.size_maximo('nombre_usuario', 15)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_usuario', 'KO_nombre_usuario_tam_max');
            DOM_class.mostrarerrorvalor('nombre_usuario');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('nombre_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_usuario','KO_nombre_usuario_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('nombre_usuario');
            return false;
        }
        DOM_class.mostrarexitovalor('nombre_usuario');
        return true;
    }

    //Validaciones de ApellidosU:
    static comprobar_apellidos_usuario() {

        if (validacionesatomicas.size_minimo('apellidos_usuario', 3)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('apellidos_usuario', 'KO_apellidos_usuario_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('apellidos_usuario', 30)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('apellidos_usuario', 'KO_apellidos_usuario_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('apellidos_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('apellidos_usuario','KO_apellidos_usuario_acentos_ñ_espacios');
            return false;
        }
        DOM_class.mostrarexitovalor('apellidos_usuario');
        return true;
    }

    static comprobar_apellidos_usuario_SEARCH() {

        if (validacionesatomicas.es_vacio('apellidos_usuario')) {
            DOM_class.mostrarexitovalor('apellidos_usuario');
            return true;
        } if (validacionesatomicas.size_maximo('apellidos_usuario', 30)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('apellidos_usuario', 'KO_apellidos_usuario_tam_max');
            DOM_class.mostrarerrorvalor('apellidos_usuario');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('apellidos_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('apellidos_usuario','KO_apellidos_usuario_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('apellidos_usuario');
            return false;
        }
        DOM_class.mostrarexitovalor('apellidos_usuario');
        return true;
    }

    //Validaciones de TituloAcademicoU:
    static comprobar_tituloacademico_usuario() {

        if (validacionesatomicas.size_minimo('tituloacademico_usuario', 5)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tituloacademico_usuario', 'KO_tituloacademico_usuario_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('tituloacademico_usuario', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tituloacademico_usuario', 'KO_tituloacademico_usuario_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_puntuacion('tituloacademico_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tituloacademico_usuario','KO_tituloacademico_usuario_acentos_ñ_espacios_puntuacion');
            return false;
        }
        DOM_class.mostrarexitovalor('tituloacademico_usuario');
        return true;
    }

    static comprobar_tituloacademico_usuario_SEARCH() {

        if (validacionesatomicas.es_vacio('tituloacademico_usuario')) {
            DOM_class.mostrarexitovalor('tituloacademico_usuario');
            return true;
        } if (validacionesatomicas.size_maximo('tituloacademico_usuario', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tituloacademico_usuario', 'KO_tituloacademico_usuario_tam_max');
            DOM_class.mostrarerrorvalor('tituloacademico_usuario');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_puntuacion('tituloacademico_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tituloacademico_usuario','KO_tituloacademico_usuario_acentos_ñ_espacios_puntuacion');
            DOM_class.mostrarerrorvalor('tituloacademico_usuario');
            return false;
        }
        DOM_class.mostrarexitovalor('tituloacademico_usuario');
        return true;
    }

    //Validaciones de TipoContratoU:
    static comprobar_tipocontrato_usuario() {

        if (validacionesatomicas.size_minimo('tipocontrato_usuario', 1)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tipocontrato_usuario', 'KO_tipocontrato_usuario_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('tipocontrato_usuario', 40)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tipocontrato_usuario', 'KO_tipocontrato_usuario_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_puntuacion('tipocontrato_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tipocontrato_usuario','KO_tipocontrato_usuario_acentos_ñ_espacios_puntuacion');
            return false;
        }
        DOM_class.mostrarexitovalor('tipocontrato_usuario');
        return true;
    }

    static comprobar_tipocontrato_usuario_SEARCH() {

        if (validacionesatomicas.es_vacio('tipocontrato_usuario')) {
            DOM_class.mostrarexitovalor('tipocontrato_usuario');
            return true;
        } if (validacionesatomicas.size_maximo('tipocontrato_usuario', 40)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tipocontrato_usuario', 'KO_tipocontrato_usuario_tam_max');
            DOM_class.mostrarerrorvalor('tipocontrato_usuario');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_puntuacion('tipocontrato_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tipocontrato_usuario','KO_tipocontrato_usuario_acentos_ñ_espacios_puntuacion');
            DOM_class.mostrarerrorvalor('tipocontrato_usuario');
            return false;
        }
        DOM_class.mostrarexitovalor('tipocontrato_usuario');
        return true;
    }

    //Validaciones de CentroU:
    static comprobar_centro_usuario() {

        if (validacionesatomicas.size_minimo('centro_usuario', 5)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('centro_usuario', 'KO_centro_usuario_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('centro_usuario', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('centro_usuario', 'KO_centro_usuario_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_puntuacion('centro_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('centro_usuario','KO_centro_usuario_acentos_ñ_espacios_puntuacion');
            return false;
        }
        DOM_class.mostrarexitovalor('centro_usuario');
        return true;
    }

    static comprobar_centro_usuario_SEARCH() {

        if (validacionesatomicas.es_vacio('centro_usuario')) {
            DOM_class.mostrarexitovalor('centro_usuario');
            return true;
        } if (validacionesatomicas.size_maximo('centro_usuario', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('centro_usuario', 'KO_centro_usuario_tam_max');
            DOM_class.mostrarerrorvalor('centro_usuario');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios_puntuacion('centro_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('centro_usuario','KO_centro_usuario_acentos_ñ_espacios_puntuacion');
            DOM_class.mostrarerrorvalor('centro_usuario');
            return false;
        }
        DOM_class.mostrarexitovalor('centro_usuario');
        return true;
    }

    //Validaciones de DepartamentoU:
    static comprobar_departamento_usuario() {

        if (validacionesatomicas.size_minimo('departamento_usuario', 5)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('departamento_usuario', 'KO_departamento_usuario_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('departamento_usuario', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('departamento_usuario', 'KO_departamento_usuario_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('departamento_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('departamento_usuario','KO_departamento_usuario_acentos_ñ_espacios');
            return false;
        }
        DOM_class.mostrarexitovalor('departamento_usuario');
        return true;
    }

    static comprobar_departamento_usuario_SEARCH() {

        if (validacionesatomicas.es_vacio('departamento_usuario')) {
            DOM_class.mostrarexitovalor('departamento_usuario');
            return true;
        } if (validacionesatomicas.size_maximo('departamento_usuario', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('departamento_usuario', 'KO_departamento_usuario_tam_max');
            DOM_class.mostrarerrorvalor('departamento_usuario');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('departamento_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('departamento_usuario','KO_departamento_usuario_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('departamento_usuario');
            return false;
        }
        DOM_class.mostrarexitovalor('departamento_usuario');
        return true;
    }

    //Validaciones de UniversidadU:
    static comprobar_universidad_usuario() {

        if (validacionesatomicas.size_minimo('universidad_usuario', 5)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('universidad_usuario', 'KO_universidad_usuario_tam_min');
            return false;
        } if (validacionesatomicas.size_maximo('universidad_usuario', 40)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('universidad_usuario', 'KO_universidad_usuario_tam_max');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('universidad_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('universidad_usuario','KO_universidad_usuario_acentos_ñ_espacios');
            return false;
        }
        DOM_class.mostrarexitovalor('universidad_usuario');
        return true;
    }

    static comprobar_universidad_usuario_SEARCH() {

        if (validacionesatomicas.es_vacio('universidad_usuario')) {
            DOM_class.mostrarexitovalor('universidad_usuario');
            return true;
        } if (validacionesatomicas.size_maximo('universidad_usuario', 40)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('universidad_usuario', 'KO_universidad_usuario_tam_max');
            DOM_class.mostrarerrorvalor('universidad_usuario');
            return false;
        }
        if(validacionesatomicas.acentos_ñ_espacios('universidad_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('universidad_usuario','KO_universidad_usuario_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('universidad_usuario');
            return false;
        }
        DOM_class.mostrarexitovalor('universidad_usuario');
        return true;
    }

    //Validaciones de FotoU:
    static comprobar_nueva_foto_usuario(){
        if(validacionesatomicas.size_minimo_extension('nueva_foto_usuario',1)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nueva_foto_usuario','KO_nueva_foto_usuario_tam_min');
            return false;
        }
        if(validacionesatomicas.size_maximo_extension('nueva_foto_usuario',20)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nueva_foto_usuario','KO_nueva_foto_usuario_tam_max');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios_fich('nueva_foto_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nueva_foto_usuario','KO_nueva_foto_usuario_no_acentos_ñ_espacios_fich');
            return false;
        }
        if(validacionesatomicas.extension_fich_jpg_jpeg('nueva_foto_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nueva_foto_usuario','KO_nueva_foto_usuario_extension_fich_jpg_jpeg');
            return false;
        }
        DOM_class.mostrarexitovalor('nueva_foto_usuario');
        return true;
    }

    static comprobar_nueva_foto_usuario_EDIT(){
        if(!validacionesatomicas.es_vacio('nueva_foto_usuario')){
            if(validacionesatomicas.size_minimo_extension('nueva_foto_usuario',1)){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nueva_foto_usuario','KO_nueva_foto_usuario_tam_min');
                return false;
            }
            if(validacionesatomicas.size_maximo_extension('nueva_foto_usuario',20)){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nueva_foto_usuario','KO_nueva_foto_usuario_tam_max');
                return false;
            }
            if(validacionesatomicas.no_acentos_ñ_espacios_fich('nueva_foto_usuario')){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nueva_foto_usuario','KO_nueva_foto_usuario_no_acentos_ñ_espacios_fich');
                return false;
            }
            if(validacionesatomicas.extension_fich_jpg_jpeg('nueva_foto_usuario')){
            } else {
                DOM_class.mostrardivmensajeserrordebajo('nueva_foto_usuario','KO_nueva_foto_usuario_extension_fich_jpg_jpeg');
                return false;
            }
        }
        DOM_class.mostrarexitovalor('nueva_foto_usuario');
        return true;
    }

    static comprobar_nueva_foto_usuario_SEARCH(){
        if(validacionesatomicas.es_vacio('nueva_foto_usuario')){
            DOM_class.mostrarexitovalor('nueva_foto_usuario');
            return true;
        }
        if(validacionesatomicas.size_maximo_extension('nueva_foto_usuario',20)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nueva_foto_usuario','KO_nueva_foto_usuario_tam_max');
            DOM_class.mostrarerrorvalor('nueva_foto_usuario');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios_fich('nueva_foto_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nueva_foto_usuario','KO_nueva_foto_usuario_no_acentos_ñ_espacios_fich');
            DOM_class.mostrarerrorvalor('nueva_foto_usuario');
            return false;
        }

        DOM_class.mostrarexitovalor('nueva_foto_usuario');
        return true;
    }

    static comprobar_foto_usuario(){
        if(validacionesatomicas.size_minimo_extension('foto_usuario',1)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('foto_usuario','KO_foto_usuario_tam_min');
            return false;
        }
        if(validacionesatomicas.size_maximo_extension('foto_usuario',20)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('foto_usuario','KO_foto_usuario_tam_max');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios_fich('foto_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('foto_usuario','KO_foto_usuario_no_acentos_ñ_espacios_fich');
            return false;
        }
        if(validacionesatomicas.extension_fich_jpg_jpeg('foto_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('foto_usuario','KO_foto_usuario_extension_fich_jpg_jpeg');
            return false;
        }
        DOM_class.mostrarexitovalor('foto_usuario');
        return true;
    }

    static comprobar_foto_usuario_SEARCH(){
        if(validacionesatomicas.es_vacio('foto_usuario')){
            DOM_class.mostrarexitovalor('foto_usuario');
            return true;
        }
        if(validacionesatomicas.size_maximo_extension('foto_usuario',20)){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('foto_usuario','KO_foto_usuario_tam_max');
            DOM_class.mostrarerrorvalor('foto_usuario');
            return false;
        }
        if(validacionesatomicas.no_acentos_ñ_espacios_fich('foto_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('foto_usuario','KO_foto_usuario_no_acentos_ñ_espacios_fich');
            DOM_class.mostrarerrorvalor('foto_usuario');
            return false;
        }
        DOM_class.mostrarexitovalor('foto_usuario');
        return true;
    }

    //Validaciones de TipoU:
    static comprobar_tipo_usuario() {
        var valor = document.getElementById("tipo_usuario").value;
        if (valor === 'A' || valor === 'P') {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tipo_usuario', 'KO_tipo_usuario_formato');
            return false;
        }
        DOM_class.mostrarexitovalor('tipo_usuario');
        return true;
    }

    static comprobar_tipo_usuario_SEARCH() {
        DOM_class.mostrarexitovalor('tipo_usuario');
        return true;
    }

    static recargarform(){

        document.getElementById("IU_form").innerHTML= '';
        document.getElementById("IU_form").innerHTML=`
        
        <label class="label_login_usuario">Login del usuario: </label>
        <input type='text' id='login_usuario' name='login_usuario'></input>
        <div id="div_error_login_usuario" class="errorcampo"><a id="error_login_usuario"></a></div>
        <br>

        <label class="label_password_usuario">Password del usuario: </label>
        <input type='text' id='password_usuario' name='password_usuario'></input>
        <div id="div_error_password_usuario" class="errorcampo"><a id="error_password_usuario"></a></div>
        <br>

        <label class="label_nombre_usuario">Nombre del usuario: </label>
        <input type='text' id='nombre_usuario' name='nombre_usuario'></input>
        <div id="div_error_nombre_usuario" class="errorcampo"><a id="error_nombre_usuario"></a></div>
        <br>

        <label class="label_apellidos_usuario">Apellidos del usuario: </label>
        <input type='text' id='apellidos_usuario' name='apellidos_usuario'></input>
        <div id="div_error_apellidos_usuario" class="errorcampo"><a id="error_apellidos_usuario"></a></div>
        <br>

        <label class="label_tituloacademico_usuario">Titulo academico del usuario: </label>
        <input type='text' id='tituloacademico_usuario' name='tituloacademico_usuario'></input>
        <div id="div_error_tituloacademico_usuario" class="errorcampo"><a id="error_tituloacademico_usuario"></a></div>
        <br>

        <label class="label_tipocontrato_usuario">Tipo de contrato del usuario: </label>
        <input type='text' id='tipocontrato_usuario' name='tipocontrato_usuario'></input>
        <div id="div_error_tipocontrato_usuario" class="errorcampo"><a id="error_tipocontrato_usuario"></a></div>
        <br>

        <label class="label_centro_usuario">Centro del usuario: </label>
        <input type='text' id='centro_usuario' name='centro_usuario'></input>
        <div id="div_error_centro_usuario" class="errorcampo"><a id="error_centro_usuario"></a></div>
        <br>

        <label class="label_departamento_usuario">Departamento del usuario: </label>
        <input type='text' id='departamento_usuario' name='departamento_usuario'></input>
        <div id="div_error_departamento_usuario" class="errorcampo"><a id="error_departamento_usuario"></a></div>
        <br>

        <label class="label_universidad_usuario">Universidad del usuario: </label>
        <input type='text' id='universidad_usuario' name='universidad_usuario'></input>
        <div id="div_error_universidad_usuario" class="errorcampo"><a id="error_universidad_usuario"></a></div>
        <br>
    
        <label id="label_foto_usuario" class="label_foto_usuario">Foto del usuario: </label>
        <input type='text' id='foto_usuario' name='foto_usuario'></input>
        <a id="link_foto_usuario" href="http://193.147.87.202/ET2/filesuploaded/files_foto_usuario/"><img src="./iconos/FILE.png" />
    
        <div id="div_error_foto_usuario" class="errorcampo"><a id="error_foto_usuario"></a></div>
            
        <label id="label_nueva_foto_usuario" class="label_nueva_foto_usuario">Nueva foto del usuario: </label>
        <input type='file' id='nueva_foto_usuario' name='nueva_foto_usuario'></input>
        <div id="div_error_nueva_foto_usuario" class="errorcampo"><a id="error_nueva_foto_usuario"></a></div>
        <br>

        <label class="label_tipo_usuario">Tipo de usuario: </label>
        <select name="tipo_usuario" id="tipo_usuario">
            <option value="">Selecciona</option>
            <option value="A">ALUMNO</option>
            <option value="P">PROFESOR</option>
        </select>
        <div id="div_error_tipo_usuario" class="errorcampo"><a id="error_tipo_usuario"></a></div>
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