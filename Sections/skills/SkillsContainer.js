import SkillsCard from "./SkillsCard";
import {skills} from "../../_data/_Skills";

const SkillsContainer = ({skillsRef}) => {
    return (
        <>
            <section
                className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
                id="skills"
                ref={skillsRef}
            >
                <h2 className="text-5xl">Skills</h2>
                <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>
                <div className="w-full grid gap-4 grid-cols-4 sm:grid-cols-4 md:grid-cols-7 mt-4">
                    {skills.map(({title,icon}, index)=>(
                        <SkillsCard title={title} icon={icon} key={index} />
                    ))}

                </div>
            </section>

        </>
);
};

export default SkillsContainer;