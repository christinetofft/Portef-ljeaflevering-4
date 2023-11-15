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