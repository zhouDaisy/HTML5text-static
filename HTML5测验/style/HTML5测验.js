   function init(){
    startTime();
    stopTime();
   }
   function startTime(){
    var today=new Date();
    var y=today.getFullYear();
    var m=today.getMonth();
    var d=today.getDate();
    var h=today.getHours();
    var mi=today.getMinutes();
    var s=today.getSeconds();
    var timevalue="<b>"+"开始时间："+"</b>"+y+"-"+(m+1)+"-"+d+"&nbsp";
    timevalue+=((h>12)?h-12:h)
    timevalue+=((mi<10)?":0":":")+mi;
    timevalue+=((s<10)?":0":":")+s;
    document.getElementById("starttime").innerHTML=timevalue;
   
}
function stopTime(){ 
    var today=new Date();
    var y=today.getFullYear();
    var m=today.getMonth();
    var d=today.getDate();
    var h=today.getHours();
    var mi=today.getMinutes();
    var s=today.getSeconds();
    var timevalue="<b>"+"结束时间："+"</b>"+y+"-"+(m+1)+"-"+d+"&nbsp";
    timevalue+=((h>12)?h-12:h)
    timevalue+=((mi<10)?":0":":")+mi;
    timevalue+=((s<10)?":0":":")+s;
    document.getElementById("stoptime").innerHTML=timevalue;
    t=setTimeout("stopTime()",1000);
    

}
