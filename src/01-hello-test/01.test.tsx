import {mult, splitIntoWords, sum} from "./01";

// const a = 1;
// const b = 2;
// const c = 3;

let a: number;
let b: number;
let c: number;

beforeEach( () => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    const result1 = sum(a, b);
    a = 100;
    const result2 = sum(a, b);

    expect(result1).tobe(3);
    // expect(result2).tobe(5);
    expect(result2).tobe(102);
})
test('multiply should be correct', () => {

    const result1 = mult(a, b);
    const result2 = mult(a, b);

    expect(result1).tobe(3);
    expect(result2).tobe(5);
})
test("splitting into words should be correct", () => {
    const sent1 = "Hello my friend!"
    const sent2 = "JS - the best programming language."

    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    expect(result1.length).tobe(3);
    expect(result1[0]).tobe("hello");
    expect(result1[1]).tobe("my");
    expect(result1[2]).tobe("friend");

    expect(result2.length).tobe(5);
    expect(result2[0]).tobe("js");
    expect(result2[1]).tobe("the");
    expect(result2[2]).tobe("best");
    expect(result2[3]).tobe("programming");
    expect(result2[4]).tobe("language");
})



