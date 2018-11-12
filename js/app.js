var catObj = [
{name: "kit", ref: "http://www.petwebsite.co.uk/media/k2/items/cache/0548677e6432786dd8df61eb3aaec139_L.jpg"},
{name: "cheu", ref: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
{name: "meow", ref: "https://cdn.britannica.com/47/158247-131-9FB76EAE.jpg"},
{name: "pit", ref: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkhnSdMgyv5wkZIPTD-CNmy_D9ibkgvdRqMyvXhjEmLjNVgFXiFg"},
{name: "charl", ref: "https://assets.rbl.ms/14419411/980x.jpg"}
];

/*for (var cat in catObj){

$('.name').click(function(catcopy){
	function(){
			$('.name').text(cat.name);
			$('.cat').text(cat.ref);
	}

})(cat);*/



var i=0;
$('.thumbnail').click(function(){

	console.log("clicked on cat: " + this.textContent);
	var currCat = this.textContent;
	
	for(var cat of catObj){

		if((cat.name).toUpperCase() === currCat){
			$('.name').text(cat.name);
			$('.cat').attr('src',(cat.ref));
			$('.cat').attr('alt',(cat.name));
			break;
		}
	}
});

	

		$('.cat').click((function(){

			console.log("in lsitsner for cat");
			return function(){
				
				let divele =  this.alt.toLowerCase() ;
				
				let count = $('.' + divele).find('#count');
				i = parseInt(count.text()) + 1;
				console.log(count.text());
				// console.log(j);
				count.html(i);
			}

		})());








