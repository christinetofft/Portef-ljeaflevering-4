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
            backgroundColor:"darkgreen"
        }],
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 16,
                        family: "Calibri"
                    }
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    callback: function (value) {
                        return value + "%";
                    },
                    font: {
                        size: 16,
                        family: "Calibri"
                    }
                },

            }
        }
    }
})

//Christine:
console.log(latinSalesByCountries)

let country = [];
let percentageOfSales = [];

latinSalesByCountries.forEach(sale => {
    country.push(sale.BillingCountry)
    percentageOfSales.push(sale.SalesPercentage)
})


const latinSalesChart = document.querySelector('#sales-by-countries').getContext('2d');
const barColors = ["#006AA7", "#FECC02", "#FECC02", "#FECC02", "#FECC02","#FECC02","#FECC02","#FECC02","#FECC02","#FECC02","#FECC02","#FECC02","#FECC02","#FECC02","#FECC02","#FECC02","#FECC02","#FECC02","#FECC02","#FECC02","#FECC02","#FECC02","#FECC02",]

new Chart(latinSalesChart, {
    type: "bar",
    data: {
        labels: country,
        datasets: [{
            backgroundColor: barColors,
            barThickness: 14,
            data: percentageOfSales
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Sverige har den største salgsprocent i Latin-musik:"
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                title: {
                    display: true,
                    text: "Salgsprocent"
                },
                ticks: {
                    callback: function (value) {
                        return value + "%";
                    }
                }
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
    },
});
