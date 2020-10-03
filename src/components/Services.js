import React from 'react';
// import Nav from './Nav.js'


const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
          <h2>Wykonujemy meble na wymiar.</h2>
          <p>Specjalizujemy się w zabudowach kuchennych.</p>

          <div className="offer">
            <h3 className="offer-header">Oferujemy:</h3>
            <ul className="offer-list">
              <li>
                pomiar, projekt i wycenę
              </li>
              <li>
                profesjonalne doradztwo dotyczące możliwych rozwiązań
              </li>
              <li>
                wykonanie mebli według naszego projektu lub według projektu innego projektanta
              </li>
              <li>
                transport i montaż mebli u klienta
              </li>
            </ul>
          </div>

          <div className="work">
          <h3 className="work-header">
            Jak pracujemy?
          </h3>
            <ol className="work-list">
              <li>
                Zaczynamy od spotkania i rozmowy, podczas której chcemy uzyskać jak najwięcej informacji na temat potrzeb klientów i ich wyobrażenia na temat planowanej zabudowy. Dysponujemy wzornikami, katalogami oraz wiedzą na temat wad i zalet różnych rozwiązań. Współpracujemy z najlepszymi dostawcami różnorodnych materiałów, okuć i systemów meblowych. Osoby, które rozmawiają z klientami wykonują później projekt dla nich i montują meble, co oznacza, że naprawdę wiedzą o czym mówią.
              </li>
              <li>
                Po ustaleniu szczegółów i dokonaniu pomiarów u klienta, wykonujemy projekt oraz wizualizację. Następnie projekt jest ponownie konsultowany.
              </li>
              <li>
                Zatwierdzony projekt jest indywidualnie wyceniany (z uwzględnieniem cen wybranych przez klienta materiałów, okuć i systemów) oraz gabarytów planowanej zabudowy meblowej.
              </li>
              <li>
                Następnie realizujemy projekt w terminie i na warunkach indywidualnie ustalonych z klientami.
              </li>
            </ol>
          </div>
      </div>
    </section>
  );
}

export default Services;
