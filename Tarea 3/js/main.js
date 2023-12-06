//const Leer = require('prompt-sync')()
class Ejercicio1{
    multiplo(){
        let num = 0, mul = 0, r = 0
         // 0...0.758.......1*100=75.8=75
        // num= parseInt(Math.random()*10)
        // mul= parseInt(Math.random()*10)
        num = parseInt(document.getElementById("num").value)
        mul = parseInt(document.getElementById("multi").value)
        //console.log(num)
        //console.log(mul.value)
        r = num % mul
        if (r == 0) {
            console.log(num,"es multiplo de ",mul)
            document.getElementById("resp").innerHTML = `${num} es divisible para ${mul}`
        }
        else {
            document.getElementById("resp").innerHTML = `${num} no es divisible para ${mul}`
        } 
    }
    tablaMultiplicar(){
        let vi, vf, tabla, resp, contador;
        vi = 0; vf = 0; tabla = 0; resp = 0;
        // vi = parseInt(Math.random() * 10);
        // vf = parseInt(Math.random() * 100);
        // tabla = parseInt(Math.random() * 20);
        vi = parseInt(document.getElementById("desde").value)
        vf = parseInt(document.getElementById("hasta").value)
        tabla = parseInt(document.getElementById("tabla").value)
        contador = vi;
        document.getElementById("resp").innerHTML=`Tabla del ${tabla}`
        while (contador <= vf) {
            resp = contador * tabla;
            console.log(`${contador} * ${tabla} = ${resp}`)
            document.getElementById("resp").innerHTML += `<br>${contador} * ${tabla} = ${resp} `
            contador= contador+1
            
        }
    }
    expresiones(){
        let a = 0,b = 0, y=0,resp,x
        a = document.getElementById("a").value
        b = document.getElementById("b").value
        a = parseInt(a)
        b = parseInt(b)
        y = 2 * a + b - a % 3
        x = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
        resp = document.getElementById("resp")
        resp.innerHTML="Ejercicios de Expresiones"
        resp.innerHTML += `<br>1).${y} = 2 * ${a} + ${b} - ${a} % 3`
        resp.innerHTML += `<br>2).${x} = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3`
        console.log(`${y} = 2 * ${a} + ${b} - ${a} % 3`)
        //console.log("resp",resp)
        //console.log(`a=${a},b=${b}, resp=${resp.innerHTML}`)
    }
    promedioNotas() {
        let resp, pro, acu = 0, pos, lon,notas 
        //numeros = [10,20,40,50]
        notas = document.getElementById("notas").value
        notas = notas.split(";")
        lon = notas.length
        for (pos = 0; pos < lon; pos++) {
            acu = acu + parseFloat(notas[pos])
        }
        pro = acu / lon
        pro = Math.round(pro * 100) / 100;
        resp = document.getElementById("resp")
        resp.innerHTML = `Promedio de Notas:[${notas}] = ${pro}`
    }
    vocales() {
        let pos = 0, cv = 0, frase, resp
        frase = document.getElementById("frase").value
        frase = frase.toLowerCase()
        while (pos < frase.length) {
            if (frase[pos] == 'a' || frase[pos] == 'e' || frase[pos] == 'i' || frase[pos] == 'o' || frase[pos] == 'u') {
                cv = cv + 1 // cv++
            }
            pos++
        }
        resp = document.getElementById("resp")
        resp.innerHTML = `cantidad vocales: ${cv}`
    }
    multiplicar(num1, num2) {
        let resul = 0
        resul = num1 * num2
        return resul
    }
    multiplicacion() {
        let n1 = 0, n2 = 0, resp, r
        n1 = document.getElementById("n1").value
        n2 = document.getElementById("n2").value
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        r = this.multiplicar(n1, n2)
        resp = document.getElementById("resp")
        resp.innerHTML = `${n1}*${n2}=${r}`

    }
    sumaNumeros() {
    let numero1 = parseFloat(prompt("Ingresa el primer número: "));
    let numero2 = parseFloat(prompt("Ingresa el segundo número: "));
    if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Ingresa números válidos.");
    } else {
    // Calcular la suma
    let suma = numero1 + numero2;
    console.log(`La suma de ${numero1} y ${numero2} es: ${suma}`);
}
    }
        calcularArea() {

            let base = parseFloat(document.getElementById("base").value);
            let altura = parseFloat(document.getElementById("altura").value);

            if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
                document.getElementById("resultado").innerHTML = "Ingresa valores válidos para la base y la altura.";
            } else {

                let area = (base * altura) / 2;
                document.getElementById("resultado").innerHTML = `El área del triángulo con base ${base} y altura ${altura} es: ${area}`;
            }
        }
        determinarParOImpar() {
            
            let numero = parseInt(document.getElementById("numero").value);

           
            if (isNaN(numero)) {
                document.getElementById("resultado").innerHTML = "Ingresa un número válido.";
            } else {
               
                let resultado = (numero % 2 === 0) ? "par" : "impar";

                
                document.getElementById("resultado").innerHTML = `El número ${numero} es ${resultado}.`;
            }
        }
        concatenarPalabras() {
           
            let palabra1 = document.getElementById("palabra1").value;
            let palabra2 = document.getElementById("palabra2").value;
            let resultado = palabra1 + palabra2;

            
            document.getElementById("resultado").innerHTML = `La concatenación de "${palabra1}" y "${palabra2}" es: "${resultado}".`;
        }
        encontrarMayor() {
            // Obtener los valores de los input
            let numero1 = parseFloat(document.getElementById("numero1").value);
            let numero2 = parseFloat(document.getElementById("numero2").value);
            let numero3 = parseFloat(document.getElementById("numero3").value);

            // Verificar si las entradas son válidas
            if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
                document.getElementById("resultado").innerHTML = "Ingresa números válidos.";
            } else {
                // Determinar el número mayor
                let mayor = Math.max(numero1, numero2, numero3);

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `El número mayor es: ${mayor}`;
            }
        }
        verificarElegibilidad() {
            // Obtener el valor del input
            let edad = parseInt(document.getElementById("edad").value);

            // Verificar si la entrada es válida
            if (isNaN(edad) || edad < 0) {
                document.getElementById("resultado").innerHTML = "Ingresa una edad válida.";
            } else {
                // Verificar la elegibilidad para votar
                let mensaje = (edad >= 18) ? "Eres elegible para votar." : "No eres elegible para votar.";

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = mensaje;
            }
        }
        calcularBMI() {
            // Obtener los valores de los input
            let peso = parseFloat(document.getElementById("peso").value);
            let altura = parseFloat(document.getElementById("altura").value);

            // Verificar si las entradas son válidas
            if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
                document.getElementById("resultado").innerHTML = "Ingresa valores válidos para peso y altura.";
            } else {
                // Calcular el BMI
                let bmi = peso / (altura * altura);

                // Determinar la categoría de peso
                let categoria = "";

                if (bmi < 18.5) {
                    categoria = "Bajo peso";
                } else if (bmi < 24.9) {
                    categoria = "Peso saludable";
                } else if (bmi < 29.9) {
                    categoria = "Sobrepeso";
                } else {
                    categoria = "Obesidad";
                }

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `Tu BMI es: ${bmi.toFixed(2)} - Categoría de peso: ${categoria}`;
            }
        }
        determinarPositividad() {
            // Obtener el valor del input
            let numero = parseFloat(document.getElementById("numero").value);

            // Verificar si la entrada es válida
            if (isNaN(numero)) {
                document.getElementById("resultado").innerHTML = "Ingresa un número válido.";
            } else {
                // Determinar si el número es positivo, negativo o cero
                let mensaje = "";

                if (numero > 0) {
                    mensaje = "El número es positivo.";
                } else if (numero < 0) {
                    mensaje = "El número es negativo.";
                } else {
                    mensaje = "El número es cero.";
                }

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = mensaje;
            }
        }
        verificarBisiesto() {
            // Obtener el valor del input
            let year = parseInt(document.getElementById("year").value);

            // Verificar si la entrada es válida
            if (isNaN(year)) {
                document.getElementById("resultado").innerHTML = "Ingresa un año válido.";
            } else {
                // Determinar si el año es bisiesto
                let esBisiesto = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

                // Mostrar el resultado
                if (esBisiesto) {
                    document.getElementById("resultado").innerHTML = `${year} es un año bisiesto.`;
                } else {
                    document.getElementById("resultado").innerHTML = `${year} no es un año bisiesto.`;
                }
            }
        }
        determinarSigno() {
            // Obtener los valores de los input
            let mes = parseInt(document.getElementById("mes").value);
            let dia = parseInt(document.getElementById("dia").value);

            // Verificar si las entradas son válidas
            if (isNaN(mes) || isNaN(dia) || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
                document.getElementById("resultado").innerHTML = "Ingresa fechas de nacimiento válidas.";
            } else {
                // Determinar el signo zodiacal
                let signo = "";

                if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
                    signo = "Aries";
                } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
                    signo = "Tauro";
                } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
                    signo = "Géminis";
                } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
                    signo = "Cáncer";
                } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
                    signo = "Leo";
                } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
                    signo = "Virgo";
                } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
                    signo = "Libra";
                } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
                    signo = "Escorpio";
                } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
                    signo = "Sagitario";
                } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
                    signo = "Capricornio";
                } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
                    signo = "Acuario";
                } else {
                    signo = "Piscis";
                }

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `Tu signo zodiacal es: ${signo}`;
            }
        }
        verificarQuincena() {
            // Obtener el valor del input
            let dia = parseInt(document.getElementById("dia").value);

            // Verificar si la entrada es válida
            if (isNaN(dia) || dia < 1 || dia > 31) {
                document.getElementById("resultado").innerHTML = "Ingresa un número de día válido.";
            } else {
                // Determinar a cuál quincena pertenece el día
                let quincena = (dia <= 15) ? "Primera quincena" : "Segunda quincena";

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `El día ${dia} pertenece a la ${quincena}.`;
            }
        }
        obtenerDiaSemana() {
            // Obtener el valor del input
            let numeroDia = parseInt(document.getElementById("numeroDia").value);

            // Verificar si la entrada es válida
            if (isNaN(numeroDia) || numeroDia < 1 || numeroDia > 7) {
                document.getElementById("resultado").innerHTML = "Ingresa un número del 1 al 7 válido.";
            } else {
                // Utilizar switch para determinar el día de la semana
                let nombreDia = "";
                switch (numeroDia) {
                    case 1:
                        nombreDia = "Domingo";
                        break;
                    case 2:
                        nombreDia = "Lunes";
                        break;
                    case 3:
                        nombreDia = "Martes";
                        break;
                    case 4:
                        nombreDia = "Miércoles";
                        break;
                    case 5:
                        nombreDia = "Jueves";
                        break;
                    case 6:
                        nombreDia = "Viernes";
                        break;
                    case 7:
                        nombreDia = "Sábado";
                        break;
                }

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `El día ${numeroDia} es ${nombreDia}.`;
            }
        }
        verificarIgualdad() {
            // Obtener los valores de los input
            let frase1 = document.getElementById("frase1").value;
            let frase2 = document.getElementById("frase2").value;

            // Verificar si las frases son iguales
            if (frase1 === frase2) {
                document.getElementById("resultado").innerHTML = "Las frases son iguales.";
            } else {
                document.getElementById("resultado").innerHTML = "Las frases son diferentes.";
            }
        }
        calcularPrecioFinal() {
            // Obtener los valores de los input
            let precio = parseFloat(document.getElementById("precio").value);
            let descuento = parseFloat(document.getElementById("descuento").value);

            // Verificar si las entradas son válidas
            if (isNaN(precio) || isNaN(descuento) || precio <= 0 || descuento < 0 || descuento > 100) {
                document.getElementById("resultado").innerHTML = "Ingresa valores válidos.";
            } else {
                // Calcular el precio final después del descuento
                let precioFinal = precio - (precio * (descuento / 100));

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `El precio final después del ${descuento}% de descuento es: ${precioFinal.toFixed(2)}`;
            }
        }
        calcularTotal() {
            // Obtener los valores de los input
            let total = parseFloat(document.getElementById("total").value);
            let impuestos = parseFloat(document.getElementById("impuestos").value);

            // Verificar si las entradas son válidas
            if (isNaN(total) || isNaN(impuestos) || total <= 0 || impuestos < 0 || impuestos > 100) {
                document.getElementById("resultado").innerHTML = "Ingresa valores válidos.";
            } else {
                // Calcular el monto total a pagar, incluyendo impuestos
                let montoTotal = total + (total * (impuestos / 100));

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `El monto total a pagar, incluyendo ${impuestos}% de impuestos, es: ${montoTotal.toFixed(2)}`;
            }
        }
        calcularNuevoSalario() {
            // Obtener los valores de los input
            let salario = parseFloat(document.getElementById("salario").value);
            let aumento = parseFloat(document.getElementById("aumento").value);

            // Verificar si las entradas son válidas
            if (isNaN(salario) || isNaN(aumento) || salario < 0 || aumento < 0) {
                document.getElementById("resultado").innerHTML = "Ingresa valores válidos.";
            } else {
                // Calcular el nuevo salario después del aumento
                let nuevoSalario = salario + (salario * (aumento / 100));

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `Tu nuevo salario después del ${aumento}% de aumento es: ${nuevoSalario.toFixed(2)}`;
            }
        }

        agregarArticulo() {
            let articulos = [];
            let precio = parseFloat(document.getElementById("precio").value);
            let cantidad = parseInt(document.getElementById("cantidad").value);

            if (!isNaN(precio) && !isNaN(cantidad) && precio > 0 && cantidad > 0) {
                articulos.push({ precio, cantidad });
                document.getElementById("precio").value = "";
                document.getElementById("cantidad").value = "";
                mostrarArticulos();
            } else {
                alert("Ingresa valores válidos para el precio y la cantidad.");
            }
        }

        mostrarArticulos() {
            let listaArticulos = document.createElement("ul");

            articulos.forEach(articulo => {
                let item = document.createElement("li");
                item.textContent = `Precio: $${articulo.precio.toFixed(2)}, Cantidad: ${articulo.cantidad}`;
                listaArticulos.appendChild(item);
            });

            document.getElementById("articulos").innerHTML = "";
            document.getElementById("articulos").appendChild(listaArticulos);
        }

        calcularTotal() {
            let total = 0;

            articulos.forEach(articulo => {
                total += articulo.precio * articulo.cantidad;
            });

            if (total > 100) {
                // Aplicar descuento del 10% si el total es mayor a $100
                total *= 0.9;
            }

            document.getElementById("resultado").innerHTML = `El total de la compra es: $${total.toFixed(2)}`;
        }
        calcularImpuesto() {
            // Obtener el valor del salario anual
            let salarioAnual = parseFloat(document.getElementById("salarioAnual").value);

            // Verificar si la entrada es válida
            if (isNaN(salarioAnual) || salarioAnual < 0) {
                document.getElementById("resultado").innerHTML = "Ingresa un salario anual válido.";
            } else {
                // Calcular el impuesto sobre el salario según las tasas
                let impuesto;

                if (salarioAnual <= 10000) {
                    impuesto = salarioAnual * 0.05;
                } else if (salarioAnual <= 20000) {
                    impuesto = 10000 * 0.05 + (salarioAnual - 10000) * 0.1;
                } else {
                    impuesto = 10000 * 0.05 + 10000 * 0.1 + (salarioAnual - 20000) * 0.15;
                }

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `El impuesto sobre el salario anual es: $${impuesto.toFixed(2)}`;
            }
        }
        calcularBono() {
            // Obtener el número de años trabajados
            let aniosTrabajados = parseInt(document.getElementById("aniosTrabajados").value);

            // Verificar si la entrada es válida
            if (isNaN(aniosTrabajados) || aniosTrabajados < 0) {
                document.getElementById("resultado").innerHTML = "Ingresa un número válido de años trabajados.";
            } else {
                // Calcular el bono de antigüedad
                let bono = 0;

                if (aniosTrabajados > 5) {
                    bono = 0.05;  // 5% sobre el salario
                }

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `Tu bono de antigüedad es del ${bono * 100}%.`;
            }
        }
        calcularCostoEnvio() {
            // Obtener el valor de la distancia de envío
            let distancia = parseFloat(document.getElementById("distancia").value);

            // Verificar si la entrada es válida
            if (isNaN(distancia) || distancia < 0) {
                document.getElementById("resultado").innerHTML = "Ingresa una distancia de envío válida.";
            } else {
                // Calcular el costo de envío según las tarifas
                let costo;

                if (distancia < 50) {
                    costo = 10;
                } else {
                    costo = 20;
                }

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `El costo de envío es: $${costo.toFixed(2)}`;
            }
        }
        calcularDescuento() {
            // Obtener el valor del total de compras anuales
            let totalCompras = parseFloat(document.getElementById("totalCompras").value);

            // Verificar si la entrada es válida
            if (isNaN(totalCompras) || totalCompras < 0) {
                document.getElementById("resultado").innerHTML = "Ingresa un total de compras válido.";
            } else {
                // Aplicar descuento del 10% si el total es superior a $500
                let descuento = totalCompras > 500 ? 0.1 : 0;

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `Tu descuento por lealtad es del ${descuento * 100}%.`;
            }
        }
        calcularDescuento() {
            // Obtener el valor de la cantidad de unidades y el precio unitario
            let cantidad = parseInt(document.getElementById("cantidad").value);
            let precioUnitario = parseFloat(document.getElementById("precioUnitario").value);

            // Verificar si las entradas son válidas
            if (isNaN(cantidad) || isNaN(precioUnitario) || cantidad < 0 || precioUnitario < 0) {
                document.getElementById("resultado").innerHTML = "Ingresa valores válidos.";
            } else {
                // Aplicar descuentos por volumen de compra
                let descuento = 0;

                if (cantidad >= 10 && cantidad <= 50) {
                    descuento = 0.05;  // 5% de descuento
                } else if (cantidad > 50 && cantidad <= 100) {
                    descuento = 0.1;   // 10% de descuento
                } else if (cantidad > 100) {
                    descuento = 0.15;  // 15% de descuento
                }

                // Calcular el precio total con descuento
                let precioTotal = cantidad * precioUnitario * (1 - descuento);

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `El precio total con descuento es: $${precioTotal.toFixed(2)}`;
            }
        }
        calcularCostoServicio() {
            // Obtener el valor de las horas de servicio
            let horasServicio = parseFloat(document.getElementById("horasServicio").value);

            // Verificar si la entrada es válida
            if (isNaN(horasServicio) || horasServicio < 0) {
                document.getElementById("resultado").innerHTML = "Ingresa un número válido de horas de servicio.";
            } else {
                // Calcular el costo total de servicio
                let costoTotal;

                if (horasServicio <= 10) {
                    costoTotal = horasServicio * 20;  // $20 por hora
                } else {
                    // Aplicar descuento del 20% si las horas son más de 10
                    costoTotal = horasServicio * 20 * 0.8;
                }

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `El costo total de servicio es: $${costoTotal.toFixed(2)}`;
            }
        }
        contarDigitos() {
            // Obtener la palabra ingresada por el usuario
            let palabra = document.getElementById("palabra").value;

            // Verificar si la entrada es válida
            if (palabra.length === 0) {
                document.getElementById("resultado").innerHTML = "Ingresa una palabra.";
            } else {
                // Inicializar el contador de dígitos
                let contadorDigitos = 0;

                // Utilizar un bucle for para contar los dígitos en la palabra
                for (let i = 0; i < palabra.length; i++) {
                    if (!isNaN(palabra[i])) {
                        // Verificar si el carácter es un dígito
                        contadorDigitos++;
                    }
                }

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `La palabra ingresada tiene ${contadorDigitos} dígitos.`;
            }
        }

        adivinarNumero() {
            const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            // Obtener la elección del usuario
            const eleccionUsuario = parseInt(document.getElementById("adivinaNumero").value);

            // Verificar si la elección es válida
            if (isNaN(eleccionUsuario) || eleccionUsuario < 1 || eleccionUsuario > 100) {
                document.getElementById("resultado").innerHTML = "Ingresa un número válido entre 1 y 100.";
            } else {
                // Verificar si la elección es correcta
                if (eleccionUsuario === numeroAleatorio) {
                    document.getElementById("resultado").innerHTML = "¡Felicidades! Adivinaste el número.";
                } else {
                    document.getElementById("resultado").innerHTML = "Intenta de nuevo. No has adivinado el número.";
                }
            }
        }
        contarLetras() {
            // Obtener la palabra ingresada por el usuario
            let palabra = document.getElementById("palabra").value.toLowerCase(); // Convertir a minúsculas para contar todas las letras

            // Verificar si la entrada es válida
            if (!palabra.match(/^[a-z]+$/i)) {
                document.getElementById("resultado").innerHTML = "Ingresa una palabra válida que contenga solo letras del alfabeto.";
            } else {
                // Inicializar el contador de letras
                let contadorLetras = 0;

                // Utilizar un bucle for para contar las letras del alfabeto en la palabra
                for (let letra = 'a'; letra <= 'z'; letra = String.fromCharCode(letra.charCodeAt(0) + 1)) {
                    if (palabra.includes(letra)) {
                        // Verificar si la letra está presente en la palabra
                        contadorLetras++;
                    }
                }

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `La palabra ingresada tiene ${contadorLetras} letras del alfabeto.`;
            }
        }
        contarCaracteres() {
            // Obtener la palabra ingresada por el usuario
            let palabra = document.getElementById("palabra").value;

            // Contar la cantidad de caracteres en la palabra
            let cantidadCaracteres = palabra.length;

            // Mostrar el resultado
            document.getElementById("resultado").innerHTML = `La palabra ingresada tiene ${cantidadCaracteres} caracteres.`;
        }
        calcularSuma() {
            // Inicializar la variable de suma
            let suma = 0;

            // Utilizar un bucle while para pedir al usuario que ingrese números positivos
            while (true) {
                // Obtener el número ingresado por el usuario
                let numero = parseInt(document.getElementById("numero").value);

                // Verificar si el número es positivo o negativo
                if (numero < 0) {
                    break; // Salir del bucle si se ingresa un número negativo
                }

                // Sumar el número a la suma total
                suma += numero;

                // Limpiar el campo de entrada para el próximo número
                document.getElementById("numero").value = '';
            }

            // Mostrar el resultado
            document.getElementById("resultado").innerHTML = `La suma de los números positivos ingresados es: ${suma}`;
        }
        iniciarCuentaRegresiva() {
            // Obtener el número ingresado por el usuario
            let numero = parseInt(document.getElementById("numero").value);

            // Verificar si el número es un entero positivo
            if (isNaN(numero) || numero <= 0) {
                document.getElementById("resultado").innerHTML = "Ingresa un número entero positivo válido.";
            } else {
                // Inicializar la variable para la cuenta regresiva
                let cuentaRegresiva = '';

                // Utilizar un bucle while para mostrar la cuenta regresiva desde el número ingresado hasta 1
                while (numero >= 1) {
                    cuentaRegresiva += numero + ' ';
                    numero--;
                }

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `Cuenta regresiva: ${cuentaRegresiva}`;
            }
        }
        

        buscarElemento() {
            // Obtener el número ingresado por el usuario
            const numeros = [5, 10, 15, 20, 25];
            const numeroIngresado = parseInt(document.getElementById("numero").value);

            // Verificar si el número está presente en el arreglo
            const estaPresente = numeros.includes(numeroIngresado);

            // Mostrar el resultado
            if (estaPresente) {
                document.getElementById("resultado").innerHTML = `El número ${numeroIngresado} está presente en el arreglo.`;
            } else {
                document.getElementById("resultado").innerHTML = `El número ${numeroIngresado} no está presente en el arreglo.`;
            }
        }
        

        buscarIndice() {
            // Obtener el valor ingresado por el usuario
            const arreglo = [5, 10, 15, 10, 20, 25];
            const valorIngresado = parseInt(document.getElementById("valor").value);

            // Encontrar los índices del valor en el arreglo
            const indices = arreglo.reduce((acumulador, elemento, index) => {
                if (elemento === valorIngresado) {
                    acumulador.push(index);
                }
                return acumulador;
            }, []);

            // Mostrar el resultado
            if (indices.length > 0) {
                document.getElementById("resultado").innerHTML = `El valor ${valorIngresado} aparece en el arreglo en el/los índice(s): ${indices.join(', ')}.`;
            } else {
                document.getElementById("resultado").innerHTML = `El valor ${valorIngresado} no aparece en el arreglo.`;
            }
        }
}
let ope = new Ejercicio1() //crea una variable igual que la clase
//ope.multiplo()
//ope.tablaMultiplicar()

