import { FC } from "react"
import { ContentContainer } from "@components/index/styles"
import { P, Blurb, BlurbHighlighted } from "@typography/styles"

export const Component: FC = () => {
	return (
		<ContentContainer>
			<Blurb>
				This website was designed and built by Rehat Kathuria, in London,
				England.
			</Blurb>
			<P />
			<Blurb>
				Built upon the work of many open-source projects, including: Next.js,
				P5, React, Styled Components, Typescript and Webpack.
			</Blurb>
			<P />
			<Blurb>
				There are no analytic trackers on this website and there{" "}
				<BlurbHighlighted>never</BlurbHighlighted> will be.
			</Blurb>
			<P />
			<Blurb>
				Photographs, unless otherwise stated, are shot on Kodak TX 400 using
				either a Rolleiflex Type 5 or a Leica MA. The lenses on the cameras
				consist of a Carl Zeiss Planar 75mm ƒ/3.5 and a Summaron-M 28mm ƒ/5.6,
				respectively.
			</Blurb>
			<P />
			<Blurb>
				All content on this website is copyright protected under the Registered
				Company N°: 10576119
			</Blurb>
		</ContentContainer>
	)
}
