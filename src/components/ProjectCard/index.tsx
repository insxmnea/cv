import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.scss";

interface IProjectCard {
  image: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
}

const ProjectCard: FC<IProjectCard> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={process.env.PUBLIC_URL + props.image}
          alt={props.title}
          draggable="false"
        />
      </div>

      <div className={styles.tags}>
        <p>{props.tags.join(" ")}</p>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.description}>{props.description}</p>

        <a className={styles.linkButton} href={props.github} target="_blank">
          Github
        </a>

        {props.live ? (
          <a className={styles.linkButton} href={props.live} target="_blank">
            Live
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
