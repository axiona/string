import Value from "@dikac/t-value/value";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
/**
 * check if {@param string} length/size is greater than {@param minimum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */
export default function MinimumParameter({ value, minimum, inclusive, converter }: Value<string> & MinimumNumber & Inclusive & {
    converter: (value: string) => number;
}): boolean;