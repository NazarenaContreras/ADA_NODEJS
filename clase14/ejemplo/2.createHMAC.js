const crypto = require('crypto') 

const data = 'Mensaje secreto'

//clave secreta
const secretKey = 'mi_clave_secreta'

const hmac = crypto.createHmac('sha256', secretKey)

hmac.update(data)

//transformo a formato hexadecimal
const hashOutput = hmac.igest('hex')

console.log('HMAC SHA-256: ', hashOutput);
