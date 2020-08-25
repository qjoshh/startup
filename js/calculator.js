var x = $("#input_0").val();
// square root

$("#1").click(function(){
var y = $("#input_0").val()

var a = Math.sqrt(y)

$("#input_1").val(a) 

})
//square

$("#2").click(function(){
var y = $("#input_0").val()

var a = y*y

$("#input_1").val(a) 

})

//sine

$("#3").click(function(){
var y = $("#input_0").val()

var a = Math.sin(y)

$("#input_1").val(a) 

})

//cosine

$("#4").click(function(){
var y = $("#input_0").val()

var a = Math.cos(y)

$("#input_1").val(a) 

})

//tangent

$("#5").click(function(){
var y = $("#input_0").val()

var a = Math.tan(y)

$("#input_1").val(a) 

})

//cube

$("#6").click(function(){
var y = $("#input_0").val()

var a = y*y*y

$("#input_1").val(a) 

})

//roundup

$("#7").click(function(){
var y = $("#input_0").val()

var a = Math.round(y)

$("#input_1").val(a) 

})

//logarithm

$("#8").click(function(){
var y = $("#input_0").val()

var a = Math.log(y)

$("#input_1").val(a) 

})

//exponential

$("#9").click(function(){
var y = $("#input_0").val()

var a = Math.exp(y)

$("#input_1").val(a) 

})

//pi

$("#10").click(function(){
var y = $("#input_0").val()

var a = Math.PI

$("#input_1").val(a) 

})

//Force

$("#11").click(function(){
var y = $("#input_0").val()

$("#input_1").val("F = Ma,  F =>force  M =>mass  a =>acceleration") 

})

//speed

$("#12").click(function(){
var y = $("#input_0").val()

$("#input_1").val("S = d / t,  s =>speed d =>distance t =>time") 

})

//impulse

$("#13").click(function(){
var y = $("#input_0").val()

$("#input_1").val("I = F * t,  I =>impulse  F =>force  t =>time") 

})

//energy

$("#14").click(function(){
var y = $("#input_0").val()

$("#input_1").val("|-E = 1/2 Mv^2,  E =>energy M =>mass v =>velocity-|" + "------------" +"|-E = Mgh,  E =>energy M => mass g =>AccelerationDueToGravity h =>height-|") 

})

//work

$("#15").click(function(){
var y = $("#input_0").val()

$("#input_1").val("|-W = Mgh, W=> work m=> mass g=> Acceleration Due To Gravity h=> height-|" + "--------------" + "|-W = F * s, W=> work F=> force s=> distance-|") 

})

//constant

$("#16").click(function(){
	$(".first").toggleClass("cons")
})

//G

$("#18").click(function(){

$("#input_1").val("G also known as universal gravitational constant ==> 6.67E-11 Nm^2Kg^-2") 

})

//g

$("#19").click(function(){

$("#input_1").val("g, acceleration due to gravity ==> 9.8065 ms^-2") 

})

//planck's constant

$("#20").click(function(){

$("#input_1").val("h, plack's constant ==> 6.6E-34 Js") 

})

//E

$("#21").click(function(){
var y = Math.E

$("#input_1").val(y) 

})

//speed of light

$("#22").click(function(){

$("#input_1").val("c, the speed of light ==> 299792458 ms^-1 approximated to 3E8") 

})

//electron volts

$("#23").click(function(){

$("#input_1").val("eV, electronvolts ==> 1.6E-19 J") 

})

//angstrom

$("#24").click(function(){

$("#input_1").val("A, angstrom the most basic unit of wavelength ==> 10E-10 m") 

})

//mass earth

$("#25").click(function(){

$("#input_1").val("Mass of the Earth ==> 5.98E24 Kg") 

})

//mass sun

$("#26").click(function(){

$("#input_1").val("Mass of the Sun ==> 1.99E30 Kg") 

})

//mass proton

$("#27").click(function(){

$("#input_1").val("Mass of Proton ==> 1.67E-27 Kg") 

})

//mass electron

$("#28").click(function(){

$("#input_1").val("Mass of Electron ==> 9E-31 Kg") 

})

//radius earth

$("#45").click(function(){

$("#input_1").val("Radius of the Earth ==> 6,378 Km") 

})

//radius sun

$("#46").click(function(){

$("#input_1").val("Radius of the Sun ==> 6.957E5 Km") 

})

//radius moon

$("#47").click(function(){

$("#input_1").val("Radius of the Moon (lunar) ==>  1738.1 Km") 

})




//===================================clear=========================================
$("#17a").click(function(){
	var y = $("#input_0").val("")
	$("#input_1").val("")
})




//===========================================coversion======================================

$("#17").click(function(){
	$(".sec").toggleClass("conv")
})

//kel-cel

$("#29").click(function(){
var y = $("#input_0").val()
var z = (y - 273)
$("#input_1").val(z + "cel")
})

//cel-kel

$("#30").click(function(){
var y = $("#input_0").val()
var z = (y - 0 + 273)
$("#input_1").val(z + "kel")
})

//cel-far

$("#31").click(function(){
var y = $("#input_0").val()
var z = (y * 1.8 + 32)
$("#input_1").val(z + "far")
})

//far-cel

$("#32").click(function(){
var y = $("#input_0").val()
var z = ((y - 32) / 1.8)
$("#input_1").val(z + "cel")
})

//km-ml

$("#33").click(function(){
var y = $("#input_0").val()
var z = (y * 1.609)
$("#input_1").val(z + "miles")
})

//km-ml

$("#34").click(function(){
var y = $("#input_0").val()
var z = (y / 1.609)
$("#input_1").val(z + "Km")
})

//cm-in

$("#35").click(function(){
var y = $("#input_0").val()
var z = (y / 2.54)
$("#input_1").val(z + "In")
})

//in-cm

$("#36").click(function(){
var y = $("#input_0").val()
var z = (y * 2.54)
$("#input_1").val(z + "cm")
})

//yard - meters

$("#37").click(function(){
var y = $("#input_0").val()
var z = (y * 0.194)
$("#input_1").val(z + "m")
})

//meters - yards

$("#38").click(function(){
var y = $("#input_0").val()
var z = (y / 0.194)
$("#input_1").val(z + "yrds")
})

//feet - meters

$("#39").click(function(){
var y = $("#input_0").val()
var z = (y / 3.28)
$("#input_1").val(z + "m")
})

//meters - feet

$("#40").click(function(){
var y = $("#input_0").val()
var z = (y * 3.28)
$("#input_1").val(z + "ft")
})

//pounds - newtons

$("#41").click(function(){
var y = $("#input_0").val()
var z = (y / 0.225)
$("#input_1").val(z + "N")
})

//newtons - pounds

$("#42").click(function(){
var y = $("#input_0").val()
var z = (y * 0.225)
$("#input_1").val(z + "lb")
})

//kel-far

$("#44").click(function(){
var y = $("#input_0").val()
var z = ((y - 0 + 273) * 1.8 + 32)
$("#input_1").val(z + "far")
})

//far-kel

$("#43").click(function(){
var y = $("#input_0").val()
var z = (((y - 32) / 1.8) - 273)
$("#input_1").val(z + "kel")
})











//====================================================tooltip=========================================
$(".hover").hover(function(){
	$(".tool").toggleClass("hover2")
})

$(".hovera").hover(function(){
	$(".tool").toggleClass("hover2a")
})
$(".hoverb").hover(function(){
	$(".tool").toggleClass("hover2b")
})
$(".hoverc").hover(function(){
	$(".tool").toggleClass("hover2c")
})
$(".hoverd").hover(function(){
	$(".tool").toggleClass("hover2d")
})
$(".hoverx").hover(function(){
	$(".tool").toggleClass("hover2e")
})
$(".hoverxa").hover(function(){
	$(".tool").toggleClass("hover2f")
})
$(".hoverxb").hover(function(){
	$(".tool").toggleClass("hover2g")
})
$(".hoverxc").hover(function(){
	$(".tool").toggleClass("hover2h")
})
$(".hovere").hover(function(){
	$(".tool").toggleClass("hover2i")
})
$(".hoverf").hover(function(){
	$(".tool").toggleClass("hover2j")
})
$(".hoverg").hover(function(){
	$(".tool").toggleClass("hover2k")
})
$(".hoverh").hover(function(){
	$(".tool").toggleClass("hover2l")
})
$(".hoveri").hover(function(){
	$(".tool").toggleClass("hover2m")
})
$(".hoverya").hover(function(){
	$(".tool").toggleClass("hover2n")
})
$(".hoveryb").hover(function(){
	$(".tool").toggleClass("hover2o")
})
//end