import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
export declare type NumericArgument<ValueType extends string, MessageType> = Message<Dynamic.Parameter<ValueType, MessageType>> & Value<ValueType>;
export default function NumericParameter<ValueType extends string, MessageType>({ value, message }: NumericArgument<ValueType, MessageType>): Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
