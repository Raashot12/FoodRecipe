/* eslint-disable @typescript-eslint/no-explicit-any */
import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit"
import {RootState} from "../redux/store"
import {fetchRecipesDetails} from "../services/recipeDetails"

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
export const fetchRecipesSearchDetails = createAsyncThunk(
  "user/fetchRecipesDetails",
  async (value: string | undefined) => {
    const {data} = await fetchRecipesDetails(value)
    console.log(data)
    return data
  }
)

const recipeDetailSlice = createSlice({
  name: "recipe details",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRecipesSearchDetails.pending, state => {
      state.loading = true
    })
    builder.addCase(
      fetchRecipesSearchDetails.fulfilled,
      (state, action: PayloadAction<any | null>) => {
        state.loading = false
        state.details = {...state.details, ...action.payload}
      }
    )
    builder.addCase(fetchRecipesSearchDetails.rejected, state => {
      state.loading = false
      state.error = true
      state.details = null
    })
  },
})
export const recipesDetailedState = (state: RootState) => state.recipeDetailed

export default recipeDetailSlice
