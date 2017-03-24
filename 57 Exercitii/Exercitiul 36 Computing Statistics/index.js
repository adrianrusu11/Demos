(function () {

    $(document).ready(function () {
        var z;
        var verifyNumber =/^(?=.*\d)[0-9]{1,}$/;
        var array = [];
        var a = setInterval(function () {
           z=prompt('Enter a number or press done');
           if (z == 'done') {
               clearInterval(a);
               console.log(array);
               console.log("MAX" + max(array));
               console.log("MIN" + min(array));
               console.log(mean(array));
           } else {
               if (verifyNumber.test(z)){
                   array.push(z);
               }

           }
       }, 200);


        var max=function (arr) {
            var maxNumber=arr[0];
            for (i=1; i<arr.length; i++){
                maxNumber=arr[i];
                if(maxNumber<arr[i]){
                    maxNumber=arr[i];
                }
            }
            return maxNumber;
        };

        var min=function (arr) {
            var minNumber=arr[0];
            for (i=1; i<arr.length; i++){
                minNumber=arr[i];
                if(minNumber>arr[i]){
                    minNumber=arr[i];
                }
            }
            return minNumber;
        };

        var mean = function (arr) {
            var total = 0;
            for (var i=0; i < arr.length; i++){
                total +=parseInt(arr[i]);
            }
            return total/arr.length;
        }
    });

})();