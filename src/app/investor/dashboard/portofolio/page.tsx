"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const PlantifyPortfolioDetail = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const router = useRouter();
  // Mock data untuk startup detail
  const startupData = {
    id: 1,
    name: "GreenFarm Organics",
    sector: "Agriculture",
    founded: "2023-01-15",
    location: "Bandung, West Java",
    website: "greenfarm-organics.com",
    description: "Organic vegetable farming using hydroponic technology for sustainable agriculture in urban areas.",
    
    // Investment Info
    myInvestment: {
      totalInvested: 500,
      nftCount: 10,
      nftPrice: 50,
      investmentDate: "2024-06-15",
      lockPeriod: "36 months",
      remainingMonths: 28
    },

    // Performance Data
    performance: {
      monthlyReturns: 67,
      totalReturns: 201,
      roi: 40.2,
      avgMonthlyGrowth: 3.2,
      lastPayment: "2024-09-01",
      nextPayment: "2024-10-01",
      paymentStatus: "On Time"
    },

    // Startup Metrics
    metrics: {
      revenue: 12500,
      expenses: 8200,
      netProfit: 4300,
      growth: 15,
      customers: 245,
      employees: 8,
      valuation: 450000
    },

    // Founder Info
    founder: {
      name: "Budi Santoso",
      experience: "7 years in agriculture",
      background: "Agricultural Engineering, ITB",
      previousStartups: 1,
      linkedIn: "linkedin.com/in/budisantoso"
    }
  };

  // Mock progress reports
  const progressReports = [
    {
      id: 1,
      month: "September 2024",
      revenue: 12500,
      target: 10000,
      profit: 4300,
      status: "Approved",
      votes: { approve: 142, reject: 8 },
      submittedDate: "2024-09-05",
      summary: "Exceeded monthly target by 25%. Launched new product line of organic herbs."
    },
    {
      id: 2,
      month: "August 2024",
      revenue: 10800,
      target: 10000,
      profit: 3600,
      status: "Approved",
      votes: { approve: 134, reject: 16 },
      submittedDate: "2024-08-05",
      summary: "Met revenue target. Expanded to 3 new retail partners."
    },
    {
      id: 3,
      month: "July 2024",
      revenue: 9200,
      target: 9500,
      profit: 2800,
      status: "Approved",
      votes: { approve: 128, reject: 22 },
      submittedDate: "2024-07-05",
      summary: "Slightly below target due to weather challenges. Implemented backup systems."
    }
  ];

  // Mock transaction history
  const transactions = [
    {
      id: 1,
      type: "Profit Sharing",
      amount: 67,
      date: "2024-09-01",
      status: "Completed",
      txHash: "0x1a2b3c...",
      description: "Monthly profit distribution - September 2024"
    },
    {
      id: 2,
      type: "Profit Sharing",
      amount: 58,
      date: "2024-08-01",
      status: "Completed",
      txHash: "0x2b3c4d...",
      description: "Monthly profit distribution - August 2024"
    },
    {
      id: 3,
      type: "Investment",
      amount: -500,
      date: "2024-06-15",
      status: "Completed",
      txHash: "0x3c4d5e...",
      description: "Initial investment - 10 NFTs purchased"
    }
  ];

  const renderOverviewSection = () => (
    <div className="space-y-6">
      {/* Startup Basic Info */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
          STARTUP INFORMATION
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div>
              <div className="text-sm font-bold">Company Name</div>
              <div>{startupData.name}</div>
            </div>
            <div>
              <div className="text-sm font-bold">Sector</div>
              <div className="border border-black px-2 py-1 inline-block text-sm">
                {startupData.sector}
              </div>
            </div>
            <div>
              <div className="text-sm font-bold">Founded</div>
              <div>{startupData.founded}</div>
            </div>
            <div>
              <div className="text-sm font-bold">Location</div>
              <div>{startupData.location}</div>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <div className="text-sm font-bold">Website</div>
              <div className="text-blue-600 underline">{startupData.website}</div>
            </div>
            <div>
              <div className="text-sm font-bold">Description</div>
              <div className="text-sm">{startupData.description}</div>
            </div>
            <div>
              <div className="text-sm font-bold">Valuation</div>
              <div className="text-lg font-bold">${startupData.metrics.valuation.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* My Investment Summary */}
      <div className="border-2 border-black p-6 bg-blue-50">
        <h3 className="text-xl font-bold mb-4 bg-blue-600 text-white p-2">
          MY INVESTMENT SUMMARY
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border border-black p-4 bg-white">
            <div className="text-sm font-bold mb-1">TOTAL INVESTED</div>
            <div className="text-2xl font-bold">${startupData.myInvestment.totalInvested}</div>
            <div className="text-xs text-gray-600">{startupData.myInvestment.nftCount} NFTs @ ${startupData.myInvestment.nftPrice}</div>
          </div>
          <div className="border border-black p-4 bg-white">
            <div className="text-sm font-bold mb-1">TOTAL RETURNS</div>
            <div className="text-2xl font-bold text-green-600">+${startupData.performance.totalReturns}</div>
            <div className="text-xs text-gray-600">{startupData.performance.roi}% ROI</div>
          </div>
          <div className="border border-black p-4 bg-white">
            <div className="text-sm font-bold mb-1">MONTHLY INCOME</div>
            <div className="text-2xl font-bold text-blue-600">${startupData.performance.monthlyReturns}</div>
            <div className="text-xs text-gray-600">Current average</div>
          </div>
          <div className="border border-black p-4 bg-white">
            <div className="text-sm font-bold mb-1">REMAINING PERIOD</div>
            <div className="text-2xl font-bold">{startupData.myInvestment.remainingMonths}</div>
            <div className="text-xs text-gray-600">Months left</div>
          </div>
        </div>
      </div>

      {/* Current Performance Metrics */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-green-600 text-white p-2">
          CURRENT PERFORMANCE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-4">
            <div className="border border-black p-3">
              <div className="text-sm font-bold mb-1">Monthly Revenue</div>
              <div className="text-xl font-bold">${startupData.metrics.revenue.toLocaleString()}</div>
              <div className="text-xs text-green-600">+{startupData.metrics.growth}% from last month</div>
            </div>
            <div className="border border-black p-3">
              <div className="text-sm font-bold mb-1">Net Profit</div>
              <div className="text-xl font-bold text-green-600">${startupData.metrics.netProfit.toLocaleString()}</div>
              <div className="text-xs text-gray-600">Profit margin: 34.4%</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border border-black p-3">
              <div className="text-sm font-bold mb-1">Total Customers</div>
              <div className="text-xl font-bold">{startupData.metrics.customers}</div>
              <div className="text-xs text-blue-600">+45 this month</div>
            </div>
            <div className="border border-black p-3">
              <div className="text-sm font-bold mb-1">Team Size</div>
              <div className="text-xl font-bold">{startupData.metrics.employees}</div>
              <div className="text-xs text-gray-600">Full-time employees</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border border-black p-3">
              <div className="text-sm font-bold mb-1">Payment Status</div>
              <div className="text-lg font-bold text-green-600">{startupData.performance.paymentStatus}</div>
              <div className="text-xs text-gray-600">Last: {startupData.performance.lastPayment}</div>
            </div>
            <div className="border border-black p-3">
              <div className="text-sm font-bold mb-1">Next Payment</div>
              <div className="text-lg font-bold">{startupData.performance.nextPayment}</div>
              <div className="text-xs text-gray-600">Expected amount: $67</div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Information */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-gray-800 text-white p-2">
          FOUNDER PROFILE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div>
              <div className="text-sm font-bold">Name</div>
              <div>{startupData.founder.name}</div>
            </div>
            <div>
              <div className="text-sm font-bold">Experience</div>
              <div>{startupData.founder.experience}</div>
            </div>
            <div>
              <div className="text-sm font-bold">Background</div>
              <div>{startupData.founder.background}</div>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <div className="text-sm font-bold">Previous Startups</div>
              <div>{startupData.founder.previousStartups} company</div>
            </div>
            <div>
              <div className="text-sm font-bold">LinkedIn</div>
              <div className="text-blue-600 underline">{startupData.founder.linkedIn}</div>
            </div>
            <div className="pt-2">
              <button className="border border-black px-4 py-2 text-sm hover:bg-gray-100">
                Contact Founder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReportsSection = () => (
    <div className="space-y-6">
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
          MONTHLY PROGRESS REPORTS
        </h3>
        
        <div className="space-y-4">
          {progressReports.map((report) => (
            <div key={report.id} className="border-2 border-black p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-lg font-bold">{report.month}</h4>
                  <div className="text-sm text-gray-600">Submitted: {report.submittedDate}</div>
                </div>
                <div className={`px-3 py-1 text-sm font-bold ${
                  report.status === 'Approved' 
                    ? 'bg-green-100 text-green-800 border border-green-500' 
                    : 'bg-red-100 text-red-800 border border-red-500'
                }`}>
                  {report.status}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="border border-black p-3">
                  <div className="text-sm font-bold mb-1">Revenue</div>
                  <div className="text-lg font-bold">${report.revenue.toLocaleString()}</div>
                  <div className="text-xs">
                    Target: ${report.target.toLocaleString()} 
                    <span className={report.revenue >= report.target ? 'text-green-600' : 'text-red-600'}>
                      ({report.revenue >= report.target ? '+' : ''}{((report.revenue - report.target) / report.target * 100).toFixed(1)}%)
                    </span>
                  </div>
                </div>
                <div className="border border-black p-3">
                  <div className="text-sm font-bold mb-1">Net Profit</div>
                  <div className="text-lg font-bold text-green-600">${report.profit.toLocaleString()}</div>
                  <div className="text-xs text-gray-600">
                    Margin: {(report.profit / report.revenue * 100).toFixed(1)}%
                  </div>
                </div>
                <div className="border border-black p-3">
                  <div className="text-sm font-bold mb-1">Community Vote</div>
                  <div className="text-sm">
                    <span className="text-green-600">{report.votes.approve} Approve</span> / 
                    <span className="text-red-600"> {report.votes.reject} Reject</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    {((report.votes.approve / (report.votes.approve + report.votes.reject)) * 100).toFixed(1)}% approval
                  </div>
                </div>
              </div>

              <div className="border border-black p-3 bg-gray-50">
                <div className="text-sm font-bold mb-1">Executive Summary:</div>
                <div className="text-sm">{report.summary}</div>
              </div>

              <div className="flex gap-2 mt-3">
                <button className="border border-black px-4 py-2 text-sm hover:bg-gray-100">
                  View Full Report
                </button>
                <button className="border border-black px-4 py-2 text-sm hover:bg-gray-100">
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTransactionsSection = () => (
    <div className="space-y-6">
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
          TRANSACTION HISTORY
        </h3>
        
        <div className="space-y-3">
          {transactions.map((tx) => (
            <div key={tx.id} className="border-2 border-black p-4 flex justify-between items-center">
              <div>
                <div className="font-bold">{tx.type}</div>
                <div className="text-sm text-gray-600">{tx.description}</div>
                <div className="text-xs text-gray-500">
                  TX: {tx.txHash} • {tx.date}
                </div>
              </div>
              <div className="text-right">
                <div className={`text-xl font-bold ${
                  tx.amount > 0 ? 'text-green-600' : 'text-blue-600'
                }`}>
                  {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount)}
                </div>
                <div className={`text-xs px-2 py-1 ${
                  tx.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {tx.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="border border-black px-6 py-2 text-sm hover:bg-gray-100">
            Export Transaction History
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <header className="border-b-2 border-black p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold border-2 border-black px-4 py-2">
              PLANTIFY
            </div>
            <button onClick={() => router.push(`/investor/dashboard`)} className="text-sm hover:underline">
              ← Back to Portfolio
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm">Portfolio Detail</div>
            <div className="text-sm border border-black px-3 py-1">
              Balance: $1,250 ckUSDC
            </div>
          </div>
        </div>
      </header>

      {/* Startup Header */}
      <div className="border-b border-black bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">{startupData.name}</h1>
              <div className="flex items-center space-x-4 text-sm">
                <span className="border border-black px-2 py-1">{startupData.sector}</span>
                <span>📍 {startupData.location}</span>
                <span>🌐 {startupData.website}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">My Investment</div>
              <div className="text-2xl font-bold">${startupData.myInvestment.totalInvested}</div>
              <div className="text-sm">
                <span className="text-green-600">+${startupData.performance.totalReturns}</span>
                <span className="text-gray-600"> ({startupData.performance.roi}% ROI)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto flex">
          {[
            { id: "overview", label: "OVERVIEW", icon: "📊" },
            { id: "reports", label: "PROGRESS REPORTS", icon: "📈" },
            { id: "transactions", label: "TRANSACTIONS", icon: "💰" },
            { id: "documents", label: "DOCUMENTS", icon: "📄" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`px-6 py-4 text-sm font-bold border-r border-black ${
                activeSection === tab.id
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {activeSection === "overview" && renderOverviewSection()}
        {activeSection === "reports" && renderReportsSection()}
        {activeSection === "transactions" && renderTransactionsSection()}
        {activeSection === "documents" && (
          <div className="border-2 border-black p-6">
            <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
              STARTUP DOCUMENTS
            </h3>
            <div className="text-center py-12 text-gray-500">
              Documents section coming soon...
            </div>
          </div>
        )}
      </div>

      {/* Action Bar */}
      <div className="border-t-2 border-black bg-gray-50 p-4 sticky bottom-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              <span className="font-bold">Next Payment:</span> {startupData.performance.nextPayment}
            </div>
            <div className="text-sm">
              <span className="font-bold">Expected:</span> ${startupData.performance.monthlyReturns}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="border border-black px-4 py-2 text-sm hover:bg-gray-100">
              Add Investment
            </button>
            <button className="border border-black px-4 py-2 text-sm hover:bg-gray-100">
              Contact Support
            </button>
            <button className="bg-black text-white px-6 py-2 text-sm">
              Vote on Latest Report
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-black py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
          <div>© 2024 Plantify. Built on Internet Computer Protocol.</div>
        </div>
      </footer>
    </div>
  );
};

export default PlantifyPortfolioDetail;