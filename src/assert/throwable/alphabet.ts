import AlphabetType from '../string/alphabet';
import Value from '@alirya/value/value';

export function AlphabetParameters(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(AlphabetType.Parameters(value, false, subject));
}


export type AlphabetArgument = Value<string> & {subject ?: string};

export function AlphabetParameter({
    value,
    subject
} : AlphabetArgument) : Error {

    return AlphabetParameters(value, subject);
}



namespace Alphabet {
    export const Parameters = AlphabetParameters;
    export const Parameter = AlphabetParameter;
    export type Argument = AlphabetArgument;
}
export default Alphabet;
