import ALPHABET from "../../dist/alphabet";
import DIGIT from "../../dist/digit";
import Numeric from "../../dist/validator/numeric";
import NumericMessage from "../../dist/validatable/string/numeric";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

let map = new Map<string, [boolean, string]>();

describe('add alphabet', ()=>{

    map.set(ALPHABET, [false, 'all alphabet']);

    for (let letter of ALPHABET) {
        map.set(letter, [false, '1 alphabet']);
    }

});

describe('add numeric', ()=>{

    map.set(DIGIT, [true, 'all number']);

    for (let number of DIGIT) {

        map.set(number, [true, '1 number']);
    }
});

describe('add numeric & alphabet', ()=>{

    map.set(ALPHABET + DIGIT, [false, 'mixed alphabet numeric']);
});


describe('add unicode', ()=>{

    map.set('🕵🏻‍♀️', [false, 'emoji']);
    map.set('ℋ', [false, 'astral']);
});


describe('add empty', ()=>{

    map.set('', [true, 'empty']);
    map.set(String.fromCodePoint(0), [false, 'ASCII NULL']);

});

for(let [value, [valid, message]] of map) {

    it(message, ()=>{

        let validator = new Numeric(NumericMessage);
        let validatable = validator.validate(value);
        expect(validatable.valid).toBe(valid);
        expect(validatable.value).toBe(value);

        if(validatable.valid) {
            expect(validatable.message).toBe('string is numeric');
        } else {
            expect(validatable.message).toBe('string is not numeric');
        }
    });
}
