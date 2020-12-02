//via het DOM document object model wordt er een link gemaakt naar elementen uit je HTML file
i = document.getElementById("break_img")//verwijzing naar je <img id='break_img'>
h = document.getElementById("work_img")
p = document.getElementById("clock")//verwijzing naar je <p id='clock'>

breakStart = new Date("December 2, 2020 12:04:00")
breakEnd = new Date("December 2, 2020 12:05:00")
//stel de begin en eindtijd van je break hier in

e = setInterval(updateTime,1000) //code zorgt dat de update time functie elke seconde wordt uitgevoerd

function updateTime(){
    d = new Date()
     p.innerHTML = "Break Time from "+breakStart.toTimeString()+" until " +breakEnd.toTimeString()+"<br/> Time: "+d.getHours() +" : "+ d.getMinutes() +" : "+ d.getSeconds()
   
   //check hier hoe laat het is en of je wel of geen break moet hebben
}
function breakNow(){
    //pas hier de source van je image aan voor als je een break hebt
    i.src = "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/dog-grass-441879.jpg?h=a77125df&itok=oA8hUTqS"
   
}
function endBreak(){
   //Pas hier de source van je image aan voor als je aan het werk bent
   i.src = "https://www.google.com/imgres?imgurl=https://www.jobs.ie/job-talk/wp-content/uploads/Late-to-work-640x480.jpg&imgrefurl=https://www.jobs.ie/job-talk/almost-half-of-workers-resent-colleagues-who-are-consistently-late/&tbnid=3GV6SKqdJ3YqxM&vet=12ahUKEwjw2_XSkK_tAhXqMewKHY88C3UQMygFegUIARCyAQ..i&docid=5WBLvcUqxWqvnM&w=640&h=480&q=work image&ved=2ahUKEwjw2_XSkK_tAhXqMewKHY88C3UQMygFegUIARCyAQ"
}
