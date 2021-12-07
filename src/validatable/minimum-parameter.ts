import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MinimumParameters, {MinimumType} from "./minimum-parameters";

export {MinimumType};

export type MinimumArgument<ValueType extends string, MessageType> =
    Value<ValueType> &
    MinimumNumber &
    Inclusive &
    {converter ?: (value:ValueType)=>number} &
    Message<(result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType>

export default function MinimumParameter<ValueType extends string, MessageType>(
     {
         value,
         minimum,
         inclusive,
         message,
         converter
     } : MinimumArgument<ValueType, MessageType>
) : MinimumType<ValueType, MessageType> {

    return MinimumParameters(
        value,
        minimum,
        inclusive,
        (value, valid, minimum, inclusive) => message({value, valid, minimum, inclusive}),
        converter
    );

}
