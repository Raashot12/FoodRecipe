import axios from "axios"

const API_URL = import.meta.env.VITE_APP_API_BASE_URL || ""
const API_KEY = import.meta.env.VITE_APP_API_KEY || ""
export const fetchRecipes = async (value?: string): Promise<any | null> => {
  // console.log(value?.split(","))
  const getValueTobeParse = () => {
    if (value?.split(",").length === 1) {
      return value[0]
    } else {
      const arrayitems = value?.split(",")
      const joined = arrayitems?.join("&").trim()
      return joined
    }
  }
  try {
    const data = await axios.get(
      `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&number=10&query=${getValueTobeParse()}`
    )
    console.log(data)
    return data
  } catch (error: any) {
    console.log(error)
  }
}