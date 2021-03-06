const fetchData = async (searchString) => {
    const endpoint = `https://mighty-bayou-34376.herokuapp.com/books/${searchString}`;
    return fetch(endpoint)
        .then(res => res.json())
        .then(data => data.items)
        .catch(err => console.log(err));
};


export { fetchData };