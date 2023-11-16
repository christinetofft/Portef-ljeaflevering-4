//Nikolaj
const genres = [];
const salePercentages = [];
genreSales.forEach((genre) => {
    const roundedNumbers = Math.round(genre.TotalSales)
    genres.push(genre.name)
    salePercentages.push(roundedNumbers)
});
const ctx = document.querySelector('#se-sales').getContext('2d');
const sverigeGenres = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: genres,
        datasets: [{
            data: salePercentages,
            backgroundColor:"darkgreen"
        }],
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return 'Procent: ' + tooltipItem.raw + '%';
                    }
                }
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

const country = [];
const percentageOfSales = [];

latinSalesByCountries.forEach(sale => {
    const roundedNumber = Math.round(sale.SalesPercentage)
    country.push(sale.BillingCountry)
    percentageOfSales.push(roundedNumber)
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
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return 'Procent: ' + tooltipItem.raw + '%';
                    }
                }
            }
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
