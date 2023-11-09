let UserInput = document.querySelector("#date");
let calcDays = document.querySelector("#calc_days");
let calcMonths = document.querySelector("#calc_months");
let calcYears = document.querySelector("#calc_years");


UserInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let userDOB = new Date(UserInput.value);

    let DOB_date = userDOB.getUTCDate();  
    let DOB_month = userDOB.getUTCMonth() + 1;
    let DOB_year = userDOB.getUTCFullYear();

    let todayDate = new Date();

    let current_date = todayDate.getUTCDate();  
    let current_month = todayDate.getUTCMonth() + 1;
    let current_year = todayDate.getUTCFullYear();

    let calc_day, calc_month, calc_year;

    calc_year = current_year - DOB_year;

    if (current_month >= DOB_month) {
        calc_month = current_month - DOB_month;
    } else {
        calc_year--;
        calc_month = 12 + current_month - DOB_month;
    }

    if (current_date >= DOB_date) {
        calc_day = current_date - DOB_date;
    }
    else {
        calc_month--;
        calc_day = getDaysInMonth(current_year, current_month) + current_date - DOB_date;
    }

    if (calc_month < 0) {
        calc_month = 11;
        calc_year--;
    }

    calcYears.innerText = calc_year;
    calcMonths.innerText = calc_month;
    calcDays.innerText = calc_day;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
