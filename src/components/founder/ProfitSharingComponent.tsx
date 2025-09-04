"use client";

import { useState, useEffect } from "react";
import {
  DollarSign,
  Calendar,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
  Users,
  FileText,
  Send,
  Download,
  Eye,
  History,
  Target,
  Wallet,
} from "lucide-react";

interface ProfitSharingPayment {
  id: string;
  month: string;
  year: number;
  dueDate: string;
  amount: number;
  status: "pending" | "paid" | "overdue" | "disputed";
  paidDate?: string;
  transactionHash?: string;
  investorVotes: {
    total: number;
    approved: number;
    rejected: number;
    abstained: number;
  };
  notes?: string;
}

interface ProfitSharingComponentProps {
  startupName: string;
  monthlyCommitment: number;
  totalInvestors: number;
  onPaymentSubmit?: (payment: ProfitSharingPayment) => void;
}

const ProfitSharingComponent = ({ 
  startupName, 
  monthlyCommitment, 
  totalInvestors,
  onPaymentSubmit 
}: ProfitSharingComponentProps) => {
  const [activeTab, setActiveTab] = useState("current");
  const [selectedPayment, setSelectedPayment] = useState<ProfitSharingPayment | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(monthlyCommitment);

  const payments: ProfitSharingPayment[] = [
    {
      id: "2024-12",
      month: "December",
      year: 2024,
      dueDate: "2024-12-21",
      amount: 1000,
      status: "paid",
      paidDate: "2024-12-20",
      transactionHash: "0x1234...5678",
      investorVotes: {
        total: 80,
        approved: 76,
        rejected: 2,
        abstained: 2,
      },
      notes: "Payment completed successfully with 95% approval rate",
    },
    {
      id: "2024-11",
      month: "November",
      year: 2024,
      dueDate: "2024-11-21",
      amount: 1000,
      status: "paid",
      paidDate: "2024-11-19",
      transactionHash: "0x9876...5432",
      investorVotes: {
        total: 80,
        approved: 78,
        rejected: 1,
        abstained: 1,
      },
      notes: "Excellent performance this month",
    },
    {
      id: "2024-10",
      month: "October",
      year: 2024,
      dueDate: "2024-10-21",
      amount: 1000,
      status: "paid",
      paidDate: "2024-10-21",
      transactionHash: "0xabcd...efgh",
      investorVotes: {
        total: 80,
        approved: 72,
        rejected: 5,
        abstained: 3,
      },
      notes: "On-time payment with good community feedback",
    },
    {
      id: "2025-01",
      month: "January",
      year: 2025,
      dueDate: "2025-01-21",
      amount: 1000,
      status: "pending",
      investorVotes: {
        total: 80,
        approved: 0,
        rejected: 0,
        abstained: 0,
      },
    },
  ];

  const currentPayment = payments.find(p => p.status === "pending");
  const paidPayments = payments.filter(p => p.status === "paid");
  const totalPaid = paidPayments.reduce((sum, p) => sum + p.amount, 0);
  const averageApprovalRate = paidPayments.length > 0 
    ? Math.round(paidPayments.reduce((sum, p) => sum + (p.investorVotes.approved / p.investorVotes.total * 100), 0) / paidPayments.length)
    : 0;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "overdue":
        return "bg-red-100 text-red-800 border-red-200";
      case "disputed":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "overdue":
        return <AlertCircle className="h-4 w-4" />;
      case "disputed":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const handlePaymentSubmit = () => {
    if (currentPayment) {
      const updatedPayment: ProfitSharingPayment = {
        ...currentPayment,
        status: "paid",
        paidDate: new Date().toISOString().split('T')[0],
        transactionHash: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 4)}`,
        amount: paymentAmount,
      };
      
      if (onPaymentSubmit) {
        onPaymentSubmit(updatedPayment);
      }
      
      setIsPaymentModalOpen(false);
    }
  };

  const daysUntilDue = currentPayment 
    ? Math.ceil((new Date(currentPayment.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-2 border-black p-6 bg-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">PROFIT SHARING - {startupName}</h3>
          <div className="text-sm text-gray-600">
            Monthly Commitment: ${monthlyCommitment.toLocaleString()} ckUSDC
          </div>
        </div>
        <p className="text-sm">
          Manage profit sharing payments to your investors with full transparency
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border-2 border-black p-4 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">${totalPaid.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Paid</div>
            </div>
            <DollarSign className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="border-2 border-black p-4 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">{paidPayments.length}</div>
              <div className="text-sm text-gray-600">Payments Made</div>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="border-2 border-black p-4 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">{averageApprovalRate}%</div>
              <div className="text-sm text-gray-600">Avg Approval</div>
            </div>
            <TrendingUp className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="border-2 border-black p-4 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">{totalInvestors}</div>
              <div className="text-sm text-gray-600">Active Investors</div>
            </div>
            <Users className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Current Payment Status */}
      {currentPayment && (
        <div className="border-2 border-black p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-bold">
              {currentPayment.month} {currentPayment.year} Payment
            </h4>
            <span className={`px-3 py-1 text-sm border-2 rounded ${getStatusColor(currentPayment.status)}`}>
              {currentPayment.status.toUpperCase()}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="border border-black p-3">
              <div className="text-sm font-bold">Amount Due</div>
              <div className="text-lg font-mono">${currentPayment.amount.toLocaleString()} ckUSDC</div>
            </div>
            <div className="border border-black p-3">
              <div className="text-sm font-bold">Due Date</div>
              <div className="text-lg">{new Date(currentPayment.dueDate).toLocaleDateString()}</div>
            </div>
            <div className="border border-black p-3">
              <div className="text-sm font-bold">Days Remaining</div>
              <div className={`text-lg font-bold ${daysUntilDue <= 3 ? 'text-red-600' : daysUntilDue <= 7 ? 'text-yellow-600' : 'text-green-600'}`}>
                {daysUntilDue} days
              </div>
            </div>
          </div>

          {currentPayment.status === "pending" && (
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsPaymentModalOpen(true)}
                className="bg-black text-white px-6 py-2 text-sm font-bold hover:bg-gray-800"
              >
                MAKE PAYMENT
              </button>
              <button className="border border-black px-6 py-2 text-sm font-bold hover:bg-gray-100">
                VIEW DETAILS
              </button>
            </div>
          )}
        </div>
      )}

      {/* Tabs */}
      <div className="flex space-x-1">
        {[
          { id: "current", label: "CURRENT PAYMENT" },
          { id: "history", label: "PAYMENT HISTORY" },
          { id: "analytics", label: "ANALYTICS" },
          { id: "investors", label: "INVESTOR FEEDBACK" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-bold border-2 ${
              activeTab === tab.id
                ? "border-black bg-white text-black"
                : "border-black bg-white text-black hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Current Payment Tab */}
      {activeTab === "current" && currentPayment && (
        <div className="space-y-6">
          <div className="border-2 border-black p-6 bg-white">
            <h4 className="text-lg font-bold mb-4">Payment Details</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-bold mb-3">Payment Information</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span className="font-mono">${currentPayment.amount.toLocaleString()} ckUSDC</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Due Date:</span>
                    <span>{new Date(currentPayment.dueDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="font-bold">{currentPayment.status.toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Investors:</span>
                    <span>{currentPayment.investorVotes.total} active</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="font-bold mb-3">Voting Status</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Approved:</span>
                    <span className="text-green-600 font-bold">{currentPayment.investorVotes.approved}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rejected:</span>
                    <span className="text-red-600 font-bold">{currentPayment.investorVotes.rejected}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Abstained:</span>
                    <span className="text-gray-600 font-bold">{currentPayment.investorVotes.abstained}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Participation:</span>
                    <span className="font-bold">
                      {Math.round(((currentPayment.investorVotes.approved + currentPayment.investorVotes.rejected + currentPayment.investorVotes.abstained) / currentPayment.investorVotes.total) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {currentPayment.status === "pending" && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200">
                <div className="flex items-start space-x-2">
                  <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-bold text-yellow-800">Payment Pending</div>
                    <div className="text-sm text-yellow-700">
                      Make your payment by {new Date(currentPayment.dueDate).toLocaleDateString()} to maintain good standing with investors.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Payment History Tab */}
      {activeTab === "history" && (
        <div className="space-y-4">
          {paidPayments.map((payment) => (
            <div key={payment.id} className="border-2 border-black p-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(payment.status)}
                  <h4 className="text-lg font-bold">
                    {payment.month} {payment.year}
                  </h4>
                  <span className={`px-3 py-1 text-sm border-2 rounded ${getStatusColor(payment.status)}`}>
                    {payment.status.toUpperCase()}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  Paid: {payment.paidDate && new Date(payment.paidDate).toLocaleDateString()}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="border border-black p-3">
                  <div className="text-sm font-bold">Amount</div>
                  <div className="text-lg font-mono">${payment.amount.toLocaleString()}</div>
                </div>
                <div className="border border-black p-3">
                  <div className="text-sm font-bold">Approval Rate</div>
                  <div className="text-lg font-bold text-green-600">
                    {Math.round((payment.investorVotes.approved / payment.investorVotes.total) * 100)}%
                  </div>
                </div>
                <div className="border border-black p-3">
                  <div className="text-sm font-bold">Votes</div>
                  <div className="text-lg">
                    {payment.investorVotes.approved}/{payment.investorVotes.total}
                  </div>
                </div>
                <div className="border border-black p-3">
                  <div className="text-sm font-bold">Transaction</div>
                  <div className="text-xs font-mono">{payment.transactionHash}</div>
                </div>
              </div>

              {payment.notes && (
                <div className="p-3 bg-gray-50 border border-gray-200">
                  <div className="text-sm">
                    <span className="font-bold">Notes:</span> {payment.notes}
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-3 mt-4">
                <button className="border border-black px-4 py-2 text-sm font-bold hover:bg-gray-100">
                  <Eye className="h-4 w-4 inline mr-1" />
                  VIEW DETAILS
                </button>
                <button className="border border-black px-4 py-2 text-sm font-bold hover:bg-gray-100">
                  <Download className="h-4 w-4 inline mr-1" />
                  DOWNLOAD RECEIPT
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === "analytics" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-black p-6 bg-white">
              <h4 className="text-lg font-bold mb-4">Payment Performance</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>On-Time Payments</span>
                    <span className="font-bold">{paidPayments.length}/{paidPayments.length} (100%)</span>
                  </div>
                  <div className="border border-black h-2">
                    <div className="bg-green-600 h-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Average Approval Rate</span>
                    <span className="font-bold">{averageApprovalRate}%</span>
                  </div>
                  <div className="border border-black h-2">
                    <div className="bg-blue-600 h-full" style={{ width: `${averageApprovalRate}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Total Amount Paid</span>
                    <span className="font-bold">${totalPaid.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-6 bg-white">
              <h4 className="text-lg font-bold mb-4">Trend Analysis</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-black">
                  <div>
                    <div className="font-bold">Payment Trend</div>
                    <div className="text-sm text-gray-600">Last 3 months</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">↗ Stable</div>
                    <div className="text-xs">Consistent payments</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border border-black">
                  <div>
                    <div className="font-bold">Investor Satisfaction</div>
                    <div className="text-sm text-gray-600">Based on votes</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{averageApprovalRate}%</div>
                    <div className="text-xs">High approval</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border border-black">
                  <div>
                    <div className="font-bold">Community Health</div>
                    <div className="text-sm text-gray-600">Active participation</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">95%</div>
                    <div className="text-xs">High engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-black p-6 bg-white">
            <h4 className="text-lg font-bold mb-4">Monthly Payment History</h4>
            <div className="space-y-3">
              {paidPayments.map((payment, index) => (
                <div key={payment.id} className="flex items-center justify-between p-3 border border-black">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold">{payment.month} {payment.year}</div>
                      <div className="text-sm text-gray-600">
                        Paid {payment.paidDate && new Date(payment.paidDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">${payment.amount.toLocaleString()}</div>
                    <div className="text-sm text-green-600">
                      {Math.round((payment.investorVotes.approved / payment.investorVotes.total) * 100)}% approval
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Investor Feedback Tab */}
      {activeTab === "investors" && (
        <div className="space-y-6">
          <div className="border-2 border-black p-6 bg-white">
            <h4 className="text-lg font-bold mb-4">Recent Investor Feedback</h4>
            <div className="space-y-4">
              <div className="p-4 border border-black">
                <div className="flex items-start justify-between mb-2">
                  <div className="font-bold">December 2024 Report</div>
                  <div className="text-sm text-gray-600">Dec 20, 2024</div>
                </div>
                <div className="text-sm mb-2">
                  <span className="font-bold">Approval Rate:</span> 95% (76/80 votes)
                </div>
                <div className="text-sm">
                  <span className="font-bold">Comments:</span> "Excellent performance this month. Revenue exceeded expectations and the team delivered on all milestones."
                </div>
              </div>
              
              <div className="p-4 border border-black">
                <div className="flex items-start justify-between mb-2">
                  <div className="font-bold">November 2024 Report</div>
                  <div className="text-sm text-gray-600">Nov 19, 2024</div>
                </div>
                <div className="text-sm mb-2">
                  <span className="font-bold">Approval Rate:</span> 97.5% (78/80 votes)
                </div>
                <div className="text-sm">
                  <span className="font-bold">Comments:</span> "Outstanding month! The new product launch was successful and customer feedback is very positive."
                </div>
              </div>
              
              <div className="p-4 border border-black">
                <div className="flex items-start justify-between mb-2">
                  <div className="font-bold">October 2024 Report</div>
                  <div className="text-sm text-gray-600">Oct 21, 2024</div>
                </div>
                <div className="text-sm mb-2">
                  <span className="font-bold">Approval Rate:</span> 90% (72/80 votes)
                </div>
                <div className="text-sm">
                  <span className="font-bold">Comments:</span> "Good progress despite market challenges. Looking forward to seeing the improvements mentioned in the forward-looking section."
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-black p-6 bg-white">
            <h4 className="text-lg font-bold mb-4">Community Engagement</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-black p-4">
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-sm font-bold">Voting Participation</div>
                <div className="text-xs text-gray-600">Average over last 3 months</div>
              </div>
              <div className="border border-black p-4">
                <div className="text-2xl font-bold text-green-600">94%</div>
                <div className="text-sm font-bold">Average Approval</div>
                <div className="text-xs text-gray-600">Community satisfaction</div>
              </div>
              <div className="border border-black p-4">
                <div className="text-2xl font-bold text-purple-600">23</div>
                <div className="text-sm font-bold">Active Comments</div>
                <div className="text-xs text-gray-600">This month</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 max-w-md w-full mx-4 border-2 border-black">
            <h3 className="text-lg font-bold mb-4">Make Payment</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">
                  Payment Amount (ckUSDC)
                </label>
                <input
                  type="number"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(Number(e.target.value))}
                  className="w-full border-2 border-black p-3 text-lg font-mono"
                />
              </div>
              
              <div className="p-3 bg-gray-50 border border-gray-200">
                <div className="text-sm">
                  <div className="font-bold">Payment Summary:</div>
                  <div>Amount: ${paymentAmount.toLocaleString()} ckUSDC</div>
                  <div>Recipients: {totalInvestors} investors</div>
                  <div>Per investor: ${(paymentAmount / totalInvestors).toFixed(2)} ckUSDC</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 mt-6">
              <button
                onClick={handlePaymentSubmit}
                className="bg-black text-white px-6 py-2 text-sm font-bold hover:bg-gray-800"
              >
                CONFIRM PAYMENT
              </button>
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="border border-black px-6 py-2 text-sm font-bold hover:bg-gray-100"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfitSharingComponent;
