import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
export default function AlphanumericVoid(): Validator<string, '', Readonly<Instance<'', string>>>;
