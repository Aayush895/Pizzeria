import {useState, useEffect} from 'react'
import PizzaCard from './PizzaCard'

const OrderPizza = () => {

  const [pizzas, setPizzas] = useState(null)

  useEffect(() => {
    const fetchPizza = async () => {
      const data = await fetch('http://localhost:3000/api/v1/pizzeria/pizza')
      const jsonData = await data.json()

      setPizzas(jsonData ?. pizzas)
    }

    fetchPizza()
  }, [])

  return (
    <div className='flex flex-wrap justify-between items-center'>
      {pizzas !== null ? (pizzas.map((pizza) => <PizzaCard pizza={pizza} key={pizza ?. _id}/>)) : <h1>Loading...</h1>}
    </div>
  )
}
export default OrderPizza