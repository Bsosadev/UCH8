class Servicios {
    autenticar(usuario, contrasena, callback) {
        const apiurl = '/login';
        // Aquí iría la llamada a la API para la autenticación
        // Supondré una llamada AJAX simulada
        $.ajax({
            url: apiurl,
            method: 'POST',
            data: { usuario, contrasena },
            success: (response) => {
                callback(null, response);
            },
            error: (error) => {
                callback(error);
            }
        });
    }
    obtenerUsuarios(callback) {
        const apiurl = '/usuarios';
        // Aquí iría la llamada a la API para obtener los usuarios
        // Supondré una llamada AJAX simulada
        $.ajax({
            url: apiurl,
            method: 'GET',
            success: (response) => {
                callback(null, response);
            },
            error: (error) => {
                callback(error);
            }
        });
    }

}

// Exportar la clase para poder importarla en otro archivo
export default Servicios;