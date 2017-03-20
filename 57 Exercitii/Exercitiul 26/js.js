function calculate(){
        var balance=document.getElementById('money').value;
        var i=document.getElementById('apr').value;
        var j=parseInt(i)/365/100;
        var monthlyPayment=document.getElementById('monthly').value;


        var n=(-1/30) * (Math.log(1+(balance/monthlyPayment*(1-Math.pow((1+j),30))))/Math.log(1+j));
        var m=Math.ceil(n);

        document.getElementById('result').innerHTML="It will take you " +m+ " months to pay this shit!!!";
}