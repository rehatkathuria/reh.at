import { FC } from "react"
import { ContentContainer } from "@components/index/styles"
import { P, Blurb, BlurbHighlighted } from "@typography/styles"

export const Component: FC = () => {
	return (
		<ContentContainer>
			<Blurb>
				A photographic exploration of the English coastline, Seafronts is my
				debut book shot entirely on Medium Format film.
			</Blurb>
			<P />
			<Blurb>
				Dedicated to <BlurbHighlighted>Markus Mcturk</BlurbHighlighted>, for
				instilling in me, during my formative years, a yearning to learn.
			</Blurb>
			<P />
			<Blurb>
				The first edition, published in 2018, consisted of roughly 1000 copies.
			</Blurb>
			<P />
			<Blurb>
				The book is now fully sold out on my store, but there may be limited
				stock at a few retail stores in Brighton, England, specifically:
				<BlurbHighlighted>Magazine Brighton</BlurbHighlighted>,{" "}
				<BlurbHighlighted>Waterstone's</BlurbHighlighted> and{" "}
				<BlurbHighlighted>HOLD</BlurbHighlighted>.
			</Blurb>
			<P />
			<Blurb>
				There is a single copy available at The British Library for archival
				purposes.
			</Blurb>
			<P />
			<Blurb>200 x 150 mm</Blurb>
			<P />
			<Blurb>96 Pages + 2 Ends</Blurb>
			<P />
			<Blurb>150 GSM Symbol Tatami White</Blurb>
			<P />
			<Blurb>ISBN: #9781999963484</Blurb>
			<P />
			<Blurb>British Library Unique Identifier: BLL01018859631</Blurb>
		</ContentContainer>
	)
}
