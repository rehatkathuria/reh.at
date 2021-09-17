import { Dispatch, SetStateAction, FC, useState, useEffect } from "react"
import { useHotkeys } from "react-hotkeys-hook"
import {
	ArrowContainer,
	Menu,
	MenuItem,
	MenuTitleActive,
	MenuTitleInactive,
	MobileMenuTitleActive,
	MobileMenuTitleInactive,
	MobileMenu,
} from "./styles"
import useWindowDimensions from "@hooks/useWindowDimensions"
import { useRouter } from "next/router"

export enum MainMenu {
	about = "about",
	colophon = "colophon",
	darkroom = "darkroom",
	eff = "eff",
	seafronts = "seafronts",
	works = "works",
}

const main = [
	MainMenu.about,
	MainMenu.colophon,
	MainMenu.darkroom,
	MainMenu.seafronts,
	MainMenu.works,
]

export const menuForPath = (path: string) => {
	switch (path) {
		case "/about":
			return MainMenu.about
		case "/colophon":
			return MainMenu.colophon
		case "/darkroom":
			return MainMenu.darkroom
		case "/seafronts":
			return MainMenu.seafronts
		case "/works":
			return MainMenu.works
		default:
			return MainMenu.about
	}
}

export const pathForMenu = (menu: MainMenu) => {
	switch (menu) {
		case MainMenu.about:
			return "/about"
		case MainMenu.colophon:
			return "/colophon"
		case MainMenu.darkroom:
			return "/darkroom"
		case MainMenu.seafronts:
			return "/seafronts"
		case MainMenu.works:
			return "/works"
		default:
			return MainMenu.about
	}
}

export interface IMenu {
	isMobileMenuOpen: boolean
	onIsMobileMenuOpenChange: Dispatch<boolean>
	activeMenu: MainMenu
	onActiveMenuChange: Dispatch<SetStateAction<MainMenu>>
}

export const widthToToggleMenuVisibilityOn = 900

export const Component: FC<IMenu> = (props) => {
	const router = useRouter()
	const { width } = useWindowDimensions()
	const [selected, setSelected] = useState(menuForPath(router.asPath))

	useEffect(() => {
		if (width === null) return
		if (
			props.isMobileMenuOpen === true &&
			width > widthToToggleMenuVisibilityOn
		)
			props.onIsMobileMenuOpenChange(false)
	}, [width])

	const activateCurrentSelection = () => {
		if (width === null) return
		router.push(pathForMenu(selected))
	}

	const clearCurrentSelection = () => {
		if (width === null) return
		if (props.activeMenu === selected) props.onIsMobileMenuOpenChange(false)
		setSelected(props.activeMenu)
	}

	useHotkeys(
		"up",
		(keyboardEvent: any) => {
			keyboardEvent.preventDefault()
			if (width === null) return
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
				case MainMenu.works:
					setSelected(MainMenu.seafronts)
					break
			}
		},
		{ keydown: true },
		[selected, width],
	)

	useHotkeys(
		"down",
		(keyboardEvent: any) => {
			keyboardEvent.preventDefault()
			if (width === null) return
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
					setSelected(MainMenu.works)
					break
				case MainMenu.works:
					break
			}
		},
		{ keydown: true },
		[selected, width],
	)

	useHotkeys("enter", activateCurrentSelection, { keydown: true }, [
		selected,
		props.activeMenu,
	])

	useHotkeys("right", activateCurrentSelection, { keydown: true }, [
		selected,
		props.activeMenu,
	])

	useHotkeys("escape", clearCurrentSelection, { keydown: true }, [
		selected,
		props.activeMenu,
	])

	useHotkeys("left", clearCurrentSelection, { keydown: true }, [
		selected,
		props.activeMenu,
	])

	const menu = () => {
		return (
			<>
				{main.map((element) => {
					return element === selected ? (
						<MenuItem key={element}>
							<ArrowContainer> {"►"} </ArrowContainer>
							{menuItemTitle(element)}
						</MenuItem>
					) : (
						<MenuItem key={element}>
							<ArrowContainer />
							{menuItemTitle(element)}
						</MenuItem>
					)
				})}
			</>
		)
	}

	const mobileMenu = () => {
		return (
			<>
				{main.map((element) => {
					return element === selected ? (
						<MenuItem key={element}>
							<ArrowContainer> {"►"} </ArrowContainer>
							{mobileMenuItemTitle(element)}
						</MenuItem>
					) : (
						<MenuItem key={element}>
							<ArrowContainer />
							{mobileMenuItemTitle(element)}
						</MenuItem>
					)
				})}
			</>
		)
	}

	const menuItemTitle = (menu: MainMenu) => {
		return menu === props.activeMenu ? (
			<MenuTitleActive
				onClick={() => {
					props.onIsMobileMenuOpenChange(false)
				}}
			>
				{menu}
			</MenuTitleActive>
		) : (
			<MenuTitleInactive
				onClick={() => {
					router.push(pathForMenu(menu))
					setSelected(menu)
					props.onActiveMenuChange(menu)
					props.onIsMobileMenuOpenChange(false)
				}}
			>
				{menu}
			</MenuTitleInactive>
		)
	}

	const mobileMenuItemTitle = (menu: MainMenu) => {
		return menu === props.activeMenu ? (
			<MobileMenuTitleActive
				onClick={() => {
					props.onIsMobileMenuOpenChange(false)
				}}
			>
				{menu}
			</MobileMenuTitleActive>
		) : (
			<MobileMenuTitleInactive
				onClick={() => {
					router.push(pathForMenu(menu))
					setSelected(menu)
					props.onActiveMenuChange(menu)
					props.onIsMobileMenuOpenChange(false)
				}}
			>
				{menu}
			</MobileMenuTitleInactive>
		)
	}

	return (
		<>
			<Menu>{menu()}</Menu>
			{props.isMobileMenuOpen ? <MobileMenu>{mobileMenu()}</MobileMenu> : <></>}
		</>
	)
}
