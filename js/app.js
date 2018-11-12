var count = $('#count');
var img = $('.pic');
var i =0;

img.click( function(){
	i += 1;
	count.html(i);
});