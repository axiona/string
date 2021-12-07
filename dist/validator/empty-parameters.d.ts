import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Static from "@dikac/t-validator/message/function/static";
export default function EmptyParameters(): Validator<string, '', Readonly<Instance<'', string>>>;
export default function EmptyParameters<MessageType>(message: Static.Parameters<'', string, false, true, MessageType>): Validator<string, '', Readonly<Instance<'', MessageType>>>;