function solve() {
    const inputString = document.querySelector('#arr').value;
    const array = JSON.parse(inputString);

    const getUserDataAsObject = (userDataString) => {
        const namesRegex = /^[A-Z][a-z]* [A-Z][a-z]*\s/;
        // const phoneNumberRegex = /\s\+359(?<separator>( |-))\d\1\d{3}\1\d{3}\s/; //judge doesn't support named groups
        let phoneNumberRegex;
        const phoneNumberRegexWithSpaces = /\s\+359 \d \d{3} \d{3}\s/;
        const phoneNumberRegexWithDashes =/\s\+359-\d-\d{3}-\d{3}\s/;
        const emailRegex = /\s[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

        const nameIsCorrect = namesRegex.test(userDataString);

        let phoneNumberIsCorrect = true;
        if (phoneNumberRegexWithSpaces.test(userDataString)) {
            phoneNumberRegex = phoneNumberRegexWithSpaces;
        } else if (phoneNumberRegexWithDashes.test(userDataString)) {
            phoneNumberRegex = phoneNumberRegexWithDashes;
        } else {
            phoneNumberIsCorrect = false;
        }

        const emailIsCorrect = emailRegex.test(userDataString);

        if (!(nameIsCorrect && phoneNumberIsCorrect && emailIsCorrect))
            return null;

        const names = namesRegex.exec(userDataString)[0].trim();
        const phoneNumber = phoneNumberRegex.exec(userDataString)[0].trim();
        const email = emailRegex.exec(userDataString)[0].trim();

        return {
            'name': names,
            'phoneNumber': phoneNumber,
            'email': email,
            namesToString: () => `Name: ${names}`,
            phoneNumberToString: () => `Phone Number: ${phoneNumber}`,
            emailToString: () => `Email: ${email}`
        }
    };

    const getParagraphWithTextContent = (textContent) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = textContent;
        return paragraph;
    };

    const resultSpan = document.querySelector('#result');

    for (const currentUserData of array) {
        const userDataObject = getUserDataAsObject(currentUserData);

        if (userDataObject === null) {
            resultSpan.appendChild(getParagraphWithTextContent('Invalid data'));
        } else {
            resultSpan.appendChild(getParagraphWithTextContent(userDataObject.namesToString()));
            resultSpan.appendChild(getParagraphWithTextContent(userDataObject.phoneNumberToString()));
            resultSpan.appendChild(getParagraphWithTextContent(userDataObject.emailToString()));
        }

        resultSpan.appendChild(getParagraphWithTextContent('- - -'));
    }
}