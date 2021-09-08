import { FC } from "react"
import TextLoop from "react-text-loop"
import { Blurb, BlurbHighlighted, Container, P } from "./styles"

const Loop: FC<{
	delay?: number
}> = (props: any) => {
	return (
		<TextLoop delay={props.delay} interval={4000}>
			{props.children}
		</TextLoop>
	)
}

export const Component: FC = () => {
	const ingredients = [
		"an artist",
		"a software engineer",
		"a street photographer",
		"a print maker",
	]
	const carrying = ["Leica MA", "roll of Kodak TRI-X", "light meter"]
	const listening = ["BBC Radio 4", "99% Invisible", "The Daily"]

	return (
		<Container>
			<Blurb>
				I am
				<P />
				<Loop>
					{ingredients.map((item) => (
						<div key={item}>
							<BlurbHighlighted>{item},</BlurbHighlighted>
						</div>
					))}
				</Loop>
				<P />
				<br />
				Currently, I'm wandering through the streets of London with my
				<P />
				<Loop delay={3500}>
					{carrying.map((item) => (
						<div key={item}>
							<BlurbHighlighted>{item},</BlurbHighlighted>
						</div>
					))}
				</Loop>
				<P />
				documenting the pandemic on 135 format film.
				<P />
				<br />
				When I'm not doing that, I'm in my darkroom, working under a dim amber
				light, listening to
				<P />
				<Loop delay={2120}>
					{listening.map((item) => (
						<div key={item}>
							<BlurbHighlighted>{item},</BlurbHighlighted>
						</div>
					))}
				</Loop>
				<P />
				making fine art photographic prints.
			</Blurb>
		</Container>
	)
}
