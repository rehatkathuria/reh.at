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
	const [activeMenu, setActiveMenu] = useState<MainMenu | null>(null)
	const [timeString, setTimeString] = useState(formattedTime())

	setInterval(() => {
		if (setTimeString !== undefined) setTimeString(formattedTime())
	}, 1000)

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

	useHotkeys(
		"enter",
		() => {
			setActiveMenu(selected)
		},
		{ keydown: true },
		[selected, activeMenu],
	)

	useHotkeys(
		"escape",
		() => {
			setActiveMenu(null)
		},
		{ keydown: true },
		[selected, activeMenu],
	)

	return (
		<>
			<HeaderContainer>
				<Header>Rehat's Virtual Portfolio Website</Header>
			</HeaderContainer>
			<Container>
				<Menu>
					{main.map((element) => {
						return element === selected ? (
							<MenuItem key={element}>
								<ArrowContainer> {">"} </ArrowContainer>
								{element}
							</MenuItem>
						) : (
							<MenuItem key={element}>
								<ArrowContainer />
								{element}
							</MenuItem>
						)
					})}
				</Menu>
			</Container>
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
