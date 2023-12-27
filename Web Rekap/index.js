function getkelas() {
  var selectedValue = document.getElementById('selectkelas').value;
  window.location.href = "form.html?kelas=" + encodeURIComponent(selectedValue);
}

// In form.html, retrieve the value from the URL
function showkelas() {
  var urlParams = new URLSearchParams(window.location.search);
  var kelas = urlParams.get('kelas');

  if (kelas == "X AK 1") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ALIYA SAFIYANA',
      'ALLYSA PRICILIA',
      'ALYA RATU NAJWA',
      'ANDISTY GALUH PRATIWI',
      'AQIILAH ZAINI',
      'EILLINE HADASYAH DAMAYANTI',
      'FATIM AZWA NABILAH SEHA',
      'HANUM PUTRI SETIAWAN',
      'HANYTYA MAULYZA',
      'IDNAIMU NADIYYUL KAFFI',
      'INDAH MAHARANI',
      'IRWAN ARDIANSAH',
      'JIHAN ANNISA AZZAHRA',
      'KENTRIA SETIAHATI NINGRUM',
      'KEYSSIA AULIA HARYANTO',
      'KHANSAH MUNTAZ YULIANAH',
      'KINAYA KEISHA NUGRAHA',
      'MUHAMMAD IQBAL',
      'MUHAMMAD YAQZAN FAIRUZY',
      'MUHARAHMA SUCI KIRANI',
      'MUHARIK ALIF FAUZAN',
      'NAURA SALSABILA',
      'NOFA ALIKA',
      'NOVA ALESYA',
      'NURJANNAH',
      'RIKA FITRIYANI',
      'RIRIN PERMATA SARI',
      'RIZKA SYATHYRI',
      'RIZKY RAMADHAN',
      'ROBBIATUL ADAWIYAH',
      'SABILA PUTRI KINANTI',
      'SYAHARA FEBBYANI',
      'TIARA ANGGITA',
      'UMMU HANI',
      'WULAN OKTAVIA NERI',
      'ZELDA SAHARA SHARAPOVA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "X AK 2") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ADRIAN PURNAMA FEBRIANSYAH',
      'ARDELIA TALITHA AZZANI',
      'ARIA WIBAWA WIRAYUDA',
      'AZAHRA TUSSHITA',
      'DESWANTI AFRIANI',
      'DUTA AKBAR',
      'ELIZA CHAERANI PRATIWI',
      'FACHRI RAGIL SAPUTRA',
      'FARAH TRIANA',
      'IZMI AISYAH NURAINI',
      'JIHAN ZAHIYA PUTRI',
      'KARTIKA PUTRI NIDJI',
      'KARTIKA SARI',
      'KAYLA AZZAHRA',
      'KRISTIN AMELIA',
      'LUSIANA SALSABILA',
      'MARNI ELFRIDA WASTI NAPITUPULU',
      'MONA CALISTA',
      'MUTIA BINTANG SHOLEHA',
      'NAFIS AHMAD NAUFAL',
      'NAFISAH NAILAL HUSNA',
      'NAILAH KHAIRANI',
      'NAJWA NAFISAH',
      'RAFIFAH NADIF ATIQAH',
      'RAISAH NUR ADIVA',
      'RANA NAIFA HANUN',
      'RANI AZZA ATSILAH',
      'RATIH',
      'SATRYA PUTRA RIDWANTO',
      'SHARREN NABIHA SAKHI',
      'SHOFIYAH ZAINAH RAMADHANI',
      'SITI NUR AINI',
      'SITI UMAIROH',
      'SYAFIRA DWI FEBRIYANTI',
      'SYILLA TRI CAHAYANI',
      'TAMARA SORAYA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "X BR 1") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'AHMAD FAHRUROZI AL MALIKI',
      'ALDA DWI MEISYA',
      'ALLSADRY ZILDJIAN',
      'ALYA MEGA SAKIRA',
      'ANISYAH MEILINA',
      'AULIA FAHRUNISA',
      'CHINDY NAIRA NUR SUBANDA',
      'DANIA ZAHRA',
      'FEBRYANI BAHARUDIN AL AMUDI',
      'FEBY ZALIANTI',
      'FIKA IRAWAN',
      'FINA NAYLATUL HIDAYATI',
      'FLORA AZZAHRA',
      'INDRIA AFRILIANTY',
      'IRA NOPITA SARI',
      'KEYSHA CHANDRA',
      'KHAIRA RAMADHANI',
      'KHAYLA CAHAYA MAHENDRA',
      'KINAR RAMADANI',
      'LARA NURFAIZAH',
      'LINDA PRATIWI',
      'MIRA ZARREFA ANGELINA',
      'MUHAMMAD ADITYA RAMADHAN',
      'MUTIA AYU LISTY',
      'NABILAH ANDRIANI',
      'NADIN PRATIWI',
      'NAYLA KAISAN',
      'NAYLA KARTIKA SARI',
      'NAYLA ZALFA BUSTAMI',
      'SITI AISYAH',
      'SITI KHALIFAH TULJANAH',
      'SRI FAKHITAH AN NAHROWI',
      'TARRISKA ISMADANI',
      'ZAHRA KHUMAYIRA',
      'ZAKIYAH AULIA',
      'ZYAHRA SITI NURAINI'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "X BR 2") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ANNASTYA MUKHOFIFAH',
      'ARINI CLARISSA ZAHARA',
      'AURA NOVA DWI PRIHATINI',
      'CHARISYAH MAULIDINAYA',
      'DECA PUJI LESTARI',
      'DEWI AYUSITA',
      'FARAH ADILLA PUTRI',
      'FARRAH AQILA',
      'FATIMAH SALSABILA',
      'FEBRIANA NUR ANGGRAENI',
      'GINA ALIFAH',
      'GINA NOVIANA',
      'HANA RAIHANUN',
      'KEYLA ANINDYA PUTRI',
      'KEYLA YUSTIANA',
      'KEYLIN RAHMA YASIFA',
      'LAELA SASKIA PUTRI',
      'LAILA NAFILA',
      'MEILANI PUTRI',
      'MEISTA OKTAVIA',
      'MERRY FEBRIYANTI',
      'MUHAMAD IQBAL FIRDAUS',
      'NADINE NARWASTU',
      'NEZSA ANDARA PUTRI',
      'NI PUTU SUPRATISTATI SWADAYA',
      'NURUL MELATI SABNA',
      'PUPUT LUSFI AMELIANA',
      'RAYSHA NUR AFIFAH',
      'RISKITA PRASANAYANG',
      'SEPTYANINGRUM',
      'SHABILA NURUL ASSYIFA',
      'SITI ACKASYA PUTRI',
      'TEUKU UMAIR MUKAFIH',
      'TRI FEBRIYANTI',
      'VIVI SEPTIANINGSIH',
      'ZAHRA DESWITA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "X DKV") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ALDINA REYNA ACHMAD DIMYATI',
      'AMIRUL FADLY',
      'ANNISA SOFIA MOGHA',
      'BALQIS ZOFIA',
      'BIMMA EXA ALEXANDER',
      'DEWI NURHAYATI',
      'DIVA AMELIA PUTRI',
      'FACHRI SYAH PUTRA',
      'GHENDIS DHAMAYANTI',
      'HANI EKA MAULIDA',
      'INDAH DWI PUSPITA',
      'JESSLYN SUTJIONO',
      'KAYLA ZAKIA ZAHRA',
      'M. DEVANDI YUNDIANSYAH',
      'MOCHAMAD DEWA DARWINSYAH',
      'MUHAMMAD YUSUF HABIBI',
      'MUHAMMAD ZIDAN EFENDI',
      'MUHAMMAD FABIO PRADANA',
      'NAIRA PUTRI HANITA',
      'NIKEISHA SALSABILA PUTRI RIANDA',
      'NIKEN AYU AGUSTIN',
      'RAIDITHA EKA KURNIAWAN',
      'RESYAH MARLITA SAPTIYANI',
      'RHOUDOTUL JANNAH',
      'RIZKA PUSPITA',
      'SATRIO DWINUR SETIAWAN',
      'SEPTIA RAMADHANIA',
      'SITA HAPSARI',
      'TIARA APRILLIA',
      'TIFFANI SYIFA SALSABILLAH',
      'TYAS NAURARAH ARDINING',
      'ULAYA JAHRO MURTAJA',
      'ZASQYA RABBY SALSABILA',
      'ZEFANIA CALLISTA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "X MP 1") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ABIYYAH HUMAIRA',
      'ADHISTY KIRANI PUTRI',
      'ADINDA AULIA PUTERI',
      'AINUN SARI',
      'AIRIN AULIA',
      'BUNGA FEBRIYANTI',
      'CHIKA KHAERUNNISA',
      'DEWI LESTARI',
      'ERLIA YULIANDARI',
      'JENIS RODIYAH AZAHRA',
      'KAFKA NAVISHA',
      'LINA DWI FEBRIANTI',
      'MAHADIKA DWI MULIANI',
      'MARSYAH ANJANI',
      'MUTHIA FEBRINA NAZARI',
      'MUTIA FUJI ARYANTI',
      'NABILA',
      'NOVIA TRI WAHYUNI',
      'NUR HALIMAH',
      'PELANGI NIKEN AMANDA',
      'PRISCA AURELLIA',
      'PUTRI RAMADHANI',
      'RISA KARUNIA MAULID',
      'RISKA AMELIA',
      'RIZKI MULIYANINGSIH',
      'RIZKY STEVANY WULANDARI',
      'SABRINA ADE CAHYANI',
      'SALWA NISRINA AL FATIN',
      'SAYRA NAYSILA',
      'SHERRON ALVIANY',
      'WINDRIANTI FURQONIDA',
      'WULAN SARI',
      'ZAHROTUL MAHABBAH',
      'ZAHWA ALLYA MALIKA',
      'ZAHWA JULIARTI',
      'ZALFA NIDA ZAHRAH'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "X MP 2") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'AISYAH AZZAHRA PUTRI',
      'ALIFFA NUR SALFANI',
      'ANI MARLA',
      'APRILLIA AL DINIYAH',
      'BALQIS SALMANDA',
      'CAHYA RAHMADANI',
      'DEA BUNGA ARTIKASARI',
      'DEVINA PUTRI HUMAIRA',
      'GUNTUR',
      'HANNA RIMTHA GINTING',
      'HARSYA OKTADHEA PUTRI',
      'INESYA MAHARANI',
      'KESYA ARDIANI',
      'KEYSHA AURA SARFENA',
      'MAULINA SETELA WATI',
      'MEYLINDA DINA ISTIANA',
      'MUHAMMAD FARHAN',
      'NABILA MAULIDA',
      'NAJWA INAYAH',
      'NAJWA ULFA',
      'NATASYA INDRIANI SIAHAAN',
      'NOVI WIDYASTUTI',
      'NUR RISMA WATI',
      'PASHA SYALWALYNO',
      'RAHELLIA NINDY AGUSTINA',
      'RAISYA SAHARA PUTRI',
      'REVA ARSHINTA',
      'SILMI AZZURA',
      'SINTA AYU PUSPITA SARI',
      'SITI NURHASANAH',
      'SYALWAH AULIA NANDITA',
      'SYIFA FITRIAWATI',
      'WAHDAH AULIA MARINI',
      'ZENNA FAIZAH',
      'ZHAFIRAH SHAFA TIYANDARI'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "X RPL") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ALIF RAMADHANI',
      'ANGGISNA FEBRIYANI',
      'ASYFA NURRAHMA',
      'BINTANG YUDHA PUTRA PURNOMO',
      'CANTIKA AZKA AQILA',
      'DIMAS PRADIPTA MULYA',
      'ELANG NUR FADILLAH',
      'FADHLAN AGHNATAN',
      'FAJRI SUHADA HAJAT',
      'FITRI HANDAYANI',
      'HUSNI MUBAROK',
      'IBNU HABIBULLAH',
      'IRFA ZAHRA TUZZIQRIYAH',
      'JORDANIUS HALOMOAN HAUTAPEA',
      'KIRANIA NUR FATIMAH',
      'MUHAMMAD AKHSEL DWINANDA',
      'MUHAMMAD AMRI IKHDA RIFAAN',
      'MUHAMMAD ARTHUR FADILAH',
      'MUHAMMAD ILYASA',
      'MUHAMMAD NABIL AL GHIFARI',
      'MUKAFI ARZAQA',
      'NELSI CORNELIA',
      'NUR MUHAMMAD NAUFAL',
      'RADITYA PUTRANTORO',
      'RAKA PRATAMA SAFIRA',
      'RIZKI MAULANA FIRDAUS',
      'RIZQI ALFARIANSYAH SALIM',
      'RIZQI TIRTA AYU',
      'SAYID ARIP',
      'SEKAR INDAH LESTARI',
      'SULTAN ARHABURRIZQI EL QUDSI',
      'SUNANDIKA',
      'TADZKYA SANINA',
      'YAAHANIIZH MUTIARA',
      'ZALFA APRILIA JUVENTINI'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XI AK 1") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ADINDA ANUGRAH RIZKY',
      'ANGGITA RISMA DEWI',
      'APRILA ANGGARI',
      'ASKA ASKIA',
      'ASYIFA NURSA\'ADAH',
      'AULIA AZAHRA',
      'AYUNA KHAIRUNNISA',
      'CHELSE JESY OLIVIA',
      'CITRA RAHMA AULIA',
      'DEVI FATMA SARI',
      'DINA AULIA SISWANTO',
      'EMELY RESTIANA',
      'ERLANGGA AFRIANSYAH PUTRA',
      'FADIRA GUSTIYANA',
      'FAUZIAH NUR KAMILAH',
      'FIRDA SAKINAH',
      'GUSTI AYU CHARMEN SAVITRI',
      'KHANA KHAIDAH NINGSIH',
      'LINDA PUTRI PURNOMO',
      'MAR\'ATUL AULIA NUR ISNAENI',
      'MESSI SYAHRANI',
      'MOZA ADITIYA',
      'NABILA DWI HIDAYAT',
      'NADINE KARTIKA DARWIN',
      'NIKE OKTAVIA RAHMASARI',
      'NURMALINDA',
      'PUTRI MEYKA ANDINI',
      'RAHMADANIA',
      'REVINA ADLIA FACHRANI',
      'SAJIDAH RAMADHANI',
      'SEVILA AULIA',
      'SILVIA SYAHRONI',
      'SITI ROBIATUL ADAWIYAH',
      'SYAHLA NAVISA',
      'TIFANIA RAMADHANI',
      'VIKA KHAIRIYAH'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XI AK 2") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ALISYA NUUR KHOFIYA',
      'ANIS ISMA NURJANAH',
      'ASTRID OCTA RAMADHANI',
      'AULIA APRILIANI',
      'AURA NADIA HADI PUTRI',
      'BUNGA SEROJA PUTRI GUFRON',
      'CHRISTIN BUNGA NATALIA',
      'CITRA AULIA',
      'DESI LESTARI',
      'DIAN AHIRIYANI',
      'ELSA MAULIDIYA',
      'FATIHA NUR ZAHWA',
      'FIRDA DIAH AGUSTINA',
      'GENDYS ROBBIATUL SYIFA',
      'HANINA NAYARA SYAFA',
      'KHOIROTUN NISSA',
      'LINTANG JULIANA ZAHRA',
      'MAWADDAH SYAKINAH SETIADI',
      'MIA AMELIA',
      'MUHAMMAD RIZQI MAULANA',
      'NADIA',
      'NEIZQILLASHAQQA AURENZZA',
      'NUR SAKINAH QOLBI MAULIDI',
      'PUTRI MAHARANI',
      'PUTRI RAMADHAN',
      'RAHMAT FADILAH',
      'SAFIRA NUR\'AINI',
      'SELFIA AMELLIA',
      'SHAFIQAH MISTAM',
      'SIDNEY MILLENIA',
      'SINDI',
      'SUKMANING AYU WANDIRAH',
      'SYALSABILA DWI RAMADHANI',
      'VERINA ZAHRA',
      'YUSROFUL FUMAIDA AMELIA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XI BR") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ALIN ARINI',
      'ALISA',
      'ALLYSA AGUSTIN',
      'ALMA RISMARTANTI',
      'ALYA FAIHAA RAMADHANI',
      'ANNISA DWI YUNIATI',
      'ARINI NUR HANIFAH',
      'BUNGA ZELIA AKMALIA PUTRI',
      'DINA ASITA',
      'DZAKY ARSAN HIDAYAT',
      'FATIKHAH RAHMADHANI',
      'GENDHIS AJENG RAHMANIA S',
      'HILDA YULIANTI',
      'INARA RAZANA WAFA',
      'JHESICHA FEBIOLA',
      'KAYLA ADINDA PANGESTU',
      'KAYLA SYAHARANIE',
      'KEYSA SYOFYANI',
      'KYRA SANMILDEN',
      'NABILLA KHANZA',
      'NAILA MUAZZALA',
      'NAJWA HASYA DAMAR',
      'NANDA SABELA',
      'NAYLA ORCHIDELIA',
      'NAZWA SALWANISA',
      'NUR FADIAH RAMADHANI',
      'NURLAILA RAMADHANI',
      'PUTRI ZAHRA ALYA',
      'SAEPUL UMAR',
      'SARAH KIRANI FATURAHMAN',
      'SHALWA AMELIA',
      'SYIFAA SALSABIILA',
      'TISYAH UMAIRAH',
      'WITRI RAHMADANI',
      'WULANDARI',
      'ZAKIAH MAUDIANA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

	// XI DKV

	// XI MP 1

	// XI MP 2

  if (kelas == "XI RPL") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ACHMAD HAIDAR RAHMAN',
      'AL SAKHA FATTHARIQ ANUAR',
      'ALDI KURNIAWAN',
      'ALFI SYAHRI',
      'ALIFIA NAILALHIMMAH',
      'ALIFIAN ABDIEL RAFIF',
      'ARIE FATUR RAHMAN',
      'ASLAM REHAN SAPTOTRIONO',
      'CAESARIAN LANANG PARIZANO ZAIM',
      'CLAUDYA PATRICIA BORORING',
      'DAVID PUTRA PRATAMA',
      'EVAN DESTIAN SAPUTRA',
      'FITRI OKTAVIANI',
      'MAYLA HUMAIROH',
      'MIA AMALA',
      'MUHAMAD LINTANG ANDIYAN',
      'MUHAMMAD ADITYA NOVIANSYAH',
      'MUHAMMAD AKMAL SABAN',
      'MUHAMMAD IRFAN MAULANA',
      'MUHAMMAD SALMAN AL FARISI',
      'MUHAMMAD YAZID MUNDZIR',
      'NAZLA RAHMA',
      'NAZRIL SATRIA HIDAYATULLAH',
      'NAZWA RAMADANI SEPTIAN',
      'NIKI AHMAD HAMDANI',
      'RAMADINA AL MUZTHAZAM',
      'RANTI AZZAHRA',
      'RASKIA RAHMADINI',
      'REVANI KHOIRUNNISA AZZAHRA',
      'REYNALDO YUSELLINO',
      'SHELINA ROYDINATA SAFIRA',
      'SITI AZIZAH AGUSTINA',
      'SYIFA NAZILAH PUTRI',
      'USWATUN KHASANAH',
      'YAYA YABES ABFILE'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

	// XII AK 1

  if (kelas == "XII AK 2") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'AFIFAH BADRINA PUTRIANI',
      'ALYCIA HAERUNISA FATIH',
      'AMALIA MUTMAINNAH',
      'AMANDA PUTRI',
      'ANNISA SUCI RAMADHANI',
      'ASYIKA SYAFA\'AH',
      'AYU SORAYA',
      'AZIZAH KHOIRINISA ADHA',
      'CINDI AULIA',
      'CITRA PAWITRA',
      'DELLA NOVANESSA SHAKILA',
      'DENNISA SEKAR AYU',
      'DINDA ANGGRAINI',
      'ERLYNA SAVITRI',
      'FUNIKA SALSABILA',
      'IMAM MAULANA',
      'JESSICA FEBRIANI',
      'LAILA RAMADHANI',
      'MARSYA SUCI LESTARI',
      'MUHAMAD IQBAL',
      'NADIA ZAHIRA',
      'NANDA FERISKA',
      'RISMA OKTAVIA RAMADHAN',
      'RIZKA MEIDIANA',
      'SAKHA NAJWA HERMALIA PUTRI',
      'SAKINAH',
      'SALSA JUNAENAH KAMILAH',
      'SELLA ANDRIANA',
      'SITI MAULIDINA',
      'SYAKILA PUTRI',
      'TIARA KARTIKA PUTRI',
      'TRI HADI',
      'YULIA RAHMA',
      'ZAKYA FATWA NURILLAH'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XII BR 1") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'AGUSTIN LIYANA PUTRI',
      'AHMAD RIZKY',
      'AMALIA AL ZAHRA',
      'AMANDA MARDATILLA',
      'AMANDA TRIANA DEWI',
      'ANDINI CAHYA NIATI',
      'BINTANG RAMADHAN',
      'CICI RAHMAHDANI',
      'DWI SURYANINGTYAS',
      'FARLA AURELIA',
      'FARRA MARTIZA SALVIANA',
      'HERNA LIAWATI',
      'INDAH ASTRIANI',
      'INDUN MARPUTRI',
      'JASMINE NASYABILLA WIBOWO',
      'KARTIKA LAKSMI HIMAWAN PUTRI',
      'LOVEL RUSSELEA KEIDY',
      'MELINA SALIM',
      'MUHAMMAD ALDI SAPUTRA',
      'MUHAMMAD ALFARIZI',
      'NANDA SETIAWATI',
      'NAYLA HANUM',
      'NAZWA PUTI ANDINI',
      'NOVIA SAFITRI ASTA RACHMADANI',
      'NUR AISYAH',
      'OKTA NUR RAMADANTI',
      'POPI DEWI LESTARI',
      'RAHMA ALENA METHA',
      'RESTU AMANDA',
      'SABRINA',
      'SEPTI ANGGREANI',
      'SILVI AULIA',
      'SITI NURAIYSYAH',
      'VANYA FADILLAH SARI',
      'VIA FATRIA AMANDA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XII BR 2") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ANNISA SAGITA FITRI',
      'ASTI CHOERUNNISA',
      'ASTRI ALIANI',
      'AURORA BALQIEZ',
      'BAHRIYA ABIDAH',
      'CINTA TRIEA MILANDITHA',
      'DIRNA RAHMADANI',
      'FITRI AYU CAHYANI',
      'FITRIA NIRMALA',
      'HALIMATUSSADIYAH',
      'HAMZAH',
      'ISNANIA HAIRANI FADLA',
      'JAZZSICA ALYEDO',
      'KEYSYA AUDIA ROCHYAT',
      'KHESYA BINTANG ESA WICAKSONO',
      'MAYA RUBAHANADA',
      'MUHAMMAD IKHWANI',
      'MUHAMMAD NICO FEBRIYAN',
      'NABILA RAHMAWATI',
      'NABILA SALSA PUJIYANTI',
      'NABILAH YULIANTI',
      'NURFAEDAH',
      'NURUL SOLEHA',
      'RAJIH AHMAD',
      'REGINA NAJMA',
      'SITI ROHMA WATI',
      'SITI TOYIBAH',
      'SOFYA RAMADHANI',
      'SYIFA AMALIA',
      'UMMI HABIBAH',
      'ZALFAA KHALISHA AZIIZAH'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XII DKV") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ALIA OCTAVIANI',
      'ALIFAH SALSABILA MEIFIRA',
      'ALISHA KIRANA ARTI',
      'ANNISA KARTINI PUTRI',
      'ATHIFA PUTRI ELVINA',
      'AULIA AZZAHRA',
      'FATHIMATUZZAHRAH',
      'FEBY NABILA CHAERUNNISA',
      'FITRAH ALIFIA MUTHMAINAH',
      'FITRI AULIYA RAHMANI',
      'HANA TAMIMATU ZAHRA',
      'HANANIA ANGGRAENI',
      'IKA NUR AINI',
      'JOHANNES SAMUEL MANUHUTU',
      'KHOLILAH CHIKA RAHMASARI',
      'LAILA NURKHOLIFAH IBTISAAMAH NISRINA',
      'MARIA ANGEL PANJAITAN',
      'MUHAMAD GILANG ANGGA FIRMANSYAH',
      'NABIL AKBAR',
      'NABILAH SYAKIRAH',
      'NAJWA DWI PUTRI MAHARANI',
      'NINDA SYAHRANI',
      'PUTRI ALISA PRATAMA',
      'RAHMAWATI',
      'RINDU LATASHA SALSABILLA',
      'RIVAN MAULANA',
      'SALSABILA RAFA NAURA AYU',
      'SEPTIANI AZAHRA',
      'SITI KARVINA ALESSANDRA',
      'SITI NUR HIMMATUL HAYATI',
      'TSALSA NADZIRATU ZAHRA',
      'ZAHRA ROSSA NAILATUL ARIFAH',
      'ZASKIANY PUTRI'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XII MP 1") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'AGUNG SAPUTRA',
      'ANI SUGIARTI',
      'ANNA AULIA ZAHRA',
      'ASIH SUGIARTI',
      'ASYYA KUSUMANINGTYAS',
      'AULIA RAHMADHANI',
      'AYU DILA PRATAMA',
      'CHAIRUNNISA',
      'DESTI NURAHMA',
      'DESVIAN DWI HERDIANSYAH',
      'DINA RODATUL JANNAH',
      'INDRI YANSYAH',
      'KHOIRIYA ISWA HANI',
      'LIDIYAH',
      'MAHAJAR MILAWATI',
      'MAWARDAH',
      'NABIL GUSTI RAMADHAN',
      'NABILA LAUDYA SALSA WIJAYA',
      'NADINA FEBRIANA',
      'NAJLA NUR ZHAFIRAH',
      'NATASYA FADIA AZAHRA',
      'PUTERI NUR HIJRIYAH',
      'RENI YULIASARI',
      'REVALINA',
      'REVANI GUSTIN ALBERTINA',
      'SOFIA HADI',
      'SYALSABILA DAVINA PUTRI',
      'SYANDA NAZWA ALIFFIA',
      'TAJ NAURA LAUNURU',
      'UMAR BAKHTI ILLAHI',
      'VIOLA ALSHIRA BALQIS',
      'WULAN SARI',
      'YOLA SEPTI AMELIA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XII MP 2") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'AFIFAH HUSNA',
      'AISYAH SYAHDIRA PURWANTI',
      'ALYSA NURUL NAZWA',
      'AMANDA DWI AGUSTIN',
      'AMELIA AMPIR ARTHA',
      'ANGGUN YULIANTI',
      'CHICHA SEPTIANA',
      'DEA RAMADHANI PUTRI',
      'DELA LESTARI',
      'DITO RAMADHAN',
      'ELISA AURA HERMINA',
      'FARADILA SARI',
      'IRSALIN NUR SHADRINA',
      'KAILLA FAUZIAH',
      'MUHAMAD IHSAN',
      'MUHAMMAD DZIKRO MAULANA',
      'MUTIA NABILA',
      'NAYLA SAFINA',
      'NISA TAQIAH RAMADHANI',
      'NUR AZIZAH RAHMAN',
      'NURUL ANISAH',
      'OXANNA ATTAMIMI',
      'PUTRI PUSPITASARI',
      'REYKHA ADELIA AZ-ZAHRA',
      'REZA PRATAMA PUTRA',
      'RISKI AULIA',
      'SALMAN ALFARISI',
      'SHERLY MARDWIYATI AHMAD',
      'SILVIANA HADI',
      'VIRNIE SOMA NURAUDINA',
      'WIDYA FITRIYANI',
      'YOLLANDA ARTIKA',
      'YUNI WIDIASTI',
      'ZASKIA NABILA ANJANI'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XII RPL") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ADE SAPUTRA',
      'AGHNA SOELISTIAWATI',
      'ALDENTA BILQIS',
      'ALIF PUTRA HERMAWAN',
      'ATHAR FAZLI SETIAJI',
      'AZIZ SEPTYANIZAR',
      'BAYU SUMANTRI',
      'DESTYNE OKTAVIELA',
      'FADLA FAJRIYYAH',
      'FAREL AKMAL SAPUTRA',
      'FIKA NUR RIZKI',
      'FIRZA CHAERESKA FADHILLA',
      'GILANG PRATAMA',
      'KHAIRUL AKMAL',
      'MUHAMMAD HAEIKAL SYABANI',
      'MUHAMMAD KAMALUDIN ILHAM',
      'MUHAMMAD NAUFAL AJIMAS',
      'MUHAMMAD NOOR HIKAM',
      'MUHAMMAD PRADIPTA ARYA ANINDITA',
      'MUHAMMAD REZA',
      'MUHAMMAD YUHYI RAMADHAN',
      'MUHAROM ABDUL KARIM SYAHPUTRA',
      'NAYLA BUNGA KALINGGA',
      'NAZWA NURSYAKILLA ACHMAD',
      'NESYA FAKHIRA ARIANTI',
      'PRISCILLIA ANGELICA NATASYA SIHITE',
      'RAFAEL ARBY SATRYO',
      'REVANZA ADI BERKARAMADHAN',
      'REZA FAHLEVI',
      'REZQIA VANESSA PUTRI',
      'SAHLA HUMAIRA',
      'SARAH ADIBAH',
      'SAWALUDIN',
      'WINDYANI AGUSTIN'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyAvl1oqrQ8GVbKjIMewngTGrc3emGfheNk",
  authDomain: "database-test-2-50f4f.firebaseapp.com",
  databaseURL: "https://database-test-2-50f4f-default-rtdb.firebaseio.com",
  projectId: "database-test-2-50f4f",
  storageBucket: "database-test-2-50f4f.appspot.com",
  messagingSenderId: "365710343232",
  appId: "1:365710343232:web:c85818587bf74f6223b3a5"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Set database variable
var database = firebase.database()

function save() {

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var today;
    
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    
    var today = year + "-" + month + "-" + day;       
    document.getElementById("tanggal").value = today;

    var kelas = document.getElementById('kelas').value
    var nama = document.getElementById('nama').value
    var pelanggaran1 = document.getElementById('pelanggaran1').value
    var pelanggaran2 = document.getElementById('pelanggaran2').value
    var pelanggaran3 = document.getElementById('pelanggaran3').value

    database.ref(today + '/' + kelas + '/' + nama).set({
        pelanggaran1 : pelanggaran1,
        pelanggaran2 : pelanggaran2,
        pelanggaran3 : pelanggaran3
    })

    alert('Berhasil')

    setTimeout(function() {
      // Redirect to a new page
      window.location.href = "index.html";
  }, 4000);
}

function displayData() {
  var dataRef = database.ref();
  var dataContainer = document.getElementById('dataContainer');

  // Retrieve data from Firebase
  dataRef.once('value')
    .then(snapshot => {
      const data = snapshot.val();

      // Create buttons for each tanggal
      for (const tanggal in data) {
        if (data.hasOwnProperty(tanggal)) {
          var tanggalButton = createButton('Tanggal: ' + tanggal, ['btn', 'btn-primary', 'animate__animated', 'animate__fadeIn', 'mb-2']);

          // Add event listener for tanggal button click
          tanggalButton.addEventListener('click', function () {
            showKelas(data[tanggal]);
          });

          // Append the tanggal button to the container
          dataContainer.appendChild(tanggalButton);
        }
      }
    })

  // Function to create a button with inner HTML and Bootstrap classes
  function createButton(htmlContent, classes) {
    var button = document.createElement('button');
    button.innerHTML = htmlContent;
    button.classList.add(...classes); // Spread the array of classes
    return button;
  }

  // Function to create a div with inner HTML
  function createDiv(htmlContent) {
    var div = document.createElement('div');
    div.innerHTML = htmlContent;
    return div;
  }

  function showKelas(kelasData) {
    // Clear existing content
    dataContainer.innerHTML = '';

    // Create buttons for each kelas
    for (const kelas in kelasData) {
      if (kelasData.hasOwnProperty(kelas)) {
        var kelasButton = createButton('Kelas: ' + kelas, ['btn', 'btn-success', 'animate__animated', 'animate__fadeIn', 'mb-2']);

        // Add event listener for kelas button click
        kelasButton.addEventListener('click', function () {
          showNamaPelanggaran(kelasData[kelas]);
        });

        // Append the kelas button to the container
        dataContainer.appendChild(kelasButton);
      }
    }

    // Append the Back button to go back to the initial state
    var backButton = createButton('Back', ['btn', 'btn-secondary', 'animate__animated', 'animate__fadeIn', 'mb-2']);
    backButton.addEventListener('click', function () {
      // Clear existing content and display the initial state
      dataContainer.innerHTML = '';
      displayData();
    });
    dataContainer.appendChild(backButton);
  }

  function showNamaPelanggaran(namaPelanggaranData) {
    // Clear existing content
    dataContainer.innerHTML = '';

    // Create divs for each nama and pelanggaran
    for (const nama in namaPelanggaranData) {
      if (namaPelanggaranData.hasOwnProperty(nama)) {
        var namaDiv = createDiv('Nama: ' + nama);
        
        // Append a space (empty div) after each "Nama" entry
        var spaceDiv = createDiv('');
        spaceDiv.style.marginBottom = '10px'; // Adjust the margin as needed

        const jenisPelanggaranKey = namaPelanggaranData[nama];
        for (const jenisPelanggaran in jenisPelanggaranKey) {
          if (jenisPelanggaranKey.hasOwnProperty(jenisPelanggaran)) {
            const Pelanggaran = jenisPelanggaranKey[jenisPelanggaran];

            var jenisPelanggaranDiv = createDiv('Jenis Pelanggaran: ' + Pelanggaran);

            // Append the jenisPelanggaranDiv to the namaDiv
            namaDiv.appendChild(jenisPelanggaranDiv);
            namaDiv.style.fontWeight = "bold";
            jenisPelanggaranDiv.style.fontWeight = "normal";
          }
        }

        // Append the namaDiv and spaceDiv to the container
        dataContainer.appendChild(namaDiv);
        dataContainer.appendChild(spaceDiv);
      }
    }

    // Append the Back button to go back to the initial state
    var backButton = createButton('Back', ['btn', 'btn-secondary', 'animate__animated', 'animate__fadeIn', 'mb-2']);
    backButton.addEventListener('click', function () {
      // Clear existing content and display the initial state
      dataContainer.innerHTML = '';
      displayData();
    });
    dataContainer.appendChild(backButton);
  }
}

function displayLeaderboard() {
  var dataRef = database.ref();
  var dataContainer = document.getElementById('displayLeaderboard');

  // Retrieve data from Firebase
  dataRef.once('value')
    .then(snapshot => {
      const data = snapshot.val();

      // Create a dictionary to store the frequency and total pelanggaran of each nama
      var namaInfo = {};

      // Iterate through each tanggal
      for (const tanggal in data) {
        if (data.hasOwnProperty(tanggal)) {
          const kelasData = data[tanggal];

          // Iterate through each kelas
          for (const kelas in kelasData) {
            if (kelasData.hasOwnProperty(kelas)) {
              const namaPelanggaranData = kelasData[kelas];

              // Iterate through each nama
              for (const nama in namaPelanggaranData) {
                if (namaPelanggaranData.hasOwnProperty(nama)) {
                  // Count occurrences of pelanggaran1, pelanggaran2, and pelanggaran3 except for '---'
                  const pelanggaran1 = namaPelanggaranData[nama].pelanggaran1;
                  const pelanggaran2 = namaPelanggaranData[nama].pelanggaran2;
                  const pelanggaran3 = namaPelanggaranData[nama].pelanggaran3;

                  const totalPelanggaran = [pelanggaran1, pelanggaran2, pelanggaran3].filter(p => p !== '---').length;

                  // Update the total pelanggaran and frequency of the nama
                  if (nama in namaInfo) {
                    namaInfo[nama].totalPelanggaran += totalPelanggaran;
                  } else {
                    namaInfo[nama] = {
                      totalPelanggaran: totalPelanggaran,
                      kelas: kelas,
                    };
                  }
                }
              }
            }
          }
        }
      }

      // Sort the nama based on total pelanggaran (from most to least)
      var sortedNama = Object.keys(namaInfo).sort((a, b) => namaInfo[b].totalPelanggaran - namaInfo[a].totalPelanggaran);

      // Limit the displayed entries to the top 200
      var top20Nama = sortedNama.slice(0, 200);

      // Create leaderboard elements
      var leaderboardContainer = document.createElement('div');
      leaderboardContainer.className = 'container mt-4';

      // Iterate through top 200 nama
      for (let i = 0; i < top20Nama.length; i++) {
        var leaderboardEntry = document.createElement('div');
        leaderboardEntry.className = 'card mb-2';

        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        var namaDiv = createDiv((i + 1) + '. ' + top20Nama[i]);
        var kelasDiv = createDiv('Kelas: ' + namaInfo[top20Nama[i]].kelas);
        var pelanggaranDiv = createDiv('Total Pelanggaran: ' + namaInfo[top20Nama[i]].totalPelanggaran + 'x');

        // Apply Bootstrap styles
        namaDiv.className = 'card-title font-weight-bold';
        kelasDiv.className = 'card-text';
        pelanggaranDiv.className = 'card-text font-italic';

        cardBody.appendChild(namaDiv);
        cardBody.appendChild(kelasDiv);
        cardBody.appendChild(pelanggaranDiv);

        leaderboardEntry.appendChild(cardBody);
        leaderboardContainer.appendChild(leaderboardEntry);
      }

      // Append the leaderboard to the container
      dataContainer.appendChild(leaderboardContainer);
    })

  // Function to create a div with inner HTML
  function createDiv(htmlContent) {
    var div = document.createElement('div');
    div.innerHTML = htmlContent;
    return div;
  }
}






