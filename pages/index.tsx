import dynamic from "next/dynamic"

// @ts-ignore
const Dynamic = dynamic(() =>
	import("@components/index").then((mod) => mod.Component),
)

export default Dynamic
