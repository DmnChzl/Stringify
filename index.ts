/**
 * This is a non-capturing group that matches:
 * - `^\w`: a word character at the start of the string;
 * - `[A-Z]`: any uppercase letter;
 * - `\b\w`: a word character that follows a word boundary;
 * - `\s+`: one or more whitespace characters;
 * - `[-_]`: a hyphen or an underscore.
 */
const REGEX = /(?:^\w|[A-Z]|\b\w|\s+|[-_])/g;

export function toCamelCase(str: string): string {
  return str.toLowerCase().replace(REGEX, (match, idx) => {
    if (+match === 0 || match === '-' || match === '_') return ''; // Remove dashes and underscores
    return idx === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

export function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with dashes
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Add dash between words
    .replace(/[-]+/g, '-'); // Remove multiple consecutive dashes
}

export function toPascalCase(str: string): string {
  return str.toLowerCase().replace(REGEX, match => {
    if (match === '-' || match === '_') return ''; // Remove dashes and underscores
    return match.toUpperCase();
  });
}

export function toSnakeCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[\s-]+/g, '_') // Replace spaces and dashes with underscores
    .replace(/([a-z])([A-Z])/g, '$1_$2') // Add underscore between words
    .replace(/[_]+/g, '_'); // Remove multiple consecutive underscores
}
