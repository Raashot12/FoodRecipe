import Layout from "../components/Layout"

const RecipeDetails = () => {
  return (
    <Layout>
      {" "}
      <div
        className="min-h-[730px]
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
        <div
          className="mx-auto"
        >
          <h1 className="font-secondary text-white  base:text-[30px] md:text-[48px]  font-bold leading-10 mb-4">
            It is even better than<br></br> an expensive cookery book
          </h1>
        </div>
      </div>
    </Layout>
  )
}

export default RecipeDetails