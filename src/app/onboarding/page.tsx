"use client";

import React, { useState } from "react";

const PlantifyOnboarding = () => {
  const [selectedRole, setSelectedRole] = useState<
    "investor" | "founder" | null
  >(null);

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

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Welcome Message */}
          <div className="border-4 border-black p-8 mb-8 bg-gray-50">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              WELCOME TO PLANTIFY
            </h1>
            <p className="text-lg md:text-xl mb-6">
              You&apos;re successfully connected! Now choose how you&apos;d like
              to participate in our ecosystem.
            </p>
            <div className="border-2 border-black bg-white p-4 inline-block">
              <div className="text-sm font-bold mb-1">
                Your Internet Identity:
              </div>
              <div className="text-lg font-mono">
                [rdmx6-jaaaa-aaaah-qcaiq-cai]
              </div>
            </div>
          </div>

          {/* Role Selection */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 border-b-4 border-black inline-block pb-2">
              CHOOSE YOUR ROLE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Investor Option */}
            <div
              className={`border-4 p-8 cursor-pointer transition-all ${
                selectedRole === "investor"
                  ? "border-black bg-black text-white"
                  : "border-black bg-white hover:bg-gray-50"
              }`}
              onClick={() => setSelectedRole("investor")}
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4">REGISTER AS INVESTOR</h3>

              <div className="text-left space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="mr-2">•</div>
                  <div>Invest in promising startups with stable currency</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2">•</div>
                  <div>Earn monthly profit sharing from startup revenues</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2">•</div>
                  <div>Participate in community governance and voting</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2">•</div>
                  <div>Start with as little as $50 per investment</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2">•</div>
                  <div>Diversify across multiple sectors and startups</div>
                </div>
              </div>

              <div
                className={`border-2 p-3 mb-4 ${
                  selectedRole === "investor" ? "border-white" : "border-black"
                }`}
              >
                <div className="font-bold text-sm mb-1">REQUIREMENTS:</div>
                <div className="text-sm">
                  • Valid Internet Identity
                  <br />
                  • Minimum investment capital
                  <br />• Active community participation
                </div>
              </div>

              {selectedRole === "investor" && (
                <div className="bg-white text-black p-2 text-sm">
                  ✓ SELECTED
                </div>
              )}
            </div>

            {/* Founder Option */}
            <div
              className={`border-4 p-8 cursor-pointer transition-all ${
                selectedRole === "founder"
                  ? "border-black bg-black text-white"
                  : "border-black bg-white hover:bg-gray-50"
              }`}
              onClick={() => setSelectedRole("founder")}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">REGISTER AS FOUNDER</h3>

              <div className="text-left space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="mr-2">•</div>
                  <div>Raise funding from community investors</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2">•</div>
                  <div>Maintain full control of your business</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2">•</div>
                  <div>Access transparent, decentralized funding</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2">•</div>
                  <div>Build supportive investor community</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2">•</div>
                  <div>36-month commitment with profit sharing</div>
                </div>
              </div>

              <div
                className={`border-2 p-3 mb-4 ${
                  selectedRole === "founder" ? "border-white" : "border-black"
                }`}
              >
                <div className="font-bold text-sm mb-1">REQUIREMENTS:</div>
                <div className="text-sm">
                  • Legal business entity (CV/PT/Koperasi)
                  <br />
                  • 6+ months operational history
                  <br />• Stable currency collateral (12 months)
                </div>
              </div>

              {selectedRole === "founder" && (
                <div className="bg-white text-black p-2 text-sm">
                  ✓ SELECTED
                </div>
              )}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="border-2 border-black mb-8 bg-gray-50">
            <div className="bg-black text-white p-3">
              <h3 className="text-xl font-bold">QUICK COMPARISON</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="border border-black p-3">
                  <div className="font-bold mb-2">ASPECT</div>
                  <div className="space-y-2">
                    <div>Investment Required</div>
                    <div>Time Commitment</div>
                    <div>Risk Level</div>
                    <div>Potential Returns</div>
                    <div>Active Management</div>
                  </div>
                </div>
                <div className="border border-black p-3">
                  <div className="font-bold mb-2">INVESTOR</div>
                  <div className="space-y-2">
                    <div>$50+ per startup</div>
                    <div>Monthly voting (~1hr)</div>
                    <div>Medium (diversified)</div>
                    <div>15-60% annually</div>
                    <div>Passive income focus</div>
                  </div>
                </div>
                <div className="border border-black p-3">
                  <div className="font-bold mb-2">FOUNDER</div>
                  <div className="space-y-2">
                    <div>Collateral required</div>
                    <div>Daily operations</div>
                    <div>High (business owner)</div>
                    <div>Unlimited potential</div>
                    <div>Full business control</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            {selectedRole ? (
              <div className="space-y-4">
                <div
                  className="bg-black text-white px-12 py-4 text-xl cursor-pointer inline-block"
                  onClick={() => {
                    if (selectedRole === "investor") {
                      alert("Redirecting to Investor Registration...");
                    } else {
                      alert("Redirecting to Founder Registration...");
                    }
                  }}
                >
                  CONTINUE AS {selectedRole.toUpperCase()}
                </div>
                <div className="block">
                  <button
                    className="text-sm border border-black px-4 py-2 hover:bg-gray-100"
                    onClick={() => setSelectedRole(null)}
                  >
                    Change Selection
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-gray-500">
                Please select a role to continue
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-sm text-center">
            <div className="border border-black p-4 bg-yellow-50">
              <div className="font-bold mb-2">
                💡 CAN I CHANGE MY ROLE LATER?
              </div>
              <div>
                Yes! You can create separate profiles for both investor and
                founder roles. Many users start as investors and later register
                startups as founders.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-black py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="font-bold mb-2">NEED HELP?</div>
              <div>
                Check our documentation or join the community for support
              </div>
            </div>
            <div>
              <div className="font-bold mb-2">SECURITY</div>
              <div>
                Your Internet Identity is fully decentralized and secure
              </div>
            </div>
            <div>
              <div className="font-bold mb-2">QUESTIONS?</div>
              <div>Visit our FAQ or contact support team</div>
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

export default PlantifyOnboarding;
