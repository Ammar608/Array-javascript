// array map => mengembalikan nilai baru
const mahasiswa = ['ammar','budi',null,'sapta','andika'].map((nama)=>{
    return `${nama}`
});

console.log(mahasiswa);

// array filter => menyaring nilai array
const guru = [1, 'angga',null,'handika'].filter((item) => Boolean(item));
// console.log(guru);

const teachers = [
    {
        name: 'safta',
        umur: 23,
    },

    {
        name: 'Galuh',
        umur: 25,
    },

    {
        name: 'Nazar',
        umur: 27,
    }
];

const teacherInSchool = teachers.filter((teacher)=> teacher.umur <=25);
console.log(teacherInSchool);


// array reduce => menjumlahkan dari sebuah nilai array
const totalUmur = teachers.reduce((akurasi,teacher)=>akurasi + teacher.umur,0);
console.log(totalUmur);

// array find => menemukan sebuah nilai dalam sebuah array
const findSomeOne = teachers.find(teacher=>teacher.name ==='ammar');
console.log(findSomeOne);

// array sort
const bulan = ['desember','april', 'pktober', 'januari'];
bulan.sort() //mensortir nilai arrat dengan format string 
console.log(bulan);

const harga = [2940,348,28893,123]; 
const comparNumber = (a,b) => {
    return a - b;
}; 
//mensorting nilai berdasarkan nilai terkecil
//jika menggunakan sort secara langsung maka format akan berususun
// 123,348,28893,2940
const sorting = harga.sort(comparNumber);
console.log(sorting);

//array every => mengecheck nilai dari sebuah array apakah sudah sesuai dengan kriteria
// example menentukan kelulusan siswa, harga minimum (hasil biasa nya bernilai Boolean)
const hargaMinimum = 100;
const minimum = harga.every(a => a >= hargaMinimum);
console.log(minimum);

// array foreaceh => memanggil fungsi callback pada setiap nilai array
const wargaWaringing = ['feri','imam','ajo','serli'];
for(let i = 0; i<wargaWaringing.length; i++){
    console.log(`hello ${wargaWaringing[i]}`);
}
