import React from 'react'
import moment from 'moment'
import styles from './Mycomponents.module.css'
import { useSelector } from 'react-redux';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

 
  const current = new Date();
  const p = `${current.getDate()-3}/${current.getMonth()+1}`;
  const q = `${current.getDate()-2}/${current.getMonth()+1}`;
  const r = `${current.getDate()-1}/${current.getMonth()+1}`;
  const s = `${current.getDate()}/${current.getMonth()+1}`;
  const t = `${current.getDate()+1}/${current.getMonth()+1}`;
  const u = `${current.getDate()+2}/${current.getMonth()+1}`;
  const v = `${current.getDate()+3}/${current.getMonth()+1}`;


  
    //   const y=20
   
    //  console.log(y)
  
  
 
  const ok=`${moment().format("dddd, MMM D")}`
  const ok1=`${moment().format('dddd')}`
  var x=7
  // function addDays(date, days) {
  //   var result = new Date(date);
  //   result.setDate(result.getDate() + days);
  //   return result;
  // }
  // const result1=addDays(date, days)

const Barchart = () => {
  // const Data=useSelector((state)=>state.information);
  const y=50  
  // Data.map((item)=>{
  //   console.log(item.second)
  //    y=item.second
   
// })

const data = [
  {
    name: p,
    work: 0,
  },
  {
    name: q,
    work: 3,
  },
  {
    name: r,
    work: 2,  
  },
  {
    name: s,
    work: y,
  },
  {
    name: t,
    work: 0,
  },
  {
    name: u,
    work: 0,
  },
  {
    name: v,
    work: 0,
  },
];
  return (
    <div className={s}>
    <div className={styles.upperDiv}>
      <div className={styles.totalDiv}>Total:</div>
      <div className={styles.billDiv}>08:44:21</div>
      <div className={styles.totalDiv}>Billable:</div>
      <div className={styles.billDiv}>08:44:21</div>
      <div className={styles.totalDiv}>Amount:</div>
      <div className={styles.billDiv}>0.00 USD</div>
    </div>
    <BarChart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" tickCount={"8"} padding={{ top: 100 }}  />
    <YAxis  tickCount={x} />
    {/* <YAxis padding={{ top: 10 }} />
    <YAxis padding={{ bottom: 20 }} />
    <YAxis padding={{ top: 20, bottom: 20 }} /> */}
    <YAxis tick={false} />
    <YAxis />
    <Tooltip />
    <Legend />
    {/* <Bar dataKey="pv" fill="#8884d8" /> */}
    <Bar dataKey="work" fill="#82ca9d" />
  </BarChart>
  {/* <h1>Current date is {date}</h1>
  <h1>{moment().format('dddd')}</h1>
  <h1>{ok1}</h1> */}
  </div>
  )
}

export default Barchart