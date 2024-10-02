/**
 * Basic helper function to fetch JSON data
 * @param {string} url URL to fetch from
 * @returns {Promise} Promise that resolves in parsed JSON or empty array
 */
const fetchData = url =>
  fetch(url)
    .then(response => response.json())
    .catch(data => []);

export default fetchData;
