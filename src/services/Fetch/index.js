export const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
        method: "GET",
      });
  
      const result = await response.json();
      if (!result?.data) {
        throw new Error(result?.message);
      }
      return result;
    } catch (error) {
      throw error;
    }
  };