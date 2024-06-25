const mergeProjectData = (obj1: TInitData, obj2: any): TData => {
  const res: TProjectData[] = obj1.projects.map((project: TInitProjectData) => {
    const finded: TProjectData = obj2.find(
      (elem: TProjectData) => elem.name === project.name
    );

    return {
      id: finded.id,
      name: project.name,
      description: finded.description,
      topics: [...finded.topics],
      html_url: finded.html_url,
      homepage: finded.homepage,
      stargazers_count: finded.stargazers_count,
      forks_count: finded.forks_count,
      image: project.image,
      created_at: finded.created_at,
    };
  });

  return {
    owner: { ...obj1.owner },
    projects: res,
  };
};

export default mergeProjectData;
