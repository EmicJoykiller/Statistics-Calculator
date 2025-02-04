const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.slice().sort((a, b) => a - b);
  return sorted.length % 2 === 0
    ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
    : sorted[Math.floor(sorted.length / 2)];
};

const getMode = (array) => {
  const counts = {};
  array.forEach((el) => counts[el] = (counts[el] || 0) + 1);
  
  if (new Set(Object.values(counts)).size === 1) return null;

  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
  return Object.keys(counts).filter(el => counts[el] === counts[highest]).join(", ");
};

const getRange = (array) => Math.max(...array) - Math.min(...array);

const getVariance = (array) => {
  const mean = getMean(array);
  return array.reduce((acc, el) => acc + (el - mean) ** 2, 0) / array.length;
};

const getStandardDeviation = (array) => Math.sqrt(getVariance(array));

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g).map(Number).filter(el => !isNaN(el));

  document.querySelector("#mean").textContent = getMean(array).toFixed(2);
  document.querySelector("#median").textContent = getMedian(array);
  document.querySelector("#mode").textContent = getMode(array) || "None";
  document.querySelector("#range").textContent = getRange(array);
  document.querySelector("#variance").textContent = getVariance(array).toFixed(2);
  document.querySelector("#standardDeviation").textContent = getStandardDeviation(array).toFixed(2);
};
