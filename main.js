console.log(genreSales)
let genres = [];
let salePercentages = [];
genreSales.forEach((genre) => {
    genres.push(genre.name)
    salePercentages.push(genre.TotalSales)
});

console.log(genres)
console.log(salePercentages)
const ctx = document.querySelector('#se-sales').getContext('2d');
const sverigeGenres = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: genres,
        datasets: [{
            data: salePercentages,
            label: "Procent af salg",
            backgroundColor:"green"
        }],
    },
    options: {
        plugins: {
            legend: {
                font: {
                    size: 100
                }
            }
        }
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