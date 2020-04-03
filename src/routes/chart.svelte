<script>
  import Chart from 'svelte-frappe-charts';

  let data = {
    labels: ['-6d', '-5d', '-4d', '-3d', '-2d', '-1d', 'Today'],
    datasets: [
      {
        values: [82, 102, 121, 130, 146, 183, 212],
      }
    ],
   	height: 600,
    colors: ["red"],
  	title: "My Awesome Chart"
  };
</script>

<Chart
  data={data}
  type="line"
  colors={["red"]}
  lineOptions={{ hideDots: 0, dotSize: 8, hideLine: 0, }},
  axisOptions={{ xAxisMode: 'tick', default: 'span' }},
  />