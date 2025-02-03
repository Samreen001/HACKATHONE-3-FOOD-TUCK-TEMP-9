import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout"
import { CartProvider } from '../components/Context/context'


export default function App({ Component, pageProps }: AppProps) {


  return (

    <CartProvider>
    <Layout>
  <Component {...pageProps} />
    </Layout>
    </CartProvider>
  )
  

}
