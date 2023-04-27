import { useParams } from 'react-router-dom';

const SingleProject = () => {
    const {slug} = useParams();
    return (
        <>
            <h1>Single Project</h1>
            <p>{slug}</p>
        </>
    );
}

export default SingleProject;