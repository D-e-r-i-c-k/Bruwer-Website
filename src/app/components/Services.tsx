import React from 'react';

const CameraIcon = (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
    <rect x="3" y="7" width="18" height="13" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="13.5" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="8" y="3" width="8" height="4" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const VideoIcon = (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
    <rect x="3" y="7" width="13" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <polygon points="16,9 21,7 21,17 16,15" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const DroneIcon = (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
    <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M2 12h4m12 0h4M12 2v4m0 12v4" stroke="currentColor" strokeWidth="2" />
    <rect x="4" y="4" width="4" height="4" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="16" y="4" width="4" height="4" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="4" y="16" width="4" height="4" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="16" y="16" width="4" height="4" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const iconStyles =
  'flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 text-3xl mb-4 shadow-lg mx-auto';

const Services = () => (
  <section className="relative py-24 px-4 overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 -z-10">
      <img
        src="/hero-bg.jpg"
        alt="Services Background"
        className="w-full h-full object-cover object-center"
        style={{ filter: 'blur(4px) brightness(0.5)' }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-white relative z-10">
      {/* Photography */}
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-xl p-10 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300">
        <div className={iconStyles}>{CameraIcon}</div>
        <h3 className="text-2xl font-extrabold mb-3 tracking-wide">Photography</h3>
        <p className="mb-6 text-gray-300 font-medium">Professional photography services for story-driven content with a clean and timeless style, creating deeper connections with any audience.</p>
        <span className="font-bold text-gray-100 mb-2 tracking-wider">PHOTO GEAR</span>
        <ul className="text-left text-sm text-gray-400 space-y-1">
          <li>- Sony Alpha A1</li>
          <li>- Sony GM Lenses</li>
          <li>- 50 MP Images</li>
        </ul>
      </div>
      {/* Videography */}
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-xl p-10 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300">
        <div className={iconStyles}>{VideoIcon}</div>
        <h3 className="text-2xl font-extrabold mb-3 tracking-wide">Videography</h3>
        <p className="mb-6 text-gray-300 font-medium">Dynamic and creative video production, capturing real moments and stories with cinematic visuals, smooth editing, and engaging sound design. Perfect for events, social media, and creative projects.</p>
        <span className="font-bold text-gray-100 mb-2 tracking-wider">VIDEO GEAR</span>
        <ul className="text-left text-sm text-gray-400 space-y-1">
          <li>- Up To 8K LOG Recording</li>
          <li>- Ronin Stabilization</li>
          <li>- Graded With DaVinci Resolve</li>
        </ul>
      </div>
      {/* Aerial Services */}
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-xl p-10 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300">
        <div className={iconStyles}>{DroneIcon}</div>
        <h3 className="text-2xl font-extrabold mb-3 tracking-wide">Aerial Services</h3>
        <p className="mb-6 text-gray-300 font-medium">Take your content to new heights with breathtaking aerial drone imaging and videography for real estate, landscapes, and creative films.</p>
        <span className="font-bold text-gray-100 mb-2 tracking-wider">DRONE GEAR</span>
        <ul className="text-left text-sm text-gray-400 space-y-1">
          <li>- DJI Mavic 3</li>
          <li>- Hasselblad Camera</li>
          <li>- Fully Licensed / Insured</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Services;