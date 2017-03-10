$(document).ready(function () {
    function toggleDivByClick(item) {
        var number=item.innerHTML;
        var rows=$('.item-row');
        number=parseInt(number)-1;
        $(rows[number]).toggle();
    }
        $('.btn').on('click', function () {
            toggleDivByClick(this);
        });


        $('.special1').on('click', function () {
        $(this).prop( "disabled", true );
        $('.special2').prop( "disabled", false );
        $('.item-row').show();
    });

    $('.special2').on('click', function () {
        $(this).prop( "disabled", true );
        $('.special1').prop( "disabled", false );
        $('.item-row').hide();
    });
    function colorDiv() {
        var rows = $('.item-row');
        var colorsArray = ['red','orangered','black','green','yellow'];
        for(var i = 0 ; i < rows.length ; i++ ) {
            rows[i].style.backgroundColor=colorsArray[i];
        }
    }
    colorDiv();
    
    function createForm() {
        var formWrapper=document.createElement('form');
        var divWrapper=document.createElement('div');
        divWrapper.setAttribute('class', 'firstDiv div-wrapper');
        var divWrapper2=document.createElement('div');
        divWrapper2.setAttribute('class', 'secondDiv div-wrapper');
        var input10=document.createElement('input');
        var input11=document.createElement('input');
        var input20=document.createElement('input');
        var input21=document.createElement('input');
        var button=document.createElement('button');
        button.setAttribute('class', 'btn btn-primary');




        divWrapper.append(input10);
        divWrapper.append(input11);
        divWrapper2.append(input20);
        divWrapper2.append(input21);
        divWrapper2.append(button);
        formWrapper.append(divWrapper);
        formWrapper.append(divWrapper2);
        document.body.append(formWrapper);
        addEventsOnForm();
    }

    createForm();
    function addEventsOnForm() {
       var inputs=document.getElementsByClassName('form-control');
       inputs[1].addEventListener('keyup', function () {
           document.getElementsByClassName('secondDiv')[0].style.display='block';
       });
    }
});
