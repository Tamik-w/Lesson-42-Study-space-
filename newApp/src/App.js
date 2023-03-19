import React, { useState, useEffect } from "react";

const App = () => {

  const [products, setProducts] = useState({
    coffe: 0,
    sugar: 0
  });
  const addCoffe = () => setProducts((prevState) => {
    return {
      ...prevState,
      coffe: prevState.coffe + 1
    }});
  const addSugar = () => setProducts((prevState) => {
    if(prevState.sugar <= 4) {
      return {
        ...prevState,
        sugar: prevState.sugar + 1
      }
    } else if(prevState.sugar > 4) {
      return {
        ...prevState,
        sugar: prevState.sugar + 0
      }
    }
   });

  const remCoffe = () => setProducts((prevState) => {
    if(products.coffe > 0){
      return {
        ...prevState,
        coffe: prevState.coffe - 1
      }
    } else if (products.coffe <= 0) {
      return {
        ...prevState,
        coffe: prevState.coffe - 0
      }
    }
  });
  const remSugar = () => setProducts((prevState) => {
    if(products.sugar > 0){
      return {
        ...prevState,
        sugar: prevState.sugar - 1
      }
    } else if (products.sugar <= 0) {
      return {
        ...prevState,
        sugar: prevState.sugar - 0
      }
    }
  });

const save = () => {
  localStorage.setItem('coffe', products.coffe);
  localStorage.setItem('sugar', products.sugar);
}

const clear = () => {
  localStorage.removeItem('coffe');
  localStorage.removeItem('sugar');
  setProducts((prevState) => {
    return {
      ...prevState,
      coffe: 0,
      sugar: 0
  }});
}

useEffect(()=>{
  if (localStorage.getItem('coffe')) {
    setProducts((prevState) => {
      return {
        ...prevState,
        coffe: prevState.coffe + +localStorage.getItem('coffe')
      }});
      setProducts((prevState) => {
        return {
          ...prevState,
          sugar: prevState.sugar + +localStorage.getItem('sugar')
        }});
  }
}, []);

const removeCoffeButton = () => {
  if(products.coffe > 0) {
    return <button onClick={remCoffe}>Remove</button>
  }
}

const removeSugarButton = () => {
  if(products.sugar > 0) {
    return <button onClick={remSugar}>Remove</button>
  }
}

  return (
    <div className="wrapper">
      <div className="list">
        <h1>Product list</h1>
        <div className='product'>
        <span>{`Coffe: ${products.coffe}`}</span>
        <button onClick={addCoffe}>Add</button>
        {removeCoffeButton()}
        </div>
        <div className='product'>
        <span>{`Sugar: ${products.sugar}`}</span>
          <button onClick={addSugar}>Add</button>
        {removeSugarButton()}
        </div>
        <div className='save'>
            <button onClick={save}>SAVE</button>
            <button onClick={clear}>CLEAR</button>
          </div>
      </div>
    </div> 
    );
  }
export default App;