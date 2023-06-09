// js replace methods

// ignore (,) coma from string
replace(/\,/g, '')

// ignore any space from string
replace(/\s/g, '')

// es13 class method
class userInfo {
    name = "ANmol"
    age = "23"
}
const uInfo = new userInfo();
console.log(uInfo.age)

// javascript clicked button target class or anything
function update() {
    var clickedButtonEvent = event.target;
    var cardElement = clickedButtonEvent.parentNode;
    var updatePackageInput = cardElement.querySelector('.updatePackage');
    var packageValue = updatePackageInput.value.replace("000", "0,00")
    updatePackageInput.value = packageValue;
    console.log(updatePackageInput)
}

// jquery use multiple events on click
// $('.text_package_input').on('click mouseleave', calculatePrice);


// toLocalString function helps to convert numbers to like a calculator results
let calculation = getSmsRate * getPackage;
var getPrice = price.val(calculation.toFixed(2).replace(/\.?0+$/, ''));
var result = parseInt(getPrice.val());
var formattedResult = result.toLocaleString();
price.val(formattedResult)


// Improved calculation code
function calculatePrice() {
    console.clear();
    var clickedButton = $(this);
    const numeric = new numericalDigit();
    const findStringValue = new findString();
    var role = clickedButton.closest('.card').find('.selected_role');
    var smsRate = clickedButton.closest('.card').find('.updateSmsRate');
    var package = clickedButton.closest('.card').find('.updatePackage');
    var price = clickedButton.closest('.card').find('.updatePrice');
    var getSmsRate = smsRate.val()
    var getPackage = package.val().toLowerCase().replace(/\s/g, '').replace(/\,/g, '');
    if (getPackage.match(findStringValue.lakh)) {
        getPackage = getPackage.replace(/lakh/g, numeric.lakh).replace(/\D/g, '');
    }
    if (getPackage.match(findStringValue.lac)) {
        getPackage = getPackage.replace(/lac/g, numeric.lakh).replace(/\D/g, '');
    }
    if (getPackage.match(findStringValue.mil)) {
        getPackage = getPackage.replace(/million/g, numeric.million).replace(/\D/g, '');
    }
    let calculation = getSmsRate * getPackage;
    var getPrice = price.val(calculation.toFixed(2).replace(/\.?0+$/, ''));
    var updatePrice = parseInt(getPrice.val());
    var formattedPrice = updatePrice.toLocaleString();
    price.val(formattedPrice)
    return formattedPrice;
}



// MOre relaibke calculation funciton
function calculatePrice() {
     console.clear();
    var clickedButton = $(this);
    const numeric = new numericalDigit();
    const findStringValue = new findString();
    var role = clickedButton.closest('.card').find('.selected_role');
    var smsRate = clickedButton.closest('.card').find('.updateSmsRate');
    var package = clickedButton.closest('.card').find('.updatePackage');
    var price = clickedButton.closest('.card').find('.updatePrice');
    var getSmsRate = smsRate.val()
    var getPackage = package.val().toLowerCase().replace(/\s/g, '').replace(/\,/g, '');
    let updatePackageValue = "";
    let calculation = "";
    let toLocaleString = "";
    if (getPackage.match(findStringValue.lakh)) {
        updatePackageValue = getPackage.replace(/lakh/g, numeric.lakh).replace(/\D/g, '');
    }
    if (getPackage.match(findStringValue.lac)) {
        updatePackageValue = getPackage.replace(/lac/g, numeric.lakh).replace(/\D/g, '');
    }
    if (getPackage.match(findStringValue.mil)) {
        updatePackageValue = getPackage.replace(/million/g, numeric.million).replace(/\D/g, '');
    }
    if (getPackage.match(numeric.thousand)) {
        toLocaleString = getPackage.replace(numeric.thousand, ",000")
        package.val(toLocaleString)
    }
    if (getPackage.match(numeric.tenThousand)) {
        toLocaleString = getPackage.replace(numeric.tenThousand, "0,000")
        package.val(toLocaleString)
    }
    if (getPackage.match(numeric.lakh)) {
        toLocaleString = getPackage.replace(numeric.lakh, "00,000")
        package.val(toLocaleString)
    }
    if (getPackage.match(numeric.million)) {
        toLocaleString = getPackage.replace(numeric.million, ",000,000")
        package.val(toLocaleString)
    }
    if (updatePackageValue == "") {
        calculation = getSmsRate * getPackage;
    } else {
        calculation = getSmsRate * updatePackageValue;
    }
    var getPrice = price.val(calculation.toFixed(2).replace(/\.?0+$/, ''));
    var updatePrice = parseInt(getPrice.val());
    var formattedPrice = updatePrice.toLocaleString();
    price.val(formattedPrice)
    return formattedPrice;

}