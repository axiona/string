import Lower from "@dikac/t-number/boolean/lower"
import MaximumNumber from "@dikac/t-number/maximum/maximum"
import Count from "../number/count";
import Value from "@dikac/t-value/value";
import Inclusive from "@dikac/t-number/inclusive/inclusive";


/**
 * check if {@param string} length/size is lower than {@param maximum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */
export default function Maximum({
    value,
    maximum,
    inclusive,
    converter = Count
} : Value<string> & MaximumNumber & Inclusive & {converter : (value:string)=>number}) : boolean {

    return Lower(converter(value), maximum, inclusive)
}
