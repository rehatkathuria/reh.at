import { Clock } from "@components/clock"
import { Component as AboutComponent } from "@components/about"
import { Component as ColophonComponent } from "@components/colophon"
import { Component as DarkroomComponent } from "@components/darkroom"
import { Component as SeafrontsComponent } from "@components/seafronts"
import { Component as WorksComponent } from "@components/works"
import { useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"
import {
	Container,
	Header,
	HeaderContainer,
	Playback,
	PlaybackContainer,
	PlaybackControl,
} from "./styles"
import { MainMenu, Component as Menu } from "@components/menu"

export default () => {
	const [activeMenu, setActiveMenu] = useState<MainMenu>(MainMenu.about)
	const [isMobileMenuOpen, setIsMenuMobileOpen] = useState(false)

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
			<Menu
				isMobileMenuOpen={isMobileMenuOpen}
				onIsMobileMenuOpenChange={setIsMenuMobileOpen}
				activeMenu={activeMenu}
				onActiveMenuChange={setActiveMenu}
			/>
			<HeaderContainer
				onClick={() => {
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
