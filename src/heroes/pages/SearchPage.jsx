import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../helpers";
import { Link } from "react-router-dom";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heros = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder=""
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">Search a hero</div>

          <div className="alert alert-danger">
            No hero wirh <b>{q}</b>
          </div>

          <div className="row row-cols-1 row-cols-md-2">
            {heros.map((hero) => (
              <div
                key={hero.id}
                className="col mt-4 animate__animated animate__jackInTheBox"
              >
                <div
                  className="card align-items-center p-2 bg-secondary border border-3 border-dark"
                  style={{ minwidth: "200px" }}
                >
                  <img
                    src={hero.url}
                    className="card-img-top rounded-circle border border-2 border-danger"
                    alt={hero.superhero}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title text-light">{hero.superhero}</h5>
                    <p className="card-subtitle  text-dark ">
                      {hero.alter_ego}
                    </p>

                    <Link
                      to={`/hero/${hero.id}`}
                      className="btn btn-danger btn-sm mt-1"
                    >
                      More...
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
