const cekHariKerja = (day) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
			let cek = dataDay.find((item) => {
				return item === day;
			});

			if (cek) {
				resolve(cek);
			} else {
				reject(new Error("Hari ini bukan hari kerja"));
			}
		}, 3000);
	});
};

// Menggunakan then-catch
cekHariKerja("senin")
	.then((result) => {
		console.log("Hari kerja:", result);
		// jika hasilnya sukses, maka akan diproses dengan menggunakan method then dan menampilkan hasilnya menggunakan console log.
	})
	.catch((error) => {
		console.log("Error:", error.message);
		// jika hasilnya error, maka akan ditangkap dengan menggunakan method catch agar errornya tidak akan menyebabkan crash pada program
		// dan menampilkan errornya menggunakan console log.
	});

// Menggunakan try-catch
// dalam menggunakan try-catch, kita harus menambahkan keyword async-await agar kode berjalan secara asynchronous.
(async function () {
	// pada awal function, kita menambahkan keyword async
	try {
		const result = await cekHariKerja("sabtu"); // pada saat memanggil function cekHariKerja, kita menambahkan keyword await sebelumnya.
		console.log("Hari kerja:", result);
		// jika hasilnya sukses, maka akan ditampilkan hasilnya menggunakan console log.
	} catch (error) {
		console.log("Error:", error.message);
		// jika hasilnya error, maka akan ditangkap dengan menggunakan method catch agar errornya tidak akan menyebabkan crash pada program
		// dan menampilkan errornya menggunakan console log.
	}
})();
