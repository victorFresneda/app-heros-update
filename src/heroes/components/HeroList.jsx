

import React from 'react'
import { getHeroesByPublisher } from '../helpers'
import image from '../assets/heros/dc-superman.jpg'



export const HeroList = ({ publisher}) => {

    const Heroes = getHeroesByPublisher( publisher );
    const heroImageUrl = '../assets/heros/dc-superman.jpg'

  return (
    <div className="row row-cols-1 row-cols-md-3">
        {Heroes.map((hero) => (
            <div key={hero.id} className="col mt-4 ">
                <div
                  className="card align-items-center p-2 "
                  style={{ minwidth: "200px" }}
                >
                  <img
                    src={image}
                    
                    className="card-img-top rounded-circle"
                    alt={hero.superhero}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Name: {hero.superhero}</h5>
                    <p className="card-subtitle  text-muted ">
                        Alter ego: {hero.alter_ego}
                    </p>
                    <a
                      href={image}
                      target="_blank"
                      className="btn btn-info btn-block"
                    >
                      Image
                    </a>
                  </div>
                </div>
                </div>
                        ))}
    </div>
  )
}
