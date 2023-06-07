import {IconSearch} from "@tabler/icons-react"
import Layout from "../components/Layout"
import {
  fetchRecipesSearch,
  recipesQueriedState,
  setSearch,
  filtering,
} from "../slices/recipesSlice"
import {useAppDispatch, useAppSelector} from "../redux/hooks"
import {useNavigate} from "react-router-dom"
import Pagination from "../components/Pagination"
import {usePagination} from "../hooks/usePagination"
const Recipes = () => {
  const dispatch = useAppDispatch()
  const receipes = useAppSelector(recipesQueriedState)
  const navigate = useNavigate()
  const {slicedData, pagination, prevPage, nextPage, changePage} =
    usePagination({
      itemsPerPage: 4,
      data: receipes.filteredRecipe,
      startFrom: 1,
    })
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
              value={receipes?.search.trim()}
              onChange={e => {
                dispatch(setSearch(e.target.value.trim()))
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
      {receipes.error && (
        <p className="py-11 mx-auto text-center text-red-600">
          Oooop! Please check your network connection
        </p>
      )}
      <div className="flex flex-wrap -m-3 mt-2 mb-8 cursor-pointer container max-w-screen-xl mx-auto px-4">
        {slicedData.map(value => {
          return (
            <div
              className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3 mb-3"
              key={value.id}
              onClick={() => navigate(`/recipes/${value?.id}`)}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                <div
                  className="bg-cover h-48"
                  style={{
                    backgroundImage: `url(${value.image}`,
                  }}
                ></div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="mb-4 text-2xl">{value?.title}</h3>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Pagination
        idToClampTo="blogs"
        pagination={pagination}
        prevPage={prevPage}
        nextPage={nextPage}
        changePage={changePage}
      />
    </Layout>
  )
}

export default Recipes

const RecipesList = () => {
  const dispatch = useAppDispatch()
  const receipes = useAppSelector(recipesQueriedState)
  return (
    <div className="lg:pl-[156.5px] base:pr-6 lg:pr-[156.5px] py-9">
      <input
        type="text"
        name="receipe"
        value={receipes?.filterString}
        onChange={e => {
          dispatch(filtering(e.target.value))
        }}
        className="px-3 py-4  text-black transper border shadow-sm border-white-300 placeholder-gray-400 focus:outline-none focus:white focus:white block base:w-[100%] lg:w-[100%] rounded-xl sm:text-sm focus:ring-1 bg-transparent"
        placeholder="Filter"
      />
    </div>
  )
}
