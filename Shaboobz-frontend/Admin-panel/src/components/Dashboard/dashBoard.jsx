import React from "react";
import { FaDollarSign, FaUsers, FaUserTag } from "react-icons/fa";
import { MdPendingActions, MdShoppingBag } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { BsShop } from "react-icons/bs";
import { TbNotesOff } from "react-icons/tb";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

// StatsCard Component
const StatsCard = ({ title, value, icon, bgColor }) => {
  return (
    <div
      className={`flex items-center justify-between p-7 rounded-3xl shadow-md ${bgColor}`}
    >
      <div>
        <p className="text-sm text-gray-200">{title}</p>
        <h3 className="text-2xl font-bold text-white">{value}</h3>
      </div>
      <div className="text-3xl text-white">{icon}</div>
    </div>
  );
};

// ChartCard Component
const ChartCard = ({ title, children, colSpan }) => {
  return (
    <div
      className={`bg-gray-100 dark:bg-gray-800 p-20 rounded-3xl shadow-md ${colSpan}`}
    >
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
};

const barChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 3, 5, 2],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
  ],
};

const doughnutChartData = {
  labels: ["Pending", "Delivered", "Cancelled"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#f44336", "#4caf50", "#ffeb3b"],
    },
  ],
};

const Dashboard = ({ darkMode }) => {
  return (
    <div className="flex mt-14">
      <div className="ml-64 w-full">
        {/* Stats Section */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Daily Earnings"
            value="$0.0"
            icon={<FaDollarSign />}
            bgColor="bg-red-500"
          />
          <StatsCard
            title="Daily Orders"
            value="0"
            icon={<GrNotes />}
            bgColor="bg-cyan-500"
          />
          <StatsCard
            title="Total Users"
            value="49"
            icon={<FaUsers />}
            bgColor="bg-yellow-500"
          />
          <StatsCard
            title="Total Products"
            value="12"
            icon={<MdShoppingBag />}
            bgColor="bg-green-500"
          />
          <StatsCard
            title="Total Vendors"
            value="6"
            icon={<FaUserTag />}
            bgColor="bg-emerald-500"
          />
          <StatsCard
            title="Total Shop"
            value="8"
            icon={<BsShop />}
            bgColor="bg-stone-500"
          />
          <StatsCard
            title="Pending Orders"
            value="101"
            icon={<MdPendingActions />}
            bgColor="bg-blue-500"
          />
          <StatsCard
            title="Returned Orders"
            value="0"
            icon={<TbNotesOff />}
            bgColor="bg-slate-500"
          />
        </div>
        {/* Charts Section */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          <ChartCard title="Sales Report" colSpan="col-span-7">
            <Bar data={barChartData} />
          </ChartCard>
          <ChartCard title="Order Report" colSpan="col-span-5">
            <Doughnut data={doughnutChartData} />
          </ChartCard>
          {/* Other Charts */}
          <div className="p-6 grid  grid-cols-1 md:grid-cols-12 gap-6">
            <ChartCard title="Best Selling" colSpan="col-span-4">
            
            </ChartCard>
            <ChartCard title="Income Report" colSpan="col-span-8">
            
            </ChartCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
