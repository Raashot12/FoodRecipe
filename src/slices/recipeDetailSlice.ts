/* eslint-disable @typescript-eslint/no-explicit-any */
import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit"
import {RootState} from "../redux/store"
import {fetchRecipes} from "../services/recipes"

type RecipeDetailedStateType = {
  loading: boolean
  details: any
  error: boolean,
}
const initialState: RecipeDetailedStateType = {
  loading: false,
  details: null,
  error: false,
}
export const fetchRecipesSearch = createAsyncThunk(
  "user/fetchRecipesDetails",
  async (value: number) => {
    const {data} = await fetchRecipes(value)
    return data
  }
)

const recipeDetailSlice = createSlice({
  name: "recipe details",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(fetchRecipesSearch.pending, state => {
      state.loading = true
    })
    builder.addCase(
      fetchRecipesSearch.fulfilled,
      (state, action: PayloadAction<any | null>) => {
        state.loading = false
        state.details = {...state.details, ...action.payload}
      }
    )
    builder.addCase(fetchRecipesSearch.rejected, state => {
      state.loading = false
      state.error = true
      state.details = null
    })
  },
})
export const recipesDetailedState = (state: RootState) => state.recipeDetailed

export default recipeDetailSlice
