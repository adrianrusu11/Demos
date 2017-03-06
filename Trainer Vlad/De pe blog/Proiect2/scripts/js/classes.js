var User=function () {
    var username;
    var password;
    var age;

    this.verifyUsername = function () {
        if(this.username == "admin")
            return true;
        return false;
    };
    this.verifyPassword = function () {
        if(this.password == "admin")
            return true;
        return false;
    };
};





