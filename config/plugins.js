module.exports = () => ({
    "users-permissions": {
        "config": {
            "register": {
            "allowedFields": ["firstname", "lastname", "phone"],
            }
        }
    },
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'polyvacweb@gmail.com', // Reemplazar con tu correo de Gmail
                    pass: 'asnxvuuzupjmbizf', // Reemplazar con tu contraseña de aplicación de Google
                },
            },
            settings: {
                defaultFrom: 'polyvacweb@gmail.com', // Correo que aparecerá como remitente
                defaultReplyTo: 'pedidos@polyvac.com', // Correo para responder
            },
        },
    },
});
