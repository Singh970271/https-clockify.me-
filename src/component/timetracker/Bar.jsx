import React from 'react'
import styles from "./Bar.module.css"
import { BiDollar} from 'react-icons/bi';

const Bar = ({item}) => {
  return (
    <div className={styles.main_div}>
      <div className={styles.upper_maindiv}>
        <div className={styles.upper_maindiv1}>Today</div>
        <div className={styles.upper_maindiv2}>Total:{"  "}{"00:00:0"}{item.second}</div>
      </div>
      <div className={styles.lower_maindiv}>
        <div className={styles.lower_maindiv1}>
          <div className={styles.lower_maindiv_inside}>
          <div className={styles.lower_maindiv_inside1}>{item.task}</div>
          <div className={styles.lower_maindiv_inside2}>{item.project}</div>
          </div>
          <div className={styles.lower_maindiv_logos}>
            <div className={styles.lower_maindiv_logos1} ><img   src="https://app.clockify.me/assets/images/ui-icons/tag-gray.svg"/></div>
            <div  className={styles.lower_maindiv_logos2}><BiDollar  size="50px" color='#03A9F4'/></div>
            
          </div>
         
        </div>
        <div className={styles.lower_maindiv2}>
          <div className={styles.lower_maindiv2_inside1}>
           startTime: {item.starttime}
          </div>
          <div className={styles.lower_maindiv2_inside2}>
           endtime: {item.endtime}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bar