import Blog from "../components/Home/Blog"
import Category from "../components/Home/Category"
import HeroSection from "../components/Home/HeroSection"
import NewsLetter from "../components/Home/NewsLetter"
import PopularRecipe from "../components/Home/PopularRecipe"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <NewsLetter />
      <PopularRecipe />
      <Blog />
    </Layout>
  )
}

export default Home
