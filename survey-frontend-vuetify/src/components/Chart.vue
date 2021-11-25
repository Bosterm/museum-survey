<template>
  <div>
    <apexchart
      width="500"
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
        colors: ["#546E7A", "#33b2df", "#d4526e", "#13d8aa"],
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