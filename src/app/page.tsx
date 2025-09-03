"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PlantifyLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <header className="border-b-2 border-black p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold border-2 border-black px-4 py-2">
            PLANTIFY
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden border border-black px-3 py-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4">
            <div className="border border-black px-3 py-1 cursor-pointer hover:bg-gray-100">
              Browse Startups
            </div>
            <div className="border border-black px-3 py-1 cursor-pointer hover:bg-gray-100">
              For Founders
            </div>
            <div className="border border-black px-3 py-1 cursor-pointer hover:bg-gray-100">
              Community
            </div>
            <div className="border border-black px-3 py-1 cursor-pointer hover:bg-gray-100">
              About
            </div>
          </nav>

          <button
            className="hidden md:block bg-black text-white px-4 py-2 hover:bg-gray-800"
            onClick={() => router.push("/onboarding")}
          >
            Connect Internet Identity
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t border-black pt-4 space-y-2">
            <div className="border border-black px-3 py-2 text-center">
              Browse Startups
            </div>
            <div className="border border-black px-3 py-2 text-center">
              For Founders
            </div>
            <div className="border border-black px-3 py-2 text-center">
              Community
            </div>
            <div className="border border-black px-3 py-2 text-center">
              About
            </div>
            <button
              className="w-full bg-black text-white px-4 py-2 mt-2"
              onClick={() => router.push("/onboarding")}
            >
              Connect Internet Identity
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="border-4 border-black p-6 md:p-8 mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              INVEST IN STARTUPS
              <br />
              EARN STABLE RETURNS
            </h1>
            <p className="text-md md:text-xl mb-8 max-w-3xl mx-auto">
              Platform investasi startup berbasis NFT dengan profit sharing. Transparan, decentralized, dan
              community-driven.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-6 py-3 text-lg hover:bg-gray-800">
                Browse Startups
              </button>
              <button className="border-2 border-black px-6 py-3 text-lg hover:bg-gray-100">
                Register as Founder
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-2 border-black p-6">
              <div className="text-3xl font-bold mb-2">247</div>
              <div>Active Startups</div>
            </div>
            <div className="border-2 border-black p-6">
              <div className="text-3xl font-bold mb-2">15,432</div>
              <div>Total Investors</div>
            </div>
            <div className="border-2 border-black p-6">
              <div className="text-3xl font-bold mb-2">$2.3M</div>
              <div>ckUSDC Distributed</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-4 border-black inline-block pb-2">
              HOW IT WORKS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* For Investors */}
            <div className="border-4 border-black p-6">
              <h3 className="text-2xl font-bold mb-6 bg-black text-white p-2">
                FOR INVESTORS
              </h3>
              <div className="space-y-4">
                <div className="border border-black p-3">
                  <div className="font-bold">1. Browse & Research</div>
                  <div>Pilih startup dari berbagai sektor bisnis</div>
                </div>
                <div className="border border-black p-3">
                  <div className="font-bold">2. Buy NFT</div>
                  <div>Investasi mulai dari $50 per NFT</div>
                </div>
                <div className="border border-black p-3">
                  <div className="font-bold">3. Monthly Governance</div>
                  <div>Vote pada progress reports startup</div>
                </div>
                <div className="border border-black p-3">
                  <div className="font-bold">4. Earn Profit Sharing</div>
                  <div>Terima pembayaran bulanan dalam ckUSDC</div>
                </div>
              </div>
            </div>

            {/* For Founders */}
            <div className="border-4 border-black p-6">
              <h3 className="text-2xl font-bold mb-6 bg-black text-white p-2">
                FOR FOUNDERS
              </h3>
              <div className="space-y-4">
                <div className="border border-black p-3">
                  <div className="font-bold">1. Submit Application</div>
                  <div>Upload business plan & documents</div>
                </div>
                <div className="border border-black p-3">
                  <div className="font-bold">2. Lock Collateral</div>
                  <div>12 months profit sharing sebagai jaminan</div>
                </div>
                <div className="border border-black p-3">
                  <div className="font-bold">3. Launch NFT</div>
                  <div>Fundraise dari community investors</div>
                </div>
                <div className="border border-black p-3">
                  <div className="font-bold">4. Monthly Reporting</div>
                  <div>Report progress & pay profit sharing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Sectors */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-4 border-black inline-block pb-2">
              SUPPORTED SECTORS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-black p-6 hover:bg-gray-50">
              <div className="text-2xl mb-2">🌾</div>
              <h3 className="text-xl font-bold mb-2">Agriculture</h3>
              <div className="text-sm mb-2">15-25% Annual Returns</div>
              <div className="border-t border-black pt-2">
                Organic farming, greenhouse, urban farming
              </div>
            </div>

            <div className="border-2 border-black p-6 hover:bg-gray-50">
              <div className="text-2xl mb-2">🐄</div>
              <h3 className="text-xl font-bold mb-2">Livestock</h3>
              <div className="text-sm mb-2">20-30% Annual Returns</div>
              <div className="border-t border-black pt-2">
                Poultry, cattle, aquaculture
              </div>
            </div>

            <div className="border-2 border-black p-6 hover:bg-gray-50">
              <div className="text-2xl mb-2">🍽️</div>
              <h3 className="text-xl font-bold mb-2">F&B</h3>
              <div className="text-sm mb-2">25-35% Annual Returns</div>
              <div className="border-t border-black pt-2">
                Restaurants, catering, food production
              </div>
            </div>

            <div className="border-2 border-black p-6 hover:bg-gray-50">
              <div className="text-2xl mb-2">🛒</div>
              <h3 className="text-xl font-bold mb-2">Retail</h3>
              <div className="text-sm mb-2">20-30% Annual Returns</div>
              <div className="border-t border-black pt-2">
                Physical stores, e-commerce, distribution
              </div>
            </div>

            <div className="border-2 border-black p-6 hover:bg-gray-50">
              <div className="text-2xl mb-2">⚙️</div>
              <h3 className="text-xl font-bold mb-2">Services</h3>
              <div className="text-sm mb-2">30-40% Annual Returns</div>
              <div className="border-t border-black pt-2">
                Workshops, salons, consultancy, courses
              </div>
            </div>

            <div className="border-2 border-black p-6 hover:bg-gray-50">
              <div className="text-2xl mb-2">💻</div>
              <h3 className="text-xl font-bold mb-2">Technology</h3>
              <div className="text-sm mb-2">40-60% Annual Returns</div>
              <div className="border-t border-black pt-2">
                Apps, SaaS, digital services
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Startups */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-4 border-black inline-block pb-2">
              FEATURED STARTUPS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Startup 1 */}
            <div className="border-2 border-black bg-white">
              <div className="h-48 border-b-2 border-black bg-gray-100 flex items-center justify-center">
                <div className="text-4xl">🌱</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">EcoFarm Solutions</h3>
                <div className="text-sm mb-2 border border-black px-2 py-1 inline-block">
                  Agriculture
                </div>
                <div className="mb-4">
                  <div className="text-sm">
                    NFT Price: <span className="font-bold">$75 USD</span>
                  </div>
                  <div className="text-sm">
                    Monthly Returns:{" "}
                    <span className="font-bold">$12 USD</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm mb-1">Funding Progress:</div>
                  <div className="border border-black h-4">
                    <div className="bg-black h-full w-3/4"></div>
                  </div>
                  <div className="text-xs mt-1">75% Funded</div>
                </div>
                <button className="border-2 border-black text-center py-2 w-full cursor-pointer hover:bg-black hover:text-white">
                  VIEW DETAILS
                </button>
              </div>
            </div>

            {/* Startup 2 */}
            <div className="border-2 border-black bg-white">
              <div className="h-48 border-b-2 border-black bg-gray-100 flex items-center justify-center">
                <div className="text-4xl">☕</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">SmartCafe Tech</h3>
                <div className="text-sm mb-2 border border-black px-2 py-1 inline-block">
                  Technology
                </div>
                <div className="mb-4">
                  <div className="text-sm">
                    NFT Price: <span className="font-bold">$100 USD</span>
                  </div>
                  <div className="text-sm">
                    Monthly Returns:{" "}
                    <span className="font-bold">$18 USD</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm mb-1">Funding Progress:</div>
                  <div className="border border-black h-4">
                    <div className="bg-black h-full w-4/5"></div>
                  </div>
                  <div className="text-xs mt-1">80% Funded</div>
                </div>
                <button className="border-2 border-black text-center py-2 w-full cursor-pointer hover:bg-black hover:text-white">
                  VIEW DETAILS
                </button>
              </div>
            </div>

            {/* Startup 3 */}
            <div className="border-2 border-black bg-white">
              <div className="h-48 border-b-2 border-black bg-gray-100 flex items-center justify-center">
                <div className="text-4xl">🍗</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Urban Chicken Farm</h3>
                <div className="text-sm mb-2 border border-black px-2 py-1 inline-block">
                  Livestock
                </div>
                <div className="mb-4">
                  <div className="text-sm">
                    NFT Price: <span className="font-bold">$50 USD</span>
                  </div>
                  <div className="text-sm">
                    Monthly Returns:{" "}
                    <span className="font-bold">$8.5 USD</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm mb-1">Funding Progress:</div>
                  <div className="border border-black h-4">
                    <div className="bg-black h-full w-2/5"></div>
                  </div>
                  <div className="text-xs mt-1">45% Funded</div>
                </div>
                <button className="border-2 border-black text-center py-2 w-full cursor-pointer hover:bg-black hover:text-white">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-black text-white px-8 py-3 hover:bg-gray-800">
              VIEW ALL STARTUPS
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-4 border-black inline-block pb-2">
              WHY PLANTIFY?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-2 border-black p-6 hover:bg-gray-50">
                <h3 className="text-xl font-bold mb-3">🔒 Triple Protection</h3>
                <div>
                  Founder collateral + Platform reserve + Community governance
                </div>
              </div>

              <div className="border-2 border-black p-6 hover:bg-gray-50">
                <h3 className="text-xl font-bold mb-3">💎 Stable Currency</h3>
                <div>All transactions in ckUSDC for predictable returns</div>
              </div>

              <div className="border-2 border-black p-6 hover:bg-gray-50">
                <h3 className="text-xl font-bold mb-3">
                  🌐 Fully Decentralized
                </h3>
                <div>Built on Internet Computer blockchain</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-2 border-black p-6 hover:bg-gray-50">
                <h3 className="text-xl font-bold mb-3">👥 Community Driven</h3>
                <div>Monthly voting and transparent governance</div>
              </div>

              <div className="border-2 border-black p-6 hover:bg-gray-50">
                <h3 className="text-xl font-bold mb-3">
                  📊 Complete Transparency
                </h3>
                <div>On-chain transactions and public reporting</div>
              </div>

              <div className="border-2 border-black p-6 hover:bg-gray-50">
                <h3 className="text-xl font-bold mb-3">🎯 Low Entry Barrier</h3>
                <div>Start investing from $50 per NFT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            READY TO START?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Join thousands of investors earning stable returns from startup
            investments
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 text-lg hover:bg-gray-100">
              START INVESTING
            </button>
            <button className="border-2 border-white px-8 py-4 text-lg hover:border-gray-300 hover:text-gray-300">
              REGISTER STARTUP
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold border-2 border-black px-4 py-2 inline-block mb-4">
                PLANTIFY
              </div>
              <div className="text-sm">
                Decentralized startup investment platform dengan stable returns
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 border-b border-black pb-1">
                Platform
              </h3>
              <div className="space-y-2 text-sm">
                <div className="cursor-pointer hover:underline">
                  Browse Startups
                </div>
                <div className="cursor-pointer hover:underline">
                  How It Works
                </div>
                <div className="cursor-pointer hover:underline">
                  Fees & Terms
                </div>
                <div className="cursor-pointer hover:underline">Security</div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 border-b border-black pb-1">
                Resources
              </h3>
              <div className="space-y-2 text-sm">
                <div className="cursor-pointer hover:underline">
                  Documentation
                </div>
                <div className="cursor-pointer hover:underline">
                  API Reference
                </div>
                <div className="cursor-pointer hover:underline">
                  Support Center
                </div>
                <div className="cursor-pointer hover:underline">Community</div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 border-b border-black pb-1">
                Connect
              </h3>
              <div className="space-y-2 text-sm">
                <div className="cursor-pointer hover:underline">Discord</div>
                <div className="cursor-pointer hover:underline">Telegram</div>
                <div className="cursor-pointer hover:underline">Twitter</div>
                <div className="cursor-pointer hover:underline">GitHub</div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-black mt-8 pt-8 text-center text-sm">
            <div>© 2025 Plantify. Built on Internet Computer Protocol.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
