"use client";

import {
  Calendar,
  DollarSign,
  Users,
  FileText,
  AlertCircle,
  TrendingUp,
  Settings,
  Bell,
  Eye,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FounderDashboard = () => {
  const router = useRouter();
  const [selectedStartup, setSelectedStartup] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data berdasarkan dokumentasi
  const startups = [
    {
      id: 1,
      name: "Green Harvest Farm",
      sector: "Agriculture",
      status: "Active",
      fundingGoal: 40000,
      fundingRaised: 32000,
      nftsSold: 320,
      nftsTotal: 400,
      monthlyCommitment: 1000,
      collateralLocked: 13200,
      remainingCollateral: 11800,
      monthsActive: 8,
      nextReportDue: "Jan 10, 2025",
      lastPaymentDate: "Dec 21, 2024",
      monthlyROI: "25%",
      approvalRate: "92%",
    },
    {
      id: 2,
      name: "Urban Cafe Network",
      sector: "F&B",
      status: "Fundraising",
      fundingGoal: 25000,
      fundingRaised: 15000,
      nftsSold: 150,
      nftsTotal: 250,
      monthlyCommitment: 750,
      collateralLocked: 9000,
      remainingCollateral: 9000,
      monthsActive: 0,
      nextReportDue: "Not started",
      lastPaymentDate: "Not started",
      monthlyROI: "30%",
      approvalRate: "N/A",
    },
  ];

  const currentStartup = startups[selectedStartup];

  const stats = [
    {
      label: "Total Funding Raised",
      value: "$47,000",
      subtext: "ckUSDC",
      icon: DollarSign,
      color: "text-black",
      bgColor: "bg-white",
    },
    {
      label: "Active Investors",
      value: "470",
      subtext: "NFT Holders",
      icon: Users,
      color: "text-black",
      bgColor: "bg-white",
    },
    {
      label: "Monthly Commitments",
      value: "$1,750",
      subtext: "ckUSDC/month",
      icon: TrendingUp,
      color: "text-black",
      bgColor: "bg-white",
    },
    {
      label: "Reports Submitted",
      value: "8/8",
      subtext: "On time",
      icon: FileText,
      color: "text-black",
      bgColor: "bg-white",
    },
  ];

  const recentActivities = [
    {
      date: "Dec 21",
      action: "Profit sharing payment completed",
      amount: "$1,000 ckUSDC",
      status: "success",
    },
    {
      date: "Dec 18",
      action: "Monthly report approved",
      amount: "92% approval",
      status: "success",
    },
    {
      date: "Dec 10",
      action: "Monthly report submitted",
      amount: "On time",
      status: "success",
    },
    {
      date: "Dec 01",
      action: "New investor joined",
      amount: "5 NFTs purchased",
      status: "info",
    },
    {
      date: "Nov 21",
      action: "Profit sharing payment completed",
      amount: "$1,000 ckUSDC",
      status: "success",
    },
  ];

  const upcomingTasks = [
    {
      task: "Submit January monthly report",
      dueDate: "Jan 10",
      priority: "high",
      daysLeft: 7,
    },
    {
      task: "Prepare Q4 financial summary",
      dueDate: "Jan 15",
      priority: "medium",
      daysLeft: 12,
    },
    {
      task: "February profit sharing payment",
      dueDate: "Feb 21",
      priority: "high",
      daysLeft: 48,
    },
    {
      task: "Update business plan",
      dueDate: "Feb 28",
      priority: "low",
      daysLeft: 55,
    },
  ];

  return (
    <div className="bg-gray-50 text-black font-mono">
      {/* Header */}
      <header className="bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold border-2 border-black px-4 py-2 text-black">
                PLANTIFY
              </div>
              <div className="text-sm border border-black px-3 py-1 bg-white text-black">
                FOUNDER DASHBOARD
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-black" />
                <span className="text-sm text-black">3 notifications</span>
              </div>
              <div className="text-sm border border-black px-3 py-1 text-black">
                Connected: [Internet Identity]
              </div>
              <button className="border-2 border-black px-4 py-2 hover:bg-gray-100 text-black">
                <Settings className="h-4 w-4 text-black" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Startup Selector */}
        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-black">Your Startups</h1>
            <select
              className="border-2 border-black px-4 py-2 font-mono text-black bg-white"
              value={selectedStartup}
              onChange={(e) => setSelectedStartup(Number(e.target.value))}
            >
              {startups.map((startup, index) => (
                <option key={startup.id} value={index}>
                  {startup.name} ({startup.status})
                </option>
              ))}
            </select>
            <button
              className="bg-black text-white px-4 py-2 hover:bg-gray-800"
              onClick={() => router.push("/founder/create-startup")}
            >
              + CREATE NEW STARTUP
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="border-2 border-black p-4 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.subtext}</div>
                  <div className="text-xs font-medium mt-1">{stat.label}</div>
                </div>
                <div className={`p-3 rounded ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Tabs */}
        <div className="mb-6">
          <div className="border-b-2 border-black">
            <div className="flex space-x-8">
              {[
                { id: "overview", label: "OVERVIEW" },
                { id: "funding", label: "FUNDING STATUS" },
                { id: "reports", label: "MONTHLY REPORTS" },
                { id: "payments", label: "PROFIT SHARING" },
                { id: "collateral", label: "COLLATERAL" },
                { id: "investors", label: "INVESTORS" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 font-bold border-b-2 ${
                    activeTab === tab.id
                      ? "border-black bg-white"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {activeTab === "overview" && (
              <>
                {/* Current Startup Overview */}
                <div className="border-2 border-black p-6 bg-white">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-bold">
                        {currentStartup.name}
                      </h2>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="border border-black px-2 py-1 text-sm">
                          {currentStartup.sector}
                        </span>
                        <span
                          className={`px-2 py-1 text-sm border ${
                            currentStartup.status === "Active"
                              ? "border-black bg-white text-green-700"
                              : "border-blue-500 bg-white text-blue-700"
                          }`}
                        >
                          {currentStartup.status}
                        </span>
                      </div>
                    </div>
                    <button className="border border-black px-3 py-1 text-sm hover:bg-gray-100">
                      <Eye className="h-4 w-4 inline mr-1" />
                      View Public Page
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-bold">Funding Progress</div>
                      <div className="border border-black h-4 mt-2">
                        <div
                          className="bg-black h-full"
                          style={{
                            width: `${
                              (currentStartup.fundingRaised /
                                currentStartup.fundingGoal) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <div className="text-xs mt-1">
                        ${currentStartup.fundingRaised.toLocaleString()} / $
                        {currentStartup.fundingGoal.toLocaleString()} ckUSDC
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-bold">NFT Sales</div>
                      <div className="border border-black h-4 mt-2">
                        <div
                          className="bg-gray-400 h-full"
                          style={{
                            width: `${
                              (currentStartup.nftsSold /
                                currentStartup.nftsTotal) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <div className="text-xs mt-1">
                        {currentStartup.nftsSold} / {currentStartup.nftsTotal}{" "}
                        NFTs sold
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-xs text-gray-600">
                        Monthly Commitment
                      </div>
                      <div className="font-bold">
                        ${currentStartup.monthlyCommitment} ckUSDC
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600">Approval Rate</div>
                      <div className="font-bold text-black">
                        {currentStartup.approvalRate}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600">Active Months</div>
                      <div className="font-bold">
                        {currentStartup.monthsActive} months
                      </div>
                    </div>
                  </div>
                </div>

                {/* Urgent Actions */}
                <div className="border-2 border-black p-6 bg-white">
                  <h3 className="text-lg font-bold mb-4 bg-gray-100 p-2">
                    🚨 URGENT ACTIONS REQUIRED
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border border-black p-3 bg-white">
                      <div>
                        <div className="font-bold text-sm">
                          January Monthly Report Due
                        </div>
                        <div className="text-xs text-gray-600">
                          Submit by Jan 10, 2025
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-black">
                          7 days left
                        </div>
                        <button className="bg-black text-white px-3 py-1 text-xs mt-1">
                          SUBMIT NOW
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border border-gray-300 p-3 bg-gray-50">
                      <div>
                        <div className="font-bold text-sm">
                          Collateral Running Low
                        </div>
                        <div className="text-xs text-gray-600">
                          Consider topping up collateral
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-black">
                          $1,400 remaining
                        </div>
                        <button className="border border-black px-3 py-1 text-xs mt-1 hover:bg-gray-100">
                          TOP UP
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="border-2 border-black p-6 bg-white">
                  <h3 className="text-lg font-bold mb-4">
                    PERFORMANCE METRICS
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm font-bold mb-2">
                        Monthly Returns Trend
                      </div>
                      <div className="space-y-2">
                        {[
                          {
                            month: "Dec 2024",
                            amount: 1000,
                            target: 1000,
                            status: "success",
                          },
                          {
                            month: "Nov 2024",
                            amount: 1100,
                            target: 1000,
                            status: "success",
                          },
                          {
                            month: "Oct 2024",
                            amount: 950,
                            target: 1000,
                            status: "warning",
                          },
                          {
                            month: "Sep 2024",
                            amount: 1200,
                            target: 1000,
                            status: "success",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center text-xs"
                          >
                            <span>{item.month}</span>
                            <span
                              className={`font-bold ${
                                item.status === "success"
                                  ? "text-black"
                                  : "text-black"
                              }`}
                            >
                              ${item.amount} / ${item.target}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-bold mb-2">
                        Community Health
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Voting Participation</span>
                          <span className="font-bold text-black">87%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Average Approval</span>
                          <span className="font-bold text-black">92%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Community Comments</span>
                          <span className="font-bold">23 this month</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Investor Retention</span>
                          <span className="font-bold text-black">96%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "funding" && (
              <div className="border-2 border-black p-6 bg-white">
                <h3 className="text-lg font-bold mb-4">FUNDING STATUS</h3>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold">Overall Progress</span>
                    <span className="text-sm">
                      {Math.round(
                        (currentStartup.fundingRaised /
                          currentStartup.fundingGoal) *
                          100
                      )}
                      %
                    </span>
                  </div>
                  <div className="border-2 border-black h-8">
                    <div
                      className="bg-black h-full flex items-center justify-center text-white text-xs font-bold"
                      style={{
                        width: `${
                          (currentStartup.fundingRaised /
                            currentStartup.fundingGoal) *
                          100
                        }%`,
                      }}
                    >
                      ${currentStartup.fundingRaised.toLocaleString()} ckUSDC
                    </div>
                  </div>
                  <div className="text-xs mt-1 text-gray-600">
                    Target: ${currentStartup.fundingGoal.toLocaleString()}{" "}
                    ckUSDC
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="border border-black p-4">
                    <div className="text-sm font-bold">Available Funds</div>
                    <div className="text-2xl font-bold">
                      ${(currentStartup.fundingRaised * 0.8).toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">
                      80% of raised funds (ckUSDC)
                    </div>
                    <button className="w-full border border-black py-2 mt-2 text-sm hover:bg-gray-100">
                      REQUEST WITHDRAWAL
                    </button>
                  </div>
                  <div className="border border-black p-4">
                    <div className="text-sm font-bold">Platform Reserve</div>
                    <div className="text-2xl font-bold">
                      ${(currentStartup.fundingRaised * 0.2).toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">
                      20% platform reserve (ckUSDC)
                    </div>
                    <div className="text-xs mt-2 text-black">
                      Locked for investor protection
                    </div>
                  </div>
                </div>

                <div className="border border-black p-4">
                  <div className="text-sm font-bold mb-2">
                    Recent Fund Withdrawals
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span>Dec 15 - Equipment purchase</span>
                      <span className="font-bold">$5,000 ckUSDC</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nov 28 - Marketing campaign</span>
                      <span className="font-bold">$2,500 ckUSDC</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nov 10 - Inventory stock</span>
                      <span className="font-bold">$8,000 ckUSDC</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "collateral" && (
              <div className="border-2 border-black p-6 bg-white">
                <h3 className="text-lg font-bold mb-4">
                  COLLATERAL MANAGEMENT
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="border-2 border-black p-4 bg-white">
                    <div className="text-sm font-bold">Total Locked</div>
                    <div className="text-2xl font-bold">
                      ${currentStartup.collateralLocked.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">
                      Original collateral (ckUSDC)
                    </div>
                  </div>
                  <div className="border-2 border-black p-4">
                    <div className="text-sm font-bold">Current Balance</div>
                    <div className="text-2xl font-bold">
                      ${currentStartup.remainingCollateral.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">
                      After deductions (ckUSDC)
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold">Collateral Health</span>
                    <span className="text-sm">
                      {Math.round(
                        (currentStartup.remainingCollateral /
                          currentStartup.collateralLocked) *
                          100
                      )}
                      %
                    </span>
                  </div>
                  <div className="border-2 border-black h-6">
                    <div
                      className={`h-full ${
                        currentStartup.remainingCollateral /
                          currentStartup.collateralLocked >
                        0.5
                          ? "bg-white0"
                          : currentStartup.remainingCollateral /
                              currentStartup.collateralLocked >
                            0.2
                          ? "bg-gray-500"
                          : "bg-white0"
                      }`}
                      style={{
                        width: `${
                          (currentStartup.remainingCollateral /
                            currentStartup.collateralLocked) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="border border-gray-300 p-4 mb-4">
                  <div className="text-sm font-bold mb-2">
                    Auto-Deduction History
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span>Sep 2024 - Late payment (2 days)</span>
                      <span className="font-bold text-black">
                        -$1,000 ckUSDC
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Jul 2024 - Missed payment (8 days)</span>
                      <span className="font-bold text-black">
                        -$1,000 ckUSDC
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-300 p-4">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-black mt-0.5" />
                    <div>
                      <div className="font-bold text-sm">
                        Collateral Warning
                      </div>
                      <div className="text-xs mt-1">
                        Your collateral balance is getting low. Consider topping
                        up to maintain payment security.
                      </div>
                      <button
                        className="bg-black text-white px-4 py-2 text-xs mt-2"
                        onClick={() => router.push("/founder/collateral")}
                      >
                        TOP UP COLLATERAL
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Tasks */}
            <div className="border-2 border-black p-4 bg-white">
              <h3 className="font-bold mb-3 flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                UPCOMING TASKS
              </h3>
              <div className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div
                    key={index}
                    className={`border p-2 text-xs ${
                      task.priority === "high"
                        ? "border-black bg-white"
                        : task.priority === "medium"
                        ? "border-gray-300 bg-gray-50"
                        : "border-gray-300 bg-gray-50"
                    }`}
                  >
                    <div className="font-bold">{task.task}</div>
                    <div className="text-gray-600">Due: {task.dueDate}</div>
                    <div
                      className={`font-bold ${
                        task.daysLeft <= 7 ? "text-black" : "text-gray-600"
                      }`}
                    >
                      {task.daysLeft} days left
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div className="border-2 border-black p-4 bg-white">
              <h3 className="font-bold mb-3">RECENT ACTIVITIES</h3>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-2 last:border-b-0"
                  >
                    <div className="flex justify-between items-start">
                      <div className="text-xs">
                        <div className="font-bold">{activity.action}</div>
                        <div className="text-gray-600">{activity.date}</div>
                      </div>
                      <div
                        className={`text-xs font-bold ${
                          activity.status === "success"
                            ? "text-black"
                            : "text-black"
                        }`}
                      >
                        {activity.amount}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="border-2 border-black p-4 bg-white">
              <h3 className="font-bold mb-3">QUICK ACTIONS</h3>
              <div className="space-y-2">
                <button className="w-full bg-black text-white py-2 text-sm hover:bg-gray-800">
                  SUBMIT MONTHLY REPORT
                </button>
                <button className="w-full border border-black py-2 text-sm hover:bg-gray-100">
                  VIEW INVESTOR FEEDBACK
                </button>
                <button className="w-full border border-black py-2 text-sm hover:bg-gray-100">
                  REQUEST FUND WITHDRAWAL
                </button>
                <button
                  className="w-full border border-black py-2 text-sm hover:bg-gray-100"
                  onClick={() => router.push("/founder/collateral")}
                >
                  TOP UP COLLATERAL
                </button>
                <button className="w-full border border-black py-2 text-sm hover:bg-gray-100">
                  MESSAGE INVESTORS
                </button>
              </div>
            </div>

            {/* Platform Stats */}
            <div className="border-2 border-black p-4 bg-gray-50">
              <h3 className="font-bold mb-3">PLATFORM STATS</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Total Startups</span>
                  <span className="font-bold">247</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Investors</span>
                  <span className="font-bold">15,432</span>
                </div>
                <div className="flex justify-between">
                  <span>ckUSDC Distributed</span>
                  <span className="font-bold">$2.3M</span>
                </div>
                <div className="flex justify-between">
                  <span>Success Rate</span>
                  <span className="font-bold text-black">94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderDashboard;
