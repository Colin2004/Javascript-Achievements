function rollingForStats(){
    
    var d1 = Math.floor(Math.random() * 7) + 1;
    var d2 = Math.floor(Math.random() * 7) + 1;
    var d3 = Math.floor(Math.random() * 7) + 1;
    var d4 = Math.floor(Math.random() * 7) + 1;

    console.log(d1);
    console.log(d2);
    console.log(d3);
    console.log(d4);

    //vanaf nu berekenen

    var numbers = [d1, d2, d3, d4]
    console.log(numbers);

    var laagste = Math.min.apply(Math, numbers);
    console.log("laagste getal:", laagste);

    var HoogsteGetallen = d1 + d2 + d3 + d4 - laagste;
    console.log("hoogste getallen bij elkaar:", HoogsteGetallen)

    document.getElementById("Getal1").innerHTML = d1;
    document.getElementById("Getal2").innerHTML = d2;
    document.getElementById("Getal3").innerHTML = d3;
    document.getElementById("Getal4").innerHTML = d4;
    document.getElementById("laagsteGetal").innerHTML = laagste;
    document.getElementById("HoogsteBijElkaar").innerHTML = HoogsteGetallen;
}