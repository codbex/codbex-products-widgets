const widgetData = {
    id: 'product-details',
    label: 'Product details',
    link: '/services/web/codbex-orders-widgets/subviews/product-details.html',
    lazyLoad: true,
    order: 14
};

if (typeof exports !== 'undefined') {
    exports.getWidget = function () {
        return widgetData;
    }
}