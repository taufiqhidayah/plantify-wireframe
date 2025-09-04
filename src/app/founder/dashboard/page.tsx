"use client";

import {
  Calendar,
  DollarSign,
  Users,
  FileText,
  AlertCircle,
  TrendingUp,
  Eye,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FounderNavbar from "@/components/founder/FounderNavbar";
import FounderFooter from "@/components/founder/FounderFooter";

const FounderDashboard = () => {
  const router = useRouter();
  const [selectedStartup, setSelectedStartup] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  const startups = [
    {
      id: 1,
      name: "EcoTech Solutions",
      sector: "Technology & Digital",
      status: "Active",
      companyType: "LLC",
      location: "San Francisco, USA",
      foundedYear: "2023",
      website: "https://ecotechsolutions.com",
      description:
        "Revolutionary green technology startup focused on sustainable energy solutions for smart cities.",

      // Team Information
      teamMembers: [
        {
          id: 1,
          name: "Sarah Johnson",
          role: "CEO & Founder",
          background:
            "Former Tesla engineer with 8 years experience in renewable energy systems and AI.",
          linkedin: "https://linkedin.com/in/sarahjohnson",
          email: "sarah@ecotechsolutions.com",
          isFounder: true,
        },
        {
          id: 2,
          name: "Michael Chen",
          role: "CTO",
          background:
            "Ex-Google AI researcher specializing in machine learning for energy optimization.",
          linkedin: "https://linkedin.com/in/michaelchen",
          email: "michael@ecotechsolutions.com",
          isFounder: false,
        },
      ],
      advisors:
        "Dr. Lisa Wang (Former VP at Tesla), John Smith (Partner at GreenTech Ventures)",

      // Financial Information
      fundingGoal: 50000,
      nftPrice: 500,
      fundingRaised: 40000,
      nftsSold: 80,
      nftsTotal: 100,
      monthlyProfitSharing: 5,
      monthlyCommitment: 400, // 80 NFTs × $5
      monthlyRevenue: 15000,
      monthlyExpenses: 10000,
      breakEvenMonth: 8,
      useOfFunds: "40% R&D, 30% marketing, 20% operations, 10% working capital",

      // Collateral Information
      collateralLocked: 4800, // 12 months × $400
      remainingCollateral: 4200,
      collateralSource: "ckUSDC",
      collateralStatus: "Healthy",

      // Operational Status
      monthsActive: 6,
      nextReportDue: "Jan 10, 2025",
      lastPaymentDate: "Dec 21, 2024",
      monthlyROI: "20%",
      approvalRate: "95%",
      creationDate: "2024-06-15",
      activationDate: "2024-07-01",
    },
    {
      id: 2,
      name: "Green Harvest Farm",
      sector: "Agriculture & Farming",
      status: "Collateral Required",
      companyType: "LLC",
      location: "Austin, Texas",
      foundedYear: "2022",
      website: "https://greenharvestfarm.com",
      description:
        "Sustainable organic farming operation with vertical growing systems.",

      // Team Information
      teamMembers: [
        {
          id: 1,
          name: "John Martinez",
          role: "CEO & Founder",
          background:
            "Agricultural engineer with 12 years experience in sustainable farming.",
          linkedin: "https://linkedin.com/in/johnmartinez",
          email: "john@greenharvestfarm.com",
          isFounder: true,
        },
      ],
      advisors: "Dr. Emily Green (Agricultural Research Institute)",

      // Financial Information
      fundingGoal: 30000,
      nftPrice: 300,
      fundingRaised: 0,
      nftsSold: 0,
      nftsTotal: 100,
      monthlyProfitSharing: 3,
      monthlyCommitment: 0,
      monthlyRevenue: 0,
      monthlyExpenses: 0,
      breakEvenMonth: 12,
      useOfFunds: "50% equipment, 30% operations, 20% marketing",

      // Collateral Information
      collateralLocked: 0,
      remainingCollateral: 0,
      collateralSource: "Not Set",
      collateralStatus: "Required",
      collateralRequired: 360, // 12 months × $30

      // Operational Status
      monthsActive: 0,
      nextReportDue: "Not started",
      lastPaymentDate: "Not started",
      monthlyROI: "N/A",
      approvalRate: "N/A",
      creationDate: "2024-12-20",
      activationDate: null,
    },
    {
      id: 3,
      name: "Urban Cafe Network",
      sector: "Food & Beverage",
      status: "Pending Review",
      companyType: "Corp",
      location: "New York, NY",
      foundedYear: "2024",
      website: "https://urbancafenetwork.com",
      description:
        "Tech-enabled coffee shop chain with automated ordering systems.",

      // Team Information
      teamMembers: [
        {
          id: 1,
          name: "Lisa Park",
          role: "CEO & Founder",
          background:
            "Former Starbucks regional manager with 8 years in F&B operations.",
          linkedin: "https://linkedin.com/in/lisapark",
          email: "lisa@urbancafenetwork.com",
          isFounder: true,
        },
      ],
      advisors: "Mark Thompson (Former COO at Dunkin' Brands)",

      // Financial Information
      fundingGoal: 25000,
      nftPrice: 250,
      fundingRaised: 0,
      nftsSold: 0,
      nftsTotal: 100,
      monthlyProfitSharing: 2.5,
      monthlyCommitment: 0,
      monthlyRevenue: 0,
      monthlyExpenses: 0,
      breakEvenMonth: 10,
      useOfFunds: "60% equipment, 25% operations, 15% marketing",

      // Collateral Information
      collateralLocked: 0,
      remainingCollateral: 0,
      collateralSource: "Not Set",
      collateralStatus: "Pending",
      collateralRequired: 300, // 12 months × $25

      // Operational Status
      monthsActive: 0,
      nextReportDue: "Not started",
      lastPaymentDate: "Not started",
      monthlyROI: "N/A",
      approvalRate: "N/A",
      creationDate: "2024-12-28",
      activationDate: null,
    },
  ];

  const currentStartup = startups[selectedStartup];

  const stats = [
    {
      label: "Total Funding Raised",
      value: `$${startups
        .reduce((sum, startup) => sum + startup.fundingRaised, 0)
        .toLocaleString()}`,
      subtext: "ckUSDC",
      icon: DollarSign,
      color: "text-black",
      bgColor: "bg-white",
    },
    {
      label: "Active Investors",
      value: startups
        .reduce((sum, startup) => sum + startup.nftsSold, 0)
        .toString(),
      subtext: "NFT Holders",
      icon: Users,
      color: "text-black",
      bgColor: "bg-white",
    },
    {
      label: "Monthly Commitments",
      value: `$${startups
        .reduce((sum, startup) => sum + startup.monthlyCommitment, 0)
        .toLocaleString()}`,
      subtext: "ckUSDC/month",
      icon: TrendingUp,
      color: "text-black",
      bgColor: "bg-white",
    },
    {
      label: "Active Startups",
      value: startups.filter((s) => s.status === "Active").length.toString(),
      subtext: `of ${startups.length} total`,
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
    <div className="bg-gray-50 text-black font-mono min-h-screen flex flex-col">
      <FounderNavbar />

      <div className="max-w-7xl mx-auto px-4 py-6">
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

        {/* Startup Status Overview */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          {[
            {
              status: "Active",
              count: startups.filter((s) => s.status === "Active").length,
              color: "bg-green-100 text-green-800 border-green-300",
            },
            {
              status: "Collateral Required",
              count: startups.filter((s) => s.status === "Collateral Required")
                .length,
              color: "bg-yellow-100 text-yellow-800 border-yellow-300",
            },
            {
              status: "Pending Review",
              count: startups.filter((s) => s.status === "Pending Review")
                .length,
              color: "bg-blue-100 text-blue-800 border-blue-300",
            },
            {
              status: "Draft",
              count: startups.filter((s) => s.status === "Draft").length,
              color: "bg-gray-100 text-gray-800 border-gray-300",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`border-2 ${item.color} p-3 text-center`}
            >
              <div className="text-2xl font-bold">{item.count}</div>
              <div className="text-sm font-medium">{item.status}</div>
            </div>
          ))}
        </div>

        {/* Startup Selector */}
        <div className="mb-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-black">Your Startups</h1>
              <div className="text-sm text-gray-600">
                {startups.length} startup{startups.length !== 1 ? "s" : ""} •{" "}
                {startups.filter((s) => s.status === "Active").length} active
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <select
                className="border-2 border-black px-4 py-2 font-mono text-black bg-white min-w-[300px]"
                value={selectedStartup}
                onChange={(e) => setSelectedStartup(Number(e.target.value))}
              >
                {startups.map((startup, index) => (
                  <option key={startup.id} value={index}>
                    {startup.name} - {startup.status}
                  </option>
                ))}
              </select>
              <button
                className="bg-black text-white px-6 py-2 hover:bg-gray-800 font-bold"
                onClick={() => router.push("/founder/create-startup")}
              >
                + CREATE NEW STARTUP
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="mb-6">
          <div className="border-b-2 border-black">
            <div className="flex space-x-8">
              {[
                { id: "overview", label: "OVERVIEW" },
                { id: "team", label: "TEAM" },
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
                {/* Enhanced Startup Overview */}
                <div className="border-2 border-black p-6 bg-white">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        {currentStartup.name}
                      </h2>
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="border border-black px-3 py-1 text-sm font-medium">
                          {currentStartup.sector}
                        </span>
                        <span
                          className={`px-3 py-1 text-sm border-2 font-medium ${
                            currentStartup.status === "Active"
                              ? "border-green-500 bg-green-50 text-green-800"
                              : currentStartup.status === "Collateral Required"
                              ? "border-yellow-500 bg-yellow-50 text-yellow-800"
                              : currentStartup.status === "Pending Review"
                              ? "border-blue-500 bg-blue-50 text-blue-800"
                              : "border-gray-500 bg-gray-50 text-gray-800"
                          }`}
                        >
                          {currentStartup.status}
                        </span>
                        <span className="border border-black px-3 py-1 text-sm">
                          {currentStartup.companyType}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        📍 {currentStartup.location} • Founded{" "}
                        {currentStartup.foundedYear}
                        {currentStartup.website && (
                          <span>
                            {" "}
                            •{" "}
                            <a
                              href={currentStartup.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {currentStartup.website}
                            </a>
                          </span>
                        )}
                      </div>
                    </div>
                    <button className="border border-black px-4 py-2 text-sm hover:bg-gray-100 font-medium">
                      <Eye className="h-4 w-4 inline mr-1" />
                      View Public Page
                    </button>
                  </div>

                  {/* Startup Description */}
                  <div className="mb-6 p-4 bg-gray-50 border border-gray-300">
                    <div className="text-sm font-medium mb-1">Description</div>
                    <div className="text-sm text-gray-700">
                      {currentStartup.description}
                    </div>
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

                {/* Status-Based Actions */}
                <div className="border-2 border-black p-6 bg-white">
                  <h3 className="text-lg font-bold mb-4 bg-gray-100 p-2">
                    {currentStartup.status === "Active"
                      ? "🚨 URGENT ACTIONS REQUIRED"
                      : currentStartup.status === "Collateral Required"
                      ? "⚠️ ACTIVATION REQUIRED"
                      : currentStartup.status === "Pending Review"
                      ? "⏳ PENDING ACTIONS"
                      : "📋 STARTUP STATUS"}
                  </h3>
                  <div className="space-y-3">
                    {currentStartup.status === "Active" && (
                      <>
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
                              Collateral Health Check
                            </div>
                            <div className="text-xs text-gray-600">
                              Monitor collateral balance
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-black">
                              {currentStartup.collateralStatus}
                            </div>
                            <button className="border border-black px-3 py-1 text-xs mt-1 hover:bg-gray-100">
                              TOP UP
                            </button>
                          </div>
                        </div>
                      </>
                    )}

                    {currentStartup.status === "Collateral Required" && (
                      <div className="flex items-center justify-between border border-yellow-300 p-3 bg-yellow-50">
                        <div>
                          <div className="font-bold text-sm">
                            Add Collateral to Activate
                          </div>
                          <div className="text-xs text-gray-600">
                            Required: ${currentStartup.collateralRequired}{" "}
                            ckUSDC
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-yellow-800">
                            Ready to activate
                          </div>
                          <button className="bg-yellow-600 text-white px-3 py-1 text-xs mt-1 hover:bg-yellow-700">
                            ADD COLLATERAL
                          </button>
                        </div>
                      </div>
                    )}

                    {currentStartup.status === "Pending Review" && (
                      <div className="flex items-center justify-between border border-blue-300 p-3 bg-blue-50">
                        <div>
                          <div className="font-bold text-sm">
                            Application Under Review
                          </div>
                          <div className="text-xs text-gray-600">
                            Platform team is reviewing your application
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-blue-800">
                            Review in progress
                          </div>
                          <div className="text-xs text-blue-600 mt-1">
                            Usually 5-7 days
                          </div>
                        </div>
                      </div>
                    )}
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

            {activeTab === "team" && (
              <div className="border-2 border-black p-6 bg-white">
                <h3 className="text-xl font-bold mb-6">TEAM INFORMATION</h3>

                {/* Team Members */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-4">
                    Team Members ({currentStartup.teamMembers.length})
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentStartup.teamMembers.map((member, index) => (
                      <div
                        key={member.id}
                        className="border-2 border-gray-300 p-4 bg-gray-50"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="font-bold text-lg">
                              {member.isFounder ? "👑 " : ""}
                              {member.name}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">
                              {member.role}
                            </div>
                          </div>
                          {member.isFounder && (
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs font-bold border border-yellow-300">
                              FOUNDER
                            </span>
                          )}
                        </div>

                        <div className="space-y-2 text-sm">
                          {member.email && (
                            <div className="flex items-center">
                              <span className="font-medium w-16">Email:</span>
                              <a
                                href={`mailto:${member.email}`}
                                className="text-blue-600 hover:underline"
                              >
                                {member.email}
                              </a>
                            </div>
                          )}
                          {member.linkedin && (
                            <div className="flex items-center">
                              <span className="font-medium w-16">
                                LinkedIn:
                              </span>
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                View Profile
                              </a>
                            </div>
                          )}
                        </div>

                        <div className="mt-3 p-3 bg-white border border-gray-300">
                          <div className="text-xs font-medium mb-1">
                            Background
                          </div>
                          <div className="text-xs text-gray-700">
                            {member.background}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advisors */}
                {currentStartup.advisors && (
                  <div className="border-2 border-gray-300 p-4 bg-gray-50">
                    <h4 className="text-lg font-bold mb-3">
                      Advisors & Mentors
                    </h4>
                    <div className="text-sm text-gray-700">
                      {currentStartup.advisors}
                    </div>
                  </div>
                )}
              </div>
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
                <h3 className="text-xl font-bold mb-6">
                  COLLATERAL MANAGEMENT
                </h3>

                {/* Collateral Status Alert */}
                {currentStartup.status === "Collateral Required" && (
                  <div className="mb-6 p-4 bg-yellow-50 border-2 border-yellow-300">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-6 w-6 text-yellow-600 mt-0.5" />
                      <div>
                        <div className="font-bold text-yellow-800 mb-2">
                          Collateral Required to Activate Startup
                        </div>
                        <div className="text-sm text-yellow-700 mb-3">
                          Your startup has been approved but requires collateral
                          to become active and start fundraising.
                        </div>
                        <div className="text-sm font-medium text-yellow-800 mb-2">
                          Required Collateral: $
                          {currentStartup.collateralRequired} ckUSDC
                        </div>
                        <button className="bg-yellow-600 text-white px-4 py-2 text-sm font-bold hover:bg-yellow-700">
                          ADD COLLATERAL NOW
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="border-2 border-black p-4 bg-white">
                    <div className="text-sm font-bold">Total Locked</div>
                    <div className="text-2xl font-bold">
                      ${currentStartup.collateralLocked.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">
                      Original collateral (ckUSDC)
                    </div>
                  </div>
                  <div className="border-2 border-black p-4 bg-white">
                    <div className="text-sm font-bold">Current Balance</div>
                    <div className="text-2xl font-bold">
                      ${currentStartup.remainingCollateral.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">
                      After deductions (ckUSDC)
                    </div>
                  </div>
                  <div className="border-2 border-black p-4 bg-white">
                    <div className="text-sm font-bold">Payment Method</div>
                    <div className="text-lg font-bold">
                      {currentStartup.collateralSource}
                    </div>
                    <div className="text-xs text-gray-600">
                      Original payment source
                    </div>
                  </div>
                </div>

                {/* Collateral Health Status */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold">Collateral Health</span>
                    <span className="text-sm font-bold">
                      {currentStartup.collateralStatus}
                    </span>
                  </div>
                  <div className="border-2 border-black h-6">
                    <div
                      className={`h-full ${
                        currentStartup.collateralStatus === "Healthy"
                          ? "bg-green-500"
                          : currentStartup.collateralStatus === "Warning"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{
                        width:
                          currentStartup.collateralLocked > 0
                            ? `${
                                (currentStartup.remainingCollateral /
                                  currentStartup.collateralLocked) *
                                100
                              }%`
                            : "0%",
                      }}
                    ></div>
                  </div>
                  <div className="text-xs mt-1 text-gray-600">
                    {currentStartup.collateralLocked > 0
                      ? `${Math.round(
                          (currentStartup.remainingCollateral /
                            currentStartup.collateralLocked) *
                            100
                        )}% remaining`
                      : "No collateral locked"}
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
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <FounderFooter />
    </div>
  );
};

export default FounderDashboard;
