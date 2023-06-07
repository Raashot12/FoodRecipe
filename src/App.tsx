import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Blogs from "./Pages/Blogs"
import Recipes from "./Pages/Recipes"
import RecipeDetails from "./Pages/RecipeDetails"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
    </Routes>
  )
}

export default App
