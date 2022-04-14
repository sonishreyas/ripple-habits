import { useNavbar } from "../../context";

const NavBar = () => {
	const { setShowNavbar } = useNavbar();

	const handleHideNavbar = () => setShowNavbar(false);
	return (
		<nav className="nav nav-shadow">
			<ul className="rui-drawer-content--list no-list">
				<li className="flex-row justify-content-space-between align-center rui-drawer-content rui-drawer-header">
					<section>
						<img
							src="https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/ripple-logo.png"
							alt="Logo of ripple UI"
							className="brand-logo"
						/>
						<sub className="brand-name">Ripple Habits</sub>
					</section>
					<section>
						<i
							className="fas fa-angle-left close-drawer"
							onClick={handleHideNavbar}
						></i>
					</section>
				</li>
				<li className="rui-drawer-content">
					<a href="https://ripple-ui.netlify.app/" className="rui-drawer-links">
						<span className="rui-drawer-content--text">Home</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};
export { NavBar };
