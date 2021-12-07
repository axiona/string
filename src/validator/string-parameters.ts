import Validator from "@dikac/t-validator/simple";
import StringValidatable from "../validatable/string-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import StringString from "../assert/string/string-parameters";
import Simple from "@dikac/t-validator/message/function/simple-parameters";

export type StringParametersType<MessageType> = Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>;

export default function StringParameters() : StringParametersType<string>;

export default function StringParameters<MessageType>(
    message : Simple<unknown, string, MessageType>
) : StringParametersType<MessageType>;

export default function StringParameters<MessageType>(
    message : Simple<unknown, string, MessageType|string> = StringString
) : StringParametersType<MessageType> {

    return function (value) {

        return StringValidatable(value, message);

    } as StringParametersType<MessageType>
}
