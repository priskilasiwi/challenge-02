const dataNumbers = [2, 3, 5, 6, 6, 4]

function getAngkaTerbesarKedua (dataNumbers) {
    
    if (dataNumbers == 0 || dataNumbers == null) {
        return "ERROR: array kosong";
    } else {
        let angkaTerbesar = dataNumbers[0];
        let angkaTerbesarKedua = dataNumbers[1];
        for (let i = 0; i < dataNumbers.length; i++) {
            if (dataNumbers[i] > angkaTerbesar) {
                angkaTerbesarKedua = angkaTerbesar;
                angkaTerbesar = dataNumbers[i] - 1;
            } else if (dataNumbers[i] > angkaTerbesarKedua) {
                angkaTerbesarKedua = dataNumbers[i];
            }
        }
        return angkaTerbesarKedua;
    }
}

console.log(getAngkaTerbesarKedua(dataNumbers));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());