const crypto = require('crypto')

//algoritmo key y vector

const algoritmo = 'aes-256-cbc' //otro algoritmo
const key  = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

//creamos el objero cipher
const cipher = crypto.createCipheriv(algoritmo, key, iv)

//datos a autenticar
const data = 'mensaje cifrado'

//cifrar datos
let encriptado = cipher.update(data, 'utf-8', 'hex')

encriptado += cipher.final('hex') //finaliza el cifrado

console.log('texto cifrado: ', encriptado);

//creamos objero para decifrar
const decipher = crypto.createDecipheriv(algoritmo, key, iv)

//deciframos
let decifrado = decipher.update(encriptado, 'hex', 'utf8')
decifrado += decipher.final('utf8')

console.log('Texto decifrado: ', decifrado);


