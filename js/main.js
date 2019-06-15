var th = "#head";
var worddex = 0;
var skillArr;
$(document).ready(() => {
	$("#wordHolder").hide();
	$("body").css("height", $(window).height());
	toptext();
	setInterval(toptext, 2000);
	skillArr = skills.split(", ");
	skillArr = skillArr.map((e) => {
		var p = {};
		p.text = e;
		p.weight = Math.random() * (skillArr.length - topskills.length) * 0.1;
		let i = topskills.indexOf(p.text);
		if (i != -1) p.weight += Math.random() * topskills.length;
		return p;
	});
	//console.log(skillArr)
	$("#wordHolder").jQCloud(skillArr, wordsOptions);
	$("#wordHolder").fadeIn(500);
});

var wordsOptions = {
	width: $(window).width() / 2,
	height: $(window).height() / 2,
	autoResize: true,
	steps: 10,
	delay: 500,
	afterCloudRender: updateWords,
	colors: ["#EFEBE9", "#FFCCBC", "#FFCC80", "#FFD54F", "#FFEE58", "#CDDC39", "#69F0AE", "#00BFA5", "#007577"],
	fontSize: {
		from: 0.1,
		to: 0.02
	}
};

var ftimeout;

function updateWords() {
	ftimeout = setTimeout(() => {
		skillArr = skills.split(", ");
		skillArr = skillArr.map((e) => {
			var p = {};
			p.text = e;
			p.weight = Math.random() * (skillArr.length - topskills.length) * 0.1;
			let i = topskills.indexOf(p.text);
			if (i != -1) p.weight += Math.random() * topskills.length + 5;
			return p;
		});
		$("#wordHolder").jQCloud('update', skillArr);
	}, 1000);
}
var topskills = "Python JavaScript Typescript JAVA jQuery AngularJS REST Android".split(" ");
/* Function to extract the text from the textholder 
o:{options}
where options are:0
ele: replacement element
d: splitting delimiter
*/
var extractText = (o) => {
	var total = 0;
	$(th).text(words[worddex]);
	var htext = $(th).text().split(o.d);
	total = htext.length;
	htext = htext.map(h => {
		return "<" + o.ele + " class= 'drippers '>" + h + "</" + o.ele + ">"
	});
	$(th).html(htext);
	return {
		sz: total,
		ele: o.ele,
		i: o.dur
	};
};
/* Function to animate, toggle animation class
o:{options}
where options are:
ele: selector parent element, 
i: animation interval in milliseconds,
sz: length of text
*/
function dripp(o) {
	rnd = parseInt(Math.random() * o.sz);
	$($(o.ele + ".drippers")[rnd]).toggleClass("drippin");
	requestAnimFrame(dripp, o.i, o);
}
// Fix for built-in function for setting callback time.
var requestAnimFrame = (callback, interval, options) => {
	setTimeout(callback, interval, options);
}
toptext = () => {
	if (worddex < words.length) worddex++;
	else worddex = 0;
	var o = extractText({
		ele: "h2",
		d: "",
		dur: 500
	});
	requestAnimFrame(dripp, o.dur, o);
}
var words = ["Welcome", "This is my Playground", "Witness cOOL!", "SAMARTHA K V", "Scroll to know More!"];


var skills = "C/C++, ASP.NET, BASH, DOS/BAT, Python, GIT, HTML5, CSS, SCSS, JavaScript, Typescript, JAVA, Kotlin, PHP, Express, SpringBoot, JRA, jQuery, AngularJS, React, Bootstrap, NativeScript, Sklearn, Numpy, MongoDB, MySQL, PL/SQL, PostgreSQL, SQL optimization, SOAP, REST, MVC, SOLID, Agile, Scrum, TDD, Cheminformatics, Bioinformatics, Rapid Prototyping, Heroku, Azure, Eclipse, VSCode, Docker, Android, putty, WinSCP, Photoshop, AWS";


const colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'];


$(window).on("resize", (e) => {
	clearTimeout(ftimeout);
	$("#wordHolder").jQCloud("destroy");
	wordsOptions.width = $(window).width() / 2;
	wordsOptions.height = $(window).height() / 2;
	$("#wordHolder").jQCloud(skillArr, wordsOptions);
	$("#wordHolder").fadeIn(500);
	// console.log("Window Resize");
});