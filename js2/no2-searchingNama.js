const names = [
	"Abigail",
	"Alexandra",
	"Alison",
	"Amanda",
	"Angela",
	"Bella",
	"Carol",
	"Caroline",
	"Carolyn",
	"Deirdre",
	"Diana",
	"Elizabeth",
	"Ella",
	"Faith",
	"Olivia",
	"Penelope",
];

function searchName(cariNama, limit, callback) {
	const filteredNames = names.filter((name) =>
		name.toLowerCase().includes(cariNama.toLowerCase()),
	);

	const limitResult = filteredNames.slice(0, limit);
	callback(limitResult);
}

function tampilkanHasil(hasil) {
	console.log("Hasil pencarian nama: ");
	console.log(hasil);
}

searchName("an", 3, tampilkanHasil);
// Output: 	Hasil pencarian nama:
// 					[ 'Alexandra', 'Amanda', 'Angela' ]
