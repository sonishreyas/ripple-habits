import { useGetQuotesHandler } from "../../custom-hooks";
const Quotes = () => {
	const { quotesData } = useGetQuotesHandler();
	return (
		<div className="w-100">
			<h2 className="home-heading text-bold w-100 py-5">Quote of the Day</h2>
			<section>
				<h3 className="text-bold text-center">{quotesData.text}</h3>
				<h4 className="text-right my-5">- {quotesData.author}</h4>
			</section>
		</div>
	);
};
export { Quotes };
