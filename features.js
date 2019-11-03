var Pictures = ["url('Wallpaper1.jpg')", "url('Wallpaper2.jpg')", "url('Wallpaper3.jpg')", "url('Wallpaper4.jpg')", "url('Wallpaper5.jpg')", "url('Wallpaper6.jpg')", "url('Wallpaper7.jpg')", "url('Wallpaper8.jpg')", "url('Wallpaper9.jpg')", "url('Wallpaper10.jpg')", "url('Wallpaper11.jpg')", "url('Wallpaper12.jpg')"]

function ChangeBg() {
    var rand = Pictures[Math.floor(Math.random() * Pictures.length)];
    document.body.style.transition = "all 3s";
    document.body.style.backgroundImage = rand
}

window.setInterval(function(){
    ChangeBg()
  }, 3500);