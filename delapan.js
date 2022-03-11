const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];

  let totaluntung = dataPenjualanNovel.map(tot => (tot.hargaJual - tot.hargaBeli) * tot.totalTerjual).reduce((previous, current) => previous + current,0);
  let totmodal = dataPenjualanNovel.map(tot => (tot.hargaBeli * (tot.totalTerjual + tot.sisaStok))).reduce((previous, current) => previous + current,0);

  const number = totaluntung.toString().split('').reverse().join('');
  const convert = number.match(/\d{1,3}/g);
  const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('');

  const number2 = totmodal.toString().split('').reverse().join('');
  const konfert = number2.match(/\d{1,3}/g);
  const rupiah2 = 'Rp ' + konfert.join('.').split('').reverse().join('');

  const max = Math.max.apply(Math, dataPenjualanNovel.map(maximum => maximum.totalTerjual));
  console.log(max);

  //if(dataPenjualanNovel.totalTerjual >)

  console.log(rupiah);
  console.log(rupiah2);
  
//   const result = data.filter((items) => items.penulis === 'Tere Liye').reduce((acc,curr) => acc.terjual + curr.terjual);
//   console.log(result);