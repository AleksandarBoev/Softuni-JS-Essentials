/**
 *
 * @param str1 {String}
 * @param str2 {String}
 * @param str3 {String}
 */

function stringLength(str1, str2, str3) {
    const totalLength = str1.length + str2.length + str3.length;
    const averageLength = Math.floor(totalLength / 3);
    console.log(totalLength);
    console.log(averageLength);
}

// stringLength('pasta', '5', '22.3');