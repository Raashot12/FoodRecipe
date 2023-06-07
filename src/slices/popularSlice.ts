/* eslint-disable @typescript-eslint/no-explicit-any */
import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit"
import {fetchPopularRecipes} from "../services/popular"
import {RootState} from "../redux/store"

type PopularStateType = {
  loading: boolean
  details: any
  error: boolean
}
const initialState: PopularStateType = {
  loading: false,
  details: null,
  error: false,
}
export const popularRecipesDetails = createAsyncThunk(
  "user/fetchPopularRecipes",
  async () => {
    const {data} = await fetchPopularRecipes()
    return data
  }
)

const popularSlice = createSlice({
  name: "popular dish",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(popularRecipesDetails.pending, state => {
      state.loading = true
    })
    builder.addCase(
      popularRecipesDetails.fulfilled,
      (state, action: PayloadAction<any | null>) => {
        state.loading = false
        state.details = {...state.details, ...action.payload}
      }
    )
    builder.addCase(popularRecipesDetails.rejected, state => {
      state.loading = false
      state.error = true
      state.details = null
    })
  },
})

export const popularState = (state: RootState) => state.popularRecipes

export default popularSlice
