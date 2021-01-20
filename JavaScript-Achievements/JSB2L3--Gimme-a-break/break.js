i = document.getElementById("break_img")//verwijzing naar je <img id='break_img'>
p = document.getElementById("clock")//verwijzing naar je <p id='clock'>

breakStart = new Date('January 13, 2021 11:10:00')
breakEnd = new Date('January 13, 2021 11:10:30')
//stel de begin en eindtijd van je break hier in

e = setInterval(updateTime, 1000) //code zorgt dat de update time functie elke seconde wordt uitgevoerd

function updateTime(){
    var d = new Date()
    p.innerHTML = "Break Time from "+breakStart.toTimeString()+" until " +breakEnd.toTimeString()+"<br/> Time: "+d.getHours() +" : "+ d.getMinutes() +" : "+ d.getSeconds()
    
   //check hier hoe laat het is en of je wel of geen break moet hebben
    if(d.getHours() == breakStart.getHours() && d.getMinutes() == breakStart.getMinutes() && d.getSeconds() == breakStart.getSeconds()){
        breakNow()
    }
         
    if(d.getHours() == breakStart.getHours() && d.getMinutes() == breakEnd.getMinutes() && d.getSeconds() == breakEnd.getSeconds()){
        endBreak()
    }

}
function breakNow(){
    //pas hier de source van je image aan voor als je een break hebt
    i.src = "https://images-na.ssl-images-amazon.com/images/I/51HqmVbMuLL._AC_SY445_.jpg"
   
}
function endBreak(){
   //Pas hier de source van je image aan voor als je aan het werk bent
   i.src = "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/dog-grass-441879.jpg?h=a77125df&itok=oA8hUTqS"
}

