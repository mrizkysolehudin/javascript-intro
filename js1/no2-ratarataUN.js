const ratarataUN = (mtk, bahasaIndonesia, bahasaInggris, ipa) => {
	if (mtk && bahasaIndonesia && bahasaInggris && ipa) {
		const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

		let grade;
		if (rataRata >= 90 && rataRata <= 100) {
			grade = "A";
		} else if (rataRata >= 80 && rataRata < 90) {
			grade = "B";
		} else if (rataRata >= 70 && rataRata < 80) {
			grade = "C";
		} else if (rataRata >= 60 && rataRata < 70) {
			grade = "D";
		} else {
			grade = "E";
		}

		console.log(`Rata-rata = ${rataRata.toFixed(2)} `);
		console.log(`Grade = ${grade}`);
	} else {
		console.log("Semua nilai mata pelajaran harus diisi.");
	}
};

ratarataUN(70, 40, 50, 90);
// Rata-rata = 62.50
// Grade = D
