const Category = () => {
	return (
		<ul className="rui-drawer-content--list no-list">
			<li className="rui-drawer-content">
				<section className="flex-row justify-content-space-between align-center flex-wrap">
					<span className="rui-drawer-content--text list-heading text-cta-color h4">
						Categories
					</span>
					<button className="cursor-pointer primary-btn p-2 b-radius-3 icon-text-btn flex-row justify-content-center align-center flex-gap-1">
						<span>
							<i className="fa-solid fa-circle-plus"></i>
						</span>
						<p className="btn-text">Add a category</p>
					</button>
				</section>

				<ul className="rui-drawer--sub-list no-list">
					<li className="rui-drawer-content">
						<label
							className={`flex-row align-center flex-wrap flex-gap-1 cursor-pointer rui-drawer-content--text h3`}
						>
							<input
								className="filters rui-drawer-content--text"
								type="checkbox"
								value="All"
								// checked={productsState.categoryFilters[name] ? true : false
								// onChange={(e) => categoryFilterHandler(e, name, btnType)}
							/>
							<span className="rui-drawer-content--text">All</span>
						</label>
					</li>

					<li className="rui-drawer-content">
						<label
							className={`flex-row align-center flex-wrap flex-gap-1 cursor-pointer rui-drawer-content--text h3`}
						>
							<input
								className="filters rui-drawer-content--text"
								type="checkbox"
								value="All"
								// checked={productsState.categoryFilters[name] ? true : false
								// onChange={(e) => categoryFilterHandler(e, name, btnType)}
							/>
							<span className="rui-drawer-content--text">All</span>
						</label>
					</li>
				</ul>
			</li>
		</ul>
	);
};

export { Category };
