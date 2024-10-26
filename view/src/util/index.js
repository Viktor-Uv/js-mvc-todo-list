const API_ENDPOINT = 'http://localhost:8000/api';

exports.createTodo = async (todo) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/todo`, {
      method: 'POST',
      body: todo,
    });
    return response.json();
  } catch (error) {
    return { error };
  }
};

exports.getAllTodo = async () => {
  try {
    const response = await fetch(`${API_ENDPOINT}/todo`);
    return response.json();
  } catch (error) {
    return { error };
  }
};

exports.removeTodo = async (id) => {
  try {
    await fetch(`${API_ENDPOINT}/todo/${id}`, {
      method: 'DELETE',
    });
    return 'deleted';
  } catch (error) {
    return { error };
  }
};
