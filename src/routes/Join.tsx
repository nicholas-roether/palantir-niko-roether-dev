import { JSX, Show } from "solid-js";
import { useParams, Navigate } from "@solidjs/router";
import { css } from "@emotion/css";
import {
	Card,
	Heading,
	Paragraph,
	TextInput,
	Button
} from "@nicholas-roether/palantir-ui-solid";
import EyeballIcon from "~icons/game-icons/eyeball";
import { JoinInfo, parseJoinString } from "../join_string";
import { extensionIsPresent, startPalantirClientSession } from "../extension";


interface JoinFormProps {
	hostId: string;
}

const joinForm = css`
	display: flex;
	margin: auto;
	padding: 30px 10px;
	max-width: 300px;
	flex-direction: column;
	gap: 20px;
`;

const joinFormSubmit = css`
	margin-top: 10px;
`;

function JoinForm({ hostId }: JoinFormProps): JSX.Element {
	let formRef!: HTMLFormElement;

	function onSubmit(evt: SubmitEvent) {
		evt.preventDefault();
		const data = new FormData(formRef);
		startPalantirClientSession(
			data.get("username")!.toString(),
			data.get("hostId")!.toString(),
			data.get("accessToken")!.toString()
		);
	}

	return (
		<form class={joinForm} ref={formRef} onSubmit={onSubmit}>
			<input hidden type="text" name="hostId" value={hostId} />
			<TextInput
				name="username"
				placeholder="Nickname"
				aria-label="Nickname"
			/>
			<TextInput
				name="accessToken"
				placeholder="Passphrase"
				aria-label="Passphrase"
			/>
			<Button large smoldering type="submit" class={joinFormSubmit}>
				<EyeballIcon /> Join
			</Button>
		</form>
	);
}

interface InvitationProps {
	joinInfo: JoinInfo;
}

const quote = css`
	padding: 0 40px;
	text-align: center;
	font-style: italic;
	font-size: 1.1em;

	&::before {
		font-size: 1.1em;
		content: "\\00201C";
	}

	&::after {
		font-size: 1.1em;
		content: "\\00201D";
	}
`;

function Invitation({ joinInfo }: InvitationProps): JSX.Element {
	return (
		<>
			<Heading size="1">An Invitation</Heading>
			<Paragraph>
				You can hear the eerie whispers of <b>{joinInfo.hostName}</b>{" "}
				coming from beyond the shroud.
			</Paragraph>
			<Paragraph class={quote}>
				Say the secret phrase, and see through my eyes
			</Paragraph>
			<JoinForm hostId={joinInfo.hostId} />
		</>
	);
}

function InvalidJoinString(): JSX.Element {
	return (
		<>
			<Heading size="1">Nothing.</Heading>
			<Paragraph>
				The abyss peers back at you, black and empty. It does not
				understand your intentions.
			</Paragraph>
			<Paragraph>
				<em>(Your join link is invalid.)</em>
			</Paragraph>
		</>
	);
}

const pageWrapper = css`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const contentCard = css`
	max-width: 500px;
	width: 95%;
`;

function Join(): JSX.Element {
	if (!extensionIsPresent()) {
		return <Navigate href="/" />;
	}

	const params = useParams();
	const joinInfo = parseJoinString(params.joinString);

	return (
		<div class={pageWrapper}>
			<Card class={contentCard}>
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
