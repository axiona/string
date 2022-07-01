import ALPHABET from '../../dist/alphabet';
import DIGIT from '../../dist/digit';
import {NumericParameters} from '../../dist/validatable/numeric';
import NumericMessage from '../../dist/assert/string/numeric';
import NumericMessageArgument from '../../dist/assert/string/numeric';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let map = new Map<string, [boolean, string]>();

it('add alphabet', ()=>{

    map.set(ALPHABET, [false, 'all alphabet']);

    for (let letter of ALPHABET) {
        map.set(letter, [false, '1 alphabet']);
    }

});

it('add numeric', ()=>{

    map.set(DIGIT, [true, 'all number']);

    for (let number of DIGIT) {

        map.set(number, [true, '1 number']);
    }
});

it('add numeric & alphabet', ()=>{

    map.set(ALPHABET + DIGIT, [false, 'mixed alphabet numeric']);
});


it('add unicode', ()=>{

    map.set('🕵🏻‍♀️', [false, 'emoji']);
    map.set('ℋ', [false, 'astral']);
});


it('add empty', ()=>{

    map.set('', [true, 'empty']);
    map.set(String.fromCodePoint(0), [false, 'ASCII NULL']);

});

for(let [value, [valid, message]] of map) {

    it(message, ()=>{

        let validatable = NumericParameters(value, NumericMessage.Parameters);
        expect(validatable.valid).toBe(valid);
        expect(validatable.value).toBe(value);

        expect(validatable.message).toBe(NumericMessageArgument.Parameters(validatable.value, validatable.valid));
    });
}

