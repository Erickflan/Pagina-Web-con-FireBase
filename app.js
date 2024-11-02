console.log("app.js ha sido cargado correctamente.");

// Importa los módulos necesarios de Firebase
import { auth } from './firebaseConfig.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// Función para iniciar sesión
function loginUser(email, password) {
    console.log("Intentando iniciar sesión con:", email, password); // Verificación de datos en la consola

    // Llama a Firebase para iniciar sesión con correo y contraseña
    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log("Usuario logueado:", userCredential.user);
            alert(`Bienvenido ${userCredential.user.email}`);
            // Redirigir después de iniciar sesión
            window.location.href = 'perfil.html'; // Cambia a la página de perfil después de iniciar sesión
        })
        .catch(error => {
            console.error("Error de login:", error);
            alert("Error en el inicio de sesión. Verifica tu correo y contraseña.");
        });
}

// Verifica el estado de autenticación para mostrar un mensaje en la interfaz si el usuario está logueado
onAuthStateChanged(auth, user => {
    if (user) {
        const welcomeElement = document.getElementById('userWelcome');
        if (welcomeElement) {
            welcomeElement.textContent = `Bienvenido, ${user.email}`;
            welcomeElement.style.display = 'block';
        }
    } else {
        const welcomeElement = document.getElementById('userWelcome');
        if (welcomeElement) welcomeElement.style.display = 'none';
    }
});

// Exponer la función loginUser para que esté disponible en login.html
window.loginUser = loginUser;
