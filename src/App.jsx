import { useEffect, useState } from 'react'
import foods from './foods'
// import App from './app'
import Home from './home'
import Cart from './carts'




function App() {
  let [foodData, setFoodData] = useState(foods)
  let [Foods, setFoods] = useState(() => {
    let saveFood = localStorage.getItem('AllFood')
    if (saveFood) {
      return JSON.parse(saveFood)
    } else {
      return []
    }
  })
  let [viewCart, SetViewCart] = useState(true)
  let [logIn, setLogIn] = useState(true)

  let handleViewCart = () => {
    SetViewCart(prevView => !prevView)
  }

  let AddFoodToCart = (img, name, title) => {
    setFoods([...Foods,
    {
      id: Foods.length + 1,
      img: img,
      name: name,
      title: title
    }
    ])
  }

  useEffect(() => {
    localStorage.setItem('AllFood', JSON.stringify(Foods))
  }, [Foods])

  let handleDelete = (id) => {
    let unDeletedFD = Foods.filter(food => {
      return food.id !== id
    })
    setFoods(unDeletedFD)
  }

  let handelLogIn = () => {
    setLogIn(prevLog => !prevLog)
  }

  return (
    <div>

      <>
        {
          viewCart ?
            (
              <Home
                handleViewCart={handleViewCart}
                Foods={Foods}
                foodData={foodData}
                AddFoodToCart={AddFoodToCart}
                handelLogIn={handelLogIn}
              />

            ) : (
              <Cart
                handleViewCart={handleViewCart}
                Foods={Foods}
                handleDelete={handleDelete}
                foodData={foodData}
              />
            )
        }

      </>

    </div>
  )
}

export default App
