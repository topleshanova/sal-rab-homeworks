function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    let message = productName + ' ' + 'за' + ' ' + productPrice + ' ' + 'теперь в корзине!';

    return message;
}

function addInCartCountChange(value) {

    let oldValue = value;
    let newValue = oldValue + 1;

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    let newSum = oldSum + difference;
    let newSumText = newSum + ' ₽';

    // замените склеивание, используемое в newSum Text на шаблонную строку
    // Не поняла, что нужно в последнем шаге этого зания (шаблонная строка)

    return newSumText;
}


