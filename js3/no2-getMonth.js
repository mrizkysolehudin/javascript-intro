function getMonth(callback) {
	setTimeout(() => {
		let error = false;
		let month = [
			"January",
			"February",
			"Maret",
			"April",
			"Mei",
			"Juni",
			"Juli",
			"Agustus",
			"September",
			"Oktober",
			"November",
			"Desember",
		];

		if (!error) {
			callback(null, month);
		} else {
			callback(new Error("Sorry Data Not Found"), []);
		}
	}, 4000);
}

function tampilkanSemuaBulan(error, months) {
	if (error) {
		console.log(error.message);
	}

	months.map((month, index) => console.log(`Bulan ${index + 1}: ${month}`));
}

getMonth(tampilkanSemuaBulan);
// Bulan 1: January
// Bulan 2: February
// Bulan 3: Maret
// Bulan 4: April
// Bulan 5: Mei
// Bulan 6: Juni
// Bulan 7: Juli
// Bulan 8: Agustus
// Bulan 9: September
// Bulan 10: Oktober
// Bulan 11: November
// Bulan 12: Desember
