import { useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"
import {
	ArrowContainer,
	Container,
	DateStyle,
	DateTimeContainer,
	Header,
	Menu,
	MenuItem,
	Playback,
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
	seafronts = "seafronts",
}

const main = [
	MainMenu.about,
	MainMenu.colophon,
	MainMenu.darkroom,
	MainMenu.seafronts,
]

export const Component = () => {
	const date = new Date().toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	})

	const [selected, setSelected] = useState(MainMenu.about)
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
				case MainMenu.seafronts:
					setSelected(MainMenu.darkroom)
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
					setSelected(MainMenu.seafronts)
					break
				case MainMenu.seafronts:
					break
			}
		},
		{ keydown: true },
		[selected],
	)

	return (
		<>
			<Container>
				<Header>Rehat's Virtual Portfolio Website</Header>
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
				<PlaybackControl>Play</PlaybackControl>
			</Container>
			<DateTimeContainer>
				<TimeStyle>{timeString}</TimeStyle>
				<DateStyle>{date}</DateStyle>
			</DateTimeContainer>
			<Playback>00:00:00</Playback>
		</>
	)
}
