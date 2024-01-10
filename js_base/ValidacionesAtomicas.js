class validacionesAtomicas{

    static es_vacio(id){
        if(document.getElementById(id).value.length !== 0){
            return true
        } else {
            return false;
        }
    }

    static size_minimo(id, minimo){
        if (document.getElementById(id).value.length < minimo){
            return false;
        } else {
            return true;
        }
    }

    static size_maximo(id, maximo){
        if (document.getElementById(id).value.length > maximo){
            return false;
        } else {
            return true;
        }
    }

    static size_minimo_extension(id, minimo){
 
    }

    static size_maximo_extension(id, maximo){

    }

    static solo_numeros(id){
        if (/^[0-9]+$/.test(document.getElementById(id)) == true){
            return true;
        } else {
            return false;
        }
    }

    static acentos_ñ_espacios(id){
        if (/^[A-Za-zÁ-Úá-úñÑ\s]+$/.test(document.getElementById(id)) == true){
            return true;
        } else {
            return false;
        }
    }

    static no_acentos_ñ_espacios(id){
        if (/^[A-Za-z]+$/.test(document.getElementById(id)) == true){
            return true;
        } else {
            return false;
        }
    }

    static no_acentos_ñ_espacios_fich(id){
        if (/^[A-Za-z.]+$/.test(document.getElementById(id)) == true){
            return true;
        } else {
            return false;
        }
    }

    static formato_fecha_correcto(id){

    }

    static extension_fich(id){
        
    }

    static size_adecuado(id, peso){
        const fileInput = document.getElementById(id);
        const file = fileInput.files[0].size; 
        if(file>peso){
            return false;
        } else {
            return true;
        }
    }

}