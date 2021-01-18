import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function ContactPage() {
  return (
  
    <Layout>
      <Head>
        <title>Contact Page</title>
      </Head>
      <h1>Contact Page</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

    </Layout>
    
  )
}