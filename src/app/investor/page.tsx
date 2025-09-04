"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Startup {
  id: number;
  name: string;
  sector: string;
  location: string;
  founded: string;
  nftPrice: number;
  monthlyReturn: number;
  fundingProgress: number;
  targetAmount: number;
  raisedAmount: number;
  minInvestment: number;
  hasDetails: boolean;
  detailSlug: string;
  // Portfolio-specific properties
  invested?: number;
  nftCount?: number;
  monthlyReturns?: number;
  totalReturns?: number;
  progress?: number;
  status?: string;
  nextVote?: string;
}

const PlantifyInvestorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [showInvestmentModal, setShowInvestmentModal] = useState(false);
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [nftQuantity, setNftQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  // Risk Profile State
  const [riskProfile, setRiskProfile] = useState({
    hasProfile: true, // Set false jika belum setup
    riskTolerance: "Moderate",
    investmentGoals: "Passive Income",
    timeHorizon: "3-5 years",
    monthlyBudget: 500,
    preferredSectors: ["Agriculture", "F&B", "Technology"],
    maxInvestmentPerStartup: 1000,
    lastUpdated: "2024-08-15"
  });

  // Mock data untuk dashboard
  const investorData = {
    totalInvested: 2500,
    totalReturns: 487,
    monthlyIncome: 156,
    activeInvestments: 8,
    votingPending: 3,
  };

  const portfolioData = [
    {
      id: 1,
      name: "GreenFarm Organics",
      sector: "Agriculture",
      invested: 500,
      nftCount: 10,
      monthlyReturns: 67,
      totalReturns: 201,
      progress: 85,
      status: "Active",
      nextVote: "2 days",
    },
    {
      id: 2,
      name: "TechCafe Jakarta",
      sector: "F&B",
      invested: 300,
      nftCount: 6,
      monthlyReturns: 45,
      totalReturns: 135,
      progress: 75,
      status: "Active",
      nextVote: "5 days",
    },
    {
      id: 3,
      name: "EduTech Solutions",
      sector: "Technology",
      invested: 800,
      nftCount: 16,
      monthlyReturns: 112,
      totalReturns: 224,
      progress: 92,
      status: "Active",
      nextVote: "1 day",
    },
  ];

  // Centralized startup data for better integration
  const allStartups = [
    // Portfolio startups
    {
      id: 1,
      name: "GreenFarm Organics",
      sector: "Agriculture",
      location: "Surabaya, East Java",
      founded: "2022",
      nftPrice: 50,
      monthlyReturn: 6.7,
      fundingProgress: 100,
      targetAmount: 5000,
      raisedAmount: 5000,
      minInvestment: 50,
      invested: 500,
      nftCount: 10,
      monthlyReturns: 67,
      totalReturns: 201,
      progress: 85,
      status: "Active",
      nextVote: "2 days",
      hasDetails: true,
      detailSlug: "greenfarm-organics"
    },
    {
      id: 2,
      name: "TechCafe Jakarta",
      sector: "F&B",
      location: "Jakarta, Indonesia",
      founded: "2023",
      nftPrice: 50,
      monthlyReturn: 7.5,
      fundingProgress: 100,
      targetAmount: 3000,
      raisedAmount: 3000,
      minInvestment: 50,
      invested: 300,
      nftCount: 6,
      monthlyReturns: 45,
      totalReturns: 135,
      progress: 75,
      status: "Active",
      nextVote: "5 days",
      hasDetails: true,
      detailSlug: "techcafe-jakarta"
    },
    {
      id: 3,
      name: "EduTech Solutions",
      sector: "Technology",
      location: "Bandung, West Java",
      founded: "2022",
      nftPrice: 50,
      monthlyReturn: 7.0,
      fundingProgress: 100,
      targetAmount: 8000,
      raisedAmount: 8000,
      minInvestment: 50,
      invested: 800,
      nftCount: 16,
      monthlyReturns: 112,
      totalReturns: 224,
      progress: 92,
      status: "Active",
      nextVote: "1 day",
      hasDetails: true,
      detailSlug: "edutech-solutions"
    },
    // Available startups
    {
      id: 4,
      name: "Urban Chicken Farm",
      sector: "Livestock",
      location: "Yogyakarta, Indonesia",
      founded: "2024",
      nftPrice: 50,
      monthlyReturn: 8.5,
      fundingProgress: 45,
      targetAmount: 10000,
      raisedAmount: 4500,
      minInvestment: 50,
      hasDetails: true,
      detailSlug: "urban-chicken-farm"
    },
    {
      id: 5,
      name: "Local Craft Store",
      sector: "Retail",
      location: "Semarang, Central Java",
      founded: "2023",
      nftPrice: 75,
      monthlyReturn: 12,
      fundingProgress: 67,
      targetAmount: 15000,
      raisedAmount: 10050,
      minInvestment: 75,
      hasDetails: true,
      detailSlug: "local-craft-store"
    },
    // Featured recommendations
    {
      id: 6,
      name: "EcoFarm Solutions",
      sector: "Agriculture",
      location: "Bandung, West Java",
      founded: "2023",
      nftPrice: 75,
      monthlyReturn: 12,
      fundingProgress: 75,
      targetAmount: 50000,
      raisedAmount: 37500,
      minInvestment: 75,
      hasDetails: true,
      detailSlug: "ecofarm-solutions"
    },
    {
      id: 7,
      name: "SmartCafe Tech",
      sector: "Technology",
      location: "Jakarta, Indonesia",
      founded: "2022",
      nftPrice: 100,
      monthlyReturn: 18,
      fundingProgress: 80,
      targetAmount: 75000,
      raisedAmount: 60000,
      minInvestment: 100,
      hasDetails: true,
      detailSlug: "smartcafe-tech"
    }
  ];

  const availableStartups = allStartups.filter(startup => startup.id >= 4);
  const portfolioStartups = allStartups.filter(startup => startup.id <= 3);

  // Search functionality
  const filteredStartups = availableStartups.filter(startup =>
    startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    startup.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
    startup.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const recentTransactions = [
    {
      id: 1,
      type: "Profit Sharing",
      amount: 156,
      startup: "GreenFarm Organics",
      date: "2024-09-01",
      status: "Completed",
    },
    {
      id: 2,
      type: "Investment",
      amount: -300,
      startup: "TechCafe Jakarta",
      date: "2024-08-25",
      status: "Completed",
    },
    {
      id: 3,
      type: "Profit Sharing",
      amount: 89,
      startup: "EduTech Solutions",
      date: "2024-08-15",
      status: "Completed",
    },
  ];

  // Investment handling functions
  const handleInvestNow = (startup: Startup) => {
    setSelectedStartup(startup);
    setInvestmentAmount(startup.nftPrice || startup.minInvestment || 100);
    setNftQuantity(1);
    setShowInvestmentModal(true);
  };

  const calculateInvestmentReturns = (startup: Startup, amount: number, quantity: number) => {
    const monthlyReturn = startup.monthlyReturn || 0;
    const annualReturn = (monthlyReturn * 12 / amount) * 100;
    return {
      monthlyReturn: monthlyReturn * quantity,
      annualReturn: annualReturn,
      totalReturn: monthlyReturn * quantity * 12
    };
  };

  const confirmInvestment = () => {
    if (!selectedStartup || investmentAmount <= 0) {
      alert("Please select a valid investment amount");
      return;
    }

    // Here would be the actual blockchain transaction
    alert(`Investment of $${investmentAmount} in ${selectedStartup?.name} confirmed!`);

    // Reset modal and add to portfolio
    setShowInvestmentModal(false);
    setSelectedStartup(null);
    setInvestmentAmount(0);
    setNftQuantity(1);

    // In a real app, this would update the portfolio data
    // and trigger blockchain transaction
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="border-2 border-black p-4 bg-gray-50">
          <div className="text-sm font-bold mb-1">TOTAL INVESTED</div>
          <div className="text-2xl font-bold">${investorData.totalInvested}</div>
          <div className="text-xs text-gray-600">ckUSDC</div>
        </div>
        <div className="border-2 border-black p-4 bg-green-50">
          <div className="text-sm font-bold mb-1">TOTAL RETURNS</div>
          <div className="text-2xl font-bold text-green-600">
            +${investorData.totalReturns}
          </div>
          <div className="text-xs text-gray-600">19.5% overall</div>
        </div>
        <div className="border-2 border-black p-4 bg-blue-50">
          <div className="text-sm font-bold mb-1">MONTHLY INCOME</div>
          <div className="text-2xl font-bold text-blue-600">
            ${investorData.monthlyIncome}
          </div>
          <div className="text-xs text-gray-600">This month</div>
        </div>
        <div className="border-2 border-black p-4">
          <div className="text-sm font-bold mb-1">ACTIVE INVESTMENTS</div>
          <div className="text-2xl font-bold">{investorData.activeInvestments}</div>
          <div className="text-xs text-gray-600">Startups</div>
        </div>
        <div className="border-2 border-black p-4 bg-yellow-50">
          <div className="text-sm font-bold mb-1">VOTING PENDING</div>
          <div className="text-2xl font-bold text-orange-600">
            {investorData.votingPending}
          </div>
          <div className="text-xs text-gray-600">Action needed</div>
        </div>
      </div>

      {/* Personalized Startup Recommendations */}
      {riskProfile.hasProfile && (
        <div className="border-2 border-black p-6">
          <h3 className="text-xl font-bold mb-4 bg-green-600 text-white p-2">
            STARTUPS MATCHING YOUR PROFILE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-black p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold">EcoFarm Solutions</h4>
                <div className="text-xs bg-green-100 px-2 py-1 border border-green-500">
                  95% MATCH
                </div>
              </div>
              <div className="text-sm border border-black px-2 py-1 inline-block mb-2">
                Agriculture
              </div>
              <div className="text-sm space-y-1 mb-3">
                <div>NFT Price: $75 • Monthly Return: $12</div>
                <div>Risk Level: Moderate • ROI: 16% annually</div>
              </div>
              <div className="text-xs text-green-600 mb-2">
                ✓ Matches your risk tolerance and sector preference
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleInvestNow(allStartups[5])}
                  className="bg-black text-white px-4 py-2 text-sm flex-1 hover:bg-gray-800"
                >
                  INVEST NOW
                </button>
                <button
                  onClick={() => router.push(`/investor/startup/ecofarm-solutions`)}
                  className="border border-black px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Details
                </button>
              </div>
            </div>

            <div className="border border-black p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold">SmartCafe Tech</h4>
                <div className="text-xs bg-blue-100 px-2 py-1 border border-blue-500">
                  88% MATCH
                </div>
              </div>
              <div className="text-sm border border-black px-2 py-1 inline-block mb-2">
                Technology
              </div>
              <div className="text-sm space-y-1 mb-3">
                <div>NFT Price: $100 • Monthly Return: $18</div>
                <div>Risk Level: Moderate-High • ROI: 22% annually</div>
              </div>
              <div className="text-xs text-blue-600 mb-2">
                ✓ High growth potential in your preferred sector
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleInvestNow(allStartups[6])}
                  className="bg-black text-white px-4 py-2 text-sm flex-1 hover:bg-gray-800"
                >
                  INVEST NOW
                </button>
                <button
                  onClick={() => router.push(`/investor/startup/smartcafe-tech`)}
                  className="border border-black px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => setActiveTab("marketplace")}
              className="border border-black px-6 py-2 text-sm hover:bg-gray-100"
            >
              View All Startups
            </button>
          </div>
        </div>
      )}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
          QUICK ACTIONS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            onClick={() => {
              setActiveTab("marketplace");
              router.push("/marketplace");
            }}
            className="border border-black p-4 text-center cursor-pointer hover:bg-gray-50"
          >
            <div className="text-2xl mb-2">📊</div>
            <div className="font-bold mb-1" onClick={() => {
              setActiveTab("marketplace");
              router.push("/marketplace");
            }}>Browse Startups</div>
            <div className="text-sm">Find new investment opportunities</div>
          </div>
          <div
            onClick={() => {
              setActiveTab("voting");
              router.push("/investor/dashboard/voting");
            }}
            className="border border-black p-4 text-center cursor-pointer hover:bg-gray-50"
          >
            <div className="text-2xl mb-2">🗳️</div>
            <div className="font-bold mb-1" onClick={() => {
              setActiveTab("voting");
              router.push("/investor/dashboard/voting");
            }}>Pending Votes</div>
            <div className="text-sm">Review {investorData.votingPending} startup reports</div>
          </div>
          <div
            onClick={() => {
              alert("Add Funds functionality coming soon!");
            }}
            className="border border-black p-4 text-center cursor-pointer hover:bg-gray-50"
          >
            <div className="text-2xl mb-2">💰</div>
            <div className="font-bold mb-1" onClick={() => {
              alert("Add Funds functionality coming soon!");
            }}>Add Funds</div>
            <div className="text-sm">Deposit more ckUSDC</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
          RECENT ACTIVITY
        </h3>
        <div className="space-y-3">
          {recentTransactions.slice(0, 3).map((tx) => (
            <div key={tx.id} className="border border-black p-3 flex justify-between items-center">
              <div>
                <div className="font-bold text-sm">{tx.type}</div>
                <div className="text-xs text-gray-600">{tx.startup}</div>
              </div>
              <div className="text-right">
                <div className={`font-bold ${tx.amount > 0 ? 'text-green-600' : 'text-blue-600'}`}>
                  {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount)}
                </div>
                <div className="text-xs text-gray-600">{tx.date}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="border border-black px-4 py-2 text-sm hover:bg-gray-100">
            View All Transactions
          </button>
        </div>
      </div>
    </div>
  );

  const renderPortfolioTab = () => (
    <div className="space-y-6">
      <div className="border-2 border-black p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold bg-black text-white p-2">
            MY INVESTMENTS
          </h3>
          <div className="text-sm text-gray-600">
            {portfolioStartups.length} active investments
          </div>
        </div>

        <div className="space-y-4">
          {portfolioStartups.map((investment) => (
            <div key={investment.id} className="border-2 border-black p-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-lg font-bold">{investment.name}</h4>
                  <div className="text-sm border border-black px-2 py-1 inline-block mt-1">
                    {investment.sector}
                  </div>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <div className="text-sm font-bold">Status: {investment.status}</div>
                  <div className="text-xs">Next Vote: {investment.nextVote}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-xs font-bold mb-1">INVESTED</div>
                  <div className="text-lg font-bold">${investment.invested}</div>
                  <div className="text-xs">{investment.nftCount} NFTs</div>
                </div>
                <div>
                  <div className="text-xs font-bold mb-1">MONTHLY RETURNS</div>
                  <div className="text-lg font-bold text-green-600">
                    ${investment.monthlyReturns}
                  </div>
                  <div className="text-xs">Per month</div>
                </div>
                <div>
                  <div className="text-xs font-bold mb-1">TOTAL RETURNS</div>
                  <div className="text-lg font-bold text-blue-600">
                    ${investment.totalReturns}
                  </div>
                  <div className="text-xs">
                    {investment.totalReturns && investment.invested
                      ? ((investment.totalReturns / investment.invested) * 100).toFixed(1)
                      : '0'}% ROI
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold mb-1">PROGRESS</div>
                  <div className="text-lg font-bold">{investment.progress}%</div>
                  <div className="border border-black h-2">
                    <div
                      className="bg-black h-full"
                      style={{ width: `${investment.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {investment.hasDetails && (
                  <button
                    onClick={() => router.push(`/investor/startup/${investment.detailSlug}`)}
                    className="border border-black px-3 py-1 text-sm hover:bg-gray-100"
                  >
                    Startup Details
                  </button>
                )}
                <button onClick={() => router.push(`/investor/dashboard/voting`)} className="border border-black px-3 py-1 text-sm hover:bg-gray-100">
                  Vote on Report
                </button>
                <button onClick={() => router.push(`/investor/dashboard/marketplace/`)} className="border border-black px-3 py-1 text-sm hover:bg-gray-100">
                  Add Investment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMarketplaceTab = () => (
    <div className="space-y-6">
      <div className="border-2 border-black p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold bg-black text-white p-2">
            AVAILABLE STARTUPS
          </h3>
          <div className="text-sm text-gray-600">
            Showing {filteredStartups.length} of {availableStartups.length} startups
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="border-2 border-black p-4 mb-6 bg-gray-50">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            {/* Search Bar */}
            <div className="flex-1">
              <label className="block text-sm font-bold mb-2">Search Startups</label>
              <input
                type="text"
                placeholder="Search by name, sector, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-2 border-black p-2 text-sm"
              />
            </div>

            {/* Filter Button */}
            <div>
              <button
                onClick={() => setShowFilterPopup(true)}
                className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 border-2 border-black"
              >
                🔍 FILTERS
              </button>
            </div>
          </div>

          {/* Active Filters Display */}
          <div className="border-t border-black pt-3 mt-4">
            <div className="text-sm font-bold mb-2">Active Filters:</div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 border border-blue-500 px-2 py-1 text-xs">
                Sector: Agriculture ✕
              </span>
              <span className="bg-green-100 border border-green-500 px-2 py-1 text-xs">
                Min Return: 10%+ ✕
              </span>
              <button className="text-xs text-red-600 hover:underline">
                Clear All Filters
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStartups.map((startup) => (
            <div key={startup.id} className="border-2 border-black p-4">
              <div className="h-32 border border-black bg-gray-100 flex items-center justify-center mb-4">
                [STARTUP IMAGE]
              </div>

              <h4 className="text-lg font-bold mb-2">{startup.name}</h4>
              <div className="text-sm border border-black px-2 py-1 inline-block mb-3">
                {startup.sector}
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>NFT Price:</span>
                  <span className="font-bold">${startup.nftPrice} ckUSDC</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Monthly Return:</span>
                  <span className="font-bold text-green-600">${startup.monthlyReturn}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Min. Investment:</span>
                  <span className="font-bold">${startup.minInvestment}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                  <span>Funding Progress:</span>
                  <span>{startup.fundingProgress}%</span>
                </div>
                <div className="border border-black h-3">
                  <div
                    className="bg-black h-full"
                    style={{ width: `${startup.fundingProgress}%` }}
                  ></div>
                </div>
                <div className="text-xs mt-1">
                  ${startup.raisedAmount.toLocaleString()} / ${startup.targetAmount.toLocaleString()}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleInvestNow(startup)}
                  className="bg-black text-white px-4 py-2 text-sm flex-1 hover:bg-gray-800"
                >
                  INVEST NOW
                </button>
                {startup.hasDetails && (
                  <button
                    onClick={() => router.push(`/investor/startup/${startup.detailSlug}`)}
                    className="border border-black px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Details
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => alert("More startups coming soon! Currently showing all available startups.")}
            className="bg-black text-white px-8 py-3 hover:bg-gray-800"
          >
            VIEW ALL STARTUPS
          </button>
        </div>
      </div>

      {/* Filter Popup Modal */}
      {showFilterPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white border-4 border-black p-6 max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">🔍 ADVANCED FILTERS</h3>
              <button
                onClick={() => setShowFilterPopup(false)}
                className="text-2xl hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Sector Filter */}
              <div>
                <label className="block text-sm font-bold mb-2">Sector</label>
                <select className="w-full border-2 border-black p-2 text-sm">
                  <option value="">All Sectors</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="F&B">F&B</option>
                  <option value="Technology">Technology</option>
                  <option value="Livestock">Livestock</option>
                  <option value="Retail">Retail</option>
                  <option value="Manufacturing">Manufacturing</option>
                </select>
              </div>

              {/* Investment Range Filter */}
              <div>
                <label className="block text-sm font-bold mb-2">Investment Range</label>
                <select className="w-full border-2 border-black p-2 text-sm">
                  <option value="">All Ranges</option>
                  <option value="0-100">$0 - $100</option>
                  <option value="100-500">$100 - $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000+">$1,000+</option>
                </select>
              </div>

              {/* Return Rate Filter */}
              <div>
                <label className="block text-sm font-bold mb-2">Minimum Return Rate</label>
                <select className="w-full border-2 border-black p-2 text-sm">
                  <option value="">Any Rate</option>
                  <option value="5">5%+ annually</option>
                  <option value="10">10%+ annually</option>
                  <option value="15">15%+ annually</option>
                  <option value="20">20%+ annually</option>
                </select>
              </div>

              {/* Funding Progress Filter */}
              <div>
                <label className="block text-sm font-bold mb-2">Funding Progress</label>
                <select className="w-full border-2 border-black p-2 text-sm">
                  <option value="">Any Progress</option>
                  <option value="0-25">0% - 25%</option>
                  <option value="25-50">25% - 50%</option>
                  <option value="50-75">50% - 75%</option>
                  <option value="75-100">75% - 100%</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-bold mb-2">Sort By</label>
                <select className="w-full border-2 border-black p-2 text-sm">
                  <option value="name">Name A-Z</option>
                  <option value="return">Highest Return</option>
                  <option value="progress">Funding Progress</option>
                  <option value="price">Lowest Price</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>

              {/* Additional Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Location</label>
                  <select className="w-full border-2 border-black p-2 text-sm">
                    <option value="">Any Location</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="bandung">Bandung</option>
                    <option value="surabaya">Surabaya</option>
                    <option value="other">Other Cities</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Risk Level</label>
                  <select className="w-full border-2 border-black p-2 text-sm">
                    <option value="">Any Risk Level</option>
                    <option value="low">Low Risk</option>
                    <option value="moderate">Moderate Risk</option>
                    <option value="high">High Risk</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-8 pt-6 border-t-2 border-black">
              <button
                onClick={() => setShowFilterPopup(false)}
                className="flex-1 border-2 border-black py-2 font-bold hover:bg-gray-100"
              >
                CANCEL
              </button>
              <button
                onClick={() => setShowFilterPopup(false)}
                className="flex-1 bg-black text-white py-2 font-bold hover:bg-gray-800"
              >
                APPLY FILTERS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderVotingTab = () => (
    <div className="space-y-6">
      {/* Voting Header & Status */}
      {/* <div className="border-2 border-black p-6 bg-yellow-50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold bg-orange-600 text-white p-2">
            🗳️ MONTHLY VOTING STATUS
          </h3>
          <div className="text-right">
            <div className="text-sm font-bold text-orange-600">
              Voting Period: September 11-17, 2024
            </div>
            <div className="text-xs text-gray-600">
              {investorData.votingPending} reports pending your vote
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-3 border border-black bg-white">
            <div className="text-2xl font-bold text-green-600">
              {portfolioStartups.filter(s => s.nextVote === "1 day").length}
            </div>
            <div className="text-xs">Due Today</div>
          </div>
          <div className="text-center p-3 border border-black bg-white">
            <div className="text-2xl font-bold text-orange-600">
              {portfolioStartups.filter(s => s.nextVote === "2 days").length}
            </div>
            <div className="text-xs">Due Tomorrow</div>
          </div>
          <div className="text-center p-3 border border-black bg-white">
            <div className="text-2xl font-bold text-blue-600">
              {portfolioStartups.filter(s => s.nextVote === "5 days").length}
            </div>
            <div className="text-xs">Due This Week</div>
          </div>
          <div className="text-center p-3 border border-black bg-white">
            <div className="text-2xl font-bold text-purple-600">
              {portfolioStartups.length}
            </div>
            <div className="text-xs">Total Active</div>
          </div>
        </div>
      </div> */}

      {/* Pending Votes */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
          PENDING VOTES - SEPTEMBER 2024
        </h3>

        <div className="space-y-4">
          {portfolioStartups.map((investment) => (
            <div key={investment.id} className="border-2 border-black p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-lg font-bold">{investment.name}</h4>
                  <div className="text-sm text-gray-600">
                    Monthly Progress Report - September 2024
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    📍 {investment.location} • Founded: {investment.founded}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-orange-600 mb-1">
                    Due in {investment.nextVote}
                  </div>
                  <div className="text-xs bg-blue-100 border border-blue-500 px-2 py-1">
                    {investment.nftCount} NFTs • ${investment.invested} invested
                  </div>
                </div>
              </div>

              {/* Report Summary */}
              <div className="border border-black p-3 mb-3 bg-gray-50">
                <div className="text-sm font-bold mb-2">📊 REPORT SUMMARY:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Revenue:</span>
                      <span className="font-bold">${investment.monthlyReturns ? (investment.monthlyReturns * 12).toLocaleString() : '0'}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span>Monthly Returns:</span>
                      <span className="font-bold text-green-600">${investment.monthlyReturns}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span>Total Returns:</span>
                      <span className="font-bold text-blue-600">${investment.totalReturns}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Progress:</span>
                      <span className="font-bold">{investment.progress}%</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span>Status:</span>
                      <span className="font-bold text-green-600">{investment.status}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span>ROI:</span>
                      <span className="font-bold text-purple-600">
                        {investment.totalReturns && investment.invested
                          ? ((investment.totalReturns / investment.invested) * 100).toFixed(1)
                          : '0'}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Voting Actions */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => router.push(`/investor/dashboard/voting`)}
                  className="bg-green-600 text-white px-6 py-2 text-sm hover:bg-green-700 font-bold"
                >
                  ✓ APPROVE REPORT
                </button>
                <button
                  onClick={() => router.push(`/investor/dashboard/voting`)}
                  className="bg-red-600 text-white px-6 py-2 text-sm hover:bg-red-700 font-bold"
                >
                  ✗ REJECT REPORT
                </button>
                <button
                  onClick={() => router.push(`/investor/startup/${investment.detailSlug}`)}
                  className="border border-black px-4 py-2 text-sm hover:bg-gray-100"
                >
                  📋 View Full Report
                </button>
                <button
                  onClick={() => router.push(`/investor/startup/${investment.detailSlug}`)}
                  className="border border-black px-4 py-2 text-sm hover:bg-gray-100"
                >
                  🏢 Startup Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Voting Guidelines */}
      <div className="border-2 border-black p-6 bg-blue-50">
        <h3 className="text-xl font-bold mb-4 bg-blue-600 text-white p-2">
          📋 VOTING GUIDELINES & CRITERIA
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-3 text-green-800">✅ APPROVE IF:</h4>
            <div className="text-sm space-y-2 text-green-700">
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Financial targets are met or exceeded</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Operational milestones achieved</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Reporting is transparent and complete</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Challenges have clear mitigation plans</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Business growth metrics are positive</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-red-800">❌ REJECT IF:</h4>
            <div className="text-sm space-y-2 text-red-700">
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Significant revenue shortfall without explanation</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Budget overspend with no justification</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Declining business metrics</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Incomplete or misleading information</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>No clear plan to address challenges</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Voting Process Info */}
      <div className="border-2 border-black p-6 bg-green-50">
        <h3 className="text-xl font-bold mb-4 bg-green-600 text-white p-2">
          ⏰ VOTING PROCESS TIMELINE
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center p-3 border border-black bg-white">
            <div className="text-lg font-bold text-blue-600 mb-1">1-10th</div>
            <div className="text-xs">Founder submits monthly report</div>
          </div>
          <div className="text-center p-3 border border-black bg-white">
            <div className="text-lg font-bold text-orange-600 mb-1">11-17th</div>
            <div className="text-xs">Community voting period (7 days)</div>
          </div>
          <div className="text-center p-3 border border-black bg-white">
            <div className="text-lg font-bold text-purple-600 mb-1">18-20th</div>
            <div className="text-xs">Platform processes results</div>
          </div>
          <div className="text-center p-3 border border-black bg-white">
            <div className="text-lg font-bold text-green-600 mb-1">21st</div>
            <div className="text-xs">Profit sharing payment (if approved)</div>
          </div>
        </div>

        <div className="mt-4 p-3 border border-green-500 bg-white">
          <div className="text-sm font-bold text-green-800 mb-2">🎯 VOTING IMPACT:</div>
          <div className="text-sm text-green-700">
            <strong>≥50% Approve:</strong> Profit sharing released untuk bulan tersebut dalam ckUSDC<br />
            <strong>&lt;50% Approve:</strong> Profit sharing ditahan, startup harus improve dan resubmit
          </div>
        </div>
      </div>

      {/* AI Analysis Integration */}
      <div className="border-2 border-black p-6 bg-purple-50">
        <h3 className="text-xl font-bold mb-4 bg-purple-600 text-white p-2">
          🤖 AI ANALYSIS INTEGRATION
        </h3>

        <div className="text-sm space-y-3">
          <div className="flex items-start">
            <span className="text-purple-600 mr-2">🔍</span>
            <span>
              <strong>AI Compliance Score:</strong> Voting dilengkapi dengan AI analysis yang membandingkan laporan founder dengan kriteria objektif
            </span>
          </div>
          <div className="flex items-start">
            <span className="text-purple-600 mr-2">⚠️</span>
            <span>
              <strong>Auto-Hold:</strong> Jika AI compliance score di bawah threshold minimum, profit sharing otomatis ditahan hingga perbaikan dilakukan
            </span>
          </div>
          <div className="flex items-start">
            <span className="text-purple-600 mr-2">📊</span>
            <span>
              <strong>Objective Analysis:</strong> AI membandingkan financial data, operational metrics, dan market conditions dengan industry benchmarks
            </span>
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
          <div className="text-2xl font-bold border-2 border-black px-4 py-2">
            PLANTIFY
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm">Welcome, Ahmad Wijaya</div>
            <div className="text-sm border border-black px-3 py-1">
              Balance: $1,250 ckUSDC
            </div>
            <button className="bg-black text-white px-4 py-2 text-sm">
              Add Funds
            </button>
            <button
              onClick={() => router.push('/investor/profile')}
              className="border border-black px-3 py-1 text-sm hover:bg-gray-100"
            >
              👤 Profile
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto flex">
          {[
            { id: "overview", label: "OVERVIEW", icon: "📊" },
            { id: "portfolio", label: "MY PORTFOLIO", icon: "💼" },
            { id: "marketplace", label: "MARKETPLACE", icon: "🏪" },
            { id: "voting", label: "VOTING", icon: "🗳️" },
            { id: "transactions", label: "TRANSACTIONS", icon: "💰" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-bold border-r border-black ${activeTab === tab.id
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
        {activeTab === "portfolio" && renderPortfolioTab()}
        {activeTab === "marketplace" && renderMarketplaceTab()}
        {activeTab === "voting" && renderVotingTab()}
        {activeTab === "transactions" && (
          <div className="space-y-6">
            {/* Transaction History Header */}
            <div className="border-2 border-black p-6 bg-blue-50">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold bg-blue-600 text-white p-2">
                  💰 TRANSACTION HISTORY
                </h3>
                <div className="text-right">
                  <div className="text-sm font-bold text-blue-600">
                    Total Transactions: 24
                  </div>
                  <div className="text-xs text-gray-600">
                    Last 30 days
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-3 border border-black bg-white">
                  <div className="text-2xl font-bold text-green-600">$2,450</div>
                  <div className="text-xs">Total Invested</div>
                </div>
                <div className="text-center p-3 border border-black bg-white">
                  <div className="text-2xl font-bold text-blue-600">$187</div>
                  <div className="text-xs">Total Returns</div>
                </div>
                <div className="text-center p-3 border border-black bg-white">
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-xs">Active Investments</div>
                </div>
                <div className="text-center p-3 border border-black bg-white">
                  <div className="text-2xl font-bold text-orange-600">$0</div>
                  <div className="text-xs">Pending Withdrawals</div>
                </div>
              </div>
            </div>

            {/* Transaction Filters */}
            <div className="border-2 border-black p-4">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-bold">Filter by:</label>
                  <select className="border border-black px-3 py-1 text-sm">
                    <option>All Types</option>
                    <option>Investments</option>
                    <option>Returns</option>
                    <option>Withdrawals</option>
                    <option>Fees</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-bold">Date Range:</label>
                  <select className="border border-black px-3 py-1 text-sm">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                    <option>Last 6 months</option>
                    <option>All time</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-bold">Status:</label>
                  <select className="border border-black px-3 py-1 text-sm">
                    <option>All Status</option>
                    <option>Completed</option>
                    <option>Pending</option>
                    <option>Failed</option>
                  </select>
                </div>
                <button className="bg-black text-white px-4 py-1 text-sm hover:bg-gray-800">
                  🔍 Search
                </button>
              </div>
            </div>

            {/* Transaction List */}
            <div className="border-2 border-black p-6">
              <h4 className="text-lg font-bold mb-4 bg-gray-100 p-2 border border-black">
                RECENT TRANSACTIONS
              </h4>

              <div className="space-y-3">
                {/* Transaction Item 1 */}
                <div className="border border-black p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">💰</div>
                      <div>
                        <div className="font-bold text-green-600">Investment in EcoFarm Solutions</div>
                        <div className="text-sm text-gray-600">NFT Purchase • 5 NFTs</div>
                        <div className="text-xs text-gray-500">Transaction ID: TX-2024-001</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-600">-$250.00</div>
                      <div className="text-sm text-gray-600">Sep 15, 2024</div>
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-1 border border-green-500">
                        ✅ Completed
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transaction Item 2 */}
                <div className="border border-black p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">💸</div>
                      <div>
                        <div className="font-bold text-blue-600">Profit Sharing - SmartCafe Tech</div>
                        <div className="text-sm text-gray-600">Monthly Returns • 3 NFTs</div>
                        <div className="text-xs text-gray-500">Transaction ID: TX-2024-002</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">+$45.00</div>
                      <div className="text-sm text-gray-600">Sep 14, 2024</div>
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-1 border border-green-500">
                        ✅ Completed
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transaction Item 3 */}
                <div className="border border-black p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">🏦</div>
                      <div>
                        <div className="font-bold text-purple-600">Wallet Top-up</div>
                        <div className="text-sm text-gray-600">Added Funds • ckUSDC</div>
                        <div className="text-xs text-gray-500">Transaction ID: TX-2024-003</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">+$500.00</div>
                      <div className="text-sm text-gray-600">Sep 12, 2024</div>
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-1 border border-green-500">
                        ✅ Completed
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transaction Item 4 */}
                <div className="border border-black p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">💳</div>
                      <div>
                        <div className="font-bold text-orange-600">Platform Fee</div>
                        <div className="text-sm text-gray-600">Transaction Fee • 2.5%</div>
                        <div className="text-xs text-gray-500">Transaction ID: TX-2024-004</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-600">-$6.25</div>
                      <div className="text-sm text-gray-600">Sep 15, 2024</div>
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-1 border border-green-500">
                        ✅ Completed
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transaction Item 5 */}
                <div className="border border-black p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">📈</div>
                      <div>
                        <div className="font-bold text-green-600">Investment in GreenFarm Organics</div>
                        <div className="text-sm text-gray-600">NFT Purchase • 2 NFTs</div>
                        <div className="text-xs text-gray-500">Transaction ID: TX-2024-005</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-600">-$100.00</div>
                      <div className="text-sm text-gray-600">Sep 10, 2024</div>
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-1 border border-green-500">
                        ✅ Completed
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transaction Item 6 */}
                <div className="border border-black p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">💸</div>
                      <div>
                        <div className="font-bold text-blue-600">Profit Sharing - EcoFarm Solutions</div>
                        <div className="text-sm text-gray-600">Monthly Returns • 5 NFTs</div>
                        <div className="text-xs text-gray-500">Transaction ID: TX-2024-006</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">+$33.50</div>
                      <div className="text-sm text-gray-600">Sep 8, 2024</div>
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-1 border border-green-500">
                        ✅ Completed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Load More Button */}
              <div className="text-center mt-6">
                <button className="border-2 border-black px-6 py-2 text-sm font-bold hover:bg-gray-100">
                  📄 Load More Transactions
                </button>
              </div>
            </div>

            {/* Transaction Summary */}
            <div className="border-2 border-black p-6 bg-gray-50">
              <h4 className="text-lg font-bold mb-4 bg-gray-600 text-white p-2">
                📊 TRANSACTION SUMMARY
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-3 text-green-800">INFLOWS</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Profit Sharing:</span>
                      <span className="font-bold text-green-600">+$78.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wallet Top-ups:</span>
                      <span className="font-bold text-green-600">+$500.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Refunds:</span>
                      <span className="font-bold text-green-600">+$0.00</span>
                    </div>
                    <div className="border-t border-gray-400 pt-2">
                      <div className="flex justify-between font-bold">
                        <span>Total Inflows:</span>
                        <span className="text-green-600">+$578.50</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold mb-3 text-red-800">OUTFLOWS</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Investments:</span>
                      <span className="font-bold text-red-600">-$350.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform Fees:</span>
                      <span className="font-bold text-red-600">-$6.25</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Withdrawals:</span>
                      <span className="font-bold text-red-600">-$0.00</span>
                    </div>
                    <div className="border-t border-gray-400 pt-2">
                      <div className="flex justify-between font-bold">
                        <span>Total Outflows:</span>
                        <span className="text-red-600">-$356.25</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 border-2 border-black bg-white">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">NET BALANCE CHANGE:</span>
                  <span className="text-2xl font-bold text-green-600">+$222.25</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Positive balance indicates net profit from investments
                </div>
              </div>
            </div>

            {/* Export Options */}
            <div className="border-2 border-black p-4">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="text-sm">
                  <span className="font-bold">Export Options:</span>
                  <span className="text-gray-600 ml-2">Download transaction history for tax purposes</span>
                </div>
                <div className="flex gap-2">
                  <button className="border border-black px-4 py-2 text-sm hover:bg-gray-100">
                    📊 Export to CSV
                  </button>
                  <button className="border border-black px-4 py-2 text-sm hover:bg-gray-100">
                    📄 Export to PDF
                  </button>
                  <button className="border border-black px-4 py-2 text-sm hover:bg-gray-100">
                    🧾 Tax Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Investment Modal */}
      {showInvestmentModal && selectedStartup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white border-4 border-black p-6 max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">💰 INVESTMENT DETAILS</h3>
              <button
                onClick={() => setShowInvestmentModal(false)}
                className="text-2xl hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Startup Info */}
              <div className="border-2 border-black p-4 bg-gray-50">
                <h4 className="text-lg font-bold mb-2">{selectedStartup.name}</h4>
                <div className="text-sm border border-black px-2 py-1 inline-block mb-2">
                  {selectedStartup.sector}
                </div>
                <div className="text-sm space-y-1">
                  <div>NFT Price: ${selectedStartup.nftPrice || selectedStartup.minInvestment}</div>
                  <div>Monthly Return: ${selectedStartup.monthlyReturn}</div>
                  <div>Min Investment: ${selectedStartup.minInvestment}</div>
                </div>
              </div>

              {/* Investment Amount */}
              <div>
                <label className="block text-sm font-bold mb-2">Investment Amount (ckUSDC)</label>
                <input
                  type="number"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  min={selectedStartup.minInvestment || 1}
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
                  max={Math.floor(investmentAmount / (selectedStartup.nftPrice || selectedStartup.minInvestment || 1))}
                  className="w-full border-2 border-black p-2 text-sm"
                  placeholder="Enter quantity"
                />
                <div className="text-xs text-gray-600 mt-1">
                  Max: {Math.floor(investmentAmount / (selectedStartup.nftPrice || selectedStartup.minInvestment || 1))} NFTs
                </div>
              </div>

              {/* Projected Returns */}
              <div className="border-2 border-black p-4 bg-green-50">
                <h4 className="font-bold mb-3 text-green-800">PROJECTED RETURNS</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      ${calculateInvestmentReturns(selectedStartup, investmentAmount, nftQuantity).monthlyReturn}
                    </div>
                    <div className="text-xs">Monthly Return</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {calculateInvestmentReturns(selectedStartup, investmentAmount, nftQuantity).annualReturn.toFixed(1)}%
                    </div>
                    <div className="text-xs">Annual ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">
                      ${calculateInvestmentReturns(selectedStartup, investmentAmount, nftQuantity).totalReturn}
                    </div>
                    <div className="text-xs">Annual Return</div>
                  </div>
                </div>
              </div>

              {/* Risk Warning */}
              <div className="border-2 border-yellow-500 p-3 bg-yellow-50">
                <div className="text-sm font-bold text-yellow-800 mb-2">⚠️ INVESTMENT RISK WARNING</div>
                <div className="text-xs text-yellow-700 space-y-1">
                  <div>• Startup investments carry inherent risks</div>
                  <div>• Returns are not guaranteed and may vary</div>
                  <div>• Past performance does not indicate future results</div>
                  <div>• Only invest what you can afford to lose</div>
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
                disabled={investmentAmount < (selectedStartup.minInvestment || 1)}
                className={`flex-1 py-2 font-bold ${investmentAmount >= (selectedStartup.minInvestment || 1)
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
      <footer className="border-t-2 border-black py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="font-bold mb-2">INVESTOR SUPPORT</div>
              <div>Get help with your investments</div>
            </div>
            <div>
              <div className="font-bold mb-2">LEARNING CENTER</div>
              <div>Investment guides and tutorials</div>
            </div>
            <div>
              <div className="font-bold mb-2">COMMUNITY</div>
              <div>Connect with other investors</div>
            </div>
            <div>
              <div className="font-bold mb-2">SECURITY</div>
              <div>Your investments are protected</div>
            </div>
          </div>
          <div className="border-t border-black mt-6 pt-6">
            <div>© 2024 Plantify. Built on Internet Computer Protocol.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlantifyInvestorDashboard;