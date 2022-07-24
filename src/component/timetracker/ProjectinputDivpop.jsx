import React, { useState } from 'react'
 import styles from "./Pojectinputdiv.module.css";
 import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

const ProjectinputDivpop = ({setA,setAvalue,avalue,project_btn,setProject_btn}) => {
    
    const [project,setProject]=useState("");
    const [createProject,setCreateProject]=useState(false);
    const dispatch=useDispatch();
    const handlaeAddtoinput=()=>{
        setCreateProject(!createProject);
       
    }
    const handleAddProject=()=>{
        setAvalue(!avalue)
        let b=project;

      setA(b)
      setProject_btn(!project_btn)
    }
    
  return (
    <div className={styles.Maindiv}>
     <div className={styles.input_div}>
        <input placeholder='Project' onChange={(e)=>setProject(e.target.value)}/>
     </div>
     <div className={styles}>
        <div className={styles.emptybox}>
            No Client
        </div>
     </div>
     <div className={styles}>
        <div  onClick={handlaeAddtoinput}  className={styles.logo_div}>
            <div><AiOutlinePlusCircle size="20px" color='#03A9F4'/></div>
            <div onClick={handleAddProject}>Create new project</div>
        </div>
     </div>
   
        
        </div>
  )
}

export default ProjectinputDivpop