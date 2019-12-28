setInterval(function(){
var currentDateTime = new Date();
var angleofhourhand=(((currentDateTime.getHours() - 3)*30) + (currentDateTime.getMinutes()*(0.5)))+'deg';
var hourhand = document.getElementById('hour-hand');
hourhand.style.transform = "translate(100px,97.5px) rotate("+angleofhourhand+")";

var secondhand = document.getElementById('second-hand');
var angleofsecondhand = (currentDateTime.getSeconds() -15)*6  +'deg';
secondhand.style.transform = "translate(100px, 87.5px) rotate("+angleofsecondhand+")";

var minutehand = document.getElementById('minute-hand');
var angleofminutehand = (currentDateTime.getMinutes() -15)*6 +'deg';
minutehand.style.transform = "translate(100px, 92.5px) rotate("+angleofminutehand+")";

},1000);
