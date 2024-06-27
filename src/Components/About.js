import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart'; 
import { BarChart } from '@mui/x-charts/BarChart';



const pData = [2400, 1398, -9800, 3908, 4800, -3800, 4300];
const uData = [4000, -3000, -2000, 2780, -1890, 2390, 3490];

const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
];


const data = [
  { label: 'Group A', value: 400, color: '#0088FE' },
  { label: 'Group B', value: 300, color: '#00C49F' },
  { label: 'Group C', value: 300, color: '#FFBB28' },
  { label: 'Group D', value: 200, color: '#FF8042' },
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};





function About() {
  return (
    <div>
      <Container>
        <h1><b><span style={{color:'red'}}>A</span>bout</b></h1>
      <Row>
        <Col sm={3} className='five'>
        <div className='five1'>
<p className='kk'>Total Sales</p>
<h1 className='kk'>$19,626</h1>
<p className='kk'>+12,00% this week</p>
        </div>
        <Row>
    <Col sm={12}>
    <br/>
    <div className='five2'>
     
    <BarChart
      width={900}
      height={500}
      series={[
        { data: pData, label: 'pv', id: 'pvId', stack: 'stack1' },
        { data: uData, label: 'uv', id: 'uvId', stack: 'stack1' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
    </div>
    </Col>
   </Row>
        </Col>
        <Col sm={3} className='six'>
        <div className='six1'>
      <p className='kk'>Total Orders</p>
      <h1 className='kk'>3,290</h1>
      <p className='kk'>+3,00% thisweek</p>
</div>
        </Col>
        <Col sm={3} className='seven'>
        <div className='seven1'>
        <p className='kk'>Total Products</p>
      <h1 className='kk'>322</h1>
      <p className='kk'>+2,00% thisweek</p>
</div>
   
        </Col>
        <Col sm={3} className='eight'>
        <div className='eight1'>
         <h1 className='kk'>Recent month</h1>
        <p className='kk'>VALUES</p>
        <br/><br/>
        <div className='pp'>
        <PieChart
      series={[
        {
          outerRadius: 80,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 14,
        },
      }}
      {...sizing}
    />
    <br/><br/>
    <p>tolal sales     17%</p>
    <p>tolal Orders    25%</p>
    <p>total Products    25%</p>
    <p>total Income      33%</p>
    </div>
</div>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default About;