import Prefix from "./prefix/prefix";
import Suffix from "./suffix/suffix";
import String from "./string/string";
import Circumfix from "./circumfix/circumfix";
import EncloseParameters from "./enclose-parameters";

export type EncloseArgumentPair = String & Prefix & Suffix;
export type EncloseArgumentCircumfix = String & Circumfix;

/**
 * ensure {@param string} start with {@param prefix} and end with {@param suffix}, join them if not
 * exits
 *
 * @param string
 * @param prefix
 * @param suffix
 */
export default function EncloseParameter ({
    value,
    prefix,
    suffix,
} : EncloseArgumentPair) : string ;

export default function EncloseParameter ({
    value,
    circumfix,
} : EncloseArgumentCircumfix) : string ;

export default function EncloseParameter ({
    value,
    prefix,
    circumfix,
    suffix,
} : EncloseArgumentCircumfix & EncloseArgumentPair) : string {

    return EncloseParameters(value, prefix || circumfix, suffix);
}
