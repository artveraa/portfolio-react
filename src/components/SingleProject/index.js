import { useParams } from 'react-router-dom';

const SingleProject = () => {
    const {slug} = useParams();
    return (
        <>
            <h1>Single Post</h1>
            <p>{slug}</p>
        </>
    );
}

export default SingleProject;