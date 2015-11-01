
//fastclick remove click delay
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}


var request;
if (window.XMLHttpRequest) {
    request=new XMLHttpRequest();
} else {
    request=new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'data.json');
request.onreadystatechange = function() {
    if ((request.status === 200) &&
        (request.readyState === 4)) {

        var info = JSON.parse(request.responseText);

        document.querySelector(".price").innerText = info.price;
        document.querySelector(".itemDescription").innerHTML = info.description;
        document.querySelector("h1").innerHTML = info.title;
        document.querySelector("img").setAttribute('src', info.image);

    } //ready
}; //event
request.send();


document.querySelector(".checkoutBtn").addEventListener('click', function() {
    alert("no delay")
});


//change price - total
document.querySelector('input').addEventListener('change', function() {
     var value = this.value;
     document.querySelector('.total').innerText=value*10;

});


//currency geoplugin
var currencyNum = geoplugin_currencySymbol();
var allCurrency = document.querySelectorAll(".currencySymbol");
    for(i=0; i<allCurrency.length; i++){
    allCurrency[i].innerHTML = currencyNum.toString();
    }


