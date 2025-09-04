"use client";

import { useState } from "react";
import {
  DollarSign,
  AlertCircle,
  CheckCircle,
  Clock,
  FileText,
  Download,
  Send,
  X,
  Info,
  Calculator,
} from "lucide-react";

interface WithdrawalRequest {
  id: string;
  amount: number;
  purpose: string;
  category: string;
  description: string;
  status: "pending" | "approved" | "rejected" | "processing";
  requestedDate: string;
  approvedDate?: string;
  processedDate?: string;
  approverNotes?: string;
}

interface FundingWithdrawalModalProps {
  isOpen: boolean;
  onClose: () => void;
  startupName: string;
  availableFunds: number;
  totalRaised: number;
  onWithdrawalRequest: (request: WithdrawalRequest) => void;
}

const FundingWithdrawalModal = ({
  isOpen,
  onClose,
  startupName,
  availableFunds,
  totalRaised,
  onWithdrawalRequest,
}: FundingWithdrawalModalProps) => {
  const [activeTab, setActiveTab] = useState("request");
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  const [purpose, setPurpose] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const withdrawalCategories = [
    { id: "equipment", label: "Equipment & Infrastructure", description: "Hardware, software, tools" },
    { id: "marketing", label: "Marketing & Advertising", description: "Campaigns, promotions, branding" },
    { id: "operations", label: "Operations & Logistics", description: "Inventory, supplies, utilities" },
    { id: "personnel", label: "Personnel & Training", description: "Salaries, benefits, development" },
    { id: "research", label: "R&D & Innovation", description: "Research, development, testing" },
    { id: "expansion", label: "Business Expansion", description: "New markets, locations, products" },
    { id: "legal", label: "Legal & Compliance", description: "Legal fees, permits, compliance" },
    { id: "other", label: "Other Business Needs", description: "Miscellaneous business expenses" },
  ];

  const recentRequests: WithdrawalRequest[] = [
    {
      id: "REQ-001",
      amount: 5000,
      purpose: "Equipment Purchase",
      category: "equipment",
      description: "Purchase of new manufacturing equipment to increase production capacity",
      status: "approved",
      requestedDate: "2024-12-15",
      approvedDate: "2024-12-16",
      processedDate: "2024-12-17",
      approverNotes: "Approved - Equipment will increase production efficiency by 30%"
    },
    {
      id: "REQ-002",
      amount: 2500,
      purpose: "Marketing Campaign",
      category: "marketing",
      description: "Digital marketing campaign for Q1 2025 product launch",
      status: "processing",
      requestedDate: "2024-12-20",
      approvedDate: "2024-12-21",
    },
    {
      id: "REQ-003",
      amount: 8000,
      purpose: "Inventory Stock",
      category: "operations",
      description: "Bulk purchase of raw materials for next quarter production",
      status: "pending",
      requestedDate: "2024-12-25",
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 border-green-200";
      case "processing":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4" />;
      case "processing":
        return <Clock className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "rejected":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const handleSubmitRequest = async () => {
    if (!withdrawalAmount || !purpose || !category || !description) {
      alert("Please fill in all required fields");
      return;
    }

    if (withdrawalAmount > availableFunds) {
      alert("Withdrawal amount exceeds available funds");
      return;
    }

    setIsSubmitting(true);

    const newRequest: WithdrawalRequest = {
      id: `REQ-${Date.now()}`,
      amount: withdrawalAmount,
      purpose,
      category,
      description,
      status: "pending",
      requestedDate: new Date().toISOString().split('T')[0],
    };

    // Simulate API call
    setTimeout(() => {
      onWithdrawalRequest(newRequest);
      setIsSubmitting(false);
      onClose();
      // Reset form
      setWithdrawalAmount(0);
      setPurpose("");
      setCategory("");
      setDescription("");
    }, 2000);
  };

  const selectedCategory = withdrawalCategories.find(cat => cat.id === category);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white max-w-4xl w-full mx-4 border-2 border-black max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-black">
          <h2 className="text-xl font-bold">FUNDING WITHDRAWAL - {startupName}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b-2 border-black">
          {[
            { id: "request", label: "NEW REQUEST" },
            { id: "history", label: "REQUEST HISTORY" },
            { id: "guidelines", label: "GUIDELINES" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-bold border-r-2 border-black ${
                activeTab === tab.id
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* New Request Tab */}
          {activeTab === "request" && (
            <div className="space-y-6">
              {/* Fund Status */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border-2 border-black p-4 bg-white">
                  <div className="text-sm font-bold">Total Raised</div>
                  <div className="text-2xl font-bold">${totalRaised.toLocaleString()}</div>
                  <div className="text-xs text-gray-600">ckUSDC</div>
                </div>
                <div className="border-2 border-black p-4 bg-white">
                  <div className="text-sm font-bold">Available Funds</div>
                  <div className="text-2xl font-bold text-green-600">${availableFunds.toLocaleString()}</div>
                  <div className="text-xs text-gray-600">80% of raised funds</div>
                </div>
                <div className="border-2 border-black p-4 bg-white">
                  <div className="text-sm font-bold">Platform Reserve</div>
                  <div className="text-2xl font-bold text-blue-600">${(totalRaised - availableFunds).toLocaleString()}</div>
                  <div className="text-xs text-gray-600">20% locked for protection</div>
                </div>
              </div>

              {/* Withdrawal Form */}
              <div className="border-2 border-black p-6 bg-white">
                <h3 className="text-lg font-bold mb-4">Withdrawal Request Form</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Amount (ckUSDC) *
                    </label>
                    <input
                      type="number"
                      value={withdrawalAmount || ''}
                      onChange={(e) => setWithdrawalAmount(Number(e.target.value))}
                      max={availableFunds}
                      className="w-full border-2 border-black p-3 text-lg font-mono"
                      placeholder="Enter withdrawal amount"
                    />
                    <div className="text-xs text-gray-600 mt-1">
                      Maximum: ${availableFunds.toLocaleString()} ckUSDC
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Purpose *
                    </label>
                    <input
                      type="text"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="w-full border-2 border-black p-3"
                      placeholder="Brief purpose of withdrawal"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full border-2 border-black p-3 bg-white"
                    >
                      <option value="">Select category</option>
                      {withdrawalCategories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                    {selectedCategory && (
                      <div className="text-xs text-gray-600 mt-1">
                        {selectedCategory.description}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Detailed Description *
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                      className="w-full border-2 border-black p-3"
                      placeholder="Provide detailed explanation of how the funds will be used, expected outcomes, and timeline"
                    />
                  </div>
                </div>

                {/* Summary */}
                {withdrawalAmount > 0 && (
                  <div className="mt-6 p-4 bg-gray-50 border border-gray-200">
                    <h4 className="font-bold mb-2">Request Summary</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Amount:</span>
                        <span className="font-mono">${withdrawalAmount.toLocaleString()} ckUSDC</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Purpose:</span>
                        <span>{purpose}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Category:</span>
                        <span>{selectedCategory?.label || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Remaining Funds:</span>
                        <span className="font-mono">${(availableFunds - withdrawalAmount).toLocaleString()} ckUSDC</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-3 mt-6">
                  <button
                    onClick={handleSubmitRequest}
                    disabled={isSubmitting || !withdrawalAmount || !purpose || !category || !description}
                    className="bg-black text-white px-6 py-2 text-sm font-bold hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="h-4 w-4 inline mr-2 animate-spin" />
                        SUBMITTING...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 inline mr-2" />
                        SUBMIT REQUEST
                      </>
                    )}
                  </button>
                  <button
                    onClick={onClose}
                    className="border border-black px-6 py-2 text-sm font-bold hover:bg-gray-100"
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Request History Tab */}
          {activeTab === "history" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Withdrawal Request History</h3>
                <button className="border border-black px-4 py-2 text-sm font-bold hover:bg-gray-100">
                  <Download className="h-4 w-4 inline mr-2" />
                  EXPORT
                </button>
              </div>

              {recentRequests.map((request) => (
                <div key={request.id} className="border-2 border-black p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(request.status)}
                      <h4 className="text-lg font-bold">{request.purpose}</h4>
                      <span className={`px-3 py-1 text-sm border-2 rounded ${getStatusColor(request.status)}`}>
                        {request.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">${request.amount.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Request #{request.id}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="border border-black p-3">
                      <div className="text-sm font-bold">Category</div>
                      <div className="text-sm">{withdrawalCategories.find(cat => cat.id === request.category)?.label}</div>
                    </div>
                    <div className="border border-black p-3">
                      <div className="text-sm font-bold">Requested Date</div>
                      <div className="text-sm">{new Date(request.requestedDate).toLocaleDateString()}</div>
                    </div>
                    <div className="border border-black p-3">
                      <div className="text-sm font-bold">Status</div>
                      <div className="text-sm">{request.status.toUpperCase()}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-bold">Description</div>
                    <div className="text-sm text-gray-600">{request.description}</div>
                  </div>

                  {request.approverNotes && (
                    <div className="p-3 bg-gray-50 border border-gray-200">
                      <div className="text-sm font-bold">Approver Notes</div>
                      <div className="text-sm text-gray-600">{request.approverNotes}</div>
                    </div>
                  )}

                  <div className="flex items-center space-x-3 mt-4">
                    <button className="border border-black px-4 py-2 text-sm font-bold hover:bg-gray-100">
                      <FileText className="h-4 w-4 inline mr-1" />
                      VIEW DETAILS
                    </button>
                    {request.status === "approved" && (
                      <button className="border border-black px-4 py-2 text-sm font-bold hover:bg-gray-100">
                        <Download className="h-4 w-4 inline mr-1" />
                        DOWNLOAD RECEIPT
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Guidelines Tab */}
          {activeTab === "guidelines" && (
            <div className="space-y-6">
              <div className="border-2 border-black p-6 bg-white">
                <h3 className="text-lg font-bold mb-4">Withdrawal Guidelines</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200">
                    <div className="flex items-start space-x-2">
                      <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-bold text-blue-800">Available Funds</div>
                        <div className="text-sm text-blue-700">
                          You can withdraw up to 80% of your total raised funds. The remaining 20% is held as a platform reserve for investor protection.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Approved Use Cases</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Equipment and infrastructure purchases</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Marketing and advertising campaigns</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Operational expenses and inventory</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Personnel costs and training</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Research and development activities</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Business expansion initiatives</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Prohibited Uses</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                        <span>Personal expenses unrelated to business</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                        <span>Speculative investments or trading</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                        <span>Debt repayment without approval</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                        <span>Dividend payments to founders</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Approval Process</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                        <span>Submit detailed withdrawal request</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                        <span>Platform review (1-3 business days)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                        <span>Investor community notification</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                        <span>Funds transfer (1-2 business days)</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <div className="font-bold text-yellow-800">Important Note</div>
                        <div className="text-sm text-yellow-700">
                          All withdrawal requests are subject to platform review and investor community notification. 
                          Misuse of funds may result in contract termination and legal action.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FundingWithdrawalModal;
