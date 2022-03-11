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

 
  

  const getInfoPenjualan = () => {
    let totalKeuntungan = 0;
    let totalModal = 0;
    let totalTerjual = 0;
    let namaProdukTerlaris = '';
    let namaPenulisTerlaris = '';
    let persentaseKeuntungan = 0;

    // Total Modal, Terjual dan Keuntungan
    dataPenjualanNovel.forEach(item => {
      totalKeuntungan += (item.hargaJual - item.hargaBeli) * item.totalTerjual;
      totalModal += item.hargaBeli * item.totalTerjual;
      totalTerjual += item.totalTerjual;
      // Nama Produk
      if (namaProdukTerlaris === '') {
        return namaProdukTerlaris = item.namaProduk;
      } else if (item.totalTerjual > totalTerjual) {
        return namaProdukTerlaris = item.namaProduk;
      }
      // Nama Penulis Terlaris
      if (namaPenulisTerlaris === '') {
        return namaPenulisTerlaris = item.penulis;
      } else if (item.totalTerjual > totalTerjual) {
        return namaPenulisTerlaris = item.penulis;
      }
    });
    // Persentase Keuntungan
    persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;
    return {
      // totalkeuntungan dan total modal dalam bentuk rupiah
      totalKeuntungan: new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(totalKeuntungan),
      totalModal: new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(totalModal),
      persentaseKeuntungan : persentaseKeuntungan.toFixed(3) + "%", 
      namaProdukTerlaris,
      namaPenulisTerlaris,
    };
  }


  console.log(getInfoPenjualan());
