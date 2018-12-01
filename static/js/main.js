function mentor_btn() {
    var m = document.getElementById("mentor");
    var s = document.getElementById("student");
    if (m.className === "btn_2") {
        m.className = "btn_1"
        s.className = "btn_2"
    } else {
        m.className = "btn_2"
        s.className = "btn_1"
    }
    document.getElementById("signup_val").value = "mentor";
}

function stu_btn() {
    var m = document.getElementById("mentor");
    var s = document.getElementById("student");
    if (s.className === "btn_1") {
        s.className = "btn_2"
        m.className = "btn_1"
    } else {
        s.className = "btn_1"
        m.className = "btn_2"
    }
    document.getElementById("signup_val").value = "student";
}

function show_pas_up() {
    var e = document.getElementById("eye_signup");
    var i = document.getElementById("signup_pass");
    if (e.className === "fa fa-eye") {
        e.className = "fa fa-eye-slash";
        i.setAttribute('type', 'text');
    } else {
        e.className = "fa fa-eye";
        i.setAttribute('type', 'password');
    }
}

function show_pas_in() {
    var e = document.getElementById("eye_signin");
    var i = document.getElementById("signin_pass");
    if (e.className === "fa fa-eye") {
        e.className = "fa fa-eye-slash";
        i.setAttribute('type', 'text');
    } else {
        e.className = "fa fa-eye";
        i.setAttribute('type', 'password');
    }
}

// snackbar
function snackbar_show() {
    var x = document.getElementById("snackbar");
    x.className = "show";
}

function snackbar_hide() {
    var x = document.getElementById("snackbar");
    x.className = x.className.replace("show", "");
}

// event listeners for snackbar
document.getElementById("signin_u").addEventListener("focus", snackbar_show);
document.getElementById("signin_u").addEventListener("focusout", snackbar_hide);
document.getElementById("signup_u").addEventListener("focus", snackbar_show);
document.getElementById("signup_u").addEventListener("focusout", snackbar_hide);
document.getElementById("signin_pass").addEventListener("focus", snackbar_show);
document.getElementById("signin_pass").addEventListener("focusout", snackbar_hide);
document.getElementById("signup_pass").addEventListener("focus", snackbar_show);
document.getElementById("signup_pass").addEventListener("focusout", snackbar_hide);