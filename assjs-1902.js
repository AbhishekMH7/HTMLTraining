function btn(){
    var un= document.getElementById("un1");
    const Da=document.getElementById("Da1");
    const H=document.getElementById("H1");
    const I=document.getElementById("I1");
    document.getElementById("initialdisplay").style.display = "none";
    document.getElementById("postdisplay").style.display = "block";
     
    var Namedisp=document.getElementById("namedisp");
    Namedisp.innerHTML=un.value;
    var Dailyactivitiesdisp=document.getElementById("dailyactivitiesdisp");
    Dailyactivitiesdisp.innerHTML=Da.value;
    var Hobbiesdisp=document.getElementById("hobbiesdisp");
    Hobbiesdisp.innerHTML=H.value;
    var Interestsdisp=document.getElementById("interestsdisp");
    Interestsdisp.innerHTML=I.value;

}