import React, { useEffect } from 'react'
import styles from './timetracker.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BiDollar} from 'react-icons/bi';
import ProjectinputDivpop from './ProjectinputDivpop';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import get_data from '../../Redux/action';
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';
import *as types from "../../Redux/actionType"
import Bar from './Bar';

const TImetracker = () => {
  const Data=useSelector((state)=>state.information);
  const [count,setCount]=useState(0)
  const disptach=useDispatch()
  const [seconds,setSeconds]=useState(0);
  const [minute,setMinute]=useState(0);
  const [hour,setHour]=useState(0);
  const [project_btn,setProject_btn]=useState(false);
  const [toggle_timer_button,setToggle_timer_button]=useState(false);
  const [a,setA]=useState("Project");
  const [avalue,setAvalue]=useState(false);
  const [task,setTask]=useState("")
  
  const handleAddProject=()=>{
   
    setProject_btn(!project_btn)
   
  }
 
  const changle_timer_button_color=()=>{
   
     setToggle_timer_button(!toggle_timer_button);
     if(toggle_timer_button){
   
 
   
     }
    
  }
  // console.log(v)
  
 var timer;
 
  useEffect(()=>{
   
    // console.log(v) 
    if(toggle_timer_button){
     
      timer=setInterval(()=>{
        setSeconds(seconds+1);
       
        if(seconds===59){
          setMinute(minute+1);
          setSeconds(0);
          if(minute==59){
            setHour(hour+1)
            setMinute(0)
          }
          
        }
        },1000)
        return ()=>clearInterval(timer)
    }else{
      clearInterval(timer)
    
   
    
     
     
      
     
      setSeconds(0);
      setMinute(0);
      setHour(0);
    }
  })
  //  if(!toggle_timer_button){
  //     if(task.length!==0&&a.length!==0){
  //       const endtime=""+hour+""+minute+""+seconds;
  //       console.log(endtime)
  //       const payload={
  //         project:a,
  //         task:task,

  //       }
        
  //     }

 useEffect(()=>{

  disptach(get_data())
 
 },[])
 useEffect(()=>{
 
  
  if(toggle_timer_button){
    setCount(count+1)
  
   
  }
  if(count!==0&&count%2!==0){
    const endtime=`00:00:0${seconds}`
   disptach({type:types.GET_PROJECT_REQUEST});
    const payload={
      project:a,
      task:task,
      starttime:`00:00:00`,
      endtime:endtime,
      second:seconds
    }
    axios.post(" http://localhost:8080/data",payload)
    .then((r)=>disptach({type:types.GET_PROJECT_SUCCESS}))
    .then(()=>disptach(get_data()))
    
    .catch((error)=>disptach({type:types.GET_PROJECT_FAILURE}))
  
    setTask("")
  }
 
  
  
   
 },[,toggle_timer_button])
//  console.log(toggle_timer_button)
// console.log(task)
  // console.log(Data)
  return (<div className={styles.Maindiv}>
    <div className={styles.Main_headbar}>
      <div className={styles.input_div}>
        <input  value={task} onChange={(e)=>setTask(e.target.value)} placeholder='what are you working on ?' />
      </div>
        <div className={styles.Projectbutton_div}>
          <div   onClick={handleAddProject}    className={styles.main_onclick_div}>  <div> <AiOutlinePlusCircle  size="25px" color='#03A9F4'/></div><div>{a=="Project" ? "Project":a}</div></div>
     
       </div>
       <div className={styles.third_div}>
        <div className={styles.logo_images_div}>
        <div className={styles.logo1}>
         <div className={styles.logo1_image_div}> <img src="https://app.clockify.me/assets/images/ui-icons/tag-gray.svg"/></div>
        </div>
        <div className={styles.logo2}>
        <div className={styles.logo2_image_div}> <BiDollar  size="30px" color='#03A9F4'/></div>
        </div>
        </div>
        <div className={styles.timer_button_div}>
         <div className={styles.timer_button_div1}>
          <div className={styles.showing_timing}> {hour <10 ? "0"+hour:hour}:{minute<10 ? "0"+minute:minute}:{seconds<10 ? "0"+seconds:seconds}</div>
         </div>
         <div className={styles.timer_button_div2}>
          <div className={styles.timer_button_div3}> <button   onClick={changle_timer_button_color}  style={{
          backgroundColor: toggle_timer_button ? ' #03A9F4' : '',
          backgroundColor: toggle_timer_button ? ' #F44336' : '',
        }}>{toggle_timer_button ? <h3>Stop</h3>:<h3>Start</h3>}</button></div>
         </div>
         <div className={styles.timer_button_div4}>
             <div className={styles.timer_button_div4_icon_section}>
              <div>
                <img src='https://app.clockify.me/assets/ui-icons/clock-blue.svg'/>
              </div>
              <div>
              <img src='https://app.clockify.me/assets/ui-icons/list-blue.svg'/>
              </div>
             </div>
         </div>
        </div>
       </div>
    </div>
  
         {project_btn ? <ProjectinputDivpop setA={setA} setAvalue={setAvalue} avalue={avalue}  setProject_btn={setProject_btn} project_btn={project_btn}   />:""}
         {console.log(Data?.length)}
         <div> {Data?.map((item)=>{
          return <div key={item.id}>
            <Bar item={item}/>
          </div>
         })}</div> 
       
    </div>

//     <div className={styles.backgroud_color}>
//      <div className={styles.border} >
 
//  <  input  placeholder='what are you working on ?'/>
//  <div>
  
//  </div>
//   <ProjectInputbox/>
//  </div>
//     </div>

  )
}

export default TImetracker