/* eslint-disable react/prop-types */
const PizzaCard = ({ pizza }) => {
  return (
    <div className="flex justify-between border border-black w-[50%] h-[520px] mx-auto px-5 py-4 mb-4 mt-3">
      <div className="mr-4">
        <h1 className="text-3xl text-center">{pizza?.name}</h1>
        <div
          className="h-[30px] w-[30px] mb-10 mx-auto"
          style={{ backgroundColor: pizza?.isVeg ? 'green' : 'red' }}
        ></div>
        <p className="text-center font-semibold">&#8360;. {pizza?.price}.00</p>
      </div>

      <div className="mx-10">
        <p className="text-2xl mb-5">{pizza?.description}</p>
        <p className="text-xl mb-5">
          <span className="font-bold">Ingredients:</span>{' '}
          {`${pizza?.ingredients}`}
        </p>
        <p className="text-xl mb-5">
          <span className="font-bold">Toppings:</span> {`${pizza?.toppings}`}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img src={pizza?.image} alt="" width="" className="mb-5" />
        <button className="bg-amber-500 text-white px-[0.5rem] py-2 rounded cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
export default PizzaCard
