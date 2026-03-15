'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, Tv, Loader2, ImageOff, ArrowUp, Globe } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';

export default function ChannelsPage() {
    const [allChannels, setAllChannels] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleCount, setVisibleCount] = useState(60);

    useEffect(() => {
        fetch('/data/channels.json')
            .then(res => res.json())
            .then(data => {
                setAllChannels(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const filteredChannels = useMemo(() => {
        if (!searchTerm) return allChannels;
        const term = searchTerm.toLowerCase();
        return allChannels.filter(c =>
            c.name?.toLowerCase().includes(term) ||
            c.category?.toLowerCase().includes(term)
        );
    }, [searchTerm, allChannels]);

    const displayChannels = filteredChannels.slice(0, visibleCount);

    if (loading) return (
        <div className="flex h-screen items-center justify-center bg-[#0B0F13]">
            <Loader2 className="animate-spin text-[#10B981] w-12 h-12" />
        </div>
    );

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#0B0F13] py-10 px-4 text-[#F8FAFC]">
                <div className="max-w-7xl mx-auto">

                    {/* --- SEO Optimized Header --- */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-6xl font-black text-[#F8FAFC] mb-4 tracking-tighter uppercase italic">
                        Official <span className="text-[#10B981]">Apollo Group TV</span> Channel List
                    </h1>

                    <div className="max-w-3xl mx-auto mb-6">
                        <p className="text-[#94A3B8] text-lg font-medium leading-relaxed">
                            Explore the most stable <span className="text-[#F8FAFC] font-bold">Apollo Group TV lineup</span>.
                            Access over {allChannels.length.toLocaleString()} premium channels including
                            <span className="text-[#10B981] font-bold"> 4K Sports, Movies, and International Entertainment</span>.
                            Experience the best IPTV subscription for 2026.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        <span className="bg-[#151B23] border border-[#30363D] text-[#94A3B8] text-[10px] font-bold px-3 py-1 rounded-full uppercase">#1 Apollo Group TV</span>
                        <span className="bg-[#151B23] border border-[#30363D] text-[#94A3B8] text-[10px] font-bold px-3 py-1 rounded-full uppercase">4K Ultra HD</span>
                        <span className="bg-[#151B23] border border-[#30363D] text-[#94A3B8] text-[10px] font-bold px-3 py-1 rounded-full uppercase">Global Coverage</span>
                    </div>
                </div>

                {/* Search Section */}
                <div className="relative max-w-3xl mx-auto mb-16">
                    <div className="absolute -inset-1 bg-[#10B981] rounded-[2rem] blur opacity-10"></div>
                    <div className="relative bg-[#151B23] border border-[#30363D] rounded-[2rem] shadow-xl overflow-hidden flex items-center">
                        <Search className="ml-6 text-[#94A3B8] w-6 h-6" />
                        <input
                            type="text"
                            placeholder="Search Apollo Group TV Channels (e.g. Sports, Cinema...)"
                            className="w-full pl-4 pr-8 py-6 bg-transparent outline-none text-xl font-semibold text-[#F8FAFC] placeholder-[#30363D]"
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setVisibleCount(60);
                            }}
                        />
                    </div>
                </div>

                {/* --- Channels Grid --- */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                    {displayChannels.map((channel, index) => {
                        const rawLogo = channel.logo?.replace('https://', '').replace('http://', '') || '';
                        const proxiedLogo = `https://images.weserv.nl/?url=${encodeURIComponent(rawLogo)}&w=300&h=300&fit=contain&errorredirect=https://placehold.co/300x300/151B23/10B981?text=TV`;

                        return (
                            <div key={`${channel.id}-${index}`} className="group bg-[#151B23] rounded-3xl p-4 border border-[#30363D] hover:border-[#10B981] hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300">
                                <div className="relative aspect-square rounded-2xl bg-[#0B0F13] mb-4 overflow-hidden flex items-center justify-center border border-[#30363D]">
                                    <img
                                        src={proxiedLogo}
                                        alt={`${channel.name} - Apollo Group TV Channel`}
                                        referrerPolicy="no-referrer"
                                        loading="lazy"
                                        className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h2 className="font-bold text-[12px] text-[#F8FAFC] line-clamp-2 min-h-[34px] leading-tight mb-2 uppercase tracking-tight">
                                    {channel.name}
                                </h2>
                                <div className="flex items-center gap-1 text-[9px] font-extrabold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1.5 rounded-xl uppercase truncate">
                                    <Globe className="w-3 h-3" />
                                    {channel.category || 'Apollo World TV'}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Load More */}
                {visibleCount < filteredChannels.length && (
                    <div className="mt-20 text-center pb-20">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 60)}
                            className="px-12 py-5 bg-[#10B981] text-[#0B0F13] font-black rounded-full hover:scale-105 transition-all shadow-xl shadow-[#10B981]/10"
                        >
                            LOAD MORE APOLLO CHANNELS
                        </button>
                    </div>
                )}

                {/* --- SEO Footer Text --- */}
                <section className="mt-20 pt-10 border-t border-[#30363D] text-[#94A3B8] text-xs leading-relaxed max-w-4xl mx-auto text-center">
                    <p>
                        <strong>Apollo Group TV</strong> offers the world's most reliable IPTV channels list.
                        Our subscription features 49,000+ options including high-definition sports, movies, and news from
                        <strong> UK, USA, Canada, and Arabic </strong> networks.
                        Optimized for all streaming devices, Apollo Group TV ensures 99.9% uptime and premium quality.
                    </p>
                </section>
            </div>
            </div>
            <Footer />
            <WhatsAppButton />
        </>
    );
}