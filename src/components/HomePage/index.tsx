import Header from "../Header";
import ProjectCard from "../ProjectCard";
import Footer from "../Footer";
import styles from "./HomePage.module.scss";
import { useEffect, useState } from "react";
import mergeProjectData from "../../utils/mergeProjectData";
import { Loader } from "../Loader";

const initData: TInitData = require("./../../assets/data/index.json");

const HomePage = () => {
  const [projects, setProjects] = useState<TProjectData[]>();

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${initData.owner.name}/repos?sort=created&per_page=100`
    )
      .then((response) => response.json())
      .then((data) => {
        setProjects([...mergeProjectData(initData, data).projects]);
      });
  }, []);

  const createProjectCards = (projects: TProjectData[]) => {
    return projects.map((project: TProjectData) => (
      <ProjectCard
        id={project.id}
        name={project.name}
        description={project.description}
        topics={project.topics}
        html_url={project.html_url}
        homepage={project.homepage}
        stargazers_count={project.stargazers_count}
        forks_count={project.forks_count}
        image={project.image}
        created_at={project.created_at}
        key={project.id.toString()}
      />
    ));
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.projects}>
        <h1 className={styles.title}>projects</h1>
        {/* <h1 className='section-title'>skills</h1>
        <h1 className='section-title'>about-me</h1>
        <h1 className='section-title'>contacts</h1> */}
        {projects ? (
          <div className={styles.projectCards}>
            {createProjectCards(projects)}
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
