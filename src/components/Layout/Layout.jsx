import Head from "next/head"
import { useRouter } from "next/router"
import Footer from "@component/Footer/Footer"
import Header from "@component/Header/Header"
import PropTypes from "prop-types"

const Layout = ({ children, pageMeta }) => {
	const meta = {
		title: "Doviange ",
		description: "Interior designs",
		type: "website",
		...pageMeta,
	}

	const router = useRouter()
	
	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="description" content={meta.description} />
				<link rel="icon" href="/favicon.ico" />
				{/* open graph meta tag */}
				<meta property="og:url" content={`http://localhost:3000${router.asPath}`} />
				<meta property="og:type" content={meta.type} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:site_name" content="Doviange" />

				{meta.date && <meta property="article:published_time" content={meta.date} />}
			</Head>
   
            <Header />
              <main>{children}</main>
            <Footer />
 
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.elementType.isRequired,
	pageMeta: PropTypes.object,
}

export default Layout