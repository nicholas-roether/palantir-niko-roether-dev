import { JSX, Show } from "solid-js";
import { useParams } from "@solidjs/router";
import { css } from "@emotion/css";
import { Card, Heading, Paragraph } from "@nicholas-roether/palantir-ui-solid";
import { JoinInfo, parseJoinString } from "../join_string";

interface InvitationProps {
	joinInfo: JoinInfo;
}

function Invitation({ joinInfo }: InvitationProps): JSX.Element {
	return (
		<>
			<Heading size="1">An Invitation</Heading>
			<Paragraph>
				You can hear the eerie whispers of <b>{joinInfo.hostName}</b>{" "}
				coming from beyond the shroud.
			</Paragraph>
		</>
	);
}

function InvalidJoinString(): JSX.Element {
	return (
		<>
			<Heading size="1">Nothing.</Heading>
			<Paragraph>
				The abyss peers back at you, black and empty. It does not understand your intentions.
			</Paragraph>
			<Paragraph>
				<em>(Your join link is invalid.)</em>
			</Paragraph>
		</>
	)
}

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
	const joinInfo = parseJoinString(params.joinString);

	return (
		<div class={pageWrapper}>
			<Card>
				<Show when={joinInfo != null}>
					<Invitation joinInfo={joinInfo!} />
				</Show>
				<Show when={joinInfo == null}>
					<InvalidJoinString />
				</Show>
			</Card>
		</div>
	);
}

export default Join;
