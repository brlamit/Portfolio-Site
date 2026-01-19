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
    // AdSense script is loaded in index.html <head>; just initialize ads
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) {
      // If script not yet available, retry shortly
      const retry = () => {
        try {
          (window as any).adsbygoogle = (window as any).adsbygoogle || [];
          (window as any).adsbygoogle.push({});
        } catch (err) {
          // ignore
        }
      };
      setTimeout(retry, 250);
    }
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