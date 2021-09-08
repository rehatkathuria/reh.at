import { Component as AboutComponent } from "@components/about"
import { useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"
import {
	ArrowContainer,
	Container,
	DateStyle,
	DateTimeContainer,
	Header,
	HeaderContainer,
	Menu,
	MenuItem,
	MenuTitleActive,
	MenuTitleInactive,
	Playback,
	PlaybackContainer,
	PlaybackControl,
	TimeStyle
} from "./styles"

const formattedTime = () => {
	return new Date().toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	})
}

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
	MainMenu.eff,
	MainMenu.seafronts,
	MainMenu.works,
]

export const Component = () => {
	const date = new Date().toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	})

	const [selected, setSelected] = useState(MainMenu.about)
	const [activeMenu, setActiveMenu] = useState<MainMenu>(MainMenu.about)
	const [timeString, setTimeString] = useState(formattedTime())

	setInterval(() => {
		if (setTimeString !== undefined) setTimeString(formattedTime())
	}, 1000)

	const activateCurrentSelection = () => {
		setActiveMenu(selected)
	}

	const clearCurrentSelection = () => {
		setSelected(activeMenu)
	}

	useHotkeys(
		"up",
		() => {
			switch (selected) {
				case MainMenu.about:
					break
				case MainMenu.colophon:
					setSelected(MainMenu.about)
					break
				case MainMenu.darkroom:
					setSelected(MainMenu.colophon)
					break
				case MainMenu.eff:
					setSelected(MainMenu.darkroom)
					break
				case MainMenu.seafronts:
					setSelected(MainMenu.eff)
					break
				case MainMenu.works:
					setSelected(MainMenu.seafronts)
					break
			}
		},
		{ keydown: true },
		[selected],
	)

	useHotkeys(
		"down",
		() => {
			switch (selected) {
				case MainMenu.about:
					setSelected(MainMenu.colophon)
					break
				case MainMenu.colophon:
					setSelected(MainMenu.darkroom)
					break
				case MainMenu.darkroom:
					setSelected(MainMenu.eff)
					break
				case MainMenu.eff:
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
		[selected],
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
			default:
				return <></>
		}
	}

	return (
		<>
			<HeaderContainer>
				<Header>Rehat's Virtual Portfolio Website</Header>
			</HeaderContainer>
			<Menu>
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
			</Menu>
			<Container>{content()}</Container>
			<DateTimeContainer>
				<TimeStyle>{timeString}</TimeStyle>
				<DateStyle>{date}</DateStyle>
			</DateTimeContainer>
			<PlaybackContainer>
				<PlaybackControl>Play</PlaybackControl>
				<Playback>00:00:00</Playback>
			</PlaybackContainer>
		</>
	)
}
