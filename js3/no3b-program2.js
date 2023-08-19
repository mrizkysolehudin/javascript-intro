// Program 2: pesan barang

const pesanBarang = (barang) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = ["spidol", "kapur", "Pensil"];

			if (data.includes(barang)) {
				resolve(`Pesanan ${barang} berhasil diproses.`);
			} else {
				reject(`Maaf, ${barang} tidak tersedia.`);
			}
		}, 2000);
	});
};

pesanBarang("penghapus")
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.error(error);
	});
// Maaf, penghapus tidak tersedia.

const getBarang = async () => {
	try {
		const result = await pesanBarang("Pensil");
		console.log(result);
	} catch (error) {
		console.error(error);
	}
};
getBarang();
// Pesanan Pensil berhasil diproses.
