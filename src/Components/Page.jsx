import React from 'react';
import ReactECharts from 'echarts-for-react';
import data from './Wine-Data.json'

let data1 = [];
let data2 = [];
data1.push(['Alcohol', 'Malic Acid'])
for(let i = 0; i < data.length; i++) {
  data1.push([data[i]['Alcohol'],(data[i]['Malic Acid'])])
  data2.push([data[i]['Color intensity'],data[i]['Hue']])
}
// console.log("Data 1", data1);
// console.log("Data 2", data2);
function Page() {

  const options1 = {
    grid: { left: '10%', top: '15%', width: '63%', height: '63%'},
    xAxis:{
      type: 'value',
        name: 'Color Intensity',
    },
    yAxis:{
      type: 'value',
      name:"Hue",
    },
    series:[
      {
        symbolSize: 5,
        data: data2,
        type: 'scatter',
      }
    ]
  };
  let options2 = {
    dataset: {
      source: data1
    },
    grid: { left: '10%', top: '10%', width: '63%', height: '63%' },
    xAxis: { 
      name: 'Alcohol',
      min: 0,
      max: 4,
    },
    yAxis: { 
      type: 'value', 
      name:'Malic Acid',
      min: 0,
      max: 20  
    },
    series: [
      {
        type: 'bar',
        encode: {
          // Map the "Alcohol" column to X axis.
          x: 'Alcohol',
          // Map the "Malic Acid" column to Y axis
          y: 'Malic Acid'
        }
      }
    ]
  };
  return <div>
    <ReactECharts option={options1} />
    <ReactECharts option={options2} />
    
  </div>;
};

export default Page;