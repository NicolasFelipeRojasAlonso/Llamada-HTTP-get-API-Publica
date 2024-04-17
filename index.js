const axios = require('axios');

const getTitles =async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    response.data.forEach(item => {
        console.log(item.title);
    });
};
getTitles();