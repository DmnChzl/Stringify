/**
 * This is a non-capturing group that matches:
 * - `^\w`: a word character at the start of the string;
 * - `[A-Z]`: any uppercase letter;
 * - `\b\w`: a word character that follows a word boundary;
 * - `\s+`: one or more whitespace characters;
 * - `[-_]`: a hyphen or an underscore.
 */
const REGEX = /(?:^\w|[A-Z]|\b\w|\s+|[-_])/g;

/**
 * Set case of a string to 'camelCase'
 *
 * @param {string} str
 * @returns {string} camelCase
 */
export function toCamelCase(str: string): string {
  return str.toLowerCase().replace(REGEX, (match, idx) => {
    if (+match === 0 || match === '-' || match === '_') return ''; // Remove dashes and underscores
    return idx === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

/**
 * Set case of a string to 'kebab-case'
 *
 * @param {string} str
 * @returns {string} kebab-case
 */
export function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with dashes
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Add dash between words
    .replace(/[-]+/g, '-'); // Remove multiple consecutive dashes
}

/**
 * Set case of a string to 'PascalCase'
 *
 * @param {string} str
 * @returns {string} PascalCase
 */
export function toPascalCase(str: string): string {
  return str.toLowerCase().replace(REGEX, match => {
    if (match === '-' || match === '_') return ''; // Remove dashes and underscores
    return match.toUpperCase();
  });
}

/**
 * Set case of a string to 'snake_case'
 *
 * @param {string} str
 * @returns {string} snake_case
 */
export function toSnakeCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[\s-]+/g, '_') // Replace spaces and dashes with underscores
    .replace(/([a-z])([A-Z])/g, '$1_$2') // Add underscore between words
    .replace(/[_]+/g, '_'); // Remove multiple consecutive underscores
}

/**
 * Extract words from string
 *
 * @param {string} str
 * @returns {string[]} words
 */
export function getWords(str: string): string[] {
  // Trim the string to remove any leading or trailing whitespace
  str = str.trim();

  // If the string is empty, return an empty array
  if (str === '') return [];

  /**
   * Split the string by non-word characters (excluding apostrophes),
   * and filter out empty strings...
   */
  return str.split(/[^a-zA-Z0-9\u00C0-\u017F']+/).filter(Boolean);
}

/**
 * Count words from string
 *
 * @param {string} str
 * @returns {number} Number of words
 */
export function countWords(str: string): number {
  const words = getWords(str);
  return words.length;
}
