"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Startup {
    id: number;
    name: string;
    sector: string;
    nftPrice?: number;
    monthlyReturn?: number;
    fundingProgress?: number;
    targetAmount?: number;
    raisedAmount?: number;
    minInvestment?: number;
    annualROI?: number;
    availableNfts?: number;
    riskLevel?: string;
}

const StartupListPage = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSector, setSelectedSector] = useState("");
    const [selectedRisk, setSelectedRisk] = useState("");
    const [minROI, setMinROI] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [sortBy, setSortBy] = useState("latest");
    const [showFilters, setShowFilters] = useState(false);
    const [viewMode, setViewMode] = useState("grid");
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);

    // Extended mock data untuk lebih banyak startup
    const startups = [
        {
            id: 1,
            name: "EcoFarm Solutions",
            sector: "Agriculture",
            location: "Bandung, West Java",
            founded: "2023",
            nftPrice: 75,
            monthlyReturn: 12,
            fundingProgress: 75,
            targetAmount: 50000,
            raisedAmount: 37500,
            availableNfts: 167,
            totalNfts: 667,
            minInvestment: 75,
            riskLevel: "Moderate",
            annualROI: 19.2,
            description: "Revolutionary organic farming solutions using sustainable technology to maximize crop yields while maintaining environmental responsibility.",
            image: "🌱",
            featured: true,
            tags: ["Organic", "Tech-enabled", "Export Ready"],
            fundingType: "Growth",
            employees: 12,
            lastUpdated: "2024-01-02"
        },
        {
            id: 2,
            name: "SmartCafe Tech",
            sector: "Technology",
            location: "Jakarta, Indonesia",
            founded: "2022",
            nftPrice: 100,
            monthlyReturn: 18,
            fundingProgress: 80,
            targetAmount: 75000,
            raisedAmount: 60000,
            availableNfts: 150,
            totalNfts: 750,
            minInvestment: 100,
            riskLevel: "High",
            annualROI: 21.6,
            description: "Innovative cafe management platform that combines IoT technology with AI-powered analytics to revolutionize the food & beverage industry.",
            image: "☕",
            featured: true,
            tags: ["SaaS", "AI/ML", "B2B"],
            fundingType: "Series A",
            employees: 18,
            lastUpdated: "2024-01-01"
        },
        {
            id: 3,
            name: "Urban Chicken Farm",
            sector: "Livestock",
            location: "Yogyakarta, Indonesia",
            founded: "2024",
            nftPrice: 50,
            monthlyReturn: 8.5,
            fundingProgress: 45,
            targetAmount: 10000,
            raisedAmount: 4500,
            availableNfts: 110,
            totalNfts: 200,
            minInvestment: 50,
            riskLevel: "Moderate",
            annualROI: 20.4,
            description: "Sustainable urban poultry farming using modern techniques to provide fresh, organic chicken and eggs to local communities.",
            image: "🍗",
            featured: false,
            tags: ["Organic", "Urban Farming", "Sustainable"],
            fundingType: "Seed",
            employees: 8,
            lastUpdated: "2023-12-28"
        },
        {
            id: 4,
            name: "Local Craft Store",
            sector: "Retail",
            location: "Semarang, Central Java",
            founded: "2023",
            nftPrice: 75,
            monthlyReturn: 12,
            fundingProgress: 67,
            targetAmount: 15000,
            raisedAmount: 10050,
            availableNfts: 67,
            totalNfts: 200,
            minInvestment: 75,
            riskLevel: "Low",
            annualROI: 19.2,
            description: "Traditional Indonesian crafts and souvenirs store supporting local artisans and promoting cultural heritage.",
            image: "🎨",
            featured: false,
            tags: ["Cultural", "Artisan", "Local"],
            fundingType: "Growth",
            employees: 6,
            lastUpdated: "2023-12-30"
        },
        {
            id: 5,
            name: "Digital Learning Hub",
            sector: "Technology",
            location: "Medan, North Sumatra",
            founded: "2023",
            nftPrice: 80,
            monthlyReturn: 14,
            fundingProgress: 55,
            targetAmount: 25000,
            raisedAmount: 13750,
            availableNfts: 141,
            totalNfts: 312,
            minInvestment: 80,
            riskLevel: "Moderate",
            annualROI: 21.0,
            description: "Online education platform providing coding bootcamps and digital skills training for Indonesian students.",
            image: "💻",
            featured: false,
            tags: ["EdTech", "Online Learning", "Skills"],
            fundingType: "Series A",
            employees: 15,
            lastUpdated: "2023-12-25"
        },
        {
            id: 6,
            name: "Green Energy Solutions",
            sector: "Technology",
            location: "Surabaya, East Java",
            founded: "2022",
            nftPrice: 120,
            monthlyReturn: 22,
            fundingProgress: 90,
            targetAmount: 100000,
            raisedAmount: 90000,
            availableNfts: 84,
            totalNfts: 833,
            minInvestment: 120,
            riskLevel: "High",
            annualROI: 22.0,
            description: "Solar panel installation and maintenance services for residential and commercial buildings across Indonesia.",
            image: "☀️",
            featured: true,
            tags: ["Clean Energy", "Solar", "B2B"],
            fundingType: "Series A",
            employees: 25,
            lastUpdated: "2024-01-03"
        },
        {
            id: 7,
            name: "Healthy Snacks Co",
            sector: "F&B",
            location: "Denpasar, Bali",
            founded: "2023",
            nftPrice: 60,
            monthlyReturn: 9,
            fundingProgress: 30,
            targetAmount: 20000,
            raisedAmount: 6000,
            availableNfts: 233,
            totalNfts: 333,
            minInvestment: 60,
            riskLevel: "Moderate",
            annualROI: 18.0,
            description: "Healthy and organic snack products made from local Indonesian ingredients, targeting health-conscious consumers.",
            image: "🥜",
            featured: false,
            tags: ["Healthy Food", "Organic", "Local Ingredients"],
            fundingType: "Seed",
            employees: 10,
            lastUpdated: "2023-12-20"
        },
        {
            id: 8,
            name: "Mobility Solutions",
            sector: "Services",
            location: "Makassar, South Sulawesi",
            founded: "2023",
            nftPrice: 90,
            monthlyReturn: 16,
            fundingProgress: 85,
            targetAmount: 40000,
            raisedAmount: 34000,
            availableNfts: 67,
            totalNfts: 444,
            minInvestment: 90,
            riskLevel: "Moderate",
            annualROI: 21.3,
            description: "Electric scooter rental and maintenance services for urban transportation in major Indonesian cities.",
            image: "🛴",
            featured: false,
            tags: ["Mobility", "Electric Vehicle", "Urban"],
            fundingType: "Growth",
            employees: 20,
            lastUpdated: "2023-12-18"
        }
    ];

    const sectors = ["All Sectors", "Agriculture", "Technology", "Livestock", "Retail", "F&B", "Services"];
    const riskLevels = ["All Risk Levels", "Low", "Moderate", "High"];

    // Filtering logic
    const filteredStartups = startups.filter(startup => {
        const matchesSearch = startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            startup.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
            startup.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            startup.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesSector = selectedSector === "" || selectedSector === "All Sectors" || startup.sector === selectedSector;
        const matchesRisk = selectedRisk === "" || selectedRisk === "All Risk Levels" || startup.riskLevel === selectedRisk;
        const matchesROI = minROI === "" || startup.annualROI >= parseFloat(minROI);
        const matchesPrice = maxPrice === "" || startup.nftPrice <= parseFloat(maxPrice);

        return matchesSearch && matchesSector && matchesRisk && matchesROI && matchesPrice;
    });

    // Sorting logic
    const sortedStartups = [...filteredStartups].sort((a, b) => {
        switch (sortBy) {
            case "roi-high":
                return b.annualROI - a.annualROI;
            case "roi-low":
                return a.annualROI - b.annualROI;
            case "price-low":
                return a.nftPrice - b.nftPrice;
            case "price-high":
                return b.nftPrice - a.nftPrice;
            case "progress":
                return b.fundingProgress - a.fundingProgress;
            case "alphabetical":
                return a.name.localeCompare(b.name);
            case "latest":
            default:
                return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        }
    });

    const handleInvestClick = (startup: Startup) => {
        setSelectedStartup(startup);
        setShowLoginModal(true);
    };

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedSector("");
        setSelectedRisk("");
        setMinROI("");
        setMaxPrice("");
    };

    const activeFiltersCount = [selectedSector, selectedRisk, minROI, maxPrice].filter(filter => filter && filter !== "All Sectors" && filter !== "All Risk Levels").length;

    return (
        <div className="min-h-screen bg-white text-black font-mono">
            {/* Header */}
            <header className="border-b-2 border-black p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div
                        className="text-2xl font-bold border-2 border-black px-4 py-2 cursor-pointer"
                        onClick={() => router.push("/")}
                    >
                        PLANTIFY
                    </div>

                    <nav className="hidden md:flex space-x-4">
                        <div
                            className="border border-black px-3 py-1 cursor-pointer bg-black text-white"
                        >
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
                        className="bg-black text-white px-4 py-2 hover:bg-gray-800"
                        onClick={() => router.push("/onboarding")}
                    >
                        Connect Internet Identity
                    </button>
                </div>
            </header>

            {/* Page Header */}
            <div className="border-b-2 border-black bg-gradient-to-r from-green-50 to-blue-50 p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                🚀 ALL STARTUPS
                            </h1>
                            <div className="text-sm text-gray-600 mb-4">
                                Discover investment opportunities across various sectors and risk levels
                            </div>

                            {/* Quick Stats Bar */}
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="bg-white border border-black px-3 py-1">
                                    <span className="font-bold">{startups.length}</span> Total Startups
                                </div>
                                <div className="bg-white border border-black px-3 py-1">
                                    <span className="font-bold">{startups.filter(s => s.availableNfts > 0).length}</span> Available
                                </div>
                                <div className="bg-white border border-black px-3 py-1">
                                    <span className="font-bold">{startups.filter(s => s.featured).length}</span> Featured
                                </div>
                                <div className="bg-white border border-black px-3 py-1">
                                    <span className="font-bold">$50-$120</span> Price Range
                                </div>
                            </div>
                        </div>

                        {/* View Mode Toggle */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm">View:</span>
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`px-3 py-1 text-sm border border-black ${viewMode === "grid" ? "bg-black text-white" : "hover:bg-gray-100"
                                    }`}
                            >
                                Grid
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`px-3 py-1 text-sm border border-black ${viewMode === "list" ? "bg-black text-white" : "hover:bg-gray-100"
                                    }`}
                            >
                                List
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="border-b border-black p-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    {/* Main Search Bar */}
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Search by name, sector, location, or tags..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full border-2 border-black p-3 text-sm"
                            />
                        </div>

                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`px-6 py-3 text-sm font-bold border-2 border-black ${showFilters ? "bg-black text-white" : "hover:bg-gray-100"
                                }`}
                        >
                            🔍 FILTERS {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                        </button>
                    </div>

                    {/* Advanced Filters */}
                    {showFilters && (
                        <div className="border-2 border-black p-4 bg-white mb-4">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-bold mb-2">Sector</label>
                                    <select
                                        value={selectedSector}
                                        onChange={(e) => setSelectedSector(e.target.value)}
                                        className="w-full border border-black p-2 text-sm"
                                    >
                                        {sectors.map(sector => (
                                            <option key={sector} value={sector}>{sector}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-2">Risk Level</label>
                                    <select
                                        value={selectedRisk}
                                        onChange={(e) => setSelectedRisk(e.target.value)}
                                        className="w-full border border-black p-2 text-sm"
                                    >
                                        {riskLevels.map(risk => (
                                            <option key={risk} value={risk}>{risk}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-2">Min Annual ROI (%)</label>
                                    <input
                                        type="number"
                                        value={minROI}
                                        onChange={(e) => setMinROI(e.target.value)}
                                        className="w-full border border-black p-2 text-sm"
                                        placeholder="e.g., 15"
                                        min="0"
                                        max="100"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-2">Max NFT Price (ckUSDC)</label>
                                    <input
                                        type="number"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                        className="w-full border border-black p-2 text-sm"
                                        placeholder="e.g., 100"
                                        min="0"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <button
                                    onClick={clearFilters}
                                    className="text-sm border border-gray-400 px-4 py-2 hover:bg-gray-100"
                                >
                                    Clear All Filters
                                </button>
                                <div className="text-sm text-gray-600">
                                    {filteredStartups.length} startup{filteredStartups.length !== 1 ? 's' : ''} match your criteria
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Sort and Results Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex items-center space-x-4 text-sm">
                            <span className="font-bold">Sort by:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="border border-black px-3 py-1"
                            >
                                <option value="latest">Latest Added</option>
                                <option value="roi-high">Highest ROI</option>
                                <option value="roi-low">Lowest ROI</option>
                                <option value="price-low">Lowest Price</option>
                                <option value="price-high">Highest Price</option>
                                <option value="progress">Funding Progress</option>
                                <option value="alphabetical">A-Z</option>
                            </select>
                        </div>

                        <div className="text-sm">
                            Showing <span className="font-bold">{sortedStartups.length}</span> of <span className="font-bold">{startups.length}</span> startups
                        </div>
                    </div>
                </div>
            </div>

            {/* Startup Results */}
            <div className="max-w-7xl mx-auto p-6">
                {sortedStartups.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-4xl mb-4">🔍</div>
                        <div className="text-xl font-bold mb-2">No startups found</div>
                        <div className="text-gray-600 mb-4">Try adjusting your search criteria or filters</div>
                        <button
                            onClick={clearFilters}
                            className="bg-black text-white px-6 py-2 hover:bg-gray-800"
                        >
                            Clear All Filters
                        </button>
                    </div>
                ) : (
                    <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
                        {sortedStartups.map((startup) => (
                            <div key={startup.id} className={`border-2 border-black bg-white ${viewMode === "list" ? "flex" : ""}`}>
                                {viewMode === "grid" ? (
                                    <>
                                        {/* Grid View - Same as before */}
                                        <div className="h-40 border-b-2 border-black bg-gray-100 flex items-center justify-center relative">
                                            <div className="text-4xl">{startup.image}</div>
                                            {startup.featured && (
                                                <div className="absolute top-2 right-2 bg-yellow-400 border border-black px-2 py-1 text-xs font-bold">
                                                    FEATURED
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-lg font-bold">{startup.name}</h3>
                                                <div className="text-xs bg-gray-100 border border-black px-2 py-1">
                                                    {startup.fundingType}
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-2 mb-2">
                                                <div className="text-sm border border-black px-2 py-1">
                                                    {startup.sector}
                                                </div>
                                                <div className={`text-xs px-2 py-1 border ${startup.riskLevel === "Low" ? "border-green-500 text-green-600 bg-green-50" :
                                                    startup.riskLevel === "Moderate" ? "border-yellow-500 text-yellow-600 bg-yellow-50" :
                                                        "border-red-500 text-red-600 bg-red-50"
                                                    }`}>
                                                    {startup.riskLevel} Risk
                                                </div>
                                            </div>

                                            <div className="text-sm text-gray-600 mb-3">
                                                📍 {startup.location} • {startup.employees} employees
                                            </div>

                                            <div className="text-sm mb-3 line-clamp-2">
                                                {startup.description}
                                            </div>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1 mb-3">
                                                {startup.tags.slice(0, 3).map((tag, index) => (
                                                    <span key={index} className="text-xs bg-blue-50 border border-blue-200 px-2 py-1">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Key Metrics */}
                                            <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                                                <div>
                                                    <div className="font-bold">NFT Price:</div>
                                                    <div>${startup.nftPrice} ckUSDC</div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Monthly Return:</div>
                                                    <div className="text-green-600">${startup.monthlyReturn}</div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Annual ROI:</div>
                                                    <div className="text-blue-600">{startup.annualROI}%</div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Available:</div>
                                                    <div>{startup.availableNfts} NFTs</div>
                                                </div>
                                            </div>

                                            {/* Funding Progress */}
                                            <div className="mb-4">
                                                <div className="flex justify-between text-xs mb-1">
                                                    <span>Funding:</span>
                                                    <span>{startup.fundingProgress}%</span>
                                                </div>
                                                <div className="border border-black h-3">
                                                    <div
                                                        className="bg-black h-full"
                                                        style={{ width: `${startup.fundingProgress}%` }}
                                                    ></div>
                                                </div>
                                                <div className="text-xs mt-1">
                                                    ${startup.raisedAmount.toLocaleString()} / ${startup.targetAmount.toLocaleString()}
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => router.push(`/marketplace/startup/${startup.id}`)}
                                                    className="flex-1 border border-black py-2 text-sm hover:bg-gray-100"
                                                >
                                                    View Details
                                                </button>
                                                {startup.availableNfts > 0 ? (
                                                    <button
                                                        onClick={() => handleInvestClick(startup)}
                                                        className="flex-1 bg-black text-white py-2 text-sm hover:bg-gray-800"
                                                    >
                                                        Invest
                                                    </button>
                                                ) : (
                                                    <button
                                                        disabled
                                                        className="flex-1 bg-gray-300 text-gray-500 py-2 text-sm cursor-not-allowed"
                                                    >
                                                        Funded
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    /* List View */
                                    <>
                                        <div className="w-24 h-24 border-r-2 border-black bg-gray-100 flex items-center justify-center relative flex-shrink-0">
                                            <div className="text-2xl">{startup.image}</div>
                                            {startup.featured && (
                                                <div className="absolute -top-1 -right-1 bg-yellow-400 border border-black px-1 text-xs font-bold">
                                                    ★
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex-1 p-4 flex justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div>
                                                        <h3 className="text-lg font-bold">{startup.name}</h3>
                                                        <div className="flex items-center space-x-2 text-sm">
                                                            <span className="border border-black px-2 py-1">{startup.sector}</span>
                                                            <span className={`px-2 py-1 border text-xs ${startup.riskLevel === "Low" ? "border-green-500 text-green-600" :
                                                                startup.riskLevel === "Moderate" ? "border-yellow-500 text-yellow-600" :
                                                                    "border-red-500 text-red-600"
                                                                }`}>
                                                                {startup.riskLevel}
                                                            </span>
                                                            <span className="text-gray-600">📍 {startup.location}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-sm mb-2 line-clamp-1">{startup.description}</div>

                                                <div className="flex flex-wrap gap-1 mb-2">
                                                    {startup.tags.slice(0, 4).map((tag, index) => (
                                                        <span key={index} className="text-xs bg-blue-50 border border-blue-200 px-2 py-1">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Progress bar for list view */}
                                                <div className="w-full max-w-xs">
                                                    <div className="flex justify-between text-xs mb-1">
                                                        <span>Funding Progress:</span>
                                                        <span>{startup.fundingProgress}%</span>
                                                    </div>
                                                    <div className="border border-black h-2">
                                                        <div
                                                            className="bg-black h-full"
                                                            style={{ width: `${startup.fundingProgress}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-right ml-4">
                                                <div className="mb-4">
                                                    <div className="text-sm text-gray-600">NFT Price</div>
                                                    <div className="text-xl font-bold">${startup.nftPrice}</div>
                                                    <div className="text-xs text-gray-600">ckUSDC</div>
                                                </div>

                                                <div className="mb-4">
                                                    <div className="text-sm text-gray-600">Monthly Return</div>
                                                    <div className="text-lg font-bold text-green-600">${startup.monthlyReturn}</div>
                                                    <div className="text-xs text-gray-600">{startup.annualROI}% annually</div>
                                                </div>

                                                <div className="space-y-2">
                                                    <button
                                                        onClick={() => router.push(`/marketplace/startup/${startup.id}`)}
                                                        className="w-full border border-black py-2 text-sm hover:bg-gray-100"
                                                    >
                                                        Details
                                                    </button>
                                                    {startup.availableNfts > 0 ? (
                                                        <button
                                                            onClick={() => handleInvestClick(startup)}
                                                            className="w-full bg-black text-white py-2 text-sm hover:bg-gray-800"
                                                        >
                                                            Invest
                                                        </button>
                                                    ) : (
                                                        <button
                                                            disabled
                                                            className="w-full bg-gray-300 text-gray-500 py-2 text-sm cursor-not-allowed"
                                                        >
                                                            Funded
                                                        </button>
                                                    )}
                                                </div>

                                                <div className="text-xs text-gray-600 mt-2">
                                                    {startup.availableNfts} NFTs left
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {sortedStartups.length > 0 && (
                    <div className="flex justify-center items-center mt-8 space-x-2">
                        <button className="border border-black px-4 py-2 text-sm hover:bg-gray-100">
                            ← Previous
                        </button>
                        <div className="flex space-x-1">
                            {[1, 2, 3].map(page => (
                                <button
                                    key={page}
                                    className={`px-3 py-2 text-sm border border-black ${page === 1 ? "bg-black text-white" : "hover:bg-gray-100"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                        <button className="border border-black px-4 py-2 text-sm hover:bg-gray-100">
                            Next →
                        </button>
                    </div>
                )}
            </div>

            {/* Login Required Modal */}
            {showLoginModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white border-4 border-black p-6 max-w-md mx-4">
                        <h3 className="text-xl font-bold mb-4">🔐 LOGIN REQUIRED</h3>
                        <div className="mb-6">
                            <div className="text-sm mb-3">
                                To invest in <span className="font-bold">{selectedStartup?.name}</span>, you need to connect your Internet Identity and create an investor account.
                            </div>
                            <div className="border-2 border-black p-3 bg-gray-50">
                                <div className="text-sm font-bold mb-2">Investment Details:</div>
                                <div className="text-sm space-y-1">
                                    <div>• NFT Price: ${selectedStartup?.nftPrice} ckUSDC</div>
                                    <div>• Monthly Return: ${selectedStartup?.monthlyReturn}</div>
                                    <div>• Annual ROI: {selectedStartup?.annualROI}%</div>
                                    <div>• Available NFTs: {selectedStartup?.availableNfts}</div>
                                    <div>• Risk Level: {selectedStartup?.riskLevel}</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => router.push("/onboarding")}
                                className="flex-1 bg-black text-white py-2 font-bold hover:bg-gray-800"
                            >
                                CONNECT & INVEST
                            </button>
                            <button
                                onClick={() => setShowLoginModal(false)}
                                className="flex-1 border border-black py-2 font-bold hover:bg-gray-100"
                            >
                                CANCEL
                            </button>
                        </div>

                        <div className="text-xs text-gray-600 mt-3 text-center">
                            Registration takes less than 5 minutes • Secure blockchain identity
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="border-t-2 border-black py-8 px-4 mt-12">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                        <div>
                            <div className="font-bold mb-2">INVESTMENT GUIDE</div>
                            <div>Learn how to evaluate and invest in startups</div>
                        </div>
                        <div>
                            <div className="font-bold mb-2">RISK ASSESSMENT</div>
                            <div>Understanding investment risks and returns</div>
                        </div>
                        <div>
                            <div className="font-bold mb-2">COMMUNITY</div>
                            <div>Connect with other investors and founders</div>
                        </div>
                        <div>
                            <div className="font-bold mb-2">SUPPORT</div>
                            <div>Get help with your investment journey</div>
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

export default StartupListPage;