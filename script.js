// alert("Bonjour JF, on t'aime tous");

var snow = {

    wind: 2,
    maxXrange: 100,
    minXrange: 10,
    maxSpeed: 20,
    minSpeed: 2,
    color: "#fff",
    char: "*",
    maxSize: 40,
    minSize: 8,

    flakes: [],
    WIDTH: 0,
    HEIGHT: 0,

    init: function (nb) {
        var o = this,
            frag = document.createDocumentFragment();
        o.getSize();



        for (var i = 0; i < nb; i++) {
            var flake = {
                x: o.random(o.WIDTH),
                y: - o.maxSize,
                xrange: o.minXrange + o.random(o.maxXrange - o.minXrange),
                yspeed: o.minSpeed + o.random(o.maxSpeed - o.minSpeed, 100),
                life: 0,
                size: o.minSize + o.random(o.maxSize - o.minSize),
                html: document.createElement("span")
            };

            flake.html.style.position = "absolute";
            flake.html.style.top = flake.y + "px";
            flake.html.style.left = flake.x + "px";
            flake.html.style.fontSize = flake.size + "px";
            flake.html.style.color = o.color;
            flake.html.classList.add('truc');
            flake.html.appendChild(document.createTextNode(o.char));

            frag.appendChild(flake.html);
            o.flakes.push(flake);
        }

        document.body.appendChild(frag);
        o.animate();

        window.onresize = function () { o.getSize(); };
    },

    animate: function () {
        var o = this;
        for (var i = 0, c = o.flakes.length; i < c; i++) {
            var flake = o.flakes[i],
                top = flake.y + flake.yspeed,
                left = flake.x + Math.sin(flake.life) * flake.xrange + o.wind;
            if (top < o.HEIGHT - flake.size - 10 && left < o.WIDTH - flake.size && left > 0) {
                flake.html.style.top = top + "px";
                flake.html.style.left = left + "px";
                flake.y = top;
                flake.x += o.wind;
                flake.life += .01;
            }
            else {
                flake.html.style.top = -o.maxSize + "px";
                flake.x = o.random(o.WIDTH);
                flake.y = -o.maxSize;
                flake.html.style.left = flake.x + "px";
                flake.life = 0;
            }
        }
        setTimeout(function () {
            o.animate();
        }, 20);
    },

    random: function (range, num) {
        var num = num ? num : 1;
        return Math.floor(Math.random() * (range + 1) * num) / num;
    },

    getSize: function () {
        this.WIDTH = document.body.clientWidth || window.innerWidth;
        this.HEIGHT = document.body.clientHeight || window.innerHeight;
    }

};

const wind = document.getElementById("wind");
let flag = 0;
wind.addEventListener("click", function () {
    if (!flag) {
        snow.wind = 5;
        flocons = document.querySelectorAll("span.truc");
        for (let flocon of flocons) {
            flocon.innerHTML = "JF"
            flocon.style.fontSize = 60 + "px";
            flag = true;
        }
    } else {
        snow.wind = 1;
        flocons = document.querySelectorAll("span.truc");
        for (let flocon of flocons) {
            flocon.innerHTML = "*"
            flocon.style.fontSize = 30 + "px";
            flag = false;
        }
    }
});

const divButton = document.getElementById("huhu");
const button = document.getElementById("haha");

button.addEventListener("mouseenter", function () {
    divButton.classList.toggle("hihi");
});

button.addEventListener("click", function () {
    window.open('https://www.materiel-horeca.com/guide/comment-ouvrir-une-friterie-en-france/#:~:text=Tout%20entrepreneur%20souhaitant%20ouvrir%20une,par%20voie%20%C3%A9lectronique%20ou%20postale.', '_blank');
});


// a key map of allowed keys
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function (e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = konamiCode[konamiCodePosition];

    // compare the key with the required key
    if (key == requiredKey) {

        // move to the next key in the konami code sequence
        konamiCodePosition++;

        // if the last key is reached, activate cheats
        if (konamiCodePosition == konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function activateCheats() {
    alert("Joyeux Noël");
}