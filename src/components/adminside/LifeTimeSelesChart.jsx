import { XAxis, YAxis, CartesianGrid, Line, LineChart } from 'recharts';

const LifeTimeSalesChart = () => {
  const data = [
    { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 350, pv: 2100, amt: 2200 },
    { name: 'Mar', uv: 300, pv: 2000, amt: 2000 },
    { name: 'Apr', uv: 320, pv: 2050, amt: 2100 },
    { name: 'May', uv: 290, pv: 2100, amt: 2200 },
    { name: 'Jun', uv: 310, pv: 2150, amt: 2300 },
    { name: 'Jul', uv: 280, pv: 2200, amt: 2400 },
    { name: 'Aug', uv: 350, pv: 2250, amt: 2500 },
    { name: 'Sep', uv: 400, pv: 2300, amt: 2600 },
    { name: 'Oct', uv: 420, pv: 2350, amt: 2700 },
    { name: 'Nov', uv: 410, pv: 2400, amt: 2800 },
    { name: 'Dec', uv: 450, pv: 2450, amt: 2900 },
  ];


  return (
    <div>
      <LineChart
        width={500}
        height={450}
        data={data}
        backgroundColor="#F2C94C" 
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" stroke="#F2C94C" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        <Line type="monotone" dataKey="amt" stroke="#ff7300" />
      </LineChart>
    </div>
  );
};

export default LifeTimeSalesChart;