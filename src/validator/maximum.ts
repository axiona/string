import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MaximumValidatable from "../validatable/maximum";
import Function from "@dikac/t-function/function";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Size from "../number/size";

export default class Maximum<Msg>
    implements
        Validator<string, Validatable & Message<Msg> & Value<string>>,
        Message<Function<[Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>], Msg>>,
        MaximumNumber,
        Inclusive
{
    constructor(
        public maximum : number,
        public inclusive : boolean,
        public message : Function<[Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>], Msg>,
        public converter : Function<[string], number> = Size,
    ) {
    }

    validate(value: string): Readonly<Validatable & Message<Msg> & Value<string> & Inclusive & MaximumNumber> {

        return new MaximumValidatable(value, this.maximum, this.inclusive, this.message, this.converter);
    }
}