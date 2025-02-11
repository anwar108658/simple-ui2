import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Layout from "./layout/Layout"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Layout>
        <Outlet/>
      </Layout>
      <Footer/>
    </div>
  )
}

export default App