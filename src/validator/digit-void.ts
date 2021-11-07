import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import DigitParameter from "./digit-parameter";

export default function DigitVoid() : Validator<string, '', Readonly<Instance<'', string>>> {

    return DigitParameter()
}

