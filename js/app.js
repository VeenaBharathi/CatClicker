var count1 = $('#count1');
var count2 = $('#count2');
var kit = $('.kit');
var cheu = $('.cheu');
var i=0,j =0;


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