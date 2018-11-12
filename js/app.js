var count1 = $('#count1');
var count2 = $('#count2');
var kit = $('.kit');
var cheu = $('.cheu');
var i=0,j =0;



var cats = { name: "meou", 
src: "http://www.petwebsite.co.uk/media/k2/items/cache/0548677e6432786dd8df61eb3aaec139_L.jpg"
} ;

// setting act names
$('.name1').html("<strong>KIT</strong>");
$('.name2').html("<strong>CHEW</strong>");

kit.click( function(){
	i += 1;
	count1.html(i);
});

cheu.click( function(){
	j += 1;
	count2.html(j);
});

var catdiv = document.createElement("div");
catdiv.classList.add("cat");
console.log(catdiv);
$('.catsgroup').append(catdiv);

var namediv = document.createElement("div");
namediv.classList.add("name");
console.log(namediv);
$('.cat').append(namediv);

var catimg = document.createElement("img");
catimg.classList.add(cats.name);
console.log(catimg);
$('.cat').append(catimg);


