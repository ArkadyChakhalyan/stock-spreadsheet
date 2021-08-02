/**
 * function compose (when new stock added to a portfolio)
 * @param {...function} func - all the functions for callback
 * @param {ReactElement} comp - react component
 * @returns {ReactElement} react component inside callback functions 
 */

export const compose = (...funcs) => (comp) => {
    return funcs.reduceRight(
        (wrapped, f) => f(wrapped), comp);
};