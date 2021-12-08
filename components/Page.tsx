// @ts-ignore
import BlockContent from '@sanity/block-content-to-react'
import { imageBuilder } from '../lib/sanity'
// import { Content } from '@nodestrap/content'
import { Container } from '@nodestrap/container'



export default function Page(props: any) {
    // console.log(props);
    return (
        <>
            <Container tag='header' style={{backgroundImage: `url("${imageBuilder(props.banner).height(200).url() as string}")`}}>
                <h1>{props.title}</h1>
            </Container>
            <BlockContent blocks={props.content} projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID} dataset={process.env.NEXT_PUBLIC_SANITY_DATASET} />
        </>
    );
}
