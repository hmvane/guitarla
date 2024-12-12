import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Guitar from "./components/Guitar";
import useCart from "./hooks/useCart";

function App() {

  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal
  } = useCart();
  //iterar un arreglo sera con expresiones
  return (
    //retornar componentes
    <>
      <main className="container-xl mt-5">
        <Header
          cart={cart}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          clearCart={clearCart}
          isEmpty={isEmpty}
          cartTotal={cartTotal}
        ></Header>
        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            ></Guitar>
          ))}
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
