import { useMemo } from "react";
import { Link } from "react-router-dom";
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
  const Heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]); 

  return (
    <div className="row row-cols-1 row-cols-md-3 mb-4">
      {Heroes.map((hero) => (
        <div key={hero.id} className="col mt-4 animate__animated animate__jackInTheBox">
          <div
            className="card align-items-center p-2 bg-warning border border-4 border-dark"
            style={{ minwidth: "200px" }}
          >
            <img
              src={hero.url}
              className="card-img-top rounded-circle border border-5 border-muted"
              alt={hero.superhero}
            />
            <div className="card-body text-center">
              <h5 className="card-title text-black">Name: {hero.superhero}</h5>
              <p className="card-subtitle  text-muted ">
                Alter ego: {hero.alter_ego}
              </p>

              <Link to={`/hero/${hero.id}`} className="btn btn-primary btn-sm mt-1">
                More...
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
