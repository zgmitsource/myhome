$(function(){

$(window).scroll(function(){

 let sTop=Math.floor( $("body,html").scrollTop());

 console.log(sTop);
 
if(sTop>500){

$("#box").css({"display":"block"});

}else{

    $("#box").css({"display":""});

}




})


 $("#box").on('click',function(){

$("body,html").animate({ 

    scrollTop:0
},5000)
 


 })









})