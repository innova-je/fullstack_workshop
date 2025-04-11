import axios from "axios";

const API_BASE_URL = "/api/rest/cars";

// Get dictionary from API
export const getDictionary = async () => {
  // TODO
  // Atention! You should add the following header -> "ngrok-skip-browser-warning": "69420"
};

// Add an entry to the dictionary
export const addEntry = async (key, value) => {
  // TODO
};

// Remove an entry from the dictionary
export const removeEntry = async (key) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${encodeURIComponent(key)}`);
    return response.data;
  } catch (error) {
    alert("Error removing entry:", error);
    throw error;
  }
};
