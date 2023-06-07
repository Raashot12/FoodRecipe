import useEmblaCarousel from "embla-carousel-react"
import ClassNames from "embla-carousel-class-names"
import {IconCooker} from "@tabler/icons-react"
import {popularState} from "../../slices/popularSlice"
import { useAppSelector } from "../../redux/hooks"

const EmblaCarousel = (props: any) => {
  const {slides, options} = props
  const [emblaRef] = useEmblaCarousel(options, [ClassNames()])
  const popularRecipeData = useAppSelector(popularState)
  const imageByIndex = (index: number) =>
    popularRecipeData?.details?.recipes[
      index % popularRecipeData?.details?.recipes?.length
    ]

    return (
      <div className="embla cursor-pointer">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index: number) => (
              <a
                href={imageByIndex(index)?.sourceUrl}
                className="block embla__slide embla__class-names max-w-[300px] rounded-[10px] overflow-hidden h-fit transition duration-300 relative"
                key={index}
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
                  className="embla__slide__img rounded-[10px] w-[300px] max-h-[300px]"
                  src={imageByIndex(index)?.image}
                  loading="lazy"
                  alt="Your alt text"
                />
                <h1 className="mt-3 text-[18px] font-bold text-left">
                  {imageByIndex(index)?.title}
                </h1>
                <div className="flex space-x-1 mt-1">
                  <IconCooker />
                  <p className="text-gray-700 font-[500]">
                    {imageByIndex(index)?.sourceName}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
}

export default EmblaCarousel
