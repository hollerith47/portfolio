import React from "react";
import MockupToolbar from "./MockupToolbar";
import Button from "./Button";
import SourceButton from "./SourceButton";
import Image from "next/image";

import GitHub from "./icons/GitHub";
import ExternalLink from "./icons/ExternalLink";
import Html from "./icons/Html";
import Icon from "./Icon";

const FeaturedProjectCard = ({
                                 title, status, flexDirection, description, imgSrc, stack, icons, liveLink, repoLink,
                             }) => {
    return (<article
            className={`relative flex items-stretch w-full dark:bg-mid bg-white p-3.5 my-4 ${flexDirection} gap-x-3.5 rounded-md shadow-md shadow-light/10 dark:shadow-dark`}
        >
            {/* Project image */}
            <div
                className="flex flex-col w-full lg:w-7/12 my-auto rounded-md overflow-hidden border border-shadow dark:border-mid">
                <MockupToolbar/>
                <Image
                    src={imgSrc}
                    width="1366"
                    height="665"
                    alt={`${title} user interface`}
                />
            </div>

            {/* Project info */}
            <div
                className={`grow flex flex-col relative w-full p-3.5 lg:w-5/12 lg:right-0 lg:-translate-x-0 gap-y-2`}
            >
                <p className="mb-0 tracking-wider small-text text-brand dark:text-brand">
                    {status}
                </p>
                <h3>{title}</h3>
                <div className="w-1/4 h-1 bg-brand mb-2">&nbsp;</div>
                <div className="flex flex-wrap mb-2">
                    {/*{stack}*/}
                    {icons.map((el, idx) => (
                        <Icon
                            key={idx}
                            IconType={el.icon}
                            title={el.title}
                            columnSizing={"w-auto"}
                            width={"w-6"}
                            height={"h-6"}
                            flexDirection={"flex-row"}
                            padding={"p-0"}
                            titleMargins={"my-0 ml-1"}
                            titleSize={"text-sm"}
                            marginBottom={"mb-4"}
                            marginRight={"mr-3"}
                            textTransform={"uppercase"}
                            fixedHeight={"h-auto"}
                        />
                    ))}
                </div>
                <p className="text-sm tracking-wide leading-normal">{description}</p>
                <div className="flex">
                    {liveLink !== null ? (<Button
                        link={liveLink}
                        text={"Live"}
                        square={false}
                        icon={<ExternalLink square={false}/>}
                    />) : null}

                    {repoLink !== null ? (<Button
                        link={repoLink}
                        text={"Source"}
                        square={false}
                        icon={<GitHub square={false}/>}
                    />) : null}
                </div>
            </div>
        </article>
    )
        ;
};

export default FeaturedProjectCard;
