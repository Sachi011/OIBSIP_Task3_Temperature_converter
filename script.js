let celcius = document.getElementById("cel");
let fahrenheit = document.getElementById("fah");

celcius.addEventListener('input', function(){
    let c = this.value;
    let f = (c * 9/5) + 32;
    fah.value= f;
});
fahrenheit.addEventListener('input', function(){
    let f= this.value;
    let c=(f - 32) * 5/9;
    cel.value= c;
});
