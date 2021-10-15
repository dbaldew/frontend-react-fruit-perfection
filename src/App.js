import React from 'react';
import './App.css';
import Product from "./Components/Product";
import citroenen from './assets/citroenen.jpeg';
import limoenen from './assets/limoenen.png';
import ijsblokjes from './assets/ijsblokjes.jpg';
import {ReactComponent as ShoppingCart} from './assets/winkelmandje.svg';

function App() {
    const [messageValue, setMessageValue] = React.useState("");
    const [checkedTerms, toggleCheckedTerms] = React.useState (false)
    const [clicked, toggleClicked] = React.useState (false)

    function handleClick () {
        console.log("De knop is succesvol aangeklikt");
        toggleClicked (!clicked);
    }

    return (
        <>
            <nav>
                <ul>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Ons verhaal</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
                <ShoppingCart className="shopping-cart-icon"/>
            </nav>
            <header>
                <h1>Fruit Perfection</h1>
                <button type="button" onClick={() => console.log("jij wil shoppen!")}
                >Shop nu
                </button>
            </header>
            <main>
                <Product
                    img={citroenen}
                    alt="citroenen.jpg"
                    title="Citroenen"
                    description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
                />
                <Product
                    img={limoenen}
                    alt="limoenen.jpg"
                    title="Citroenen"
                    description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
                />
                <Product
                    img={ijsblokjes}
                    alt="ijsblokjes.jpg"
                    title="Citroenen"
                    description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
                />
            </main>
            <footer>
                <div className="form-container">
                    <h2>Contactformulier</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Typ hier jouw bericht"
                            name="message"
                            className={messageValue.length > 20 ? 'input-error' : 'input-normal'}
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
                        />
                        {messageValue.length > 20 && <p className="error-message">Dit bericht is te lang!</p>}
                    </form>
                    <button
                        type="submit"
                        disabled={!checkedTerms}
                        onClick={handleClick}
                        >Verstuur</button>
                </div>
                <div>
                    <label htmlFor="terms-and-conditions">
                        <input type="checkbox"
                               name="terms-and-conditions"
                               id="terms-and-conditions"
                               checked = {checkedTerms}
                               onChange ={() => toggleCheckedTerms (!checkedTerms)}

                        />Ik ga akkoord met de algemene voorwaarden
                    </label>
                </div>
            </footer>
        </>

    );
}

export default App;
