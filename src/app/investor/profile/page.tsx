"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const InvestorProfile = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("personal");
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingInvestment, setIsEditingInvestment] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string}>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResult, setQuizResult] = useState<string>("");
  const [showWithdrawal, setShowWithdrawal] = useState(false);
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [withdrawalHistory, setWithdrawalHistory] = useState([
    { id: 1, amount: 500, address: "0x742d35Cc6634C0532925a3b8D", date: "2024-01-15", status: "Completed" },
    { id: 2, amount: 200, address: "0x742d35Cc6634C0532925a3b8D", date: "2024-01-10", status: "Completed" }
  ]);

  // Risk profile options
  const riskProfiles = [
    {
      id: "conservative",
      name: "Conservative",
      description: "Low risk, stable returns. Focus on established startups with proven track records.",
      characteristics: ["Low volatility", "Steady returns", "Capital preservation", "Established companies"]
    },
    {
      id: "moderate", 
      name: "Moderate",
      description: "Balanced approach with moderate risk and growth potential.",
      characteristics: ["Balanced risk/reward", "Diversified portfolio", "Growth potential", "Some volatility"]
    },
    {
      id: "aggressive",
      name: "Aggressive", 
      description: "High risk, high reward. Focus on early-stage startups with high growth potential.",
      characteristics: ["High volatility", "High growth potential", "Early-stage focus", "Higher risk tolerance"]
    }
  ];

  // Risk Assessment Quiz Questions
  const quizQuestions = [
    {
      id: 1,
      question: "How would you describe your investment experience?",
      options: [
        { value: "conservative", text: "Beginner - I prefer safe, low-risk investments", score: 1 },
        { value: "moderate", text: "Intermediate - I'm comfortable with some risk for better returns", score: 2 },
        { value: "aggressive", text: "Experienced - I actively seek high-growth opportunities", score: 3 }
      ]
    },
    {
      id: 2,
      question: "What is your primary investment goal?",
      options: [
        { value: "conservative", text: "Capital preservation and steady income", score: 1 },
        { value: "moderate", text: "Balanced growth with some income", score: 2 },
        { value: "aggressive", text: "Maximum capital appreciation", score: 3 }
      ]
    },
    {
      id: 3,
      question: "How would you react if your investment lost 20% in one month?",
      options: [
        { value: "conservative", text: "Sell immediately to prevent further losses", score: 1 },
        { value: "moderate", text: "Hold and wait for recovery", score: 2 },
        { value: "aggressive", text: "Buy more while prices are low", score: 3 }
      ]
    },
    {
      id: 4,
      question: "What is your investment time horizon?",
      options: [
        { value: "conservative", text: "1-3 years", score: 1 },
        { value: "moderate", text: "3-7 years", score: 2 },
        { value: "aggressive", text: "7+ years", score: 3 }
      ]
    },
    {
      id: 5,
      question: "How much of your total assets are you willing to invest in startups?",
      options: [
        { value: "conservative", text: "Less than 10%", score: 1 },
        { value: "moderate", text: "10-25%", score: 2 },
        { value: "aggressive", text: "More than 25%", score: 3 }
      ]
    },
    {
      id: 6,
      question: "What type of startup investments interest you most?",
      options: [
        { value: "conservative", text: "Established companies with proven track records", score: 1 },
        { value: "moderate", text: "Growing companies with some market validation", score: 2 },
        { value: "aggressive", text: "Early-stage startups with high growth potential", score: 3 }
      ]
    }
  ];

  // Mock investor data dengan state management
  const [investmentData, setInvestmentData] = useState({
    riskProfile: "moderate",
    investmentGoals: ["Portfolio Diversification", "Sustainable Returns", "Support Local Startups"],
    preferredSectors: ["Agriculture", "Technology", "Food & Beverage", "Services"],
    investmentHorizon: "5-10 years",
    monthlyInvestmentBudget: 1000,
    totalInvested: 2450,
    totalReturns: 187,
    activeInvestments: 12,
    portfolioValue: 2637,
    averageROI: 7.6
  });

  // ICP Balance and Wallet Data
  const [icpBalance, setIcpBalance] = useState(1250.75);
  const [availableBalance, setAvailableBalance] = useState(850.25);

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
    
    investment: investmentData,

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

  // Functions to handle investment data changes
  const handleRiskProfileChange = (newRiskProfile: string) => {
    setInvestmentData(prev => ({
      ...prev,
      riskProfile: newRiskProfile
    }));
  };

  const handleInvestmentGoalChange = (index: number, newGoal: string) => {
    setInvestmentData(prev => ({
      ...prev,
      investmentGoals: prev.investmentGoals.map((goal, i) => i === index ? newGoal : goal)
    }));
  };

  const handleMonthlyBudgetChange = (newBudget: number) => {
    setInvestmentData(prev => ({
      ...prev,
      monthlyInvestmentBudget: newBudget
    }));
  };

  const handleInvestmentHorizonChange = (newHorizon: string) => {
    setInvestmentData(prev => ({
      ...prev,
      investmentHorizon: newHorizon
    }));
  };

  // Quiz Functions
  const handleQuizAnswer = (questionId: number, answer: string) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateQuizResult();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateQuizResult = () => {
    let totalScore = 0;
    let answerCount = 0;

    Object.values(quizAnswers).forEach(answer => {
      const question = quizQuestions.find(q => q.options.some(opt => opt.value === answer));
      if (question) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          totalScore += option.score;
          answerCount++;
        }
      }
    });

    const averageScore = totalScore / answerCount;
    let result = "moderate";

    if (averageScore <= 1.5) {
      result = "conservative";
    } else if (averageScore >= 2.5) {
      result = "aggressive";
    }

    setQuizResult(result);
    setQuizCompleted(true);
    setInvestmentData(prev => ({
      ...prev,
      riskProfile: result
    }));
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setCurrentQuestion(0);
    setQuizCompleted(false);
    setQuizResult("");
    setShowQuiz(false);
  };

  const applyQuizResult = () => {
    setInvestmentData(prev => ({
      ...prev,
      riskProfile: quizResult
    }));
    setShowQuiz(false);
    setQuizCompleted(false);
  };

  // Withdrawal Functions
  const handleWithdrawal = () => {
    const amount = parseFloat(withdrawalAmount);
    if (amount > 0 && amount <= availableBalance && walletAddress.trim()) {
      // Simulate withdrawal processing
      const newWithdrawal = {
        id: withdrawalHistory.length + 1,
        amount: amount,
        address: walletAddress,
        date: new Date().toISOString().split('T')[0],
        status: "Processing"
      };
      
      setWithdrawalHistory(prev => [newWithdrawal, ...prev]);
      setAvailableBalance(prev => prev - amount);
      setWithdrawalAmount("");
      setWalletAddress("");
      setShowWithdrawal(false);
      
      // Simulate completion after 2 seconds
      setTimeout(() => {
        setWithdrawalHistory(prev => 
          prev.map(w => w.id === newWithdrawal.id ? { ...w, status: "Completed" } : w)
        );
      }, 2000);
    }
  };

  const validateWalletAddress = (address: string) => {
    // Basic validation for different wallet formats
    const patterns = [
      /^0x[a-fA-F0-9]{40}$/, // Ethereum
      /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/, // Bitcoin
      /^[a-zA-Z0-9]{32,44}$/, // ICP Principal ID
    ];
    return patterns.some(pattern => pattern.test(address));
  };

  // Quiz UI Components
  const renderQuiz = () => {
    if (!showQuiz) return null;

    if (quizCompleted) {
      const resultProfile = riskProfiles.find(rp => rp.id === quizResult);
      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white border-4 border-black p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold mb-2">Your Risk Profile Assessment</h2>
              <p className="text-gray-600">Based on your answers, here&apos;s your recommended risk profile:</p>
            </div>

            <div className="border-4 border-orange-500 p-6 mb-6 bg-orange-50">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600 mb-2">{resultProfile?.name}</h3>
                <p className="text-gray-700 mb-4">{resultProfile?.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {resultProfile?.characteristics.map((char, index) => (
                    <span key={index} className="bg-orange-200 text-orange-800 text-sm px-3 py-1 rounded-full">
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <button
                onClick={applyQuizResult}
                className="bg-green-600 text-white px-6 py-3 text-lg font-bold hover:bg-green-700 border-2 border-black"
              >
                ✅ Apply This Risk Profile
              </button>
              <div>
                <button
                  onClick={resetQuiz}
                  className="text-gray-600 hover:text-gray-800 underline"
                >
                  Take Quiz Again
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const currentQ = quizQuestions[currentQuestion];
    const hasAnswer = quizAnswers[currentQ.id];
    const isLastQuestion = currentQuestion === quizQuestions.length - 1;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white border-4 border-black p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Risk Assessment Quiz</h2>
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 h-2 border border-black">
              <div 
                className="bg-blue-500 h-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6">{currentQ.question}</h3>
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <label
                  key={index}
                  className={`block p-4 border-2 cursor-pointer transition-colors ${
                    quizAnswers[currentQ.id] === option.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-black hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQ.id}`}
                    value={option.value}
                    checked={quizAnswers[currentQ.id] === option.value}
                    onChange={() => handleQuizAnswer(currentQ.id, option.value)}
                    className="mr-3"
                  />
                  {option.text}
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="px-4 py-2 border-2 border-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              ← Previous
            </button>
            <button
              onClick={nextQuestion}
              disabled={!hasAnswer}
              className="px-6 py-2 bg-blue-600 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 border-2 border-black"
            >
              {isLastQuestion ? 'Complete Quiz' : 'Next →'}
            </button>
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={() => setShowQuiz(false)}
              className="text-gray-600 hover:text-gray-800 underline text-sm"
            >
              Cancel Quiz
            </button>
          </div>
        </div>
      </div>
    );
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
      {/* Investment Profile Header */}
      <div className="border-2 border-black p-6 bg-green-50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold bg-green-600 text-white p-2">
            💰 INVESTMENT PROFILE
          </h3>
          <div className="flex space-x-2">
            <button 
              onClick={() => setShowQuiz(true)}
              className="bg-orange-600 text-white px-4 py-2 text-sm hover:bg-orange-700"
            >
              🧠 Take Risk Assessment Quiz
            </button>
            <button 
              onClick={() => setIsEditingInvestment(!isEditingInvestment)}
              className="bg-black text-white px-4 py-2 text-sm hover:bg-gray-800"
            >
              {isEditingInvestment ? "💾 Save Changes" : "✏️ Edit Investment Profile"}
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 border border-black bg-white">
            <div className="text-2xl font-bold text-green-600">
              {riskProfiles.find(rp => rp.id === investmentData.riskProfile)?.name || "Moderate"}
            </div>
            <div className="text-xs">Risk Profile</div>
          </div>
          <div className="text-center p-4 border border-black bg-white">
            <div className="text-2xl font-bold text-blue-600">{investmentData.investmentHorizon}</div>
            <div className="text-xs">Investment Horizon</div>
          </div>
          <div className="text-center p-4 border border-black bg-white">
            <div className="text-2xl font-bold text-purple-600">${investmentData.monthlyInvestmentBudget}</div>
            <div className="text-xs">Monthly Budget</div>
          </div>
        </div>
      </div>

      {/* Risk Profile Selection */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-orange-600 text-white p-2">
          ⚖️ RISK PROFILE SETTINGS
        </h3>
        
        <div className="space-y-4">
          {riskProfiles.map((profile) => (
            <div 
              key={profile.id}
              className={`border-2 p-4 cursor-pointer transition-colors ${
                investmentData.riskProfile === profile.id 
                  ? 'border-orange-500 bg-orange-50' 
                  : 'border-black hover:bg-gray-50'
              } ${!isEditingInvestment ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => isEditingInvestment && handleRiskProfileChange(profile.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <input
                      type="radio"
                      name="riskProfile"
                      value={profile.id}
                      checked={investmentData.riskProfile === profile.id}
                      onChange={() => handleRiskProfileChange(profile.id)}
                      disabled={!isEditingInvestment}
                      className="w-4 h-4"
                    />
                    <h4 className="text-lg font-bold">{profile.name}</h4>
                    {investmentData.riskProfile === profile.id && (
                      <span className="bg-orange-500 text-white px-2 py-1 text-xs rounded">CURRENT</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{profile.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.characteristics.map((char, index) => (
                      <span key={index} className="bg-gray-200 text-xs px-2 py-1 rounded">
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Settings */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-blue-600 text-white p-2">
          ⚙️ INVESTMENT SETTINGS
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold mb-2">Monthly Investment Budget ($)</label>
            <input
              type="number"
              value={investmentData.monthlyInvestmentBudget}
              onChange={(e) => handleMonthlyBudgetChange(Number(e.target.value))}
              disabled={!isEditingInvestment}
              className="w-full border-2 border-black p-2 text-sm disabled:bg-gray-100"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold mb-2">Investment Horizon</label>
            <select
              value={investmentData.investmentHorizon}
              onChange={(e) => handleInvestmentHorizonChange(e.target.value)}
              disabled={!isEditingInvestment}
              className="w-full border-2 border-black p-2 text-sm disabled:bg-gray-100"
            >
              <option value="1-3 years">1-3 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="5-10 years">5-10 years</option>
              <option value="10+ years">10+ years</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-bold mb-2">Investment Goals</label>
          <div className="space-y-2">
            {investmentData.investmentGoals.map((goal, index) => (
              <input
                key={index}
                type="text"
                value={goal}
                onChange={(e) => handleInvestmentGoalChange(index, e.target.value)}
                disabled={!isEditingInvestment}
                className="w-full border-2 border-black p-2 text-sm disabled:bg-gray-100"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Investment Statistics */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-purple-600 text-white p-2">
          📊 INVESTMENT STATISTICS
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 border border-black">
            <div className="text-2xl font-bold text-green-600">
              ${investmentData.totalInvested.toLocaleString()}
            </div>
            <div className="text-xs">Total Invested</div>
          </div>
          <div className="text-center p-4 border border-black">
            <div className="text-2xl font-bold text-blue-600">
              ${investmentData.totalReturns.toLocaleString()}
            </div>
            <div className="text-xs">Total Returns</div>
          </div>
          <div className="text-center p-4 border border-black">
            <div className="text-2xl font-bold text-purple-600">
              {investmentData.activeInvestments}
            </div>
            <div className="text-xs">Active Investments</div>
          </div>
          <div className="text-center p-4 border border-black">
            <div className="text-2xl font-bold text-orange-600">
              {investmentData.averageROI}%
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

  const renderWalletTab = () => (
    <div className="space-y-6">
      {/* ICP Balance Overview */}
      <div className="border-2 border-black p-6 bg-purple-50">
        <h3 className="text-xl font-bold mb-4 bg-purple-600 text-white p-2">
          💳 ICP WALLET BALANCE
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 border border-black bg-white">
            <div className="text-2xl font-bold text-purple-600">{icpBalance.toFixed(2)} ICP</div>
            <div className="text-xs">Total Balance</div>
          </div>
          <div className="text-center p-4 border border-black bg-white">
            <div className="text-2xl font-bold text-green-600">{availableBalance.toFixed(2)} ICP</div>
            <div className="text-xs">Available for Withdrawal</div>
          </div>
          <div className="text-center p-4 border border-black bg-white">
            <div className="text-2xl font-bold text-blue-600">{(icpBalance - availableBalance).toFixed(2)} ICP</div>
            <div className="text-xs">Invested in Startups</div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => setShowWithdrawal(true)}
            className="bg-green-600 text-white px-6 py-3 text-lg font-bold hover:bg-green-700 border-2 border-black"
          >
            💸 Withdraw to External Wallet
          </button>
        </div>
      </div>

      {/* Withdrawal History */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-blue-600 text-white p-2">
          📋 WITHDRAWAL HISTORY
        </h3>
        
        <div className="space-y-3">
          {withdrawalHistory.map((withdrawal) => (
            <div key={withdrawal.id} className="border border-black p-4 hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">💸</div>
                  <div>
                    <div className="font-bold">{withdrawal.amount} ICP</div>
                    <div className="text-sm text-gray-600">
                      To: {withdrawal.address.substring(0, 10)}...{withdrawal.address.substring(withdrawal.address.length - 6)}
                    </div>
                    <div className="text-sm text-gray-500">{withdrawal.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    withdrawal.status === "Completed" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {withdrawal.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wallet Information */}
      <div className="border-2 border-black p-6">
        <h3 className="text-xl font-bold mb-4 bg-orange-600 text-white p-2">
          🔗 WALLET INFORMATION
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-2">Supported Wallet Types</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-blue-600 mr-2">🔷</span>
                <span className="text-sm">Ethereum (0x...)</span>
              </div>
              <div className="flex items-center">
                <span className="text-orange-600 mr-2">🟠</span>
                <span className="text-sm">Bitcoin (1... or 3...)</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-600 mr-2">🟣</span>
                <span className="text-sm">ICP Principal ID</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-2">Withdrawal Details</h4>
            <div className="space-y-2 text-sm">
              <div>• Minimum withdrawal: 10 ICP</div>
              <div>• Processing time: 1-3 business days</div>
              <div>• Network fees: 0.1 ICP</div>
              <div>• Daily limit: 1000 ICP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Withdrawal Modal
  const renderWithdrawalModal = () => {
    if (!showWithdrawal) return null;

    const amount = parseFloat(withdrawalAmount);
    const isValidAmount = amount > 0 && amount <= availableBalance;
    const isValidAddress = walletAddress.trim() && validateWalletAddress(walletAddress);
    const canWithdraw = isValidAmount && isValidAddress;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white border-4 border-black p-8 max-w-lg w-full mx-4">
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">💸</div>
            <h2 className="text-2xl font-bold mb-2">Withdraw ICP to External Wallet</h2>
            <p className="text-gray-600">Transfer your ICP tokens to an external wallet</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Withdrawal Amount (ICP)</label>
              <input
                type="number"
                value={withdrawalAmount}
                onChange={(e) => setWithdrawalAmount(e.target.value)}
                placeholder="Enter amount to withdraw"
                className="w-full border-2 border-black p-3 text-sm"
                min="10"
                max={availableBalance}
              />
              <div className="text-xs text-gray-600 mt-1">
                Available: {availableBalance.toFixed(2)} ICP
              </div>
              {withdrawalAmount && !isValidAmount && (
                <div className="text-xs text-red-600 mt-1">
                  {amount <= 0 ? "Amount must be greater than 0" : "Insufficient balance"}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Wallet Address</label>
              <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="Enter wallet address (0x..., 1..., or ICP Principal ID)"
                className="w-full border-2 border-black p-3 text-sm"
              />
              {walletAddress && !isValidAddress && (
                <div className="text-xs text-red-600 mt-1">
                  Invalid wallet address format
                </div>
              )}
            </div>

            {withdrawalAmount && walletAddress && (
              <div className="border-2 border-gray-300 p-4 bg-gray-50">
                <h4 className="font-bold mb-2">Withdrawal Summary</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span>{withdrawalAmount} ICP</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Network Fee:</span>
                    <span>0.1 ICP</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>{(parseFloat(withdrawalAmount) + 0.1).toFixed(1)} ICP</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex space-x-3 mt-6">
            <button
              onClick={() => setShowWithdrawal(false)}
              className="flex-1 px-4 py-2 border-2 border-black hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleWithdrawal}
              disabled={!canWithdraw}
              className="flex-1 px-4 py-2 bg-green-600 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700 border-2 border-black"
            >
              Confirm Withdrawal
            </button>
          </div>
        </div>
      </div>
    );
  };

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
            { id: "wallet", label: "WALLET", icon: "💳" },
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
        {activeTab === "wallet" && renderWalletTab()}
      </div>

      {/* Quiz Modal */}
      {renderQuiz()}

      {/* Withdrawal Modal */}
      {renderWithdrawalModal()}

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
