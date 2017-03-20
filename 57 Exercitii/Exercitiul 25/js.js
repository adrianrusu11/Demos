(function () {
    function passwordValidator(value) {
        console.log(value);
        var regexp = /^(?=.*\d)(?=.*[!@#\$%\^\&*\)\(+=._-])(?=.*[a-z])[0-9a-z!@#\$%\^\&*\)\(+=._-]{8,}$/;
        if(regexp.test(value)){
            document.getElementById('message').innerHTML='Very Strong';
            return false;
        }

        var regexp=/^[a-zA-Z0-9]*$/;

        if (regexp.test(value)){
            document.getElementById('message').innerHTML='Weak!!!';
            return false;
        }

        var regexp=/^(?=.*\d)(?=.*[a-z])[0-9a-z!@#\$%\^\&*\)\(+=._-]{8,}$/;
        if (regexp.test(value)){
            document.getElementById('message').innerHTML='Strong!!!';
        }
    }

    document.getElementById('triggerValidation').addEventListener('click', function(){
            var value=document.getElementById('password').value;
            passwordValidator(value);
        });

    document.getElementById('password').addEventListener('keyup', function(){
        passwordValidator(this.value);
    });
})();
