import Servicios from './servicios.js';
class GestorUsuarios {
    constructor() {
        this.servicios = new Servicios();
        //todas las variables que deben inicializarse
        this.usuarios = []; 
        //LOS USUARIOS DE LA FUNCION GESTORUSUARIOS
        this.init();
    }
    login() {
        const usuario = $('#user').val();
        const contrasena = $('#pass').val();
        /*  
            call(error, succss) {
                if (error) { .. }
                else { .. }
            }
            this.servicios.autenticar(usuario, contrasena, call){

            }
        */
        this.servicios.autenticar(usuario, contrasena, (error, response) => {
            if (error) {
                alert('Usuario o contraseña incorrectos');
            } else {
                this.usuarios.push(response.usuario);
                //agrega un campo al array
                alert('¡Login exitoso!');
                this.cleanMain();
            }
        });
    }
    mostrarUsuarios() {
        this.servicios.obtenerUsuarios((error, response) => {
            if (error) {
                console.error('Error al obtener usuarios:', error);
            } else {
                this.renderizarUsuarios(response.usuarios);
            }
        });
    }
    cleanMain() {
        $("#mainlogin").html("");
    }
    renderizarUsuarios(usuarios) {
        //usuarios ==> Array
        usuarios.forEach(usuario => {
            $('#mainlogin').append(`<div class="usuario">${usuario}</div>`);
        });
    }
    renderLogin() {
        const templatelogin = `<div class="inputLogin">
            <div class="input">
                <label>Usuario</label>
                <input type="text" id="user" />
            </div>
            <div class="input">
                <label>Password</label>
                <input type="password" id="pass" />
            </div>
            <div class="input">
                <button type="submit" class="btn" id="btLogin">Logear</button>
            </div>
        </div>`;
        $("#mainlogin").append(templatelogin);
    }
    // funciones para IMPRIMIR vistas
    render() {
        this.renderLogin();
    }
    init() {
        this.render();
        //otras funcionalidades
        $('#btLogin').on('click', () => {
            this.login();
        });
    }
}

export default GestorUsuarios;