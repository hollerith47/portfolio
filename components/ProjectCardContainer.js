import {_Projects} from "../_data/_Projects";
import FeaturedProjectCard from "./FeaturedProjectCard";

const ProjectCardContainer = () => {
    return (
        <>
            {_Projects.map((project, index)=> {
                const {title,  description,
                    status, imgSrc, link, repo, icons
                } = project;
                const directionElement = index % 2;
                return (
                    <FeaturedProjectCard
                        key={title}
                        title={title}
                        status={status}
                        description={description}
                        flexDirection={directionElement === 0 ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"}
                        imgSrc={imgSrc}
                        liveLink={link}
                        repoLink={repo}
                        icons={icons}
                    />
                )
            })}
        </>
    );
};

export default ProjectCardContainer;