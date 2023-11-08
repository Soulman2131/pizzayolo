import React from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Pizza from "./components/Pizza";

function App() {
  // const pizzas = [];
  const pizzas = [
    {
      name: "Focaccia",
      ingredients: "A l'huile d'olive italienne et au romarin.",
      price: 6,
      photoName: "assets/img/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomate and mozarella.",
      price: 10,
      photoName: "assets/img/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomate, mozarella, épinards et ricotta.",
      price: 12,
      photoName: "assets/img/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomate, mozarella, champignons et oignon.",
      price: 12,
      photoName: "assets/img/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomate, mozarella, and pepperoni.",
      price: 15,
      photoName: "assets/img/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomate, mozarella, jambon, roquette et burrata.",
      price: 18,
      photoName: "assets/img/prosciutto.jpg",
      soldOut: false,
    },
  ];
  return (
    <div className="app-container">
      <Header />
      <nav className="pizza__container">
        <div className="heading-secondary"> la carte</div>
        {pizzas.length > 0 ? (
          <>
            <p className="pizza__no-pizza">
              Tous les jours, nous nous efforçons avec l’aide de nos
              fournisseurs de sélectionner pour vous les meilleurs produits.
            </p>
            <ul className="pizza__list">
              {pizzas.map((pizza, index) => (
                <Pizza key={index} pizza={pizza} />
              ))}
            </ul>
          </>
        ) : (
          <p className="pizza__no-pizza">
            Nous sommes entrain de travailler sur la carte que l'on va vous
            proposer ❗❗❗ <br /> Revenez-nous vite. <br /> A bienôt !
          </p>
        )}
      </nav>
      <Footer />
    </div>
  );
}

export default App;
