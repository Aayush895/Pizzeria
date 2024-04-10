import { useState, useEffect } from "react";

const BuildPizza = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isChecked, setisChecked] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchIngredients = async () => {
      const data = await fetch(
        "http://localhost:3000/api/v1/pizzeria/ingredients"
      );
      const jsonData = await data.json();
      setisChecked(new Array(jsonData.ingredients.length).fill(false));
      setIngredients(jsonData?.ingredients);
    };

    fetchIngredients();
  }, []);

  const handleCheckbox = (position) => {
    const updatedCheckedState = isChecked.map((checked, index) => {
      return position === index ? !checked : checked;
    });

    setisChecked(updatedCheckedState);
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + ingredients[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  console.log(isChecked);
  return (
    <div className="p-16 text-center">
      <p className="mb-10">
        Pizzeria now gives you option to build your own pizza. Customize your
        pizza by choosing ingredients from the list below.
      </p>
      <table>
        <tbody>
          {ingredients !== null ? (
            ingredients.map((ingredient, index) => {
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
                  <td className="text-center font-bold">
                    <span>{ingredient?.name}</span>
                    <span className="mx-5">
                      &#8360;. {ingredient?.price}.00
                    </span>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="add"
                      value={index}
                      defaultValue={false}
                      checked={isChecked[index]}
                      onChange={() => handleCheckbox(index)}
                    />
                    <label htmlFor="add" className="mx-4 text-amber-500">
                      Add
                    </label>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>

      <h1 className="text-4xl font-bold mt-10">Total: &#8360;{total}.00</h1>
      <button className="bg-black text-white border border-amber-500 rounded px-4 py-3 mt-10">
        Build your Pizza
      </button>
    </div>
  );
};
export default BuildPizza;
