import Link from "next/link";

const Blog = ({title, description,btnText,link}) => {
    return (
        <>
            <h2 className="text-5xl">{title}</h2>
            <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>
            <div className="flex flex-col-reverse w-full md:flex-row">
                <div className="w-full mb-4 md:pl-0 md:mb-0">
                    <p className="text-lg">
                        {description}{" "}
                        <Link className="underline-link" href={link}>
                            {btnText}
                        </Link>
                    </p>
                </div>
            </div>

        </>
    );
};

export default Blog;