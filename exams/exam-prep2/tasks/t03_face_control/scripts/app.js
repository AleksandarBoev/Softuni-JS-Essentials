function getData() {
    let inList = {};
    let outList = {};
    let blacklist = {};

    const textAreaElement = document.querySelector('div#input textarea');
    const inputValue = JSON.parse(textAreaElement.value);

    for (let i = 0; i < inputValue.length - 1; i +=1 ) {
        const personInfo = inputValue[i];

        const firstName = personInfo['firstName'];
        const lastName = personInfo['lastName'];
        const action = personInfo['action'];
        const names = firstName + ' ' + lastName;

        if (action === 'peopleIn') {
            if (blacklist[names] === undefined) { //if the person is NOT in the blacklist
                if (outList[names] !== undefined) {
                    delete outList[names];
                }
                inList[names] = {};
                inList[names]['firstName'] = firstName;
                inList[names]['lastName'] = lastName;
            }
        } else if (action === 'peopleOut') {
            if (inList[names] !== undefined) {
                delete inList[names];

                outList[names] = {};
                outList[names]['firstName'] = firstName;
                outList[names]['lastName'] = lastName;
            }
        } else if (action === 'blacklist') {
            if (inList[names] !== undefined) {
                delete inList[names];

                outList[names] = {};
                outList[names]['firstName'] = firstName;
                outList[names]['lastName'] = lastName;
            }

            blacklist[names] = {};
            blacklist[names]['firstName'] = firstName;
            blacklist[names]['lastName'] = lastName;
        }
    }

    inList = Object.entries(inList);
    outList = Object.entries(outList);
    blacklist = Object.entries(blacklist);

    const sortInfo = inputValue[inputValue.length - 1];
    const specificName = sortInfo['criteria'];
    const peopleToBeSorted = sortInfo['action'];

    const getSortedEntries = (entries, specificName) =>
        entries.sort((e1, e2) => e1[1][specificName].localeCompare(e2[1][specificName]));

    if (peopleToBeSorted === 'peopleIn') {
        inList = getSortedEntries(inList, specificName);
    } else if (peopleToBeSorted === 'peopleOut') {
        outList = getSortedEntries(outList, specificName);
    } else if (peopleToBeSorted === 'blacklist') {
        blacklist = getSortedEntries(blacklist, specificName);
    }

    const entryToString = (entry) => `{"firstName":"${entry[1].firstName}","lastName":"${entry[1].lastName}"}`;
    const listToString = (list, entryStringifyFunction) => list.map(e => entryStringifyFunction(e)).join(' ');

    const inListString = listToString(inList, entryToString);
    const outListString = listToString(outList, entryToString);
    const blackListString = listToString(blacklist, entryToString);

    const peopleInParagraph = document.querySelector('div#peopleIn p');
    const peopleOutParagraph = document.querySelector('div#peopleOut p');
    const blacklistParagraph = document.querySelector('div#blacklist p');

    peopleInParagraph.textContent = inListString;
    peopleOutParagraph.textContent = outListString;
    blacklistParagraph.textContent = blackListString;
}
