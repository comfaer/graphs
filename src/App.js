import './App.css';
import * as echarts from 'echarts'
import {useEffect} from 'react';
import data from './data';

function App() {

  useEffect( ()=> {

    let myChart = echarts.init(document.getElementById('main'));

    let option = {
        title: {
            text: 'Проекты в программах и вне программ',
            subtext: 'Сумма и процентное соотношение проектов, находящихся в программах и вне программ',
            top: 16, left: 16
        },
        tooltip: {
          width: 191,
          height: 189,
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: 23,
          top: 117,
          width: 728,
          height: 365,
          containLabel: true
        },
        legend: {
            data: ['В программе ЦП', 'Вне программ ЦП', 'В программе ИТ', 'Вне программ ИТ'],
            top: 528,
            left: 'center',
            icon: 'circle'
        },
        xAxis: [{
            type: 'category',
            data: ['Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь']
        }],
        yAxis: [{type: 'value'}],
        series:[
            {
                name: 'В программе ЦП',
                color: '#56B9F2',
                type: 'bar',
                stack: 'Ad',
                label: {
                  show: 'true',
                  position: 'top'
                },
                emphasis: {
                  focus: 'series'
                },
                data: data.filter(dat=> dat.name === 'В программе ЦП').map(m=>m.value)
              },
            {
              name: 'Вне программ ЦП',
              color: '#22C38E',
              type: 'bar',
              stack: 'Bd',
              label: {
                show: 'true',
                position: 'top'
              },
              emphasis: {
                focus: 'series'
              },
              data: data.filter(dat=> dat.name === 'Вне программ ЦП').map(m=>m.value)
          },

          {
            name: 'В программе ИТ',
            color: '#0078D2',
            type: 'bar',
            stack: 'Ad',
            label: {
              show: 'true',
              position: 'top'
            },
            data: data.filter(dat=> dat.name === 'В программе ИТ').map(m=>m.value),
            emphasis: {
              focus: 'series'
            }
          },

          {
            name: 'Вне программ ИТ',
            color: '#00724C',
            type: 'bar',
            stack: 'Bd',
            label: {
              show: 'true',
              position: 'top'
            },
            data: data.filter(dat=> dat.name === 'Вне программ ИТ').map(m=>m.value),
            emphasis: {
              focus: 'series'
            }
          },

        ]
    };
    myChart.setOption(option);
})
  return (<div id='main'></div>);
}

export default App;
