jQuery(document).ready(function () {
    $('.show_pass').click(function () {
        var inputType = $(this).siblings('input').attr('type');
        if (inputType == 'password') {
            $(this).siblings('input').attr('type', 'text');
        } else {
            $(this).siblings('input').attr('type', 'password');
        }
    });
    $(".img1").click(function () {
        $('#pass').attr('type', 'text')
    });
    $(".img2").click(function () {
        $('#pass_new').attr('type', 'text')
    });
    $(".img3").click(function () {
        $('#pass').attr('type', 'text')
    });
    $("#internal").click(function () {
        $('#radio4').css('display', 'flex')
        $('.triangle_down').addClass('rotate_top')
    })
    $("#сonstruction").click(function () {
        $('#radio4').css('display', 'none')
        $('.triangle_down').removeClass('rotate_top')
    })
    $("#work").click(function () {
        $('#radio5').css('display', 'block')
        $('.triangle_down1').addClass('rotate_top')
    })
    $("#Kitchen").click(function () {
        $('#radio5').css('display', 'none')
        $('.triangle_down1').removeClass('rotate_top')
    })
})
jQuery(document).ready(function () {
    $('.flex_app').click(function () {
        $('.active_close').toggleClass('active_none')
    })
})
jQuery(document).ready(function () {
    $('.btn_fnc').click(function () {
        $(this).parent('.wrap_div').children('.table_none').toggleClass('active_none')
        $('.btn_fnc').addClass('actions')
    })
})
jQuery(document).ready(function () {
    $("#work").click(function () {
        $('.radio5').css('display', 'block')
    })
    $("#Kitchen").click(function () {
        $('.radio5').css('display', 'none')
    })
})
jQuery(document).ready(function () {
    $('.arrow_blue').click(function () {
        $(this).toggleClass('rotate_right')
    })
})
jQuery(document).ready(function () {
    $('.arrow_blue_top').click(function () {
        $(this).toggleClass('rotate_top')
    })
})
jQuery(document).ready(function () {
    // $('.flex_app').click(function () {
    //     $('.triangle_down').toggleClass('rotate_right')
    // })
    $('.flex_app').click(function () {
        $('.triangle_down').toggleClass('rotate_top')
    })
    $('.btn_fnc').click(function () {
        $(this).children('.triangle_down').toggleClass('rotate_top')
    })
    $('.white_flex').click(function () {
        $(this).siblings('.wrap_flex').toggleClass('ellipsis_act')
        $(this).children('.triangle_down').toggleClass('rotate_top')
    })
    $('.name_flex').click(function () {
        $(this).parent('.name_div').children(".hidden_box").toggleClass('active_hidden')
        $(this).parent('.name_div').children('.name_flex').children('.triangle_down').toggleClass('rotate_top')
    })
    $('.tab').click(function () {
        var thisIndex = $(this).index();
        $('.tab').removeClass('btn_pass');
        $(this).addClass('btn_pass');
        $('.green_index').hide().eq(thisIndex).show();
    });
    // $("#tel").mask("+8(999) 999-9999");
    // $('select').styler();
    // $('.arrow_blue').click(function () {
    //     $(this).siblings("p").children('.review_text_hidden').slideToggle();
    //     $(this).siblings("p").children('.ellipsis_pass').toggleClass('ellipsis_none')
    // })
})
jQuery(document).ready(function () {
    $('.arrow_blue').click(function () {
        $(this).siblings("p").children('.review_text_hidden').slideToggle(100);
        $(this).siblings("p").children('.ellipsis_pass').toggleClass('ellipsis_none')
    })
})
