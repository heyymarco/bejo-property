import '../styles/index.scss'
import { default as React, createContext } from "react"
import type { AppContext, AppProps } from 'next/app'
import App from "next/app"
import { getSiteInfo, getPages } from '../lib/api'
import { Navbar, NavbarMenu } from '@nodestrap/navbar'
import { Container } from '@nodestrap/container'
import { Collapse } from '@nodestrap/collapse'
import { Group } from '@nodestrap/group'
import { SearchInput } from '@nodestrap/input'
import { ButtonIcon as Button } from '@nodestrap/button-icon'
import { Check } from '@nodestrap/check'
import { imageBuilder } from '../lib/sanity'
import Link from 'next/link'
import { useRouter } from 'next/router'



export const SiteContext = createContext({})

interface PageProps {
    Component ?: React.ReactElement
    pageProps ?: any
    siteInfo  ?: any
    pages     ?: any
  }
const MyApp = ({ Component, pageProps, siteInfo, pages }: AppProps & PageProps) => {
    const router = useRouter();
    const expandDashboard = ['', '/'].includes(router.pathname);
    console.log(router.pathname)
    
    
    return (
        <SiteContext.Provider value={siteInfo}>
            <Container tag='header' id='header'>
                <Navbar classes={['fill']} theme='primary'
                    logo={!!siteInfo?.logo && <img src={imageBuilder(siteInfo.logo).height(30).url() as string} alt={siteInfo.siteName} />}
                >
                    {
                        pages?.map((page: any, index: number) =>
                            <NavbarMenu key={index}>
                                <Link href={`/${page.slug}`}>
                                    {page.tab}
                                </Link>
                            </NavbarMenu>
                        )
                    }
                </Navbar>
                <Collapse classes={['fill']} active={expandDashboard} nude={true}>
                    <Container id='dashboard' theme='primary' mild={true}>
                        <Group id='search'>
                            <SearchInput placeholder='jual rumah dekat merapiview' enableValidation={false} />
                            <Button icon='search'>cari</Button>
                        </Group>
                        <div id='searchType'>
                            <Check enableValidation={false} theme='primary'>tanah</Check>
                            <Check enableValidation={false} theme='primary'>rumah</Check>
                        </div>
                    </Container>
                </Collapse>
            </Container>
            <Component {...pageProps}/>
            <Container tag='footer' id='footer' theme='primary' mild={false}>
                ... footer ...
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

    return { ...appProps,
        siteInfo : await getSiteInfo(),
        pages    : await getPages()
    };
}

export default MyApp
