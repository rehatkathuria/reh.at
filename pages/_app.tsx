import "@public/css/fonts.css"
import "@public/css/global.css"
import { Themes } from "@themes/index"
import type { AppProps } from "next/app"
import Head from "next/head"
import { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import useDarkMode from "use-dark-mode"

const App = ({ Component, pageProps, router }: AppProps) => {
	const { value } = useDarkMode(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => setMounted(true), [])

	const content = () => {
		return (
			<div className={value ? "bp3-dark" : ""}>
				<Component {...pageProps} key={router.route} />
			</div>
		)
	}

	const body = (
		<>
			<Head>
				<title>rehat</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0 viewport-fit=cover"
					lang="en"
				/>
			</Head>
			<ThemeProvider theme={value ? Themes.Dark : Themes.Light}>
				{content()}
			</ThemeProvider>
		</>
	)

	if (!mounted) return <div style={{ visibility: "hidden" }}>{body}</div>
	else return body
}

export default App
