import React from "react";
import CardLineChart from "../../components/Card/CardLineChart";
import CardBarChart from "../../components/Card/CardBarChart";
import CardPageVisits from "../../components/Card/CardPageVisits";
import CardSocialTraffic from "../../components/Card/CardSocialTraffic";

import Authenticated from "../../Layout/Authenticated";

function Dashboard() {
  return (
    <Authenticated>
      <div className="font-bold text-[32px] py-[32px]">
        Dashboard
      </div>
      <main>
        <div className="font-bold text-[32px] py-[32px]">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <CardLineChart />
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <CardBarChart />
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <CardPageVisits />
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <CardSocialTraffic />
            </div>
          </div>
        </div>
      </main>
    </Authenticated>
  );
}

export default Dashboard;
