(function () {
   var link=window.location.href;
   console.log(link);
   var y = link.split('?');
   console.log(y[1]);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
        if(xhr.readyState == XMLHttpRequest.DONE){
            inputPlanet(xhr.responseText);
        }
    };
    xhr.open('GET', 'http://swapi.co/api/planets/'+ y[1], true);
    xhr.send();


    function inputPlanet(){
        console.log(value);
    }
})();
