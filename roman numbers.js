//funcion que permite convertir numeros naturales menores a 4000 en su equivalente romano
const decimalToRoman = (n) => {
  const numbersToRomans = [[1, "I"], [5, "V"], [10,"X"], [50,"L"], [100,"C"], [500,"D"],[1000,"M"]];
  let i=0;
  let divi=0;
  let aux=0;
  let currentDigitInt = 0;
  let sal='';
  const large = numbersToRomans.length;
  while ( i < large){
    currentDigitInt = numbersToRomans[large-i-1][0];
    currentDigitRoman = numbersToRomans[large-i-1][1];
    divi = Math.floor(n / currentDigitInt);
    if (0 < divi && divi <= 3 ) {
      aux=0;
      while (aux < divi) {
        sal+= currentDigitRoman;
        aux++;
      }
    } else if (divi === 4) {
      sal+= currentDigitRoman;
      sal+= numbersToRomans[large-i][1];
    } else if  (divi === 5) {
      sal+= numbersToRomans[large-i][1];
    } else if (5 < divi && divi <= 8 ) {
      aux=0;
      sal+= numbersToRomans[large-i][1];
      while (aux < divi-5) {
        sal+= currentDigitRoman;
        aux++;
      }
    } else if (divi === 9) {
      sal+= numbersToRomans[large-i+1][1];
      sal+= currentDigitRoman;
    }
    n = n % currentDigitInt;
    i+=2;
  }
  console.log(sal)
}
decimalToRoman(11)