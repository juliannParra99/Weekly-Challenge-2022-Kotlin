// package com.mouredev.weeklychallenge2022

// import java.math.BigInteger

/*
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Fecha publicación enunciado: 10/01/22
 * Fecha publicación resolución: 17/01/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */


//necesito dos numeros para hacer el fibonacci, y una variable ams que vaya sumando ya ctualziando esos dos nuemeros

// while (fibo < 50) {
    //     console.log(num0);
    //     fibo = num0 + num1;
    //     num0 = num1;
    //     num1 = fibo;//el numero 2 siempre va ser el numero mas alto conseguido
    //     console.log("el numero de fibo es",fibo)
    
    // }
let num0= 0 ;
let num1 = 1;

for (let i = 0; i < 50; i++) {
    console.log(num0)
    let fibo = num0 +num1; //el proximo numero a msotrarse es la suma de los dos anteriores
    num0 = num1;
    num1 = fibo;     
        
}



















// fun main() {

//     var n0: Long = 0
//     var n1: Long = 1

//     (1..50).forEach { _ ->

//         println(n0)

//         val fib = n0 + n1
//         n0 = n1
//         n1 = fib
//     }
// }