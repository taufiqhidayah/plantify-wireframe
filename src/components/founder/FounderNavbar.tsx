"use client";

import { Bell, LogOut, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDemoMode } from "@/context/DemoModeContext";

const FounderNavbar = () => {
  const router = useRouter();
  const [showConnectionMenu, setShowConnectionMenu] = useState(false);
  const { isDemoMode, toggleDemoMode } = useDemoMode();

  // Mock data - in real app this would come from props or context
  const userData = {
    principalId: "rdmx6-jaaaa-aaaah-qcaiq-cai",
    icpBalance: "12.45",
    ckusdcBalance: "1,250.00"
  };

  const handleLogout = () => {
    // Handle logout logic here
    router.push("/");
  };

  return (
    <header className="bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div 
              className="text-2xl font-bold border-2 border-black px-4 py-2 text-black cursor-pointer hover:bg-gray-100"
              onClick={() => router.push("/founder/dashboard")}
            >
              PLANTIFY
            </div>
            <div className="text-sm border border-black px-3 py-1 bg-white text-black">
              FOUNDER DASHBOARD
            </div>
          </div>

          {/* Simple Navigation */}
          <nav className="flex items-center space-x-4">
            <button
              onClick={() => router.push("/founder/dashboard")}
              className="text-sm font-medium text-black hover:underline"
            >
              Dashboard
            </button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Demo Mode Toggle */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-bold">Demo Mode:</label>
              <button
                onClick={toggleDemoMode}
                className={`px-3 py-1 text-sm border-2 border-black ${
                  isDemoMode 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {isDemoMode ? 'ON' : 'OFF'}
              </button>
            </div>

            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-100 rounded">
              <Bell className="h-5 w-5 text-black" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Connection Status with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowConnectionMenu(!showConnectionMenu)}
                className="flex items-center space-x-2 text-sm border border-black px-3 py-1 text-black hover:bg-gray-100"
              >
                <span>Connected: [Internet Identity]</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Dropdown Menu */}
              {showConnectionMenu && (
                <div className="absolute right-0 mt-2 w-80 bg-white border-2 border-black shadow-lg z-50">
                  <div className="p-4">
                    <div className="mb-4">
                      <h3 className="font-bold text-black mb-2">Account Information</h3>
                      <div className="text-xs text-gray-600 mb-1">Principal ID:</div>
                      <div className="text-sm font-mono bg-gray-100 p-2 border border-gray-300 break-all">
                        {userData.principalId}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-black mb-2">Balances</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">ICP:</span>
                          <span className="text-sm font-bold">{userData.icpBalance} ICP</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">ckUSDC:</span>
                          <span className="text-sm font-bold">${userData.ckusdcBalance}</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-3">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 border border-red-300"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FounderNavbar;
