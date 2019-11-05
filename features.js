var Pictures = ["url('Wallpaper1.jpg')", "url('Wallpaper2.jpg')", "url('Wallpaper3.jpg')", "url('Wallpaper4.jpg')", "url('Wallpaper5.jpg')", "url('Wallpaper6.jpg')", "url('Wallpaper9.jpg')", "url('Wallpaper10.jpg')", "url('Wallpaper11.jpg')", "url('Wallpaper12.jpg')", "url('Wallpaper13.jpg')", "url('Wallpaper14.jpg')", "url('Wallpaper15.jpg')"]
var Button = document.getElementById('Close');
var blur = document.getElementById('blur');
var Subscription = document.getElementById('Box');

function removeBox() {
    var elem = document.getElementById('Box');
    elem.parentNode.removeChild(elem);
    document.getElementById("blur").style.transition= "filter 0.5s";
    document.getElementById("blur").style.filter="none";
   }

function ChangeBg() {
    var rand = Pictures[Math.floor(Math.random() * Pictures.length)];
    document.body.style.transition = "all 3s";
    document.body.style.backgroundImage = rand;
}

window.setInterval(function(){
    ChangeBg()
  }, 3500);

