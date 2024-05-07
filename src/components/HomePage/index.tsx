import Header from "../Header";
import ProjectCard from "../ProjectCard";
import Footer from "../Footer";
import styles from "./HomePage.module.scss";

interface IProjectData {
  image: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
}

interface IData {
  projects: IProjectData[];
}

const data: IData = require("./../../assets/data/index.json");

const HomePage = () => {
  const projectCards = data.projects.map((v, i) => (
    <ProjectCard
      description={v.description}
      github={v.github}
      live={v.live}
      image={v.image}
      tags={v.tags}
      title={v.title}
      key={i + v.title.trim().split(" ").join("")}
    />
  ));
  // console.log(data.projects);

  return (
    <div className="wrapper">
      <Header />
      <div>
        <div>
          {/* <h1>
            Konstantin is a <Subtitle>front-end developer</Subtitle>
          </h1> */}
          {/* <p className='py-6'>Coding</p> */}
          {/* <button>Contact me!</button> */}
        </div>
      </div>
      <div className={styles.projects}>
        <h1 className={styles.title}>projects</h1>
        {/* <h1 className='section-title'>skills</h1>
        <h1 className='section-title'>about-me</h1>
        <h1 className='section-title'>contacts</h1> */}
        <div className={styles.projectCards}>{projectCards}</div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
