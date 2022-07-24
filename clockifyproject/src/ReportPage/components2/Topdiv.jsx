import React from "react";
import styles from "./components.module.css";
import { HStack, Heading, Box, Select } from "@chakra-ui/react";
import Calender from "../Mycomponents/Calender";

const Topdiv = () => {
  return (
    <div style={{backgroundColor:"#f2f6f8"}}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <div style={{display:"flex"}}>
            <div style={{display:"flex"}}>
            <div className={styles.sUpper}>Report</div>
            <div className={styles.sUpper}>Summery</div>
            <div className={styles.sUpper}>detailed</div>
            <div className={styles.sUpper}>Weekly</div>
            <div className={styles.sUpper}>Share</div>
            </div>
        </div>
        <div><Calender/></div>

        </div>
        
      <HStack bg="#f2f6f8" className={styles.topDiv}>
        
        <Box className={styles.topDivRight}>
           
          <Box className={styles.boxInner}>
            <Select className={styles.selectTag} placeholder="Filter">
              <option value="option1">Project</option>
              <option value="option2">Billability</option>
            </Select>
          </Box>
          <Box className={styles.boxInner}>
            <Select className={styles.selectTag} placeholder="Team">
              <option value="option1">Only me</option>
              <option value="option2">Team</option>
            </Select>
          </Box>
          <Box className={styles.boxInner}>
            <Select className={styles.selectTag} placeholder="Client">
              <option value="option1">Only me</option>
              <option value="option2">Team</option>
            </Select>
          </Box>
          <Box className={styles.boxInner}>
            <Select className={styles.selectTag} placeholder="Project">
              <option value="option1">Only me</option>
              <option value="option2">Team</option>
            </Select>
          </Box>
          <Box className={styles.boxInner}>
            <Select className={styles.selectTag} placeholder="Task">
              <option value="option1">Only me</option>
              <option value="option2">Team</option>
            </Select>
          </Box>
          <Box className={styles.boxInner}>
            <Select className={styles.selectTag} placeholder="Tag">
              <option value="option1">Only me</option>
              <option value="option2">Team</option>
            </Select>
          </Box>
          <Box className={styles.boxInner}>
            <Select className={styles.selectTag} placeholder="Status">
              <option value="option1">Only me</option>
              <option value="option2">Team</option>
            </Select>
          </Box>
          <Box className={styles.boxInner}>
            <Select className={styles.selectTag} placeholder="Description">
              <option value="option1">Only me</option>
              <option value="option2">Team</option>
            </Select>
          </Box> 
        </Box>
        <Box>
                <Box className={styles.applyDiv}>apply</Box>
            </Box>
      </HStack>
    </div>
  );
};

export default Topdiv;
