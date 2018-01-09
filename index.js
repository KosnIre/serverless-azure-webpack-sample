/**
 * @file index.js is not used in this example.
 *
 * If we exported all functions from this index.js file, using this as the entry-point,
 * then webpack would be forced to include ALL of the code in every .zip package (due to
 * require'ing all code here).
 *
 * Instead, we give each function its own index.js (see subfolders), so that each function
 * has its own entry-point file. That way, when we package the functions individually with
 * serverless-webpack, we end up with a .zip package for each function, containing ONLY the
 * code used by THAT function.
 */
