const widgetData = {
    id: 'inventory-accuracy',
    label: 'Inventory Accuracy',
    link: '/services/web/codbex-orders-widgets/subviews/inventory-accuracy.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getWidget = function () {
        return widgetData;
    }
}