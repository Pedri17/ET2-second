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

        document.getElementById('LoginU').setAttribute('onblur', 'Gestion_congreso.comprobar_loginu()');

        document.getElementById('PasswordU').setAttribute('onblur', 'Gestion_congreso.comprobar_passwordU()');
        
        document.getElementById('NombreU').setAttribute('onblur', 'Gestion_congreso.comprobar_nombreu()');
        
        document.getElementById('ApellidosU').setAttribute('onblur', 'Gestion_congreso.comprobar_apellidosu()');
        
        document.getElementById('TituloAcademicoU').setAttribute('onblur', 'Gestion_congreso.comprobar_tituloacademicou()');

        document.getElementById('TipoContratoU').setAttribute('onblur', 'Gestion_congreso.comprobar_tipocontratou()');
        
        document.getElementById('CentroU').setAttribute('onblur', 'Gestion_congreso.comprobar_centrou()');

        document.getElementById('DepartamentoU').setAttribute('onblur', 'Gestion_congreso.comprobar_departamentou()');

        document.getElementById('UniversidadU').setAttribute('onblur', 'Gestion_congreso.comprobar_universidadu()');

        document.getElementById('nueva_FotoU').setAttribute('onblur','Gestion_programa.comprobar_nueva_fotou()');
        
        document.getElementById("label_FotoU").style.display = 'none';
        document.getElementById("FotoU").style.display = 'none';
        document.getElementById("link_FotoU").style.display = 'none';

        document.getElementById('TipoU').setAttribute('onblur', 'Gestion_congreso.comprobar_tipou()');

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

    static async createForm_EDIT(LoginU, PasswordU, NombreU, ApellidosU, TituloAcademicoU, TipoContratoU, CentroU, DepartamentoU, UniversidadU, FotoU, TipoU){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_programa";
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit_EDIT();');

        document.getElementById('LoginU').setAttribute('onblur', 'Gestion_programa.comprobar_loginu()');
        document.getElementById('LoginU').value = LoginU;
        document.getElementById('LoginU').setAttribute("readonly","");

        document.getElementById('PasswordU').setAttribute('onblur', 'Gestion_programa.comprobar_passwordu()');
        document.getElementById('PasswordU').value = PasswordU;

        document.getElementById('NombreU').setAttribute('onblur', 'Gestion_programa.comprobar_nombreu()');
        document.getElementById('NombreU').value = NombreU;

        document.getElementById('ApellidosU').setAttribute('onblur', 'Gestion_programa.comprobar_apellidosu()');
        document.getElementById('ApellidosU').value = ApellidosU;

        document.getElementById('TituloAcademicoU').setAttribute('onblur', 'Gestion_programa.comprobar_tituloacademicou()');
        document.getElementById('TituloAcademicoU').value = TituloAcademicoU;

        document.getElementById('TipoContratoU').setAttribute('onblur', 'Gestion_programa.comprobar_tipocontratou()');
        document.getElementById('TipoContratoU').value = TipoContratoU;

        document.getElementById('CentroU').setAttribute('onblur', 'Gestion_programa.comprobar_centrou()');
        document.getElementById('CentroU').value = CentroU;

        document.getElementById('DepartamentoU').setAttribute('onblur', 'Gestion_programa.comprobar_departamentou()');
        document.getElementById('DepartamentoU').value = DepartamentoU;

        document.getElementById('UniversidadU').setAttribute('onblur', 'Gestion_programa.comprobar_universidadu()');
        document.getElementById('UniversidadU').value = UniversidadU;

        document.getElementById('FotoU').value = FotoU;
        document.getElementById('link_FotoU').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_fotou/'+FotoU.value);
        document.getElementById('FotoU').setAttribute("readonly",true);

        document.getElementById('nueva_FotoU').setAttribute('onblur','Gestion_programa.comprobar_nueva_fotou()');

        document.getElementById('TipoU').setAttribute('onblur', 'Gestion_programa.comprobar_tipou()');
        document.getElementById('TipoU').value = TipoU;

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

    static async createForm_DELETE(LoginU, PasswordU, NombreU, ApellidosU, TituloAcademicoU, TipoContratoU, CentroU, DepartamentoU, UniversidadU, FotoU, TipoU){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_programa";
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.DELETE();';

        document.getElementById('LoginU').value = LoginU;
        document.getElementById('LoginU').setAttribute('readonly',true);

        document.getElementById('PasswordU').value = PasswordU;
        document.getElementById('PasswordU').setAttribute('readonly',true);

        document.getElementById('NombreU').value = NombreU;
        document.getElementById('NombreU').setAttribute('readonly',true);

        document.getElementById('ApellidosU').value = ApellidosU;
        document.getElementById('ApellidosU').setAttribute('readonly',true);

        document.getElementById('TituloAcademicoU').value = TituloAcademicoU;
        document.getElementById('TituloAcademicoU').setAttribute('readonly',true);

        document.getElementById('TipoContratoU').value = TipoContratoU;
        document.getElementById('TipoContratoU').setAttribute('readonly',true);

        document.getElementById('CentroU').value = CentroU;
        document.getElementById('CentroU').setAttribute('readonly',true);

        document.getElementById('DepartamentoU').value = DepartamentoU;
        document.getElementById('DepartamentoU').setAttribute('readonly',true);

        document.getElementById('UniversidadU').value = UniversidadU;
        document.getElementById('UniversidadU').setAttribute('readonly',true);

        document.getElementById('FotoU').value = FotoU;
        document.getElementById('FotoU').setAttribute('readonly',true);
        document.getElementById('FotoU').setAttribute("readonly", true);
        document.getElementById("link_FotoU").href += FotoU;

        document.getElementById("label_nueva_FotoU").style.display = 'none';
        document.getElementById("nueva_FotoU").style.display = 'none';

        document.getElementById('TipoU').value = TipoU;
        document.getElementById('TipoU').setAttribute('readonly',true);

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

    static async createForm_SHOWCURRENT(LoginU, PasswordU, NombreU, ApellidosU, TituloAcademicoU, TipoContratoU, CentroU, DepartamentoU, UniversidadU, FotoU, TipoU){
        this.createForm_DELETE(LoginU, PasswordU, NombreU, ApellidosU, TituloAcademicoU, TipoContratoU, CentroU, DepartamentoU, UniversidadU, FotoU, TipoU);

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

        document.getElementById('LoginU').setAttribute('onblur', 'Gestion_programa.comprobar_loginu_SEARCH()');
        
        document.getElementById('PasswordU').setAttribute('onblur', 'Gestion_programa.comprobar_passwordu_SEARCH()');
        
        document.getElementById('NombreU').setAttribute('onblur', 'Gestion_programa.comprobar_nombreu_SEARCH()');
        
        document.getElementById('ApellidosU').setAttribute('onblur', 'Gestion_programa.comprobar_apellidosu_SEARCH()');
        
        document.getElementById('TituloAcademicoU').setAttribute('onblur', 'Gestion_programa.comprobar_tituloacademicou_SEARCH()');

        document.getElementById('TipoContratoU').setAttribute('onblur', 'Gestion_programa.comprobar_tipocontratou_SEARCH()');
        
        document.getElementById('Centrou').setAttribute('onblur', 'Gestion_programa.comprobar_centrou_SEARCH()');
        
        document.getElementById('DepartamentoU').setAttribute('onblur', 'Gestion_programa.comprobar_departamentou_SEARCH()');
        
        document.getElementById('UniversidadU').setAttribute('onblur', 'Gestion_programa.comprobar_universidadu_SEARCH()');

        document.getElementById("label_nueva_FotoU").style.display = 'none';
        document.getElementById("nueva_FotoU").style.display = 'none';
        document.getElementById("link_FotoU").style.display = 'none';

        document.getElementById('TipoU').setAttribute('onblur', 'Gestion_programa.comprobar_tipou_SEARCH()');

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

        let valor1 = this.comprobar_loginu();
        let valor2 = this.comprobar_passwordu();
        let valor3 = this.comprobar_nombreu();
        let valor4 = this.comprobar_apellidosu();
        let valor5 = this.comprobar_tituloacademicou();
        let valor6 = this.comprobar_tipocontratou();
        let valor7 = this.comprobar_centrou();
        let valor8 = this.comprobar_departamentou();
        let valor9 = this.comprobar_universidadu();
        let valor10 = this.comprobar_nueva_fotou();
        let valor11= this.comprobar_tipou();

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

        let valor1 = this.comprobar_loginu();
        let valor2 = this.comprobar_passwordu();
        let valor3 = this.comprobar_nombreu();
        let valor4 = this.comprobar_apellidosu();
        let valor5 = this.comprobar_tituloacademicou();
        let valor6 = this.comprobar_tipocontratou();
        let valor7 = this.comprobar_centrou();
        let valor8 = this.comprobar_departamentou();
        let valor9 = this.comprobar_universidadu();
        let valor10 = this.comprobar_nueva_fotou_EDIT();
        let valor11= this.comprobar_tipou();

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

        let valor1 = this.comprobar_loginu_SEARCH();
        let valor2 = this.comprobar_passwordu_SEARCH();
        let valor3 = this.comprobar_nombreu_SEARCH();
        let valor4 = this.comprobar_apellidosu_SEARCH();
        let valor5 = this.comprobar_tituloacademicou_SEARCH();
        let valor6 = this.comprobar_tipocontratou_SEARCH();
        let valor7 = this.comprobar_centrou_SEARCH();
        let valor8 = this.comprobar_departamentou_SEARCH();
        let valor9 = this.comprobar_universidadu_SEARCH();
        let valor10 = this.comprobar_fotou_SEARCH();
        let valor11= this.comprobar_tipou_SEARCH();

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

}