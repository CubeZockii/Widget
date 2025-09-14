// widget-resizer.js
document.addEventListener('DOMContentLoaded', () => {
    function resizeWidget() {
        const body = document.body;
        const height = body.scrollHeight;

        window.parent.postMessage({
            type: 'resize-widget',
            height: height
        }, '*');
    }

    // Initial resize
    resizeWidget();

    const observer = new MutationObserver(resizeWidget);
    observer.observe(document.body, { attributes: true, childList: true, subtree: true });
});
