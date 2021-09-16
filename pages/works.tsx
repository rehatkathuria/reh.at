import dynamic from "next/dynamic"

const Dynamic = dynamic(() => import("@components/index"), {
	ssr: false,
})

export default Dynamic
