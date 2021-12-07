import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Static from "@dikac/t-validator/message/function/static";
export default function EmptyParameter(): Validator<string, '', Readonly<Instance<'', string>>>;
export default function EmptyParameter<MessageType>(message: Static.Parameter<'', string, false, true, MessageType>): Validator<string, '', Readonly<Instance<'', MessageType>>>;