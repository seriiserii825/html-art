const postData = async (url, data) => {
	const res = await fetch(url, {
		method: "POST",
		body: data
	});
	return await res.text();
}
const getResource = async (url) => {
	const res = await fetch(url);
	return await res.json();
}
export {postData, getResource};