"use client";

import { useState } from "react";
import {
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  Eye,
  MessageSquare,
  Download,
  Filter,
  Search,
  Star,
  Award,
  Target,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react";

interface Investor {
  id: string;
  name: string;
  walletAddress: string;
  nftsOwned: number;
  totalInvestment: number;
  joinDate: string;
  lastActive: string;
  status: "active" | "inactive" | "vip";
  profitReceived: number;
  votingParticipation: number;
  averageApproval: number;
  badges: string[];
  location?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
  };
}

interface InvestorsComponentProps {
  startupName: string;
  totalInvestors: number;
  totalInvestment: number;
  onInvestorAction?: (investorId: string, action: string) => void;
}

const InvestorsComponent = ({ 
  startupName, 
  totalInvestors, 
  totalInvestment,
  onInvestorAction 
}: InvestorsComponentProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedInvestor, setSelectedInvestor] = useState<Investor | null>(null);

  const investors: Investor[] = [
    {
      id: "1",
      name: "Alex Chen",
      walletAddress: "0x1234...5678",
      nftsOwned: 15,
      totalInvestment: 7500,
      joinDate: "2024-06-15",
      lastActive: "2024-12-20",
      status: "vip",
      profitReceived: 1500,
      votingParticipation: 98,
      averageApproval: 95,
      badges: ["Early Investor", "Top Supporter", "Community Leader"],
      location: "San Francisco, CA",
      socialLinks: {
        twitter: "@alexchen",
        linkedin: "linkedin.com/in/alexchen"
      }
    },
    {
      id: "2",
      name: "Sarah Johnson",
      walletAddress: "0x9876...5432",
      nftsOwned: 12,
      totalInvestment: 6000,
      joinDate: "2024-07-01",
      lastActive: "2024-12-19",
      status: "active",
      profitReceived: 1200,
      votingParticipation: 92,
      averageApproval: 88,
      badges: ["Active Voter", "Long-term Holder"],
      location: "New York, NY"
    },
    {
      id: "3",
      name: "Mike Rodriguez",
      walletAddress: "0xabcd...efgh",
      nftsOwned: 8,
      totalInvestment: 4000,
      joinDate: "2024-08-10",
      lastActive: "2024-12-18",
      status: "active",
      profitReceived: 800,
      votingParticipation: 85,
      averageApproval: 90,
      badges: ["Consistent Investor"],
      location: "Austin, TX"
    },
    {
      id: "4",
      name: "Emily Davis",
      walletAddress: "0x5678...9abc",
      nftsOwned: 5,
      totalInvestment: 2500,
      joinDate: "2024-09-05",
      lastActive: "2024-12-15",
      status: "active",
      profitReceived: 500,
      votingParticipation: 78,
      averageApproval: 85,
      badges: ["New Investor"],
      location: "Seattle, WA"
    },
    {
      id: "5",
      name: "David Kim",
      walletAddress: "0xdef0...1234",
      nftsOwned: 20,
      totalInvestment: 10000,
      joinDate: "2024-06-20",
      lastActive: "2024-12-10",
      status: "vip",
      profitReceived: 2000,
      votingParticipation: 100,
      averageApproval: 98,
      badges: ["Whale Investor", "Top Supporter", "Community Leader"],
      location: "Los Angeles, CA"
    },
    {
      id: "6",
      name: "Lisa Wang",
      walletAddress: "0x2468...ace0",
      nftsOwned: 3,
      totalInvestment: 1500,
      joinDate: "2024-10-15",
      lastActive: "2024-11-20",
      status: "inactive",
      profitReceived: 300,
      votingParticipation: 45,
      averageApproval: 75,
      badges: ["Small Investor"],
      location: "Chicago, IL"
    }
  ];

  const filteredInvestors = investors.filter(investor => {
    const matchesSearch = investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         investor.walletAddress.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || investor.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const activeInvestors = investors.filter(i => i.status === "active").length;
  const vipInvestors = investors.filter(i => i.status === "vip").length;
  const totalProfitDistributed = investors.reduce((sum, i) => sum + i.profitReceived, 0);
  const averageVotingParticipation = Math.round(investors.reduce((sum, i) => sum + i.votingParticipation, 0) / investors.length);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "vip":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "inactive":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getBadgeColor = (badge: string) => {
    if (badge.includes("Whale") || badge.includes("Top")) return "bg-yellow-100 text-yellow-800";
    if (badge.includes("Early") || badge.includes("Leader")) return "bg-blue-100 text-blue-800";
    if (badge.includes("Active") || badge.includes("Consistent")) return "bg-green-100 text-green-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-2 border-black p-6 bg-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">INVESTORS - {startupName}</h3>
          <div className="text-sm text-gray-600">
            {totalInvestors} investors • ${totalInvestment.toLocaleString()} total investment
          </div>
        </div>
        <p className="text-sm">
          Manage your investor community and track engagement metrics
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border-2 border-black p-4 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">{totalInvestors}</div>
              <div className="text-sm text-gray-600">Total Investors</div>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="border-2 border-black p-4 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">{activeInvestors}</div>
              <div className="text-sm text-gray-600">Active</div>
            </div>
            <Activity className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="border-2 border-black p-4 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">{vipInvestors}</div>
              <div className="text-sm text-gray-600">VIP Investors</div>
            </div>
            <Star className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        
        <div className="border-2 border-black p-4 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">{averageVotingParticipation}%</div>
              <div className="text-sm text-gray-600">Avg Participation</div>
            </div>
            <BarChart3 className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search investors by name or wallet address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-black focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border-2 border-black px-4 py-2 bg-white"
          >
            <option value="all">All Status</option>
            <option value="vip">VIP</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1">
        {[
          { id: "overview", label: "OVERVIEW" },
          { id: "list", label: "INVESTOR LIST" },
          { id: "analytics", label: "ANALYTICS" },
          { id: "engagement", label: "ENGAGEMENT" },
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

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-black p-6 bg-white">
              <h4 className="text-lg font-bold mb-4">Investment Distribution</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-black">
                  <div>
                    <div className="font-bold">VIP Investors</div>
                    <div className="text-sm text-gray-600">{vipInvestors} investors</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-purple-600">${investors.filter(i => i.status === "vip").reduce((sum, i) => sum + i.totalInvestment, 0).toLocaleString()}</div>
                    <div className="text-xs">Large holders</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border border-black">
                  <div>
                    <div className="font-bold">Active Investors</div>
                    <div className="text-sm text-gray-600">{activeInvestors} investors</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">${investors.filter(i => i.status === "active").reduce((sum, i) => sum + i.totalInvestment, 0).toLocaleString()}</div>
                    <div className="text-xs">Regular participants</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border border-black">
                  <div>
                    <div className="font-bold">Inactive Investors</div>
                    <div className="text-sm text-gray-600">{investors.filter(i => i.status === "inactive").length} investors</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-600">${investors.filter(i => i.status === "inactive").reduce((sum, i) => sum + i.totalInvestment, 0).toLocaleString()}</div>
                    <div className="text-xs">Low engagement</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-6 bg-white">
              <h4 className="text-lg font-bold mb-4">Community Health</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Voting Participation</span>
                    <span className="font-bold">{averageVotingParticipation}%</span>
                  </div>
                  <div className="border border-black h-2">
                    <div className="bg-blue-600 h-full" style={{ width: `${averageVotingParticipation}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Profit Distribution</span>
                    <span className="font-bold">${totalProfitDistributed.toLocaleString()}</span>
                  </div>
                  <div className="border border-black h-2">
                    <div className="bg-green-600 h-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Community Growth</span>
                    <span className="font-bold">+12% this month</span>
                  </div>
                  <div className="border border-black h-2">
                    <div className="bg-purple-600 h-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-black p-6 bg-white">
            <h4 className="text-lg font-bold mb-4">Top Investors</h4>
            <div className="space-y-3">
              {investors
                .sort((a, b) => b.totalInvestment - a.totalInvestment)
                .slice(0, 5)
                .map((investor, index) => (
                  <div key={investor.id} className="flex items-center justify-between p-3 border border-black">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">#{index + 1}</span>
                      </div>
                      <div>
                        <div className="font-bold">{investor.name}</div>
                        <div className="text-sm text-gray-600">{investor.nftsOwned} NFTs • {investor.status.toUpperCase()}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">${investor.totalInvestment.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">{investor.votingParticipation}% participation</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Investor List Tab */}
      {activeTab === "list" && (
        <div className="space-y-4">
          {filteredInvestors.map((investor) => (
            <div key={investor.id} className="border-2 border-black p-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <h4 className="text-lg font-bold">{investor.name}</h4>
                    <div className="text-sm text-gray-600">{investor.walletAddress}</div>
                  </div>
                  <span className={`px-3 py-1 text-sm border-2 rounded ${getStatusColor(investor.status)}`}>
                    {investor.status.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedInvestor(investor)}
                    className="border border-black px-3 py-1 text-sm font-bold hover:bg-gray-100"
                  >
                    <Eye className="h-4 w-4 inline mr-1" />
                    VIEW
                  </button>
                  <button className="border border-black px-3 py-1 text-sm font-bold hover:bg-gray-100">
                    <MessageSquare className="h-4 w-4 inline mr-1" />
                    MESSAGE
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="border border-black p-3">
                  <div className="text-sm font-bold">Investment</div>
                  <div className="text-lg font-mono">${investor.totalInvestment.toLocaleString()}</div>
                </div>
                <div className="border border-black p-3">
                  <div className="text-sm font-bold">NFTs Owned</div>
                  <div className="text-lg">{investor.nftsOwned}</div>
                </div>
                <div className="border border-black p-3">
                  <div className="text-sm font-bold">Profit Received</div>
                  <div className="text-lg font-mono">${investor.profitReceived.toLocaleString()}</div>
                </div>
                <div className="border border-black p-3">
                  <div className="text-sm font-bold">Participation</div>
                  <div className="text-lg">{investor.votingParticipation}%</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {investor.badges.map((badge, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 text-xs border rounded ${getBadgeColor(badge)}`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {investor.location && (
                <div className="mt-2 text-sm text-gray-600">
                  📍 {investor.location}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === "analytics" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-black p-6 bg-white">
              <h4 className="text-lg font-bold mb-4">Investment Trends</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-black">
                  <div>
                    <div className="font-bold">Average Investment</div>
                    <div className="text-sm text-gray-600">Per investor</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">${Math.round(totalInvestment / totalInvestors).toLocaleString()}</div>
                    <div className="text-xs text-green-600">+5% vs last month</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border border-black">
                  <div>
                    <div className="font-bold">New Investors</div>
                    <div className="text-sm text-gray-600">This month</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">8</div>
                    <div className="text-xs text-green-600">+12% growth</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border border-black">
                  <div>
                    <div className="font-bold">Retention Rate</div>
                    <div className="text-sm text-gray-600">Active investors</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">94%</div>
                    <div className="text-xs text-green-600">Excellent</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-6 bg-white">
              <h4 className="text-lg font-bold mb-4">Engagement Metrics</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Voting Participation</span>
                    <span className="font-bold">{averageVotingParticipation}%</span>
                  </div>
                  <div className="border border-black h-2">
                    <div className="bg-blue-600 h-full" style={{ width: `${averageVotingParticipation}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Community Engagement</span>
                    <span className="font-bold">87%</span>
                  </div>
                  <div className="border border-black h-2">
                    <div className="bg-green-600 h-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Long-term Holders</span>
                    <span className="font-bold">78%</span>
                  </div>
                  <div className="border border-black h-2">
                    <div className="bg-purple-600 h-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-black p-6 bg-white">
            <h4 className="text-lg font-bold mb-4">Geographic Distribution</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-black p-4">
                <div className="font-bold">North America</div>
                <div className="text-2xl font-bold text-blue-600">45%</div>
                <div className="text-sm text-gray-600">27 investors</div>
              </div>
              <div className="border border-black p-4">
                <div className="font-bold">Europe</div>
                <div className="text-2xl font-bold text-green-600">32%</div>
                <div className="text-sm text-gray-600">19 investors</div>
              </div>
              <div className="border border-black p-4">
                <div className="font-bold">Asia Pacific</div>
                <div className="text-2xl font-bold text-purple-600">23%</div>
                <div className="text-sm text-gray-600">14 investors</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Engagement Tab */}
      {activeTab === "engagement" && (
        <div className="space-y-6">
          <div className="border-2 border-black p-6 bg-white">
            <h4 className="text-lg font-bold mb-4">Community Engagement Tools</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-bold mb-3">Communication</h5>
                <div className="space-y-2">
                  <button className="w-full border border-black p-3 text-left hover:bg-gray-100">
                    <div className="font-bold">Send Community Update</div>
                    <div className="text-sm text-gray-600">Broadcast message to all investors</div>
                  </button>
                  <button className="w-full border border-black p-3 text-left hover:bg-gray-100">
                    <div className="font-bold">Schedule Investor Call</div>
                    <div className="text-sm text-gray-600">Organize monthly investor meetings</div>
                  </button>
                  <button className="w-full border border-black p-3 text-left hover:bg-gray-100">
                    <div className="font-bold">Send Thank You Messages</div>
                    <div className="text-sm text-gray-600">Personalized appreciation messages</div>
                  </button>
                </div>
              </div>
              
              <div>
                <h5 className="font-bold mb-3">Analytics & Reports</h5>
                <div className="space-y-2">
                  <button className="w-full border border-black p-3 text-left hover:bg-gray-100">
                    <div className="font-bold">Export Investor List</div>
                    <div className="text-sm text-gray-600">Download CSV with all investor data</div>
                  </button>
                  <button className="w-full border border-black p-3 text-left hover:bg-gray-100">
                    <div className="font-bold">Generate Engagement Report</div>
                    <div className="text-sm text-gray-600">Detailed participation analytics</div>
                  </button>
                  <button className="w-full border border-black p-3 text-left hover:bg-gray-100">
                    <div className="font-bold">View Investor Feedback</div>
                    <div className="text-sm text-gray-600">Comments and suggestions from community</div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-black p-6 bg-white">
            <h4 className="text-lg font-bold mb-4">Recent Community Activity</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-black">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold">Monthly Report Discussion</div>
                    <div className="text-sm text-gray-600">23 comments • 2 hours ago</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-green-600">95% approval</div>
                  <div className="text-xs">High engagement</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-black">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold">Profit Sharing Payment</div>
                    <div className="text-sm text-gray-600">December payment completed • 1 day ago</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-green-600">$1,000 distributed</div>
                  <div className="text-xs">80 investors</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-black">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-bold">New Investor Welcome</div>
                    <div className="text-sm text-gray-600">5 new investors joined • 3 days ago</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-blue-600">+$2,500 investment</div>
                  <div className="text-xs">Community growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Investor Detail Modal */}
      {selectedInvestor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 max-w-2xl w-full mx-4 border-2 border-black max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Investor Details</h3>
              <button
                onClick={() => setSelectedInvestor(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-bold">Name</div>
                  <div>{selectedInvestor.name}</div>
                </div>
                <div>
                  <div className="font-bold">Status</div>
                  <span className={`px-2 py-1 text-sm border rounded ${getStatusColor(selectedInvestor.status)}`}>
                    {selectedInvestor.status.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div>
                <div className="font-bold">Wallet Address</div>
                <div className="font-mono text-sm">{selectedInvestor.walletAddress}</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-bold">Total Investment</div>
                  <div className="text-lg font-mono">${selectedInvestor.totalInvestment.toLocaleString()}</div>
                </div>
                <div>
                  <div className="font-bold">NFTs Owned</div>
                  <div className="text-lg">{selectedInvestor.nftsOwned}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-bold">Profit Received</div>
                  <div className="text-lg font-mono">${selectedInvestor.profitReceived.toLocaleString()}</div>
                </div>
                <div>
                  <div className="font-bold">Voting Participation</div>
                  <div className="text-lg">{selectedInvestor.votingParticipation}%</div>
                </div>
              </div>
              
              <div>
                <div className="font-bold">Badges</div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedInvestor.badges.map((badge, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs border rounded ${getBadgeColor(badge)}`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              
              {selectedInvestor.location && (
                <div>
                  <div className="font-bold">Location</div>
                  <div>📍 {selectedInvestor.location}</div>
                </div>
              )}
              
              <div className="flex items-center space-x-3 pt-4">
                <button className="bg-black text-white px-4 py-2 text-sm font-bold hover:bg-gray-800">
                  SEND MESSAGE
                </button>
                <button className="border border-black px-4 py-2 text-sm font-bold hover:bg-gray-100">
                  VIEW TRANSACTIONS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorsComponent;
