

/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */


// javascript
anagrama('amor', 'roma')
anagrama('pepe', 'pepi')
anagrama('Amor', 'amores')
anagrama('Amor', 'amor')

function anagrama( palabraUno, palabraDos ) {
    //pongo to lower case para que a la hora de hacer la validacion se  conviertan mis parametros a minuscula y se pueda saber si las palabras son exactamente iguales sin considerar si el valor se ingreso con mayuscula
    //SI SON EXACTAMENTE IGUALES.
    if ( palabraUno.toLowerCase() === palabraDos.toLowerCase()){
            return console.log(false , 'las palabras son iguales')
    }   
    //split separa un string,  en cadenas separadas, en CHAR en este caso  y las asigna en el array con indice particular; split(''), indica que por cada letra de ese srtring, se va a separar cada letra particular  en un indice individual y se va a almacenar en un array 
    let arrUno = palabraUno.toLowerCase().split('').sort()//sort lo ordena alfabeticamente a las letras
    let arrDos = palabraDos.toLowerCase().split('').sort()
    //se oderna alfabeticamente por que si son anagramas, el contenido de los arrays va a ser identico

    //SI TIENEN LA MISMA LONGITUD
    if ( arrUno.length === arrDos.length) {
       for ( let i = 0; i < arrUno.length; ++i ){
            if (arrUno[i] !== arrDos[i]) { //si el valor del indice 'I' del array es distinto del indice  del array2 (que se supone que valen lo mismo por que estan ordenados alfabeticamente), las palabras no son anagramas
                return console.log(false , 'las palabras NO son anagramas')
            }
       } //mejorar la parte de codigo de abajo para que sea mas legible
        return console.log(true , 'las palabras son anagramas'); //si ninguno de los valores difiere
    } else {
            console.log(false , 'las palabras son de diff longitud')//si el arrUno.lenght de la primera linea  no es igual a la longitud del array dos directamente no es un an anagrama
    }
}


//java 
// fun main() {
//     println(isAnagram("amor", "roma"))
// }

// private fun isAnagram(wordOne: String, wordTwo: String): Boolean {
//     if (wordOne.lowercase() == wordTwo.lowercase()) {
//         return false
//     }
//     return wordOne.lowercase().toCharArray().sortedArray().contentEquals(wordTwo.lowercase().toCharArray().sortedArray())
// }

