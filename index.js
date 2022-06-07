const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (array, method) => {
  let resultMethod = method(array);
  let result = [];
  for (let i = 0; i < resultMethod.length; i++) {
    result.push(`${i + 1}. ${resultMethod[i]}`);
  }

  return result;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (array) => {
  return array.sort()
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (array) => {
  return array.reverse()
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter ?.(names, sortAscending) ?.join("\n"));
  console.log(sorter ?.(names, sortDescending) ?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};