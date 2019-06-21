var skr, headAnim = false;
$(document).ready(() => {
    M.AutoInit();
    var anim1 = getAnims('1000px');
    var skillArr = skills.split(", ");
    skillArr.forEach((s, i) => {
        var randColIndx = Math.ceil(Math.random() * colors.length);
        //var randAnimIndx = Math.ceil(Math.random() * anim1.length)
        var col = document.createElement('div');
        col.setAttribute('id', 'col-' + s);
        col.setAttribute('class', 'col s3 m3 l3');
        if (i % 4 == 0)
            $(col).html(createCard("", s, colors[randColIndx], anim1[5]));
        if (i % 4 == 1)
            $(col).html(createCard("", s, colors[randColIndx], anim1[5]));
        if (i % 4 == 2)
            $(col).html(createCard("", s, colors[randColIndx], anim1[4]));
        if (i % 4 == 3)
            $(col).html(createCard("", s, colors[randColIndx], anim1[4]));
        //$(col).html(createCard("", s, colors[randColIndx], anim1[randAnimIndx]));
        $('#cardHolder').append(col);
    });
    // $("#cardHolder1").css("margin-top", "-" + $("#profileImg").height() + 100 + "px");
    Projects.forEach((p, i) => {
        var randColIndx = Math.ceil(Math.random() * colors.length);
        var randAnimIndx = Math.ceil(Math.random() * anim1.length);
        var col = document.createElement('div');
        col.setAttribute('id', 'col-' + p.title);
        col.setAttribute('class', 'col s12 m12 l12');
        $(col).html(createCard(p.title, p.desc, colors[randColIndx], anim1[randAnimIndx]));
        $('#cardHolder2').append(col);
    });
    skr = skrollr.init();
    extractHead("#head1");
    requestAnimFrame(dripp);
    window.addEventListener("resize", (e) => {
        M.AutoInit();
        //$("#cardHolder1").css("margin-top", "-" + $("#profileImg").height() + 100 + "px");
        skr.refresh();
    }, true);
});





var skills = "C/C++, ASP.NET, BASH, DOS/BAT, Python, GIT, HTML5, CSS, SCSS, JavaScript, Typescript, JAVA, Kotlin, PHP, Express, SpringBoot, JRA, jQuery, Angular2/4/6, React, Bootstrap, NativeScript, Sklearn, NumPy, MongoDB, MySQL, PL/SQL, PostgreSQL, SQL optimization, SOAP/REST API, MVC, SOLID, Agile, Scrum, TDD, Cheminformatics, Bioinformatics, Rapid Prototyping, Heroku, Azure, Eclipse, VSCode, Docker, Android, putty, WinSCP, Photoshop, AWS";

const colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'];

var getAnims = (movePixels) => {
    return [
        //Left
        "data--50-top-top='transform: translate(" + movePixels + ")' \
    data-100-top-top='transform: translate(0px)'",
        //Right
        "data--50-top-top='transform: translate(-" + movePixels + ")' \
    data-100-top-top='transform: translate(0px)'",
        //Top
        "data--50-top-top='transform: translate(0px, -" + movePixels + ")' \
    data-100-top-top='transform: translate(0px, 0px)'",
        //Bottom
        "data--50-top-top='transform: translate(0px, " + movePixels + ")' \
    data-100-top-top='transform: translate(0px, 0px)'",
        //left-top
        "data--50-top-top='transform: translate(" + movePixels + ", " + movePixels + ")' \
    data-100-top-top='transform: translate(0px, 0px)'",
        //right-top
        "data--50-top-top='transform: translate(-" + movePixels + ", " + movePixels + ")' \
    data-100-top-top='transform: translate(0px, 0px)'",
        //left-bottom
        "data--50-top-top='transform: translate(" + movePixels + ", -" + movePixels + ")' \
    data-100-top-top='transform: translate(0px, 0px)'",
        //right-bottom
        "data--50-top-top='transform: translate(-" + movePixels + ", -" + movePixels + ")' \
    data-100-top-top='transform: translate(0px, 0px)'",
        //zoom
        "data--50-top-top='transform: scale(2)' \
        data-100-top-top='transform: scale(1)'"
    ];
};


var Projects = [
    { title: "Travel Buddy App", desc: "Application developed on MEAN stack, mongoose for schema representation, loading and communication with MongoDB and deployed on Heroku, where my work involved implementing end-to-end services, modules and bug resolutions for different features and I created upwards of 9 components, following MVC design patterns and RESTful APIs, best practices. I was able to lead the team and help them complete their components with ease.", link: "http://travel-buddy-app.herokuapp.com" },
    { title: "THREEjs Demos", desc: "Web application containing various highly interactive landings for various assignments and finals using THREEjs and MVC design pattern which gave the user a great experience while interacting with each view boosted by animations and up to 20 easy to use controls. Modular high-quality reusable code with documentation was provided in the code base adhering to best practices, which made it easy for new developers to understand and reuse. SVG to 3D conversion perfected with full ability to transform. Skinning using textures online, movement through self-created joystick.", link: "https://samarthakv29.github.io/#assgns" },

]




var createCard = (title, body, color = 'cyan', anim, depth = 'z-depth-2', darken = 'lighten-1', textColor = 'black-text') => {
    var card = "\
        <div class='card center "+ color + " " + darken + " " + depth + "' " + anim + ">\
            <div class='card-content "+ textColor + "'>\
                <span class='card-title'>"+ title + "</span>\
                <p class='truncate'>"+ body + "</p>\
            </div>\
        </div >";
    return card;
};

var total = 0;
var extractHead = (_textholder) => {
    var htext = $(_textholder).text().split('');
    total = htext.length;
    htext = htext.map(h => { return "<h2 class= 'drippers' >" + h + "</h2>" });
    $(_textholder).html(htext);
};

function dripp() {
    if (headAnim) {
        rnd = parseInt(Math.random() * total);
        $($("h2.drippers")[rnd]).toggleClass("drippin");
        requestAnimFrame(dripp, 200);
    }
    else {
        $("h2.drippers").removeClass("drippin");
        //console.log("H2 classes", $("h2.drippers").attr('class'));
    }
}



// Fix for built-in function for setting callback time.
var requestAnimFrame = (callback, interval = 500) => {
    setTimeout(callback, interval);
}


window.addEventListener("scroll", (e) => {
    if (!headAnim) {
        if (window.scrollY > 200) {
            headAnim = false;
        }
        else {
            requestAnimFrame(dripp);
            headAnim = true;
        }
    }
    else {
        if (window.scrollY > 200) {
            headAnim = false;
        }
    }
}); 