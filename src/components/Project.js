import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <img className="rounded-2xl" src={item.image} alt="projects" />
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <p className="text-base max-w-md">{item.description}</p>
      <div className="flex flex-row">
        <a
          className={
            item.repo
              ? "btn btn-md bg-accent hover:bg-accent-hover md:btn-sm transition-all m-2"
              : "hidden"
          }
          href={item.repo}
        >
          GitHub
        </a>
        <a
          className={
            item.link
              ? "btn btn-md bg-accent hover:bg-accent-hover md:btn-sm transition-all m-2"
              : "hidden"
          }
          href={item.link}
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default Project;
