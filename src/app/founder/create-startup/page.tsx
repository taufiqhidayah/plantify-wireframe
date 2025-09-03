"use client";

import React, { useState } from "react";

const PlantifyCreateStartup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Information
    startupName: "",
    sector: "",
    foundedYear: "",
    description: "",
    website: "",

    // Business Details
    problemStatement: "",
    solution: "",
    targetMarket: "",
    competitiveAdvantage: "",

    // Financial Projections
    fundingGoal: "",
    nftPrice: "",
    monthlyProfitSharing: "",
    revenueModel: "",

    // Collateral
    collateralSource: "",
    collateralAmount: "",

    // Documents
    businessPlan: null,
    financialProjections: null,
    legalDocuments: null,
  });

  const steps = [
    { number: 1, title: "Basic Information", icon: "📝" },
    { number: 2, title: "Business Details", icon: "💡" },
    { number: 3, title: "Financial Projections", icon: "📊" },
    { number: 4, title: "Collateral Setup", icon: "🔒" },
    { number: 5, title: "Documentation", icon: "📄" },
    { number: 6, title: "Review & Submit", icon: "✅" },
  ];

  const sectors = [
    "Agriculture & Farming",
    "Livestock & Aquaculture",
    "Food & Beverage",
    "Retail & E-commerce",
    "Services",
    "Technology & Digital",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.startupName && formData.sector && formData.description;
      case 2:
        return formData.problemStatement && formData.solution;
      case 3:
        return formData.fundingGoal && formData.monthlyProfitSharing;
      case 4:
        return formData.collateralSource && formData.collateralAmount;
      case 5:
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
                <div>• Legal entity (CV/PT/Koperasi) required</div>
                <div>• Minimum 6 months operational history</div>
                <div>• Recurring revenue potential</div>
                <div>• Ready for 36-month commitment</div>
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
                      NFT Price (ckUSDC)
                    </label>
                    <input
                      type="number"
                      className="w-full border-2 border-black p-2"
                      value={formData.nftPrice}
                      onChange={(e) =>
                        handleInputChange("nftPrice", e.target.value)
                      }
                      placeholder="100"
                      min="50"
                    />
                    <div className="text-xs text-gray-600 mt-1">
                      Recommended: $50-500 ckUSDC
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
                        {Math.floor(formData.fundingGoal / formData.nftPrice)}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Monthly Payout</div>
                      <div>
                        $
                        {Math.floor(formData.fundingGoal / formData.nftPrice) *
                          formData.monthlyProfitSharing}{" "}
                        ckUSDC
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Annual Payout</div>
                      <div>
                        $
                        {Math.floor(formData.fundingGoal / formData.nftPrice) *
                          formData.monthlyProfitSharing *
                          12}{" "}
                        ckUSDC
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">3-Year Total</div>
                      <div>
                        $
                        {Math.floor(formData.fundingGoal / formData.nftPrice) *
                          formData.monthlyProfitSharing *
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
                            formData.fundingGoal / formData.nftPrice
                          ) *
                            formData.monthlyProfitSharing *
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
                  <div className="border border-black p-3 bg-gray-50">
                    <div className="font-bold mb-2">💱 CONVERSION PREVIEW</div>
                    <div className="text-sm space-y-1">
                      <div>Current ICP Rate: ~$12.50 USD</div>
                      <div>
                        Conversion Display: Real-time with 60s countdown
                      </div>
                      <div>Network Fees: ~0.0001 ICP</div>
                    </div>
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
                        handleInputChange("businessPlan", e.target.files[0])
                      }
                    />
                    <div className="text-xs text-gray-500 mt-2">
                      Max 10MB. Must include market analysis, financial
                      projections, team info
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
                          e.target.files[0]
                        )
                      }
                    />
                    <div className="text-xs text-gray-500 mt-2">
                      36-month monthly projections in ckUSDC
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
                        handleInputChange("legalDocuments", e.target.files[0])
                      }
                    />
                    <div className="text-xs text-gray-500 mt-2">
                      Akta pendirian, SIUP, NPWP, KTP founder
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
                  <div>Business plan with clear revenue model</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2">✓</div>
                  <div>Monthly financial projections for 36 months</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2">✓</div>
                  <div>Legal entity documents (CV/PT/Koperasi)</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2">✓</div>
                  <div>Founder identification and tax documents</div>
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
                      <div className="font-bold">Funding Goal:</div>
                      <div>${formData.fundingGoal || "0"} ckUSDC</div>
                    </div>
                    <div>
                      <div className="font-bold">NFT Price:</div>
                      <div>${formData.nftPrice || "0"} ckUSDC</div>
                    </div>
                  </div>
                </div>

                <div className="border border-black p-4">
                  <h4 className="font-bold mb-3">FINANCIAL COMMITMENT</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="font-bold">Monthly Per NFT:</div>
                      <div>${formData.monthlyPerNFT || "0"} ckUSDC</div>
                    </div>
                    <div>
                      <div className="font-bold">Total Monthly:</div>
                      <div>
                        ${formData.totalMonthlyProfitSharing || "0"} ckUSDC
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Collateral Required:</div>
                      <div>
                        $
                        {formData.totalMonthlyProfitSharing
                          ? formData.totalMonthlyProfitSharing * 12
                          : "0"}{" "}
                        ckUSDC
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Investment Period:</div>
                      <div>36 months</div>
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
      <header className="border-b-2 border-black p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold border-2 border-black px-4 py-2">
            PLANTIFY
          </div>
          <div className="text-sm border border-black px-3 py-1">
            Connected: [Internet Identity]
          </div>
        </div>
      </header>

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
            {currentStep < 6 ? (
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
      <footer className="border-t-2 border-black py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="font-bold mb-2">NEED HELP?</div>
              <div>Check our founder guide or contact support</div>
            </div>
            <div>
              <div className="font-bold mb-2">REVIEW PROCESS</div>
              <div>5-7 business days for platform evaluation</div>
            </div>
            <div>
              <div className="font-bold mb-2">QUESTIONS?</div>
              <div>Join founder community for guidance</div>
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

export default PlantifyCreateStartup;
