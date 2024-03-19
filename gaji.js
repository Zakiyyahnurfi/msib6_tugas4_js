let frm = document.getElementById('datapeg');
let jabatan = ['Manager', 'Asisten Manager', 'Staff'];
let pilihJabatan = `<option value="">Jabatan----</option>`;
for (let j in jabatan) {
    pilihJabatan += `<option value="${jabatan[j]}">${jabatan[j]}</option>`;
}
frm.jabatan.innerHTML = pilihJabatan;
let status = ['Menikah', 'Belum Menikah'];
let pilihStatus= `<option value="">Status----</option>`;
for (let s in status) {
    pilihStatus += `<option value="${status[s]}">${status[s]}</option>`;
}
frm.status.innerHTML = pilihStatus;

function gaji() {
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;

    let gaji;

    switch (jabatan) {
        case 'Manager': gaji = 15000000; break;
        case 'Asisten Manager': gaji = 10000000; break;
        case 'Staff': gaji = 5000000; break;
        default: gaji = 0;
    }
    let gapok = gaji;
    let tunjanganJbtn = gaji * 0.15;
    let bpjs = gapok * 0.1;
    let tunjanganKlg = (status == 'Menikah') ? gapok * 0.2 : 0;
    let totalGaji = gapok + tunjanganJbtn + bpjs + tunjanganKlg;


swal(`

    Nama Pegawai : ${nama}
    Status : ${status}
    Jabatan : ${jabatan}
    Gaji Pokok : ${gapok}
    Tunjangan Jabatan : ${tunjanganJbtn}
    Tunjangan Keluarga : ${tunjanganKlg}
    Total Gaji : ${totalGaji}
    `);
}
