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

        document.getElementById('CodigoC').setAttribute('onblur', 'Gestion_congreso.comprobar_codigoc()');

        document.getElementById('NombreC').setAttribute('onblur', 'Gestion_congreso.comprobar_nombrec()');
        
        document.getElementById('AcronimoC').setAttribute('onblur', 'Gestion_congreso.comprobar_acronimoc()');
        
        //Estar pendiente por el formato
        document.getElementById('AnhoC').setAttribute('onblur', 'Gestion_congreso.comprobar_anhoc()');
        
        document.getElementById('LugarC').setAttribute('onblur', 'Gestion_congreso.comprobar_lugarc()');

        document.getElementById('nuevo_FicheropdfC').setAttribute('onblur','Gestion_programa.comprobar_nuevo_ficheropdfc()');
        
        document.getElementById("label_FicheropdfC").style.display = 'none';
        document.getElementById("FicheropdfC").style.display = 'none';
        document.getElementById("link_FicheropdfC").style.display = 'none';

        //Preguntar por este bloque antes de los lets
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

    //Ver tema de atributos pasados
    static async createForm_EDIT(CodigoC, NombreC, AcronimoC, AnhoC, LugarC, FicheropdfC){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_programa";
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit_EDIT();');

        document.getElementById('CodigoC').setAttribute('onblur', 'Gestion_programa.comprobar_codigoc()');
        document.getElementById('CodigoC').value = CodigoC;
        //document.getElementById('id_programa').setAttribute("readonly","");??

        document.getElementById('NombreC').setAttribute('onblur', 'Gestion_programa.comprobar_nombrec()');
        document.getElementById('NombreC').value = NombreC;

        document.getElementById('AcronimoC').setAttribute('onblur', 'Gestion_programa.comprobar_acronimoc()');
        document.getElementById('AcronimoC').value = AcronimoC;

        document.getElementById('AnhoC').setAttribute('onblur', 'Gestion_programa.comprobar_anhoc()');
        document.getElementById('AnhoC').value = AnhoC;

        document.getElementById('LugarC').setAttribute('onblur', 'Gestion_programa.comprobar_lugarc()');
        document.getElementById('LugarC').value = LugarC;

        document.getElementById('FicheropdfC').value = FicheropdfC;
        document.getElementById('link_FicheropdfC').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_ficheropdfc/'+FicheropdfC.value);
        document.getElementById('FicheropdfC').setAttribute("readonly",true);

        document.getElementById('nuevo_FicheropdfC').setAttribute('onblur','Gestion_programa.comprobar_nuevo_FicheropdfC()');


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

    static async createForm_DELETE(CodigoC, NombreC, AcronimoC, AnhoC, LugarC, FicheropdfC){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_programa";
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.DELETE();';

        document.getElementById('CodigoC').value = CodigoC;
        document.getElementById('CodigoC').setAttribute('readonly',true);

        document.getElementById('NombreC').value = NombreC;
        document.getElementById('NombreC').setAttribute('readonly',true);

        document.getElementById('AcronimoC').value = AcronimoC;
        document.getElementById('AcronimoC').setAttribute('readonly',true);

        document.getElementById('AnhoC').value = AnhoC;
        document.getElementById('AnhoC').setAttribute('readonly',true);

        document.getElementById('LugarC').value = LugarC;
        document.getElementById('LugarC').setAttribute('readonly',true);

        document.getElementById('FicheropdfC').value = FicheropdfC;
        document.getElementById('FicheropdfC').setAttribute('readonly',true);
        document.getElementById('FicheropdfC').setAttribute("readonly", true);
        document.getElementById("link_FicheropdfC").href += FicheropdfC;

        document.getElementById("label_nuevo_FicheropdfC").style.display = 'none';
        document.getElementById("nuevo_FicheropdfC").style.display = 'none';

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

    static async createForm_SHOWCURRENT(CodigoC, NombreC, AcronimoC, AnhoC, LugarC, FicheropdfC){
        this.createForm_DELETE(CodigoC, NombreC, AcronimoC, AnhoC, LugarC, FicheropdfC);

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

        document.getElementById('CodigoC').setAttribute('onblur', 'Gestion_programa.comprobar_codigoc_SEARCH()');
        
        document.getElementById('NombreC').setAttribute('onblur', 'Gestion_programa.comprobar_nombrec_SEARCH()');
        
        document.getElementById('AcronimoC').setAttribute('onblur', 'Gestion_programa.comprobar_acronimoc_SEARCH()');
        
        document.getElementById('AnhoC').setAttribute('onblur', 'Gestion_programa.comprobar_anhoc_SEARCH()');
        
        document.getElementById('LugarC').setAttribute('onblur', 'Gestion_programa.comprobar_lugarc_SEARCH()');

        document.getElementById("label_nuevo_FicheropdfC").style.display = 'none';
        document.getElementById("nuevo_FicheropdfC").style.display = 'none';
        document.getElementById("link_FicheropdfC").style.display = 'none';

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

        let valor1 = this.comprobar_codigoc();
        let valor2 = this.comprobar_nombrec();
        let valor3 = this.comprobar_acronimoc();
        let valor4 = this.comprobar_anhoc();
        let valor5 = this.comprobar_lugarc();
        let valor6 = this.comprobar_nuevo_ficheropdfc();

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

        let valor1 = this.comprobar_codigoc();
        let valor2 = this.comprobar_nombrec();
        let valor3 = this.comprobar_acronimoc();
        let valor4 = this.comprobar_anhoc();
        let valor5 = this.comprobar_lugarc();
        let valor6 = this.comprobar_nuevo_ficheropdfc_EDIT();

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

        let valor1 = this.comprobar_codigoc_SEARCH();
        let valor2 = this.comprobar_nombrec_SEARCH();
        let valor3 = this.comprobar_acronimoc_SEARCH();
        let valor4 = this.comprobar_anhoc_SEARCH();
        let valor5 = this.comprobar_lugarc_SEARCH();
        let valor6 = this.comprobar_ficheropdfc_SEARCH();

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
    static comprobar_codigoc() {

        if (ValidacionesAtomicas.size_minimo('codigoc', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('codigoc', 'KO_codigoc_tam_min');
            return false;
        } if (ValidacionesAtomicas.size_maximo('codigoc', 11)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('codigoc', 'KO_codigoc_tam_max');
            return false;
        }
        if(ValidacionesAtomicas.solo_numeros('codigoc')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('codigoc','KO_codigoc_numeros');
            return false;
        }
        DOM_class.exito('codigoc');
        return true;
    }

    static comprobar_codigoc_SEARCH() {

        if (ValidacionesAtomicas.es_vacio('codigoc')) {
        } else {
            DOM_class.mostrarexitovalor('codigoc');
            return true;
        } if (ValidacionesAtomicas.size_maximo('codigoc', 11)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('codigoc', 'KO_codigoc_tam_max');
            DOM_class.mostrarerrorvalor('codigoc');
            return false;
        }
        if(ValidacionesAtomicas.solo_numeros('codigoc')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('codigoc','KO_codigoc_numeros');
            DOM_class.mostrarerrorvalor('codigoc');
            return false;
        }
        DOM_class.exito('codigoc');
        return true;
    }

    //Validaciones de NombreC:
    static comprobar_nombrec() {

        if (ValidacionesAtomicas.size_minimo('nombrec', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombrec', 'KO_nombrec_tam_min');
            return false;
        } if (ValidacionesAtomicas.size_maximo('nombrec', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombrec', 'KO_nombrec_tam_max');
            return false;
        }
        if(ValidacionesAtomicas.solo_ñ_espacios('nombrec')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombrec','KO_nombrec_solo_ñ_espacios');
            return false;
        }
        DOM_class.exito('nombrec');
        return true;
    }

    static comprobar_nombrec_SEARCH() {

        if (ValidacionesAtomicas.es_vacio('nombrec')) {
        } else {
            DOM_class.mostrarexitovalor('nombrec');
            return true;
        } if (ValidacionesAtomicas.size_maximo('nombrec', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombrec', 'KO_nombrec_tam_max');
            DOM_class.mostrarerrorvalor('nombrec');
            return false;
        }
        if(ValidacionesAtomicas.solo_ñ_espacios('nombrec')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombrec','KO_nombrec_solo_ñ_espacios');
            DOM_class.mostrarerrorvalor('nombrec');
            return false;
        }
        DOM_class.exito('nombrec');
        return true;
    }

    //Validaciones de AcronimoC:
    static comprobar_acronimoc() {

        if (ValidacionesAtomicas.size_minimo('acronimoc', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimoc', 'KO_acronimoc_tam_min');
            return false;
        } if (ValidacionesAtomicas.size_maximo('acronimoc', 20)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimoc', 'KO_acronimoc_tam_max');
            return false;
        }
        if(ValidacionesAtomicas.no_acentos('acronimoc')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimoc','KO_acronimoc_no_acentos');
            return false;
        }
        DOM_class.exito('acronimoc');
        return true;
    }

    static comprobar_acronimoc_SERACH() {

        if (ValidacionesAtomicas.es_vacio('acronimoc')) {
        } else {
            DOM_class.mostrarexitovalor('acronimoc');
            return false;
        } if (ValidacionesAtomicas.size_maximo('acronimoc', 20)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimoc', 'KO_acronimoc_tam_max');
            DOM_class.mostrarerrorvalor('acronimoc');
            return false;
        }
        if(ValidacionesAtomicas.no_acentos('acronimoc')){
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimoc','KO_acronimoc_no_acentos');
            DOM_class.mostrarerrorvalor('acronimoc');
            return false;
        }
        DOM_class.exito('acronimoc');
        return true;
    }

    //Validaciones de AnhoC

//-----------------------------------------------------------------------------

static recargarform(){

    document.getElementById("IU_form").innerHTML= '';
    document.getElementById("IU_form").innerHTML=`
    <label id="label_id_programa" class="label_id_programa"></label>
        </label>
        <input type='text' id='id_programa' name='id_programa'></input>
        <div id="div_error_id_programa" class="errorcampo"><a id="error_id_programa"></a></div>
        <br>`;

        let campos = document.forms['IU_form'].elements;
        for (let i = 0; i < campos.length; i++) {
            if (eval(document.getElementById('div_error_' + campos[i].id))) {
                document.getElementById('div_error_' + campos[i].id).style.display = 'none';
            }
        }
        setLang();
    }

}