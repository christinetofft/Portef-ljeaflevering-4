console.log(genreSales)

const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2018","2019","2020","2021"],
        datasets: [{
            data: [1000, 820, 600, 460],
            label: "Denmark"
        }],
    }
})

console.log(latinSalesByCountries)

let country = [];
let percentageOfSales = [];
latinSalesByCountries.forEach(sale => {
    country.push(sale.BillingCountry)
    percentageOfSales.push(sale.SalesPercentage)
})

const barColors = ["red"]
const latinSalesChart = document.querySelector('#sales-by-countries').getContext('2d');

new Chart(latinSalesChart, {
    type: "bar",
    data: {
        labels: country,
        datasets: [{
            backgroundColor: barColors,
            data: percentageOfSales
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true
    },}
);