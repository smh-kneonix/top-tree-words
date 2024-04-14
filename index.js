function top3Words(text) {
    text = text.toLowerCase().match(/\b[a-z']+/g)

    const wordCount = {};
    text.forEach((word) => {
        wordCount[word] = (wordCount[word] ?? 0) + 1;
    });


    return Object.entries(wordCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map((x) => x[0]);
}

module.exports = top3Words;

// console.log(top3Words("you can uncomment this and test the code by your self"));
console.log(
    top3Words(
        "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."
    )
);
console.log(top3Words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));

console.log(top3Words("// wont won't won't"));
