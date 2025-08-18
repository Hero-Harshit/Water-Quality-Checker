document.addEventListener("DOMContentLoaded", () => {

    // All UI Elements Are Taken Here

    let change_mode_btn = document.getElementById("change_mode_btn");
    let check_now_btn = document.getElementById("check_now_btn");
    let mode_modifier_settings_card = document.getElementById("mode_modifier_settings_card");
    let current_mode_span_text = document.getElementById("current_mode_span_text");
    let theme_modifier_settings_card = document.getElementById("theme_modifier_settings_card");
    let temp_input = document.getElementById("temp_input");
    let ph_input = document.getElementById("ph_input");
    let tds_input = document.getElementById("tds_input");
    let hardness_input = document.getElementById("hardness_input");
    let turbidity_input = document.getElementById("turbidity_input");
    let salinity_input = document.getElementById("salinity_input");
    let orp_input = document.getElementById("orp_input");
    let ec_input = document.getElementById("ec_input");
    let do_input = document.getElementById("do_input");
    let chlorine_input = document.getElementById("chlorine_input");
    let given_data_box = document.getElementById("given_data_box");
    let tc_checkbox = document.getElementById("tc_checkbox");
    let start_assessment_btn = document.getElementById("start_assessment_btn");
    let results_box = document.getElementById("results_box");
    let results_p1 = document.getElementById("results_p1");
    let results_p2 = document.getElementById("results_p2");








    // All Data Given By The User & The Processed Data

    let water_quality_data_parameters = {
        temp: null,
        ph: null,
        tds: null,
        hardness: null,
        turbidity: null,
        salinity: null,
        orp: null,
        ec: null,
        do: null,
        chlorine: null  
    };









    // Temperory Password For Changing Mode Until Node Js & Other Constants
    
    const password = "Hero_Harshit_Is_Great";


    const parameter_labels = {
        temp: "Temperature",
        ph: "pH Level",
        tds: "Total Dissolved Solids",
        hardness: "Hardness",
        turbidity: "Turbidity",
        salinity: "Salinity",
        orp: "Oxidation Reduction Potential",
        ec: "Electrical Conductivity",
        do: "Dissolved Oxygen",
        chlorine: "Chlorine"
    };


    const parameter_prefixes = {
        temp: "°C", 
        ph: "", 
        tds: "ppm", 
        hardness: "mg/L",
        turbidity: "NTU",
        salinity: "ppt",
        orp: "mV",
        ec: "µS/cm",
        do: "mg/L",
        chlorine: "mg/L"
    };











    // Setting Mode On First Time Site Open

    if (!sessionStorage.getItem("current_mode")) {
        sessionStorage.setItem("current_mode", "Academia Authority");
    }










    // Checking The Password For Mode Modifying

    function mode_modifier_password_check(event) {
        if (event.key === "Enter") {
            if (event.target.value === password) {
                alert("Mode Modified Successfully");
                sessionStorage.setItem("current_mode", "Sarcastic Syllabus Slayer");
                event.target.value = "";
                check_mode(); // Updating UI Immediately After Changing It
            } else {
                alert("Wrong Password");
                event.target.value = "";
            }
        }
    }










    // Adding Input Box When User Clicks on Change Mode Button 

    function change_mode_btn_click() {
        if (!document.getElementById("password_field")) {
            let password_field = document.createElement("input");
            password_field.id = "password_field";
            password_field.style.textAlign = "center";
            password_field.placeholder = "Enter the password";
            mode_modifier_settings_card.appendChild(password_field);
            password_field.focus();
            password_field.addEventListener("keydown", mode_modifier_password_check);
        }
    }










    // Checking Mode Each Time Page Refreshes & Hiding Ui/Ux Elements

    function check_mode() {
        let current_mode = sessionStorage.getItem("current_mode");
        if (current_mode_span_text) {
            current_mode_span_text.textContent = current_mode;
        }
        if (current_mode === "Sarcastic Syllabus Slayer") {
            let selector = '[data-mode="' + current_mode + '"]';
            let elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.classList.remove("d-none");
            });
        }
    }










    // Add event listeners only if the elements exist on the page
    if (change_mode_btn) {
        change_mode_btn.addEventListener("click", change_mode_btn_click);
    }










    
    








    // Result Checking Button & It's Function

    if (check_now_btn) {
        check_now_btn.onclick = () => {
            
            // Taking All The Data From Inputs & Storing It
            
            water_quality_data_parameters.temp = temp_input.value;
            water_quality_data_parameters.ph = ph_input.value;
            water_quality_data_parameters.tds = tds_input.value;
            water_quality_data_parameters.hardness = hardness_input.value;
            water_quality_data_parameters.turbidity = turbidity_input.value;
            water_quality_data_parameters.salinity = salinity_input.value;
            water_quality_data_parameters.orp = orp_input.value;
            water_quality_data_parameters.ec = ec_input.value;
            water_quality_data_parameters.do = do_input.value;
            water_quality_data_parameters.chlorine = chlorine_input.value;


            sessionStorage.setItem("waterData", JSON.stringify(water_quality_data_parameters));


            window.open("results.html", "_self");
        };
    }


    // Showing The User Provided Value Inside Result Multipurpose Box

    if (given_data_box) {

        let saved_data = sessionStorage.getItem("waterData");

        if (saved_data) {

            parsed_data = JSON.parse(saved_data);
            Object.assign(water_quality_data_parameters, parsed_data);
        }


        for (let key in water_quality_data_parameters) {

            let h6 = document.createElement("h6");
            h6.textContent = "→ " + parameter_labels[key] + " = " + water_quality_data_parameters[key] + parameter_prefixes[key];
            given_data_box.appendChild(h6);
            let br = document.createElement("br");
            given_data_box.appendChild(br);
            
            
        }


    }


    
    tc_checkbox.addEventListener("change", function() {
      if (this.checked) {
            start_assessment_btn.disabled = false; 
        } 
        else { 
                start_assessment_btn.disabled = true;
            }
    });

    function start_assessment() {
    let temp = parseFloat(water_quality_data_parameters.temp);
    let ph = parseFloat(water_quality_data_parameters.ph);
    let tds = parseFloat(water_quality_data_parameters.tds);
    let hardness = parseFloat(water_quality_data_parameters.hardness);
    let turbidity = parseFloat(water_quality_data_parameters.turbidity);
    let salinity = parseFloat(water_quality_data_parameters.salinity);
    let orp = parseFloat(water_quality_data_parameters.orp);
    let ec = parseFloat(water_quality_data_parameters.ec);
    let do_val = parseFloat(water_quality_data_parameters.do);
    let chlorine = parseFloat(water_quality_data_parameters.chlorine);

    // Clear previous results
    results_box.innerHTML = "";

    results_p1.classList.add("d-none");
    results_p2.classList.remove("d-none");

    // helper function to add results
    function addResult(parameter, verdict, suggestion) {
        let p = document.createElement("p");
        p.innerHTML = `<b>${parameter}:</b> ${verdict}<br><i>Suggestion:</i> ${suggestion}`;
        results_box.appendChild(p);
    }

    // Temperature (10–35 °C safe)
    if (temp < 10 || temp > 35) {
        addResult("Temperature", "❌ Unsafe: Not suitable for drinking.", "Let the water stabilize to room temperature (store for some hours) before use.");
    } else {
        addResult("Temperature", "✅ Safe", "No treatment needed.");
    }

    // pH (6.5–8.5 safe)
    if (ph < 6.5 || ph > 8.5) {
        addResult("pH", "❌ Unsafe: Outside safe range (6.5–8.5).", "Add lemon/vinegar to lower pH, or baking soda/lime to raise it. Kits are available.");
    } else {
        addResult("pH", "✅ Safe", "No treatment needed.");
    }

    // TDS (< 500 ppm safe)
    if (tds > 500) {
        addResult("TDS", "❌ Unsafe: High TDS (> 500 ppm).", "Use a Reverse Osmosis (RO) filter to reduce dissolved solids.");
    } else {
        addResult("TDS", "✅ Safe", "No treatment needed.");
    }

    // Hardness (< 300 mg/L safe)
    if (hardness > 300) {
        addResult("Hardness", "❌ Unsafe: Too hard (> 300 mg/L).", "Use a water softener or boil & cool before filtering.");
    } else {
        addResult("Hardness", "✅ Safe", "No treatment needed.");
    }

    // Turbidity (< 5 NTU safe)
    if (turbidity > 5) {
        addResult("Turbidity", "❌ Unsafe: High turbidity (> 5 NTU).", "Filter with sand/ceramic filter or let it settle and decant. Boil afterward.");
    } else {
        addResult("Turbidity", "✅ Safe", "No treatment needed.");
    }

    // Salinity (< 0.5 ppt safe)
    if (salinity > 0.5) {
        addResult("Salinity", "❌ Unsafe: Too salty.", "Use desalination (RO or distillation).");
    } else {
        addResult("Salinity", "✅ Safe", "No treatment needed.");
    }

    // ORP (> 250 mV safe)
    if (orp < 250) {
        addResult("ORP", "❌ Unsafe: Too low (< 250 mV).", "Disinfect (boiling, UV, or chlorine tablets).");
    } else {
        addResult("ORP", "✅ Safe", "No treatment needed.");
    }

    // EC (< 1500 µS/cm safe)
    if (ec > 1500) {
        addResult("Conductivity", "❌ Unsafe: High EC.", "Use Reverse Osmosis (RO) to reduce ion concentration.");
    } else {
        addResult("Conductivity", "✅ Safe", "No treatment needed.");
    }

    // Dissolved Oxygen (≥ 5 mg/L safe)
    if (do_val < 5) {
        addResult("Dissolved Oxygen", "❌ Unsafe: Too low (< 5 mg/L).", "Aerate by shaking, bubbling, or pouring between containers.");
    } else {
        addResult("Dissolved Oxygen", "✅ Safe", "No treatment needed.");
    }

    // Chlorine (< 4 mg/L safe)
    if (chlorine > 4) {
        addResult("Chlorine", "❌ Unsafe: Too high (> 4 mg/L).", "Let sit uncovered, boil, or use activated carbon filter.");
    } else {
        addResult("Chlorine", "✅ Safe", "No treatment needed.");
    }
}


    
    if (start_assessment_btn) {
        start_assessment_btn.addEventListener("click", start_assessment);
    }

    // Running The Check Mode Fuction Each Time On Page Reload

    check_mode();
});
