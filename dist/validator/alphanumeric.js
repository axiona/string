import AlphanumericValidatable from "../validatable/alphanumeric";
import AlphanumericString from "../validatable/string/alphanumeric";
export default function Alphanumeric(message = AlphanumericString) {
    return function (value) {
        return new AlphanumericValidatable(value, message);
    };
}
//# sourceMappingURL=alphanumeric.js.map