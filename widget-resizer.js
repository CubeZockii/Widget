// widget-resizer.js
document.addEventListener('DOMContentLoaded', () => {
    function resizeWidget() {
        const body = document.body;
        const height = body.scrollHeight;
        // Increase the width by a fixed amount, e.g., 50 pixels
        const width = body.scrollWidth + 5000; 

        window.parent.postMessage({
            type: 'resize-widget',
            height: height,
            width: width
        }, '*'); 
    }

    // Initial resize
    resizeWidget();

    const observer = new MutationObserver(resizeWidget);
    observer.observe(document.body, { attributes: true, childList: true, subtree: true });
});
