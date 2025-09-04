"use client";

import React, { useState } from "react";

const PlantifyInvestorRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",

    // Investment Profile
    investmentExperience: "",
    riskTolerance: "",
    investmentGoals: "",
    availableCapital: "",
    monthlyBudget: "",

    // Knowledge Assessment
    understandsRisks: false,
    understandsNFT: false,
    understandsVoting: false,
    understandsLiquidity: false,

    // Terms Agreement
    agreeTerms: false,
    agreeRisks: false,
    agreeParticipation: false,
  });

  const steps = [
    { number: 1, title: "Personal Information", icon: "👤" },
    { number: 2, title: "Investment Profile", icon: "💰" },
    { number: 3, title: "Knowledge Assessment", icon: "🎓" },
    { number: 4, title: "Terms & Agreement", icon: "✅" },
  ];

  const experienceLevels = [
    "Beginner - New to investing",
    "Intermediate - Some experience with stocks/crypto",
    "Advanced - Experienced with alternative investments",
    "Expert - Professional investor or financial background",
  ];

  const riskTolerances = [
    "Conservative - Prefer stable, lower returns",
    "Moderate - Balanced risk and return",
    "Aggressive - Higher risk for higher returns",
    "Very Aggressive - Maximum risk for maximum returns",
  ];

  const investmentGoals = [
    "Passive Income - Regular monthly returns",
    "Portfolio Diversification - Spread investment risk",
    "Supporting Startups - Help entrepreneurs grow",
    "Learning Experience - Understand startup investing",
    "Long-term Wealth Building - 3+ year horizon",
  ];

  const capitalRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "Over $50,000",
  ];

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.fullName &&
          formData.email &&
          formData.phone &&
          formData.country &&
          formData.city
        );
      case 2:
        return (
          formData.investmentExperience &&
          formData.riskTolerance &&
          formData.investmentGoals &&
          formData.availableCapital
        );
      case 3:
        return (
          formData.understandsRisks &&
          formData.understandsNFT &&
          formData.understandsVoting &&
          formData.understandsLiquidity
        );
      case 4:
        return (
          formData.agreeTerms &&
          formData.agreeRisks &&
          formData.agreeParticipation
        );
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
                PERSONAL INFORMATION
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block font-bold mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full border-2 border-black p-2"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    placeholder="Enter your full legal name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full border-2 border-black p-2"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full border-2 border-black p-2"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-2">Country *</label>
                    <input
                      type="text"
                      className="w-full border-2 border-black p-2"
                      value={formData.country}
                      onChange={(e) =>
                        handleInputChange("country", e.target.value)
                      }
                      placeholder="Indonesia"
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-2">City *</label>
                    <input
                      type="text"
                      className="w-full border-2 border-black p-2"
                      value={formData.city}
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                      placeholder="Jakarta"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-4 bg-blue-50">
              <div className="font-bold mb-2">ℹ️ ABOUT INVESTOR ACCOUNT</div>
              <div className="text-sm">
                Your investor account allows you to browse startups, purchase
                NFT investments, participate in monthly voting, and receive
                profit sharing returns.
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
                INVESTMENT PROFILE
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block font-bold mb-2">
                    Investment Experience Level *
                  </label>
                  <select
                    className="w-full border-2 border-black p-2"
                    value={formData.investmentExperience}
                    onChange={(e) =>
                      handleInputChange("investmentExperience", e.target.value)
                    }
                  >
                    <option value="">Select your experience level</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold mb-2">
                    Risk Tolerance *
                  </label>
                  <select
                    className="w-full border-2 border-black p-2"
                    value={formData.riskTolerance}
                    onChange={(e) =>
                      handleInputChange("riskTolerance", e.target.value)
                    }
                  >
                    <option value="">Select your risk tolerance</option>
                    {riskTolerances.map((tolerance) => (
                      <option key={tolerance} value={tolerance}>
                        {tolerance}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold mb-2">
                    Primary Investment Goals *
                  </label>
                  <select
                    className="w-full border-2 border-black p-2"
                    value={formData.investmentGoals}
                    onChange={(e) =>
                      handleInputChange("investmentGoals", e.target.value)
                    }
                  >
                    <option value="">Select your primary goal</option>
                    {investmentGoals.map((goal) => (
                      <option key={goal} value={goal}>
                        {goal}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-2">
                      Available Investment Capital *
                    </label>
                    <select
                      className="w-full border-2 border-black p-2"
                      value={formData.availableCapital}
                      onChange={(e) =>
                        handleInputChange("availableCapital", e.target.value)
                      }
                    >
                      <option value="">Select capital range</option>
                      {capitalRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold mb-2">
                      Monthly Investment Budget
                    </label>
                    <input
                      type="number"
                      className="w-full border-2 border-black p-2"
                      value={formData.monthlyBudget}
                      onChange={(e) =>
                        handleInputChange("monthlyBudget", e.target.value)
                      }
                      placeholder="Optional: $100"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-4 bg-yellow-50">
              <div className="font-bold mb-2">
                💡 INVESTMENT RECOMMENDATIONS
              </div>
              <div className="text-sm space-y-1">
                <div>• Start small: Minimum $50 per startup investment</div>
                <div>
                  • Diversify: Spread investments across multiple startups
                </div>
                <div>• Long-term: All investments locked for 36 months</div>
                <div>• Active participation: Monthly voting required</div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
                KNOWLEDGE ASSESSMENT
              </h3>

              <p className="text-sm mb-6">
                Please confirm your understanding of key platform concepts. This
                helps ensure you&apos;re prepared for startup investing on Plantify.
              </p>

              <div className="space-y-6">
                <div className="border border-black p-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="understandsRisks"
                      checked={formData.understandsRisks}
                      onChange={(e) =>
                        handleInputChange("understandsRisks", e.target.checked)
                      }
                      className="mt-1"
                    />
                    <label htmlFor="understandsRisks" className="text-sm">
                      <span className="font-bold">
                        I understand investment risks *
                      </span>
                      <br />
                      Startup investments are high-risk and I may lose some or
                      all of my investment. Returns are not guaranteed and
                      depend on startup performance.
                    </label>
                  </div>
                </div>

                <div className="border border-black p-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="understandsNFT"
                      checked={formData.understandsNFT}
                      onChange={(e) =>
                        handleInputChange("understandsNFT", e.target.checked)
                      }
                      className="mt-1"
                    />
                    <label htmlFor="understandsNFT" className="text-sm">
                      <span className="font-bold">
                        I understand NFT investment model *
                      </span>
                      <br />
                      Each NFT represents profit sharing rights in a specific
                      startup. Profit sharing is distributed monthly based on
                      startup performance and community voting.
                    </label>
                  </div>
                </div>

                <div className="border border-black p-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="understandsVoting"
                      checked={formData.understandsVoting}
                      onChange={(e) =>
                        handleInputChange("understandsVoting", e.target.checked)
                      }
                      className="mt-1"
                    />
                    <label htmlFor="understandsVoting" className="text-sm">
                      <span className="font-bold">
                        I understand community governance *
                      </span>
                      <br />I must participate in monthly voting to
                      approve/reject startup progress reports. My vote affects
                      whether profit sharing is distributed that month.
                    </label>
                  </div>
                </div>

                <div className="border border-black p-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="understandsLiquidity"
                      checked={formData.understandsLiquidity}
                      onChange={(e) =>
                        handleInputChange(
                          "understandsLiquidity",
                          e.target.checked
                        )
                      }
                      className="mt-1"
                    />
                    <label htmlFor="understandsLiquidity" className="text-sm">
                      <span className="font-bold">
                        I understand liquidity restrictions *
                      </span>
                      <br />
                      NFTs are locked for 36 months and cannot be sold or
                      transferred. I will not have access to my initial
                      investment capital during this period.
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-4 bg-green-50">
              <div className="font-bold mb-2">📚 LEARNING RESOURCES</div>
              <div className="text-sm">
                After registration, you&apos;ll have access to investor education
                materials, startup analysis guides, and community discussions to
                improve your investment skills.
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
                TERMS & AGREEMENT
              </h3>

              <div className="space-y-6">
                <div className="border border-black p-4">
                  <h4 className="font-bold mb-3">INVESTOR RESPONSIBILITIES</h4>
                  <div className="text-sm space-y-2">
                    <div>• Conduct due diligence before making investments</div>
                    <div>
                      • Participate actively in monthly governance voting
                    </div>
                    <div>• Respect the long-term commitment (36 months)</div>
                    <div>
                      • Engage constructively with startup founders and
                      community
                    </div>
                    <div>
                      • Report any suspicious activity or platform issues
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={(e) =>
                        handleInputChange("agreeTerms", e.target.checked)
                      }
                      className="mt-1"
                    />
                    <label htmlFor="agreeTerms" className="text-sm">
                      <span className="font-bold">
                        I agree to Plantify Terms & Conditions *
                      </span>
                      <br />I have read and understand the platform terms,
                      investment risks, and community guidelines for investors.
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreeRisks"
                      checked={formData.agreeRisks}
                      onChange={(e) =>
                        handleInputChange("agreeRisks", e.target.checked)
                      }
                      className="mt-1"
                    />
                    <label htmlFor="agreeRisks" className="text-sm">
                      <span className="font-bold">
                        I acknowledge investment risks *
                      </span>
                      <br />I understand that startup investments are high-risk
                      and I may lose money. I am investing only funds I can
                      afford to lose.
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreeParticipation"
                      checked={formData.agreeParticipation}
                      onChange={(e) =>
                        handleInputChange(
                          "agreeParticipation",
                          e.target.checked
                        )
                      }
                      className="mt-1"
                    />
                    <label htmlFor="agreeParticipation" className="text-sm">
                      <span className="font-bold">
                        I commit to active participation *
                      </span>
                      <br />I will participate in monthly voting, conduct proper
                      due diligence, and contribute positively to the community.
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-4 bg-blue-50">
              <div className="font-bold mb-2">🎯 WHAT&apos;S NEXT?</div>
              <div className="text-sm">
                After completing registration, you&apos;ll access the startup
                marketplace, investor dashboard, and educational resources to
                begin your investment journey.
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold">
              INVESTOR REGISTRATION
            </h1>
            <p className="text-sm mt-2">
              Complete your investor profile to start investing in startups
            </p>
          </div>

          <div className="flex justify-between items-center">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded border-2 border-black flex items-center justify-center text-xl mb-2 ${
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
      <div className="max-w-4xl mx-auto p-6">
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
            {currentStep < 4 ? (
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
                    "Registration completed! Redirecting to investor dashboard..."
                  )
                }
                className={`px-8 py-2 ${
                  canProceed()
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                COMPLETE REGISTRATION
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
              <div>Check our investor guide or contact support</div>
            </div>
            <div>
              <div className="font-bold mb-2">SAFE INVESTING</div>
              <div>Learn about risks and best practices</div>
            </div>
            <div>
              <div className="font-bold mb-2">COMMUNITY</div>
              <div>Join other investors for tips and discussions</div>
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

export default PlantifyInvestorRegistration;
