/*
   Nedenstående kode primært skrevet af Nikolaj
   Christine og Emily har af og til måske hjulpet / skrevet med på en en linje eller to
 */

//Laver 2 tomme arrays som skal være data for barchartet
const genres = [];
const salePercentages = [];
//Iterrere igennem dataten, afrunder tallene og pusher dem ind i de forrige arrays
genreSales.forEach((genre) => {
    const roundedNumbers = Math.round(genre.TotalSales)
    genres.push(genre.name)
    salePercentages.push(roundedNumbers)
});
//Opsætter chart
const ctx = document.querySelector('#se-sales').getContext('2d');
const sverigeGenres = new Chart(ctx, {
    type: 'bar', //laver det til et bar chart
    data: {
        labels: genres, //tilføjer min x-akse data
        datasets: [{
            data: salePercentages, //tilføjer min y-akse data
            backgroundColor:"darkgreen" // Bar farven andæres til mørkegrøn
        }],
    },
    options: {
        plugins: {
            legend: {
                display: false //fjerne legend fra chart
            },
            tooltip: {
                callbacks: {
                    //Procent vises nør mussen hover over bars på siden
                    label: function(tooltipItem) {
                        return 'Procent: ' + tooltipItem.raw + '%';
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false // fjerner gridlines
                },
                ticks: {
                    //Ændre x-akse data tilerne så de står vandrette
                    minRotation: 0,
                    maxRotation: 0,
                    font: {
                        //ændre font size og family
                        size: 14,
                        family: "Calibri"
                    }
                }
            },
            y: {
                grid: {
                    display: false //fjerne gridlines
                },
                ticks: {
                    //Tilføjer % tegn til y-akse data
                    callback: function (value) {
                        return value + "%";
                    },
                    font: {
                        //ændre font size og family
                        size: 14,
                        family: "Calibri"
                    }
                },

            }
        }
    }
})



/*
   Nedenstående kode primært skrevet af Christine
   Emily og Nikolaj har af og til måske hjulpet / skrevet med på en en linje eller to
 */

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
        }]
    },
    options: {
        indexAxis: 'y', //Gør så det bliver en horizontal bar
        responsive: true, //--|
        maintainAspectRatio: false,
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
