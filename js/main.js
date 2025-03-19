function palindromo(palabra) {
    let palabraLimpia = palabra.toLowerCase();
    let invertida = palabraLimpia.split("").reverse().join("");
    return palabraLimpia === invertida;
  }
