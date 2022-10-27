import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <nav>
        <div>
        <a href="#">INFO</a>
        </div>
      </nav>
      <main className="container">
        <aside>
          <img className="image-avatar" src="https://avatars.githubusercontent.com/u/57638911" alt="image: avatar" />
          <h3>Svetashov Konstantin</h3>
          <h4>Front-end developer</h4>
          <h3>Links</h3>
          <ul>
            <li>
              <img src="img/email.svg" alt="icon: email" />
              kostya.svetashov.01@gmail.com
            </li>
            <li>
              <img src="img/pin.svg" alt="icon: geolocation" />
              Russia, Saratov
            </li>
          </ul>
          <div className="links">
            <a href="https://vk.com/id221961828" target="_blank">
              <img src="img/vk.svg" alt="icon: vk" />
            </a>
            <a href="https://github.com/klltx" target="_blank">
              <img src="img/github.svg" alt="icon: github" />
            </a>
            <a href="https://t.me/klltx" target="_blank">
              <img src="img/tg.svg" alt="icon: telegram" />
            </a>
            <a href="https://www.linkedin.com/in/klltx/" target="_blank">
              <img src="img/linkedin.svg" alt="icon: linkedin" />
            </a>
          </div>
          <h3>Skills</h3>
          <ul>
            <li>
              <img src="img/skill.svg" alt="icon: skill" />
              JavaScript / TypeScript
            </li>
            <li>
              <img src="img/skill.svg" alt="icon: skill" />
              React / Redux
            </li>
            <li>
              <img src="img/skill.svg" alt="icon: skill" />
              Git
            </li>
            <li>
              <img src="img/skill.svg" alt="icon: skill" />
              SQL
            </li>
          </ul>
          <h3>Languages</h3>
          <ul>
            <li>
              <img src="img/usa.svg" alt="icon: usa" />
              English: level grade - B1
            </li>
            <li>
              <img src="img/russia.svg" alt="icon: russia" />
              Russian
            </li>
          </ul>
        </aside>
        <section>
          <header>
            <h1>Svetashov Konstantin</h1>
          </header>
          <article>
            <h4>Education</h4>
            <ul>
              <li>Stepic: HTML & CSS</li>
              <li>University: information systems and technologies</li>
              <li>RS school: Frontend</li>
              <li>Glo academy: JS courses</li>
            </ul>
          </article>
        </section>
      </main>
      <footer className="container">
        <p>2022</p>
      </footer>
    
    </div>
  );
}

export default App;
