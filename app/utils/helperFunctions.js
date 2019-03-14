/**
 * Given two vectors, return the absolute value of the difference
 * of the sums of their components.
 * @param {array} v1 - Vector 1
 * @param {array} v2 - Vector 2
 * @returns {number} - Difference of sums of vectors' components
 */
const totalDifference = (v1, v2) => {
  v1Sum = v1.reduce((total, current) => total + current);
  v2Sum = v2.reduce((total, current) => total + current);
  return Math.abs(v1Sum - v2Sum);
}

module.exports = {
  totalDifference: totalDifference
};