import { Clock } from "@components/clock"
import { Component as AboutComponent } from "@components/about"
import { Component as ColophonComponent } from "@components/colophon"
import { Component as DarkroomComponent } from "@components/darkroom"
import { Component as SeafrontsComponent } from "@components/seafronts"
import { Component as WorksComponent } from "@components/works"
import { useEffect, useState } from "react"
import {
	Container,
	Grain,
	GrainContainer,
	Header,
	HeaderContainer,
	Playback,
	PlaybackContainer,
	PlaybackControl,
} from "./styles"
import {
	widthToToggleMenuVisibilityOn,
	MainMenu,
	menuForPath,
	Component as Menu,
} from "@components/menu"
import useWindowDimensions from "@hooks/useWindowDimensions"
import { useRouter } from "next/router"

export default () => {
	const router = useRouter()
	const { width } = useWindowDimensions()
	const [activeMenu, setActiveMenu] = useState<MainMenu>(
		menuForPath(router.asPath),
	)
	const [isMobileMenuOpen, setIsMenuMobileOpen] = useState(false)

	useEffect(() => {
		if (router.asPath === "/") router.push("/about")
		else setActiveMenu(menuForPath(router.asPath))
	}, [router])

	const content = () => {
		switch (activeMenu) {
			case MainMenu.about:
				return <AboutComponent />
			case MainMenu.colophon:
				return <ColophonComponent />
			case MainMenu.darkroom:
				return <DarkroomComponent />
			case MainMenu.seafronts:
				return <SeafrontsComponent />
			case MainMenu.works:
				return <WorksComponent />
			default:
				return <></>
		}
	}

	return (
		<>
			<GrainContainer>
				<Grain />
			</GrainContainer>
			<Menu
				isMobileMenuOpen={isMobileMenuOpen}
				onIsMobileMenuOpenChange={setIsMenuMobileOpen}
				activeMenu={activeMenu}
				onActiveMenuChange={setActiveMenu}
			/>
			<HeaderContainer
				onClick={() => {
					if (width !== null && width > widthToToggleMenuVisibilityOn) return
					setIsMenuMobileOpen(isMobileMenuOpen ? false : true)
				}}
			>
				<Header>Rehat's Virtual Portfolio Website</Header>
			</HeaderContainer>
			<Container>{content()}</Container>
			<Clock />
			<PlaybackContainer>
				<PlaybackControl>Play</PlaybackControl>
				<Playback>00:00:00</Playback>
			</PlaybackContainer>
		</>
	)
}
