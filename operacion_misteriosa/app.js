// Se evalúa la expresión completa con varias operaciones encadenadas
const result =
  (20 + 10) / 5        // Paso 1: suma dentro del paréntesis y división → 30/5 = 6
  + (3 * 2)            // Paso 2: multiplicación → 6
  - 4 * (20 + 10) / 5  // Paso 3: multiplicación y división → (4*30)/5 = 24, con signo negativo
  + (3 * 2)            // Paso 4: otra multiplicación → 6
  - 4 * (20 + 10) / 5  // Paso 5: repetición del término negativo → -24
  + (3 * 2)            // Paso 6: otra multiplicación → 6
  - 4;                 // Paso 7: resta final → -4

console.log("Resultado de result =", result); // -28

// Se calcula un bloque más simple y luego se multiplica por 3
const parentesis = (20 + 10);          // Paso 1: 20+10 = 30
const division = parentesis / 5;       // Paso 2: 30/5 = 6
const multiplicacion = 3 * 2;          // Paso 3: 3*2 = 6
const suma = division + multiplicacion;// Paso 4: 6+6 = 12
const resta = suma - 4;                // Paso 5: 12-4 = 8
const resultado = resta * 3;           // Paso 6: se multiplica por 3 → 24

console.log("Resultado del bloque base * 3 =", resultado); // 24

// Aquí se construye una fracción con numerador y denominador complejos
const result2 =
(((20 + 10) / 5 + (3 * 2) - 4 * (20 + 10))   // Numerador: (30/5 + 6 - 120) = -108
 / 
 (5 + (3 * 2) - 4 * (20 + 10) / 5 + (3 * 2) - 4)); // Denominador: (5+6-24+6-4) = -11

console.log("Resultado de result2 =", result2); // 108/11 ≈ 9.818

// Se descompone la expresión en pasos claros
const paso1 = 20 + 10;          // Paso 1: suma → 30
const paso2 = paso1 / 5;        // Paso 2: división → 6
const paso3 = 3 * 2;            // Paso 3: multiplicación → 6
const paso4 = paso2 + paso3;    // Paso 4: suma → 12
const paso5 = paso4 - 4;        // Paso 5: resta → 8
const paso6 = paso5 / paso5;    // Paso 6: división de un número por sí mismo → 1

console.log("Resultado de paso6 =", paso6);


// result   = -28   → expresión larga con varios términos
// resultado= 24    → bloque base multiplicado por 3
// result2  = 108/11 ≈ 9.818 → fracción con numerador y denominador
// paso6    = 1     → división de un número por sí mismo