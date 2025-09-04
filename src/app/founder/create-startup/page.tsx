"use client";

import React, { useState, useEffect } from "react";
import FounderNavbar from "@/components/founder/FounderNavbar";
import FounderFooter from "@/components/founder/FounderFooter";
import { useDemoMode } from "@/context/DemoModeContext";

const PlantifyCreateStartup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [conversionRate, setConversionRate] = useState(12.50);
  const [countdown, setCountdown] = useState(60);
  const [isConverting, setIsConverting] = useState(false);
  const { isDemoMode } = useDemoMode();

  // Countdown timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isConverting && countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown => countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      // Reset countdown and update rate
      setCountdown(60);
      setConversionRate(prev => prev + (Math.random() - 0.5) * 0.5);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isConverting, countdown]);

  const [formData, setFormData] = useState({
    // Basic Information
    startupName: "",
    sector: "",
    foundedYear: "",
    description: "",
    website: "",
    location: "",
    companyType: "",

    // Business Details
    problemStatement: "",
    solution: "",
    targetMarket: "",
    competitiveAdvantage: "",
    marketingStrategy: "",
    operationalProcess: "",

    // Team Information
    founderBackground: "",
    teamMembers: [
      {
        id: 1,
        name: "",
        role: "",
        background: "",
        photo: null,
        linkedin: "",
        email: "",
        isFounder: true
      }
    ],
    advisors: "",

    // Financial Projections
    fundingGoal: "",
    nftPrice: "",
    monthlyProfitSharing: "",
    revenueModel: "",
    monthlyRevenue: "",
    monthlyExpenses: "",
    breakEvenMonth: "",
    useOfFunds: "",

    // Collateral
    collateralSource: "",
    collateralAmount: "",

    // Documents
    businessPlan: null,
    financialProjections: null,
    legalDocuments: null,
  });

  // Auto-calculation effect for NFT pricing
  useEffect(() => {
    if (formData.fundingGoal && formData.monthlyProfitSharing) {
      const fundingGoal = Number(formData.fundingGoal);
      const monthlyProfit = Number(formData.monthlyProfitSharing);
      
      // Calculate optimal NFT price based on funding goal
      // Target 50-500 NFTs for good distribution
      let optimalNFTCount = 100; // Default
      if (fundingGoal <= 10000) optimalNFTCount = 50;
      else if (fundingGoal <= 50000) optimalNFTCount = 100;
      else if (fundingGoal <= 100000) optimalNFTCount = 200;
      else optimalNFTCount = 500;
      
      const calculatedNFTPrice = Math.round(fundingGoal / optimalNFTCount);
      
      setFormData(prev => ({
        ...prev,
        nftPrice: calculatedNFTPrice.toString()
      }));
    }
  }, [formData.fundingGoal, formData.monthlyProfitSharing]);

  // Default values effect
  useEffect(() => {
    if (isDemoMode) {
      setFormData({
        // Basic Information
        startupName: "EcoTech Solutions",
        sector: "Technology & Digital",
        foundedYear: "2023",
        description: "Revolutionary green technology startup focused on sustainable energy solutions for smart cities.",
        website: "https://ecotechsolutions.com",
        location: "San Francisco, USA",
        companyType: "LLC",

        // Business Details
        problemStatement: "Traditional energy systems are inefficient and contribute to environmental degradation.",
        solution: "AI-powered smart grid technology that optimizes energy distribution and reduces waste by 40%.",
        targetMarket: "Smart cities, commercial buildings, and residential communities seeking sustainable energy solutions.",
        competitiveAdvantage: "Proprietary AI algorithms and partnerships with major utility companies.",
        marketingStrategy: "B2B partnerships, trade shows, and digital marketing targeting sustainability officers.",
        operationalProcess: "R&D, prototype development, pilot programs, and scalable deployment.",

        // Team Information
        founderBackground: "Former Tesla engineer with 8 years experience in renewable energy systems and AI.",
        teamMembers: [
          {
            id: 1,
            name: "Sarah Johnson",
            role: "CEO & Founder",
            background: "Former Tesla engineer with 8 years experience in renewable energy systems and AI.",
            photo: null,
            linkedin: "https://linkedin.com/in/sarahjohnson",
            email: "sarah@ecotechsolutions.com",
            isFounder: true
          },
          {
            id: 2,
            name: "Michael Chen",
            role: "CTO",
            background: "Ex-Google AI researcher specializing in machine learning for energy optimization.",
            photo: null,
            linkedin: "https://linkedin.com/in/michaelchen",
            email: "michael@ecotechsolutions.com",
            isFounder: false
          }
        ],
        advisors: "Dr. Lisa Wang (Former VP at Tesla), John Smith (Partner at GreenTech Ventures)",

        // Financial Projections
        fundingGoal: "50000",
        nftPrice: "500",
        monthlyProfitSharing: "5",
        revenueModel: "SaaS subscription model with tiered pricing based on energy savings achieved.",
        monthlyRevenue: "15000",
        monthlyExpenses: "10000",
        breakEvenMonth: "8",
        useOfFunds: "40% R&D, 30% marketing, 20% operations, 10% working capital",

        // Collateral
        collateralSource: "ckUSDC",
        collateralAmount: "3000",

        // Documents
        businessPlan: null,
        financialProjections: null,
        legalDocuments: null,
      });
    }
  }, [isDemoMode]);

  const steps = [
    { number: 1, title: "Basic Information", icon: "📝" },
    { number: 2, title: "Business Details", icon: "💡" },
    { number: 3, title: "Team & Background", icon: "👥" },
    { number: 4, title: "Financial Projections", icon: "📊" },
    { number: 5, title: "Collateral Setup", icon: "🔒" },
    { number: 6, title: "Documentation", icon: "📄" },
    { number: 7, title: "Review & Submit", icon: "✅" },
  ];

  const sectors = [
    "Agriculture & Farming",
    "Livestock & Aquaculture", 
    "Food & Beverage",
    "Retail & E-commerce",
    "Services & Consulting",
    "Technology & Digital",
    "Manufacturing & Production",
    "Healthcare & Biotechnology",
    "Education & Training",
    "Real Estate & Construction",
    "Transportation & Logistics",
    "Energy & Utilities",
    "Media & Entertainment",
    "Financial Services",
    "Other"
  ];

  const handleInputChange = (field: string, value: string | number | boolean | File | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addTeamMember = () => {
    const newMember = {
      id: Date.now(),
      name: "",
      role: "",
      background: "",
      photo: null,
      linkedin: "",
      email: "",
      isFounder: false
    };
    setFormData(prev => ({
      ...prev,
      teamMembers: [...prev.teamMembers, newMember]
    }));
  };

  const removeTeamMember = (id: number) => {
    setFormData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.filter(member => member.id !== id)
    }));
  };

  const updateTeamMember = (id: number, field: string, value: string | number | boolean | File | null) => {
    setFormData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.map(member =>
        member.id === id ? { ...member, [field]: value } : member
      )
    }));
  };

  const nextStep = () => {
    if (currentStep < 7) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    if (isDemoMode) return true; // Allow proceeding with default values
    
    switch (currentStep) {
      case 1:
        return formData.startupName && formData.sector && formData.description;
      case 2:
        return formData.problemStatement && formData.solution;
      case 3:
        return formData.teamMembers.length > 0 && formData.teamMembers[0].name;
      case 4:
        return formData.fundingGoal && formData.monthlyProfitSharing;
      case 5:
        return formData.collateralSource && formData.collateralAmount;
      case 6:
        return formData.businessPlan && formData.financialProjections;
      default:
        return true;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
                BASIC STARTUP INFORMATION
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block font-bold mb-2">Startup Name *</label>
                  <input
                    type="text"
                    className="w-full border-2 border-black p-2"
                    value={formData.startupName}
                    onChange={(e) =>
                      handleInputChange("startupName", e.target.value)
                    }
                    placeholder="Enter your startup name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-2">
                      Business Sector *
                    </label>
                    <select
                      className="w-full border-2 border-black p-2"
                      value={formData.sector}
                      onChange={(e) =>
                        handleInputChange("sector", e.target.value)
                      }
                    >
                      <option value="">Select sector</option>
                      {sectors.map((sector) => (
                        <option key={sector} value={sector}>
                          {sector}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold mb-2">Founded Year</label>
                    <input
                      type="number"
                      className="w-full border-2 border-black p-2"
                      value={formData.foundedYear}
                      onChange={(e) =>
                        handleInputChange("foundedYear", e.target.value)
                      }
                      placeholder="2024"
                      min="2000"
                      max="2025"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-2">Company Type</label>
                    <select
                      className="w-full border-2 border-black p-2"
                      value={formData.companyType}
                      onChange={(e) =>
                        handleInputChange("companyType", e.target.value)
                      }
                    >
                      <option value="">Select company type</option>
                      <option value="LLC">LLC (Limited Liability Company)</option>
                      <option value="Corp">Corporation</option>
                      <option value="Ltd">Limited Company</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Sole Proprietorship">Sole Proprietorship</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold mb-2">Location</label>
                    <input
                      type="text"
                      className="w-full border-2 border-black p-2"
                      value={formData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-2">
                    Business Description *
                  </label>
                  <textarea
                    className="w-full border-2 border-black p-2 h-24"
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    placeholder="Describe your business in 2-3 sentences"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Website URL</label>
                  <input
                    type="url"
                    className="w-full border-2 border-black p-2"
                    value={formData.website}
                    onChange={(e) =>
                      handleInputChange("website", e.target.value)
                    }
                    placeholder="https://your-startup.com (optional)"
                  />
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-4 bg-blue-50">
              <div className="font-bold mb-2">💡 STARTUP REQUIREMENTS</div>
              <div className="text-sm space-y-1">
                <div>• Legal business entity (LLC, Corp, Ltd, etc.) required</div>
                <div>• Minimum 6 months operational history or proof of concept</div>
                <div>• Recurring revenue potential</div>
                <div>• Ready for 36-month profit sharing commitment</div>
                <div>• Sufficient ckUSDC collateral (12 months worth)</div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
                BUSINESS MODEL & STRATEGY
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block font-bold mb-2">
                    Problem Statement *
                  </label>
                  <textarea
                    className="w-full border-2 border-black p-2 h-20"
                    value={formData.problemStatement}
                    onChange={(e) =>
                      handleInputChange("problemStatement", e.target.value)
                    }
                    placeholder="What problem does your startup solve?"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Solution *</label>
                  <textarea
                    className="w-full border-2 border-black p-2 h-20"
                    value={formData.solution}
                    onChange={(e) =>
                      handleInputChange("solution", e.target.value)
                    }
                    placeholder="How does your product/service solve this problem?"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Target Market</label>
                  <textarea
                    className="w-full border-2 border-black p-2 h-16"
                    value={formData.targetMarket}
                    onChange={(e) =>
                      handleInputChange("targetMarket", e.target.value)
                    }
                    placeholder="Who are your target customers?"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">
                    Competitive Advantage
                  </label>
                  <textarea
                    className="w-full border-2 border-black p-2 h-16"
                    value={formData.competitiveAdvantage}
                    onChange={(e) =>
                      handleInputChange("competitiveAdvantage", e.target.value)
                    }
                    placeholder="What makes your startup unique?"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">
                    Marketing Strategy
                  </label>
                  <textarea
                    className="w-full border-2 border-black p-2 h-16"
                    value={formData.marketingStrategy}
                    onChange={(e) =>
                      handleInputChange("marketingStrategy", e.target.value)
                    }
                    placeholder="How will you reach and acquire customers?"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">
                    Operational Process
                  </label>
                  <textarea
                    className="w-full border-2 border-black p-2 h-16"
                    value={formData.operationalProcess}
                    onChange={(e) =>
                      handleInputChange("operationalProcess", e.target.value)
                    }
                    placeholder="Describe your key operational processes"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-2 border-black p-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-bold mb-1">Clear Problem</div>
                  <div className="text-xs">Well-defined market need</div>
                </div>
              </div>
              <div className="border-2 border-black p-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold mb-1">Viable Solution</div>
                  <div className="text-xs">Practical implementation</div>
                </div>
              </div>
              <div className="border-2 border-black p-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">📈</div>
                  <div className="font-bold mb-1">Growth Potential</div>
                  <div className="text-xs">Scalable business model</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="border-2 border-black p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold bg-black text-white p-2">
                  TEAM & FOUNDER BACKGROUND
                </h3>
                <button
                  onClick={addTeamMember}
                  className="px-4 py-2 bg-green-100 border-2 border-black text-sm font-bold hover:bg-green-200"
                >
                  + Add Team Member
                </button>
              </div>

              <div className="space-y-6">
                {formData.teamMembers.map((member, index) => (
                  <div key={member.id} className="border-2 border-gray-300 p-4 bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-lg">
                        {member.isFounder ? "👑 Founder" : `Team Member ${index}`}
                      </h4>
                      {!member.isFounder && (
                        <button
                          onClick={() => removeTeamMember(member.id)}
                          className="px-3 py-1 bg-red-100 border border-red-300 text-red-700 text-sm hover:bg-red-200"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold mb-2">Name *</label>
                        <input
                          type="text"
                          className="w-full border-2 border-black p-2"
                          value={member.name}
                          onChange={(e) => updateTeamMember(member.id, "name", e.target.value)}
                          placeholder="Full name"
                        />
                      </div>

                      <div>
                        <label className="block font-bold mb-2">Role *</label>
                        <input
                          type="text"
                          className="w-full border-2 border-black p-2"
                          value={member.role}
                          onChange={(e) => updateTeamMember(member.id, "role", e.target.value)}
                          placeholder="CEO, CTO, CFO, etc."
                        />
                      </div>

                      <div>
                        <label className="block font-bold mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full border-2 border-black p-2"
                          value={member.email}
                          onChange={(e) => updateTeamMember(member.id, "email", e.target.value)}
                          placeholder="email@company.com"
                        />
                      </div>

                      <div>
                        <label className="block font-bold mb-2">LinkedIn Profile</label>
                        <input
                          type="url"
                          className="w-full border-2 border-black p-2"
                          value={member.linkedin}
                          onChange={(e) => updateTeamMember(member.id, "linkedin", e.target.value)}
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block font-bold mb-2">Professional Background *</label>
                      <textarea
                        className="w-full border-2 border-black p-2 h-20"
                        value={member.background}
                        onChange={(e) => updateTeamMember(member.id, "background", e.target.value)}
                        placeholder="Describe professional experience, education, achievements, and relevant skills"
                      />
                    </div>

                    <div className="mt-4">
                      <label className="block font-bold mb-2">Profile Photo</label>
                      <div className="border-2 border-dashed border-gray-400 p-4 text-center">
                        <div className="text-gray-600 mb-2">
                          Upload Profile Photo (Optional)
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          className="text-sm"
                          onChange={(e) => updateTeamMember(member.id, "photo", e.target.files?.[0] || null)}
                        />
                        <div className="text-xs text-gray-500 mt-2">
                          Max 5MB. JPG, PNG, or GIF format
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div>
                  <label className="block font-bold mb-2">
                    Advisors & Mentors
                  </label>
                  <textarea
                    className="w-full border-2 border-black p-2 h-16"
                    value={formData.advisors}
                    onChange={(e) =>
                      handleInputChange("advisors", e.target.value)
                    }
                    placeholder="List any advisors, mentors, or industry experts supporting your startup"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-2 border-black p-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-bold mb-1">Experience</div>
                  <div className="text-xs">Relevant industry background</div>
                </div>
              </div>
              <div className="border-2 border-black p-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">👥</div>
                  <div className="font-bold mb-1">Team Strength</div>
                  <div className="text-xs">Complementary skills</div>
                </div>
              </div>
              <div className="border-2 border-black p-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🤝</div>
                  <div className="font-bold mb-1">Network</div>
                  <div className="text-xs">Advisors and mentors</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
                FINANCIAL PROJECTIONS & FUNDING
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-2">
                      Funding Goal (ckUSDC) *
                    </label>
                    <input
                      type="number"
                      className="w-full border-2 border-black p-2"
                      value={formData.fundingGoal}
                      onChange={(e) =>
                        handleInputChange("fundingGoal", e.target.value)
                      }
                      placeholder="50000"
                      min="1000"
                    />
                    <div className="text-xs text-gray-600 mt-1">
                      Minimum: $1,000 ckUSDC
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold mb-2">
                      NFT Price (ckUSDC) - Auto Calculated
                    </label>
                    <input
                      type="number"
                      className="w-full border-2 border-black p-2 bg-yellow-50"
                      value={formData.nftPrice}
                      onChange={(e) =>
                        handleInputChange("nftPrice", e.target.value)
                      }
                      placeholder="100"
                      min="50"
                    />
                    <div className="text-xs text-gray-600 mt-1">
                      💡 Auto-calculated based on funding goal. You can adjust manually.
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-2">
                    Monthly Profit Sharing Commitment (ckUSDC per NFT) *
                  </label>
                  <input
                    type="number"
                    className="w-full border-2 border-black p-2"
                    value={formData.monthlyProfitSharing}
                    onChange={(e) =>
                      handleInputChange("monthlyProfitSharing", e.target.value)
                    }
                    placeholder="5"
                    min="1"
                    step="0.1"
                  />
                  <div className="text-xs text-gray-600 mt-1">
                    Amount you commit to pay per NFT monthly
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-2">
                      Expected Monthly Revenue (ckUSDC)
                    </label>
                    <input
                      type="number"
                      className="w-full border-2 border-black p-2"
                      value={formData.monthlyRevenue}
                      onChange={(e) =>
                        handleInputChange("monthlyRevenue", e.target.value)
                      }
                      placeholder="10000"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-2">
                      Expected Monthly Expenses (ckUSDC)
                    </label>
                    <input
                      type="number"
                      className="w-full border-2 border-black p-2"
                      value={formData.monthlyExpenses}
                      onChange={(e) =>
                        handleInputChange("monthlyExpenses", e.target.value)
                      }
                      placeholder="7000"
                      min="0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-2">
                    Break-Even Month
                  </label>
                  <input
                    type="number"
                    className="w-full border-2 border-black p-2"
                    value={formData.breakEvenMonth}
                    onChange={(e) =>
                      handleInputChange("breakEvenMonth", e.target.value)
                    }
                    placeholder="12"
                    min="1"
                    max="36"
                  />
                  <div className="text-xs text-gray-600 mt-1">
                    Month when revenue exceeds expenses
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-2">Revenue Model</label>
                  <textarea
                    className="w-full border-2 border-black p-2 h-16"
                    value={formData.revenueModel}
                    onChange={(e) =>
                      handleInputChange("revenueModel", e.target.value)
                    }
                    placeholder="How will your startup generate revenue?"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">
                    Use of Funds
                  </label>
                  <textarea
                    className="w-full border-2 border-black p-2 h-16"
                    value={formData.useOfFunds}
                    onChange={(e) =>
                      handleInputChange("useOfFunds", e.target.value)
                    }
                    placeholder="How will you use the raised funds? (e.g., 40% marketing, 30% operations, 20% equipment, 10% working capital)"
                  />
                </div>
              </div>
            </div>

            {formData.fundingGoal &&
              formData.nftPrice &&
              formData.monthlyProfitSharing && (
                <div className="border-2 border-black p-4 bg-yellow-50">
                  <div className="font-bold mb-2">
                    📊 CALCULATED PROJECTIONS
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="font-bold">Total NFTs</div>
                      <div>
                        {Math.floor(Number(formData.fundingGoal) / Number(formData.nftPrice))}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Monthly Payout</div>
                      <div>
                        $
                        {Math.floor(Number(formData.fundingGoal) / Number(formData.nftPrice)) *
                          Number(formData.monthlyProfitSharing)}{" "}
                        ckUSDC
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Annual Payout</div>
                      <div>
                        $
                        {Math.floor(Number(formData.fundingGoal) / Number(formData.nftPrice)) *
                          Number(formData.monthlyProfitSharing) *
                          12}{" "}
                        ckUSDC
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">3-Year Total</div>
                      <div>
                        $
                        {Math.floor(Number(formData.fundingGoal) / Number(formData.nftPrice)) *
                          Number(formData.monthlyProfitSharing) *
                          36}{" "}
                        ckUSDC
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
                COLLATERAL SETUP
              </h3>

              <div className="space-y-4">
                <div className="border-2 border-black p-4 bg-red-50">
                  <div className="font-bold mb-2">
                    ⚠️ COLLATERAL REQUIREMENT
                  </div>
                  <div className="text-sm">
                    You must lock ckUSDC collateral equal to 12 months of profit
                    sharing commitment.
                    {formData.monthlyProfitSharing &&
                      formData.fundingGoal &&
                      formData.nftPrice && (
                        <div className="mt-2 font-bold">
                          Required: $
                          {Math.floor(
                            Number(formData.fundingGoal) / Number(formData.nftPrice)
                          ) *
                            Number(formData.monthlyProfitSharing) *
                            12}{" "}
                          ckUSDC
                        </div>
                      )}
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-2">
                    Collateral Payment Method *
                  </label>
                  <select
                    className="w-full border-2 border-black p-2"
                    value={formData.collateralSource}
                    onChange={(e) =>
                      handleInputChange("collateralSource", e.target.value)
                    }
                  >
                    <option value="">Select payment method</option>
                    <option value="ICP">
                      Pay with ICP (Auto-converted to ckUSDC)
                    </option>
                    <option value="ckUSDC">Pay directly with ckUSDC</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold mb-2">
                    Available Amount *
                  </label>
                  <input
                    type="number"
                    className="w-full border-2 border-black p-2"
                    value={formData.collateralAmount}
                    onChange={(e) =>
                      handleInputChange("collateralAmount", e.target.value)
                    }
                    placeholder="Enter amount you can lock"
                    min="1000"
                  />
                  <div className="text-xs text-gray-600 mt-1">
                    {formData.collateralSource === "ICP"
                      ? "ICP amount (will be converted)"
                      : "ckUSDC amount"}
                  </div>
                </div>

                {formData.collateralSource === "ICP" && (
                  <div className="border border-black p-4 bg-blue-50">
                    <div className="font-bold mb-3">💱 REAL-TIME CONVERSION</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-bold mb-1">Current ICP Rate</div>
                        <div className="text-lg font-bold text-green-600">
                          ${conversionRate.toFixed(2)} USD
                        </div>
                        <div className="text-xs text-gray-600">
                          Rate updates every 60 seconds
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-bold mb-1">Countdown Timer</div>
                        <div className={`text-lg font-bold ${countdown <= 10 ? 'text-red-600' : 'text-blue-600'}`}>
                          {countdown}s
                        </div>
                        <div className="text-xs text-gray-600">
                          Rate will refresh automatically
                        </div>
                      </div>
                    </div>
                    {formData.collateralAmount && (
                      <div className="mt-3 p-3 bg-white border border-gray-300">
                        <div className="text-sm font-bold mb-1">Conversion Preview</div>
                        <div className="text-sm">
                          {formData.collateralAmount} ICP = ${(Number(formData.collateralAmount) * conversionRate).toFixed(2)} ckUSDC
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          Network fees: ~0.0001 ICP
                        </div>
                      </div>
                    )}
                    <button
                      onClick={() => setIsConverting(!isConverting)}
                      className={`mt-3 px-4 py-2 text-sm border-2 border-black ${
                        isConverting 
                          ? 'bg-red-100 hover:bg-red-200' 
                          : 'bg-green-100 hover:bg-green-200'
                      }`}
                    >
                      {isConverting ? 'Stop Timer' : 'Start Live Rate'}
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="border-2 border-black p-4 bg-green-50">
              <div className="font-bold mb-2">🔐 COLLATERAL PROTECTION</div>
              <div className="text-sm space-y-1">
                <div>• Locked for exactly 36 months</div>
                <div>• Used only if you miss profit sharing payments</div>
                <div>• Returned in full if all commitments met</div>
                <div>• Transparent blockchain storage</div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
                REQUIRED DOCUMENTATION
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block font-bold mb-2">
                    Business Plan *
                  </label>
                  <div className="border-2 border-dashed border-gray-400 p-4 text-center">
                    <div className="text-gray-600 mb-2">
                      Upload Business Plan (PDF)
                    </div>
                    <input
                      type="file"
                      accept=".pdf"
                      className="text-sm"
                      onChange={(e) =>
                        handleInputChange("businessPlan", e.target.files?.[0] || null)
                      }
                    />
                    <div className="text-xs text-gray-500 mt-2">
                      Max 10MB. Must include: Executive summary, market analysis, 
                      competitive landscape, marketing strategy, operational plan, 
                      team information, and financial projections
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-2">
                    Financial Projections *
                  </label>
                  <div className="border-2 border-dashed border-gray-400 p-4 text-center">
                    <div className="text-gray-600 mb-2">
                      Upload Financial Model (Excel/PDF)
                    </div>
                    <input
                      type="file"
                      accept=".pdf,.xlsx,.xls"
                      className="text-sm"
                      onChange={(e) =>
                        handleInputChange(
                          "financialProjections",
                          e.target.files?.[0] || null
                        )
                      }
                    />
                    <div className="text-xs text-gray-500 mt-2">
                      36-month monthly projections in ckUSDC including: Revenue, 
                      expenses, cash flow, break-even analysis, and profit sharing commitments
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-2">
                    Legal Documents
                  </label>
                  <div className="border-2 border-dashed border-gray-400 p-4 text-center">
                    <div className="text-gray-600 mb-2">
                      Upload Legal Documents (ZIP)
                    </div>
                    <input
                      type="file"
                      accept=".zip,.pdf"
                      className="text-sm"
                      onChange={(e) =>
                        handleInputChange("legalDocuments", e.target.files?.[0] || null)
                      }
                    />
                    <div className="text-xs text-gray-500 mt-2">
                      Articles of incorporation, business license, tax ID, founder ID
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-4 bg-blue-50">
              <div className="font-bold mb-2">📋 DOCUMENT CHECKLIST</div>
              <div className="text-sm space-y-2">
                <div className="flex items-start">
                  <div className="mr-2">✓</div>
                  <div>Comprehensive business plan with market analysis</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2">✓</div>
                  <div>Detailed 36-month financial projections in ckUSDC</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2">✓</div>
                  <div>Legal entity documents (Articles of incorporation, business license)</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2">✓</div>
                  <div>Founder identification and tax documents</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2">✓</div>
                  <div>Proof of operational history or concept validation</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
                REVIEW YOUR SUBMISSION
              </h3>

              <div className="space-y-6">
                <div className="border border-black p-4">
                  <h4 className="font-bold mb-3">STARTUP INFORMATION</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-bold">Name:</div>
                      <div>{formData.startupName || "Not specified"}</div>
                    </div>
                    <div>
                      <div className="font-bold">Sector:</div>
                      <div>{formData.sector || "Not specified"}</div>
                    </div>
                    <div>
                      <div className="font-bold">Company Type:</div>
                      <div>{formData.companyType || "Not specified"}</div>
                    </div>
                    <div>
                      <div className="font-bold">Location:</div>
                      <div>{formData.location || "Not specified"}</div>
                    </div>
                    <div>
                      <div className="font-bold">Founded Year:</div>
                      <div>{formData.foundedYear || "Not specified"}</div>
                    </div>
                    <div>
                      <div className="font-bold">Website:</div>
                      <div>{formData.website || "Not provided"}</div>
                    </div>
                  </div>
                </div>

                <div className="border border-black p-4">
                  <h4 className="font-bold mb-3">BUSINESS MODEL</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <div className="font-bold">Problem Statement:</div>
                      <div className="text-gray-700">{formData.problemStatement || "Not specified"}</div>
                    </div>
                    <div>
                      <div className="font-bold">Solution:</div>
                      <div className="text-gray-700">{formData.solution || "Not specified"}</div>
                    </div>
                    <div>
                      <div className="font-bold">Target Market:</div>
                      <div className="text-gray-700">{formData.targetMarket || "Not specified"}</div>
                    </div>
                    <div>
                      <div className="font-bold">Competitive Advantage:</div>
                      <div className="text-gray-700">{formData.competitiveAdvantage || "Not specified"}</div>
                    </div>
                  </div>
                </div>

                <div className="border border-black p-4">
                  <h4 className="font-bold mb-3">TEAM INFORMATION</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="font-bold mb-2">Team Members ({formData.teamMembers.length}):</div>
                      <div className="space-y-3">
                        {formData.teamMembers.map((member, index) => (
                          <div key={member.id} className="border border-gray-300 p-3 bg-gray-50">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="font-bold text-sm">
                                  {member.isFounder ? "👑 " : ""}{member.name || "Unnamed"}
                                </div>
                                <div className="text-xs text-gray-600">{member.role || "No role specified"}</div>
                                {member.email && (
                                  <div className="text-xs text-blue-600">{member.email}</div>
                                )}
                                {member.linkedin && (
                                  <div className="text-xs text-blue-600">{member.linkedin}</div>
                                )}
                                <div className="text-xs text-gray-700 mt-1">
                                  {member.background || "No background provided"}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Advisors:</div>
                      <div className="text-gray-700">{formData.advisors || "Not specified"}</div>
                    </div>
                  </div>
                </div>

                <div className="border border-black p-4">
                  <h4 className="font-bold mb-3">FINANCIAL PROJECTIONS & COMMITMENT</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-bold mb-2">Funding Details</div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Funding Goal:</span>
                          <span>${formData.fundingGoal || "0"} ckUSDC</span>
                        </div>
                        <div className="flex justify-between">
                          <span>NFT Price:</span>
                          <span>${formData.nftPrice || "0"} ckUSDC</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total NFTs:</span>
                          <span>{formData.fundingGoal && formData.nftPrice ? Math.floor(Number(formData.fundingGoal) / Number(formData.nftPrice)) : "0"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Monthly Revenue:</span>
                          <span>${formData.monthlyRevenue || "0"} ckUSDC</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Monthly Expenses:</span>
                          <span>${formData.monthlyExpenses || "0"} ckUSDC</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Break-Even Month:</span>
                          <span>{formData.breakEvenMonth || "0"}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold mb-2">Profit Sharing Commitment</div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Monthly Per NFT:</span>
                          <span>${formData.monthlyProfitSharing || "0"} ckUSDC</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Monthly:</span>
                          <span>${formData.fundingGoal && formData.nftPrice && formData.monthlyProfitSharing ? Math.floor(Number(formData.fundingGoal) / Number(formData.nftPrice)) * Number(formData.monthlyProfitSharing) : "0"} ckUSDC</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Annual Total:</span>
                          <span>${formData.fundingGoal && formData.nftPrice && formData.monthlyProfitSharing ? Math.floor(Number(formData.fundingGoal) / Number(formData.nftPrice)) * Number(formData.monthlyProfitSharing) * 12 : "0"} ckUSDC</span>
                        </div>
                        <div className="flex justify-between">
                          <span>3-Year Total:</span>
                          <span>${formData.fundingGoal && formData.nftPrice && formData.monthlyProfitSharing ? Math.floor(Number(formData.fundingGoal) / Number(formData.nftPrice)) * Number(formData.monthlyProfitSharing) * 36 : "0"} ckUSDC</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Collateral Required:</span>
                          <span>${formData.fundingGoal && formData.nftPrice && formData.monthlyProfitSharing ? Math.floor(Number(formData.fundingGoal) / Number(formData.nftPrice)) * Number(formData.monthlyProfitSharing) * 12 : "0"} ckUSDC</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Investment Period:</span>
                          <span>36 months</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-black p-4">
                  <h4 className="font-bold mb-3">COLLATERAL SETUP</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Payment Method:</span>
                      <span>{formData.collateralSource || "Not selected"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Available Amount:</span>
                      <span>{formData.collateralAmount || "0"} {formData.collateralSource || ""}</span>
                    </div>
                    {formData.collateralSource === "ICP" && formData.collateralAmount && (
                      <div className="flex justify-between">
                        <span>Converted to ckUSDC:</span>
                        <span>${(Number(formData.collateralAmount) * conversionRate).toFixed(2)} ckUSDC</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Lock Period:</span>
                      <span>36 months</span>
                    </div>
                  </div>
                </div>

                <div className="border border-black p-4">
                  <h4 className="font-bold mb-3">DOCUMENTS STATUS</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <div className="mr-2">
                        {formData.businessPlan ? "✅" : "❌"}
                      </div>
                      <div>Business Plan</div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2">
                        {formData.financialProjections ? "✅" : "❌"}
                      </div>
                      <div>Financial Projections</div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2">
                        {formData.legalDocuments ? "✅" : "❌"}
                      </div>
                      <div>Legal Documents</div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-black p-4 bg-yellow-50">
                  <div className="font-bold mb-2">⚠️ BEFORE SUBMISSION</div>
                  <div className="text-sm space-y-1">
                    <div>• Review all information for accuracy</div>
                    <div>
                      • Ensure you have sufficient ckUSDC/ICP for collateral
                    </div>
                    <div>• Understand 36-month commitment requirement</div>
                    <div>• Platform review may take 5-7 business days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <FounderNavbar />

      {/* Progress Steps */}
      <div className="border-b border-black p-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold">
              CREATE STARTUP LISTING
            </h1>
            <p className="text-sm mt-2">
              Register your startup to raise funding from community investors
            </p>
          </div>

          <div className="flex justify-between items-center overflow-x-auto">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center min-w-0 flex-1"
              >
                <div
                  className={`w-12 h-12 rounded border-2 border-black flex items-center justify-center text-lg mb-2 ${
                    currentStep >= step.number
                      ? "bg-black text-white"
                      : "bg-white"
                  }`}
                >
                  {currentStep > step.number ? "✓" : step.icon}
                </div>
                <div className="text-xs text-center max-w-20">
                  <div className="font-bold">Step {step.number}</div>
                  <div>{step.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <div>
            {currentStep > 1 && (
              <button
                onClick={prevStep}
                className="border-2 border-black px-6 py-2 hover:bg-gray-100"
              >
                ← PREVIOUS
              </button>
            )}
          </div>

          <div>
            {currentStep < 7 ? (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className={`px-6 py-2 ${
                  canProceed()
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                NEXT →
              </button>
            ) : (
              <button
                disabled={!canProceed()}
                onClick={() =>
                  alert(
                    "Startup submitted for review! You'll receive notification within 5-7 business days."
                  )
                }
                className={`px-8 py-2 ${
                  canProceed()
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                SUBMIT FOR REVIEW
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <FounderFooter />
    </div>
  );
};

export default PlantifyCreateStartup;
