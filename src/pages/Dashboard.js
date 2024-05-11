import React, { useState} from "react";
import "../style/dashboard.css";
import BalanceCard from "../component/BalanceCard";
import StreakCard from "../component/streakCard";
import Tab from "../component/tab";
import LearnTab from "../component/LearnTab";

const Dashboard = ({ isCoinNew, setCoinNew }) => {
  const [isBalanceNew, setBalanceNew] = useState(0);

  return (
    <div style={{ height: "200px" }}>
      <div class="angry-grid">
        <div id="item-0">
          <BalanceCard
            isBalanceNew={isBalanceNew}
            setBalanceNew={setBalanceNew}
          />
        </div>
        <div id="item-1">
          {/* <img src={streak} style={{ width: "100%", borderRadius: "20px" }} /> */}
          <StreakCard isCoinNew={isCoinNew} setCoinNew={setCoinNew} />
        </div>
        <div id="item-2">
          {/* <img src={skill} style={{ width: "100%", borderRadius: "20px" }} /> */}
          <LearnTab />
        </div>
        <div id="item-3">
          <Tab isBalanceNew={isBalanceNew} setBalanceNew={setBalanceNew} />
          {/* <img src={visa} style={{ width: "100%", borderRadius: "20px" }} /> */}
        </div>
            
      </div>
    </div>
  );
};

export default Dashboard;
