const API_ENDPOINT = 'http://localhost:8000/api';

exports.createTodo = async (todo) => {
  fetch(`${API_ENDPOINT}/todo`, {
    method: 'POST',
    body: todo,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => ({ error }));
};

exports.getAllTodo = async () => {
  fetch(`${API_ENDPOINT}/todo`)
    .then((response) => response.json())
    .catch((error) => ({ error }));
};

exports.removeTodo = async (id) => {
  fetch(`${API_ENDPOINT}/todo/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .catch((error) => ({ error }));
};
