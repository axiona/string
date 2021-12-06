import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable";
export default function NumericParameters(): Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;
export default function NumericParameters<MessageType>(message: Dynamic.Parameters<string, MessageType>): Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
