import React from 'react'
import styles from './timetracker.module.css';
import ProjectInputbox from './ProjectInputbox';

const TImetracker = () => {
  return (
    <div className={styles.backgroud_color}>
     <div className={styles.border} >
 
 <  input  placeholder='what are you working on ?'/>
 <div>
  
 </div>
  <ProjectInputbox/>
 </div>
    </div>
  )
}

export default TImetracker