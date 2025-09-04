"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  FileText,
  Upload,
  Save,
  Send,
  AlertCircle,
  CheckCircle,
  Image,
  Video,
  DollarSign,
  TrendingUp,
  Users,
  Target,
  Clock,
} from "lucide-react";

interface MonthlyReport {
  id: string;
  month: string;
  year: number;
  status: "draft" | "submitted" | "under_review" | "approved" | "rejected";
  submittedAt?: string;
  dueDate: string;
  financialData: {
    monthlyRevenue: number;
    monthlyExpenses: number;
    netProfit: number;
    cashFlow: number;
    varianceFromProjection: number;
  };
  operationalUpdates: {
    keyAchievements: string[];
    milestonesReached: string[];
    challengesFaced: string[];
    solutionsImplemented: string[];
  };
  visualEvidence: {
    images: File[];
    videos: File[];
  };
  marketConditions: {
    competitiveLandscape: string;
    marketChanges: string;
    customerFeedback: string;
    demandShifts: string;
  };
  forwardLooking: {
    nextMonthPlans: string;
    expectedChallenges: string;
    resourceNeeds: string;
    growthProjections: string;
  };
  communication: {
    investorMessages: string;
    communityUpdates: string;
    partnershipNews: string;
    teamChanges: string;
  };
}

interface MonthlyReportsComponentProps {
  startupName: string;
  onReportSubmit?: (report: MonthlyReport) => void;
  onReportSave?: (report: MonthlyReport) => void;
}

const MonthlyReportsComponent = ({ startupName, onReportSubmit, onReportSave }: MonthlyReportsComponentProps) => {
  const [activeTab, setActiveTab] = useState("current");
  const [isEditing, setIsEditing] = useState(false);
  const [currentReport, setCurrentReport] = useState<MonthlyReport | null>(null);
  const [autoSaveStatus, setAutoSaveStatus] = useState<"saved" | "saving" | "error">("saved");

  const reports = [
    {
      id: "2024-12",
      month: "December",
      year: 2024,
      status: "approved" as const,
      submittedAt: "2024-12-10",
      dueDate: "2024-12-10",
      financialData: {
        monthlyRevenue: 15000,
        monthlyExpenses: 10000,
        netProfit: 5000,
        cashFlow: 4500,
        varianceFromProjection: 12,
      },
      operationalUpdates: {
        keyAchievements: ["Launched new product line", "Expanded to 3 new markets"],
        milestonesReached: ["Reached 1000 customers", "Achieved break-even"],
        challengesFaced: ["Supply chain delays", "Increased competition"],
        solutionsImplemented: ["Diversified suppliers", "Enhanced marketing strategy"],
      },
      visualEvidence: { images: [], videos: [] },
      marketConditions: {
        competitiveLandscape: "Increased competition from 2 new entrants",
        marketChanges: "Growing demand for sustainable products",
        customerFeedback: "Positive feedback on new features",
        demandShifts: "Shift towards premium products",
      },
      forwardLooking: {
        nextMonthPlans: "Launch mobile app and expand team",
        expectedChallenges: "Seasonal demand fluctuations",
        resourceNeeds: "Additional marketing budget and developers",
        growthProjections: "20% revenue increase expected",
      },
      communication: {
        investorMessages: "Thank you for continued support",
        communityUpdates: "New partnership announcement coming",
        partnershipNews: "Signed agreement with major retailer",
        teamChanges: "Hired 2 new developers",
      },
    },
    {
      id: "2024-11",
      month: "November",
      year: 2024,
      status: "approved" as const,
      submittedAt: "2024-11-08",
      dueDate: "2024-11-10",
      financialData: {
        monthlyRevenue: 12000,
        monthlyExpenses: 9500,
        netProfit: 2500,
        cashFlow: 2000,
        varianceFromProjection: -5,
      },
      operationalUpdates: {
        keyAchievements: ["Improved operational efficiency", "Reduced costs by 15%"],
        milestonesReached: ["Reached 800 customers"],
        challengesFaced: ["Staff turnover", "Equipment maintenance"],
        solutionsImplemented: ["Improved retention programs", "Preventive maintenance schedule"],
      },
      visualEvidence: { images: [], videos: [] },
      marketConditions: {
        competitiveLandscape: "Stable competitive environment",
        marketChanges: "Steady market growth",
        customerFeedback: "High satisfaction ratings",
        demandShifts: "Consistent demand patterns",
      },
      forwardLooking: {
        nextMonthPlans: "Focus on product development",
        expectedChallenges: "Year-end budget constraints",
        resourceNeeds: "Additional equipment",
        growthProjections: "15% growth expected",
      },
      communication: {
        investorMessages: "Strong performance this month",
        communityUpdates: "Product roadmap update",
        partnershipNews: "Exploring new partnerships",
        teamChanges: "No changes this month",
      },
    },
    {
      id: "2024-10",
      month: "October",
      year: 2024,
      status: "draft" as const,
      dueDate: "2024-10-10",
      financialData: {
        monthlyRevenue: 8000,
        monthlyExpenses: 7000,
        netProfit: 1000,
        cashFlow: 800,
        varianceFromProjection: -10,
      },
      operationalUpdates: {
        keyAchievements: ["Initial product launch"],
        milestonesReached: ["First 100 customers"],
        challengesFaced: ["Market entry difficulties"],
        solutionsImplemented: ["Pivot strategy"],
      },
      visualEvidence: { images: [], videos: [] },
      marketConditions: {
        competitiveLandscape: "High competition",
        marketChanges: "Market saturation",
        customerFeedback: "Mixed feedback",
        demandShifts: "Price sensitivity",
      },
      forwardLooking: {
        nextMonthPlans: "Improve product features",
        expectedChallenges: "Customer acquisition",
        resourceNeeds: "Marketing budget",
        growthProjections: "Modest growth",
      },
      communication: {
        investorMessages: "Working on improvements",
        communityUpdates: "Product iteration",
        partnershipNews: "No partnerships yet",
        teamChanges: "Core team established",
      },
    },
  ];

  // Auto-save functionality
  useEffect(() => {
    if (isEditing && currentReport) {
      const autoSaveInterval = setInterval(() => {
        setAutoSaveStatus("saving");
        // Simulate auto-save
        setTimeout(() => {
          setAutoSaveStatus("saved");
        }, 1000);
      }, 30000); // Auto-save every 30 seconds

      return () => clearInterval(autoSaveInterval);
    }
  }, [isEditing, currentReport]);

  const handleStartNewReport = () => {
    const now = new Date();
    const currentMonth = now.toLocaleString('default', { month: 'long' });
    const currentYear = now.getFullYear();
    const dueDate = new Date(now.getFullYear(), now.getMonth() + 1, 10).toISOString().split('T')[0];

    const newReport: MonthlyReport = {
      id: `${currentYear}-${now.getMonth() + 1}`,
      month: currentMonth,
      year: currentYear,
      status: "draft",
      dueDate,
      financialData: {
        monthlyRevenue: 0,
        monthlyExpenses: 0,
        netProfit: 0,
        cashFlow: 0,
        varianceFromProjection: 0,
      },
      operationalUpdates: {
        keyAchievements: [],
        milestonesReached: [],
        challengesFaced: [],
        solutionsImplemented: [],
      },
      visualEvidence: {
        images: [],
        videos: [],
      },
      marketConditions: {
        competitiveLandscape: "",
        marketChanges: "",
        customerFeedback: "",
        demandShifts: "",
      },
      forwardLooking: {
        nextMonthPlans: "",
        expectedChallenges: "",
        resourceNeeds: "",
        growthProjections: "",
      },
      communication: {
        investorMessages: "",
        communityUpdates: "",
        partnershipNews: "",
        teamChanges: "",
      },
    };

    setCurrentReport(newReport);
    setIsEditing(true);
  };

  const handleSaveDraft = () => {
    setAutoSaveStatus("saving");
    // Simulate save
    setTimeout(() => {
      setAutoSaveStatus("saved");
      if (currentReport && onReportSave) {
        onReportSave(currentReport);
      }
    }, 1000);
  };

  const handleSubmitReport = () => {
    if (currentReport) {
      currentReport.status = "submitted";
      currentReport.submittedAt = new Date().toISOString();
      setIsEditing(false);
      if (onReportSubmit) {
        onReportSubmit(currentReport);
      }
      setCurrentReport(null);
    }
  };

  const handleFileUpload = (type: "images" | "videos", files: FileList | null) => {
    if (files && currentReport) {
      const fileArray = Array.from(files);
      setCurrentReport({
        ...currentReport,
        visualEvidence: {
          ...currentReport.visualEvidence,
          [type]: [...currentReport.visualEvidence[type], ...fileArray],
        },
      });
    }
  };

  const removeFile = (type: "images" | "videos", index: number) => {
    if (currentReport) {
      const updatedFiles = currentReport.visualEvidence[type].filter((_, i) => i !== index);
      setCurrentReport({
        ...currentReport,
        visualEvidence: {
          ...currentReport.visualEvidence,
          [type]: updatedFiles,
        },
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-white text-black border-black";
      case "submitted":
        return "bg-white text-black border-black";
      case "under_review":
        return "bg-white text-black border-black";
      case "rejected":
        return "bg-white text-black border-black";
      case "draft":
        return "bg-white text-black border-black";
      default:
        return "bg-white text-black border-black";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4" />;
      case "submitted":
        return <Clock className="h-4 w-4" />;
      case "under_review":
        return <FileText className="h-4 w-4" />;
      case "rejected":
        return <AlertCircle className="h-4 w-4" />;
      case "draft":
        return <Save className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-2 border-black p-6 bg-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">MONTHLY REPORTS - {startupName}</h3>
        </div>
        <p className="text-sm">
          Submit comprehensive monthly progress reports for investor transparency
        </p>
      </div>

      {/* Auto-save status */}
      {isEditing && (
        <div className="p-3 border border-black bg-white">
          <div className="flex items-center space-x-2">
            {autoSaveStatus === "saving" && (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></div>
                <span className="text-sm">Saving...</span>
              </>
            )}
            {autoSaveStatus === "saved" && (
              <>
                <CheckCircle className="h-4 w-4 text-black" />
                <span className="text-sm">Draft saved</span>
              </>
            )}
            {autoSaveStatus === "error" && (
              <>
                <AlertCircle className="h-4 w-4 text-black" />
                <span className="text-sm">Save failed</span>
              </>
            )}
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex space-x-1">
        {[
          { id: "current", label: "CURRENT MONTH" },
          { id: "history", label: "HISTORY" },
          { id: "templates", label: "TEMPLATES" },
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

      {/* Current Month Tab */}
      {activeTab === "current" && (
        <div className="space-y-6">
          {!isEditing ? (
            <div className="border-2 border-black p-8 bg-white text-center">
              <FileText className="h-16 w-16 mx-auto mb-4 text-black" />
              <h2 className="text-2xl font-bold mb-4">January 2025 Report</h2>
              <p className="text-sm mb-6">
                Due: January 10, 2025 • {Math.ceil((new Date("2025-01-10").getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days remaining
              </p>
              <button
                onClick={handleStartNewReport}
                className="bg-black text-white px-8 py-3 text-sm font-bold hover:bg-gray-800"
              >
                START NEW REPORT
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Report Header */}
              <div className="border-2 border-black p-6 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">
                    {currentReport?.month} {currentReport?.year} Report
                  </h2>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={handleSaveDraft}
                      className="border border-black px-4 py-2 text-sm font-bold hover:bg-gray-100"
                    >
                      SAVE DRAFT
                    </button>
                    <button
                      onClick={handleSubmitReport}
                      className="bg-black text-white px-4 py-2 text-sm font-bold hover:bg-gray-800"
                    >
                      SUBMIT REPORT
                    </button>
                  </div>
                </div>
                <div className="text-sm">
                  Due: {currentReport?.dueDate} • Status: Draft
                </div>
              </div>

              {/* Financial Performance */}
              <div className="border-2 border-black p-6 bg-white">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Financial Performance
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Monthly Revenue (ckUSDC)
                      </label>
                      <input
                        type="number"
                        value={currentReport?.financialData.monthlyRevenue || 0}
                        onChange={(e) => setCurrentReport({
                          ...currentReport!,
                          financialData: {
                            ...currentReport!.financialData,
                            monthlyRevenue: Number(e.target.value),
                          },
                        })}
                        className="w-full border-2 border-black p-3 text-lg font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Monthly Expenses (ckUSDC)
                      </label>
                      <input
                        type="number"
                        value={currentReport?.financialData.monthlyExpenses || 0}
                        onChange={(e) => setCurrentReport({
                          ...currentReport!,
                          financialData: {
                            ...currentReport!.financialData,
                            monthlyExpenses: Number(e.target.value),
                          },
                        })}
                        className="w-full border-2 border-black p-3 text-lg font-mono"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Net Profit (ckUSDC)
                      </label>
                      <input
                        type="number"
                        value={currentReport?.financialData.netProfit || 0}
                        onChange={(e) => setCurrentReport({
                          ...currentReport!,
                          financialData: {
                            ...currentReport!.financialData,
                            netProfit: Number(e.target.value),
                          },
                        })}
                        className="w-full border-2 border-black p-3 text-lg font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Cash Flow (ckUSDC)
                      </label>
                      <input
                        type="number"
                        value={currentReport?.financialData.cashFlow || 0}
                        onChange={(e) => setCurrentReport({
                          ...currentReport!,
                          financialData: {
                            ...currentReport!.financialData,
                            cashFlow: Number(e.target.value),
                          },
                        })}
                        className="w-full border-2 border-black p-3 text-lg font-mono"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-bold mb-2">
                    Variance from Projection (%)
                  </label>
                  <input
                    type="number"
                    value={currentReport?.financialData.varianceFromProjection || 0}
                    onChange={(e) => setCurrentReport({
                      ...currentReport!,
                      financialData: {
                        ...currentReport!.financialData,
                        varianceFromProjection: Number(e.target.value),
                      },
                    })}
                    className="w-full border-2 border-black p-3 text-lg font-mono"
                  />
                </div>
              </div>

              {/* Operational Updates */}
              <div className="border-2 border-black p-6 bg-white">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Operational Updates
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Key Achievements
                    </label>
                    <textarea
                      value={currentReport?.operationalUpdates.keyAchievements.join('\n') || ''}
                      onChange={(e) => setCurrentReport({
                        ...currentReport!,
                        operationalUpdates: {
                          ...currentReport!.operationalUpdates,
                          keyAchievements: e.target.value.split('\n').filter(line => line.trim()),
                        },
                      })}
                      rows={4}
                      className="w-full border-2 border-black p-3"
                      placeholder="List key achievements this month..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Milestones Reached
                    </label>
                    <textarea
                      value={currentReport?.operationalUpdates.milestonesReached.join('\n') || ''}
                      onChange={(e) => setCurrentReport({
                        ...currentReport!,
                        operationalUpdates: {
                          ...currentReport!.operationalUpdates,
                          milestonesReached: e.target.value.split('\n').filter(line => line.trim()),
                        },
                      })}
                      rows={4}
                      className="w-full border-2 border-black p-3"
                      placeholder="List milestones reached this month..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Challenges Faced
                    </label>
                    <textarea
                      value={currentReport?.operationalUpdates.challengesFaced.join('\n') || ''}
                      onChange={(e) => setCurrentReport({
                        ...currentReport!,
                        operationalUpdates: {
                          ...currentReport!.operationalUpdates,
                          challengesFaced: e.target.value.split('\n').filter(line => line.trim()),
                        },
                      })}
                      rows={4}
                      className="w-full border-2 border-black p-3"
                      placeholder="List challenges faced this month..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Solutions Implemented
                    </label>
                    <textarea
                      value={currentReport?.operationalUpdates.solutionsImplemented.join('\n') || ''}
                      onChange={(e) => setCurrentReport({
                        ...currentReport!,
                        operationalUpdates: {
                          ...currentReport!.operationalUpdates,
                          solutionsImplemented: e.target.value.split('\n').filter(line => line.trim()),
                        },
                      })}
                      rows={4}
                      className="w-full border-2 border-black p-3"
                      placeholder="List solutions implemented this month..."
                    />
                  </div>
                </div>
              </div>

              {/* Visual Evidence */}
              <div className="border-2 border-black p-6 bg-white">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Visual Evidence
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Upload Images
                    </label>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleFileUpload("images", e.target.files)}
                      className="w-full border-2 border-black p-3"
                    />
                    {currentReport?.visualEvidence.images && currentReport.visualEvidence.images.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {currentReport.visualEvidence.images.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 border border-black">
                            <span className="text-sm">{file.name}</span>
                            <button
                              onClick={() => removeFile("images", index)}
                              className="text-sm text-black hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Upload Videos
                    </label>
                    <input
                      type="file"
                      multiple
                      accept="video/*"
                      onChange={(e) => handleFileUpload("videos", e.target.files)}
                      className="w-full border-2 border-black p-3"
                    />
                    {currentReport?.visualEvidence.videos && currentReport.visualEvidence.videos.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {currentReport.visualEvidence.videos.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 border border-black">
                            <span className="text-sm">{file.name}</span>
                            <button
                              onClick={() => removeFile("videos", index)}
                              className="text-sm text-black hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Market Conditions */}
              <div className="border-2 border-black p-6 bg-white">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Market Conditions
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Competitive Landscape
                    </label>
                    <textarea
                      value={currentReport?.marketConditions.competitiveLandscape || ''}
                      onChange={(e) => setCurrentReport({
                        ...currentReport!,
                        marketConditions: {
                          ...currentReport!.marketConditions,
                          competitiveLandscape: e.target.value,
                        },
                      })}
                      rows={3}
                      className="w-full border-2 border-black p-3"
                      placeholder="Describe changes in competitive landscape..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Market Changes
                    </label>
                    <textarea
                      value={currentReport?.marketConditions.marketChanges || ''}
                      onChange={(e) => setCurrentReport({
                        ...currentReport!,
                        marketConditions: {
                          ...currentReport!.marketConditions,
                          marketChanges: e.target.value,
                        },
                      })}
                      rows={3}
                      className="w-full border-2 border-black p-3"
                      placeholder="Describe market changes observed..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Customer Feedback
                    </label>
                    <textarea
                      value={currentReport?.marketConditions.customerFeedback || ''}
                      onChange={(e) => setCurrentReport({
                        ...currentReport!,
                        marketConditions: {
                          ...currentReport!.marketConditions,
                          customerFeedback: e.target.value,
                        },
                      })}
                      rows={3}
                      className="w-full border-2 border-black p-3"
                      placeholder="Share key customer feedback..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Demand Shifts
                    </label>
                    <textarea
                      value={currentReport?.marketConditions.demandShifts || ''}
                      onChange={(e) => setCurrentReport({
                        ...currentReport!,
                        marketConditions: {
                          ...currentReport!.marketConditions,
                          demandShifts: e.target.value,
                        },
                      })}
                      rows={3}
                      className="w-full border-2 border-black p-3"
                      placeholder="Describe any demand shifts..."
                    />
                  </div>
                </div>
              </div>

              {/* Forward Looking */}
              <div className="border-2 border-black p-6 bg-white">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Forward Looking
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Next Month Plans
                    </label>
                    <textarea
                      value={currentReport?.forwardLooking.nextMonthPlans || ''}
                      onChange={(e) => setCurrentReport({
                        ...currentReport!,
                        forwardLooking: {
                          ...currentReport!.forwardLooking,
                          nextMonthPlans: e.target.value,
                        },
                      })}
                      rows={3}
                      className="w-full border-2 border-black p-3"
                      placeholder="Outline plans for next month..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Expected Challenges
                    </label>
                    <textarea
                      value={currentReport?.forwardLooking.expectedChallenges || ''}
                      onChange={(e) => setCurrentReport({
                        ...currentReport!,
                        forwardLooking: {
                          ...currentReport!.forwardLooking,
                          expectedChallenges: e.target.value,
                        },
                      })}
                      rows={3}
                      className="w-full border-2 border-black p-3"
                      placeholder="Identify expected challenges..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Resource Needs
                    </label>
                    <textarea
                      value={currentReport?.forwardLooking.resourceNeeds || ''}
                      onChange={(e) => setCurrentReport({
                        ...currentReport!,
                        forwardLooking: {
                          ...currentReport!.forwardLooking,
                          resourceNeeds: e.target.value,
                        },
                      })}
                      rows={3}
                      className="w-full border-2 border-black p-3"
                      placeholder="Specify resource needs..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Growth Projections
                    </label>
                    <textarea
                      value={currentReport?.forwardLooking.growthProjections || ''}
                      onChange={(e) => setCurrentReport({
                        ...currentReport!,
                        forwardLooking: {
                          ...currentReport!.forwardLooking,
                          growthProjections: e.target.value,
                        },
                      })}
                      rows={3}
                      className="w-full border-2 border-black p-3"
                      placeholder="Share growth projections..."
                    />
                  </div>
                </div>
              </div>

              {/* Communication */}
              <div className="border-2 border-black p-6 bg-white">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Communication
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Investor Messages
                    </label>
                    <textarea
                      value={currentReport?.communication.investorMessages || ''}
                      onChange={(e) => setCurrentReport({
                        ...currentReport!,
                        communication: {
                          ...currentReport!.communication,
                          investorMessages: e.target.value,
                        },
                      })}
                      rows={3}
                      className="w-full border-2 border-black p-3"
                      placeholder="Message to investors..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Community Updates
                    </label>
                    <textarea
                      value={currentReport?.communication.communityUpdates || ''}
                      onChange={(e) => setCurrentReport({
                        ...currentReport!,
                        communication: {
                          ...currentReport!.communication,
                          communityUpdates: e.target.value,
                        },
                      })}
                      rows={3}
                      className="w-full border-2 border-black p-3"
                      placeholder="Updates for the community..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Partnership News
                    </label>
                    <textarea
                      value={currentReport?.communication.partnershipNews || ''}
                      onChange={(e) => setCurrentReport({
                        ...currentReport!,
                        communication: {
                          ...currentReport!.communication,
                          partnershipNews: e.target.value,
                        },
                      })}
                      rows={3}
                      className="w-full border-2 border-black p-3"
                      placeholder="Partnership announcements..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Team Changes
                    </label>
                    <textarea
                      value={currentReport?.communication.teamChanges || ''}
                      onChange={(e) => setCurrentReport({
                        ...currentReport!,
                        communication: {
                          ...currentReport!.communication,
                          teamChanges: e.target.value,
                        },
                      })}
                      rows={3}
                      className="w-full border-2 border-black p-3"
                      placeholder="Team updates..."
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* History Tab */}
      {activeTab === "history" && (
        <div className="space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="border-2 border-black p-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(report.status)}
                  <h3 className="text-lg font-bold">
                    {report.month} {report.year}
                  </h3>
                  <span className={`px-3 py-1 text-sm border-2 ${getStatusColor(report.status)}`}>
                    {report.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
                <div className="text-sm">
                  {report.submittedAt ? `Submitted: ${new Date(report.submittedAt).toLocaleDateString()}` : `Due: ${report.dueDate}`}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="border border-black p-3">
                  <div className="text-sm font-bold">Revenue</div>
                  <div className="text-lg font-mono">${report.financialData.monthlyRevenue.toLocaleString()}</div>
                </div>
                <div className="border border-black p-3">
                  <div className="text-sm font-bold">Expenses</div>
                  <div className="text-lg font-mono">${report.financialData.monthlyExpenses.toLocaleString()}</div>
                </div>
                <div className="border border-black p-3">
                  <div className="text-sm font-bold">Net Profit</div>
                  <div className="text-lg font-mono">${report.financialData.netProfit.toLocaleString()}</div>
                </div>
                <div className="border border-black p-3">
                  <div className="text-sm font-bold">Variance</div>
                  <div className="text-lg font-mono">{report.financialData.varianceFromProjection}%</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button className="border border-black px-4 py-2 text-sm font-bold hover:bg-gray-100">
                  VIEW DETAILS
                </button>
                {report.status === "draft" && (
                  <button className="bg-black text-white px-4 py-2 text-sm font-bold hover:bg-gray-800">
                    CONTINUE EDITING
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Templates Tab */}
      {activeTab === "templates" && (
        <div className="space-y-6">
          <div className="border-2 border-black p-6 bg-white">
            <h3 className="text-lg font-bold mb-4">Report Templates</h3>
            <p className="text-sm mb-4">
              Use these templates to quickly create consistent monthly reports.
            </p>
            <div className="space-y-3">
              <button className="w-full border border-black p-4 text-left hover:bg-gray-100">
                <div className="font-bold">Standard Monthly Report</div>
                <div className="text-sm">Complete template with all required sections</div>
              </button>
              <button className="w-full border border-black p-4 text-left hover:bg-gray-100">
                <div className="font-bold">Financial Focus Report</div>
                <div className="text-sm">Emphasizes financial performance and metrics</div>
              </button>
              <button className="w-full border border-black p-4 text-left hover:bg-gray-100">
                <div className="font-bold">Operational Update Report</div>
                <div className="text-sm">Focuses on operational achievements and challenges</div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthlyReportsComponent;
