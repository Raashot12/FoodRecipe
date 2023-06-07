/* eslint-disable @typescript-eslint/no-explicit-any */
import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit"
import {RootState} from "../redux/store"
import {fetchRecipes} from "../services/recipes"

type PopularStateType = {
  loading: boolean
  error: boolean
  recipe: any[]
  filteredRecipe: any[]
  search: string
}
const initialState: PopularStateType = {
  loading: false,
  recipe: [],
  filteredRecipe: [],
  search: "",
  error: false,
}
export const fetchRecipesSearch = createAsyncThunk(
  "user/fetchRecipes",
  async (value: string,) => {
    const {data} = await fetchRecipes(value)
    return data
  }
)

const recipesSlice = createSlice({
  name: "recipe query",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
      state.filteredRecipe = state.recipe.filter(({name}) =>
        name.toLowerCase().includes(state.search.toLowerCase())
      )
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchRecipesSearch.pending, state => {
      state.loading = true
    })
    builder.addCase(
      fetchRecipesSearch.fulfilled,
      (state, action: PayloadAction<any | null>) => {
        state.loading = false
        state.search=""
        state.recipe = [...state.recipe, ...action.payload]
      }
    )
    builder.addCase(fetchRecipesSearch.rejected, state => {
      state.loading = false
      state.error = true
      state.recipe = []
    })
  },
})
export const {setSearch} = recipesSlice.actions
export const recipesQueriedState = (state: RootState) => state.queriedReciepe

export default recipesSlice
