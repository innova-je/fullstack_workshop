
const STORAGE_KEY = "carList";

// Get dictionary from localStorage
export const getDictionary = () => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : {};
};

// Add an entry to the dictionary
export const addEntry = (key, value) => {
  const dictionary = getDictionary();
  dictionary[key] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dictionary));
};

// Remove an entry from the dictionary
export const removeEntry = (key) => {
  const dictionary = getDictionary();
  delete dictionary[key];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dictionary));
};
