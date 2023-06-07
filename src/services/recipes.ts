import axios from "axios"

const API_URL = import.meta.env.VITE_APP_API_BASE_URL || ""
const API_KEY = import.meta.env.VITE_APP_API_KEY || ""
export const fetchRecipes = async (value?: string): Promise<any | null> => {
  try
  {
    const data = await axios.get(
      `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&number=1&query=${value}`
    )
    console.log(data)
    return data
    
  } catch (error: any) {
    console.log(error)
  }
}