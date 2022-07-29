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
    <div className="row align-items-center justify-content-center vh-100 animate__animated animate__tada">
      <div className="card" style={{ width: "350px" }}>
        <img
          src={hero.url}
          className="card-img-top mt-4 img-thumbnail"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">First appearance</h5>
          <p className="card-text">{hero.first_appearance}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Name:</b> {hero.superhero}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Characters:</b> {hero.characters}
          </li>
        </ul>

        <button className="btn btn-outline-primary mb-4" onClick={onNavigateBack}  >Back</button>
      </div>
    </div>
  );
};
