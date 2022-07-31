import { useMemo } from "react";
import { Navigate,useNavigate,useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroesById(id), [id]); 

  const onNavigateBack = () => {
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row align-items-center justify-content-center vh-100 animate__animated animate__tada ">
      <div className="card border border-4 border-secondary bg-secondary" style={{ width: "350px" }}>
        <img
          src={hero.url}
          className="card-img-top mt-4 img-thumbnail bg-danger border border-4 border-dark"
          alt="..."
        />
        {/* <div className="card-body">
          <h5 className="card-title">First appearance</h5>
          <p className="card-text text-light">{hero.first_appearance}</p>
        </div> */}
        <ul className="list-group list-group-flush border border-2 border-dark mt-4">
          <li className="list-group-item bg-dark text-light">
            <b className="text-danger">Name:</b> {hero.superhero}
          </li>
          <li className="list-group-item bg-secondary text-light">
            <b className="text-dark">Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item bg-dark text-light">
            <b className="text-danger">Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item bg-secondary text-light">
            <b className="text-dark">First appearance:</b> {hero.first_appearance}
          </li>
          <li className="list-group-item bg-dark text-light">
            <b className="text-danger">Characters:</b> {hero.characters}
          </li>
        </ul>

        <button className="btn btn-danger mb-4 mt-4" onClick={onNavigateBack}  >Back</button>
      </div>
    </div>
  );
};
