// Hanbarger Menu


function switchClass(i) {
    var lis = $('#home-news > div');
    lis.eq(i).removeClass('home_header_on');
    lis.eq(i).removeClass('home_header_out');
    lis.eq(i = ++i % lis.length).addClass('home_header_on');
    lis.eq(i = ++i % lis.length).addClass('home_header_out');
    setTimeout(function () {
        switchClass(i);
    }, 3500);
}

$(window).load(function () {
    switchClass(-1);
});


/**
 * 
 * scroll-in-js
 * 
 */



$(function () {
    $(window).scroll(function () {
        $(".js-scroll").each(function () {
            let imgPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight - window.outerHeight / 8) {
                $(this).addClass("js-scroll-in");
                $(this).removeClass("js-scroll");
            }
        });
    });

    $(window).scroll(function () {
        $(".js-scroll-blur").each(function () {
            let imgPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + 10) {
                $(this).addClass("js-scroll-blur-in");
            }
        });
    });
    $(window).scroll(function () {
        $(".effect").each(function () {
            let imgPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight / 5 + 50) {
                $(this).addClass("effect-in");
            }
        });
    });
});
$(function () {
    $(".pop_").each(function () {
        $(this).removeClass("pop_");
        $(this).addClass("pop_" + Math.ceil(Math.random() * 40));
    });
});
// $(function () {
//     $(".js-scroll-blur").each(function () {
//         let imgPos = $(this).offset().top;
//         let scroll = $(window).scrollTop();
//         let windowHeight = $(window).height();
//         if (scroll > imgPos - windowHeight + 50) {
//             $(this).addClass("js-scroll-blur-in");
//         }
//     });
// });
// $(function () {
//     $(".effect-in").each(function () {
//         let imgPos = $(this).offset().top;
//         let scroll = $(window).scrollTop();
//         let windowHeight = $(window).height();
//         if (scroll > imgPos - windowHeight + windowHeight / 5 + 50) {
//             $(this).addClass("effect-in");
//         }
//     });
// });
