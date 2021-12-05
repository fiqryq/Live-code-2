/*
                                                                                      
Swap Case                                                                           
Using the JavaScript language, have the function SwapCase(str) take the str         
parameter and swap the case of each character. For example: if str is "Hello World" 
the output should be hELLO wORLD. Let numbers and symbols stay the way they are.            

*/

function swapCase(str) {
  const word = str
    .split("")
    .map((w, i) =>
      w === w.charAt(i).toUpperCase() ? w.toLowerCase() : w.toUpperCase()
    );
  return word.join("");
}

console.log(swapCase("merah darah")); // MERAH DARAH
console.log(swapCase("Hello World")); // hELLO wORLD
console.log(swapCase("Winner WinNer ChIcken DinnER")); // wINNER wINnER cHiCKEN dINNer
