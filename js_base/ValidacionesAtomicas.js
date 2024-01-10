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

    static solo_numeros(id){
        if (/^[0-9]+$/.test(document.getElementById(id)) == true){
            return true;
        } else {
            return false;
        }
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