import Chart from "react-apexcharts";
import data from "../stores/example.json";

data.Data.forEach(() => {});

const LineChart = (props) => {
  return (
    <Chart
      type="line"
      width="100%"
      height="220"
      series={[
        {
          name: "Total Submission",
          data: [],
        },
      ]}
      options={{
        stroke: {
          curve: "smooth",
        },
        grid: {
          show: false,
        },
        labels: [],
        markers: {
          size: 5,
          colors: "#4e79ff",
          strokeColors: "#fff",
          strokeWidth: 2,
          strokeOpacity: 0.9,
          strokeDashArray: 0,
          fillOpacity: 1,
          discrete: [],
          shape: "circle",
          radius: 2,
          offsetX: 0,
          offsetY: 0,
          onClick: undefined,
          onDblClick: undefined,
          showNullDataPoints: true,
          hover: {
            size: undefined,
            sizeOffset: 3,
          },
        },
        tooltip: {
          theme: "dark",
        },
        chart: {
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          labels: {
            style: {
              colors: "#68696a",
            },
            offsetY: 0,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#68696a",
            },
            offsetX: -10,
          },
        },
      }}
    />
  );
};

export default LineChart;
