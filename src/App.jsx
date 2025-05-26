import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Topnavigate from './Components/topnavi/topnavi'
import Productfooter from './Components/Footer/Productfooter'
import ShopCategory from './Pages/ShopCategory'
import Productpg from './Pages/Productpg'
import CartSop from './Pages/CartSop'
import Loginpg from './Pages/Loginpg'

function App() {

  return (
    <>
      <BrowserRouter>
      <Topnavigate/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/contact' element ={<Contact/>} />

          {/* Shop Category */}
        <Route path='/' element ={<Contact/>} />
        <Route path='/appliance' element ={<ShopCategory category="appliance"/>} />
        <Route path='/health&beauty' element ={<ShopCategory category="health&beauty"/>} />
        <Route path='/fashion' element ={<ShopCategory category="fashion"/>} />
        <Route path='/baby' element ={<ShopCategory category="baby"/>} />
        <Route path='/electronics' element ={<ShopCategory category="electronics"/>} />
        <Route path='/gaming' element ={<ShopCategory category="gaming"/>} />
        <Route path='/home' element ={<ShopCategory category="home"/>} />
        <Route path='/pet&supplies' element ={<ShopCategory category="pet&supplies"/>} />

        {/* Products */}
        <Route path='/product' element = {<Productpg/>}>
          <Route path=':productId'element = {<Productpg/>}/>
        </Route>

        {/* cart */}
        <Route path='/cart' element ={<CartSop/>} />

        {/* Sign Up and Login */}
        <Route path='/login' element ={<Loginpg/>} />
        <Route path='/register' element ={<Loginpg/>} />
      </Routes>
      <Productfooter/>
      </BrowserRouter>
    </>
  )
}

export default App
