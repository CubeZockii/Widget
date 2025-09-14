// widget-resizer.js
document.addEventListener('DOMContentLoaded', () => {
    function resizeWidget() {
        const body = document.body;
        const height = body.scrollHeight;
        const width = body.scrollWidth;

        window.parent.postMessage({
            type: 'resize-widget',
            height: height,
            width: width
        }, '*'); // Use a specific origin for better security
    }

    // Initial resize
    resizeWidget();

    // Resize on content changes (e.g., activity updates)
    // This is a simplified approach; a MutationObserver is more robust
    const observer = new MutationObserver(resizeWidget);
    observer.observe(document.body, { attributes: true, childList: true, subtree: true });
});