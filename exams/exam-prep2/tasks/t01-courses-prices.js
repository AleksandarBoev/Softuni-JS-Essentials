function coursesPrices(isSignedUpFundamentalsCourse, isSignedUpAdvancedCourse, isSignedUpApplicationsCourse, educationForm) {
    let jsFundamentalsPrice = 170;
    let jsAdvancedPrice = 180;
    let jsApplicationsPrice = 190;

    let totalPrice = 0;

    if (isSignedUpFundamentalsCourse) {
        totalPrice += jsFundamentalsPrice;
    }

    if (isSignedUpAdvancedCourse) {
        totalPrice += jsAdvancedPrice;
    }

    if (isSignedUpApplicationsCourse) {
        totalPrice += jsApplicationsPrice;
    }

    if (isSignedUpFundamentalsCourse && isSignedUpAdvancedCourse) {
        totalPrice -= jsAdvancedPrice * 0.1;
        jsAdvancedPrice -= jsAdvancedPrice * 0.1;
    }

    if (isSignedUpFundamentalsCourse && isSignedUpAdvancedCourse && isSignedUpApplicationsCourse) {
        totalPrice -= totalPrice * 0.06;
    }

    if (educationForm === 'online') {
        if (isSignedUpFundamentalsCourse) {
            totalPrice -= jsFundamentalsPrice * 0.06;
        }

        if (isSignedUpAdvancedCourse) {
            totalPrice -= jsAdvancedPrice * 0.06;
        }

        if (isSignedUpApplicationsCourse) {
            totalPrice -= jsApplicationsPrice * 0.06;
        }
    }

    console.log(totalPrice.toFixed(0));
}

// coursesPrices(true, true, false, "onsite");