interface JoinInfo {
	hostName: string;
	hostId: string;
}

const JOIN_STRING_REGEX = /^([^:]+):([0-9A-Fa-f\-]+)$/;

function parseClearJoinString(str: string): JoinInfo | null {
	const result = JOIN_STRING_REGEX.exec(str);
	if (!result) return null;
	return {
		hostName: result[1],
		hostId: result[2]
	};
}

function parseJoinString(str: string): JoinInfo | null {
	try {
		const clearString = atob(str);
		return parseClearJoinString(clearString);
	} catch (e) {
		return null;
	}
}

export { parseJoinString, JoinInfo };
