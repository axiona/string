import Validator from "@dikac/t-validator/validator";
import NotEmptyValidatable from "../validatable/not-empty";
import Instance from "@dikac/t-validator/validatable/dynamic";
import NotEmptyString from "../assert/string/not-empty";
import FunctionStatic from "@dikac/t-validator/message/function/static";

export default function NotEmptyParameter() : Validator<string, '', true, false, Readonly<Instance<string, string>>>;

export default function NotEmptyParameter<MessageType>(
    message : FunctionStatic.Parameter<string, '', string, false, true, MessageType>
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>;

export default function NotEmptyParameter<MessageType>(
    message : FunctionStatic.Parameter<string, '', string, false, true, MessageType|string> = NotEmptyString.Parameter
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return NotEmptyValidatable.Parameter({value, message});

    } as Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>
}
