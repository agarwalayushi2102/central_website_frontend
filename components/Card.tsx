import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div className="body">
      <div className="wrap">
        <div className="box">
          <div className="box-top">
            <img className="box-image" src="https://images.unsplash.com/photo-1622219809260-ce065fc5277f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMwNjYxOQ&ixlib=rb-1.2.1&q=85" alt="Girl Eating Pizza" />
            <div className="title-flex">
              <h3 className="box-title">Kelsie Meyer</h3>
              
            </div>
            <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
          </div>
         <span><a href="#" className="button"><span>Follow Kelsie</span></a></span> 
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNTMwNQ&ixlib=rb-1.2.1&q=85" alt="Girl Eating Pizza" />
            <div className="title-flex">
              <h3 className="box-title">Mark Carusso</h3>
              
            </div>
            <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
          </div>
          <a href="#" className="button">Follow Mark</a>
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src="https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNTQzNA&ixlib=rb-1.2.1&q=85" alt="Girl Eating Pizza" />
            <div className="title-flex">
              <h3 className="box-title">Taylor Green</h3>
              
            </div>
            <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
          </div>
          <a href="#" className="button">Follow Taylor</a>
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNjA1MA&ixlib=rb-1.2.1&q=85" alt="Girl Eating Pizza" />
            <div className="title-flex">
              <h3 className="box-title">Isaiah Jian</h3>
             
            </div>
            <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
          </div>
          <a href="#" className="button">Follow Isaiah</a>
        </div>
      </div>
    </div>
  )
}

export default Card
