
type CategoryTypes = {
  id: number,
  imgUrl: string,
  title: string,
}[]
const Category = () =>
{

  return (
    <>
      <h1
        className="font-secondary text-gray-950 text-center base:text-[30px] md:text-[36px]  font-bold leading-10 mb-2 pt-16"
      >
        Recipes By Category
      </h1>
      <p className="text-center w-[90%] mx-auto mb-5 text-lg font-normal">
        Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui
        officia deserunmollit anim id est laborum.
      </p>
      <div className="flex md:flex-nowrap base:flex-wrap max-w-screen-xl mx-auto pb-16">
        {categoryData.map(value => {
          return (
            <div
              className="relative mb-[20px] overflow-hidden px-5 cursor-pointer mt-10 base:w-[100%]"
              key={value.id}
            >
              <a>
                <img
                  src={value.imgUrl}
                  className="rounded-[10px] lg:hover:scale-110 transition duration-300 overflow-hidden w-[100%]"
                />
              </a>
              <h3 className="text-center absolute z-20 bottom-4 left-10 text-2xl font-bold text-white">
                {value.title}
              </h3>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Category

const categoryData: CategoryTypes = [
  {
    id: 1,
    imgUrl:
      "https://foodhub.modeltheme.com/wp-content/uploads/2020/01/sweets_categ-400x500.jpg",
    title: "Sweets",
  },
  {
    id: 2,
    imgUrl:
      "https://foodhub.modeltheme.com/wp-content/uploads/2020/01/burger_categ-400x500.jpg",
    title: "Burgers",
  },
  {
    id: 3,
    imgUrl:
      "https://foodhub.modeltheme.com/wp-content/uploads/2020/01/drinks_categ-400x500.jpg",
    title: "Drinks",
  },
  {
    id: 4,
    imgUrl:
      "https://foodhub.modeltheme.com/wp-content/uploads/2020/01/pizza_categ-400x500.jpg",
    title: "Pizza",
  },
]