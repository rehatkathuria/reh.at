import { FC } from "react"
import { ContentContainer } from "@components/index/styles"
import { P, Blurb, BlurbHighlighted } from "@typography/styles"
import { A } from "./styles"

export const Component: FC = () => {
	return (
		<ContentContainer>
			<P />
			<Blurb>
				My photographic work has been removed from this website and will soon be
				available on{" "}
				<BlurbHighlighted>
					<A href={"https://eff.co"}>eff</A>
				</BlurbHighlighted>
				.
			</Blurb>
			<P />
		</ContentContainer>
	)
}
