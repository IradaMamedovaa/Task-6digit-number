for (let i = 100000; i < 166667; i++) { //burada 100 000-den 166 667-e qeder olan ededler yoxlanilir, cunki 166 667-i 6-a vurduqda alinan eded 6 reqemli deyil.
  const original = numberToArray(i); //ededin ozunu yaratdigim numberToArray funksiyasi ile arraye cevirirem.
  const arrayOfResults=[i*2, i*3, i*4, i*5, i*6]; //ededi 2,3,4,5,6-a vurduqda alinan hasilleri arraye toplayiram.
  if(checkDigits(original, arrayOfResults) === true) console.log(i, arrayOfResults); //hasillerin reqemleri ededin reqemleri ile uygunluq teskil etdiyi halda ededi console a cixariram.
}

//bu funksiya komekliyi ile biz verilen eded(ler)i arraye cevirirem.
function numberToArray(num) {
  return Array.from(String(num), (num) => Number(num)); //ededi evvelce stringe cevirib, arraye cevirdikden sonra arrayin elementlerini yeniden numbere cevirirem.Asagidaki sekilde de yazmaq olar:
  let str = String(num);
  const arr = str.split("");
  return arr.map(n => Number(n))
}

//bu funksiyada aldigim hasilleri ededin ozu ile muqayise edirem.
function checkDigits(original, arrayOfResults){
    return arrayOfResults.every((number)=>{ //every methodu ile *butun* hasillerin reqemlerinin beraber olub olmadigini yoxlayiram.
       let digits = numberToArray(number); //ozumun yaratdigim numberToArray funksiyasi ile hasili arraye cevirirem.
       return digits.every((digit)=> original.includes(digit)); //hasilde olan reqemlerin hamisinin ededde olub olmadigini yoxlayiram.
   })
}