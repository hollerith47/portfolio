import SkillsCard from "./SkillsCard";
import {skills} from "../../_data/_Skills";

import Html from "../../components/icons/Html";
import Css from "../../components/icons/Css";
import Javascript from "../../components/icons/Javascript";
import ReactJs from "../../components/icons/ReactJs";
import Php from "../../components/icons/Php";
import Python from "../../components/icons/python";
import Csharp from "../../components/icons/Csharp";
import Java from "../../components/icons/Java";
import NodeJs from "../../components/icons/NodeJs";
import Express from "../../components/icons/Express";
import NextJs from "../../components/icons/NextJs";
import Laravel from "../../components/icons/Laravel";
import Sass from "../../components/icons/Sass";
import Bootstrap from "../../components/icons/Bootstrap";
import MongoDb from "../../components/icons/MongoDb";
import Firebase from "../../components/icons/Firebase";
import Supabase from "../../components/icons/Supabase";
import Tailwind from "../../components/icons/Tailwind";
import Photoshop from "../../components/icons/Photoshop";
import Icon from "../../components/Icon";

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
                <div className="w-full flex flex-wrap items-stretch">
                    {skills.map(({title,icon}, index)=>(
                        <SkillsCard title={title} icon={icon} key={index} />
                    ))}
                </div>
            </section>

        </>
);
};

export default SkillsContainer;