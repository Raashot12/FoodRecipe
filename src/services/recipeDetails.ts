import axios from "axios"

const API_URL = import.meta.env.VITE_APP_API_BASE_URL || ""
const API_KEY = import.meta.env.VITE_APP_API_KEY || ""
export const fetchRecipesDetails = async (value: number): Promise<any | null> => {
  try {
    const data = await axios.get(
      `${API_URL}/recipes/recipes/${value}/information?apiKey=${API_KEY}`
    )
    return data
  } catch (error: any) {
    console.log(error)
  }
}
