import ALPHABET from "../../dist/alphabet";
import DIGIT from "../../dist/digit";
import Empty from "../../dist/validator/empty-parameters";
import EmptyMessage from "../../dist/assert/string/empty-parameters";
import EmptyMessageArgument from "../../dist/assert/string/empty-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

let map = new Map<string, [boolean, string]>();

describe('add alphabet', ()=>{

    map.set(ALPHABET, [false, 'all alphabet']);

    for (let letter of ALPHABET) {
        map.set(letter, [false, '1 alphabet']);
    }

});

describe('add digit', ()=>{

    map.set(DIGIT, [false, 'all number']);

    for (let number of DIGIT) {

        map.set(number, [false, '1 number']);
    }
});

describe('add digit & alphabet', ()=>{

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

    describe('empty', () => {

        it(message, ()=>{

            let validator = Empty(EmptyMessage);
            let validatable = validator(value);
            expect(validatable.valid).toBe(valid);
            expect(validatable.value).toBe(value);

            expect(validatable.message).toBe(EmptyMessageArgument(validatable.value, validatable.valid));
        });

    });

}

