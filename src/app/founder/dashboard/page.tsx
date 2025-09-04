"use client";

import {
  Calendar,
  DollarSign,
  Users,
  FileText,
  AlertCircle,
  TrendingUp,
  Eye,
  Upload,
  Save,
  Send,
  CheckCircle,
  Clock,
  Target,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FounderNavbar from "@/components/founder/FounderNavbar";
import FounderFooter from "@/components/founder/FounderFooter";
import CollateralTopUpModal from "@/components/founder/CollateralTopUpModal";
import MonthlyReportsComponent from "@/components/founder/MonthlyReportsComponent";
import ProfitSharingComponent from "@/components/founder/ProfitSharingComponent";
import InvestorsComponent from "@/components/founder/InvestorsComponent";
import FundingWithdrawalModal from "@/components/founder/FundingWithdrawalModal";

const FounderDashboard = () => {
  const router = useRouter();
  const [selectedStartup, setSelectedStartup] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [isTopUpModalOpen, setIsTopUpModalOpen] = useState(false);
  const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);

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
      collateralRequired: 4800, // 12 months × $400 + 10% buffer
      collateralDeposited: 4800, // Fully deposited
      collateralProgress: 100, // 100% complete
      collateralSource: "ckUSDC",
      collateralStatus: "AKTIF", // Active status
      topUpHistory: [
        { date: "2024-06-15", amount: 2000, type: "ICP" },
        { date: "2024-06-20", amount: 2800, type: "ckUSDC" },
      ],

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
      status: "PENDING",
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
      collateralRequired: 360, // 12 months × $30 + 10% buffer
      collateralDeposited: 180, // Partially deposited
      collateralProgress: 50, // 50% complete
      collateralSource: "ckUSDC",
      collateralStatus: "PENDING", // Pending status
      topUpHistory: [{ date: "2024-12-20", amount: 180, type: "ckUSDC" }],

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
      status: "PENDING",
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
      collateralRequired: 300, // 12 months × $25 + 10% buffer
      collateralDeposited: 0, // No deposits yet
      collateralProgress: 0, // 0% complete
      collateralSource: "Not Set",
      collateralStatus: "PENDING", // Pending status
      topUpHistory: [],

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
      value: startups.filter((s) => s.status === "AKTIF").length.toString(),
      subtext: `of ${startups.length} total`,
      icon: FileText,
      color: "text-black",
      bgColor: "bg-white",
    },
    {
      label: "Pending Startups",
      value: startups.filter((s) => s.status === "PENDING").length.toString(),
      subtext: "Awaiting collateral",
      icon: AlertCircle,
      color: "text-black",
      bgColor: "bg-white",
    },
    {
      label: "Draft Startups",
      value: startups.filter((s) => s.status === "Draft").length.toString(),
      subtext: "In development",
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

  const handleTopUp = (amount: number, type: "ICP" | "ckUSDC") => {
    const currentStartup = startups[selectedStartup];
    if (currentStartup) {
      // Update the startup's collateral data
      currentStartup.collateralDeposited += amount;
      currentStartup.collateralProgress = Math.round(
        (currentStartup.collateralDeposited /
          currentStartup.collateralRequired) *
          100
      );

      // Add to top-up history
      if (!currentStartup.topUpHistory) {
        currentStartup.topUpHistory = [];
      }
      currentStartup.topUpHistory.push({
        date: new Date().toISOString().split("T")[0],
        amount: amount,
        type: type,
      });

      // Update status if collateral is now complete
      if (currentStartup.collateralProgress >= 100) {
        currentStartup.status = "AKTIF";
      }

      // Force re-render by updating state
      setSelectedStartup(selectedStartup);
    }
  };

  return (
    <div className="bg-white text-black font-mono min-h-screen flex flex-col">
      <FounderNavbar />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="border-2 border-black p-4 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-black">{stat.subtext}</div>
                  <div className="text-xs font-medium mt-1">{stat.label}</div>
                </div>
                <div className={`p-3 rounded ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Startup Selector */}
        <div className="mb-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-black">Your Startups</h1>
              <div className="text-sm text-black">
                {startups.length} startup{startups.length !== 1 ? "s" : ""} •{" "}
                {startups.filter((s) => s.status === "AKTIF").length} active
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
                      : "border-transparent hover:border-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="">
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
                              ? "border-black bg-white text-black"
                              : currentStartup.status === "PENDING"
                              ? "border-black bg-white text-black"
                              : currentStartup.status === "Pending Review"
                              ? "border-black bg-white text-black"
                              : "border-black bg-white text-black"
                          }`}
                        >
                          {currentStartup.status}
                        </span>
                        <span className="border border-black px-3 py-1 text-sm">
                          {currentStartup.companyType}
                        </span>
                      </div>
                      <div className="text-sm text-black">
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
                              className="text-black hover:underline"
                            >
                              {currentStartup.website}
                            </a>
                          </span>
                        )}
                      </div>
                    </div>
                    <button className="border border-black px-4 py-2 text-sm hover:bg-white font-medium">
                      <Eye className="h-4 w-4 inline mr-1" />
                      View Public Page
                    </button>
                  </div>

                  {/* Startup Description */}
                  <div className="mb-6 p-4 bg-white border border-black">
                    <div className="text-sm font-medium mb-1">Description</div>
                    <div className="text-sm text-black">
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

                  <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-black">
                    <div>
                      <div className="text-xs text-black">
                        Monthly Commitment
                      </div>
                      <div className="font-bold">
                        ${currentStartup.monthlyCommitment} ckUSDC
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-black">Approval Rate</div>
                      <div className="font-bold text-black">
                        {currentStartup.approvalRate}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-black">Active Months</div>
                      <div className="font-bold">
                        {currentStartup.monthsActive} months
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status-Based Actions */}
                <div className="border-2 border-black p-6 bg-white">
                  <h3 className="text-lg font-bold mb-4 bg-white p-2">
                    {currentStartup.status === "AKTIF"
                      ? "🚨 URGENT ACTIONS REQUIRED"
                      : currentStartup.status === "PENDING"
                      ? "⚠️ COLLATERAL TOP-UP REQUIRED"
                      : "📋 STARTUP STATUS"}
                  </h3>
                  <div className="space-y-3">
                    {currentStartup.status === "AKTIF" && (
                      <>
                        <div className="flex items-center justify-between border border-black p-3 bg-white">
                          <div>
                            <div className="font-bold text-sm">
                              January Monthly Report Due
                            </div>
                            <div className="text-xs text-black">
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

                        <div className="flex items-center justify-between border border-black p-3 bg-white">
                          <div>
                            <div className="font-bold text-sm">
                              Collateral Health Check
                            </div>
                            <div className="text-xs text-black">
                              Monitor collateral balance
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-black">
                              {currentStartup.collateralStatus}
                            </div>
                            <button
                              onClick={() => setIsTopUpModalOpen(true)}
                              className="border border-black px-3 py-1 text-xs mt-1 hover:bg-white"
                            >
                              TOP UP
                            </button>
                          </div>
                        </div>
                      </>
                    )}

                    {currentStartup.status === "PENDING" && (
                      <div className="flex items-center justify-between border border-black p-3 bg-white">
                        <div>
                          <div className="font-bold text-sm">
                            Top-Up Collateral to Activate
                          </div>
                          <div className="text-xs text-black">
                            Progress: {currentStartup.collateralProgress}% •
                            Deposited: ${currentStartup.collateralDeposited} / $
                            {currentStartup.collateralRequired} ckUSDC
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-black">
                            {currentStartup.collateralProgress}% Complete
                          </div>
                          <button
                            onClick={() => setIsTopUpModalOpen(true)}
                            className="bg-black text-white px-3 py-1 text-xs mt-1 hover:bg-gray-800"
                          >
                            TOP UP NOW
                          </button>
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
                        className="border-2 border-black p-4 bg-white"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="font-bold text-lg">
                              {member.isFounder ? "👑 " : ""}
                              {member.name}
                            </div>
                            <div className="text-sm text-black font-medium">
                              {member.role}
                            </div>
                          </div>
                          {member.isFounder && (
                            <span className="bg-white text-black px-2 py-1 text-xs font-bold border border-black">
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
                                className="text-black hover:underline"
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
                                className="text-black hover:underline"
                              >
                                View Profile
                              </a>
                            </div>
                          )}
                        </div>

                        <div className="mt-3 p-3 bg-white border border-black">
                          <div className="text-xs font-medium mb-1">
                            Background
                          </div>
                          <div className="text-xs text-black">
                            {member.background}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advisors */}
                {currentStartup.advisors && (
                  <div className="border-2 border-black p-4 bg-white">
                    <h4 className="text-lg font-bold mb-3">
                      Advisors & Mentors
                    </h4>
                    <div className="text-sm text-black">
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
                  <div className="text-xs mt-1 text-black">
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
                    <div className="text-xs text-black">
                      80% of raised funds (ckUSDC)
                    </div>
                    <button
                      onClick={() => setIsWithdrawalModalOpen(true)}
                      className="w-full border border-black py-2 mt-2 text-sm hover:bg-white"
                    >
                      REQUEST WITHDRAWAL
                    </button>
                  </div>
                  <div className="border border-black p-4">
                    <div className="text-sm font-bold">Platform Reserve</div>
                    <div className="text-2xl font-bold">
                      ${(currentStartup.fundingRaised * 0.2).toLocaleString()}
                    </div>
                    <div className="text-xs text-black">
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

            {activeTab === "reports" && (
              <MonthlyReportsComponent
                startupName={currentStartup.name}
                onReportSubmit={(report) => {
                  console.log("Report submitted:", report);
                  // Handle report submission logic here
                }}
                onReportSave={(report) => {
                  console.log("Report saved:", report);
                  // Handle report save logic here
                }}
              />
            )}

            {activeTab === "payments" && (
              <ProfitSharingComponent
                startupName={currentStartup.name}
                monthlyCommitment={currentStartup.monthlyCommitment}
                totalInvestors={currentStartup.nftsSold}
                onPaymentSubmit={(payment) => {
                  console.log("Payment submitted:", payment);
                  // Handle payment submission logic here
                }}
              />
            )}

            {activeTab === "collateral" && (
              <div className="border-2 border-black p-6 bg-white">
                <h3 className="text-xl font-bold mb-6">
                  COLLATERAL MANAGEMENT
                </h3>

                {/* Collateral Status Alert */}
                {currentStartup.status === "Collateral Required" && (
                  <div className="mb-6 p-4 bg-white border-2 border-black">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-6 w-6 text-black mt-0.5" />
                      <div>
                        <div className="font-bold text-black mb-2">
                          Collateral Required to Activate Startup
                        </div>
                        <div className="text-sm text-black mb-3">
                          Your startup has been approved but requires collateral
                          to become active and start fundraising.
                        </div>
                        <div className="text-sm font-medium text-black mb-2">
                          Required Collateral: $
                          {currentStartup.collateralRequired} ckUSDC
                        </div>
                        <button className="bg-black text-white px-4 py-2 text-sm font-bold hover:bg-gray-800">
                          ADD COLLATERAL NOW
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="border-2 border-black p-4 bg-white">
                    <div className="text-sm font-bold">Required Amount</div>
                    <div className="text-2xl font-bold">
                      ${currentStartup.collateralRequired.toLocaleString()}
                    </div>
                    <div className="text-xs text-black">
                      Total collateral needed (ckUSDC)
                    </div>
                  </div>
                  <div className="border-2 border-black p-4 bg-white">
                    <div className="text-sm font-bold">Deposited Amount</div>
                    <div className="text-2xl font-bold">
                      ${currentStartup.collateralDeposited.toLocaleString()}
                    </div>
                    <div className="text-xs text-black">
                      Current deposits (ckUSDC)
                    </div>
                  </div>
                  <div className="border-2 border-black p-4 bg-white">
                    <div className="text-sm font-bold">Progress</div>
                    <div className="text-2xl font-bold">
                      {currentStartup.collateralProgress}%
                    </div>
                    <div className="text-xs text-black">Completion status</div>
                  </div>
                </div>

                {/* Collateral Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold">
                      Collateral Progress
                    </span>
                    <span className="text-sm font-bold">
                      {currentStartup.collateralStatus}
                    </span>
                  </div>
                  <div className="border-2 border-black h-6">
                    <div
                      className={`h-full ${
                        currentStartup.collateralProgress === 100
                          ? "bg-black"
                          : currentStartup.collateralProgress >= 50
                          ? "bg-gray-600"
                          : "bg-gray-400"
                      }`}
                      style={{
                        width: `${currentStartup.collateralProgress}%`,
                      }}
                    ></div>
                  </div>
                  <div className="text-xs mt-1 text-black">
                    {currentStartup.collateralProgress}% complete • $
                    {currentStartup.collateralRequired -
                      currentStartup.collateralDeposited}{" "}
                    remaining
                  </div>
                </div>

                <div className="border border-black p-4 mb-4">
                  <div className="text-sm font-bold mb-2">Top-Up History</div>
                  <div className="space-y-2 text-xs">
                    {currentStartup.topUpHistory &&
                    currentStartup.topUpHistory.length > 0 ? (
                      currentStartup.topUpHistory.map((topup, index) => (
                        <div key={index} className="flex justify-between">
                          <span>
                            {new Date(topup.date).toLocaleDateString()} -{" "}
                            {topup.type}
                          </span>
                          <span className="font-bold text-black">
                            +${topup.amount.toLocaleString()} ckUSDC
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="text-black">No top-ups yet</div>
                    )}
                  </div>
                </div>

                {currentStartup.collateralProgress < 100 && (
                  <div className="bg-white border border-black p-4">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-black mt-0.5" />
                      <div>
                        <div className="font-bold text-sm">
                          Complete Collateral to Activate
                        </div>
                        <div className="text-xs mt-1">
                          You need $
                          {currentStartup.collateralRequired -
                            currentStartup.collateralDeposited}{" "}
                          more ckUSDC to activate your startup and launch NFTs.
                        </div>
                        <button
                          className="bg-black text-white px-4 py-2 text-xs mt-2 hover:bg-gray-800"
                          onClick={() => setIsTopUpModalOpen(true)}
                        >
                          TOP UP NOW
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "investors" && (
              <InvestorsComponent
                startupName={currentStartup.name}
                totalInvestors={currentStartup.nftsSold}
                totalInvestment={currentStartup.fundingRaised}
                onInvestorAction={(investorId, action) => {
                  console.log("Investor action:", investorId, action);
                  // Handle investor action logic here
                }}
              />
            )}
          </div>
        </div>
      </div>

      <FounderFooter />

      {/* Collateral Top-Up Modal */}
      <CollateralTopUpModal
        isOpen={isTopUpModalOpen}
        onClose={() => setIsTopUpModalOpen(false)}
        startup={startups[selectedStartup]}
        onTopUp={handleTopUp}
      />

      {/* Funding Withdrawal Modal */}
      <FundingWithdrawalModal
        isOpen={isWithdrawalModalOpen}
        onClose={() => setIsWithdrawalModalOpen(false)}
        startupName={currentStartup.name}
        availableFunds={currentStartup.fundingRaised * 0.8}
        totalRaised={currentStartup.fundingRaised}
        onWithdrawalRequest={(request) => {
          console.log("Withdrawal request submitted:", request);
          // Handle withdrawal request logic here
        }}
      />
    </div>
  );
};

export default FounderDashboard;
