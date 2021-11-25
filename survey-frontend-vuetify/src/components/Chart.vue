<template>
  <div>
    <apexchart
      width="700"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "Chart",
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            distributed: true,
          },
        },
        xaxis: {
          categories: [
            "Blue and Black",
            "White and Gold",
            "Blue and Brown",
            "Something Else",
          ],
        },
        colors: ["#4529D8", "#BEAA39", "#919ACA", "#000"],
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: ["#07060B", "#E5E7AE", "#785121"], // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: [],
          },
        },
        legend: {
          show: false,
        },
      },
      series: [
        {
          name: "series-1",
          data: [13, 10, 5, 4],
        },
      ],
    };
  },
};
</script>