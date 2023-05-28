function extensionIsPresent(): boolean {
	console.log(document.documentElement.hasAttribute("data-palantir-extension-installed"));
	return document.documentElement.hasAttribute("data-palantir-extension-installed");
}

function startPalantirClientSession(
	username: string,
	hostId: string,
	accessToken: string
) {
	window.dispatchEvent(
		new MessageEvent("message", {
			data: { __channel: "palantir", username, hostId, accessToken }
		})
	);
}

export { extensionIsPresent, startPalantirClientSession };
