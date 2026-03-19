const getStoreApp = () => {
	const storeAppSTR = localStorage.getItem("appList");
	if (storeAppSTR) {
		const storeAppData = JSON.parse(storeAppSTR);
		return storeAppData;
	}
	else {
		return [];
	}


}

const addToStoreDb = (id) => {
	const storeAPPData = getStoreApp();

	if (storeAPPData.includes(id)) {
		alert("This App Already Installed");
	}
	else {
		storeAPPData.push(id);
		const data = JSON.stringify(storeAPPData);
		localStorage.setItem("appList", data);
	}
}

export { addToStoreDb, getStoreApp }