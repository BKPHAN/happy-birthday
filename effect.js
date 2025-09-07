$(window).load(function () {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});
$('document').ready(function () {
    var vw;
    $(window).resize(function () {
        vw = $(window).width() / 2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b12,#b13,#b14,#b15,#b16,#b17,#b18,#b19').stop();
        
        // HAPPY BIRTHDAY - Row 1 (all on one line) - tăng khoảng cách
        $('#b11').animate({top: 200, left: vw - 520}, 500); //H
        $('#b22').animate({top: 200, left: vw - 440}, 500); //A
        $('#b33').animate({top: 200, left: vw - 360}, 500); //P
        $('#b44').animate({top: 200, left: vw - 280}, 500); //P
        $('#b55').animate({top: 200, left: vw - 200}, 500); //Y
        // Khoảng cách lớn hơn giữa HAPPY và BIRTHDAY
        $('#b66').animate({top: 200, left: vw - 100}, 500); //B
        $('#b77').animate({top: 200, left: vw - 20}, 500); //I
        $('#b88').animate({top: 200, left: vw + 60}, 500); //R
        $('#b99').animate({top: 200, left: vw + 140}, 500); //T
        $('#b100').animate({top: 200, left: vw + 220}, 500); //H
        $('#b111').animate({top: 200, left: vw + 300}, 500); //D
        $('#b122').animate({top: 200, left: vw + 380}, 500); //A
        $('#b133').animate({top: 200, left: vw + 460}, 500); //Y
        
        // TÚ ANH - Row 2 (centered below HAPPY BIRTHDAY) - tăng khoảng cách
        setTimeout(function() {
            $('#b144').animate({top: 300, left: vw - 160}, 500); //T
            $('#b155').animate({top: 300, left: vw - 80}, 500); //Ú
            $('#b166').animate({top: 300, left: vw - 20}, 500); // (space)
            $('#b177').animate({top: 300, left: vw + 40}, 500); //A
            $('#b188').animate({top: 300, left: vw + 120}, 500); //N
            $('#b199').animate({top: 300, left: vw + 200}, 500); //H
        }, 600);
    });

    $('#turn_on').click(function () {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(1000).promise().done(function () {
            $('#play').fadeIn('slow');
            var audio = $('.song')[0];
            audio.play();
        });
    });
    $('#play').click(function () {
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('backgroud-color', '#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(3000).promise().done(function () {
            // $('#bannar_coming').fadeIn('slow');
            const balloon = $('.balloon-border');
            const offset = balloon.offset().top;
            const distanceToTop = offset + balloon.height();

            balloon.animate({ top: -distanceToTop }, 8000);
            $('#b1, #b3, #b5, #b7, #b10, #b12, #b14, #b16, #b18').addClass('balloons-rotate-behaviour-one');
            $('#b2,#b4,#b6,#b8, #b9, #b11, #b13, #b15, #b17, #b19').addClass('balloons-rotate-behaviour-two');
            // $('#b3').addClass('balloons-rotate-behaviour-two');
            // $('#b4').addClass('balloons-rotate-behaviour-one');
            // $('#b5').addClass('balloons-rotate-behaviour-one');
            // $('#b6').addClass('balloons-rotate-behaviour-two');
            // $('#b7').addClass('balloons-rotate-behaviour-one');
            loopOne();
            loopTwo();
            loopThree();
            loopFour();
            loopFive();
            loopSix();
            loopSeven();
            loop8();
            loop9();
            loop10();
            loop11();
            loop12();
            loop13();
            loop14();
            loop15();
            loop16();
            loop17();
            loop18();
            loop19();

            $(this).fadeOut('slow').delay(3000).promise().done(function () {
                $('#cake_fadein').fadeIn('slow');
                // $('#wish_message').fadeIn('slow');
            });
        });
    });

    // $('#bannar_coming').click(function(){
    // 	$('.bannar').addClass('bannar-come');
    // 	$(this).fadeOut('slow').delay(3000).promise().done(function(){
    // 		$('#balloons_flying').fadeIn('slow');
    // 	});
    // });

    function loopOne() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b1').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopOne();
        });
    }

    function loopTwo() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b2').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopTwo();
        });
    }

    function loopThree() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b3').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopThree();
        });
    }

    function loopFour() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b4').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopFour();
        });
    }

    function loopFive() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b5').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopFive();
        });
    }

    function loopSix() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b6').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopSix();
        });
    }

    function loopSeven() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b7').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopSeven();
        });
    }

    function loop8() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b8').animate({left: randleft, bottom: randtop}, 10000, function () {
            loop8();
        });
    }

    function loop9() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b9').animate({left: randleft, bottom: randtop}, 10000, function () {
            loop9();
        });
    }

    function loop10() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b10').animate({left: randleft, bottom: randtop}, 10000, function () {
            loop10();
        });
    }

    function loop11() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b011').animate({left: randleft, bottom: randtop}, 10000, function () {
            loop11();
        });
    }

    function loop12() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b12').animate({left: randleft, bottom: randtop}, 10000, function () {
            loop12();
        });
    }

    function loop13() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b13').animate({left: randleft, bottom: randtop}, 10000, function () {
            loop13();
        });
    }

    function loop14() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b14').animate({left: randleft, bottom: randtop}, 10000, function () {
            loop14();
        });
    }

    function loop15() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b15').animate({left: randleft, bottom: randtop}, 10000, function () {
            loop15();
        });
    }
// Hàm loop cho bóng mới
    function loop16() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b16').animate({left: randleft, bottom: randtop}, 10000, function () {
            loop16();
        });
    }

    function loop17() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b17').animate({left: randleft, bottom: randtop}, 10000, function () {
            loop17();
        });
    }

    function loop18() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b18').animate({left: randleft, bottom: randtop}, 10000, function () {
            loop18();
        });
    }

    function loop19() {
        var randleft = 2000 * Math.random();
        var randtop = 800 * Math.random();
        $('#b19').animate({left: randleft, bottom: randtop}, 10000, function () {
            loop19();
        });
    }
    $('#balloons_flying').click(function () {
        $('.balloon-border').animate({top: -500}, 8000);
        $('#b1, #b3, #b5, #b7, #b10, #b12, #b14, #b16, #b18').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b4,#b6,#b8, #b9, #b11, #b13, #b15, #b17, #b19').addClass('balloons-rotate-behaviour-two');
        // $('#b3').addClass('balloons-rotate-behaviour-two');
        // $('#b4').addClass('balloons-rotate-behaviour-one');
        // $('#b5').addClass('balloons-rotate-behaviour-one');
        // $('#b6').addClass('balloons-rotate-behaviour-two');
        // $('#b7').addClass('balloons-rotate-behaviour-one');
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();
        loop8();
        loop9();
        loop10();
        loop11();
        loop12();
        loop13();
        loop14();
        loop15();
        loop16();
        loop17();
        loop18();
        loop19();


        $(this).fadeOut('slow').delay(3000).promise().done(function () {
            // $('#cake_fadein').fadeIn('slow');
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function(){
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function(){
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function(){
            $('#wish_message').fadeIn('slow');
        });
    });

    $('#wish_message').click(function () {
        // Ẩn chiếc bánh
        $('.cake').fadeOut('fast');
        
        vw = $(window).width() / 2;

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b12,#b13,#b14,#b15,#b16,#b17,#b18,#b19').stop();
        $('#b1').attr('id', 'b11');
        $('#b2').attr('id', 'b22')
        $('#b3').attr('id', 'b33')
        $('#b4').attr('id', 'b44')
        $('#b5').attr('id', 'b55')
        $('#b6').attr('id', 'b66')
        $('#b7').attr('id', 'b77')
        $('#b8').attr('id', 'b88')
        $('#b9').attr('id', 'b99')
        $('#b10').attr('id', 'b100')
        $('#b11').attr('id', 'b111')
        $('#b12').attr('id', 'b122')
        $('#b13').attr('id', 'b133')
        $('#b14').attr('id', 'b144')
        $('#b15').attr('id', 'b155')
        $('#b16').attr('id', 'b166')
        $('#b17').attr('id', 'b177')
        $('#b18').attr('id', 'b188')
        $('#b19').attr('id', 'b199')

        // HAPPY BIRTHDAY - Row 1 (all on one line) - tăng khoảng cách
        $('#b111').animate({top: 200, left: vw - 520}, 500); //H
        $('#b22').animate({top: 200, left: vw - 440}, 500); //A
        $('#b33').animate({top: 200, left: vw - 360}, 500); //P
        $('#b44').animate({top: 200, left: vw - 280}, 500); //P
        $('#b55').animate({top: 200, left: vw - 200}, 500); //Y
        // Khoảng cách lớn hơn giữa HAPPY và BIRTHDAY
        $('#b66').animate({top: 200, left: vw - 100}, 500); //B
        $('#b77').animate({top: 200, left: vw - 20}, 500); //I
        $('#b88').animate({top: 200, left: vw + 60}, 500); //R (từ b8)
        $('#b99').animate({top: 200, left: vw + 140}, 500); //T (từ b9)
        $('#b100').animate({top: 200, left: vw + 220}, 500); //H (từ b10)
        $('#b11').animate({top: 200, left: vw + 300}, 500); //D (từ b11)
        $('#b122').animate({top: 200, left: vw + 380}, 500); //A (từ b12)
        $('#b133').animate({top: 200, left: vw + 460}, 500); //Y (từ b13)
        
        // TÚ ANH - Row 2 (below HAPPY BIRTHDAY, centered) - tăng khoảng cách
        setTimeout(function() {
            $('#b144').animate({top: 400, left: vw - 160}, 500); //T (b14→b144)
            $('#b155').animate({top: 400, left: vw - 80}, 500); //Ú (b15→b155)
            $('#b166').animate({top: 400, left: vw - 20}, 500); // (space) (b16→b166)
            $('#b177').animate({top: 400, left: vw + 40}, 500); //A (b17→b177)
            $('#b188').animate({top: 400, left: vw + 120}, 500); //N (b18→b188)
            $('#b199').animate({top: 400, left: vw + 200}, 500); //H (b19→b199)
        }, 600); // Wait for HAPPY BIRTHDAY positioning to complete

        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(3000);
        $(this).fadeOut('slow').delay(3000).promise().done(function () {
            $('#story').fadeIn('slow');
        });
    });

    $('#story').click(function () {
        $('.balloons').css('opacity', '0');
        $(this).fadeOut('slow');
        $('.message').fadeIn('slow');

        const paragraphs = $('.message p');
        let pIndex = 0;

        // Ẩn toàn bộ nội dung ban đầu
        paragraphs.each(function () {
            const text = $(this).text();
            $(this).data('fulltext', text).text('').hide();
        });

        function typeParagraph(index) {
            if (index >= paragraphs.length) return;

            const el = $(paragraphs[index]);
            const fullText = el.data('fulltext');
            el.show();

            let charIndex = 0;
            function typeChar() {
                if (charIndex <= fullText.length) {
                    el.text(fullText.substring(0, charIndex));
                    charIndex++;
                    setTimeout(typeChar, 60); // tốc độ gõ chữ (ms)
                } else {
                    setTimeout(() => typeParagraph(index + 1), 1000); // delay trước khi dòng sau bắt đầu
                }
            }

            typeChar();
        }

        typeParagraph(0);
    });
// Create floating hearts
    // Create floating hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '💖';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 3 + 's';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        document.getElementById('hearts').appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }


    setInterval(createHeart, 800);
    // $('#story').click(function () {
    //     $(this).fadeOut('slow');
    //     // $('.cake').fadeOut('fast').promise().done(function(){
    //     $('.message').fadeIn('slow');
    //     // });
    //
    //     var i;
    //
    //     function msgLoop(i) {
    //         $("p:nth-child(" + i + ")").fadeOut('slow').delay(100).promise().done(function () {
    //             i = i + 1;
    //             $("p:nth-child(" + i + ")").fadeIn('slow').delay(2000);
    //             if (i == 50) {
    //                 $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
    //                     // $('.cake').fadeIn('fast');
    //                 });
    //
    //             } else {
    //                 msgLoop(i);
    //             }
    //
    //         });
    //         // body...
    //     }
    //
    //     msgLoop(0);
    //
    // });
});


//alert('hello');