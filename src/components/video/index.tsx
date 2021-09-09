import { FC, useRef, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Video as StyledVideo } from "./styles"

interface IVideoProps {
	src: string
}

export const Video: FC<IVideoProps> = (props) => {
	const [ref, isVisible] = useInView()
	const vidRef = useRef(null)

	useEffect(() => {
		if (vidRef.current === null) return
		const current: any = vidRef.current

		if (isVisible) current.play()
		else current.pause()
	}, [isVisible])

	return (
		<div ref={ref}>
			<StyledVideo ref={vidRef} src={props.src} loop muted playsInline />
		</div>
	)
}
