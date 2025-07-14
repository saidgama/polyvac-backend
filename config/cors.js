module.exports = {
  // Configuración usando variables de entorno
  origin: process.env.CORS_ORIGINS 
    ? process.env.CORS_ORIGINS.split(',')
    : process.env.NODE_ENV === 'production' 
      ? ['https://industrias-polyvac.pages.dev']
      : ['http://localhost:4321'],
  
  // Métodos permitidos
  methods: process.env.CORS_METHODS 
    ? process.env.CORS_METHODS.split(',')
    : ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  
  // Headers permitidos
  headers: process.env.CORS_HEADERS 
    ? process.env.CORS_HEADERS.split(',')
    : [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
        'X-Requested-With',
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Methods',
      ],
  
  // Permitir credenciales
  credentials: process.env.CORS_CREDENTIALS === 'true' || true,
  
  // Cachear preflight requests por 1 hora
  maxAge: 3600,
  
  // Configuración condicional basada en el entorno
  optionsSuccessStatus: 200,
};
