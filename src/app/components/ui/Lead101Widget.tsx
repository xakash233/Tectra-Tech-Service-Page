import React, { useEffect, useRef } from 'react';

export function Lead101Widget() {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetCode = import.meta.env.VITE_LEAD101_WIDGET_CODE || 'EA06E8D59DC3';

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Clear previous content
        container.innerHTML = '';

        const script = document.createElement('script');
        script.src = `https://thelead101.com/widgets/${widgetCode}/widget.js`;
        script.setAttribute('data-widget-code', widgetCode);
        script.setAttribute('data-width', '100%');
        script.setAttribute('data-height', '500px');
        script.setAttribute('data-primary-color', '#000000');
        script.setAttribute('data-secondary-color', '#f3f4f6');
        script.setAttribute('data-border-radius', '16px');
        script.setAttribute('data-shadow', 'none');
        script.async = true;

        // Append inside the specific div
        container.appendChild(script);

        return () => {
            if (container) {
                container.innerHTML = '';
            }
        };
    }, [widgetCode]);

    return (
        <div
            ref={containerRef}
            id={widgetCode}
            className="w-full min-h-[500px]"
        />
    );
}
