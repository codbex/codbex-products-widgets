const widgetData = {
    id: 'top-products',
    label: 'Top products',
    link: '/services/web/codbex-orders-widgets/subviews/top-products.html',
    lazyLoad: true,
    order: 15
};

export function getWidget() {
    return widgetData;
}

if (typeof exports !== 'undefined') {
    exports.getWidget = function () {
        return widgetData;
    }
}