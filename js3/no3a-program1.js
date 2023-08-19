// Program Mengambil dummy API menggunakan Promise

const fetchData = () => {
	return new Promise((resolve, reject) => {
		let error = false;

		setTimeout(() => {
			const data = [
				{ name: "dono", age: 30 },
				{ name: "bim", age: 20 },
				{ name: "bam", age: 25 },
			];
			if (!error) {
				resolve(data);
			} else {
				reject(new Error("terjadi kesalahan"));
			}
		}, 2000);
	});
};

fetchData()
	.then((data) => {
		console.log("Data berhasil diambil:", data);
	})
	.catch((error) => {
		console.log(error);
	});
// Data berhasil diambil: [
// { name: 'dono', age: 30 },
// { name: 'bim', age: 20 },
// { name: 'bam', age: 25 }
// ]

const getData = async () => {
	try {
		const data = await fetchData();
		console.log("Data berhasil diambil:", data);
	} catch (error) {
		console.log(error);
	}
};

getData();
// Data berhasil diambil: [
// { name: 'dono', age: 30 },
// { name: 'bim', age: 20 },
// { name: 'bam', age: 25 }
// ]
