/* eslint-disable react-refresh/only-export-components */
import "../../css/base.css"
import "../../css/sandbox.css"
import "../../css/embla.css"
import EmblaCarousel from "../shared/EmblaCarousel"
import {popularRecipesDetails, popularState} from "../../slices/popularSlice"
import {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../../redux/hooks"
import Loader from "../../loader"

const PopularRecipe = () => {
  const dispatch = useAppDispatch()

  const OPTIONS = {inViewThreshold: 1}
  const SLIDE_COUNT = 10
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  useEffect(() => {
    dispatch(popularRecipesDetails())
  }, [])

  return (
    <div className="pb-8 ">
      <div
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-easing="ease-in-sine"
      >
        {" "}
        <h1 className="font-secondary text-gray-950 text-center base:text-[30px] md:text-[36px]  font-bold leading-10 mb-2 pt-16">
          Most Popular Recipes
        </h1>
        <p className="text-center w-[90%] mx-auto mb-5 text-lg font-normal text-gray-500">
          Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui
          officia deserunmollit anim id est laborum.
        </p>
      </div>
      <div className="container max-w-screen-xl mx-auto flex">
        <Carousel SLIDES={SLIDES} OPTIONS={OPTIONS} />
      </div>
    </div>
  )
}

export default PopularRecipe
const Carousel = ({
  SLIDES,
  OPTIONS,
}: {
  SLIDES: number[]
  OPTIONS: {
    inViewThreshold: number
  }
}) => {
  const popularRecipeData = useAppSelector(popularState)
  if (popularRecipeData?.loading) {
    return <Loader />
  }
  if (popularRecipeData?.error) {
    return (
      <p className="text-center mx-auto text-red-600">
        Ooop! Something went wrong. Please check your network
      </p>
    )
  }
  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />
}