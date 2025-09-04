"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const InvestorProfile = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("personal");
  const [isEditing, setIsEditing] = useState(false);

  // Mock investor data berdasarkan context Plantify
  const investorData = {
    personal: {
      name: "Ahmad Wijaya",
      email: "ahmad.wijaya@email.com",
      phone: "+62 812-3456-7890",
      location: "Jakarta, Indonesia",
      occupation: "Senior Software Engineer",
      company: "TechCorp Indonesia",
      experience: "15+ years in technology sector",
      education: "MSc Computer Science, UI",
      bio: "Experienced investor with focus on sustainable agriculture and technology startups."
    },
    
    investment: {
      riskProfile: "Moderate",
      investmentGoals: ["Portfolio Diversification", "Sustainable Returns", "Support Local Startups"],
      preferredSectors: ["Agriculture", "Technology", "Food & Beverage", "Services"],
      investmentHorizon: "5-10 years",
      monthlyInvestmentBudget: 1000,
      totalInvested: 2450,
      totalReturns: 187,
      activeInvestments: 12,
      portfolioValue: 2637,
      averageROI: 7.6
    },

    portfolio: {
      startups: [
        { name: "EcoFarm Solutions", invested: 500, returns: 45, nfts: 10, status: "Active" },
        { name: "SmartCafe Tech", invested: 300, returns: 33, nfts: 6, status: "Active" },
        { name: "GreenFarm Organics", invested: 200, returns: 18, nfts: 4, status: "Active" }
      ],
      sectorAllocation: [
        { sector: "Agriculture", percentage: 45, amount: 1100 },
        { sector: "Technology", percentage: 30, amount: 750 },
        { sector: "Food & Beverage", percentage: 15, amount: 400 },
        { sector: "Services", percentage: 10, amount: 200 }
      ]
    }
  };

  const renderPersonalTab = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="border-2 border-black p-6 bg-blue-50">
        <div className="flex items-center space-x-6">
          <div className="text-6xl border-4 border-black p-4 bg-white">
            👨‍💼
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">{investorData.personal.name}</h2>
            <div className="text-sm text-gray-600 mb-3">
              {investorData.personal.occupation} at {investorData.personal.company}
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span>📍 {investorData.personal.location}</span>
              <span>📧 {investorData.personal.email}</span>
              <span>📱 {investorData.personal.phone}</span>
            </div>
          </div>
          <div className="text-right">
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="bg-black text-white px-4 py-2 text-sm hover:bg-gray-800"
            >
              {isEditing ? "💾 Save Changes" : "✏️ Edit Profile"}
            </button>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-green-600 text-white p-2">
          📋 PERSONAL INFORMATION
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-1">Full Name</label>
              <input
                type="text"
                defaultValue={investorData.personal.name}
                disabled={!isEditing}
                className="w-full border-2 border-black p-2 text-sm disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Email Address</label>
              <input
                type="email"
                defaultValue={investorData.personal.email}
                disabled={!isEditing}
                className="w-full border-2 border-black p-2 text-sm disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Phone Number</label>
              <input
                type="tel"
                defaultValue={investorData.personal.phone}
                disabled={!isEditing}
                className="w-full border-2 border-black p-2 text-sm disabled:bg-gray-100"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-1">Location</label>
              <input
                type="text"
                defaultValue={investorData.personal.location}
                disabled={!isEditing}
                className="w-full border-2 border-black p-2 text-sm disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Occupation</label>
              <input
                type="text"
                defaultValue={investorData.personal.occupation}
                disabled={!isEditing}
                className="w-full border-2 border-black p-2 text-sm disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Company</label>
              <input
                type="text"
                defaultValue={investorData.personal.company}
                disabled={!isEditing}
                className="w-full border-2 border-black p-2 text-sm disabled:bg-gray-100"
              />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6">
          <label className="block text-sm font-bold mb-2">Bio</label>
          <textarea
            defaultValue={investorData.personal.bio}
            disabled={!isEditing}
            rows={4}
            className="w-full border-2 border-black p-2 text-sm disabled:bg-gray-100"
          />
        </div>
      </div>
    </div>
  );

  const renderInvestmentTab = () => (
    <div className="space-y-6">
      {/* Investment Profile Overview */}
      <div className="border-2 border-black p-6 bg-green-50">
        <h3 className="text-xl font-bold mb-4 bg-green-600 text-white p-2">
          💰 INVESTMENT PROFILE
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 border border-black bg-white">
            <div className="text-2xl font-bold text-green-600">{investorData.investment.riskProfile}</div>
            <div className="text-xs">Risk Profile</div>
          </div>
          <div className="text-center p-4 border border-black bg-white">
            <div className="text-2xl font-bold text-blue-600">{investorData.investment.investmentHorizon}</div>
            <div className="text-xs">Investment Horizon</div>
          </div>
          <div className="text-center p-4 border border-black bg-white">
            <div className="text-2xl font-bold text-purple-600">${investorData.investment.monthlyInvestmentBudget}</div>
            <div className="text-xs">Monthly Budget</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-3">Investment Goals</h4>
            <div className="space-y-2">
              {investorData.investment.investmentGoals.map((goal, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-green-600 mr-2">🎯</span>
                  <span className="text-sm">{goal}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-3">Preferred Sectors</h4>
            <div className="space-y-2">
              {investorData.investment.preferredSectors.map((sector, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-blue-600 mr-2">🏭</span>
                  <span className="text-sm">{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Investment Statistics */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-blue-600 text-white p-2">
          📊 INVESTMENT STATISTICS
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 border border-black">
            <div className="text-2xl font-bold text-green-600">
              ${investorData.investment.totalInvested.toLocaleString()}
            </div>
            <div className="text-xs">Total Invested</div>
          </div>
          <div className="text-center p-4 border border-black">
            <div className="text-2xl font-bold text-blue-600">
              ${investorData.investment.totalReturns.toLocaleString()}
            </div>
            <div className="text-xs">Total Returns</div>
          </div>
          <div className="text-center p-4 border border-black">
            <div className="text-2xl font-bold text-purple-600">
              {investorData.investment.activeInvestments}
            </div>
            <div className="text-xs">Active Investments</div>
          </div>
          <div className="text-center p-4 border border-black">
            <div className="text-2xl font-bold text-orange-600">
              {investorData.investment.averageROI}%
            </div>
            <div className="text-xs">Average ROI</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPortfolioTab = () => (
    <div className="space-y-6">
      {/* Portfolio Performance */}
      <div className="border-2 border-black p-6 bg-purple-50">
        <h3 className="text-xl font-bold mb-4 bg-purple-600 text-white p-2">
          📈 PORTFOLIO PERFORMANCE
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 border border-black bg-white">
            <div className="text-2xl font-bold text-green-600">
              ${investorData.investment.totalInvested.toLocaleString()}
            </div>
            <div className="text-xs">Total Invested</div>
          </div>
          <div className="text-center p-4 border border-black bg-white">
            <div className="text-2xl font-bold text-blue-600">
              ${investorData.investment.portfolioValue.toLocaleString()}
            </div>
            <div className="text-xs">Current Value</div>
          </div>
          <div className="text-center p-4 border border-black bg-white">
            <div className="text-2xl font-bold text-purple-600">
              ${investorData.investment.totalReturns.toLocaleString()}
            </div>
            <div className="text-xs">Total Returns</div>
          </div>
        </div>
      </div>

      {/* Startup Investments */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-green-600 text-white p-2">
          🏢 STARTUP INVESTMENTS
        </h3>
        
        <div className="space-y-3">
          {investorData.portfolio.startups.map((startup, index) => (
            <div key={index} className="border border-black p-4 hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🏢</div>
                  <div>
                    <div className="font-bold">{startup.name}</div>
                    <div className="text-sm text-gray-600">
                      {startup.nfts} NFTs • Status: {startup.status}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold">${startup.invested}</div>
                  <div className="text-sm text-green-600">+${startup.returns} returns</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sector Allocation */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-blue-600 text-white p-2">
          🏭 SECTOR ALLOCATION
        </h3>
        
        <div className="space-y-4">
          {investorData.portfolio.sectorAllocation.map((sector, index) => (
            <div key={index} className="border border-black p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">{sector.sector}</span>
                <span className="text-sm">{sector.percentage}%</span>
              </div>
              <div className="w-full border border-black h-4">
                <div 
                  className="bg-blue-500 h-full" 
                  style={{ width: `${sector.percentage}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                ${sector.amount.toLocaleString()}
              </div>
            </div>
          ))}
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
            <button 
              onClick={() => router.back()}
              className="text-sm hover:underline border border-black px-3 py-1"
            >
              ← Back
            </button>
            <div className="text-2xl font-bold border-2 border-black px-4 py-2">
              PLANTIFY
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm">Investor Profile</div>
            <button className="bg-black text-white px-4 py-2 text-sm hover:bg-gray-800">
              💾 Save All Changes
            </button>
          </div>
        </div>
      </header>

      {/* Profile Navigation Tabs */}
      <div className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto flex">
          {[
            { id: "personal", label: "PERSONAL INFO", icon: "👤" },
            { id: "investment", label: "INVESTMENT", icon: "💰" },
            { id: "portfolio", label: "PORTFOLIO", icon: "💼" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-bold border-r border-black ${
                activeTab === tab.id
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
        {activeTab === "personal" && renderPersonalTab()}
        {activeTab === "investment" && renderInvestmentTab()}
        {activeTab === "portfolio" && renderPortfolioTab()}
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-black py-4 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
          <div>© 2024 Plantify. Built on Internet Computer Protocol.</div>
        </div>
      </footer>
    </div>
  );
};

export default InvestorProfile;
