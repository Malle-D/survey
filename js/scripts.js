var air = Number(500 * 10900)
var hotel = Number(250 * 10900)
var rest = Number(120 * 1227264)

var total = Number (air + hotel + rest)

var summa = Number(prompt("O'z kapitalingizni kirgazing"))



if (summa >= total){
   console.log("Oq yo'l, Alisher!")
   document.getElementById("demo").innerHTML =
   "Alisher! sayoxatingiz xatarsiz o'tsin)";
}
else if(summa < 0){
   console.log("Aka, pulsiz qanday dam olmoqchisiz??")
   document.getElementById("demo").innerHTML =
   "Uzur, qarzga ishlamaymiz!";
}
else if( isNaN(summa) !== false){
   console.log("Alisher, iltimos son kiriting")
   document.getElementById("demo").innerHTML =
   "Iltimos, faqatgina son kiriting!";
}
else if(summa == ""){
   console.log("Alisher, son kiritishni unutdingiz...")
   document.getElementById("demo").innerHTML =
   "Iltimos, o'z kapitalingizni kiriting!";
}
else{
   console.log("Alish, yana biroz ishlashiz kerak ekan(")
   document.getElementById("demo").innerHTML =
   "Alisher... keyengi yil sayoxat qilasizmi nima...";
}