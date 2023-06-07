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
  filterString: string
}
const initialState: PopularStateType = {
  loading: false,
  recipe: [],
  filteredRecipe: [],
  search: "",
  error: false,
  filterString: "",
}
export const fetchRecipesSearch = createAsyncThunk(
  "user/fetchRecipes",
  async (value: string) => {
    console.log(value)
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
    },
    filtering(state, action: PayloadAction<string>) {
      state.filterString = action.payload
      state.filteredRecipe = state.recipe.filter(({title}) =>
        title.toLowerCase().includes(state.filterString.toLowerCase())
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
        state.recipe = [...action.payload.results]
        state.filteredRecipe = [...action.payload.results]
      }
    )
    builder.addCase(fetchRecipesSearch.rejected, state => {
      state.loading = false
      state.error = true
      state.recipe = []
    })
  },
})
export const {setSearch, filtering} = recipesSlice.actions
export const recipesQueriedState = (state: RootState) => state.queriedReciepe
export const selectFilteredPokemon = (state: RootState) =>
  state.queriedReciepe.filteredRecipe
export default recipesSlice