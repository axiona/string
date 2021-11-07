import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Simple from "@dikac/t-validator/message/function/simple";
export default function StringParameters<Argument, MessageType>(value: Argument, message: Simple.Parameters<unknown, Argument, MessageType>): Return<unknown, Argument, string, Readonly<Instance<unknown, MessageType>>>;
