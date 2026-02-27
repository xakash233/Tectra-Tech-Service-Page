import React, { useEffect } from 'react';

export function CalendlyEmbed() {
    useEffect(() => {
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/heyswuu/new-meeting?hide_landing_page_details=1&hide_gdpr_banner=1';

    return (
        <div
            className="calendly-inline-widget w-full"
            data-url={calendlyUrl}
            style={{ minWidth: '320px', height: '500px' }}
        />
    );
}
