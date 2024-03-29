import {PadOptionParameters} from '../dist/pad-option.js';
import Affix from '../dist/affix/affix.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('left', function() {

    expect(PadOptionParameters('12345', '.|', 10, Affix.PREFIX)).toBe('.|.|.12345');

});

it('right', function() {

    expect(PadOptionParameters('12345', '.|', 10, Affix.SUFFIX)).toBe('12345.|.|.');

});

it('both', function() {

    expect(PadOptionParameters('12345', '.|', 10, Affix.CIRCUMFIX)).toBe('.|12345.|.');

});
