class Gestion_congreso extends GestionEntidad{
    static resetearformcongreso() {
        GestionEntidad.resetearForm();
    }

    static async createForm_ADD(){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_ADD_programa"]; 
        document.getElementById('IU_form').action = 'javascript:Gestion_congreso.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_congreso.comprobar_submit();');

        document.getElementById('CodigoC').setAttribute('onblur', 'Gestion_congreso.comprobar_codigoc()');
        document.getElementById('NombreC').setAttribute('onblur', 'Gestion_congreso.comprobar_nombrec()');
        document.getElementById('AcronimoC').setAttribute('onblur', 'Gestion_congreso.comprobar_acronimoc()');
        document.getElementById('AnhoC').setAttribute('onblur', 'Gestion_congreso.comprobar_anhoc()');
        document.getElementById('LugarC').setAttribute('onblur', 'Gestion_congreso.comprobar_lugarc()');

        //Es un fichero, debe hacerse distinto:
        document.getElementById('FicheropdfC').setAttribute('onblur', 'Gestion_congreso.comprobar_ficheroc()');

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

    static async createForm_EDIT(CodigoC, NombreC, AcronimoC, AnhoC, LugarC, FicheropdfC){
        this.recargarform();
        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_EDIT_congreso"]; 

        document.getElementById('CodigoC').setAttribute('onblur', 'Gestion_programa.comprobar_codigoc()');
        document.getElementById('CodigoC').value = CodigoC;

        document.getElementById('NombreC').setAttribute('onblur', 'Gestion_programa.comprobar_nombrec()');
        document.getElementById('NombreC').value = NombreC;

        document.getElementById('AcronimoC').setAttribute('onblur', 'Gestion_programa.comprobar_acronimoc()');
        document.getElementById('AcronimoC').value = AcronimoC;

        document.getElementById('AnhoC').setAttribute('onblur', 'Gestion_programa.comprobar_anhoc()');
        document.getElementById('AnhoC').value = AnhoC;

        document.getElementById('LugarC').setAttribute('onblur', 'Gestion_programa.comprobar_lugarc()');
        document.getElementById('LugarC').value = LugarC;

        //De nuevo, es un fichero, por lo que debe hacerse distinto:
        document.getElementById('FicheropdfC').setAttribute('onblur', 'Gestion_programa.comprobar_ficheropdfc()');
        document.getElementById('FicheropdfC').value = FicheropdfC;

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
        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_DELETE_congreso"]; 
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.DELETE();';

        document.getElementById('CodigoC').value = CodigoC;
        document.getElementById('NombreC').value = NombreC;
        document.getElementById('AcronimoC').value = AcronimoC;
        document.getElementById('AnhoC').value = AnhoC;
        document.getElementById('LugarC').value = LugarC;

        //Same, pdf, debe cambiarse:
        document.getElementById('FicheropdfC').value = FicheropdfC;

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

        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_SHOWCURRENT_congreso"]; 
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.SEARCH();';
        document.getElementById('id_submit').style.display = 'none';

        let imgadd = document.createElement('img');
        imgadd.src = './iconos/SHOWCURRENT.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);

        setLang();
    }

    static async createForm_SEARCH(){

        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_SEARCH_congreso"]; 
        this.recargarform();
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.SEARCH();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit_SEARCH();');

        document.getElementById('CodigoC').setAttribute('onblur', 'Gestion_programa.comprobar_codigoc_SEARCH()');
        document.getElementById('NombreC').setAttribute('onblur', 'Gestion_programa.comprobar_nombrec_SEARCH()');
        document.getElementById('AcronimoC').setAttribute('onblur', 'Gestion_programa.comprobar_acronimoc_SEARCH()');
        document.getElementById('AnhoC').setAttribute('onblur', 'Gestion_programa.comprobar_anhoc_SEARCH()');
        document.getElementById('LugarC').setAttribute('onblur', 'Gestion_programa.comprobar_lugarc_SEARCH()');

        //Pdf, lo de siempre:
        document.getElementById('FicheropdfC').setAttribute('onblur', 'Gestion_programa.comprobar__ficheropdfc_SEARCH()');

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

//------------------------------------------------------------------------------------------------------------

    static comprobar_submit(){

        let valor1 = this.comprobar_codigoc_programa();
        let valor2 = this.comprobar_nombrec_programa();
        let valor3 = this.comprobar_acronimoc_programa();
        let valor4 = this.comprobar_anhoc_programa();
        let valor5 = this.comprobar_lugarc_programa();
        let valor6 = this.comprobar_ficheropdfc_programa();


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

//-------------------------------------------------------------------------------------------------------------

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

//----------------------------------------------------------------------

static comprobar_codigoc() {
    const c_codigoc = document.getElementById('codigoc').value;
    if (validacionesAtomicas.size_minimo('codigoc', 1)) {
    } else {
        DOM_class.mostrardivmensajeserrordebajo('codigoc', 'codigoc_min_ERR');
        return false;
    } if (validacionesAtomicas.size_maximo('codigoc', 6)) {
    } else {
        DOM_class.mostrardivmensajeserrordebajo('codigoc', 'codigoc_max_ERR');
        return false;
    } if (/^[0-9]+$/.test(codigoc)) {
    } else {
        DOM_class.mostrardivmensajeserrordebajo('codigoc', 'codigoc_formato_ERR');
        return false;
    }
    DOM_class.exito('codigoc');
    return true;
}

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