import '../styles/index.scss'
import { default as React, createContext } from "react"
import type { AppContext, AppProps } from 'next/app'
import App from "next/app"
import { getSiteInfo, getPages } from '../lib/api'
import { Navbar, NavbarMenu } from '@nodestrap/navbar'
import { Container } from '@nodestrap/container'
import { ContainerContent } from '../components/ContainerContent'
import { imageBuilder } from '../lib/sanity'
import Link from 'next/link'



export const SiteContext = createContext({})

interface PageProps {
    Component?: React.ReactElement
    pageProps?: any
  }
const MyApp = ({ Component, pageProps }: AppProps) => {
    const siteInfo = pageProps.siteInfo;

    return (
        <SiteContext.Provider value={pageProps.siteInfo}>
            <Navbar theme='primary'
                logo={!!siteInfo?.logo && <img src={imageBuilder(siteInfo.logo).height(30).url() as string} alt={siteInfo.siteName} />}
            >
                {
                    pageProps.pages?.map((page: any, index: number) =>
                        <NavbarMenu key={index}>
                            <Link href={`/${page.slug}`}>
                                {page.tab}
                            </Link>
                        </NavbarMenu>
                    )
                }
            </Navbar>
            <Container tag='main'>
                <Component {...pageProps}/>
            </Container>
        </SiteContext.Provider>
    )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: AppContext) => {
    const appProps = await App.getInitialProps(ctx);

    return { ...appProps, pageProps: {
        siteInfo: await getSiteInfo(),
        pages: await getPages() ?? []
    }};
}

export default MyApp
