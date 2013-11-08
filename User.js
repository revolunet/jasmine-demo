
// dummy user management
var User = function() {
    var username = null,
        usernameRe = /^[^-!"'()\s]{8,20}$/;

    this.setUsername = function (value) {
        // check username with a simple regex
        if (!value.match(usernameRe)) {
            throw new Error('invalid username');
        }
        // check username is available
        if (this.usernameAvailable(value)) {
            username = value;
            return true;
        } else {
            throw new Error('username not available');
        }
    };

    this.usernameAvailable = function(username) {
        if (username.toLowerCase()==='administrator') {
            return false;
        }
        return true;
    };

};
