import Icon from "../../components/Icon";

const SkillsCard = ({icon, title}) => {
    return (
        <>
            <Icon
                IconType={icon}
                title={title}
                width={"w-16 sm:w-20"}
                height={"h-16 sm:h-20"}
                padding={"p-0"}
                flexDirection={"flex-col"}
                titleMargins={"mt-4"}
                titleSize={"text-sm sm:text-sm"}
                marginBottom={"mb-4"}
                marginRight={"mr-0"}
                textTransform={"normal-case"}
                fixedHeight={"h-28"}
            />
        </>
    );
};

export default SkillsCard;