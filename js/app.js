var count = $('#count');
var kit = $('.kit');
var cheu = $('.cheu');
var i =0;

kit.click( function(){
	i += 1;
	count.html(i);
});

cheu.click( function(){
	i += 1;
	count.html(i);
});