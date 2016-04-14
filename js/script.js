var total = 0;
var index = 0;

function setProductVisited (product) {
    var productVisited = document.getElementById('product-visited');
    productVisited.href = product.detailUrl;
    
    var productVisitedImage = document.getElementById('product-visited-image');
    productVisitedImage.src = product.imageName;
    
    var productVisitedName = document.getElementById('product-visited-name');
    productVisitedName.innerHTML = product.name;
    
    var productVisitedOldPrice = document.getElementById('product-visited-oldPrice');
    productVisitedOldPrice.innerHTML = product.oldPrice;
    
    var productVisitedPrice = document.getElementById('product-visited-price');
    productVisitedPrice.innerHTML = product.price;
    
    var productVisitedPaymentConditions = document.getElementById('product-visited-payment-conditions');
    productVisitedPaymentConditions.innerHTML = product.productInfo.paymentConditions;
    
}

function setProductsRecommendation (products) {
    
    for (var i=0; i<products.length; i++) {
        var product = products[i];
        setProductRecommendation(product);
    }
    
    total = products.length;
    
    var width = total * 160;
    
    var inner = document.getElementById('product-slider-inner');
    inner.style.width = width+"px";
    
}

function setProductRecommendation (product) {
    var element = document.createElement('a');
    var inner = '<div class="product-image">' +
                '    <img src="' + product.imageName + '" />' +
                '</div>' +
                '<div class="product-name">' + product.name + '</div>';
                if (product.oldPrice != null)
        inner +='    <div>De: ' + product.oldPrice + '</div>';
        inner +='    <div class="product-price">' +
                '        <div class="price">Por: <strong>' + product.price + '</strong></div>' +
                '        <div class="price-condition"><strong>' + product.productInfo.paymentConditions + '<br><span class="condition">sem juros</span></strong></div>' +
                '    </div>';
                '</div>';
    element.innerHTML = inner;
    element.className = 'product';
    element.href = product.detailUrl;
    
    var div = document.getElementById('product-slider-inner');
    div.appendChild(element);
    
}

function MoveForward () {
    if (index >= total - 4) {
        return false;
    }
    
    index++;
    
    if (index >= total - 4) {
        var moveForward = document.getElementById('move-forward');
        moveForward.className = "icon inactive";
    }
    
    var moveBack = document.getElementById('move-back');
    moveBack.className = "icon";
    
    var left = index * 160;
    
    var inner = document.getElementById('product-slider-inner');
    inner.style.left = "-"+left+"px";
}

function MoveBack () {
    if (index <= 0) {
        return false;
    }
    
    index--;
    
    if (index <= 0) {
        var moveBack = document.getElementById('move-back');
        moveBack.className = "icon inactive";
    }
    
    var moveForward = document.getElementById('move-forward');
    moveForward.className = "icon";
    
    var left = index * 160;
    
    var inner = document.getElementById('product-slider-inner');
    inner.style.left = "-"+left+"px";
}

function X(content) {
    
    var productVisited = content.data.reference.item;
    
    setProductVisited(productVisited);
    
    var recommendation = content.data.recommendation;
    setProductsRecommendation(recommendation);
    
}

var script = document.createElement('script');
// assing src with callback name
script.src = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X';

// insert script to document and load content
document.body.appendChild(script);