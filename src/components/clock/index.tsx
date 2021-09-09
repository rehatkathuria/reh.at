import { useState } from "react"
import { DateStyle, TimeStyle, DateTimeContainer } from "./styles"

const formattedTime = () => {
	return new Date().toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	})
}

export const Clock = () => {
	const date = new Date().toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	})
	const [timeString, setTimeString] = useState(formattedTime())

	setInterval(() => {
		if (setTimeString !== undefined) setTimeString(formattedTime())
	}, 1000)

	return (
		<DateTimeContainer>
			<TimeStyle>{timeString}</TimeStyle>
			<DateStyle>{date}</DateStyle>
		</DateTimeContainer>
	)
}
