import React, { useEffect } from 'react';

interface AdProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
  isDarkMode?: boolean;
}

const Ad: React.FC<AdProps> = ({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
  isDarkMode = false
}) => {
  useEffect(() => {
    // Load AdSense script if not already loaded
    if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8523398566125571';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }

    // Initialize ads after script loads
    const initAds = () => {
      try {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    };

    // Small delay to ensure script is loaded
    setTimeout(initAds, 100);
  }, []);

  return (
    <div className={`ad-container p-4 rounded-lg ${
      isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
    } ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8523398566125571"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
};

export default Ad;