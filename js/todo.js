// thesick.html ESTE SERÁ LO ÚNICO QUE TENDRÁ DE JS LA PAGE: "thesick.html"
const reproductoraDeVideos = () => {
    const reproductorVideos = { 
        videoplay: {
            enlace: "https://www.youtube.com/watch?v=xc_mfqPS2LY",
            autoplay: function(){
                // Se ejecutará este video automaticamente cuando se ingresa a la page
            }
        },
        videosegundo:{
            enlace:"https://www.youtube.com/watch?v=wAqc_zfmML0",
            videoplay: function(){
                // Se ejecutará este video cuando se clickee sobre él

            }
        },
        videotercero:{
            enlace:"https://www.youtube.com/watch?v=LkJ5jJuraLQ",
            videoplay: function(){
                // Se ejecutará este video cuando se clickee sobre él
            }
        },
        videocuarto:{
            enlace:"https://www.youtube.com/watch?v=q5M8K2Jm2bE",
            videoplay: function(){
                // Se ejecutará este video cuando se clickee sobre él
            }
        }
    }
}

// index.html

//Sign Up
class Usuario{
   
    constructor(firstName,lastName,email,username,password,birthday){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
    this.birthday = birthday;
    }
}

const usuarios = [];

// Esta función se ejecutará cuando se presione sobre el botón del menú que dice: "Sign Up"
const crearUsuario = () => {
    let primerNombre = nombreSign.value;
    let apellido = apellidoSign.value;
    let correoElectronico = mailSign.value;
    let nombreDeUsuario = userNameSign.value;
    let contrasenia = contraseniaSign.value;
    const nuevoUsuario = new Usuario(primerNombre,apellido,correoElectronico,nombreDeUsuario,contrasenia);

    const existeCorreo = listaUsuarios.some(u => u.email === correoElectronico);
    const existeUsuario = listaUsuarios.some(i => i.username === nombreDeUsuario);

    if((existeCorreo || existeUsuario || (!allLetter(primerNombre)) || (!allLetter(apellido)))){
        pantallaNegraSign.classList.toggle('.modal-open-error');  
        if((!allLetter(primerNombre && apellido) && (existeCorreo && existeUsuario))){ 
    
            errorCorreo.style.visibility = "visible";
            cruzErrorMail.style.visibility = "visible";
            errorApellido.style.visibility ="visible";
            cruzErrorNombre.style.visibility = "visible";
            cruzErrorApellido.style.visibility ="visible";
            errorNombre.style.visibility = "visible";
            errorUser.style.visibility = "visible";
            cruzErrorUser.style.visibility = "visible";
            cruzErrorPassword.style.visibility = "hidden";
    
        }
        else if((!allLetter(primerNombre && apellido) && existeUsuario)){ 
    
            errorApellido.style.visibility ="visible";
            cruzErrorNombre.style.visibility = "visible";
            cruzErrorApellido.style.visibility ="visible";
            errorNombre.style.visibility = "visible";
            errorUser.style.visibility = "visible";
            cruzErrorUser.style.visibility = "visible";
    
            cruzErrorPassword.style.visibility = "hidden";
            errorCorreo.style.visibility = "hidden";
            cruzErrorMail.style.visibility = "hidden";
    
        }
        else if((!allLetter(primerNombre && apellido) && existeCorreo)){ 
        
            errorCorreo.style.visibility = "visible";
            cruzErrorMail.style.visibility = "visible";
            errorApellido.style.visibility ="visible";
            cruzErrorNombre.style.visibility = "visible";
            cruzErrorApellido.style.visibility ="visible";
            errorNombre.style.visibility = "visible";
    
            cruzErrorPassword.style.visibility = "hidden";
            errorUser.style.visibility = "hidden";
            cruzErrorUser.style.visibility = "hidden";
    
        }
        else if((!allLetter(primerNombre) && existeUsuario)){ 
    
            pantallaNegraSign.classList.toggle('.modal-open-error');  
    
            errorNombre.style.visibility = "visible";
            errorUser.style.visibility = "visible";
            cruzErrorUser.style.visibility = "visible";
            cruzErrorNombre.style.visibility = "visible";
    
            errorCorreo.style.visibility = "hidden";
            cruzErrorMail.style.visibility = "hidden";
            errorApellido.style.visibility ="hidden";
            cruzErrorPassword.style.visibility = "hidden";
            cruzErrorApellido.style.visibility ="hidden";
    
        }
        else if((!allLetter(apellido) && existeUsuario)){ 
        
            pantallaNegraSign.classList.toggle('.modal-open-error');
    
            errorApellido.style.visibility ="visible";
            cruzErrorApellido.style.visibility ="visible";
            errorUser.style.visibility = "visible";
            cruzErrorUser.style.visibility = "visible";
    
            errorCorreo.style.visibility = "hidden";
            cruzErrorMail.style.visibility = "hidden";
            cruzErrorNombre.style.visibility = "hidden";
            cruzErrorPassword.style.visibility = "hidden";
            errorNombre.style.visibility = "hidden";
    
        }
        else if((!allLetter(primerNombre) && existeCorreo)){ 
        
            pantallaNegraSign.classList.toggle('.modal-open-error');  
    
            errorCorreo.style.visibility = "visible";
            cruzErrorMail.style.visibility = "visible";
            cruzErrorNombre.style.visibility = "visible";
            errorNombre.style.visibility = "visible";
            
            errorApellido.style.visibility ="hidden";
            cruzErrorPassword.style.visibility = "hidden";
            cruzErrorApellido.style.visibility ="hidden";
            errorUser.style.visibility = "hidden";
            cruzErrorUser.style.visibility = "hidden";
            
        }
        else if((!allLetter(apellido) && existeCorreo)){ 
        
            pantallaNegraSign.classList.toggle('.modal-open-error'); 
            
            errorCorreo.style.visibility = "visible";
            cruzErrorMail.style.visibility = "visible";
            errorApellido.style.visibility ="visible";
            cruzErrorApellido.style.visibility ="visible";
    
            cruzErrorNombre.style.visibility = "hidden !important";
            cruzErrorPassword.style.visibility = "hidden";
            cruzErrorApellido.style.visibility ="hidden";
            errorNombre.style.visibility = "hidden !important";
            errorUser.style.visibility = "hidden ";
            cruzErrorUser.style.visibility = "hidden";
    
        } else if(existeCorreo && existeUsuario){
            errorCorreo.style.visibility = "visible";
            cruzErrorMail.style.visibility = "visible";
            errorUser.style.visibility = "visible";
            cruzErrorUser.style.visibility = "visible";
            
            cruzErrorNombre.style.visibility = "hidden";
            cruzErrorApellido.style.visibility = "hidden";
            errorNombre.style.visibility = "hidden";
            errorApellido.style.visibility = "hidden";
        } else if ((!allLetter(primerNombre) && (!allLetter(apellido)))) {
            errorNombre.style.visibility = "visible";
            cruzErrorNombre.style.visibility = "visible";
            errorApellido.style.visibility = "visible";
            cruzErrorApellido.style.visibility = "visible";
            
            errorCorreo.style.visibility = "hidden";
            cruzErrorMail.style.visibility = "hidden";
            cruzErrorPassword.style.visibility = "hidden";
            errorUser.style.visibility = "hidden";
            cruzErrorUser.style.visibility = "hidden";
        } else if(!allLetter(primerNombre)){
            errorNombre.style.visibility = "visible";
            cruzErrorNombre.style.visibility = "visible";
            
            errorApellido.style.visibility = "hidden";
            cruzErrorApellido.style.visibility = "hidden";
            errorCorreo.style.visibility = "hidden";
            cruzErrorMail.style.visibility = "hidden";
            cruzErrorPassword.style.visibility = "hidden";
            errorUser.style.visibility = "hidden";
            cruzErrorUser.style.visibility = "hidden";
        } else if(!allLetter(apellido)){
            errorApellido.style.visibility = "visible";
            cruzErrorApellido.style.visibility = "visible";
            
            errorNombre.style.visibility = "hidden";
            cruzErrorNombre.style.visibility = "hidden";
            errorCorreo.style.visibility = "hidden";
            cruzErrorMail.style.visibility = "hidden";
            cruzErrorPassword.style.visibility = "hidden";
            errorUser.style.visibility = "hidden";
            cruzErrorUser.style.visibility = "hidden";
        } else if(existeCorreo){
            errorCorreo.style.visibility = "visible";
            cruzErrorMail.style.visibility = "visible";
    
            errorUser.style.visibility = "hidden";
            cruzErrorUser.style.visibility = "hidden";
            errorNombre.style.visibility = "hidden";
            errorApellido.style.visibility = "hidden";
            cruzErrorNombre.style.visibility = "hidden";
            cruzErrorApellido.style.visibility = "hidden";
        } else if(existeUsuario){
            errorUser.style.visibility = "visible";
            cruzErrorUser.style.visibility = "visible";
    
            errorCorreo.style.visibility = "hidden";
            errorNombre.style.visibility = "hidden";
            errorApellido.style.visibility = "hidden";
            cruzErrorMail.style.visibility = "hidden";
            cruzErrorNombre.style.visibility = "hidden";
            cruzErrorApellido.style.visibility = "hidden";
        } else if (primerNombre === ""){
            cruzErrorNombre.style.visibility = "visible";
            errorNombre.style.visibility = "hidden";
            pantallaNegraSign.classList.toggle('.modal-open-error');  
        } else if (apellido === ""){
            pantallaNegraSign.classList.toggle('.modal-open-error');  
            cruzErrorApellido.style.visibility = "visible";
            errorApellido.style.visibility = "hidden";
        } else if (correoElectronico === ""){
            pantallaNegraSign.classList.toggle('.modal-open-error');  
            cruzErrorMail.style.visibility = "visible";  
        } else if (contrasenia === ""){
            pantallaNegraSign.classList.toggle('.modal-open-error');  
            cruzErrorPassword.style.visibility = "visible";  
        } else if (nombreDeUsuario === ""){
            pantallaNegraSign.classList.toggle('.modal-open-error');  
            cruzErrorUser.style.visibility = "visible";  
        }
    } else {
        listaUsuarios.push(nuevoUsuario);
        errorCorreo.style.visibility = "hidden";
        cruzErrorMail.style.visibility = "hidden";
        errorApellido.style.visibility ="hidden";
        cruzErrorNombre.style.visibility = "hidden";
        cruzErrorPassword.style.visibility = "hidden";
        cruzErrorApellido.style.visibility ="hidden";
        errorNombre.style.visibility = "hidden";
        errorUser.style.visibility = "hidden";
        cruzErrorUser.style.visibility = "hidden";
        pantallaNegraSign.classList.remove('modal-open-sign')
    }

    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        formulario.reset();
    });

    
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    return listaUsuarios;

}

//Log In - Esta función se ejecutará cuando se presione sobre el botón del menú que dice: "Log In"
const logearse = () => { 
    let correo = prompt("Ingrese su correo electronico");
    let contrasenia = prompt("Ingrese su contraseña");
    for(let u of usuarios) {
        if (u.password === contrasenia && u.email === correo) {
            alert(`Bienvenido ${u.username}!.`);
           return u;
        } else {
            alert("Has ingresado incorrectamente tu correo electronico o tu contraseña.");
        }    
    }  
}



