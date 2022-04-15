import { useGetQuotesHandler } from "../../custom-hooks";
const Quotes = () => {
	const { quotesData } = useGetQuotesHandler();
	return (
		<div className="rui-main--heading-container no-border w-100 mx-10 p-0 my-0 flex-column justify-content-center align-center">
			<h2 className="rui-main--heading home-heading text-bold w-100">
				Quote of the Day
			</h2>
			<section>
				<h3 className="text-bold text-center">{quotesData.text}</h3>
				<h4 className="text-right my-5">- {quotesData.author}</h4>
			</section>
		</div>
	);
};
export { Quotes };
