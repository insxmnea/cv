import { FC } from "react";
// import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.scss";

const ProjectCard: FC<TProjectData> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={process.env.PUBLIC_URL + props.image}
          alt={props.name}
          draggable="false"
        />
      </div>

      <div className={styles.tags}>
        <p>{props.topics.join(" ")}</p>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{props.name}</h1>
        <p className={styles.description}>{props.description}</p>

        <a
          className={styles.linkButton}
          href={props.html_url}
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>

        {props.homepage ? (
          <a
            className={styles.linkButton}
            href={props.homepage}
            target="_blank"
            rel="noreferrer"
          >
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
