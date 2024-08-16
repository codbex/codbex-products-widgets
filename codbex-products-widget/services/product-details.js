const viewData = {
    id: 'product-details',
    label: 'Product details',
    link: '/services/web/codbex-orders-widgets/subviews/product-details.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}