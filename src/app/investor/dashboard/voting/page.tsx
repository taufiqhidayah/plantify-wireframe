"use client";

import React, { useState } from "react";

const PlantifyVoteOnReport = () => {
  const [voteChoice, setVoteChoice] = useState<'approve' | 'reject' | null>(null);
  const [comment, setComment] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [activeTab, setActiveTab] = useState("summary");

  // Mock data untuk report
  const reportData = {
    startup: {
      name: "GreenFarm Organics",
      sector: "Agriculture",
      founder: "Budi Santoso",
      location: "Bandung, West Java"
    },
    report: {
      month: "September 2024",
      submittedDate: "2024-09-05",
      dueDate: "2024-09-15",
      reportId: "GFO-202409-001",
      
      // Financial Data
      financials: {
        revenue: 12500,
        revenueTarget: 10000,
        expenses: 8200,
        expensesBudget: 8500,
        netProfit: 4300,
        profitMargin: 34.4,
        previousMonthRevenue: 10800,
        growth: 15.7
      },

      // Business Metrics
      metrics: {
        newCustomers: 45,
        totalCustomers: 245,
        customerRetention: 92,
        productsSold: 1250,
        avgOrderValue: 10,
        employeeCount: 8
      },

      // Goals & Achievements
      goals: {
        achievements: [
          "✅ Launched new organic herbs product line",
          "✅ Secured partnership with 2 major supermarket chains",
          "✅ Implemented automated irrigation system",
          "✅ Achieved 95% crop yield efficiency"
        ],
        challenges: [
          "⚠️ Weather disruption caused 2-day delay in harvest",
          "⚠️ Supply chain issues for packaging materials",
          "⚠️ Higher than expected utility costs due to equipment upgrade"
        ],
        nextMonthPlans: [
          "🎯 Launch online direct-to-consumer platform",
          "🎯 Expand greenhouse capacity by 30%",
          "🎯 Hire 2 additional farm technicians",
          "🎯 Target $13,000 revenue for October"
        ]
      }
    },
    
    // Voting Info
    voting: {
      deadline: "2024-09-15 23:59",
      totalVoters: 150,
      currentVotes: {
        approve: 89,
        reject: 12,
        pending: 49
      },
      myInvestment: {
        nftCount: 10,
        votingPower: 10,
        investmentValue: 500
      },
      requiredApproval: 75 // 75% approval needed
    }
  };

  const calculateApprovalRate = (): number => {
    const { approve, reject } = reportData.voting.currentVotes;
    const totalVoted = approve + reject;
    return totalVoted > 0 ? parseFloat((approve / totalVoted * 100).toFixed(1)) : 0;
  };

  const handleVoteSubmit = () => {
    if (!voteChoice) {
      alert("Please select your vote (Approve or Reject)");
      return;
    }
    setShowConfirmation(true);
  };

  const confirmVote = () => {
    // Here would be the actual voting logic
    alert(`Vote ${voteChoice?.toUpperCase()} submitted successfully!`);
    setShowConfirmation(false);
  };

  const renderSummaryTab = () => (
    <div className="space-y-6">
      {/* Report Header */}
      <div className="border-2 border-black p-6 bg-blue-50">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold">{reportData.startup.name}</h2>
            <div className="text-sm text-gray-600">
              {reportData.report.month} Progress Report
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold">Report ID</div>
            <div className="text-sm text-gray-600">{reportData.report.reportId}</div>
            <div className="text-sm font-bold mt-2">Submitted</div>
            <div className="text-sm text-gray-600">{reportData.report.submittedDate}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <div className="text-sm font-bold">Sector</div>
            <div className="border border-black px-2 py-1 inline-block text-sm">
              {reportData.startup.sector}
            </div>
          </div>
          <div>
            <div className="text-sm font-bold">Founder</div>
            <div>{reportData.startup.founder}</div>
          </div>
          <div>
            <div className="text-sm font-bold">Location</div>
            <div>{reportData.startup.location}</div>
          </div>
          <div>
            <div className="text-sm font-bold">Voting Deadline</div>
            <div className="text-red-600 font-bold">{reportData.voting.deadline}</div>
          </div>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-green-600 text-white p-2">
          KEY PERFORMANCE INDICATORS
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border-2 border-black p-4">
            <div className="text-sm font-bold mb-2">REVENUE PERFORMANCE</div>
            <div className="text-2xl font-bold mb-1">
              ${reportData.report.financials.revenue.toLocaleString()}
            </div>
            <div className="text-sm mb-2">
              Target: ${reportData.report.financials.revenueTarget.toLocaleString()}
              <span className="text-green-600 font-bold ml-1">
                (+{((reportData.report.financials.revenue - reportData.report.financials.revenueTarget) / reportData.report.financials.revenueTarget * 100).toFixed(1)}%)
              </span>
            </div>
            <div className="border border-black h-3">
              <div 
                className="bg-green-500 h-full" 
                style={{ width: `${Math.min(reportData.report.financials.revenue / reportData.report.financials.revenueTarget * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          <div className="border-2 border-black p-4">
            <div className="text-sm font-bold mb-2">EXPENSE CONTROL</div>
            <div className="text-2xl font-bold mb-1">
              ${reportData.report.financials.expenses.toLocaleString()}
            </div>
            <div className="text-sm mb-2">
              Budget: ${reportData.report.financials.expensesBudget.toLocaleString()}
              <span className="text-green-600 font-bold ml-1">
                (Under budget)
              </span>
            </div>
            <div className="border border-black h-3">
              <div 
                className="bg-blue-500 h-full" 
                style={{ width: `${reportData.report.financials.expenses / reportData.report.financials.expensesBudget * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="border-2 border-black p-4">
            <div className="text-sm font-bold mb-2">NET PROFIT</div>
            <div className="text-2xl font-bold text-green-600 mb-1">
              ${reportData.report.financials.netProfit.toLocaleString()}
            </div>
            <div className="text-sm mb-2">
              Margin: {reportData.report.financials.profitMargin}%
            </div>
            <div className="text-xs text-gray-600">
              Growth: +{reportData.report.financials.growth}% vs last month
            </div>
          </div>
        </div>

        {/* Business Metrics */}
        <div className="border-t-2 border-black pt-4">
          <div className="text-lg font-bold mb-3">Business Growth Metrics</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 border border-black">
              <div className="text-xl font-bold text-blue-600">
                +{reportData.report.metrics.newCustomers}
              </div>
              <div className="text-xs">New Customers</div>
            </div>
            <div className="text-center p-3 border border-black">
              <div className="text-xl font-bold">
                {reportData.report.metrics.totalCustomers}
              </div>
              <div className="text-xs">Total Customers</div>
            </div>
            <div className="text-center p-3 border border-black">
              <div className="text-xl font-bold text-green-600">
                {reportData.report.metrics.customerRetention}%
              </div>
              <div className="text-xs">Retention Rate</div>
            </div>
            <div className="text-center p-3 border border-black">
              <div className="text-xl font-bold">
                ${reportData.report.metrics.avgOrderValue}
              </div>
              <div className="text-xs">Avg Order Value</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Assessment */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border-2 border-black p-4 bg-green-50">
          <h4 className="font-bold text-green-800 mb-3">✅ ACHIEVEMENTS</h4>
          <div className="space-y-1 text-sm">
            {reportData.report.goals.achievements.map((achievement, index) => (
              <div key={index}>{achievement}</div>
            ))}
          </div>
        </div>

        <div className="border-2 border-black p-4 bg-yellow-50">
          <h4 className="font-bold text-yellow-800 mb-3">⚠️ CHALLENGES</h4>
          <div className="space-y-1 text-sm">
            {reportData.report.goals.challenges.map((challenge, index) => (
              <div key={index}>{challenge}</div>
            ))}
          </div>
        </div>

        <div className="border-2 border-black p-4 bg-blue-50">
          <h4 className="font-bold text-blue-800 mb-3">🎯 NEXT MONTH PLANS</h4>
          <div className="space-y-1 text-sm">
            {reportData.report.goals.nextMonthPlans.map((plan, index) => (
              <div key={index}>{plan}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderFinancialsTab = () => (
    <div className="space-y-6">
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
          DETAILED FINANCIAL BREAKDOWN
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Revenue Breakdown */}
          <div className="border border-black p-4">
            <h4 className="font-bold mb-3">REVENUE ANALYSIS</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Product Sales</span>
                <span className="font-bold">$11,200</span>
              </div>
              <div className="flex justify-between">
                <span>Wholesale Orders</span>
                <span className="font-bold">$1,000</span>
              </div>
              <div className="flex justify-between">
                <span>Direct Consumer</span>
                <span className="font-bold">$300</span>
              </div>
              <div className="border-t border-black pt-2 flex justify-between font-bold">
                <span>Total Revenue</span>
                <span>${reportData.report.financials.revenue.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Expense Breakdown */}
          <div className="border border-black p-4">
            <h4 className="font-bold mb-3">EXPENSE BREAKDOWN</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Materials & Seeds</span>
                <span className="font-bold">$3,200</span>
              </div>
              <div className="flex justify-between">
                <span>Labor Costs</span>
                <span className="font-bold">$2,400</span>
              </div>
              <div className="flex justify-between">
                <span>Utilities</span>
                <span className="font-bold">$1,800</span>
              </div>
              <div className="flex justify-between">
                <span>Equipment & Maintenance</span>
                <span className="font-bold">$800</span>
              </div>
              <div className="border-t border-black pt-2 flex justify-between font-bold">
                <span>Total Expenses</span>
                <span>${reportData.report.financials.expenses.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profit Distribution */}
        <div className="border-t-2 border-black mt-6 pt-4">
          <h4 className="font-bold mb-3">PROFIT DISTRIBUTION CALCULATION</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-black p-4 text-center">
              <div className="text-sm font-bold mb-1">GROSS PROFIT</div>
              <div className="text-2xl font-bold text-green-600">
                ${reportData.report.financials.netProfit.toLocaleString()}
              </div>
              <div className="text-xs text-gray-600">After all expenses</div>
            </div>
            <div className="border border-black p-4 text-center">
              <div className="text-sm font-bold mb-1">INVESTOR SHARE</div>
              <div className="text-2xl font-bold text-blue-600">$3,010</div>
              <div className="text-xs text-gray-600">70% of net profit</div>
            </div>
            <div className="border border-black p-4 text-center">
              <div className="text-sm font-bold mb-1">MY SHARE</div>
              <div className="text-2xl font-bold text-purple-600">$67</div>
              <div className="text-xs text-gray-600">
                Based on {reportData.voting.myInvestment.nftCount} NFTs
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVotingTab = () => (
    <div className="space-y-6">
      {/* Current Voting Status */}
      <div className="border-2 border-black p-6 bg-gray-50">
        <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
          COMMUNITY VOTING STATUS
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 border border-black bg-white">
            <div className="text-2xl font-bold text-green-600">
              {reportData.voting.currentVotes.approve}
            </div>
            <div className="text-sm">APPROVE</div>
          </div>
          <div className="text-center p-4 border border-black bg-white">
            <div className="text-2xl font-bold text-red-600">
              {reportData.voting.currentVotes.reject}
            </div>
            <div className="text-sm">REJECT</div>
          </div>
          <div className="text-center p-4 border border-black bg-white">
            <div className="text-2xl font-bold text-yellow-600">
              {reportData.voting.currentVotes.pending}
            </div>
            <div className="text-sm">PENDING</div>
          </div>
          <div className="text-center p-4 border border-black bg-white">
            <div className="text-2xl font-bold">
              {calculateApprovalRate()}%
            </div>
            <div className="text-sm">APPROVAL RATE</div>
          </div>
        </div>

        {/* Voting Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Voting Progress</span>
            <span>{reportData.voting.totalVoters - reportData.voting.currentVotes.pending}/{reportData.voting.totalVoters} voted</span>
          </div>
          <div className="border border-black h-4">
            <div 
              className="bg-blue-500 h-full" 
              style={{ width: `${((reportData.voting.totalVoters - reportData.voting.currentVotes.pending) / reportData.voting.totalVoters * 100)}%` }}
            ></div>
          </div>
        </div>

        <div className="text-sm text-center">
          <span className={calculateApprovalRate() >= reportData.voting.requiredApproval ? 'text-green-600' : 'text-red-600'}>
            {calculateApprovalRate() >= reportData.voting.requiredApproval ? '✅' : '❌'} 
            {reportData.voting.requiredApproval}% approval required for profit distribution
          </span>
        </div>
      </div>

      {/* My Voting Power */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-purple-600 text-white p-2">
          MY VOTING DETAILS
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-black p-4 text-center">
            <div className="text-sm font-bold mb-1">MY NFTs</div>
            <div className="text-2xl font-bold">{reportData.voting.myInvestment.nftCount}</div>
            <div className="text-xs text-gray-600">Investment units</div>
          </div>
          <div className="border border-black p-4 text-center">
            <div className="text-sm font-bold mb-1">VOTING POWER</div>
            <div className="text-2xl font-bold text-purple-600">
              {reportData.voting.myInvestment.votingPower}
            </div>
            <div className="text-xs text-gray-600">Vote weight</div>
          </div>
          <div className="border border-black p-4 text-center">
            <div className="text-sm font-bold mb-1">POTENTIAL RETURN</div>
            <div className="text-2xl font-bold text-green-600">$67</div>
            <div className="text-xs text-gray-600">If approved</div>
          </div>
        </div>
      </div>

      {/* Voting Guidelines */}
      <div className="border-2 border-black p-6 bg-blue-50">
        <h3 className="text-lg font-bold mb-3">📋 VOTING GUIDELINES</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <div className="font-bold mb-2 text-green-800">APPROVE IF:</div>
            <ul className="space-y-1 text-green-700">
              <li>• Revenue targets are met or exceeded</li>
              <li>• Expense management is within budget</li>
              <li>• Business growth metrics are positive</li>
              <li>• Reporting is transparent and complete</li>
              <li>• Challenges have clear mitigation plans</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2 text-red-800">REJECT IF:</div>
            <ul className="space-y-1 text-red-700">
              <li>• Significant shortfall in revenue without explanation</li>
              <li>• Budget overspend with no justification</li>
              <li>• Declining business metrics</li>
              <li>• Incomplete or misleading information</li>
              <li>• No clear plan to address challenges</li>
            </ul>
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
              ← Back to Dashboard
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm">Vote on Report</div>
            <div className="text-sm border border-red-500 text-red-600 px-3 py-1">
              ⏰ Due: {reportData.voting.deadline}
            </div>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <div className="border-b border-black bg-yellow-50 p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">
            📊 MONTHLY PROGRESS REPORT VOTING
          </h1>
          <div className="text-sm text-gray-600">
            Review the report and cast your vote to approve or reject profit sharing distribution
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto flex">
          {[
            { id: "summary", label: "EXECUTIVE SUMMARY", icon: "📋" },
            { id: "financials", label: "FINANCIAL DETAILS", icon: "💰" },
            { id: "voting", label: "VOTING STATUS", icon: "🗳️" },
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
        {activeTab === "summary" && renderSummaryTab()}
        {activeTab === "financials" && renderFinancialsTab()}
        {activeTab === "voting" && renderVotingTab()}
      </div>

      {/* Voting Panel - Sticky Bottom */}
      <div className="border-t-2 border-black bg-white p-6 sticky bottom-0 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="border-2 border-black p-4">
            <h3 className="text-xl font-bold mb-4 text-center">CAST YOUR VOTE</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Vote Options */}
              <div className="md:col-span-2">
                <div className="flex gap-4 mb-4">
                  <button
                    onClick={() => setVoteChoice('approve')}
                    className={`flex-1 p-4 border-2 font-bold ${
                      voteChoice === 'approve'
                        ? 'bg-green-600 text-white border-green-600'
                        : 'border-green-600 text-green-600 hover:bg-green-50'
                    }`}
                  >
                    ✅ APPROVE REPORT
                    <div className="text-sm font-normal mt-1">
                      Distribute ${reportData.report.financials.netProfit.toLocaleString()} profit sharing
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setVoteChoice('reject')}
                    className={`flex-1 p-4 border-2 font-bold ${
                      voteChoice === 'reject'
                        ? 'bg-red-600 text-white border-red-600'
                        : 'border-red-600 text-red-600 hover:bg-red-50'
                    }`}
                  >
                    ❌ REJECT REPORT
                    <div className="text-sm font-normal mt-1">
                      Hold profit sharing until issues resolved
                    </div>
                  </button>
                </div>

                {/* Comment Box */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Comments (Optional)
                  </label>
                  <textarea
                    className="w-full border-2 border-black p-2 text-sm"
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Provide feedback or reasoning for your vote..."
                  />
                </div>
              </div>

              {/* Vote Summary */}
              <div className="border border-black p-4">
                <div className="text-sm font-bold mb-2">YOUR VOTE IMPACT</div>
                <div className="space-y-2 text-sm">
                  <div>Voting Power: {reportData.voting.myInvestment.votingPower}</div>
                  <div>Investment: ${reportData.voting.myInvestment.investmentValue}</div>
                  <div>Potential Return: $67</div>
                  {voteChoice && (
                    <div className={`font-bold ${voteChoice === 'approve' ? 'text-green-600' : 'text-red-600'}`}>
                      Selected: {voteChoice.toUpperCase()}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                onClick={handleVoteSubmit}
                disabled={!voteChoice}
                className={`px-8 py-3 text-lg font-bold ${
                  voteChoice
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                SUBMIT VOTE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white border-4 border-black p-6 max-w-md mx-4">
            <h3 className="text-xl font-bold mb-4">CONFIRM YOUR VOTE</h3>
            <div className="space-y-3 mb-6">
              <div>
                <span className="font-bold">Startup:</span> {reportData.startup.name}
              </div>
              <div>
                <span className="font-bold">Report:</span> {reportData.report.month}
              </div>
              <div>
                <span className="font-bold">Your Vote:</span> 
                <span className={`ml-1 font-bold ${voteChoice === 'approve' ? 'text-green-600' : 'text-red-600'}`}>
                  {voteChoice?.toUpperCase()}
                </span>
              </div>
              <div>
                <span className="font-bold">Voting Power:</span> {reportData.voting.myInvestment.votingPower}
              </div>
              {comment && (
                <div>
                  <span className="font-bold">Comment:</span>
                  <div className="text-sm bg-gray-100 p-2 border border-black">
                    {comment}
                  </div>
                </div>
              )}
            </div>
            
            <div className="text-sm bg-yellow-50 border border-yellow-500 p-3 mb-4">
              ⚠️ <strong>Warning:</strong> Your vote cannot be changed once submitted.
            </div>

            <div className="flex gap-3">
              <button
                onClick={confirmVote}
                className="flex-1 bg-black text-white py-2 font-bold hover:bg-gray-800"
              >
                CONFIRM VOTE
              </button>
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 border border-black py-2 font-bold hover:bg-gray-100"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t-2 border-black py-4 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
          <div>© 2024 Plantify. Built on Internet Computer Protocol.</div>
        </div>
      </footer>
    </div>
  );
};

export default PlantifyVoteOnReport;