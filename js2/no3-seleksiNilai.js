function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
	if (dataArray.length <= 5) {
		return "Jumlah angka dalam dataArray harus lebih dari 5";
	}

	if (nilaiAwal >= nilaiAkhir) {
		return "Nilai akhir harus lebih besar dari nilai awal";
	}

	const hasilSeleksi = dataArray.filter(
		(data) => data > nilaiAwal && data < nilaiAkhir,
	);

	if (hasilSeleksi.length === 0) {
		return "Nilai tidak ditemukan";
	}

	hasilSeleksi.sort((a, b) => a - b);

	return hasilSeleksi;
}

console.log(SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
// [ 8, 14, 17 ]

console.log(SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
// Nilai akhir harus lebih besar dari nilai awal

console.log(SeleksiNilai(5, 17, [2, 25, 4]));
// Jumlah angka dalam dataArray harus lebih dari 5

console.log(SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));
// Nilai tidak ditemukan
