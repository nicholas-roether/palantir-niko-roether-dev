import { JSX } from "solid-js";
import { Heading, Paragraph } from "@nicholas-roether/palantir-ui-solid";
import { css } from "@emotion/css";

const center = css`
	text-align: center;
`;

function Home(): JSX.Element {
	return (
		<>
			<Heading size="1">Palantir</Heading>
			<Paragraph class={center}>
				If you've landed on this page, you've probably tried to join a Palantir
				session without having the extension installed. That's not surprising,
				since it's unfinished at the moment. Sucks to be you!
			</Paragraph>
		</>
	);
}

export default Home;
