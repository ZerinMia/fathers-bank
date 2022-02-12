//button even handdler
document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;
    console.log(userEmail);
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //check email and password otherwise it will not enter
    if (userEmail == 'sontan@gmail.com' && userPassword == 'secret') {
        window.location.href = 'bancking.html'
    }

})
