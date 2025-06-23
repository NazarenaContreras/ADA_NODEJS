const crypto = require('crypto')

//datos que queremos encontrar
const data = 'Este es un mensaje secreto'

//creamos el hash
const hash = crypto.createHash('sha256')

//actualizo hash con los datos
hash.update(data)

//lo obtenfo con formato exadecimal
const hashOutpout = hash.digest('hex')

//mostramos por consosla
console.log('Hash SHA-256: ', hashOutput);



