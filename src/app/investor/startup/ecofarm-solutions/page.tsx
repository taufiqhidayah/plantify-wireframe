"use client";

import React, { useState } from "react";

const EcoFarmSolutionsDetail = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [nftCount, setNftCount] = useState(1);

  const startupData = {
    name: "EcoFarm Solutions",
    tagline: "Sustainable Agriculture Through Smart Technology",
    sector: "Agriculture",
    location: "Yogyakarta, Central Java",
    website: "ecofarm-solutions.id",
    employees: 12,
    riskLevel: "Low",
    
    investment: {
      nftPrice: 75,
      monthlyReturn: 12,
      expectedRoi: 16.0,
      availableNfts: 100,
      fundingProgress: 80,
      fundingRaised: 30000,
      fundingTarget: 37500,
      lockPeriod: 36
    },

    metrics: {
      monthlyRevenue: 14500,
      revenueGrowth: 18.5,
      netProfitMargin: 32.1,
      customerCount: 186,
      customerGrowth: 22,
      avgOrderValue: 78
    },

    description: {
      overview: "EcoFarm Solutions mengembangkan sistem pertanian hidroponik terintegrasi dengan teknologi IoT untuk membantu petani meningkatkan hasil panen sambil menjaga kelestarian lingkungan.",
      businessModel: "B2B2C hybrid model - menjual sistem hidroponik ke petani dan hasil panen organik ke konsumen.",
      competitiveAdvantage: [
        "Teknologi IoT proprietary untuk monitoring tanaman",
        "Sistem nutrisi organik yang telah dipatenkan", 
        "Kemitraan strategis dengan 50+ petani lokal",
        "Tim R&D dengan 15+ tahun pengalaman"
      ]
    },

    founder: {
      name: "Dr. Sari Wijayanti",
      title: "CEO & Founder",
      background: "PhD in Agricultural Engineering dari UGM. 12 tahun pengalaman di agritech dan sustainable farming.",
      previousCompanies: [
        "Senior Research Scientist - BPPT (2018-2022)",
        "Agricultural Consultant - World Bank (2016-2018)",
        "R&D Manager - PT Agro Innovation (2012-2016)"
      ],
      achievements: [
        "Published 25+ research papers",
        "Indonesia Innovation Award 2021", 
        "TED Speaker on Smart Farming"
      ]
    },

    financials: {
      revenueHistory: [
        { month: "Mar 2024", revenue: 8200, expenses: 5800, profit: 2400 },
        { month: "Apr 2024", revenue: 9800, expenses: 6200, profit: 3600 },
        { month: "May 2024", revenue: 11200, expenses: 6800, profit: 4400 },
        { month: "Jun 2024", revenue: 12100, expenses: 7100, profit: 5000 },
        { month: "Jul 2024", revenue: 13400, expenses: 7400, profit: 6000 },
        { month: "Aug 2024", revenue: 14500, expenses: 7800, profit: 6700 }
      ]
    },

    products: [
      {
        name: "EcoGrow System",
        description: "Complete hydroponic setup with IoT monitoring",
        price: "Rp 25,000,000",
        customers: 45
      },
      {
        name: "Smart Nutrient Mix", 
        description: "Organic nutrient solution subscription",
        price: "Rp 500,000/month",
        customers: 78
      }
    ],

    documents: [
      {
        type: "Business Plan",
        name: "EcoFarm Solutions - Business Plan 2024-2027",
        size: "2.4 MB",
        pages: 45,
        lastUpdated: "August 2024"
      },
      {
        type: "Financial Statements",
        name: "Audited Financial Report Q2 2024", 
        size: "1.8 MB",
        pages: 24,
        lastUpdated: "July 2024"
      }
    ],

    risks: {
      level: "Low",
      factors: [
        {
          risk: "Weather Dependency",
          impact: "Medium",
          mitigation: "Controlled greenhouse environment and weather monitoring systems"
        },
        {
          risk: "Market Competition",
          impact: "Low", 
          mitigation: "Strong IP protection and established customer relationships"
        }
      ]
    }
  };

  const calculateImpact = () => {
    const totalCost = nftCount * startupData.investment.nftPrice;
    const monthlyReturn = nftCount * startupData.investment.monthlyReturn;
    const annualReturn = monthlyReturn * 12;
    const roi = (annualReturn / totalCost) * 100;
    return { totalCost, monthlyReturn, annualReturn, roi };
  };

  const impact = calculateImpact();

  const renderOverviewTab = () => (
    <div className="space-y-6">
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-green-600 text-white p-2">
          COMPANY OVERVIEW
        </h3>
        <div className="space-y-4">
          <p className="text-sm leading-relaxed">{startupData.description.overview}</p>
          
          <div className="mt-6">
            <h4 className="font-bold mb-2">BUSINESS MODEL</h4>
            <p className="text-sm leading-relaxed">{startupData.description.businessModel}</p>
          </div>

          <div className="mt-6">
            <h4 className="font-bold mb-3">COMPETITIVE ADVANTAGES</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {startupData.description.competitiveAdvantage.map((advantage, index) => (
                <div key={index} className="border border-black p-2 text-sm">
                  ✓ {advantage}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-blue-600 text-white p-2">
          KEY BUSINESS METRICS
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-black p-3 text-center">
            <div className="text-lg font-bold text-green-600">
              ${startupData.metrics.monthlyRevenue.toLocaleString()}
            </div>
            <div className="text-xs">Monthly Revenue</div>
            <div className="text-xs text-green-600">+{startupData.metrics.revenueGrowth}%</div>
          </div>
          <div className="border border-black p-3 text-center">
            <div className="text-lg font-bold">
              {startupData.metrics.netProfitMargin}%
            </div>
            <div className="text-xs">Net Profit Margin</div>
          </div>
          <div className="border border-black p-3 text-center">
            <div className="text-lg font-bold text-blue-600">
              {startupData.metrics.customerCount}
            </div>
            <div className="text-xs">Total Customers</div>
            <div className="text-xs text-blue-600">+{startupData.metrics.customerGrowth}%</div>
          </div>
          <div className="border border-black p-3 text-center">
            <div className="text-lg font-bold">
              ${startupData.metrics.avgOrderValue}
            </div>
            <div className="text-xs">Avg Order Value</div>
          </div>
        </div>
      </div>

      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-purple-600 text-white p-2">
          PRODUCTS & SERVICES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {startupData.products.map((product, index) => (
            <div key={index} className="border border-black p-4">
              <h4 className="font-bold mb-2">{product.name}</h4>
              <p className="text-sm mb-2">{product.description}</p>
              <div className="text-sm font-bold mb-1">Price: {product.price}</div>
              <div className="text-xs text-gray-600">Customers: {product.customers}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFinancialsTab = () => (
    <div className="space-y-6">
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-green-600 text-white p-2">
          FINANCIAL PERFORMANCE (Last 6 Months)
        </h3>
        <div className="space-y-4">
          {startupData.financials.revenueHistory.map((month, index) => (
            <div key={index} className="border border-black p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold">{month.month}</h4>
                <div className="text-sm text-green-600">
                  Profit: ${month.profit.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-bold">Revenue:</span> ${month.revenue.toLocaleString()}
                </div>
                <div>
                  <span className="font-bold">Expenses:</span> ${month.expenses.toLocaleString()}
                </div>
                <div>
                  <span className="font-bold">Profit Margin:</span> {((month.profit / month.revenue) * 100).toFixed(1)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 border-black p-6 bg-green-50">
        <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
          INVESTOR PROFIT SHARING MODEL
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-3">How Profit Sharing Works</h4>
            <div className="space-y-2 text-sm">
              <div>• 70% of monthly net profit distributed to NFT holders</div>
              <div>• 30% retained by company for growth and operations</div>
              <div>• Payments distributed on 1st of each month</div>
              <div>• Profit sharing locked for {startupData.investment.lockPeriod} months</div>
              <div>• Transparent reporting with monthly financial statements</div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3">Expected Monthly Distribution</h4>
            <div className="border border-black p-4">
              <div className="text-sm mb-2">Based on current performance:</div>
              <div className="text-lg font-bold text-green-600 mb-2">
                ${startupData.investment.monthlyReturn} per NFT
              </div>
              <div className="text-xs text-gray-600">
                From latest month net profit of $6,700
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFounderTab = () => (
    <div className="space-y-6">
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-purple-600 text-white p-2">
          FOUNDER PROFILE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="border border-black p-4 text-center">
              <div className="w-32 h-32 border-2 border-black bg-gray-100 flex items-center justify-center mx-auto mb-4">
                [FOUNDER PHOTO]
              </div>
              <h4 className="font-bold text-lg">{startupData.founder.name}</h4>
              <div className="text-sm text-gray-600">{startupData.founder.title}</div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">BACKGROUND & EDUCATION</h4>
                <p className="text-sm leading-relaxed">{startupData.founder.background}</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">PREVIOUS EXPERIENCE</h4>
                <div className="space-y-2">
                  {startupData.founder.previousCompanies.map((company, index) => (
                    <div key={index} className="border border-black p-2 text-sm">
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-bold mb-3">KEY ACHIEVEMENTS</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {startupData.founder.achievements.map((achievement, index) => (
              <div key={index} className="border border-black p-3 text-sm text-center">
                🏆 {achievement}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocumentsTab = () => (
    <div className="space-y-6">
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-red-600 text-white p-2">
          📄 OFFICIAL DOCUMENTS
        </h3>
        <div className="text-sm mb-6 bg-yellow-50 border border-yellow-500 p-3">
          <strong>⚠️ Important:</strong> All documents are verified and audited. Access is provided for due diligence purposes.
        </div>
        
        <div className="space-y-4">
          {startupData.documents.map((doc, index) => (
            <div key={index} className="border-2 border-black p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs border border-black px-2 py-1 bg-gray-100">
                      {doc.type}
                    </span>
                    <span className="text-xs text-gray-600">
                      Updated: {doc.lastUpdated}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg">{doc.name}</h4>
                </div>
                <div className="text-right text-sm">
                  <div className="font-bold">{doc.size}</div>
                  <div className="text-xs text-gray-600">{doc.pages} pages</div>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <button className="border border-black px-4 py-2 text-sm hover:bg-gray-100">
                  📖 Preview
                </button>
                <button className="border border-black px-4 py-2 text-sm hover:bg-gray-100">
                  📥 Download
                </button>
                <button className="border border-black px-4 py-2 text-sm hover:bg-gray-100">
                  🔗 Request Access
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRisksTab = () => (
    <div className="space-y-6">
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-yellow-600 text-white p-2">
          ⚠️ RISK ASSESSMENT
        </h3>
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-lg font-bold">Overall Risk Level:</div>
            <div className="bg-green-100 border border-green-500 text-green-800 px-3 py-1 font-bold">
              {startupData.risks.level} RISK
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {startupData.risks.factors.map((factor, index) => (
            <div key={index} className="border-2 border-black p-4">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-lg">{factor.risk}</h4>
                <div className={`text-xs px-2 py-1 border ${
                  factor.impact === 'Low' ? 'bg-green-100 border-green-500 text-green-800' :
                  factor.impact === 'Medium' ? 'bg-yellow-100 border-yellow-500 text-yellow-800' :
                  'bg-red-100 border-red-500 text-red-800'
                }`}>
                  {factor.impact} Impact
                </div>
              </div>
              <div>
                <span className="font-bold text-sm">Mitigation Strategy:</span>
                <p className="text-sm mt-1">{factor.mitigation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 border-black p-6 bg-red-50">
        <h3 className="text-xl font-bold mb-4 bg-red-600 text-white p-2">
          💼 GENERAL INVESTMENT RISKS
        </h3>
        <div className="text-sm">
          <div className="mb-3">
            <strong>Investment Risks Include:</strong>
          </div>
          <div className="space-y-1">
            <div>• 36-month lock period - no early exit</div>
            <div>• Returns depend on business performance</div>
            <div>• No guaranteed profit sharing</div>
            <div>• Potential loss of principal investment</div>
            <div>• Market volatility impact</div>
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
            <div className="text-2xl font-bold border-2 border-black px-4 py-2">
              PLANTIFY
            </div>
            <button className="text-sm hover:underline">
              ← Back to Marketplace
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm">Startup Detail</div>
            <div className="text-sm border border-black px-3 py-1">
              Balance: $1,250 ckUSDC
            </div>
          </div>
        </div>
      </header>

      {/* Startup Header */}
      <div className="border-b border-black bg-green-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{startupData.name}</h1>
                <div className="bg-green-100 border border-green-500 text-green-800 px-2 py-1 text-xs font-bold">
                  {startupData.riskLevel} RISK
                </div>
              </div>
              <div className="text-lg text-gray-700 mb-3">{startupData.tagline}</div>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="border border-black px-2 py-1">{startupData.sector}</span>
                <span className="border border-gray-400 px-2 py-1 text-gray-600">📍 {startupData.location}</span>
                <span className="border border-gray-400 px-2 py-1 text-gray-600">🌐 {startupData.website}</span>
                <span className="border border-gray-400 px-2 py-1 text-gray-600">👥 {startupData.employees} employees</span>
              </div>
            </div>
            
            {/* Investment Summary */}
            <div className="border-2 border-black p-4 bg-white">
              <h3 className="font-bold mb-3">INVESTMENT OPPORTUNITY</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span>NFT Price:</span>
                  <span className="font-bold">${startupData.investment.nftPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Return:</span>
                  <span className="font-bold text-green-600">${startupData.investment.monthlyReturn}</span>
                </div>
                <div className="flex justify-between">
                  <span>Expected ROI:</span>
                  <span className="font-bold text-blue-600">{startupData.investment.expectedRoi}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Available NFTs:</span>
                  <span className="font-bold">{startupData.investment.availableNfts}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-xs mb-1">Funding Progress: {startupData.investment.fundingProgress}%</div>
                <div className="border border-black h-3">
                  <div 
                    className="bg-green-500 h-full" 
                    style={{ width: `${startupData.investment.fundingProgress}%` }}
                  ></div>
                </div>
                <div className="text-xs mt-1">
                  ${startupData.investment.fundingRaised.toLocaleString()} / ${startupData.investment.fundingTarget.toLocaleString()}
                </div>
              </div>

              <button className="bg-black text-white w-full py-3 font-bold text-lg hover:bg-gray-800">
                INVEST NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto flex">
          {[
            { id: "overview", label: "OVERVIEW", icon: "📊" },
            { id: "financials", label: "FINANCIALS", icon: "💰" },
            { id: "founder", label: "FOUNDER & TEAM", icon: "👥" },
            { id: "documents", label: "DOCUMENTS", icon: "📄" },
            { id: "risks", label: "RISKS", icon: "⚠️" },
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
        {activeTab === "founder" && renderFounderTab()}
        {activeTab === "documents" && renderDocumentsTab()}
        {activeTab === "risks" && renderRisksTab()}
      </div>

      {/* Sticky Investment Panel */}
      <div className="border-t-2 border-black bg-white p-4 sticky bottom-0 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div>
                <div className="text-sm text-gray-600">Investment Amount</div>
                <div className="text-xl font-bold">${impact.totalCost}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">NFTs</div>
                <div className="text-xl font-bold">{nftCount}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Monthly Return</div>
                <div className="text-xl font-bold text-green-600">${impact.monthlyReturn}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Expected ROI</div>
                <div className="text-xl font-bold text-blue-600">{impact.roi.toFixed(1)}%</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setNftCount(Math.max(1, nftCount - 1))}
                  className="border border-black px-3 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 border border-black bg-gray-50">
                  {nftCount} NFTs
                </span>
                <button
                  onClick={() => setNftCount(nftCount + 1)}
                  className="border border-black px-3 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              
              <button className="bg-black text-white px-8 py-3 text-lg font-bold hover:bg-gray-800">
                INVEST ${impact.totalCost}
              </button>
            </div>
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

export default EcoFarmSolutionsDetail;