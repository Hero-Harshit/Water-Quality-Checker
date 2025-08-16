document.addEventListener("DOMContentLoaded", () => {
    
    let change_mode_btn = document.getElementById("change_mode_btn");
    let check_now_btn = document.getElementById("check_now_btn");
    let mode_modifier_settings_card = document.getElementById("mode_modifier_settings_card");
    let current_mode_span_text = document.getElementById("current_mode_span_text");
    const password = "Hero_Harshit_Is_Great";
    let theme_modifier_settings_card = document.getElementById("theme_modifier_settings_card");

    if (!sessionStorage.getItem("current_mode")) {
    sessionStorage.setItem ("current_mode", "Academia Authority");
    }

    function mode_modifier_password_check(event) {
    
        if (event.key === "Enter") {

            if (event.target.value === password) {

                alert("Mode Modified Successfully");
                sessionStorage.setItem("current_mode", "Sarcastic Syllabus Slayer");
                event.target.value = "";

            } else {

                alert("Wrong Password");
                event.target.value = "";

            } 

        }

    }

    function change_mode_btn_click() {

        if (!document.getElementById("password_field")) {

            let password_field = document.createElement("input");
            password_field.id = "password_field";
            password_field.style.textAlign = "center";
            password_field.placeholder = "Enter the password";
            mode_modifier_settings_card.appendChild(password_field);
            password_field.focus();

            password_field.addEventListener("keydown", mode_modifier_password_check)    

        }

    }

    function check_mode() {

        let current_mode = sessionStorage.getItem("current_mode");

        if (current_mode === "Sarcastic Syllabus Slayer") {

            current_mode_span_text.textContent = "Sarcastic Syllabus Slayer";

            let selector = '[data-mode="' + current_mode + '"]';

            let elements = document.querySelectorAll(selector);

            elements.forEach(element => {
                element.classList.remove("d-none");
            });

        }

    }

    change_mode_btn.addEventListener("click", change_mode_btn_click);


    check_now_btn.onclick = () => {

        let temp_value = document.getElementById("temp_input").value;
        let ph_value = document.getElementById("ph_input").value;
        let tds_value = document.getElementById("tds_input").value;
        let hardness_value = document.getElementById("hardness_input").value;
        let turbidity_value = document.getElementById("turbidity_input").value;
        let salinity_value = document.getElementById("salinity_input").value;
        let orp_value = document.getElementById("orp_input").value;
        let ec_value = document.getElementById("ec_input").value;
        let do_value = document.getElementById("do_input").value;

        window.location.href = "results.html";

    }


});