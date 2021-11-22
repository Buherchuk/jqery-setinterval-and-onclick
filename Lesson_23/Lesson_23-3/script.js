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
        let top = Math.floor(Math.random() * `${viewportHeight-100}`);
        let right = Math.floor(Math.random() * `${viewportWidth-100}`);    
        let width = Math.floor(Math.random() * 500); 
        let height = Math.floor(Math.random() * 500); 
        colorGen();
        $('.circle').animate({            
            "top":`${top}px`,
            "right":`${right}px`,
            "width": `${width}px`,
            "height": `${height}px`,
        },1000, "easeOutExpo");
      }
      $('.circle').click(function(){
        randomColorPosition();
      });


})