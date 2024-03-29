import NotEmpty from './not-empty.js';
/**
 * check if {@param string} contain non-white space (space, tab, no-break space, etc.) and not empty string {@see NotEmpty}
 *
 * @param string
 */

export default function NotBlank(
    string : string,
) : boolean {

    return NotEmpty(string.trim());
}

export {NotBlank as IsNotBlank};
