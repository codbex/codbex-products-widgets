const viewData = {
    id: 'top-products',
    label: 'Top products',
    link: '/services/web/codbex-orders-widgets/subviews/top-products.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}