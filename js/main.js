$(document).ready(function() {

    $('.header_carousel .item').each(function(index, el) {
        $(this).hover(function() {
            $(this).addClass('active');
        }, function() {
            $(this).removeClass('active');
        });
    });

    $('.hdr-3-items .item').each(function(index, el) {
        $(this).hover(function() {
            $(this).addClass('active');
        }, function() {
            $(this).removeClass('active');
        });
    });

    $('.ipad-slider-c2').slick({
        dots: false,
        nav: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 1
    });

    $('.ca2-prod-slider').owlCarousel({
        autoplay: true,
        autoplayHoverPause: false,
        loop: true,
        items: 4,
        margin: 30,
        center: true,
        smartSpeed: 600,
        dots: false,
        nav: false,
        responsive: {
            480: {
                items: 2,
                stagePadding: 70
            },
            1100: {
                items: 2,
                stagePadding: 200
            },
            1200: {
                items: 2,
                stagePadding: 200,
            },
            1300: {
                items: 3,
                stagePadding: 70
            },
            1400: {
                items: 3,
                stagePadding: 100
            },
            1500: {
                margin: 100
            },
            1700: {
                margin: 50
            },
            1800: {
                margin: 0,
                stagePadding: 70
            },
        }
    });

    $('.ca2-fast-prod-slider').owlCarousel({
        autoplay: true,
        autoplayHoverPause: false,
        loop: true,
        items: 4,
        margin: 30,
        center: true,
        smartSpeed: 600,
        dots: false,
        nav: false,
        responsive: {
            480: {
                items: 2,
                stagePadding: 70
            },
            1100: {
                items: 2,
                stagePadding: 200
            },
            1200: {
                items: 2,
                stagePadding: 200,
            },
            1300: {
                items: 3,
                stagePadding: 70
            },
            1400: {
                items: 3,
                stagePadding: 100
            },
            1500: {
                margin: 100
            },
            1700: {
                margin: 50
            },
            1800: {
                margin: 0,
                stagePadding: 70
            },
        }
    });

    // $('.advantages_box').hover(function() {
    //  $(this).find('.description').slideDown(400, 'easeOutQuad');
    // }, function() {
    //  $(this).find('.description').slideUp(400, 'easeOutQuad');
    // });;

$(function() {
    $('ul.tabs').each(function() {
        $(this).find('li').each(function(i) {
            $(this).click(function() {
                $(this).addClass('active').siblings().removeClass('active')
                .parents('.tabs').siblings('.tabs_content').find('.tabs_content_box').eq(i).fadeIn(150).siblings('.tabs_content_box').hide();
            });
        });
    });
    $('ul.tabs2').each(function() {
        $(this).find('li').each(function(i) {
            $(this).click(function() {
                $(this).addClass('active').siblings().removeClass('active')
                .parents('.tabs2').siblings('.tabs_content').find('.tabs_content_box').eq(i).fadeIn(150).siblings('.tabs_content_box').hide();
            });
        });
    });
});

$('.ipad-section').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    items: 4,
    margin: 170,
    // stagePadding: 63,
    center: true,
    smartSpeed: 600,
    dots: false,
    responsive: {
        480: {
            stagePadding: 100
        },
        1100: {
            stagePadding: -70
        },
        1200: {
            stagePadding: -50
        },
        1300: {
            stagePadding: -40
        },
        1400: {
            // stagePadding: 220
            stagePadding: -30
        },
        1500: {
            // stagePadding: 270
        },
        1600: {
            margin: 100
        },
        1700: {
            margin: 50
        },
        1800: {
            margin: 50
        },
        1900: {
            margin: 0
        }
    }
    });

$('.header_carousel').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    items: 3,
    margin: 30,
    center: true,
    smartSpeed: 600,
    dots: false,
    nav: false,
    responsive: {
        1024: {
            stagePadding: 10
        },
        1080: {
            stagePadding: 110
        },
        1200: {
            stagePadding: 150
        },
        1300: {
            stagePadding: 190
        },
        1400: {
            stagePadding: 220
        },
        1500: {
            stagePadding: 270
        },
        1600: {
            items: 4,
            stagePadding: 170
        },
        1700: {
            items: 4,
            stagePadding: 220
        },
        1800: {
            items: 5,
            stagePadding: 100
        },
        1900: {
            items: 5,
            stagePadding: 200
        },
        2000: {
            items: 5,
            stagePadding: 250
        },
        2100: {
            items: 5,
            stagePadding: 300
        },
        2200: {
            items: 6,
            stagePadding: 100
        },
        2300: {
            items: 6,
            stagePadding: 100
        },
        2400: {
            items: 7,
            stagePadding: 100
        }
    }
});
$('.examples_slider').owlCarousel({
    loop: true,
    items: 1,
    margin: 200,
    stagePadding: 0,
    smartSpeed: 600,
    dots: true,
    nav: false,
    responsive: {
        1000: {
            nav: false,
            stagePadding: 0
        },
        1100: {
            nav: false,
            stagePadding: 50
        },
        1200: {
            nav: false,
            stagePadding: 70
        },
        1250: {
            nav: false,
            stagePadding: 80
        },
        1300: {
            nav: true,
            stagePadding: 100
        },
        1400: {
            nav: true,
            stagePadding: 150
        },
        1470: {
            nav: true,
            stagePadding: 200
        },
        1530: {
            nav: true,
            stagePadding: 250,
            margin: 150
        },
        1600: {
            nav: true,
            stagePadding: 280,
            margin: 150
        },
        1700: {
            nav: true,
            stagePadding: 330,
            margin: 150
        },
        1800: {
            nav: true,
            stagePadding: 400,
            margin: 200
        },
        2000: {
            nav: true,
            stagePadding: 500,
            margin: 250
        },
        2200: {
            nav: true,
            stagePadding: 600,
            margin: 300
        },
        2400: {
            nav: true,
            stagePadding: 700,
            margin: 400
        }
    }
});
$('.info_slider').owlCarousel({
    loop: true,
    items: 1,
    margin: 200,
    stagePadding: 0,
    smartSpeed: 600,
    dotsContainer: '#customDots',
    dots: true,
    nav: true,
    responsive: {
        480: {
            nav: false
        },
        1024: {
            nav: false
        },
        1400: {
            nav: true
        }
    }
});
$(function() {
    var owlF = $('.famous_carousel');
    owlF.owlCarousel({
        items: 1,
        margin: 300,
        dots: false,
        nav: false,
        loop: true,
        smartSpeed: 600
    });

    $('.famous_carousel_nav button').each(function(index) {
        $(this).click(function() {
            $(this).addClass('active').siblings().removeClass('active');
            owlF.trigger('to.owl.carousel', [index, 600, true]);
        });
    });
});

$('.step_ministry > .table_cell a').hover(function() {
    var tooltip = $(this).closest('.steps').find('.step_ministry > .table_cell a').not($(this)).siblings('.tooltip');
    var tooltipS = $(this).siblings('.tooltip');
    tooltip.removeClass('active');
    tooltipS.delay(200).toggleClass('active');
    return false;
});

$('.report_creators_slider').owlCarousel({
    dots: false,
    loop: true,
    items: 1,
    nav: true,
    margin: 200,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
});

$('.faq_box').click(function() {
    var $this = $(this);

    $this.find('.question').toggleClass('active');
    $this.find('.answer').slideToggle(700, 'easeOutQuart');
});;

$('.exists__accordion__wrap').click(function(event) {
    $(this).toggleClass('clicked').removeClass('hovered');
    if ( $(this).hasClass('clicked')) $(this).slideDown('slow');
});

$('.exists__accordion__wrap').hover(function() {
    if ( !$(this).hasClass('clicked') ) {
        $(this).addClass('hovered');
    }
}, function() {
    $(this).removeClass('hovered');
});

// var $allPanels = $('.exists__accordion__item.-opened').hide();

// $('.exists__accordion__item.-closed').click(function() {
//     var $this = $(this);
//     var $target = $this.children('.-opened');

//     if (!$target.hasClass('active')) {
//         $allPanels.removeClass('active').slideUp();
//         $target.addClass('active').slideDown();
//     }

// });;

    // $(".faqordeon").niceScroll({
    //  cursorborder: 'none',
    //  cursorcolor: '#60dbb7',
    //  cursorwidth: 10,
    //  cursorborderradius: 0,
    //  railpadding: {
    //      right: -50
    //  },
    //  railoffset: true,
    //  cursorfixedheight: 150
    // });

$('.cta_form_popup_trigger').click(function() {
    $('#cta_form_popup').bPopup({
            // positionStyle: 'fixed',
            modalColor: 'hsl(160,30%,20%)'
        });
});
$('.callback_popup_trigger').click(function() {
    $('#callback_popup').bPopup({
            // positionStyle: 'fixed',
            modalColor: 'hsl(160,30%,20%)'
        });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > $('.header').outerHeight()) {
        $('.back_to_top').fadeIn(600);
    } else {
        $('.back_to_top').fadeOut(600);
    }
});
$('.back_to_top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});

$('.goods li a').click(function() {
    $('html, body').animate({
        scrollTop: $('.ca2-prod-slider').offset().top 
    }, 1000);
    return false;
});

    //формы валидация отправление на почту
    $.validator.addMethod('phone', function(value, element) {
        return /^[0-9]{11,11}$/.test(value);
    },
    'Номер телефона например 89XXXXXXXXX');
    //форма заказать звонок
    $('#callme').validate({
        rules: {
            phone: {
                required: true,
                phone: true,
            },
        },
        messages: {
            phone: {
                required: 'Поле телефон, обязательно для заполнения',
            },
        },
        //errorPlacement: function (error, element) {
        //  alert(error.text());
        //},
        submitHandler: function(form) {
            console.log('callme_good');
            var dataString = $(form).serializeArray();
            $.post('/new_markets/mail.php', {phone: dataString[0].value})
            .done(function(data) {
                alert('Спасибо, мы с Вами свяжемся.');
            });
            $('#callback_popup, .b-modal').hide();
            yaCounter32674410.reachGoal('CALLBACK');

        }
    });
    //форма отправки отчетов
    $('#reportform').validate({
        rules: {
            phone: {
                required: true,
                phone: true,
            },
            email: {
                required: true,
                email: true,
            },
        },
        errorPlacement: function(error, element) {
            $('.my-error').html(error.text());
        },
        messages: {
            phone: {
                required: 'Заполните все обязательные поля',
            },
            email: {
                required: 'Заполните все обязательные поля',
                email: 'Укажите правильный электронный адрес'
            }
        },
        submitHandler: function(form) {
            console.log('report_good');
            var dataString = $(form).serializeArray();
            $.post('/new_markets/mail.php', {phone: dataString[0].value, email: dataString[1].value})
            .done(function(data) {
                alert('Спасибо, мы с Вами свяжемся.');
            });
            $('#cta_form_popup, .b-modal').hide();
            yaCounter32674410.reachGoal('REPORT');

        }
    });

    //форма отправки отчетов
    $('#reportform1').validate({
        rules: {
            phone: {
                required: true,
                phone: true,
            },
            email: {
                required: true,
                email: true,
            },
        },
        errorPlacement: function(error, element) {
            $('.my-error').html(error.text());
        },
        messages: {
            phone: {
                required: 'Заполните все обязательные поля',
            },
            email: {
                required: 'Заполните все обязательные поля',
                email: 'Укажите правильный электронный адрес'
            }
        },
        submitHandler: function(form) {
            console.log('report_good');
            var dataString = $(form).serializeArray();
            $.post('/new_markets/mail.php', {phone: dataString[0].value, email: dataString[1].value})
            .done(function(data) {
                alert('Спасибо, мы с Вами свяжемся.');
            });
            $('.cta_form_box').hide(3000);
            yaCounter32674410.reachGoal('REPORT');

        }
    });

var arrnumb = [];
$('.items-c2 li p span').each(function(index) {
    arrnumb.push(parseFloat($(this).text()));
});

var min = Math.min.apply(null, arrnumb);
var max = Math.max.apply(null, arrnumb);

var counter = function() {
    $('.items-c2 p span').each(function () {
        var $this = $(this);
        $this.prop('Counter',0).animate({
            Counter: $this.text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
                $this.text(Math.round(now * 10) / 10);
            }
        });
    });

    setTimeout(function() {
        $('.items-c2 li p span').each(function(index, el) {
            if (min.toString() == $(this).text()) {
                $(this).parents('li').addClass('min');
            } else if (max.toString() == $(this).text()) {
                $(this).parents('li').addClass('max');
            }
        });
    }, 3000);
    // setTimeout(function() {
    //     $('.items-c2 li').removeClass('min');
    // }, 5000);

    // setTimeout(function() {
    //     $('.items-c2 li').removeClass('max');
    // }, 5000);
};

$('.wp1').waypoint(function() {
    $(this).addClass('animated fadeInUp');
}, {
    offset: '100%'
});
$('.wp2').waypoint(function() {
    $(this).addClass('animated fadeInUp');
}, {
    offset: '100%'
});
$('.wp3').waypoint(function() {
    $(this).addClass('animated fadeInUpDelay');
}, {
    offset: '100%'
});
$('.wp4').waypoint(function() {
    $(this).addClass('animated infinite fadeInUpArr');
}, {
    offset: '100%'
});
$('.wp5').waypoint(function() {
    $(this).addClass('animated hinge fadeInUpMegaDelay');
}, {
    offset: '100%'
});
$('.wp6').waypoint(function() {
    $(this).addClass('animated fadeInUpExtraDelay');
}, {
    offset: '100%'
});
$('.wp100').waypoint(function() {
    $(this).addClass('animated fadeInUp');
}, {
    offset: '100%'
});
$('.wp200').waypoint(function() {
    $(this).addClass('animated fadeInUp');
}, {
    offset: '100%'
});
$('.wp300').waypoint(function() {
    $(this).addClass('animated fadeInUpDelay');
}, {
    offset: '100%'
});
$('.wp400').waypoint(function() {
    $(this).addClass('animated infinite fadeInUpArr');
}, {
    offset: '100%'
});
$('.wp500').waypoint(function() {
    $(this).addClass('animated hinge fadeInUpMegaDelay');
}, {
    offset: '100%'
});
$('.wp600').waypoint(function() {
    $(this).addClass('animated fadeInUpExtraDelay');
}, {
    offset: '100%'
});
$('.wp7').waypoint(function() {
    $(this).addClass('animated fadeInUp');
}, {
    offset: '100%'
});
$('.wp8').waypoint(function() {
    $(this).addClass('animated fadeInUpDelay');
}, {
    offset: '100%'
});
$('.wp9').waypoint(function() {
    $(this).addClass('animated fadeInUp');
    counter();
}, {
    offset: '100%',
    triggerOnce: true
});
$('.wp10').waypoint(function() {
    $(this).addClass('animated fadeInUpItem');
}, {
    offset: '100%'
});
$('.wp11').waypoint(function() {
    $(this).addClass('animated fadeInUpItem2');
}, {
    offset: '100%'
});
$('.wp12').waypoint(function() {
    $(this).addClass('animated fadeInUp');
}, {
    offset: '100%'
});
$('.wp13').waypoint(function() {
    $(this).addClass('animated fadeInUpItem');
}, {
    offset: '100%'
});
$('.wp14').waypoint(function() {
    $(this).addClass('animated fadeInUpItem2');
}, {
    offset: '100%'
});
$('.wp15').waypoint(function() {
    $(this).addClass('animated fadeInUpItem');
}, {
    offset: '100%'
});
$('.wp16').waypoint(function() {
    $(this).addClass('animated fadeInUpItem2');
}, {
    offset: '100%'
});
$('.wp17').waypoint(function() {
    $(this).addClass('animated fadeInUpItem3');
}, {
    offset: '100%'
});
$('.wp18').waypoint(function() {
    $(this).addClass('animated fadeInDown');
}, {
    offset: '100%'
});
$('.wp19').waypoint(function() {
    $(this).addClass('animated fadeInUp');
}, {
    offset: '100%'
});
$('.wp20').waypoint(function() {
    $(this).addClass('animated fadeInUpDelay');
}, {
    offset: '100%'
});
$('.wp21').waypoint(function() {
    $(this).addClass('animated fadeInUpItem');
}, {
    offset: '100%'
});
$('.wp22').waypoint(function() {
    $(this).addClass('animated fadeInUpItem3');
}, {
    offset: '100%'
});
$('.wp23').waypoint(function() {
    $(this).addClass('animated fadeInUpItem3');
}, {
    offset: '100%'
});
$('.wp24').waypoint(function() {
    $(this).addClass('animated fadeInUpItem4');
}, {
    offset: '100%'
});
$('.wp30').waypoint(function() {
    $(this).addClass('animated slideInUp infinite');
}, {
    offset: '100%'
});
$('.wp31').waypoint(function() {
    $(this).addClass('animated slideInUp2 infinite');
}, {
    offset: '100%'
});
$('.wp32').waypoint(function() {
    $(this).addClass('animated slideInUp3 infinite');
}, {
    offset: '100%'
});
$('.wp33').waypoint(function() {
    $(this).addClass('animated slideInUp2 infinite');
}, {
    offset: '100%'
});
$('.wp34').waypoint(function() {
    $(this).addClass('animated slideInUp4 infinite');
}, {
    offset: '100%'
});
$('.wp35').waypoint(function() {
    $(this).addClass('animated slideInUp5 infinite');
}, {
    offset: '100%'
});
$('.wp-img1').waypoint(function() {
    $(this).addClass('animated slideInLeftRight infinite');
});
$('.wp-img2').waypoint(function() {
    $(this).addClass('animated slideInLeftRight infinite');
});


// $("#product_mark").chained("#product"); /* or $("#series").chainedTo("#mark"); */


// var $filterSelect = $('#product'),
//       $container = $('.mixalda');

// $container.mixItUp({
//     layout: {
//         containerClass: 'list' // Add the class 'list' to the container on load
//     }
// });
  
//   $filterSelect.on('change', function(){
//     $container.mixItUp('filter', this.value);
//   });

  // $filterSelect.on('change', function(){
  //   $container.mixItUp('filter', this.value);
  // });
  
  // $sortSelect.on('change', function(){
  //   $container.mixItUp('sort', this.value);
  // });
$('.wp55').waypoint(function() {
    $(this).addClass('animated fadeInUp');
}, {
    offset: '200%',
    triggerOnce: true
});
$('.wp56').waypoint(function() {
    $(this).addClass('animated fadeInUpItem');
}, {
    offset: '200%',
    triggerOnce: true
});
$('.wp57').waypoint(function() {
    $(this).addClass('animated fadeInUpItem2');
}, {
    offset: '200%',
    triggerOnce: true
});
$('.wp58').waypoint(function() {
    $(this).addClass('animated fadeInUp');
}, {
    offset: '200%',
    triggerOnce: true
});
$('.wp59').waypoint(function() {
    $(this).addClass('animated fadeInUpItem');
}, {
    offset: '200%',
    triggerOnce: true
});
$('.wp60').waypoint(function() {
    $(this).addClass('animated fadeInUpItem2');
}, {
    offset: '200%',
    triggerOnce: true
});
$('.wp61').waypoint(function() {
    $(this).addClass('animated fadeInUpItem');
}, {
    offset: '200%',
    triggerOnce: true
});
$('.wp62').waypoint(function() {
    $(this).addClass('animated fadeInUpItem2');
}, {
    offset: '200%',
    triggerOnce: true
});
$('.wp63').waypoint(function() {
    $(this).addClass('animated fadeInUpItem3');
}, {
    offset: '200%',
    triggerOnce: true
});

// $('.info-flags li').hover(function() {
//     $(this).addClass('flipInY');
// }, function() {
//     $(this).removeClass('flipInY');
// });


$('.flip-container').hover(function() {
    $(this).toggleClass('hover');
});

// setInterval(function() {
//     $('.flip-container').each(function(i) {
//         var $this = $(this);
//         setTimeout(function() {
//             $this.toggleClass('hover').delay(500).queue(function() {
//                 $this.toggleClass('hover');
//                 $this.dequeue();
//             });
//         }, i * 500);
//     });
// }, 5000);

});
