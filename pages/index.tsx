import Layout from '@components/layout/home/Layout'
import Header from '@components/layout/home/Header'
import Footer from '@components/layout/home/Footer'
import Main from "@components/layout/home/LandingPage";

export default function Home() {
    return (
        <Layout>
            <Header />
            <Main />
            <Footer />
        </Layout>
    )
}