function calculateLoan() {
    const loanValue = document.querySelector("#loan-amount").value;
    const interestValue = document.querySelector("#interest-rate").value;
    const monthlyValue = document.querySelector("#months-pay").value;

    let interest = (loanValue * (interestValue * 0.01)) / monthlyValue;
    let monthsToPay = (loanValue / monthlyValue + interest).toFixed(2);
    monthsToPay = Number(monthsToPay).toLocaleString();

    document.querySelector("#monthly-payment").innerHTML = `Monthly Payment: ${monthsToPay}`
}