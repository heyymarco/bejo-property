import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router'
import { getPage } from '../lib/api';
import Page from '../components/Page'



export default function page(props: any) {
    return (
        <Page {...props} />
    );
}
export const getServerSideProps : GetServerSideProps = async (context) => {
    const slug = '';
    const page = await getPage(slug);

    return {
        props: {
            ...page
        }
    }
};