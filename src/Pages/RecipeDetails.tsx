import Layout from "../components/Layout"
import {useParams} from "react-router-dom"
import {
  fetchRecipesSearchDetails,
  recipesDetailedState,
} from "../slices/recipeDetailSlice"
import {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../redux/hooks"
import Loader from "../Loader"
import {Icon24Hours} from "@tabler/icons-react"

const RecipeDetails = () => {
  const {id} = useParams()
  const dispatch = useAppDispatch()
  const receipes = useAppSelector(recipesDetailedState)

  useEffect(() => {
    dispatch(fetchRecipesSearchDetails(id))
  }, [id])
  if (receipes?.loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Loader />
      </div>
    )
  }
  if (receipes?.error) {
    return (
      <p className="text-center mx-auto text-red-600">
        Ooop! Something went wrong. Please check your network
      </p>
    )
  }
  return (
    <Layout>
      {" "}
      <div
        className="min-h-[460px]
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
        style={{
          backgroundImage: `url(${receipes?.details?.image}`,
        }}
      >
        <div className="mx-auto">
          <h1 className="font-secondary text-white  base:text-[30px] md:text-[48px]  font-bold leading-10 mb-4">
            {receipes?.details?.title}
          </h1>
        </div>
      </div>
      <div className="container max-w-screen-xl mx-auto px-4 py-12">
        <div className="flex mx-auto text-center justify-center items-center">
          <Icon24Hours />
          <h1 className="text-[28px]">
            Ready: {receipes.details?.readyInMinutes}mins
          </h1>
        </div>
        <div className="mt-3 text-yellow-800 font-bold text-[18px]">
          Summary
        </div>
        <div
          dangerouslySetInnerHTML={{__html: receipes?.details?.summary}}
          className="leading-9 "
        ></div>
        <div className="mt-3 text-yellow-800 font-bold text-[18px]">
          Instructions
        </div>
        <div
          dangerouslySetInnerHTML={{__html: receipes?.details?.instructions}}
          className="leading-9 "
        ></div>
        <div className="mt-3 text-blue-800 font-bold text-[18px] underline">
          Read More :{" "}
          <a href={receipes.details?.spoonacularSourceUrl} target="blank">
            {receipes.details?.spoonacularSourceUrl}
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default RecipeDetails
