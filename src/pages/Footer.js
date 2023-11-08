import React from "react";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div className="footer">
      <p className="footer__paragraph">
        Nous sommes le {new Date().toLocaleDateString()}, et il est{" "}
        {new Date().toLocaleTimeString()}.{" "}
      </p>
      <div>
        {isOpen ? (
          <div className="footer__order">
            <p>
              Nous sommes ouverts jusqu'à {closeHour}:00. <br /> Vous pouvez
              commander sur notre site.
            </p>
            <button className="footer__btn">Commander</button>
          </div>
        ) : (
          <p>
            Nous sommes fermés. Nous serons heureux de vous accueillir entre{" "}
            {openHour}:00 et {closeHour}:00 !{" "}
          </p>
        )}
      </div>
    </div>
  );
}

export default Footer;
