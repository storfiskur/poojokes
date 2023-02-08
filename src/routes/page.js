export async function load() {
	let apiKey;
	if (localStorage.getItem('apiKey') !== null) {
		apiKey = await localStorage.getItem('apiKey');
		console.log('got api key!', apiKey);
	} else {
		window.localStorage.setItem('apiKey', 'asdasdasdasd');
		console.log('no api key');
		apiKey = await localStorage.getItem('apiKey');
		console.log('generated new one', apiKey);
	}
	return {
		apiKey: apiKey
	};
}
