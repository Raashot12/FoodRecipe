/* eslint-disable react-refresh/only-export-components */
// import EmblaCarousel from "../shared/EmblaCarousel"
import {popularRecipesDetails, popularState} from "../../slices/popularSlice"
import {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../../redux/hooks"
import Loader from "../../Loader"
import {IconCooker} from "@tabler/icons-react"
import {Carousel} from "@mantine/carousel"

const PopularRecipe = () => {
  const dispatch = useAppDispatch()
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
      {/* <div className="container max-w-screen-xl mx-auto flex"> */}
      <CarouselDisplay />
      {/* </div> */}
    </div>
  )
}

export default PopularRecipe
const CarouselDisplay = () => {
  const popularRecipeData = useAppSelector(popularState)
  if (popularRecipeData?.loading) {
    return (
      <div className="mx-auto">
        <Loader />
      </div>
    )
  }
  if (popularRecipeData?.error) {
    return (
      <p className="text-center mx-auto text-red-600">
        Ooop! Something went wrong. Please check your network
      </p>
    )
  }
  return (
    <Carousel slideSize="300px" slideGap="sm" mt={50}>
      {popularRecipeData?.details?.recipes?.map((value: any) => {
        return (
          <Carousel.Slide>
            <a
              href={value?.sourceUrl}
              className="block  max-w-[300px] rounded-[10px] h-[auto] overflow-hidden  transition duration-300 relative mr-5"
              key={value?.sourceUrl}
            >
              <div className="flex items-center absolute top-2 left-6">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Rating star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <p className="ml-2 text-sm font-bold text-red-500">4.95</p>
                <span className="w-1 h-1 mx-1.5  rounded-full bg-gray-400"></span>
                <a
                  href="#"
                  className="text-sm underline hover:no-underline text-red-500 font-bold"
                >
                  73 reviews
                </a>
              </div>
              <img
                className="rounded-[10px]"
                src={value?.image}
                loading="lazy"
                alt="Your alt text"
                style={{
                  maxWidth: "100%",
                  maxHeight: "auto",
                  width: "100%",
                  marginBottom: 30,
                  borderRadius: 7,
                  verticalAlign: "middle",
                }}
              />
              <h1 className="mt-3 text-[18px] font-bold text-left">
                {value?.title}
              </h1>
              <div className="flex space-x-1 mt-1">
                <IconCooker />
                <p className="text-gray-700 font-[500]">{value?.sourceName}</p>
              </div>
            </a>
          </Carousel.Slide>
        )
      })}
    </Carousel>
  )
}
