const API_ENDPOINT = "http://localhost:8000/api";

exports.createTodo = async (todo) => {
    return fetch(`${API_ENDPOINT}/todo`, {
        method: "POST",
        body: todo,
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .catch((error) => ({error: error}));
};
