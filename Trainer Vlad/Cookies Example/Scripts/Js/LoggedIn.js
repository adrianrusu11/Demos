$('.login-button').on('click', function () {
    var u=$('username').val();
    var p=$('password').val();
    if(verifyLogin(u,p)){
        createCookie("username",u,1 );

        location.href="../LoggedIn.html";
    }
    else{
        alert("Invalid credentials");
    }

});



var verifyLogin=function (u,p) {
    if(u=="admin" && p=="admin"){
        return true;
    }
        return false;
};

var verifyCookie = function () {
    if(readCookie("username") !=null){
        return true;
    }
    return false;
};

if (!verifyCookie()){
    location.href="../CookiesFolosite.html";
}
else{
    $('#username').html(readCookie("username"));
}

$(window).on('load', function () {
    $('#log-out').on('click', function () {
        eraseCookie("username");
        location.href="index.html";
    });
});