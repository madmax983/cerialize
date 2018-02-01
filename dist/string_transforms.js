export function NoOp(str) {
    return str;
}
//convert strings like my_camel_string to myCamelString
export function CamelCase(str) {
    var STRING_CAMELIZE_REGEXP = (/(-|_|\.|\s)+(.)?/g);
    return str.replace(STRING_CAMELIZE_REGEXP, function (match, separator, chr) {
        return chr ? chr.toUpperCase() : '';
    }).replace(/^([A-Z])/, function (match, separator, chr) {
        return match.toLowerCase();
    });
}
//convert strings like MyCamelString to my_camel_string
export function SnakeCase(str) {
    var STRING_DECAMELIZE_REGEXP = (/([a-z\d])([A-Z])/g);
    return str.replace(STRING_DECAMELIZE_REGEXP, '$1_$2').toLowerCase();
}
//convert strings like myCamelCase to my_camel_case
export function UnderscoreCase(str) {
    var STRING_UNDERSCORE_REGEXP_1 = (/([a-z\d])([A-Z]+)/g);
    var STRING_UNDERSCORE_REGEXP_2 = (/-|\s+/g);
    return str.replace(STRING_UNDERSCORE_REGEXP_1, '$1_$2').replace(STRING_UNDERSCORE_REGEXP_2, '_').toLowerCase();
}
//convert strings like my_camelCase to my-camel-case
export function DashCase(str) {
    var STRING_DASHERIZE_REGEXP = (/([a-z\d])([A-Z])/g);
    str = str.replace(/_/g, '-');
    return str.replace(STRING_DASHERIZE_REGEXP, '$1-$2').toLowerCase();
}
//# sourceMappingURL=string_transforms.js.map