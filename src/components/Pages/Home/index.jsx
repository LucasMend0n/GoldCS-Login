import React from 'react'
import './Home.css';
import { students } from './integrantsData';


const Home = () => {


  return (
    <section className="HomePage">
      <div className='display-user'>BEM VINDO AO GOLDCS</div>
      <article className='buttons_section'>
        <div className='home_buttons'>
          <ul>
            {students.map((item, index) => {
              return (
                <>
                  <h1>INTEGRANTES DO GRUPO</h1>
                  <li key={index} >
                    <p>Nome: {item.nome} / RA: {item.ra}</p>
                  </li>
                </>
              );
            })}
          </ul>
        </div>

      </article>
    </section>
  )
}

export default Home