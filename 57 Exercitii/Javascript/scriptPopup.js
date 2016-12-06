/**
 * Created by web on 11/30/2016.
 */


function calculate(){


    document.getElementById("billAmount").value;
    document.getElementById("tipRate").value;
    var tip="billAmount" / 100;
    document.getElementById("total").value=tip;

}

/**
 *var x=5;
 var y=10;
 var z=x*y;
 document.getElementById('total').value = z;


    var BillAmount=0;
    var TipRate=0;
    var tip = 0;
    var total=0;
    var BillAmount=0;
    document.getElementById("BillAmount").value;
    document.getElementById("TipRate").value;
    var tip=BillAmount / 100 * TipRate;
    var total=tip+BillAmount;
 *
 * var tipRate = 0;
var total = 0;
var billAmount = prompt("Cati bani?", "11.25");
var tipRate = prompt("Cat primeste(in procente)", "15");
var tip = billAmount * (tipRate / 100);
var billAmountRound = Math.round(billAmount*100)/100;
var tipRound=Math.round(tip*100)/100;
var total=billAmountRound+tipRound;
window.alert("Tip:"+tipRound+ "bani");
window.alert("Total:"+total+ "bani");
if (window.confirm("Mai vrei inca o data?"))
{
    window.confirm("Esti sigur? Bine...")
    location.reload();
}
else (window.alert("La Revedere"))*/