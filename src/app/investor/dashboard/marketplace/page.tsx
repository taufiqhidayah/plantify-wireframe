"use client";

import React, { useState } from "react";

const PlantifyAddInvestment = () => {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [nftCount, setNftCount] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("wallet");
  const [activeTab, setActiveTab] = useState("invest");

  // Mock data untuk startup
  const startupData = {
    id: 1,
    name: "GreenFarm Organics",
    sector: "Agriculture",
    founded: "2023-01-15",
    location: "Bandung, West Java",
    description: "Organic vegetable farming using hydroponic technology for sustainable agriculture in urban areas.",
    
    // Investment Details
    investment: {
      nftPrice: 50,
      minInvestment: 50,
      maxInvestment: 1000,
      availableNfts: 245,
      totalNfts: 500,
      monthlyReturn: 6.75,
      expectedRoi: 16.2,
      lockPeriod: 36
    },

    // Current Performance
    performance: {
      lastMonthRevenue: 12500,
      avgMonthlyGrowth: 3.2,
      profitMargin: 34.4,
      customerCount: 245,
      fundingProgress: 51
    },

    // My Current Investment
    myInvestment: {
      currentNfts: 10,
      totalInvested: 500,
      monthlyReturns: 67.50,
      totalReturns: 201,
      roi: 40.2
    }
  };

  // Mock investor data
  const investorData = {
    availableBalance: 1250,
    riskProfile: {
      maxPerStartup: 1000,
      riskTolerance: "Moderate",
      monthlyBudget: 500
    }
  };

  const calculateInvestmentImpact = () => {
    const totalCost = nftCount * startupData.investment.nftPrice;
    const monthlyReturn = nftCount * startupData.investment.monthlyReturn;
    const annualReturn = monthlyReturn * 12;
    const roi = (annualReturn / totalCost) * 100;
    
    return {
      totalCost,
      monthlyReturn,
      annualReturn,
      roi,
      newTotalNfts: startupData.myInvestment.currentNfts + nftCount,
      newMonthlyReturns: startupData.myInvestment.monthlyReturns + monthlyReturn
    };
  };

  const impact = calculateInvestmentImpact();

  const handleAmountChange = (amount: number) => {
    setSelectedAmount(amount);
    const calculatedNfts = Math.floor(amount / startupData.investment.nftPrice);
    setNftCount(calculatedNfts);
  };

  const handleNftCountChange = (count: number) => {
    setNftCount(count);
    setSelectedAmount(count * startupData.investment.nftPrice);
  };

  const canInvest = () => {
    return (
      nftCount > 0 &&
      impact.totalCost <= investorData.availableBalance &&
      impact.totalCost <= startupData.investment.maxInvestment &&
      nftCount <= startupData.investment.availableNfts &&
      (startupData.myInvestment.totalInvested + impact.totalCost) <= investorData.riskProfile.maxPerStartup
    );
  };

  const getValidationMessage = () => {
    if (nftCount === 0) return "Please select investment amount";
    if (impact.totalCost > investorData.availableBalance) return "Insufficient balance";
    if (impact.totalCost > startupData.investment.maxInvestment) return "Exceeds maximum investment limit";
    if (nftCount > startupData.investment.availableNfts) return "Not enough NFTs available";
    if ((startupData.myInvestment.totalInvested + impact.totalCost) > investorData.riskProfile.maxPerStartup) {
      return "Exceeds your risk profile limit per startup";
    }
    return "";
  };

  const renderInvestTab = () => (
    <div className="space-y-6">
      {/* Startup Summary */}
      <div className="border-2 border-black p-6 bg-blue-50">
        <h3 className="text-xl font-bold mb-4 bg-blue-600 text-white p-2">
          STARTUP OVERVIEW
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-bold mb-2">{startupData.name}</h4>
            <div className="space-y-2 text-sm">
              <div><span className="font-bold">Sector:</span> {startupData.sector}</div>
              <div><span className="font-bold">Location:</span> {startupData.location}</div>
              <div><span className="font-bold">Founded:</span> {startupData.founded}</div>
            </div>
            <div className="mt-3 text-sm">{startupData.description}</div>
          </div>
          <div className="space-y-3">
            <div className="border border-black p-3 bg-white">
              <div className="text-sm font-bold mb-1">RECENT PERFORMANCE</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Revenue: ${startupData.performance.lastMonthRevenue.toLocaleString()}</div>
                <div>Growth: +{startupData.performance.avgMonthlyGrowth}%</div>
                <div>Customers: {startupData.performance.customerCount}</div>
                <div>Margin: {startupData.performance.profitMargin}%</div>
              </div>
            </div>
            <div className="border border-black p-3 bg-white">
              <div className="text-sm font-bold mb-1">FUNDING STATUS</div>
              <div className="mb-2">
                <div className="border border-black h-3">
                  <div 
                    className="bg-green-500 h-full" 
                    style={{ width: `${startupData.performance.fundingProgress}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-xs">{startupData.performance.fundingProgress}% funded • {startupData.investment.availableNfts} NFTs available</div>
            </div>
          </div>
        </div>
      </div>

      {/* My Current Investment */}
      <div className="border-2 border-black p-6 bg-green-50">
        <h3 className="text-xl font-bold mb-4 bg-green-600 text-white p-2">
          MY CURRENT INVESTMENT
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border border-black p-4 bg-white text-center">
            <div className="text-sm font-bold mb-1">CURRENT NFTs</div>
            <div className="text-2xl font-bold">{startupData.myInvestment.currentNfts}</div>
            <div className="text-xs text-gray-600">Investment units</div>
          </div>
          <div className="border border-black p-4 bg-white text-center">
            <div className="text-sm font-bold mb-1">TOTAL INVESTED</div>
            <div className="text-2xl font-bold">${startupData.myInvestment.totalInvested}</div>
            <div className="text-xs text-gray-600">Principal amount</div>
          </div>
          <div className="border border-black p-4 bg-white text-center">
            <div className="text-sm font-bold mb-1">MONTHLY RETURNS</div>
            <div className="text-2xl font-bold text-green-600">${startupData.myInvestment.monthlyReturns}</div>
            <div className="text-xs text-gray-600">Current income</div>
          </div>
          <div className="border border-black p-4 bg-white text-center">
            <div className="text-sm font-bold mb-1">TOTAL ROI</div>
            <div className="text-2xl font-bold text-blue-600">{startupData.myInvestment.roi}%</div>
            <div className="text-xs text-gray-600">Lifetime returns</div>
          </div>
        </div>
      </div>

      {/* Investment Options */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
          ADD INVESTMENT
        </h3>

        {/* Quick Amount Buttons */}
        <div className="mb-6">
          <div className="text-sm font-bold mb-3">QUICK AMOUNTS</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[100, 250, 500, 750].map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountChange(amount)}
                disabled={amount > investorData.availableBalance}
                className={`p-3 border-2 border-black font-bold ${
                  selectedAmount === amount
                    ? 'bg-black text-white'
                    : amount > investorData.availableBalance
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'hover:bg-gray-100'
                }`}
              >
                ${amount}
                <div className="text-xs font-normal">
                  {Math.floor(amount / startupData.investment.nftPrice)} NFTs
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Amount Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">CUSTOM AMOUNT (ckUSDC)</label>
              <input
                type="number"
                className="w-full border-2 border-black p-3 text-lg"
                value={selectedAmount.toString()}
                onChange={(e) => handleAmountChange(parseInt(e.target.value) || 0)}
                placeholder="Enter amount..."
                min={startupData.investment.minInvestment}
                max={Math.min(investorData.availableBalance, startupData.investment.maxInvestment)}
              />
              <div className="text-xs text-gray-600 mt-1">
                Min: ${startupData.investment.minInvestment} • Max: ${Math.min(investorData.availableBalance, startupData.investment.maxInvestment)}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">NFT QUANTITY</label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleNftCountChange(Math.max(0, nftCount - 1))}
                  className="border border-black px-3 py-2 hover:bg-gray-100"
                  disabled={nftCount <= 0}
                >
                  -
                </button>
                <input
                  type="number"
                  className="border-2 border-black p-2 text-center w-20"
                  value={nftCount.toString()}
                  onChange={(e) => handleNftCountChange(parseInt(e.target.value) || 0)}
                  min="0"
                  max={startupData.investment.availableNfts}
                />
                <button
                  onClick={() => handleNftCountChange(nftCount + 1)}
                  className="border border-black px-3 py-2 hover:bg-gray-100"
                  disabled={nftCount >= startupData.investment.availableNfts}
                >
                  +
                </button>
              </div>
              <div className="text-xs text-gray-600 mt-1">
                Available: {startupData.investment.availableNfts} NFTs • Price: ${startupData.investment.nftPrice} each
              </div>
            </div>
          </div>

          {/* Investment Impact */}
          <div className="border border-black p-4 bg-gray-50">
            <div className="text-sm font-bold mb-3">INVESTMENT IMPACT</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>NFT Count:</span>
                <span className="font-bold">{nftCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Cost:</span>
                <span className="font-bold">${impact.totalCost}</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly Return:</span>
                <span className="font-bold text-green-600">+${impact.monthlyReturn.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Annual Return:</span>
                <span className="font-bold text-blue-600">+${impact.annualReturn.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Expected ROI:</span>
                <span className="font-bold">{impact.roi.toFixed(1)}%</span>
              </div>
              <div className="border-t border-black pt-2 mt-3">
                <div className="font-bold mb-1">NEW TOTALS:</div>
                <div className="flex justify-between text-xs">
                  <span>Total NFTs:</span>
                  <span>{impact.newTotalNfts}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Monthly Income:</span>
                  <span className="text-green-600">${impact.newMonthlyReturns.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Validation Message */}
        {getValidationMessage() && (
          <div className="mt-4 p-3 border-2 border-red-500 bg-red-50 text-red-800 text-sm">
            ⚠️ {getValidationMessage()}
          </div>
        )}
      </div>

      {/* Risk Assessment */}
      <div className="border-2 border-black p-6 bg-yellow-50">
        <h3 className="text-xl font-bold mb-4 bg-yellow-600 text-white p-2">
          RISK ASSESSMENT
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-black p-3 bg-white">
            <div className="text-sm font-bold mb-2">DIVERSIFICATION</div>
            <div className="text-sm">
              <div>Current startup allocation: {((startupData.myInvestment.totalInvested + impact.totalCost) / investorData.riskProfile.maxPerStartup * 100).toFixed(1)}%</div>
              <div className="text-xs text-gray-600">of your per-startup limit</div>
            </div>
          </div>
          <div className="border border-black p-3 bg-white">
            <div className="text-sm font-bold mb-2">RISK LEVEL</div>
            <div className="text-sm">
              <div>Moderate Risk</div>
              <div className="text-xs text-gray-600">Matches your profile</div>
            </div>
          </div>
          <div className="border border-black p-3 bg-white">
            <div className="text-sm font-bold mb-2">LOCK PERIOD</div>
            <div className="text-sm">
              <div>{startupData.investment.lockPeriod} months</div>
              <div className="text-xs text-gray-600">Cannot sell before maturity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPaymentTab = () => (
    <div className="space-y-6">
      {/* Investment Summary */}
      <div className="border-2 border-black p-6 bg-blue-50">
        <h3 className="text-xl font-bold mb-4 bg-blue-600 text-white p-2">
          INVESTMENT SUMMARY
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div><span className="font-bold">Startup:</span> {startupData.name}</div>
            <div><span className="font-bold">NFT Quantity:</span> {nftCount}</div>
            <div><span className="font-bold">Price per NFT:</span> ${startupData.investment.nftPrice}</div>
            <div><span className="font-bold">Total Investment:</span> ${impact.totalCost}</div>
          </div>
          <div className="space-y-3">
            <div><span className="font-bold">Expected Monthly Return:</span> ${impact.monthlyReturn.toFixed(2)}</div>
            <div><span className="font-bold">Expected Annual Return:</span> ${impact.annualReturn.toFixed(2)}</div>
            <div><span className="font-bold">Expected ROI:</span> {impact.roi.toFixed(1)}%</div>
            <div><span className="font-bold">Lock Period:</span> {startupData.investment.lockPeriod} months</div>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
          PAYMENT METHOD
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 border border-black cursor-pointer hover:bg-gray-50"
               onClick={() => setPaymentMethod('wallet')}>
            <input
              type="radio"
              name="payment"
              value="wallet"
              checked={paymentMethod === 'wallet'}
              onChange={() => setPaymentMethod('wallet')}
              className="w-4 h-4"
            />
            <div className="flex-1">
              <div className="font-bold">ckUSDC Wallet</div>
              <div className="text-sm text-gray-600">
                Available Balance: ${investorData.availableBalance} ckUSDC
              </div>
              <div className="text-xs text-green-600">✓ Instant transaction • No fees</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 border border-gray-300 cursor-not-allowed bg-gray-100">
            <input
              type="radio"
              name="payment"
              value="external"
              disabled
              className="w-4 h-4"
            />
            <div className="flex-1">
              <div className="font-bold text-gray-500">External Transfer</div>
              <div className="text-sm text-gray-400">
                Bank transfer or crypto deposit (Coming Soon)
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Fee Info */}
        <div className="mt-6 border border-black p-4 bg-gray-50">
          <div className="text-sm font-bold mb-2">TRANSACTION DETAILS</div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Investment Amount:</span>
              <span>${impact.totalCost}</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee:</span>
              <span>$0 (No fees)</span>
            </div>
            <div className="flex justify-between">
              <span>Network Fee:</span>
              <span>~$0.001 (IC Network)</span>
            </div>
            <div className="border-t border-black pt-2 flex justify-between font-bold">
              <span>Total Cost:</span>
              <span>${impact.totalCost}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-gray-800 text-white p-2">
          TERMS & CONDITIONS
        </h3>
        
        <div className="space-y-4 text-sm">
          <div className="border border-black p-3">
            <div className="font-bold mb-2">🔒 INVESTMENT TERMS</div>
            <ul className="space-y-1 text-sm">
              <li>• Investment is locked for {startupData.investment.lockPeriod} months</li>
              <li>• NFTs cannot be sold or transferred during lock period</li>
              <li>• Returns are distributed monthly based on startup performance</li>
              <li>• Community voting required for profit sharing approval</li>
            </ul>
          </div>
          
          <div className="border border-black p-3">
            <div className="font-bold mb-2">⚠️ RISK DISCLOSURE</div>
            <ul className="space-y-1 text-sm">
              <li>• Startup investments are high-risk and may result in loss</li>
              <li>• Returns are not guaranteed and depend on business performance</li>
              <li>• You may lose some or all of your investment</li>
              <li>• Only invest what you can afford to lose</li>
            </ul>
          </div>

          <div className="flex items-start space-x-3 p-3 border border-black">
            <input type="checkbox" id="terms" className="mt-1" />
            <label htmlFor="terms" className="text-sm">
              <span className="font-bold">I agree to the terms and conditions</span>
              <br />I understand the risks and confirm that I have read and accept all terms of this investment.
            </label>
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
              ← Back to Portfolio
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm">Add Investment</div>
            <div className="text-sm border border-black px-3 py-1">
              Balance: ${investorData.availableBalance} ckUSDC
            </div>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <div className="border-b border-black bg-green-50 p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">
            💰 ADD INVESTMENT
          </h1>
          <div className="text-sm text-gray-600">
            Increase your investment in {startupData.name} to earn higher monthly returns
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto flex">
          {[
            { id: "invest", label: "INVESTMENT DETAILS", icon: "📊" },
            { id: "payment", label: "PAYMENT & TERMS", icon: "💳" },
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
        {activeTab === "invest" && renderInvestTab()}
        {activeTab === "payment" && renderPaymentTab()}
      </div>

      {/* Action Bar - Sticky Bottom */}
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
                <div className="text-xl font-bold text-green-600">+${impact.monthlyReturn.toFixed(2)}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="border border-black px-6 py-3 text-sm hover:bg-gray-100">
                SAVE DRAFT
              </button>
              <button
                onClick={() => canInvest() && setShowConfirmation(true)}
                disabled={!canInvest()}
                className={`px-8 py-3 text-lg font-bold ${
                  canInvest()
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                CONFIRM INVESTMENT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white border-4 border-black p-6 max-w-lg mx-4">
            <h3 className="text-xl font-bold mb-4">CONFIRM INVESTMENT</h3>
            
            <div className="space-y-3 mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="font-bold">Startup:</span></div>
                <div>{startupData.name}</div>
                <div><span className="font-bold">NFTs:</span></div>
                <div>{nftCount} @ ${startupData.investment.nftPrice} each</div>
                <div><span className="font-bold">Total Cost:</span></div>
                <div className="font-bold">${impact.totalCost}</div>
                <div><span className="font-bold">Monthly Return:</span></div>
                <div className="text-green-600 font-bold">+${impact.monthlyReturn.toFixed(2)}</div>
                <div><span className="font-bold">Lock Period:</span></div>
                <div>{startupData.investment.lockPeriod} months</div>
              </div>
            </div>

            <div className="text-sm bg-yellow-50 border border-yellow-500 p-3 mb-4">
              ⚠️ <strong>Warning:</strong> This investment will be locked for {startupData.investment.lockPeriod} months and cannot be withdrawn early.
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  alert("Investment successful! Redirecting to portfolio...");
                  setShowConfirmation(false);
                }}
                className="flex-1 bg-black text-white py-3 font-bold hover:bg-gray-800"
              >
                CONFIRM & INVEST
              </button>
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 border border-black py-3 font-bold hover:bg-gray-100"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t-2 border-black py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
          <div>© 2024 Plantify. Built on Internet Computer Protocol.</div>
        </div>
      </footer>
    </div>
  );
};

export default PlantifyAddInvestment;