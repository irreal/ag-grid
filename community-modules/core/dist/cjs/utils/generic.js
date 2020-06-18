/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v23.2.1
 * @link http://www.ag-grid.com/
 * @license MIT
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * If value is undefined, null or blank, returns null, otherwise returns the value
 * @param {T} value
 * @returns {T | null}
 */
function makeNull(value) {
    return value == null || value === '' ? null : value;
}
exports.makeNull = makeNull;
function exists(value, allowEmptyString) {
    if (allowEmptyString === void 0) { allowEmptyString = false; }
    return value != null && (allowEmptyString || value !== '');
}
exports.exists = exists;
function missing(value) {
    return !exists(value);
}
exports.missing = missing;
function missingOrEmpty(value) {
    return !value || missing(value) || value.length === 0;
}
exports.missingOrEmpty = missingOrEmpty;
function toStringOrNull(value) {
    return exists(value) && value.toString ? value.toString() : null;
}
exports.toStringOrNull = toStringOrNull;
/** @deprecated */
function referenceCompare(left, right) {
    if (left == null && right == null) {
        return true;
    }
    if (left == null && right != null) {
        return false;
    }
    if (left != null && right == null) {
        return false;
    }
    return left === right;
}
exports.referenceCompare = referenceCompare;
function jsonEquals(val1, val2) {
    var val1Json = val1 ? JSON.stringify(val1) : null;
    var val2Json = val2 ? JSON.stringify(val2) : null;
    return val1Json === val2Json;
}
exports.jsonEquals = jsonEquals;
function defaultComparator(valueA, valueB, accentedCompare) {
    if (accentedCompare === void 0) { accentedCompare = false; }
    var valueAMissing = valueA == null;
    var valueBMissing = valueB == null;
    // this is for aggregations sum and avg, where the result can be a number that is wrapped.
    // if we didn't do this, then the toString() value would be used, which would result in
    // the strings getting used instead of the numbers.
    if (valueA && valueA.toNumber) {
        valueA = valueA.toNumber();
    }
    if (valueB && valueB.toNumber) {
        valueB = valueB.toNumber();
    }
    if (valueAMissing && valueBMissing) {
        return 0;
    }
    if (valueAMissing) {
        return -1;
    }
    if (valueBMissing) {
        return 1;
    }
    function doQuickCompare(a, b) {
        return (a > b ? 1 : (a < b ? -1 : 0));
    }
    if (typeof valueA === 'string') {
        if (!accentedCompare) {
            return doQuickCompare(valueA, valueB);
        }
        try {
            // using local compare also allows chinese comparisons
            return valueA.localeCompare(valueB);
        }
        catch (e) {
            // if something wrong with localeCompare, eg not supported
            // by browser, then just continue with the quick one
            return doQuickCompare(valueA, valueB);
        }
    }
    return doQuickCompare(valueA, valueB);
}
exports.defaultComparator = defaultComparator;
function find(collection, predicate, value) {
    if (collection === null || collection === undefined) {
        return null;
    }
    if (!Array.isArray(collection)) {
        var objToArray = values(collection);
        return find(objToArray, predicate, value);
    }
    var collectionAsArray = collection;
    var firstMatchingItem = null;
    for (var i = 0; i < collectionAsArray.length; i++) {
        var item = collectionAsArray[i];
        if (typeof predicate === 'string') {
            if (item[predicate] === value) {
                firstMatchingItem = item;
                break;
            }
        }
        else {
            var callback = predicate;
            if (callback(item)) {
                firstMatchingItem = item;
                break;
            }
        }
    }
    return firstMatchingItem;
}
exports.find = find;
function values(object) {
    if (object instanceof Set || object instanceof Map) {
        var values_1 = [];
        object.forEach(function (value) { return values_1.push(value); });
        return values_1;
    }
    return Object.keys(object).map(function (key) { return object[key]; });
}
exports.values = values;

//# sourceMappingURL=generic.js.map
