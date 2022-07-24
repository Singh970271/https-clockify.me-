// import "./styles.css";
import { StylesProvider } from "@chakra-ui/react";
import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import styles from "./Mycomponents.module.css";

const data = [
  { name: "Group B", value: 5 },
  { name: "Group A", value: 0 },
  { name: "Group C", value: 0 },
  { name: "Group D", value: 0 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Piechart = () => {
  return (
    <div className={styles.wholeDiv}>
      <div className={styles.upperDiv}>
        <div className={styles.totalDiv}>Group by:</div>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Project</button>
          <div className={styles.dropdownContent}>
            <a>Link 1</a>
            <a>Link 2</a>
            <a>Link 3</a>
          </div>
        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Description</button>
          <div className={styles.dropdownContent}>
            <a>Link 1</a>
            <a>Link 2</a>
            <a>Link 3</a>
          </div>
        </div>
      </div>
      <div >
        <div style={{paddingLeft:"400px"}}>
      <PieChart width={1000} height={500}>
        <Pie
          data={data}
          cx={155}
          cy={235}
          innerRadius={100}
          outerRadius={160}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* <Pie
        data={data}
        cx={420}
        cy={200}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie> */}
      </PieChart>
      </div>
      </div>
    </div>
  );
};

export default Piechart;
