"use client";

import React, { useState } from "react";

const PlantifyFounderRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    address: "",

    // Professional Background
    experience: "",
    previousBusinesses: "",
    expertise: "",
    linkedIn: "",

    // Verification Documents
    ktpNumber: "",
    npwpNumber: "",

    // Terms Agreement
    agreeTerms: false,
    agreeRisks: false,
    agreeCommitment: false,
  });

  const steps = [
    { number: 1, title: "Personal Information", icon: "👤" },
    { number: 2, title: "Professional Background", icon: "💼" },
    { number: 3, title: "Verification", icon: "📄" },
    { number: 4, title: "Terms & Agreement", icon: "✅" },
  ];

  const handleInputChange = (field, value) => {
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
          formData.address
        );
      case 2:
        return formData.experience && formData.expertise;
      case 3:
        return formData.ktpNumber && formData.npwpNumber;
      case 4:
        return (
          formData.agreeTerms && formData.agreeRisks && formData.agreeCommitment
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

                <div>
                  <label className="block font-bold mb-2">
                    Complete Address *
                  </label>
                  <textarea
                    className="w-full border-2 border-black p-2 h-20"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    placeholder="Enter your complete address including city and postal code"
                  />
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-4 bg-blue-50">
              <div className="font-bold mb-2">ℹ️ ABOUT FOUNDER ACCOUNT</div>
              <div className="text-sm">
                Your founder account will allow you to create and manage
                multiple startup listings on Plantify. You can add startup
                details after completing this registration.
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
                PROFESSIONAL BACKGROUND
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block font-bold mb-2">
                    Business Experience *
                  </label>
                  <textarea
                    className="w-full border-2 border-black p-2 h-24"
                    value={formData.experience}
                    onChange={(e) =>
                      handleInputChange("experience", e.target.value)
                    }
                    placeholder="Describe your business and entrepreneurial experience (minimum 6 months)"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">
                    Previous Businesses
                  </label>
                  <textarea
                    className="w-full border-2 border-black p-2 h-20"
                    value={formData.previousBusinesses}
                    onChange={(e) =>
                      handleInputChange("previousBusinesses", e.target.value)
                    }
                    placeholder="List any previous businesses you've started or managed (optional)"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">
                    Area of Expertise *
                  </label>
                  <textarea
                    className="w-full border-2 border-black p-2 h-20"
                    value={formData.expertise}
                    onChange={(e) =>
                      handleInputChange("expertise", e.target.value)
                    }
                    placeholder="What are your main skills and areas of expertise?"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    className="w-full border-2 border-black p-2"
                    value={formData.linkedIn}
                    onChange={(e) =>
                      handleInputChange("linkedIn", e.target.value)
                    }
                    placeholder="https://linkedin.com/in/yourprofile (optional)"
                  />
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-4 bg-yellow-50">
              <div className="font-bold mb-2">📝 WHY WE ASK FOR THIS</div>
              <div className="text-sm">
                This information helps investors assess founder credibility and
                expertise when evaluating startup opportunities.
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-4 bg-black text-white p-2">
                VERIFICATION DOCUMENTS
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block font-bold mb-2">
                    KTP (ID Card) Number *
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-black p-2"
                    value={formData.ktpNumber}
                    onChange={(e) =>
                      handleInputChange("ktpNumber", e.target.value)
                    }
                    placeholder="Enter your KTP number"
                    maxLength="16"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">NPWP Number *</label>
                  <input
                    type="text"
                    className="w-full border-2 border-black p-2"
                    value={formData.npwpNumber}
                    onChange={(e) =>
                      handleInputChange("npwpNumber", e.target.value)
                    }
                    placeholder="Enter your personal NPWP number"
                    maxLength="15"
                  />
                </div>

                <div className="border-2 border-black p-4">
                  <h4 className="font-bold mb-2">DOCUMENT UPLOAD</h4>
                  <div className="space-y-3">
                    <div className="border border-gray-400 border-dashed p-4 text-center">
                      <div className="text-gray-600 mb-2">
                        KTP/ID Card Photo
                      </div>
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        className="text-sm"
                      />
                    </div>

                    <div className="border border-gray-400 border-dashed p-4 text-center">
                      <div className="text-gray-600 mb-2">NPWP Document</div>
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        className="text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-4 bg-green-50">
              <div className="font-bold mb-2">🔒 SECURITY & PRIVACY</div>
              <div className="text-sm">
                All personal documents are encrypted and stored securely. They
                are only used for verification purposes and platform compliance.
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
                  <h4 className="font-bold mb-3">FOUNDER RESPONSIBILITIES</h4>
                  <div className="text-sm space-y-2">
                    <div>
                      • Provide accurate and truthful information about your
                      businesses
                    </div>
                    <div>
                      • Maintain transparent communication with investors
                    </div>
                    <div>• Submit monthly progress reports on time</div>
                    <div>• Honor profit sharing commitments</div>
                    <div>
                      • Maintain sufficient collateral for all active startups
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
                      founder obligations, and community guidelines.
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
                        I understand the risks and commitments *
                      </span>
                      <br />I understand that fundraising involves 36-month
                      commitments, collateral requirements, and monthly
                      reporting obligations.
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreeCommitment"
                      checked={formData.agreeCommitment}
                      onChange={(e) =>
                        handleInputChange("agreeCommitment", e.target.checked)
                      }
                      className="mt-1"
                    />
                    <label htmlFor="agreeCommitment" className="text-sm">
                      <span className="font-bold">
                        I commit to transparency and community values *
                      </span>
                      <br />I will maintain open communication with investors
                      and uphold the values of the Plantify community.
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-4 bg-blue-50">
              <div className="font-bold mb-2">🚀 WHAT'S NEXT?</div>
              <div className="text-sm">
                After completing registration, you'll be able to create startup
                listings, access founder tools, and join the founder community.
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
              FOUNDER REGISTRATION
            </h1>
            <p className="text-sm mt-2">
              Complete your founder profile to start creating startup listings
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
                    "Registration completed! Redirecting to founder dashboard..."
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
              <div>Check our founder guide or contact support</div>
            </div>
            <div>
              <div className="font-bold mb-2">SECURE REGISTRATION</div>
              <div>All data is encrypted and stored securely</div>
            </div>
            <div>
              <div className="font-bold mb-2">QUESTIONS?</div>
              <div>Join our founder community for support</div>
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

export default PlantifyFounderRegistration;
