import { JSX } from "solid-js";
import { useParams } from "@solidjs/router";
import { css } from "@emotion/css";
import { Card, Heading, Paragraph } from "@nicholas-roether/palantir-ui-solid";

const pageWrapper = css`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

function Join(): JSX.Element {
	const params = useParams();

	return (
		<div class={pageWrapper}>
			<Card>
				<Heading size="1">An Invitation</Heading>
				<Paragraph>
					You can hear the eerie whispers of{" "}
					<b>{params.joinString}</b> coming from beyond the shroud.
				</Paragraph>
			</Card>
		</div>
	);
}

export default Join;
