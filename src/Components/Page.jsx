import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import data from './Wine-Data.json'

function Page() {
  let [data1, setData1] = useState([]);
  let [data2, setData2] = useState([]);
  useEffect (() =>{
  setData1(data.map((item) => {
      return ([item['Alcohol'],item['Malic Acid']])
  }))
  setData2(data.map((item) => {
    return ([item['Color intensity'],item['Hue']])
}))
  }, [])
  // console.log("data1 : ",data1)
  // console.log("data2 : ",data2)
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
