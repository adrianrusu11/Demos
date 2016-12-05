/**
 * Created by web on 11/30/2016.
 */
function calculate(){
    var billAmount = 0;
    var tip = 0;
    var tipRate = 0;
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
        else (window.alert("La Revedere"))

}