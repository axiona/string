import {LowerParameters} from '@axiona/number/boolean/lower.js';
import Count from '../number/count.js';
import MaximumNumber from '@axiona/number/maximum/maximum.js';
import Value from '@axiona/value/value.js';
import Inclusive from '@axiona/number/inclusive/inclusive.js';

/**
 * check if {@param string} length/size is lower than {@param maximum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */

export function MaximumParameters(
    string : string,
    maximum : number,
    inclusive  = true,
    converter : (value:string)=>number = Count
) : boolean {

    return LowerParameters(converter(string), maximum, inclusive);
}


export type MaximumArgument = Value<string> & MaximumNumber & Partial<Inclusive & {converter : (value:string)=>number}>;
/**
 * check if {@param string} length/size is lower than {@param maximum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */
export function MaximumParameter({
    value,
    maximum,
    inclusive,
    converter = Count
} : MaximumArgument) : boolean {

    return MaximumParameters(value, maximum, inclusive, converter);
}




namespace Maximum {
    export const Parameters = MaximumParameters;
    export const Parameter = MaximumParameter;
    export type Argument = MaximumArgument;
}
export default Maximum;
