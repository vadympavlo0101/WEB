function slowScroll(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);
}

$(document).on("scroll", function () {
    if ($(window).scrollTop() === 0)
        $("header").removeClass("fixed");
    else
        $("header").attr("class", "fixed");
});


$('.agreement').on('change', function () {
    if ($(this).is(':checked')) {
        $(".check-agreement").removeAttr("disabled")
    } else {
        $(".check-agreement").attr("disabled", true);
    }
})


function validateForm() {
    const form = document.forms.form;

    // записуємо значення input в змінні
    let email = form.email.value;
    let password = form.password.value;
    let phone = form.phone.value;

    // регулярки для форми
    const emailReg = /[a-zA-Z0-9]+\@[a-zA-Z]{0,7}\.[a-zA-Z]{0,5}/.test(email);
    const passReg = /(^[A-Z]{1})+([a-zA-Z0-9]{5,})/.test(password);
    const phoneReg = /\++[0-9]{12}/.test(phone);

    // умови для виведення ынформації з форми
    const result = emailReg && passReg && phoneReg;
    const fieldIsEmptyOrMoreFields = form === '' || password === '' || phone === '';

    // якщо всі поля форми не заповнені
    if (fieldIsEmptyOrMoreFields) {
        alert('Заповніть всі поля форми!');
    }

    // Якщо форма добре провалідована
    if (result) {
        alert('В консолі отримали дані про користувача!');

        console.log('email: ', email);
        console.log('password: ', password);
        console.log('phone: ', phone);

        form.reset();

        $(".check-agreement").attr("disabled", true);
    }

    // Якщо поля форми не є пустими і форма не пройшла умови регулярок
    if (!result && !fieldIsEmptyOrMoreFields) {
        emailReg ? null : alert('Емейл введено в некоректному форматі!');
        passReg ? null : alert('Пароль введено не правильно!');
        phoneReg ? null : alert('Телефон введено в некоректному форматі!');
    }


}
const click = document.querySelector('#onclick');


// THEME
let darkTheme = true;
$('#themeBtn').click(() => {
    if (darkTheme) {
        // light

        // фон
        $('.theme').css({
            'background-color': ' #191f25'
        });

        // навігація
        $('header').css({
            'background-color': ' #191f25'
        })

        // текстові стилі
        $('p, label, button').css({
            'color': '#fff'
        })
        $('span, a').css({
            'color': '#fff'
        })
        $('h2, a').css({
            'color': 'rgb(107, 107, 107)f'
        })
        $('.sub-menu').css({
            'color': '#fff'
        });

        // не змінні стиля для інформації машини
        $('.datail_h2').css({
            'color': '#fff'
        });

        // стиль кнопки зміни теми для темної теми
        $('#themeBtn').css({
            'background-color': '#343434',
            'border': '5px dashed #fff',
            'color': '#fff'
        });

        // зміна тексту
        $('#themeBtn').text('Light Theme');

        // переміщення кнопки
        $('.nav-info').css({
            'flex-direction': 'row-reverse'
        });

        // міняємо флажок на протележний
        darkTheme = false;
    } else {
        // dark
        $('.theme').css({
            'background-color': ' #f6f6f6'
        });
        $('span, p, h2, label, button').css({
            'color': '#000'
        })
        $('span, a').css({
            'color': '#484848'
        })
        $('h2, a').css({
            'color': '#484848'
        })
        $('.datail_h2').css({
            'color': '#fff'
        });
        $('header').css({
            'background-color': ' #f6f6f6'
        })
        $('#themeBtn').css({
            'background-color': '#343434',
            'border': '5px dashed #7c7c7c',
            'color': '#7c7c7c'
        });
        $('.nav-info').css({
            'flex-direction': 'row'
        });
        $('.sub-menu').css({
            'color': '#fff'
        });
        $('#themeBtn').text('Dark Theme');

        const lis = document.querySelectorAll('.about-li');
        console.log(lis);

        // for (const li of lis) {
        //     $(li).hover(function () {
        //         // console.log(li);
        //         console.log(li.childNodes[1]);

        //         $(`${li.childNodes[1]}`).css({
        //             'color': '#fff'
        //         });
        //     }, function () {
        //         // out
        //     });

        // }
        darkTheme = true;
    }
});

window.addEventListener('scroll', () => {
    $('.sub-menu').css({
        'color': '#fff'
    });
})


// ПОДІЇ
$('.click-envent').click(function () {
    alert('Спрацювала подія CLICK');
});

$('.mouseover-event').mouseover(function () {
    alert('Спрацювала подія MOUSEOVER');
});

$('.mouseout-event').mouseout(function () {
    alert('Спрацювала подія MOUSEOUT');
});
