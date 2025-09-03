"use client";

import React, { useState } from "react";
import { AlertCircle, Shield, CheckCircle } from "lucide-react";

const FounderCollateralTopUp = () => {
  const [paymentMethod, setPaymentMethod] = useState("icp");
  const [topUpAmount, setTopUpAmount] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [conversionCountdown, setConversionCountdown] = useState(60);
  const [processing, setProcessing] = useState(false);

  // Mock data
  const collateralData = {
    currentBalance: 1400,
    originalAmount: 13200,
    monthlyCommitment: 1000,
    recommendedTopUp: 6000,
    minimumTopUp: 1000,
    nextPaymentDue: "2025-01-21",
    monthsRemaining: 28,
  };

  const conversionRates = {
    icp: 12.5,
    lastUpdated: "2025-01-03 14:23:45",
  };

  const calculateTopUpDetails = () => {
    const amount = parseFloat(topUpAmount) || 0;
    if (paymentMethod === "icp") {
      const icpAmount = amount / conversionRates.icp;
      const networkFee = 0.0001;
      return {
        inputAmount: amount,
        icpRequired: icpAmount,
        networkFee: networkFee,
        totalIcpRequired: icpAmount + networkFee,
        ckUSDCReceived: amount,
      };
    } else {
      return {
        inputAmount: amount,
        ckUSDCRequired: amount,
        networkFee: 0.001,
        totalCkUSDC: amount + 0.001,
        ckUSDCReceived: amount,
      };
    }
  };

  const details = calculateTopUpDetails();

  const handleTopUp = () => {
    if (!topUpAmount || parseFloat(topUpAmount) < collateralData.minimumTopUp) {
      alert(`Minimum top-up amount is $${collateralData.minimumTopUp} ckUSDC`);
      return;
    }
    setShowConfirmation(true);
  };

  const confirmTopUp = () => {
    setProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setProcessing(false);
      setShowConfirmation(false);
      alert("Collateral top-up successful! Your balance has been updated.");
      setTopUpAmount("");
    }, 3000);
  };

  // Simulate countdown for ICP conversion rate
  React.useEffect(() => {
    if (paymentMethod === "icp" && conversionCountdown > 0) {
      const timer = setTimeout(() => {
        setConversionCountdown(conversionCountdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (conversionCountdown === 0) {
      setConversionCountdown(60); // Reset
    }
  }, [conversionCountdown, paymentMethod]);

  return (
    <div className="min-h-screen bg-gray-50 text-black font-mono">
      {/* Header */}
      <header className="bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold border-2 border-black px-4 py-2">
                PLANTIFY
              </div>
              <button className="text-sm hover:underline">
                ← Back to Dashboard
              </button>
            </div>
            <div className="text-sm border border-black px-3 py-1">
              COLLATERAL TOP-UP
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        {/* Current Status */}
        <div className="border-2 border-black p-6 bg-white mb-6">
          <div className="flex items-center mb-4">
            <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
            <h2 className="text-xl font-bold">
              COLLATERAL STATUS - ACTION REQUIRED
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 border border-red-500 bg-red-50">
              <div className="text-2xl font-bold text-red-600">
                ${collateralData.currentBalance.toLocaleString()}
              </div>
              <div className="text-sm">Current Balance</div>
              <div className="text-xs text-red-600">LOW BALANCE WARNING</div>
            </div>
            <div className="text-center p-4 border border-black">
              <div className="text-2xl font-bold">
                ${collateralData.originalAmount.toLocaleString()}
              </div>
              <div className="text-sm">Original Collateral</div>
            </div>
            <div className="text-center p-4 border border-black">
              <div className="text-2xl font-bold">
                ${collateralData.monthlyCommitment.toLocaleString()}
              </div>
              <div className="text-sm">Monthly Commitment</div>
            </div>
            <div className="text-center p-4 border border-black">
              <div className="text-2xl font-bold">
                {collateralData.monthsRemaining}
              </div>
              <div className="text-sm">Months Remaining</div>
            </div>
          </div>

          {/* Health Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Collateral Health</span>
              <span className="text-red-600">
                {Math.round(
                  (collateralData.currentBalance /
                    collateralData.originalAmount) *
                    100
                )}
                %
              </span>
            </div>
            <div className="border-2 border-black h-6">
              <div
                className="bg-red-500 h-full"
                style={{
                  width: `${
                    (collateralData.currentBalance /
                      collateralData.originalAmount) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-500 p-4">
            <div className="flex items-start space-x-2">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <div className="font-bold text-sm text-yellow-800">
                  IMMEDIATE TOP-UP RECOMMENDED
                </div>
                <div className="text-sm mt-1">
                  Your collateral balance is critically low. Next payment due:{" "}
                  {collateralData.nextPaymentDue}. If payment fails, $
                  {collateralData.monthlyCommitment} will be auto-deducted,
                  leaving insufficient balance for future payments.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top-up Form */}
        <div className="border-2 border-black p-6 bg-white mb-6">
          <h3 className="text-xl font-bold mb-6 bg-black text-white p-2">
            TOP-UP COLLATERAL
          </h3>

          {/* Payment Method Selection */}
          <div className="mb-6">
            <div className="text-sm font-bold mb-3">PAYMENT METHOD</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className={`border-2 p-4 cursor-pointer ${
                  paymentMethod === "icp"
                    ? "border-black bg-blue-50"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => setPaymentMethod("icp")}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    checked={paymentMethod === "icp"}
                    onChange={() => setPaymentMethod("icp")}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-bold">Pay with ICP</div>
                    <div className="text-sm text-gray-600">
                      Auto-converted to ckUSDC
                    </div>
                    {paymentMethod === "icp" && (
                      <div className="text-xs text-blue-600 mt-1">
                        Rate: 1 ICP = ${conversionRates.icp} USD (
                        {conversionCountdown}s)
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`border-2 p-4 cursor-pointer ${
                  paymentMethod === "ckusdc"
                    ? "border-black bg-green-50"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => setPaymentMethod("ckusdc")}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    checked={paymentMethod === "ckusdc"}
                    onChange={() => setPaymentMethod("ckusdc")}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-bold">Pay with ckUSDC</div>
                    <div className="text-sm text-gray-600">
                      Direct payment (no conversion)
                    </div>
                    <div className="text-xs text-green-600 mt-1">
                      ✓ No conversion fees • Instant processing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Amount Input */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold mb-2">
                TOP-UP AMOUNT (
                {paymentMethod === "icp" ? "USD Value" : "ckUSDC"})
              </label>
              <input
                type="number"
                value={topUpAmount}
                onChange={(e) => setTopUpAmount(e.target.value)}
                className="w-full border-2 border-black p-3 text-lg"
                placeholder={`Minimum $${collateralData.minimumTopUp}`}
                min={collateralData.minimumTopUp}
              />
              <div className="text-xs text-gray-600 mt-1">
                Recommended: ${collateralData.recommendedTopUp.toLocaleString()}{" "}
                (6 months buffer)
              </div>

              {/* Quick Amount Buttons */}
              <div className="mt-3">
                <div className="text-sm font-bold mb-2">QUICK AMOUNTS</div>
                <div className="grid grid-cols-3 gap-2">
                  {[3000, 6000, 12000].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setTopUpAmount(amount.toString())}
                      className={`border border-black px-3 py-2 text-sm hover:bg-gray-100 ${
                        topUpAmount === amount.toString()
                          ? "bg-black text-white"
                          : ""
                      }`}
                    >
                      ${amount.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculation Preview */}
            <div className="border border-black p-4 bg-gray-50">
              <div className="text-sm font-bold mb-3">TRANSACTION PREVIEW</div>
              {topUpAmount && parseFloat(topUpAmount) > 0 && (
                <div className="space-y-2 text-sm">
                  {paymentMethod === "icp" ? (
                    <>
                      <div className="flex justify-between">
                        <span>ICP Required:</span>
                        <span className="font-bold">
                          {details.icpRequired?.toFixed(4)} ICP
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Network Fee:</span>
                        <span>{details.networkFee} ICP</span>
                      </div>
                      <div className="flex justify-between border-t border-black pt-2">
                        <span>Total ICP:</span>
                        <span className="font-bold">
                          {details.totalIcpRequired?.toFixed(4)} ICP
                        </span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>ckUSDC Received:</span>
                        <span className="font-bold">
                          ${details.ckUSDCReceived}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <span>ckUSDC Amount:</span>
                        <span className="font-bold">
                          ${details.ckUSDCRequired}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Network Fee:</span>
                        <span>${details.networkFee}</span>
                      </div>
                      <div className="flex justify-between border-t border-black pt-2">
                        <span>Total Cost:</span>
                        <span className="font-bold">
                          ${details.totalCkUSDC?.toFixed(3)}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {(!topUpAmount || parseFloat(topUpAmount) === 0) && (
                <div className="text-gray-500 text-sm">
                  Enter amount to see transaction preview
                </div>
              )}
            </div>
          </div>

          {/* Impact Analysis */}
          {topUpAmount && parseFloat(topUpAmount) > 0 && (
            <div className="border-2 border-green-500 p-4 bg-green-50 mb-6">
              <div className="text-sm font-bold mb-3 text-green-800">
                COLLATERAL IMPACT ANALYSIS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-bold">New Balance</div>
                  <div className="text-lg text-green-600">
                    $
                    {(
                      collateralData.currentBalance + parseFloat(topUpAmount)
                    ).toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="font-bold">Coverage Months</div>
                  <div className="text-lg text-green-600">
                    {Math.floor(
                      (collateralData.currentBalance +
                        parseFloat(topUpAmount)) /
                        collateralData.monthlyCommitment
                    )}{" "}
                    months
                  </div>
                </div>
                <div>
                  <div className="font-bold">Health Status</div>
                  <div className="text-lg text-green-600">
                    {(
                      ((collateralData.currentBalance +
                        parseFloat(topUpAmount)) /
                        collateralData.originalAmount) *
                      100
                    ).toFixed(1)}
                    %
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="text-center">
            <button
              onClick={handleTopUp}
              disabled={
                !topUpAmount ||
                parseFloat(topUpAmount) < collateralData.minimumTopUp
              }
              className={`px-8 py-3 text-lg font-bold ${
                topUpAmount &&
                parseFloat(topUpAmount) >= collateralData.minimumTopUp
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              TOP-UP COLLATERAL
            </button>
          </div>
        </div>

        {/* Security Information */}
        <div className="border-2 border-black p-6 bg-blue-50">
          <div className="flex items-center mb-3">
            <Shield className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-bold text-blue-800">
              SECURITY & TRANSPARENCY
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                <span>All collateral locked in smart contracts</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                <span>Automatic deduction protection</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                <span>Transparent blockchain tracking</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                <span>Real-time balance monitoring</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                <span>Investor protection mechanism</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                <span>Full refund upon completion</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white border-4 border-black p-6 max-w-md mx-4">
            <h3 className="text-xl font-bold mb-4">
              CONFIRM COLLATERAL TOP-UP
            </h3>

            <div className="space-y-3 mb-6 text-sm">
              <div>
                <span className="font-bold">Top-up Amount:</span> $
                {parseFloat(topUpAmount).toLocaleString()} ckUSDC
              </div>
              <div>
                <span className="font-bold">Payment Method:</span>{" "}
                {paymentMethod === "icp"
                  ? "ICP (Auto-converted)"
                  : "Direct ckUSDC"}
              </div>
              {paymentMethod === "icp" && (
                <>
                  <div>
                    <span className="font-bold">ICP Required:</span>{" "}
                    {details.totalIcpRequired?.toFixed(4)} ICP
                  </div>
                  <div>
                    <span className="font-bold">Conversion Rate:</span> 1 ICP =
                    ${conversionRates.icp} USD
                  </div>
                </>
              )}
              <div>
                <span className="font-bold">New Balance:</span> $
                {(
                  collateralData.currentBalance + parseFloat(topUpAmount)
                ).toLocaleString()}{" "}
                ckUSDC
              </div>
            </div>

            {processing ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto mb-4"></div>
                <div className="text-sm">Processing transaction...</div>
                {paymentMethod === "icp" && (
                  <div className="text-sm">Converting ICP to ckUSDC...</div>
                )}
              </div>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={confirmTopUp}
                  className="flex-1 bg-black text-white py-2 font-bold hover:bg-gray-800"
                >
                  CONFIRM & PAY
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 border border-black py-2 font-bold hover:bg-gray-100"
                >
                  CANCEL
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FounderCollateralTopUp;
