import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
export default function StringVoid(): Validator<unknown, string, Readonly<Instance<unknown, string>>>;
