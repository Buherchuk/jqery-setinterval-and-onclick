// $(selector).each(callback(index, domElement))

$(function(){
    // let value;
    // $('input').each(function(index, element){
    //     // console.log(index, element);
    //     $(element).change(function(){
    //         value = $(this).val();
    //         // console.log(value);
    //         $(`.progress:eq(${index}) .progress-bar`).animate({
    //             width: value * 10
    //         }, 4000, 'easeOutBounce');
    //         $(`.progress:eq(${index}) span`).html(`${value} %`);
    //     })
    // })

    // $('li').each(function(ind, elem){
    //     let type;
    //     $(elem).mouseover(function(){
    //         type = $(this).text();
    //         // console.log(type);
    //         $('li').css('list-style-type', type);
    //         if(type==='disc'){
    //             $('li').css('background-color', 'lightgreen');
    //         }
    //         else{
    //             $('li').css('background-color', 'lightgray');
    //         }
    //     })
    // })
    // let r,g,b;
    // $('li').each(function(ind, elem){
    //     $(elem).mouseover(function(){
    //         r = Math.round(Math.random()*255);
    //         g = Math.round(Math.random()*255);
    //         b = Math.round(Math.random()*255);
    //         $('li').eq(ind).animate({
    //             width: '+=100'
    //         }, 500);
    //         $('body').css('background', `rgb(${r}, ${g}, ${b})`);
    //     });
    //     $(elem).mouseout(function(){
    //         $('li').eq(ind).animate({
    //             width: '-=100'
    //         }, 500)
    //     })
    // });

    // $(selector).resize(function(event))

    // $(window).resize(function(){
    //     $('.resize').text(`W: ${window.innerWidth}, H:${window.innerHeight}`)
    // })

    // $(selector).scroll(function(event))

    // $(window).scroll(function(){
    //     $('.scroll').text(`Scroll Y: ${window.scrollY}`)
    // })

    // $(window).trigger('resize')
    // $(window).trigger('scroll')

    // $(selector).on('event', function(){})

    // $(window).on('resize scroll', function(){
    //     $('.resize').text(`W: ${window.innerWidth}, H:${window.innerHeight}`);
    //     $('.scroll').text(`Scroll Y: ${window.scrollY}`);
    // })

    // $(window).on({
    //     resize: function(){
    //         $('.resize').text(`W: ${window.innerWidth}, H:${window.innerHeight}`);
    //     },
    //     scroll: function(){
    //         $('.scroll').text(`Scroll Y: ${window.scrollY}`);
    //     }
    // })

    // $(window).on({
    //     resize: function(){
    //         $('.resize').text(`W: ${window.innerWidth}, H:${window.innerHeight}`);
    //     },
    //     scroll: function(){
    //         $('.scroll').text(`Scroll Y: ${window.scrollY}`);
    //         if(window.scrollY>500){
    //             // $(window).off('scroll');
    //             $(window).off();
    //         }
    //     }
    // })

    // $('.big-block').one('click', function(){
    //     alert('one click')
    // })

    $('.box').on('click', function(){
        let modalDiv = $('.modal');
        $('.modal-container').css({
            backgroundColor: '#000000c7',
            zIndex: 3
        });
        modalDiv.css('top', (window.innerHeight - modalDiv.height())/2);
        modalDiv.css('left', (window.innerWidth - modalDiv.width())/2);
        modalDiv.css('background-color', $(this).css('background-color'));
        modalDiv.slideDown(2000);
    })
    $('.modal').on('click', function(){
        $(this).slideUp(2000, function(){
            $('.modal-container').css({
                backgroundColor: '#fff',
                zIndex: -1
            });
        });
    })

})