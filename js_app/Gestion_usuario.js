class Gestion_usuario extends GestionEntidad{
    static resetearformcongreso() {
        GestionEntidad.resetearForm();
    }

//Formularios------------------------------------------------------------------------------------
    static async createForm_ADD(){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_programa";  
        document.getElementById('IU_form').action = 'javascript:Gestion_congreso.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_congreso.comprobar_submit();');

        document.getElementById('login_usuario').setAttribute('onblur', 'Gestion_congreso.comprobar_login_usuario()');

        document.getElementById('password_usuario').setAttribute('onblur', 'Gestion_congreso.comprobar_password_usuario()');
        
        document.getElementById('nombre_usuario').setAttribute('onblur', 'Gestion_congreso.comprobar_nombre_usuario()');
        
        document.getElementById('apellidos_usuario').setAttribute('onblur', 'Gestion_congreso.comprobar_apellidos_usuario()');
        
        document.getElementById('tituloacademico_usuario').setAttribute('onblur', 'Gestion_congreso.comprobar_tituloacademico_usuario()');

        document.getElementById('tipocontrato_usuario').setAttribute('onblur', 'Gestion_congreso.comprobar_tipocontrato_usuario()');
        
        document.getElementById('centro_usuario').setAttribute('onblur', 'Gestion_congreso.comprobar_centro_usuario()');

        document.getElementById('departamento_usuario').setAttribute('onblur', 'Gestion_congreso.comprobar_departamento_usuario()');

        document.getElementById('universidad_usuario').setAttribute('onblur', 'Gestion_congreso.comprobar_universidad_usuario()');

        document.getElementById('nueva_foto_usuario').setAttribute('onblur','Gestion_programa.comprobar_nueva_foto_usuario()');
        
        document.getElementById("label_foto_usuario").style.display = 'none';
        document.getElementById("foto_usuario").style.display = 'none';
        document.getElementById("link_foto_usuario").style.display = 'none';

        document.getElementById('tipo_usuario').setAttribute('onblur', 'Gestion_congreso.comprobar_tipo_usuario()');

        await this.peticionBackGeneral('', 'area', 'SEARCH')
        .then((respuesta) => {
            console.log(respuesta);
            let listaareas = respuesta['resource'];
            listaareas.forEach(element => {
                let opcion = document.createElement('option');
                opcion.value = element['id_area'];
                opcion.innerHTML = element['nombre_area'];
                document.getElementById('area').append(opcion);
            }); 
        });

        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/ADD.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);

        setLang();

        document.getElementById('div_IU_form').style.display = 'block';

    }

    static async createForm_EDIT(login_usuario, password_usuario, nombre_usuario, apellidos_usuario, tituloacademico_usuario, tipocontrato_usuario, centro_usuario, departamento_usuario, universidad_usuario, foto_usuario, tipo_usuario){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_programa";
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit_EDIT();');

        document.getElementById('login_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_login_usuario()');
        document.getElementById('login_usuario').value = login_usuario;
        document.getElementById('login_usuario').setAttribute("readonly","");

        document.getElementById('password_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_password_usuario()');
        document.getElementById('password_usuario').value = password_usuario;

        document.getElementById('nombre_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_usuario()');
        document.getElementById('nombre_usuario').value = nombre_usuario;

        document.getElementById('apellidos_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_apellidos_usuario()');
        document.getElementById('apellidos_usuario').value = apellidos_usuario;

        document.getElementById('tituloacademico_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_tituloacademico_usuario()');
        document.getElementById('tituloacademico_usuario').value = tituloacademico_usuario;

        document.getElementById('tipocontrato_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_tipocontrato_usuario()');
        document.getElementById('tipocontrato_usuario').value = tipocontrato_usuario;

        document.getElementById('centro_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_centro_usuario()');
        document.getElementById('centro_usuario').value = centro_usuario;

        document.getElementById('departamento_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_departamento_usuario()');
        document.getElementById('departamento_usuario').value = departamento_usuario;

        document.getElementById('universidad_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_universidad_usuario()');
        document.getElementById('universidad_usuario').value = universidad_usuario;

        document.getElementById('foto_usuario').value = foto_usuario;
        document.getElementById('link_foto_usuario').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_foto_usuario/'+foto_usuario.value);
        document.getElementById('foto_usuario').setAttribute("readonly",true);

        document.getElementById('nueva_foto_usuario').setAttribute('onblur','Gestion_programa.comprobar_nueva_foto_usuario()');

        document.getElementById('tipo_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_tipo_usuario()');
        document.getElementById('tipo_usuario').value = tipo_usuario;

        await this.peticionBackGeneral('', 'area', 'SEARCH')
        .then((respuesta) => {
            console.log(respuesta);
            let listaareas = respuesta['resource'];
            listaareas.forEach(element => {
                let opcion = document.createElement('option');
                opcion.value = element['id_area'];
                opcion.innerHTML = element['nombre_area'];
                document.getElementById('area').append(opcion);
            }); 
        });

        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/EDIT.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);

        setLang();

        document.getElementById('div_IU_form').style.display = 'block';

    }

    static async createForm_DELETE(login_usuario, password_usuario, nombre_usuario, apellidos_usuario, tituloacademico_usuario, tipocontrato_usuario, centro_usuario, departamento_usuario, universidad_usuario, foto_usuario, tipo_usuario){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_programa";
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.DELETE();';

        document.getElementById('login_usuario').value = login_usuario;
        document.getElementById('login_usuario').setAttribute('readonly',true);

        document.getElementById('password_usuario').value = password_usuario;
        document.getElementById('password_usuario').setAttribute('readonly',true);

        document.getElementById('nombre_usuario').value = nombre_usuario;
        document.getElementById('nombre_usuario').setAttribute('readonly',true);

        document.getElementById('apellidos_usuario').value = apellidos_usuario;
        document.getElementById('apellidos_usuario').setAttribute('readonly',true);

        document.getElementById('tituloacademico_usuario').value = tituloacademico_usuario;
        document.getElementById('tituloacademico_usuario').setAttribute('readonly',true);

        document.getElementById('tipocontrato_usuario').value = tipocontrato_usuario;
        document.getElementById('tipocontrato_usuario').setAttribute('readonly',true);

        document.getElementById('centro_usuario').value = centro_usuario;
        document.getElementById('centro_usuario').setAttribute('readonly',true);

        document.getElementById('departamento_usuario').value = departamento_usuario;
        document.getElementById('departamento_usuario').setAttribute('readonly',true);

        document.getElementById('universidad_usuario').value = universidad_usuario;
        document.getElementById('universidad_usuario').setAttribute('readonly',true);

        document.getElementById('foto_usuario').value = foto_usuario;
        document.getElementById('foto_usuario').setAttribute('readonly',true);
        document.getElementById('foto_usuario').setAttribute("readonly", true);
        document.getElementById("link_foto_usuario").href += foto_usuario;

        document.getElementById("label_nueva_foto_usuario").style.display = 'none';
        document.getElementById("nueva_foto_usuario").style.display = 'none';

        document.getElementById('tipo_usuario').value = tipo_usuario;
        document.getElementById('tipo_usuario').setAttribute('readonly',true);

        await this.peticionBackGeneral('', 'area', 'SEARCH')
        .then((respuesta) => {
            console.log(respuesta);
            let listaareas = respuesta['resource'];
            listaareas.forEach(element => {
                let opcion = document.createElement('option');
                opcion.value = element['id_area'];
                opcion.innerHTML = element['nombre_area'];
                document.getElementById('area').append(opcion);
            }); 
        });

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

    static async createForm_SHOWCURRENT(login_usuario, password_usuario, nombre_usuario, apellidos_usuario, tituloacademico_usuario, tipocontrato_usuario, centro_usuario, departamento_usuario, universidad_usuario, foto_usuario, tipo_usuario){
        this.createForm_DELETE(login_usuario, password_usuario, nombre_usuario, apellidos_usuario, tituloacademico_usuario, tipocontrato_usuario, centro_usuario, departamento_usuario, universidad_usuario, foto_usuario, tipo_usuario);

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

        document.getElementById('login_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_login_usuario_SEARCH()');
        
        document.getElementById('password_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_password_usuario_SEARCH()');
        
        document.getElementById('nombre_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_usuario_SEARCH()');
        
        document.getElementById('apellidos_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_apellidos_usuario_SEARCH()');
        
        document.getElementById('tituloacademico_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_tituloacademico_usuario_SEARCH()');

        document.getElementById('tipocontrato_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_tipocontrato_usuario_SEARCH()');
        
        document.getElementById('centro_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_centro_usuario_SEARCH()');
        
        document.getElementById('departamento_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_departamento_usuario_SEARCH()');
        
        document.getElementById('universidad_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_universidad_usuario_SEARCH()');

        document.getElementById("label_nueva_foto_usuario").style.display = 'none';
        document.getElementById("nueva_foto_usuario").style.display = 'none';
        document.getElementById("link_foto_usuario").style.display = 'none';

        document.getElementById('tipo_usuario').setAttribute('onblur', 'Gestion_programa.comprobar_tipo_usuario_SEARCH()');

        await this.peticionBackGeneral('', 'area', 'SEARCH')
        .then((respuesta) => {
            console.log(respuesta);
            let listaareas = respuesta['resource'];
            listaareas.forEach(element => {
                let opcion = document.createElement('option');
                opcion.value = element['id_area'];
                opcion.innerHTML = element['nombre_area'];
                document.getElementById('area').append(opcion);
            }); 
        });

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

    //Validaciones de LoginU:
    static comprobar_login_usuario() {

        if (ValidacionesAtomicas.size_minimo('login_usuario', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('login_usuario', 'KO_login_usuario_tam_min');
            return false;
        } if (ValidacionesAtomicas.size_maximo('login_usuario', 15)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('login_usuario', 'KO_login_usuario_tam_max');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios_numeros('login_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('login_usuario','KO_login_usuario_acentos_ñ_espacios_numeros');
            return false;
        }
        DOM_class.exito('login_usuario');
        return true;
    }

    static comprobar_login_usuario_SEARCH() {

        if (ValidacionesAtomicas.es_vacio('login_usuario')) {
        } else {
            DOM_class.mostrarexitovalor('login_usuario');
            return true;
        } if (ValidacionesAtomicas.size_maximo('login_usuario', 15)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('login_usuario', 'KO_login_usuario_tam_max');
            DOM_class.mostrarerrorvalor('login_usuario');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios_numeros('login_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('login_usuario','KO_login_usuario_acentos_ñ_espacios_numeros');
            DOM_class.mostrarerrorvalor('login_usuario');
            return false;
        }
        DOM_class.exito('login_usuario');
        return true;
    }

    //Validaciones de PasswordU:
    static comprobar_password_usuario() {

        if (ValidacionesAtomicas.size_minimo('password_usuario', 3)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('password_usuario', 'KO_password_usuario_tam_min');
            return false;
        } if (ValidacionesAtomicas.size_maximo('password_usuario', 32)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('password_usuario', 'KO_password_usuario_tam_max');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios_numeros('password_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('password_usuario','KO_password_usuario_acentos_ñ_espacios_numeros');
            return false;
        }
        DOM_class.exito('password_usuario');
        return true;
    }

    static comprobar_password_usuario_SEARCH() {

        if (ValidacionesAtomicas.es_vacio('password_usuario')) {
        } else {
            DOM_class.mostrarexitovalor('password_usuario');
            return true;
        } if (ValidacionesAtomicas.size_maximo('password_usuario', 32)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('password_usuario', 'KO_password_usuario_tam_max');
            DOM_class.mostrarerrorvalor('password_usuario');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios_numeros('password_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('password_usuario','KO_password_usuario_acentos_ñ_espacios_numeros');
            DOM_class.mostrarerrorvalor('password_usuario');
            return false;
        }
        DOM_class.exito('password_usuario');
        return true;
    }

    //Validaciones de NombreU:
    static comprobar_nombre_usuario() {

        if (ValidacionesAtomicas.size_minimo('nombre_usuario', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_usuario', 'KO_nombre_usuario_tam_min');
            return false;
        } if (ValidacionesAtomicas.size_maximo('nombre_usuario', 15)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_usuario', 'KO_nombre_usuario_tam_max');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios('nombre_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_usuario','KO_nombre_usuario_acentos_ñ_espacios');
            return false;
        }
        DOM_class.exito('nombre_usuario');
        return true;
    }

    static comprobar_nombre_usuario_SEARCH() {

        if (ValidacionesAtomicas.es_vacio('nombre_usuario')) {
        } else {
            DOM_class.mostrarexitovalor('nombre_usuario');
            return true;
        } if (ValidacionesAtomicas.size_maximo('nombre_usuario', 15)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_usuario', 'KO_nombre_usuario_tam_max');
            DOM_class.mostrarerrorvalor('nombre_usuario');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios('nombre_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_usuario','KO_nombre_usuario_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('nombre_usuario');
            return false;
        }
        DOM_class.exito('nombre_usuario');
        return true;
    }

    //Validaciones de ApellidosU:
    static comprobar_apellidos_usuario() {

        if (ValidacionesAtomicas.size_minimo('apellidos_usuario', 3)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('apellidos_usuario', 'KO_apellidos_usuario_tam_min');
            return false;
        } if (ValidacionesAtomicas.size_maximo('apellidos_usuario', 30)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('apellidos_usuario', 'KO_apellidos_usuario_tam_max');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios('apellidos_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('apellidos_usuario','KO_apellidos_usuario_acentos_ñ_espacios');
            return false;
        }
        DOM_class.exito('apellidos_usuario');
        return true;
    }

    static comprobar_apellidos_usuario_SEARCH() {

        if (ValidacionesAtomicas.es_vacio('apellidos_usuario')) {
        } else {
            DOM_class.mostrarexitovalor('apellidos_usuario');
            return true;
        } if (ValidacionesAtomicas.size_maximo('apellidos_usuario', 30)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('apellidos_usuario', 'KO_apellidos_usuario_tam_max');
            DOM_class.mostrarerrorvalor('apellidos_usuario');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios('apellidos_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('apellidos_usuario','KO_apellidos_usuario_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('apellidos_usuario');
            return false;
        }
        DOM_class.exito('apellidos_usuario');
        return true;
    }

    //Validaciones de TituloAcademicoU:
    static comprobar_tituloacademico_usuario() {

        if (ValidacionesAtomicas.size_minimo('tituloacademico_usuario', 5)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tituloacademico_usuario', 'KO_tituloacademico_usuario_tam_min');
            return false;
        } if (ValidacionesAtomicas.size_maximo('tituloacademico_usuario', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tituloacademico_usuario', 'KO_tituloacademico_usuario_tam_max');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios_puntuacion('tituloacademico_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tituloacademico_usuario','KO_tituloacademico_usuario_acentos_ñ_espacios_puntuacion');
            return false;
        }
        DOM_class.exito('tituloacademico_usuario');
        return true;
    }

    static comprobar_tituloacademico_usuario_SEARCH() {

        if (ValidacionesAtomicas.es_vacio('tituloacademico_usuario')) {
        } else {
            DOM_class.mostrarexitovalor('tituloacademico_usuario');
            return true;
        } if (ValidacionesAtomicas.size_maximo('tituloacademico_usuario', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tituloacademico_usuario', 'KO_tituloacademico_usuario_tam_max');
            DOM_class.mostrarerrorvalor('tituloacademico_usuario');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios_puntuacion('tituloacademico_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tituloacademico_usuario','KO_tituloacademico_usuario_acentos_ñ_espacios_puntuacion');
            DOM_class.mostrarerrorvalor('tituloacademico_usuario');
            return false;
        }
        DOM_class.exito('tituloacademico_usuario');
        return true;
    }

    //Validaciones de TipoContratoU:
    static comprobar_tipocontrato_usuario() {

        if (ValidacionesAtomicas.size_minimo('tipocontrato_usuario', 1)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tipocontrato_usuario', 'KO_tipocontrato_usuario_tam_min');
            return false;
        } if (ValidacionesAtomicas.size_maximo('tipocontrato_usuario', 40)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tipocontrato_usuario', 'KO_tipocontrato_usuario_tam_max');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios_puntuacion('tipocontrato_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tipocontrato_usuario','KO_tipocontrato_usuario_acentos_ñ_espacios_puntuacion');
            return false;
        }
        DOM_class.exito('tipocontrato_usuario');
        return true;
    }

    static comprobar_tipocontrato_usuario_SEARCH() {

        if (ValidacionesAtomicas.es_vacio('tipocontrato_usuario')) {
        } else {
            DOM_class.mostrarexitovalor('tipocontrato_usuario');
            return true;
        } if (ValidacionesAtomicas.size_maximo('tipocontrato_usuario', 40)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tipocontrato_usuario', 'KO_tipocontrato_usuario_tam_max');
            DOM_class.mostrarerrorvalor('tipocontrato_usuario');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios_puntuacion('tipocontrato_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tipocontrato_usuario','KO_tipocontrato_usuario_acentos_ñ_espacios_puntuacion');
            DOM_class.mostrarerrorvalor('tipocontrato_usuario');
            return false;
        }
        DOM_class.exito('tipocontrato_usuario');
        return true;
    }

    //Validaciones de CentroU:
    static comprobar_centro_usuario() {

        if (ValidacionesAtomicas.size_minimo('centro_usuario', 5)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('centro_usuario', 'KO_centro_usuario_tam_min');
            return false;
        } if (ValidacionesAtomicas.size_maximo('centro_usuario', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('centro_usuario', 'KO_centro_usuario_tam_max');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios_puntuacion('centro_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('centro_usuario','KO_centro_usuario_acentos_ñ_espacios_puntuacion');
            return false;
        }
        DOM_class.exito('centro_usuario');
        return true;
    }

    static comprobar_centro_usuario_SEARCH() {

        if (ValidacionesAtomicas.es_vacio('centro_usuario')) {
        } else {
            DOM_class.mostrarexitovalor('centro_usuario');
            return true;
        } if (ValidacionesAtomicas.size_maximo('centro_usuario', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('centro_usuario', 'KO_centro_usuario_tam_max');
            DOM_class.mostrarerrorvalor('centro_usuario');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios_puntuacion('centro_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('centro_usuario','KO_centro_usuario_acentos_ñ_espacios_puntuacion');
            DOM_class.mostrarerrorvalor('centro_usuario');
            return false;
        }
        DOM_class.exito('centro_usuario');
        return true;
    }

    //Validaciones de DepartamentoU:
    static comprobar_departamento_usuario() {

        if (ValidacionesAtomicas.size_minimo('departamento_usuario', 5)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('departamento_usuario', 'KO_departamento_usuario_tam_min');
            return false;
        } if (ValidacionesAtomicas.size_maximo('departamento_usuario', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('departamento_usuario', 'KO_departamento_usuario_tam_max');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios('departamento_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('departamento_usuario','KO_departamento_usuario_acentos_ñ_espacios');
            return false;
        }
        DOM_class.exito('departamento_usuario');
        return true;
    }

    static comprobar_departamento_usuario_SEARCH() {

        if (ValidacionesAtomicas.es_vacio('departamento_usuario')) {
        } else {
            DOM_class.mostrarexitovalor('departamento_usuario');
            return true;
        } if (ValidacionesAtomicas.size_maximo('departamento_usuario', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('departamento_usuario', 'KO_departamento_usuario_tam_max');
            DOM_class.mostrarerrorvalor('departamento_usuario');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios('departamento_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('departamento_usuario','KO_departamento_usuario_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('departamento_usuario');
            return false;
        }
        DOM_class.exito('departamento_usuario');
        return true;
    }

    //Validaciones de UniversidadU:
    static comprobar_universidad_usuario() {

        if (ValidacionesAtomicas.size_minimo('universidad_usuario', 5)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('universidad_usuario', 'KO_universidad_usuario_tam_min');
            return false;
        } if (ValidacionesAtomicas.size_maximo('universidad_usuario', 40)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('universidad_usuario', 'KO_universidad_usuario_tam_max');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios('universidad_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('universidad_usuario','KO_universidad_usuario_acentos_ñ_espacios');
            return false;
        }
        DOM_class.exito('universidad_usuario');
        return true;
    }

    static comprobar_universidad_usuario_SEARCH() {

        if (ValidacionesAtomicas.es_vacio('universidad_usuario')) {
        } else {
            DOM_class.mostrarexitovalor('universidad_usuario');
            return true;
        } if (ValidacionesAtomicas.size_maximo('universidad_usuario', 40)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('universidad_usuario', 'KO_universidad_usuario_tam_max');
            DOM_class.mostrarerrorvalor('universidad_usuario');
            return false;
        }
        if(ValidacionesAtomicas.acentos_ñ_espacios('universidad_usuario')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('universidad_usuario','KO_universidad_usuario_acentos_ñ_espacios');
            DOM_class.mostrarerrorvalor('universidad_usuario');
            return false;
        }
        DOM_class.exito('universidad_usuario');
        return true;
    }

    //Validaciones de FotoU:


    //Validaciones de TipoU:
    static comprobar_tipo_usuario() {

        if (valor === 'A' || valor === 'P') {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tipo_usuario', 'KO_tipo_usuario_formato');
            return false;
        }
        DOM_class.exito('tipo_usuario');
        return true;
    }

    static comprobar_tipo_usuario_SEARCH() {
        DOM_class.exito('tipo_usuario');
        return true;
    }

}