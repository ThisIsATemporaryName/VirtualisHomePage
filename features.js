var Pictures = ["url('Wallpaper1.jpg')", "url('Wallpaper2.jpg')", "url('Wallpaper3.jpg')", "url('Wallpaper4.jpg')", "url('Wallpaper5.jpg')"]

function ChangeBg() {
    var rand = Pictures[Math.floor(Math.random() * Pictures.length)];
    document.body.style.transition = "all 3.5s";
    document.body.style.backgroundImage = rand
}

window.setInterval(function(){
    ChangeBg()
  }, 3000);