import { Container } from "./styles"
import { P, Blurb, BlurbHighlighted } from "@typography/styles"
import { Video } from "@components/video"
import { SilverHalide } from "./three"

export const Component = () => {
	return (
		<>
			<Container>
				<SilverHalide />
				<P />
				<Blurb>
					My process in the darkroom begins with a chemical compound known as
					the silver-halide; a light-sensitive crystal that serves as the
					foundation for every print I make. Millions of them react, on an
					atomic scale, each time they come into contact with photons,
					developing agents, acetic water and sodium thiosulfate.
				</Blurb>
				<P />
				<Blurb>
					A dance in a dimly lit room with light, paper and chemicals, all which
					eventually lead to a fine-art print.
				</Blurb>
				<P />
				<Blurb>
					Each one is made on baryta coated paper, which comprises of three
					distinct layers. A coating of barium sulphate is calendered on top of
					a fibre base, the result of which, acts as the grounds for the
					photographic emulsion. Because the emulsion sits in the grain of the
					paper, the image has more depth and richness compared to a standard
					resin coated print.
				</Blurb>
				<P />
				<Blurb>
					The density of the negative I'm printing dictates the paper grade as
					well as the base time of the print. To determine that time, I
					incrementally expose two strips of paper at different wavelengths of
					light. A yellow exposure yields me the different gradiations for the
					highlights and a magenta one does the same for the shadows.
				</Blurb>
				<P />
				<Video
					src={
						"https://rehat.imgix.net/25e51d68-bae0-4914-a611-998fe943a978.m4v"
					}
				/>
				<P />
				<Blurb>
					Using the values from the test strips, I expose a full sheet of paper
					to achieve a base print. The base print, however, is just that: a
					starting point. A print with all the correct values, but also one
					that's devoid of artistic expression. Ansel Adams said that the
					negative is "similar to a musician's score and the print is the
					performance of that score". The following steps of the process are
					just that: giving the print a voice and personality.
				</Blurb>
				<P />
				<Video
					src={
						"https://rehat.imgix.net/dec14808-f067-4f47-b99d-2ee7c9eef16b.m4v"
					}
				/>
				<P />
				<Blurb>
					There are, in essence, two ways to achieve this: burning and dodging.
					By carefully guiding the light into smaller regions whilst avoiding it
					in others, I can accentuate contrast or bring out the detail in the
					highlights, depending on the spectrum of light I'm working with.
				</Blurb>
				<P />
				<Video
					src={
						"https://rehat.imgix.net/bc18d0bc-f62a-4ed8-ab0c-f1f4ae073ab4.m4v"
					}
				/>
				<P />
				<Blurb>
					Similarly, by dodging regions, I'm able to pull back contrast or
					retain bright whites where I feel they add to the overall composition.
					Combining a variation of these four possibilities, to varying degrees
					across the print, I'm able to make the print evoke the same emotions I
					felt when I took the picture.
				</Blurb>
				<P />
				<Blurb>
					Before I'm able to make any judgements on where to burn or dodge,
					however, I need to ensure the base print is fully dry. This is because
					the manner in which chemicals permeate the different layers of
					fibre-based paper affects the perception of it. They sit on the grain,
					giving a sheen that is ultimately lost when the print dries. Each
					print I sell is air-dried overnight in a drying rack, but the ones I
					use during the testing phase, I dry simply with a hairdryer.
				</Blurb>
				<P />
				<Video
					src={
						"https://rehat.imgix.net/ce3e41f7-3e4b-40b4-9620-f84612674eed.m4v"
					}
				/>
				<P />
				<Blurb>
					After sitting with the dry print for a few hours, sometimes sleeping
					on it, I'll put together a plan for which regions I'd like to tweak
					and to what degree. By exposing smaller test strips at different
					exposures, I'm able to emulate the acts of burning and dodging.
				</Blurb>
				<P />
				<Blurb>
					On their own, these test strips aren't particularly helpful, but when
					they're superimposed onto the base print they give me a strong idea of
					what the final print will feel like. If the effect isn't quite what I
					envisioned, I'll simply go back into the darkroom and make more
					adjusted test strips.
				</Blurb>
				<P />
				<Video
					src={
						"https://rehat.imgix.net/e5e105f0-3ed9-46a8-99e2-59b991e174ee.m4v"
					}
				/>
				<P />
				<Blurb>
					When I'm fully content with the smaller regions and feel that they,
					combined, add to the entirety of the print, I'll make a full sized
					sheet with all the burning and dodging. It's this phase that not only
					gives the print its voice, but also character. The most subtle of
					differences in the way my hands move under the light means that no
					single print is like another. Each one is an interpretation of a
					photograph I took, described by my personal voice as a photographer in
					that moment of time.
				</Blurb>
				<P />
				<Video
					src={
						"https://rehat.imgix.net/2599a0a7-98f6-43f2-80b1-21853c2e24a3.m4v"
					}
				/>
			</Container>
		</>
	)
}
