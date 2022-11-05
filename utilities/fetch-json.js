const FetchJson = (url) => fetch(url).then((response) => response.json());

export default FetchJson;
