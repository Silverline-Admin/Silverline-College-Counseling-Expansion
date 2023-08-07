import React, { useState } from "react";

interface CollapseBtnProps {
  region: string;
  countries: string[];
}

const CollapseBtn: React.FC<CollapseBtnProps> = ({ region, countries }) => {
  const [show, setShow] = useState(false);

  const showCountries = () => {
    setShow(!show);
  };
  const countriesLi: JSX.Element[] = [];
  countries.forEach((country) =>
    countriesLi.push(<li className="mx-4">{country}</li>)
  );

  return (
    <>
      <div className="container text-white px-0">
        <button
          className="btn py-3"
          style={{
            color: "white",
            width: "100%",
            backgroundColor: !show ? "transparent" : "#5271FF",
            textAlign: "left",
            borderRadius: "0",
          }}
          onClick={showCountries}
        >
          {show ? (
            <div
              className="my-0"
              style={{
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              <i className="fa-sharp fa-solid fa-minus" /> {region}
            </div>
          ) : (
            <p className="my-0 text-left">
              <i className="fa-sharp fa-solid fa-plus" /> {region}
            </p>
          )}
        </button>

        <br />

        {show ? <ul className="text-white py-3 my-0">{countriesLi}</ul> : null}
      </div>
    </>
  );
};

export default CollapseBtn;
