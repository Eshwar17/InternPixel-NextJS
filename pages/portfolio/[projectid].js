import { useRouter } from 'next/router';

function ProjectFile() {

    const router = useRouter();
    console.log(router.pathname)
    console.log(router.query)

    return <><h1>
        I am project id page
    </h1>
    </>
}
export default ProjectFile;