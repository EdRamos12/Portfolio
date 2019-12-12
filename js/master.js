/* =======================================
<<<<<<< HEAD
= carregar conteudo em todas as paginas  =
=========================================*/

$(function () {
    $("footer").load("content/footer.html");
    console.log("content loaded");
});

/* =======================================
=           white/black theme            =
=========================================*/

var themeInfo, darkModePallette;

if (!localStorage.isWhite) {
    localStorage.setItem('isWhite', 'yes')
}

themeInfo = localStorage.isWhite;
darkModePallette = '#121212';

function setTheme() {
    var cropo = document.querySelector('.cropo'),
        port = document.querySelectorAll('.port'),
        btntheme = document.querySelector('.black-theme span'),
        btnimg = document.querySelector('.sun-moon'),
        p = document.querySelectorAll('p'),
        h1 = document.querySelectorAll('h1'),
        habilidades = document.querySelector('.habilidades'),
        sobremim = document.querySelector('.sobre-mim'),
        noscroll = document.querySelector('.parallax-noscroll');

    if (localStorage.isWhite == 'no') {
        // section background
        cropo.style.background = darkModePallette;
        // triangle colors
        habilidades.style.color = darkModePallette;
        sobremim.style.color = darkModePallette;
        noscroll.style.color = darkModePallette;
        // btn set theme
        btnimg.style.webkitFilter = 'invert(100%)';
        btntheme.innerHTML = 'Desligar tema escuro';
        btntheme.style.color = 'white';
        // font color
        h1.forEach(e => { e.style.color = 'white'; });
        p.forEach(e => { e.style.color = 'white'; });
        // form
        noscroll.style.backgroundImage = 'url("img/bg.jpg")';
        // port
        port.forEach(e => { e.style.background = darkModePallette; e.style.color = 'white'; });
    } else {
        cropo.style.background = 'white';
        // btn set theme
        btnimg.style.webkitFilter = 'invert(0)';
        btntheme.innerHTML = 'Ligar tema escuro';
        btntheme.style.color = 'black';
        // form
        noscroll.style.backgroundImage = 'url("img/bg3.jpg")';
        // triangle colors
        habilidades.style.color = 'white';
        sobremim.style.color = 'white';
        noscroll.style.color = 'white';
        // h1 colors
        document.querySelector('h1#titleH').style.color = 'black';
        document.querySelector('h1#sobremim').style.color = 'black';
        // set text color 
        p.forEach(e => { e.style.color = 'black'; });
        //port backgorund color
        port.forEach(e => { e.style.background = 'white';});
    }
}

setTheme();

function blackify() {
    if (localStorage.isWhite == 'yes') {
        localStorage.setItem('isWhite', 'no');
    } else {
        localStorage.setItem('isWhite', 'yes');
    }
    themeInfo = localStorage.isWhite;
    setTheme();
}

/* =======================================
=           typing animation             =
=========================================*/

function Typer(e) {
    var listaText = e.innerHTML.split("");
    e.innerHTML = "";
    listaText.forEach(function (letra, i) {
        setTimeout(function () {
            e.innerHTML += letra;
        }, 35 * i)
    })
}

var subtitulo = document.querySelector("h3");
Typer(subtitulo);

/* =======================================
=======
>>>>>>> 31398c1a57e4250e5193ab828e36a7eb57a75f36
=                form js                =
=========================================*/

function enviar() {
<<<<<<< HEAD
    var fname = document.getElementById("fname"), femail = document.getElementById("femail"), fmsg = document.getElementById("fmsg");
    var ername = document.getElementById("ername"), eremail = document.getElementById("eremail"), ermsg = document.getElementById("ermsg");

    if (fname.value.length >= 2) {
        fname.classList.remove("form-error");
        ername.innerHTML = " ";
    } else {
        ername.innerHTML = "(Insira um nome valido)";
        fname.classList.add("form-error");
        return false;
    }
    if (femail.value.length > 5 && femail.includes("@") && femail.includes(".")) {
        eremail.innerHTML = " ";
        femail.classList.remove("form-error");
    } else {
        eremail.innerHTML = "(Insira um e-mail valido)";
        femail.classList.add("form-error");
        return false;
    }
    if (fmsg.value.length >= 10) {
        ermsg.innerHTML = " ";
        fmsg.classList.remove("form-error");
    } else {
        ermsg.innerHTML = "(Contextualize sua mensagem)";
        fmsg.classList.add("form-error");
=======
    var fname = document.getElementById("fname").value, femail = document.getElementById("femail").value, fmsg = document.getElementById("fmsg").value;
    var ername = document.getElementById("ername"), eremail = document.getElementById("eremail"), ermsg = document.getElementById("ermsg");

    if (fname.length > 2) {
        document.getElementById("fname").classList.remove("form-error");
        ername.innerHTML = " ";
    } else {
        console.log(fname.length)
        ername.innerHTML = "(Insira um nome valido)";
        document.getElementById("fname").classList.add("form-error");
        return false;
    }
    if (femail.length > 5 && femail.includes("@") && femail.includes(".")) {
        eremail.innerHTML = " ";
        document.getElementById("femail").classList.remove("form-error");
    } else {
        console.log(femail.length);
        eremail.innerHTML = "(Insira um e-mail valido)";
        document.getElementById("femail").classList.add("form-error");
        return false;
    }
    if (fmsg.length >= 10) {
        ermsg.innerHTML = " ";
        document.getElementById("fmsg").classList.remove("form-error");
    } else {
        console.log(fmsg.length);
        ermsg.innerHTML = "(Contextualize sua mensagem)";
        document.getElementById("fmsg").classList.add("form-error");
>>>>>>> 31398c1a57e4250e5193ab828e36a7eb57a75f36
        return false;
    }
}

/* =======================================
=            smooth scroll js            =
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/* =======================================
=             fade on scroll            =
=========================================*/

<<<<<<< HEAD
var animationClass = 'fade-begin',
    offset = $(window).height() * 3 / 4,
    documentTop = $(document).scrollTop();
=======
(function () {
    
    function fadeScroll() {
        var $target = $('.fade'), animationClass = 'fade-begin', offset = $(window).height() * 3 / 4,  documentTop = $(document).scrollTop();
        $target.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            }
        })
    }
    function fadeportScroll() {
        var $target = $('.fadeport'), animationClass = 'fade-begin', offset = $(window).height() * 3 / 4, documentTop = $(document).scrollTop();
        $target.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            }
        })
    }
    fadeScroll();
    document.addEventListener('scroll', function (event) {
        fadeScroll();
        fadeportScroll();
    }, true);
}())
>>>>>>> 31398c1a57e4250e5193ab828e36a7eb57a75f36

function fadeScroll() {
    let $target = $('.fade');
    $target.each(function () {
        var itemTop = $(this).offset().top;
        if (documentTop > itemTop - offset) {
            $(this).addClass(animationClass);
        }
    })
}
function fadeportScroll() {
    let $target = $('.fadeport');
    $target.each(function () {
        var itemTop = $(this).offset().top;
        if (documentTop > itemTop - offset) {
            $(this).addClass(animationClass);
        }
    })
}
document.addEventListener('scroll', function () {
    fadeScroll();
    fadeportScroll();
}, true);