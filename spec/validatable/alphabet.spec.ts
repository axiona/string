import ALPHABET from '../../dist/alphabet';
import DIGIT from '../../dist/digit';
import {AlphabetParameters} from '../../dist/validatable/alphabet';
import AlphabetMessage from '../../dist/assert/string/alphabet';
import AlphabetMessageArgument from '../../dist/assert/string/alphabet';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let map = new Map<string, [boolean, string]>();

it('add alphabet', ()=>{

    map.set(ALPHABET, [true, 'all alphabet']);

    for (let letter of ALPHABET) {
        map.set(letter, [true, '1 alphabet']);
    }

});

it('add digit', ()=>{

    map.set(DIGIT, [false, 'all number']);

    for (let number of DIGIT) {

        map.set(number, [false, '1 number']);
    }
});

it('add digit & alphabet', ()=>{

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

        let validatable = AlphabetParameters(value, AlphabetMessage.Parameters);
        expect(validatable.valid).toBe(valid);
        expect(validatable.value).toBe(value);

        expect(validatable.message).toBe(AlphabetMessageArgument.Parameters(validatable.value, validatable.valid));
    });
}

