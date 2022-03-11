const dataPenjualanPakAldi = [
    {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori : "Sepatu Sport",
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 37,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Maroon High ',
      kategori : "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 90,
    }
  ]

    // function hitungTotalPenjualan(dataPenjualan) {
    //     let sum = 0;
    //     for(i=0; i <= dataPenjualanPakAldi.length; i++){
    //         sum = sum + dataPenjualanPakAldi[i].totalTerjual;
    //         return sum;
    //     }

    // }

    const getTotalPenjualan = () => {
        let totalPenjualan = 0
        for(let i = 0; i < dataPenjualanPakAldi.length; i++){
            totalPenjualan += dataPenjualanPakAldi[i].totalTerjual;
        }
        return totalPenjualan;
    }
    
    console.log(getTotalPenjualan(dataPenjualanPakAldi));