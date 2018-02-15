var gallery = ["images/photo1.jpg","images/photo2.jpg","images/photo3.jpg","images/photo4.jpg","images/photo5.jpg","images/photo6.jpg","images/photo7.jpg","images/photo8.jpg","images/photo9.jpg"]
function mine(){
	for(i=0; i<gallery.length; i++){
	    var divs = document.createElement('div');
	    var divimg = document.createElement('img');
	    divimg.setAttribute("src", gallery[i]);
	    divs.classList.add('phts');
	    var a = "mycat";
	    var b = a+i;
	    divs.classList.add(b);
        divs.append(divimg);
        $(".photos").append(divs)
	}
}
mine();
$(function(){
  $(".all").click(function(){
   	$(".mycat0").fadeIn()
   	$(".mycat1").fadeIn()
   	$(".mycat2").fadeIn()
   	$(".mycat3").fadeIn()
   	$(".mycat4").fadeIn()
   	$(".mycat5").fadeIn()
   	$(".mycat6").fadeIn()
   	$(".mycat7").fadeIn()
   	$(".mycat8").fadeIn()
  })

  $(".cities").click(function(){
   	$(".mycat0").fadeIn()
   	$(".mycat1").fadeOut()
   	$(".mycat2").fadeIn()
   	$(".mycat3").fadeOut()
   	$(".mycat4").fadeOut()
   	$(".mycat5").fadeOut()
   	$(".mycat6").fadeIn()
   	$(".mycat7").fadeOut()
   	$(".mycat8").fadeOut()
  })

  $(".nature").click(function(){
   	$(".mycat0").fadeOut()
   	$(".mycat1").fadeIn()
   	$(".mycat2").fadeOut()
   	$(".mycat3").fadeOut()
   	$(".mycat4").fadeOut()
   	$(".mycat5").fadeIn()
   	$(".mycat6").fadeOut()
   	$(".mycat7").fadeIn()
   	$(".mycat8").fadeOut()
  })

  $(".indus").click(function(){
   	$(".mycat0").fadeOut()
   	$(".mycat1").fadeOut()
   	$(".mycat2").fadeOut()
   	$(".mycat3").fadeIn()
   	$(".mycat4").fadeIn()
   	$(".mycat5").fadeOut()
   	$(".mycat6").fadeOut()
   	$(".mycat7").fadeOut()
   	$(".mycat8").fadeIn()
  })

  $(".dayli").click(function(){
   	$(".mycat0").fadeOut()
   	$(".mycat1").fadeOut()
   	$(".mycat2").fadeIn()
   	$(".mycat3").fadeOut()
   	$(".mycat4").fadeIn()
   	$(".mycat5").fadeIn()
   	$(".mycat6").fadeOut()
   	$(".mycat7").fadeIn()
   	$(".mycat8").fadeOut()
  })

  $(".night").click(function(){
  	$(".mycat0").fadeIn()
   	$(".mycat1").fadeIn()
   	$(".mycat2").fadeOut()
   	$(".mycat3").fadeOut()
   	$(".mycat4").fadeOut()
   	$(".mycat5").fadeOut()
   	$(".mycat6").fadeIn()
   	$(".mycat7").fadeOut()
   	$(".mycat8").fadeOut()
  })

})