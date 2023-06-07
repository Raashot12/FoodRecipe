import {IconSearch} from "@tabler/icons-react"
import Layout from "../components/Layout"
import {
  fetchRecipesSearch,
  recipesQueriedState,
  setSearch,
} from "../slices/recipesSlice"
import {useAppDispatch, useAppSelector} from "../redux/hooks"
import { useEffect } from "react"

const Recipes = () => {
  const dispatch = useAppDispatch()
  const receipes = useAppSelector(recipesQueriedState)
  console.log(receipes)
  return (
    <Layout>
      <div
        className="min-h-[500px]
        bg-[url(https://i.imgur.com/HOYEhpW.jpeg)] 
        bg-no-repeat
        bg-cover
        relative
        w-full
        top-0
        bg-center
        z-10
        flex
        items-center
        justify-self-start"
      >
        <div className="base:pl-6 lg:pl-[156.5px] base:pr-6 lg:pr-[156.5px] base:w-[100%] xl:w-7/12">
          <h1 className="font-secondary text-white  base:text-[30px] md:text-[40px]  font-bold leading-10 mb-4">
            It is even better than<br></br> an expensive cookery book
          </h1>
          <p className="text-white font-normal md:text-[20px] base:text-[18px]">
            Learn how to make your favorite restaurant’s dishes
          </p>
          <form className="flex justify-center mt-6 lg:space-x-3 base:space-y-4 lg:space-y-0 base:flex-wrap lg:flex-nowrap">
            <input
              type="text"
              name="receipe"
              value={receipes?.search}
              onChange={e => {
                dispatch(setSearch(e.target.value))
              }}
              className="px-3 py-4  text-white transper border shadow-sm border-white-300 placeholder-white-400 focus:outline-none focus:white focus:white block base:w-[100%] lg:w-[100%] rounded-xl sm:text-sm focus:ring-1 bg-transparent"
              placeholder="Make a search"
            />
            <div
              className="rounded-xl bg-white  base:w-[100%] p-3 lg:w-[50px] flex justify-center items-center cursor-pointer"
              onClick={() => dispatch(fetchRecipesSearch(receipes?.search))}
            >
              <IconSearch color="green" />
            </div>
          </form>
        </div>
      </div>
      <RecipesList />
    </Layout>
  )
}

export default Recipes

const RecipesList = () => {
  return (
    <div className="lg:pl-[156.5px] base:pr-6 lg:pr-[156.5px] py-9">
      <select
        id="filter"
        className="border px-3 py-4 shadow-sm border-green-400  text-sm rounded-xl text-black  focus:border-white-500 block base:w-[100%] lg:w-[25%] p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white"
      >
        <option selected disabled className="text-black">
          Filter By
        </option>
        <option value="Burger" className="text-black">
          Burger
        </option>
        <option value="Drinks" className="text-black">
          Drinks
        </option>
        <option value="Pizza" className="text-black">
          Pizza
        </option>
        <option value="Salads" className="text-black">
          Salads
        </option>
        <option value="Seafood" className="text-black">
          Seafood
        </option>
        <option value="Sweets" className="text-black">
          Sweets
        </option>
      </select>
    </div>
  )
}
