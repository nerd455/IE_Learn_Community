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