class validacionesatomicas{

    static es_vacio(id){
        if(document.getElementById(id).value==null || document.getElementById(id).value==''){
            return true;
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

    static size_minimo_extension(id, valorminimo){
        var value = document.getElementById(id).value;
        var nombre = value;
        
        if(value != null){
            if(value.includes("\\")){
                nombre = value.split("\\")[2];
            } if(nombre.includes(".")){
                nombre = nombre.split(".")[0];
            }
        }

        if(nombre.length < valorminimo){
            return false;
        } else{
            return true;
        }
    }

    static size_maximo_extension(id, valormaximo){
        var value = document.getElementById(id).value;
        var nombre = value;
        
        if(value != null){
            if(value.includes("\\")){
                nombre = value.split("\\")[2];
            } if(nombre.includes(".")){
                nombre = nombre.split(".")[0];
            }
        }

        if(nombre.length > valormaximo){
            return false;
        } else{
            return true;
        }
    }

    static solo_numeros(id){
        var regex = /^\d+$/
        if (regex.test(document.getElementById(id).value) == true){
            return true;
        } else {
            return false;
        }
    }

    static acentos_ñ_espacios(id){
        if (/^[A-Za-zÁ-Úá-úñÑ\s]+$/.test(document.getElementById(id).value) == true){
            return true;
        } else {
            return false;
        }
    }

    static no_acentos_ñ_espacios(id){
        if (/^[A-Za-z]+$/.test(document.getElementById(id).value) == true){
            return true;
        } else {
            return false;
        }
    }

    static no_acentos_ñ_espacios_fich(id){
        var regex = /^[A-Za-z.\\\/]+$/;
        var value = document.getElementById(id).value;
        var nombre = value;
        
        if(value != null){
            if(value.includes("\\")){
                nombre = value.split("\\")[2];
            }
        }

        return regex.test(nombre);
    }

    static acentos_ñ_espacios_numeros(id){
        if (/^[0-9A-Za-zÁ-Úá-úñÑ\s]+$/.test(document.getElementById(id).value) == true){
            return true;
        } else {
            return false;
        }
    }

    static acentos_ñ_espacios_puntuacion(id){
        if (/^[A-Za-zÁ-Úá-úñÑ\s;,:.¿?¡!«»“”‘’]+$/.test(document.getElementById(id).value) == true){
            return true;
        } else {
            return false;
        }
    }

    static formato_fecha_correcto(id){
        const caracteres = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
        const valido = caracteres.test(document.getElementById(id).value);
        if(!valido){
            return false; 
        } else {
            return true;
        }
    }

    static extension_fich_pdf(id){
        var content = document.getElementById(id).value;
        var extension = content;

        if(content != null){
            if(content.includes("\\")){
                extension = content.split("\\")[2];
            }
            if(extension.includes(".")){
                extension = extension.split(".")[1];
            }
        }

        return (extension == "pdf");
    }

    static extension_fich_jpg_jpeg(id){
        var content = document.getElementById(id).value;
        var extension = content;

        if(content != null){
            if(content.includes("\\")){
                extension = content.split("\\")[2];
            }
            if(extension.includes(".")){
                extension = extension.split(".")[1];
            }
        }

        return (extension == "jpg" || extension == "jpeg");
    }

    static valores_permitidos (id){
        return document.getElementById(id).value === 'A' || document.getElementById(id).value === 'P';
    }

}