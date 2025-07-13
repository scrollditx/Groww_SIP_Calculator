// SIP - Input

let sipAmountInput = document.getElementById("");
let sipRateInput = document.getElementById("");
let sipYearsInput = document.getElementById("");

// Lumpsum - Input

let lumpAmountInput = document.getElementById("");
let lumpRateInput = document.getElementById("");
let lumpYearsInput = document.getElementById("");

// Display Details

let investedAmtDisplay = document.getElementById("");
let estReturnDisplay = document.getElementById("");
let totalValueDisplay = document.getElementById("");

// SIP Amount

let sipAmountValue = document.getElementById("");
let sipRateValue = document.getElementById("");
let sipYearsValue = document.getElementById("");

// Lumpsum Amount

let lumpAmountValue = document.getElementById("");
let lumpRateValue = document.getElementById("");
let lumpYearsValue = document.getElementById("");

// Chart Section Start

var ctx = document.getElementById("resultChart").getContext("2d");
var resultChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Invested Amount", "Estimated Returns"],
    datasets: [
      {
        label: "Investment Overview",
        data: [60, 40],
        backgroundColor: ["#000", "#255"],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// Chart Section Over
