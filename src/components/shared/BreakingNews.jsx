
import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {

    const news = [
        {
            "id": 1,
            "title": "Explosions reported over Tehran amid rising regional tensions"
        },
        {
            "id": 2,
            "title": "US imposes new sanctions targeting Iran-linked oil trade"
        },
        {
            "id": 3,
            "title": "Firing incident in Central Delhi leaves one person injured"
        },
        {
            "id": 4,
            "title": "Two suspected terrorists arrested in Uttar Pradesh"
        },
        {
            "id": 5,
            "title": "Global energy concerns rise due to Middle East instability"
        },
        {
            "id": 6,
            "title": "Tornado outbreak damages multiple regions in the United States"
        },
        {
            "id": 7,
            "title": "Heatwave intensifies across parts of North India"
        },
        {
            "id": 8,
            "title": "Stock markets show volatility amid global uncertainty"
        },
        {
            "id": 9,
            "title": "Government announces new infrastructure development plans"
        },
        {
            "id": 10,
            "title": "Tech companies accelerate AI adoption across industries"
        }
    ]

    
    return (

        <div className="w-full bg-black text-white container mx-auto">
            <div className="flex items-center gap-1">
                <div className="bg-red-600 px-4 py-3 font-bold uppercase tracking-wide animate-pulse">
                    Breaking
                </div>

                <div className="flex-1 overflow-hidden py-3">
                    <Marquee pauseOnHover={true} speed={60}>
                        {news.map((item) => (
                            <span key={item.id} className="mx-8">
                                🔴 {item.title}
                            </span>
                        ))}
                    </Marquee>
                </div>

            </div>
        </div>
    );
};

export default BreakingNews;