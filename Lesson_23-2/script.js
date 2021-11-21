$(document).ready(function () {
    function colorGen(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = `rgb(${+r}, ${+g}, ${+b})`;
        const borderColor = `rgb(${+g}, ${+b}, ${+r})`;
        $('.circle').css({
            "border": `2px solid ${borderColor}`,
            "box-shadow": `0 0 10px 5px ${color}`,
            "background-color": `${color}`,
        });
      }
      function randomColorPosition(){
        let viewportWidth = $("body").innerWidth();
        let viewportHeight = $("body").innerHeight();
        let top = Math.floor(Math.random() * `${viewportHeight}`);
        let right = Math.floor(Math.random() * `${viewportWidth}`);         
        colorGen();
        $('.circle').animate({            
            "top":`${top}px`,
            "right":`${right}px`,
        },1000, "easeOutExpo");
      }
      setInterval(function(){ 
        randomColorPosition();
        }, 500);

})