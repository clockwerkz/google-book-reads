const fetchData = async (searchString) => {
    const endpoint = `https://www.googleapis.com/books/v1/volumes?q=${searchString}`;
    console.log(endpoint);
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.items;
};


export { fetchData };