function dataGathering() {
    var credit_value = document.getElementById("credit_range").value;
    var days_value = document.getElementById("days_range").value;
    var credit_text = document.getElementById("credit_text");
    var cash_input = document.getElementById("cash_input");

    credit_text.value = credit_value;
    cash_input.innerHTML = credit_value + " грн";

    creditValue(credit_value, days_value);
    daysValue(days_value);
}

function creditValue(cash, days) {
    var cash_output = document.getElementById("cash_output");
    var percentage = cash * 0.015;
    var credit_value = Math.ceil(cash * 1 + days * percentage);

    cash_output.innerHTML = credit_value + " грн";

    renewal(percentage, days);
}

function daysValue(days) {
    var days_text = document.getElementById("days_text");
    days_text.value = days;

    var today = new Date();

    today.setDate(today.getDate() + days * 1);
    today.setMonth(today.getMonth() + 1 * 1);

    pay_day.innerHTML = today.getDate() + "." + today.getMonth() + "." + today.getFullYear();

}

function renewal(percentage, days) {
    var seven_day = document.getElementById("7day");
    var fifteen_day = document.getElementById("15day");
    var thirty_day = document.getElementById("30day");

    seven_day.innerHTML = Math.ceil(percentage * 7) + " грн";
    fifteen_day.innerHTML = Math.ceil((percentage * 15) - ((percentage * 15) * 0.1)) + " грн";
    thirty_day.innerHTML = Math.ceil((percentage * 30) - ((percentage * 30) * 0.2)) + " грн";

    //на этой странице калькулятор не нужен, вывод значений для фиксированного количества дней;
    //    if (days == 30) {
    //        var renewal_cost = percentage * days;
    //        var discount = renewal_cost * 0.2;
    //        return renewal_cost - discount;
    //    }
    //    if (days >= 15) {
    //        var renewal_cost = percentage * days;
    //        var discount = renewal_cost * 0.1;
    //        return renewal_cost - discount;
    //    } else {
    //        return percentage * days;
    //    }
}

function valueChange() {
    var credit_value = document.getElementById("credit_range");
    var credit_text = document.getElementById("credit_text").value;
    var days_value = document.getElementById("days_range");
    var days_text = document.getElementById("days_text").value;
    credit_value.value = credit_text * 1;
    days_value.value = days_text * 1;
    dataGathering();
}
