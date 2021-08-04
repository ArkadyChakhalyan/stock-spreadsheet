/**
 * Function compose (when new stock added to a portfolio).
 * @param {...Function} func - All the functions for callback.
 * @param {Element} comp - React component.
 * @returns {Element} React component inside callback functions .
 */

export const compose = (...funcs) => (comp) => {
    return funcs.reduceRight(
        (wrapped, f) => f(wrapped), comp);
};