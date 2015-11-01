
//fastclick remove click delay
$(function() {
    FastClick.attach(document.body);
});



//data for item
$.getJSON('data.json', function(data) {

	$.each(data, function(key, val) {
        $(".price").text(val.price);
        $(".itemDescription").text(val.description);
        var str = val.description;
       var y =  $('str').find("unassigned link");
            console.log(y);
        $('h1').text(val.title);
        $('img').attr("src",val.image);
    });

});


$('.checkoutBtn').on('click',function() {
    alert("no delay")
});


//change price - total
$('input').on('change', function() {
	var $value = $(this).val();
	$(".total").text($value*10);
});


//currency geoplugin
var currencyNum = geoplugin_currencySymbol();
$(".currencySymbol").html(currencyNum.toString());
