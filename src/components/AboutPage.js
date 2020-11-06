import React from "react";

const AboutPage = () => {
  return (
    <main className="about-section">
      <div className="container">
        <div className="text-info-1">
          <p>
            <span> Firma FLACKY COMBINATION MEBLE <div className="highlight"></div> </span> funkcjonuje na rynku od
            2009 roku, jednak możemy pochwalić się znacznie dłuższym
            doświadczeniem w branży. Projektujemy i wykonujemy przede wszystkim
            zabudowy kuchenne, choć potrafimy dużo więcej.
          </p>
          <div className="decoration-1"></div>
        </div>
        <div className="about-photo-1"></div>
        <div className="text-info-2">
          <p>
            Przychodząc do nas, możecie Państwo liczyć na profesjonalne
            doradztwo, w kwestii pomysłu na zabudowę, projektu, rozwiązań
            technologicznych czy materiałowych, okuć itp.
          </p>
          <p>
            Wykonujemy również meble według gotowych projektów. Mamy głowy pełne
            pomysłów, z pasją śledzimy trendy i nowe rozwiązania na rynku (np.
            systemy, które można montować w meblach czy nowości materiałowe) i
            chętnie o nich opowiadamy. Zapraszamy do skorzystania z naszych
            usług.
          </p>
          <div className="social-link">
            <a href="https://www.facebook.com/FlackyCombination">
              <div className="icon"></div>
            </a>
          </div>
        </div>

        <div className="about-photo-2"></div>
      </div>
    </main>
  );
};

export default AboutPage;
