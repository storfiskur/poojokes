<script>
	const checkKey = async () => {
		if (localStorage.getItem('apiKey') !== null) {
			let apiKey = localStorage.getItem('apiKey');
			return apiKey;
		} else {
			const res = await fetch('https://api.betterapi.net/gen');
			const data = await res.json();
			await window.localStorage.setItem('apiKey', data?.key);
			console.log('no api key');
			let apiKey = localStorage.getItem('apiKey');
			console.log('generated new one');
			return apiKey;
		}
	};

	const getJoke = async () => {
		const apiKey = await checkKey();
		const query = 'расскажи шутку про говно';
		const url = `https://api.betterapi.net/youdotcom/chat?message=${query}&key=` + apiKey;
		const data = await (await fetch(url)).json();
		const joke = await data.message;
		return joke;
	};

	let promise = '';

	function handleClick() {
		// @ts-ignore
		promise = getJoke();
	}
</script>

<div class="container">
	<header>
		<h1>Робот шутит про говно</h1>
	</header>
	<article>
		{#await promise}
			<p>думаю...</p>
		{:then joke}
			<p>{joke}</p>
		{/await}
		<button on:click={handleClick}>Пошутить</button>
	</article>
</div>

<style>
	header {
		align-items: center;
		text-align: center;
	}
</style>
