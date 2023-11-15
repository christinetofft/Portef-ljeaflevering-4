//Nikolaj
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
                    minRotation: 0,
                    maxRotation: 0,
                    font: {
                        size: 14,
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
                        size: 14,
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
const barColors = ["#00308F", "#ffe98b", "#ffe98b", "#ffe98b", "#ffe98b","#ffe98b","#ffe98b","#ffe98b","#ffe98b","#ffe98b","#ffe98b","#ffe98b","#ffe98b","#ffe98b","#ffe98b","#ffe98b","#ffe98b","#ffe98b","#ffe98b","#ffe98b","#ffe98b","#ffe98b","#ffe98b",]

new Chart(latinSalesChart, {
    type: "bar",
    data: {
        labels: country,
        datasets: [{
            backgroundColor: barColors,
            barThickness: 14,
            data: percentageOfSales,
            borderColor: 'black',
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    callback: function (value) {
                        return value + "%";
                    },
                    font: {
                        weight: "bold",
                    }
                }
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: function(context) {
                        if (context.index === 0)
                        return {
                            weight: "bold"
                        }
                    }

                }
            },
        },
    },
});
