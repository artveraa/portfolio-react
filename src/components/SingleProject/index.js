import {Link, useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import createClient from "../../client";

const SingleProject = () => {
    const [singleProject, setSingleProject] = useState([]);

    useEffect(() => {
        createClient.fetch(`*[slug.current == "${slug}"]{
            title,
            slug,
        } | order(publishedAt desc)`).then((data) => setSingleProject(data[0]));
    });

    const {slug} = useParams();

    return (
        <>
            <h1>Single Project</h1>
            {/*<p>{slug}</p>*/}
            <h2>{singleProject.title}</h2>
        </>
    );
}

export default SingleProject;