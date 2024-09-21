import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { About, Contact, Home } from "./components";
import Layout from "./Layout";
import Github, { getGithubData } from "./components/Github";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Layout />}>
        <Route path="" element = {<Home />}  />
        <Route path="/about" element = {<About />}  />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/github" element={<Github />} loader = {getGithubData}/>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
