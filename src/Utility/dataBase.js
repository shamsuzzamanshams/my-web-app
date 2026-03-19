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

const removeApp = (id) => {
	const storedApps = getStoreApp();

	const updatedApps = storedApps.filter(appId => Number(appId) !== Number(id));

	localStorage.setItem("appList", JSON.stringify(updatedApps));
};

export { addToStoreDb, getStoreApp, removeApp }