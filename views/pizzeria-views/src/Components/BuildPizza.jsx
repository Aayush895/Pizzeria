import {useState, useEffect} from 'react'

const BuildPizza = () => {

  const [ingredients, setIngredients] = useState(null)

  useEffect(() => {
    const fetchIngredients = async () => {
      const data = await fetch('http://localhost:3000/api/v1/pizzeria/ingredients')
      const jsonData = await data.json()

      setIngredients(jsonData ?. ingredients)
      console.log(jsonData);
    }

    fetchIngredients()
  }, [])

  return (
    <div className='p-16 text-center'>
      <p className='mb-10'>Pizzeria now gives you option to build your own pizza. Customize your pizza by choosing ingredients from the list below.</p>
      <table>
        {ingredients !== null ? ingredients.map((ingredient) => {
         return (
           <tr key={ingredient?._id}>
             <td>
               <img
                 src={ingredient?.image}
                 alt=""
                 width="150px"
                 height="150px"
               />
             </td>
             <td className='text-center font-bold'>
               <span>{ingredient?.name}</span>
               <span className='mx-5'>&#8360;. {ingredient?.price}.00</span>
             </td>
             <td>
               <input type="checkbox" name="add" />
               <label htmlFor="add" className='mx-4 text-amber-500'>Add</label>
             </td>
           </tr>
         )
        }) : <h1>Loading...</h1>}
      </table>

      <button className='bg-black text-white border border-amber-500 rounded px-4 py-3 mt-10'>
        Build your Pizza
      </button>
    </div>
  )
}
export default BuildPizza