document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MENÚ HAMBURGUESA (MÓVIL) ---
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    // Verificamos si existen los elementos antes de agregar el evento
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // --- 2. SIMULACIÓN DE BOTONES DE COMPRA ---
    const buyButtons = document.querySelectorAll('.add-to-cart');
    
    // Esto funciona aunque no haya botones en la página (no da error)
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); 
            alert("Excelente, estas comprando este producto.");
        });
    });

    // --- 3. FORMULARIO DE CONTACTO ---
    const contactForm = document.getElementById('contactForm');
    
    // IMPORTANTE: Verificamos si el formulario existe en esta página
    // para evitar errores en páginas que no lo tengan.
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("¡Gracias! Hemos recibido tu mensaje. Te contactaremos pronto.");
            contactForm.reset(); // Limpia el formulario
        });
    }

    // --- 4. ANIMACIÓN AL HACER SCROLL (Intersection Observer) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando el elemento entra en pantalla, le agregamos la clase 'visible'
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 }); // Se activa cuando el 10% del elemento es visible

    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        observer.observe(product);
    });

    // --- 5. CHAT FLOTANTE (Opcional, por si lo agregaste en la sección Nosotros) ---
    const chatBtn = document.querySelector('.chat-btn');
    if (chatBtn) {
        chatBtn.addEventListener('click', () => {
            alert("Abriendo chat de soporte...");
        });
    }
    
    document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MENÚ HAMBURGUESA (MÓVIL) ---
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    // Verificamos si existen los elementos antes de agregar el evento
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // --- 2. SIMULACIÓN DE BOTONES DE COMPRA ---
    const buyButtons = document.querySelectorAll('.add-to-cart');
    
    // Esto funciona aunque no haya botones en la página (no da error)
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); 
            alert("¡Excelente elección! Producto agregado al carrito (Demo).");
        });
    });

    // --- 3. FORMULARIO DE CONTACTO ---
    const contactForm = document.getElementById('contactForm');
    
    // IMPORTANTE: Verificamos si el formulario existe en esta página
    // para evitar errores en páginas que no lo tengan.
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("¡Gracias! Hemos recibido tu mensaje. Te contactaremos pronto.");
            contactForm.reset(); // Limpia el formulario
        });
    }

    // --- 4. ANIMACIÓN AL HACER SCROLL (Intersection Observer) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando el elemento entra en pantalla, le agregamos la clase 'visible'
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 }); // Se activa cuando el 10% del elemento es visible

    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        observer.observe(product);
    });



});
});
