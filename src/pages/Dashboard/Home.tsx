import BooksMetrics from "../../components/home/BooksMetrics";
import MonthlySalesChart from "../../components/home/MonthlySalesChart";
import StatisticsChart from "../../components/home/StatisticsChart";
import MonthlyTarget from "../../components/home/MonthlyTarget";
import RecentOrders from "../../components/home/RecentOrders";
import DemographicCard from "../../components/home/DemographicCard";
import PageMeta from "../../components/common/PageMeta";
import { useEffect, useState } from "react";

export default function Home() {

  const [members, setMembers] = useState(0)
  useEffect(()=>{
       fetch(`${import.meta.env.VITE_SERVER}/members`).then(res => res.json()).then(data => {
    
          // setShowBooks(data[0].slice(0, 8))
          setMembers(data.length)
          // setLength(data[1])
          console.log(data)
        })
      }, [])
  return (
    <>
      <PageMeta
        title="Admin Panel | MUKTO PATHAGAR"
        description="This is Admin Panel Ecommerce Dashboard page for TailAdmin - Admin Panel Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <BooksMetrics members={members} />

          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
