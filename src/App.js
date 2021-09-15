import React from 'react';
import './App.css';
import Product from "./Components/Product";
import citroenen from './assets/citroenen.jpeg'
import limoenen from './assets/limoenen.png'
import ijsblokjes from './assets/ijsblokjes.jpg'

function App() {
    return (
        <>
            <header>
                <h1>Fruit Perfection</h1>
                <button type="button" onClick= {() => console.log("jij wil shoppen!")}

                >Shop nu</button>
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
        </>

    );
}

export default App;
