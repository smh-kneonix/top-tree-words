const top3Words = require("./index");

let arrayOfTestData = [
    "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.",
    "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e",
    "// wont won't won't",
];

test("expect to delete punctuation and return top 3 used word from paragraph", () => {
    
    let data = top3Words(arrayOfTestData[0]);
    expect(data).toEqual(["a", "of", "on"]);

    data = top3Words(arrayOfTestData[1]);
    expect(data).toEqual(["e", "ddd", "aa"]);

    data = top3Words(arrayOfTestData[2]);
    expect(data).toEqual(["won't", "wont"]);
});
