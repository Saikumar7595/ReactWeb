import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BarChart } from '@mui/x-charts/BarChart';
import SearchIcon from '@mui/icons-material/Search';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';



















const data = [
  { value: 5, label: 'A' },
  { value: 10, label: 'B' },
  { value: 15, label: 'C' },
  { value: 20, label: 'D' },
];

const size = {
  width: 400,
  height: 200,
};


const years = [
  new Date(1990, 0, 1),
  new Date(1991, 0, 1),
  new Date(1992, 0, 1),
  new Date(1993, 0, 1),
  new Date(1994, 0, 1),
  new Date(1995, 0, 1),
  new Date(1996, 0, 1),
  new Date(1997, 0, 1),
  new Date(1998, 0, 1),
  new Date(1999, 0, 1),
  new Date(2000, 0, 1),
  new Date(2001, 0, 1),
  new Date(2002, 0, 1),
  new Date(2003, 0, 1),
  new Date(2004, 0, 1),
  new Date(2005, 0, 1),
  new Date(2006, 0, 1),
  new Date(2007, 0, 1),
  new Date(2008, 0, 1),
  new Date(2009, 0, 1),
  new Date(2010, 0, 1),
  new Date(2011, 0, 1),
  new Date(2012, 0, 1),
  new Date(2013, 0, 1),
  new Date(2014, 0, 1),
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
  new Date(2018, 0, 1),
];

const FranceGDPperCapita = [
  28129, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645, 30341.807,
  31323.078, 32284.611, 33409.68, 33920.098, 34152.773, 34292.03, 35093.824,
  35495.465, 36166.16, 36845.684, 36761.793, 35534.926, 36086.727, 36691, 36571,
  36632, 36527, 36827, 37124, 37895, 38515.918,
];

const UKGDPperCapita = [
  26189, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 28472.248, 29259.764,
  30077.385, 30932.537, 31946.037, 32660.441, 33271.3, 34232.426, 34865.78,
  35623.625, 36214.07, 36816.676, 36264.79, 34402.36, 34754.473, 34971, 35185, 35618,
  36436, 36941, 37334, 37782.83, 38058.086,
];

const GermanyGDPperCapita = [
  25391, 26769.96, 27385.055, 27250.701, 28140.057, 28868.945, 29349.982, 30186.945,
  31129.584, 32087.604, 33367.285, 34260.29, 34590.93, 34716.44, 35528.715,
  36205.574, 38014.137, 39752.207, 40715.434, 38962.938, 41109.582, 43189, 43320,
  43413, 43922, 44293, 44689, 45619.785, 46177.617,
];

const lineChartsParams = {
  series: [
    {
      label: 'French GDP per capita',
      data: FranceGDPperCapita,
      showMark: false,
    },
    {
      label: 'German GDP per capita',
      data: GermanyGDPperCapita,
      showMark: false,
    },
    {
      label: 'UK GDP per capita',
      data: UKGDPperCapita,
      showMark: false,
    },
  ],
  width: 650,
  height: 400,
};

const yearFormatter = (date) => date.getFullYear().toString();
const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];


function Home() {
  return (
    <div>

<h1 id='nm'> <b><span style={{color:'red'}}>A</span>nalytics</b></h1>
<SearchIcon id='mm'/><input type='text' placeholder='search' id='in'/>

      <br/>
      <Container>
        <Row>
          <Col sm={6} className='one'>
          <div className='child1'>
          <BarChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv', id: 'pvId' },
        { data: uData, label: 'uv', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />

          </div>
          </Col>
          <Col sm={6} className='two'>
          <Row>
            <Col sm={6}className='two1'>
            <div className='child11'>
            <p id='ll'>Total Revenue</p>
           <h1 id='ll'>$ 4,562</h1>
        <p id='ll'>+12%  vs preview 28 days</p>



            </div>
            
             </Col>
            <Col sm={6} className='two2'>
            <div className='child12'>
           
<p id='ll'>Total Visitors</p>
<h1 id='ll'>$2,562</h1>
<p id='ll'>+4% Vs preview, 28 days</p>

              
            </div>
            
            
            </Col>

          </Row>
          <br/>

<Row>
            <Col sm={6}className='two3'>
            <div className='child13'>
     <p id='ll'>Total Transactions</p>
  <h1 id='ll'>$2,262</h1>
<p id='ll'>-0.89% vs preview 28days</p>

            </div>
            
             </Col>
            <Col sm={6} className='two4'>
            <div className='child14'>
            <p id='ll'>Total Products</p>
            <h1 id='ll'>$2,100</h1>
            <p id='ll'>+2% vs preview 28 days</p>


              
            </div>
            
            
            </Col>

          </Row>
          

          </Col>
        </Row>
        <Row>
          <Col sm={6} className='three'>
          <div className='child15'>
          <LineChart
      {...lineChartsParams}
      xAxis={[{ data: years, scaleType: 'time', valueFormatter: yearFormatter }]}
      series={lineChartsParams.series.map((series) => ({
        ...series,
        valueFormatter: (v) => (v === null ? '' : currencyFormatter(v)),
      }))}
    />
          </div>
          </Col>
          <Col sm={6} className='four'>
          <br/>
          <div className='sl'>
           
          <Row>
            
            <Col sm={6} className='four1'>
          <div className='child17'>
            <br/>
       <h1> Clothing(25%)</h1>
       <p>1,348 category products</p><br/>
      
       <h1> BOdy(35%)</h1>
       <p>1,348 category products</p><br/>
       <h1> Spotswear(25%)</h1>
       <p>1,348 category products</p>
      
          </div>
          </Col>
          <Col sm={6} className='four2'>
          <div className='child18'>
            <br/>  <br/>
          <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    /> 
          </div>
          </Col>
          </Row>
          </div>
          </Col>
         
        </Row>
      </Container>
     
      </div>
  )
}

export default Home