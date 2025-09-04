"use client";

import { useState } from "react";
import { X, DollarSign, AlertCircle, CheckCircle } from "lucide-react";

interface CollateralTopUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  startup: {
    id: number;
    name: string;
    collateralRequired: number;
    collateralDeposited: number;
    collateralProgress: number;
  };
  onTopUp: (amount: number, type: "ICP" | "ckUSDC") => void;
}

const CollateralTopUpModal = ({
  isOpen,
  onClose,
  startup,
  onTopUp,
}: CollateralTopUpModalProps) => {
  const [amount, setAmount] = useState("");
  const [paymentType, setPaymentType] = useState<"ICP" | "ckUSDC">("ckUSDC");
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<"input" | "confirm" | "processing" | "success">("input");

  const remainingAmount = startup.collateralRequired - startup.collateralDeposited;
  const isValidAmount = amount && parseFloat(amount) > 0 && parseFloat(amount) <= remainingAmount;

  const handleAmountChange = (value: string) => {
    // Only allow numbers and one decimal point
    const regex = /^\d*\.?\d*$/;
    if (regex.test(value)) {
      setAmount(value);
    }
  };

  const handleQuickAmount = (percentage: number) => {
    const quickAmount = (remainingAmount * percentage / 100).toFixed(2);
    setAmount(quickAmount);
  };

  const handleConfirm = () => {
    if (isValidAmount) {
      setStep("confirm");
    }
  };

  const handleProcessTopUp = async () => {
    setIsProcessing(true);
    setStep("processing");
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Call the top-up function
    onTopUp(parseFloat(amount), paymentType);
    
    setStep("success");
    setIsProcessing(false);
    
    // Auto close after success
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const handleClose = () => {
    setAmount("");
    setPaymentType("ckUSDC");
    setStep("input");
    setIsProcessing(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white border-2 border-black max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-black">
          <h2 className="text-xl font-bold">Top-Up Collateral</h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded"
            disabled={isProcessing}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Startup Info */}
          <div className="mb-6 p-4 border border-black bg-white">
            <h3 className="font-bold text-sm mb-2">{startup.name}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Required:</span>
                <span className="font-bold">${startup.collateralRequired.toLocaleString()} ckUSDC</span>
              </div>
              <div className="flex justify-between">
                <span>Deposited:</span>
                <span className="font-bold">${startup.collateralDeposited.toLocaleString()} ckUSDC</span>
              </div>
              <div className="flex justify-between">
                <span>Remaining:</span>
                <span className="font-bold text-black">${remainingAmount.toLocaleString()} ckUSDC</span>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progress</span>
                  <span>{startup.collateralProgress}%</span>
                </div>
                <div className="border border-black h-2">
                  <div
                    className="h-full bg-black"
                    style={{ width: `${startup.collateralProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {step === "input" && (
            <>
              {/* Amount Input */}
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2">
                  Top-Up Amount (ckUSDC)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black" />
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => handleAmountChange(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-10 pr-4 py-3 border-2 border-black text-lg font-mono"
                    max={remainingAmount}
                  />
                </div>
                <div className="text-xs mt-1">
                  Maximum: ${remainingAmount.toLocaleString()} ckUSDC
                </div>
              </div>

              {/* Quick Amount Buttons */}
              <div className="mb-6">
                <div className="text-sm font-bold mb-2">Quick Amounts</div>
                <div className="grid grid-cols-3 gap-2">
                  {[25, 50, 75, 100].map((percentage) => (
                    <button
                      key={percentage}
                      onClick={() => handleQuickAmount(percentage)}
                      className="border border-black py-2 text-sm hover:bg-gray-100"
                    >
                      {percentage}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <div className="text-sm font-bold mb-3">Payment Method</div>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 p-3 border border-black cursor-pointer hover:bg-gray-100">
                    <input
                      type="radio"
                      name="paymentType"
                      value="ckUSDC"
                      checked={paymentType === "ckUSDC"}
                      onChange={(e) => setPaymentType(e.target.value as "ckUSDC")}
                      className="w-4 h-4"
                    />
                    <div>
                      <div className="font-medium">Pay with ckUSDC</div>
                      <div className="text-xs">Direct transfer (no conversion)</div>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 p-3 border border-black cursor-pointer hover:bg-gray-100">
                    <input
                      type="radio"
                      name="paymentType"
                      value="ICP"
                      checked={paymentType === "ICP"}
                      onChange={(e) => setPaymentType(e.target.value as "ICP")}
                      className="w-4 h-4"
                    />
                    <div>
                      <div className="font-medium">Pay with ICP</div>
                      <div className="text-xs">Auto-convert to ckUSDC</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* ICP Conversion Info */}
              {paymentType === "ICP" && amount && (
                <div className="mb-6 p-3 border border-black bg-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm font-bold">Conversion Preview</span>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between">
                      <span>ICP Amount:</span>
                      <span className="font-mono">~{parseFloat(amount) * 0.1} ICP</span>
                    </div>
                    <div className="text-xs mt-1">
                      * Exchange rate is approximate and will be calculated at transaction time
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={handleClose}
                  className="flex-1 border border-black py-3 text-sm font-bold hover:bg-gray-100"
                >
                  CANCEL
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={!isValidAmount}
                  className="flex-1 bg-black text-white py-3 text-sm font-bold hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  CONTINUE
                </button>
              </div>
            </>
          )}

          {step === "confirm" && (
            <>
              {/* Confirmation */}
              <div className="mb-6 p-4 border border-black bg-white">
                <h3 className="font-bold text-sm mb-3">Confirm Top-Up</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span className="font-bold">${parseFloat(amount).toLocaleString()} ckUSDC</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Method:</span>
                    <span className="font-bold">{paymentType}</span>
                  </div>
                  {paymentType === "ICP" && (
                    <div className="flex justify-between">
                      <span>ICP Required:</span>
                      <span className="font-bold">~{(parseFloat(amount) * 0.1).toFixed(2)} ICP</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>New Progress:</span>
                    <span className="font-bold">
                      {Math.round(((startup.collateralDeposited + parseFloat(amount)) / startup.collateralRequired) * 100)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Warning */}
              <div className="mb-6 p-3 border border-black bg-white">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-bold mb-1">Important</div>
                    <ul className="text-xs space-y-1">
                      <li>• This transaction cannot be reversed</li>
                      <li>• Collateral will be locked for 36 months after activation</li>
                      <li>• Ensure you have sufficient balance in your wallet</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => setStep("input")}
                  className="flex-1 border border-black py-3 text-sm font-bold hover:bg-gray-100"
                >
                  BACK
                </button>
                <button
                  onClick={handleProcessTopUp}
                  className="flex-1 bg-black text-white py-3 text-sm font-bold hover:bg-gray-800"
                >
                  CONFIRM TOP-UP
                </button>
              </div>
            </>
          )}

          {step === "processing" && (
            <>
              {/* Processing */}
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-black border-t-transparent mx-auto mb-4"></div>
                <h3 className="font-bold text-lg mb-2">Processing Top-Up</h3>
                <p className="text-sm">
                  Please wait while we process your collateral top-up...
                </p>
              </div>
            </>
          )}

          {step === "success" && (
            <>
              {/* Success */}
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-black mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Top-Up Successful!</h3>
                <p className="text-sm mb-4">
                  Your collateral has been successfully topped up.
                </p>
                <div className="p-3 border border-black bg-white text-sm">
                  <div className="flex justify-between">
                    <span>New Progress:</span>
                    <span className="font-bold">
                      {Math.round(((startup.collateralDeposited + parseFloat(amount)) / startup.collateralRequired) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollateralTopUpModal;
