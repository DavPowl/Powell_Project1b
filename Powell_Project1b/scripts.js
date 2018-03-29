$(document).ready(function () {
    $(".music-nav").hover(function () {
        $(".music").show();
    }, function () {
        $(".music").hide();
    });

    $(".store-nav").hover(function () {
        $(".store").show();
    }, function () {
        $(".store").hide();
    });

    $(".contact-nav").hover(function () {
        $(".contact").show();
    }, function () {
        $(".contact").hide();
    });

    var classes = ['scheme1', 'scheme2', 'scheme3'],
        currentClass = 0;

    $('.colorscheme').click(function () {

        $('body').removeClass(classes[currentClass]);

        if (currentClass + 1 < classes.length) {
            currentClass += 1;
        } else {
            currentClass = 0;
        }

        $('body').addClass(classes[currentClass]);

    });
    $(".colorscheme").click(function () {
        $('body').toggleClass('scheme1 scheme2');
        if ($('body').hasClass('scheme1')) {
            $('a, p').css('color', 'white');
        } else {
            $('a, p').css('color', 'tomato');
        }
    });
});

function showDiv() {
    document.getElementById('music-players').style.display = "block";
};

function showDiv2() {
    document.getElementById('other-embed').style.display = "block";
};

