import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import createClient from "../../client";

function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        createClient.fetch(`*[_type == "post"]{
            title,
            slug,
        } | order(publishedAt desc)`).then((data) => setPosts(data));
    }, []);

    return (
        <>
            <div>
                <h1>Blog</h1>
                <section>
                    {posts.map((post, index) => (
                        <article key={index}>
                            <Link to={`/blog/${post.slug.current}`}>
                                <h2>{post.title}</h2>
                            </Link>
                        </article>
                    ))}
                </section>
            </div>
        </>
    )
}

export default Blog;
