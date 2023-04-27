import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import createClient from "../../client";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        createClient.fetch(`*[_type == "post"]{
            title,
            slug,
        } | order(publishedAt desc)`).then((data) => setProjects(data));
    }, []);

    return (
        <>
            <div>
                <h1>Projets</h1>
                <section>
                    {projects.map((project, index) => (
                        <article key={index}>
                            <Link to={`/projets/${project.slug.current}`}>
                                <h2>{project.title}</h2>
                            </Link>
                        </article>
                    ))}
                </section>
            </div>
        </>
    )
}

export default Projects;
