import { Link } from 'react-router-dom'
import Logo from '../../../../assets/PizzeriaLogo.png'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="flex justify-between border border-black bg-black text-gray-300 px-6 py-3">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-3xl">Pizzeria</h1>
        </Link>
        <Link to="/">
          <img
            src={Logo}
            alt="pizzeria-logo"
            width="100px"
            height="100px"
            className="mx-4"
          />
        </Link>
        <ul className="flex justify-around mx-3">
          <li className="mx-7 cursor-pointer text-xl hover:text-white duration-500 ease-in-out">
            <Link to="/order-pizza">Order Pizza</Link>
          </li>
          <li className="mx-7 cursor-pointer text-xl hover:text-white duration-500 ease-in-out">
            <Link to="/build-pizza">Build your pizza</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <button className="flex items-center justify-center bg-amber-500 text-white px-3 py-2 rounded cursor-pointer">
          <FaShoppingCart />
          Shpping Cart
        </button>
      </div>
    </div>
  )
}
export default Navbar
