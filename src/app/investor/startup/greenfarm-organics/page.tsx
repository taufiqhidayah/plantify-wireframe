"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const GreenFarmOrganicsDetail = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [showInvestmentModal, setShowInvestmentModal] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState(50);
  const [nftQuantity, setNftQuantity] = useState(1);

  // Mock data untuk GreenFarm Organics
  const startupData = {
    id: 1,
    name: "GreenFarm Organics",
    sector: "Agriculture",
    location: "Surabaya, East Java",
    founded: "2022",
    founder: "Budi Santoso",
    teamSize: 15,
    stage: "Growth Stage",
    description: "Leading organic farming company specializing in sustainable agriculture practices, producing high-quality organic vegetables and fruits for premium markets.",
    
    // Financial Data
    financials: {
      nftPrice: 50,
      monthlyReturn: 6.7,
      minInvestment: 50,
      totalFunding: 5000,
      raisedAmount: 5000,
      fundingProgress: 100,
      targetAmount: 5000,
      monthlyRevenue: 12000,
      monthlyExpenses: 7500,
      netProfit: 4500,
      profitMargin: 37.5,
      burnRate: 0,
      runway: "24 months"
    },

    // Business Metrics
    metrics: {
      customers: 85,
      partnerships: 12,
      locations: 4,
      products: 25,
      patents: 1,
      certifications: 8
    },

    // Team
    team: [
      {
        name: "Budi Santoso",
        role: "CEO & Founder",
        experience: "20+ years in agriculture",
        education: "MSc Agricultural Engineering, IPB",
        photo: "👨‍🌾"
      },
      {
        name: "Siti Rahayu",
        role: "Head of Operations",
        experience: "15+ years in farm management",
        education: "BSc Agriculture, UGM",
        photo: "👩‍🌾"
      },
      {
        name: "Ahmad Wijaya",
        role: "Head of Sales & Marketing",
        experience: "12+ years in agri-business",
        education: "MBA Business, UI",
        photo: "👨‍💼"
      }
    ],

    // Products & Services
    products: [
      "Organic Vegetables (Tomatoes, Lettuce, Spinach)",
      "Organic Fruits (Strawberries, Melons, Citrus)",
      "Organic Herbs & Spices",
      "Organic Seeds & Seedlings",
      "Farm Consulting Services",
      "Organic Certification Support"
    ],

    // Market Analysis
    market: {
      size: "3.2B USD",
      growth: "15.8% annually",
      competition: "Medium",
      barriers: "High",
      opportunities: "Export markets, premium retail partnerships, organic certification"
    },

    // Risk Assessment
    risks: [
      "Weather dependency and climate change",
      "Organic certification costs and regulations",
      "Supply chain disruptions",
      "Premium pricing sensitivity"
    ],

    // Growth Plans
    growthPlans: [
      "Expand to 8 locations by 2026",
      "Launch organic food delivery service",
      "Enter export markets (Singapore, Malaysia)",
      "Develop hydroponic farming technology",
      "Partnership with major supermarket chains"
    ],

    // Investment Terms
    investmentTerms: {
      minInvestment: 50,
      maxInvestment: 2000,
      lockPeriod: "36 months",
      exitStrategy: "IPO or strategic acquisition in 7-10 years",
      votingRights: "Yes",
      profitSharing: "Monthly",
      governance: "Board observer rights + quarterly updates"
    }
  };

  const calculateReturns = (amount: number, quantity: number) => {
    const monthlyReturn = startupData.financials.monthlyReturn * quantity;
    const annualReturn = (monthlyReturn * 12 / amount) * 100;
    return {
      monthlyReturn,
      annualReturn,
      totalReturn: monthlyReturn * 12
    };
  };

  const handleInvestNow = () => {
    setShowInvestmentModal(true);
  };

  const confirmInvestment = () => {
    alert(`Investment of $${investmentAmount} in ${startupData.name} confirmed!`);
    setShowInvestmentModal(false);
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Company Description */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-green-600 text-white p-2">
          COMPANY OVERVIEW
        </h3>
        <div className="text-sm leading-relaxed">
          <p className="mb-4">{startupData.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="text-center p-3 border border-black">
              <div className="text-lg font-bold text-green-600">{startupData.founded}</div>
              <div className="text-xs">Founded</div>
            </div>
            <div className="text-center p-3 border border-black">
              <div className="text-lg font-bold">{startupData.teamSize}</div>
              <div className="text-xs">Team Members</div>
            </div>
            <div className="text-center p-3 border border-black">
              <div className="text-lg font-bold text-blue-600">{startupData.stage}</div>
              <div className="text-xs">Stage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Products */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-blue-600 text-white p-2">
          PRODUCTS & SERVICES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {startupData.products.map((product, index) => (
            <div key={index} className="border border-black p-3 flex items-center">
              <span className="text-lg mr-3">✅</span>
              <span className="text-sm">{product}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Market Analysis */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-purple-600 text-white p-2">
          MARKET ANALYSIS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-3">Market Size & Growth</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Market Size:</span>
                <span className="font-bold">{startupData.market.size}</span>
              </div>
              <div className="flex justify-between">
                <span>Annual Growth:</span>
                <span className="font-bold text-green-600">{startupData.market.growth}</span>
              </div>
              <div className="flex justify-between">
                <span>Competition Level:</span>
                <span className="font-bold">{startupData.market.competition}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3">Opportunities</h4>
            <div className="text-sm space-y-1">
              {startupData.market.opportunities.split(', ').map((opp, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-green-600 mr-2">🎯</span>
                  <span>{opp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFinancialsTab = () => (
    <div className="space-y-6">
      {/* Investment Details */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
          INVESTMENT DETAILS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border border-black p-4 text-center">
            <div className="text-sm font-bold mb-1">NFT PRICE</div>
            <div className="text-2xl font-bold text-green-600">
              ${startupData.financials.nftPrice}
            </div>
            <div className="text-xs">ckUSDC</div>
          </div>
          <div className="border border-black p-4 text-center">
            <div className="text-sm font-bold mb-1">MONTHLY RETURN</div>
            <div className="text-2xl font-bold text-blue-600">
              ${startupData.financials.monthlyReturn}
            </div>
            <div className="text-xs">Per NFT</div>
          </div>
          <div className="border border-black p-4 text-center">
            <div className="text-sm font-bold mb-1">ANNUAL ROI</div>
            <div className="text-2xl font-bold text-purple-600">
              {((startupData.financials.monthlyReturn * 12 / startupData.financials.nftPrice) * 100).toFixed(1)}%
            </div>
            <div className="text-xs">Projected</div>
          </div>
        </div>

        {/* Funding Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Funding Progress</span>
            <span>{startupData.financials.fundingProgress}%</span>
          </div>
          <div className="border border-black h-4">
            <div 
              className="bg-green-500 h-full" 
              style={{ width: `${startupData.financials.fundingProgress}%` }}
            ></div>
          </div>
          <div className="text-sm mt-2">
            ${startupData.financials.raisedAmount.toLocaleString()} / ${startupData.financials.targetAmount.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Financial Performance */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-green-600 text-white p-2">
          FINANCIAL PERFORMANCE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-black p-4">
            <div className="text-sm font-bold mb-2">REVENUE</div>
            <div className="text-2xl font-bold mb-1">
              ${startupData.financials.monthlyRevenue.toLocaleString()}
            </div>
            <div className="text-xs text-gray-600">Monthly</div>
          </div>
          <div className="border border-black p-4">
            <div className="text-sm font-bold mb-2">EXPENSES</div>
            <div className="text-2xl font-bold mb-1">
              ${startupData.financials.monthlyExpenses.toLocaleString()}
            </div>
            <div className="text-xs text-gray-600">Monthly</div>
          </div>
          <div className="border border-black p-4">
            <div className="text-sm font-bold mb-2">NET PROFIT</div>
            <div className="text-2xl font-bold text-green-600 mb-1">
              ${startupData.financials.netProfit.toLocaleString()}
            </div>
            <div className="text-xs text-gray-600">
              {startupData.financials.profitMargin}% margin
            </div>
          </div>
        </div>
      </div>

      {/* Investment Terms */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-blue-600 text-white p-2">
          INVESTMENT TERMS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Minimum Investment:</span>
              <span className="font-bold">${startupData.investmentTerms.minInvestment}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Lock Period:</span>
              <span className="font-bold">{startupData.investmentTerms.lockPeriod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Exit Strategy:</span>
              <span className="font-bold text-sm">{startupData.investmentTerms.exitStrategy}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Voting Rights:</span>
              <span className="font-bold text-green-600">{startupData.investmentTerms.votingRights}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Profit Sharing:</span>
              <span className="font-bold">{startupData.investmentTerms.profitSharing}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Governance:</span>
              <span className="font-bold text-sm">{startupData.investmentTerms.governance}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTeamTab = () => (
    <div className="space-y-6">
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-purple-600 text-white p-2">
          LEADERSHIP TEAM
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {startupData.team.map((member, index) => (
            <div key={index} className="border-2 border-black p-4 text-center">
              <div className="text-4xl mb-3">{member.photo}</div>
              <h4 className="font-bold mb-2">{member.name}</h4>
              <div className="text-sm font-bold text-blue-600 mb-2">{member.role}</div>
              <div className="text-xs space-y-1">
                <div>{member.experience}</div>
                <div className="text-gray-600">{member.education}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-green-600 text-white p-2">
          BUSINESS METRICS
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-center p-3 border border-black">
            <div className="text-xl font-bold text-green-600">{startupData.metrics.customers}</div>
            <div className="text-xs">Active Customers</div>
          </div>
          <div className="text-center p-3 border border-black">
            <div className="text-xl font-bold text-blue-600">{startupData.metrics.partnerships}</div>
            <div className="text-xs">Partnerships</div>
          </div>
          <div className="text-center p-3 border border-black">
            <div className="text-xl font-bold text-purple-600">{startupData.metrics.locations}</div>
            <div className="text-xs">Locations</div>
          </div>
          <div className="text-center p-3 border border-black">
            <div className="text-xl font-bold">{startupData.metrics.products}</div>
            <div className="text-xs">Products</div>
          </div>
          <div className="text-center p-3 border border-black">
            <div className="text-xl font-bold text-orange-600">{startupData.metrics.patents}</div>
            <div className="text-xs">Patents</div>
          </div>
          <div className="text-center p-3 border border-black">
            <div className="text-xl font-bold text-green-600">{startupData.metrics.certifications}</div>
            <div className="text-xs">Certifications</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGrowthTab = () => (
    <div className="space-y-6">
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-blue-600 text-white p-2">
          GROWTH STRATEGY
        </h3>
        <div className="space-y-4">
          {startupData.growthPlans.map((plan, index) => (
            <div key={index} className="border border-black p-3 flex items-start">
              <span className="text-lg mr-3 text-blue-600">🎯</span>
              <span className="text-sm">{plan}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-yellow-600 text-white p-2">
          RISK ASSESSMENT
        </h3>
        <div className="space-y-3">
          {startupData.risks.map((risk, index) => (
            <div key={index} className="flex items-start">
              <span className="text-lg mr-3 text-yellow-600">⚠️</span>
              <span className="text-sm">{risk}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 border-black p-6 bg-green-50">
        <h3 className="text-xl font-bold mb-4 bg-green-600 text-white p-2">
          COMPETITIVE ADVANTAGES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              <span>Certified organic farming practices</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              <span>Strong local market presence</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              <span>Experienced agricultural team</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              <span>Sustainable business model</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              <span>Premium market positioning</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              <span>Growing organic food demand</span>
            </div>
          </div>
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
            <div className="text-sm">Startup Details</div>
            <button 
              onClick={handleInvestNow}
              className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800"
            >
              💰 INVEST NOW
            </button>
          </div>
        </div>
      </header>

      {/* Startup Header */}
      <div className="border-b-2 border-black bg-green-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{startupData.name}</h1>
              <div className="flex items-center space-x-4 mb-3">
                <div className="text-sm border border-black px-2 py-1">
                  {startupData.sector}
                </div>
                <div className="text-sm">📍 {startupData.location}</div>
                <div className="text-sm">👥 {startupData.teamSize} team members</div>
              </div>
              <p className="text-sm text-gray-600 max-w-2xl">
                {startupData.description}
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-2xl font-bold text-green-600 mb-1">
                ${startupData.financials.nftPrice}
              </div>
              <div className="text-sm">NFT Price</div>
              <div className="text-sm text-blue-600 font-bold">
                ${startupData.financials.monthlyReturn}/month return
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto flex">
          {[
            { id: "overview", label: "OVERVIEW", icon: "📋" },
            { id: "financials", label: "FINANCIALS", icon: "💰" },
            { id: "team", label: "TEAM", icon: "👥" },
            { id: "growth", label: "GROWTH", icon: "📈" },
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
        {activeTab === "overview" && renderOverviewTab()}
        {activeTab === "financials" && renderFinancialsTab()}
        {activeTab === "team" && renderTeamTab()}
        {activeTab === "growth" && renderGrowthTab()}
      </div>

      {/* Investment Modal */}
      {showInvestmentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white border-4 border-black p-6 max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">💰 INVEST IN GREENFARM ORGANICS</h3>
              <button 
                onClick={() => setShowInvestmentModal(false)}
                className="text-2xl hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Investment Amount */}
              <div>
                <label className="block text-sm font-bold mb-2">Investment Amount (ckUSDC)</label>
                <input
                  type="number"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  min={startupData.financials.minInvestment}
                  className="w-full border-2 border-black p-2 text-sm"
                  placeholder="Enter amount"
                />
              </div>
              
              {/* NFT Quantity */}
              <div>
                <label className="block text-sm font-bold mb-2">Number of NFTs</label>
                <input
                  type="number"
                  value={nftQuantity}
                  onChange={(e) => setNftQuantity(Number(e.target.value))}
                  min={1}
                  max={Math.floor(investmentAmount / startupData.financials.nftPrice)}
                  className="w-full border-2 border-black p-2 text-sm"
                  placeholder="Enter quantity"
                />
                <div className="text-xs text-gray-600 mt-1">
                  Max: {Math.floor(investmentAmount / startupData.financials.nftPrice)} NFTs
                </div>
              </div>
              
              {/* Projected Returns */}
              <div className="border-2 border-black p-4 bg-green-50">
                <h4 className="font-bold mb-3 text-green-800">PROJECTED RETURNS</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      ${calculateReturns(investmentAmount, nftQuantity).monthlyReturn}
                    </div>
                    <div className="text-xs">Monthly Return</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {calculateReturns(investmentAmount, nftQuantity).annualReturn.toFixed(1)}%
                    </div>
                    <div className="text-xs">Annual ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">
                      ${calculateReturns(investmentAmount, nftQuantity).totalReturn}
                    </div>
                    <div className="text-xs">Annual Return</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3 mt-8 pt-6 border-t-2 border-black">
              <button 
                onClick={() => setShowInvestmentModal(false)}
                className="flex-1 border-2 border-black py-2 font-bold hover:bg-gray-100"
              >
                CANCEL
              </button>
              <button 
                onClick={confirmInvestment}
                disabled={investmentAmount < startupData.financials.minInvestment}
                className={`flex-1 py-2 font-bold ${
                  investmentAmount >= startupData.financials.minInvestment
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                CONFIRM INVESTMENT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t-2 border-black py-4 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
          <div>© 2024 Plantify. Built on Internet Computer Protocol.</div>
        </div>
      </footer>
    </div>
  );
};

export default GreenFarmOrganicsDetail;
