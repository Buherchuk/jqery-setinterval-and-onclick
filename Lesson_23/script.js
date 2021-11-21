$(function () {
    let clicked = false;
    $('.box').on('click', function () {
        if (this.className == 'box') {
            if (clicked == false) {
                $('.modal-container').css({
                    backgroundColor: '#000000c7',
                    zIndex: 3
                });
                $(this).css({
                    'z-index': '6',
                });
                $(this).animate({
                    'top': '100px',
                    'left': '50%',
                    'width': '250px',
                    'height': '250px',
                    'margin-left': '-125px',
                }, 500);
                clicked = true;
            } else {
                let coef = $(this).parent().index();
                $(this).animate({
                    'top': '66px',
                    'left': '285px',
                    'width': '150px',
                    'height': '150px',
                    'margin-left': `${(coef) * 161}px`,
                    'z-index': '1',
                }, 500);
                $('.modal-container').css({
                    backgroundColor: 'inherit',
                    zIndex: -1,
                });
                clicked = false;
            }
        }
    })
})