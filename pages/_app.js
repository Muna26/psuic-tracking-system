import { appWithTranslation } from 'next-i18next'
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import '@/styles/components.css'
import '@/styles/pages.css'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default appWithTranslation(MyApp)
