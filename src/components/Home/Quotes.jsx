import { useGetQuotesHandler } from "../../custom-hooks";
const Quotes = () => {
	const { quotesData } = useGetQuotesHandler();
	return (
		<section className="rui-main--heading-container no-border w-100 mx-10 p-0 my-0 flex-column justify-content-center align-center">
			<h2 className="rui-main--heading home-heading text-bold homepage-heading">
				Quote of the Day
			</h2>
			<section className="w-max-content">
				<h3 className="text-bold text-center">{quotesData.text}</h3>
				<h4 className="text-right my-5">- {quotesData.author}</h4>
			</section>
		</section>
	);
};
export { Quotes };
