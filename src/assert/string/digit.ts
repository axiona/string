import Match from "../../value/match";
import SentencesMust from "../../message/sentences-must";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";


export default Digit;
namespace Digit {

    export const Parameter = DigitParameter;
    export const Object = DigitObject;
    export type Argument = DigitArgument;
}


export function DigitParameter(
    valid : boolean,
    value : string,
    subject : string = 'string'
) : string {

    let sentence = SentencesMust(valid);
    sentence.expect.push('digit');
    sentence.subject.push(subject);

    sentence.comma.push('expect');

    if(!valid) {

        let match = new Match(value, /[^0-9]{1,5}/);

        if(match.valid) {

            sentence.actual.push('contains', `"${match.match[0]}"`)
        }
    }

    return sentence.message;
}

export type DigitArgument = Validatable & Value<string> & {subject?:string};

export function DigitObject({
    valid,
    value,
    subject = 'string'
} : DigitArgument) : string {

    return DigitParameter(valid, value, subject);
}
