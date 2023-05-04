window.onload = function() {
    setTimeout(function() {
        const splash = document.getElementById('splash');
        splash.style.display = "none";
    }, 2000);

    const form = document.getElementById("login-form");
    const userTypeRadios = document.querySelectorAll('input[name="user-type"]');
    const loginButton = document.querySelector('button[type="submit"]');

    let selectedUserType = "staff";

    userTypeRadios.forEach(radio => {
        radio.addEventListener('change', event => {
            selectedUserType = event.target.value;
            console.log(selectedUserType);
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let loginUrl = "";

        if (selectedUserType === "staff") {
            loginUrl = "staff.html";
        } else if (selectedUserType === "learner") {
            loginUrl = "learner.html";
        }

        window.location.href = loginUrl;
    });
};
