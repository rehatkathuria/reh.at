import { Clock } from "@components/clock"
import { Component as AboutComponent } from "@components/about"
import { Component as ColophonComponent } from "@components/colophon"
import { Component as DarkroomComponent } from "@components/darkroom"
import { Component as SeafrontsComponent } from "@components/seafronts"
import { Component as WorksComponent } from "@components/works"
import { useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"
import {
	ArrowContainer,
	Container,
	Header,
	HeaderContainer,
	Menu,
	MenuItem,
	MenuTitleActive,
	MenuTitleInactive,
	Playback,
	PlaybackContainer,
	PlaybackControl,
} from "./styles"
import useWindowDimensions from "@hooks/useWindowDimensions"

enum MainMenu {
	about = "about",
	colophon = "colophon",
	darkroom = "darkroom",
	eff = "eff",
	seafronts = "seafronts",
	works = "works",
}

const main = [
	MainMenu.about,
	MainMenu.colophon,
	MainMenu.darkroom,
	MainMenu.seafronts,
	MainMenu.works,
]

export const Component = () => {
	const [selected, setSelected] = useState(MainMenu.about)
	const [activeMenu, setActiveMenu] = useState<MainMenu>(MainMenu.about)
	const { width } = useWindowDimensions()
	const widthToToggleMenuVisibilityOn = 900

	const activateCurrentSelection = () => {
		if (width === null) return
		if (width < widthToToggleMenuVisibilityOn) return
		setActiveMenu(selected)
	}

	const clearCurrentSelection = () => {
		if (width === null) return
		if (width < widthToToggleMenuVisibilityOn) return
		setSelected(activeMenu)
	}

	useHotkeys(
		"up",
		(keyboardEvent: any) => {
			keyboardEvent.preventDefault()
			if (width === null) return
			if (width < widthToToggleMenuVisibilityOn) return
			switch (selected) {
				case MainMenu.about:
					break
				case MainMenu.colophon:
					setSelected(MainMenu.about)
					break
				case MainMenu.darkroom:
					setSelected(MainMenu.colophon)
					break
				case MainMenu.seafronts:
					setSelected(MainMenu.darkroom)
					break
				case MainMenu.works:
					setSelected(MainMenu.seafronts)
					break
			}
		},
		{ keydown: true },
		[selected, width],
	)

	useHotkeys(
		"down",
		(keyboardEvent: any) => {
			keyboardEvent.preventDefault()
			if (width === null) return
			if (width < widthToToggleMenuVisibilityOn) return
			switch (selected) {
				case MainMenu.about:
					setSelected(MainMenu.colophon)
					break
				case MainMenu.colophon:
					setSelected(MainMenu.darkroom)
					break
				case MainMenu.darkroom:
					setSelected(MainMenu.seafronts)
					break
				case MainMenu.seafronts:
					setSelected(MainMenu.works)
					break
				case MainMenu.works:
					break
			}
		},
		{ keydown: true },
		[selected, width],
	)

	useHotkeys("enter", activateCurrentSelection, { keydown: true }, [
		selected,
		activeMenu,
	])

	useHotkeys("right", activateCurrentSelection, { keydown: true }, [
		selected,
		activeMenu,
	])

	useHotkeys("escape", clearCurrentSelection, { keydown: true }, [
		selected,
		activeMenu,
	])

	useHotkeys("left", clearCurrentSelection, { keydown: true }, [
		selected,
		activeMenu,
	])

	const menuItemTitle = (menu: MainMenu) => {
		return menu === activeMenu ? (
			<MenuTitleActive> {menu} </MenuTitleActive>
		) : (
			<MenuTitleInactive
				onClick={() => {
					setSelected(menu)
					setActiveMenu(menu)
				}}
			>
				{menu}
			</MenuTitleInactive>
		)
	}

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

	const menu = () => {
		return (
			<>
				{main.map((element) => {
					return element === selected ? (
						<MenuItem key={element}>
							<ArrowContainer> {">"} </ArrowContainer>
							{menuItemTitle(element)}
						</MenuItem>
					) : (
						<MenuItem key={element}>
							<ArrowContainer />
							{menuItemTitle(element)}
						</MenuItem>
					)
				})}
			</>
		)
	}

	return (
		<>
			<HeaderContainer>
				<Header>Rehat's Virtual Portfolio Website</Header>
			</HeaderContainer>
			<Menu>{menu()}</Menu>
			<Container>{content()}</Container>
			<Clock />
			<PlaybackContainer>
				<PlaybackControl>Play</PlaybackControl>
				<Playback>00:00:00</Playback>
			</PlaybackContainer>
		</>
	)
}
