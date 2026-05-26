// =============================================
// VERİ DOSYASI — Kitap ve cevap anahtarları
// =============================================

const kitaplar = [

  // ==================== MEB ====================
  {
    id: 1,
    ad: "Türkçe 9. Sınıf Ders Kitabı",
    sinif: "9", ders: "Türkçe", yayinevi: "MEB", icon: "📘",
    uniteler: [
      { baslik: "1. Ünite", cevaplar: {1:"A",2:"C",3:"B",4:"D",5:"A",6:"C",7:"B",8:"E",9:"A",10:"D"} },
      { baslik: "2. Ünite", cevaplar: {1:"B",2:"A",3:"D",4:"C",5:"E",6:"A",7:"C",8:"B",9:"D",10:"A"} }
    ]
  },
  {
    id: 2,
    ad: "Matematik 9. Sınıf Ders Kitabı",
    sinif: "9", ders: "Matematik", yayinevi: "MEB", icon: "📗",
    uniteler: [
      { baslik: "1. Ünite — Kümeler", cevaplar: {1:"C",2:"A",3:"D",4:"B",5:"E",6:"A",7:"C",8:"D",9:"B",10:"A",11:"E",12:"C",13:"B",14:"D",15:"A"} },
      { baslik: "2. Ünite — Denklemler", cevaplar: {1:"B",2:"D",3:"A",4:"C",5:"E",6:"B",7:"A",8:"D",9:"C",10:"B"} }
    ]
  },
  {
    id: 3,
    ad: "Fizik 10. Sınıf Ders Kitabı",
    sinif: "10", ders: "Fizik", yayinevi: "MEB", icon: "📙",
    uniteler: [
      { baslik: "1. Ünite — Elektrik", cevaplar: {1:"D",2:"B",3:"A",4:"C",5:"E",6:"D",7:"A",8:"B",9:"C",10:"D"} },
      { baslik: "2. Ünite — Dalgalar", cevaplar: {1:"A",2:"C",3:"E",4:"B",5:"D",6:"A",7:"C",8:"B",9:"E",10:"D"} }
    ]
  },
  {
    id: 4,
    ad: "Kimya 10. Sınıf Ders Kitabı",
    sinif: "10", ders: "Kimya", yayinevi: "MEB", icon: "📕",
    uniteler: [
      { baslik: "1. Ünite", cevaplar: {1:"C",2:"E",3:"A",4:"B",5:"D",6:"C",7:"A",8:"E",9:"B",10:"D"} }
    ]
  },
  {
    id: 5,
    ad: "Biyoloji 11. Sınıf Ders Kitabı",
    sinif: "11", ders: "Biyoloji", yayinevi: "MEB", icon: "📒",
    uniteler: [
      { baslik: "1. Ünite — Hücre Bölünmeleri", cevaplar: {1:"B",2:"D",3:"C",4:"A",5:"E",6:"B",7:"D",8:"A",9:"C",10:"E"} },
      { baslik: "2. Ünite — Kalıtım", cevaplar: {1:"A",2:"C",3:"E",4:"B",5:"D",6:"C",7:"A",8:"E",9:"B",10:"D"} }
    ]
  },
  {
    id: 6,
    ad: "Tarih 11. Sınıf Ders Kitabı",
    sinif: "11", ders: "Tarih", yayinevi: "MEB", icon: "📔",
    uniteler: [
      { baslik: "1. Ünite", cevaplar: {1:"D",2:"A",3:"C",4:"B",5:"E",6:"A",7:"D",8:"C",9:"B",10:"E"} }
    ]
  },
  {
    id: 7,
    ad: "Matematik 12. Sınıf Ders Kitabı",
    sinif: "12", ders: "Matematik", yayinevi: "MEB", icon: "📗",
    uniteler: [
      { baslik: "1. Ünite — Türev", cevaplar: {1:"E",2:"B",3:"D",4:"A",5:"C",6:"E",7:"B",8:"D",9:"A",10:"C",11:"B",12:"E",13:"A",14:"D",15:"C"} },
      { baslik: "2. Ünite — İntegral", cevaplar: {1:"C",2:"A",3:"E",4:"B",5:"D",6:"C",7:"A",8:"E",9:"B",10:"D"} }
    ]
  },
  {
    id: 8,
    ad: "İngilizce 9. Sınıf Ders Kitabı",
    sinif: "9", ders: "İngilizce", yayinevi: "MEB", icon: "📘",
    uniteler: [
      { baslik: "Unit 1 — Studying Abroad", cevaplar: {1:"C",2:"A",3:"D",4:"B",5:"E",6:"C",7:"A",8:"D",9:"B",10:"E"} },
      { baslik: "Unit 2 — My Environment", cevaplar: {1:"A",2:"E",3:"C",4:"B",5:"D",6:"A",7:"E",8:"C",9:"B",10:"D"} }
    ]
  },

  // ==================== PALME ====================
  {
    id: 9,
    ad: "TYT Matematik Soru Bankası",
    sinif: "12", ders: "Matematik", yayinevi: "Palme", icon: "📚",
    uniteler: [
      { baslik: "Bölüm 1 — Temel Matematik", cevaplar: {1:"A",2:"C",3:"B",4:"E",5:"D",6:"A",7:"C",8:"B",9:"E",10:"D",11:"A",12:"C",13:"B",14:"E",15:"D",16:"A",17:"C",18:"B",19:"E",20:"D"} },
      { baslik: "Bölüm 2 — Sayılar ve Cebir", cevaplar: {1:"D",2:"B",3:"E",4:"A",5:"C",6:"D",7:"B",8:"E",9:"A",10:"C",11:"D",12:"B",13:"E",14:"A",15:"C",16:"D",17:"B",18:"E",19:"A",20:"C"} }
    ]
  },
  {
    id: 10,
    ad: "TYT Türkçe Soru Bankası",
    sinif: "12", ders: "Türkçe", yayinevi: "Palme", icon: "📚",
    uniteler: [
      { baslik: "Bölüm 1 — Dil Bilgisi", cevaplar: {1:"B",2:"D",3:"A",4:"C",5:"E",6:"B",7:"D",8:"A",9:"C",10:"E",11:"B",12:"D",13:"A",14:"C",15:"E",16:"B",17:"D",18:"A",19:"C",20:"E"} },
      { baslik: "Bölüm 2 — Anlam Bilgisi", cevaplar: {1:"C",2:"A",3:"E",4:"B",5:"D",6:"C",7:"A",8:"E",9:"B",10:"D",11:"C",12:"A",13:"E",14:"B",15:"D"} }
    ]
  },
  {
    id: 11,
    ad: "AYT Matematik Soru Bankası",
    sinif: "12", ders: "Matematik", yayinevi: "Palme", icon: "📚",
    uniteler: [
      { baslik: "Bölüm 1 — Türev ve İntegral", cevaplar: {1:"E",2:"C",3:"A",4:"D",5:"B",6:"E",7:"C",8:"A",9:"D",10:"B",11:"E",12:"C",13:"A",14:"D",15:"B",16:"E",17:"C",18:"A",19:"D",20:"B"} },
      { baslik: "Bölüm 2 — Analitik Geometri", cevaplar: {1:"A",2:"D",3:"C",4:"E",5:"B",6:"A",7:"D",8:"C",9:"E",10:"B",11:"A",12:"D",13:"C",14:"E",15:"B"} }
    ]
  },
  {
    id: 12,
    ad: "AYT Kimya Soru Bankası",
    sinif: "12", ders: "Kimya", yayinevi: "Palme", icon: "📚",
    uniteler: [
      { baslik: "Bölüm 1 — Kimyasal Tepkimeler", cevaplar: {1:"C",2:"B",3:"E",4:"A",5:"D",6:"C",7:"B",8:"E",9:"A",10:"D",11:"C",12:"B",13:"E",14:"A",15:"D"} }
    ]
  },

  // ==================== BİREY ====================
  {
    id: 13,
    ad: "AYT Fizik Soru Bankası",
    sinif: "12", ders: "Fizik", yayinevi: "Birey", icon: "📚",
    uniteler: [
      { baslik: "Bölüm 1 — Mekanik", cevaplar: {1:"B",2:"D",3:"A",4:"C",5:"E",6:"B",7:"D",8:"A",9:"C",10:"E",11:"B",12:"D",13:"A",14:"C",15:"E"} },
      { baslik: "Bölüm 2 — Elektrik", cevaplar: {1:"D",2:"A",3:"C",4:"E",5:"B",6:"D",7:"A",8:"C",9:"E",10:"B",11:"D",12:"A",13:"C",14:"E",15:"B"} }
    ]
  },
  {
    id: 14,
    ad: "TYT Biyoloji Soru Bankası",
    sinif: "12", ders: "Biyoloji", yayinevi: "Birey", icon: "📚",
    uniteler: [
      { baslik: "Bölüm 1 — Hücre", cevaplar: {1:"A",2:"C",3:"E",4:"B",5:"D",6:"A",7:"C",8:"E",9:"B",10:"D",11:"A",12:"C",13:"E",14:"B",15:"D"} },
      { baslik: "Bölüm 2 — Sinir Sistemi", cevaplar: {1:"E",2:"B",3:"D",4:"A",5:"C",6:"E",7:"B",8:"D",9:"A",10:"C"} }
    ]
  },
  {
    id: 15,
    ad: "AYT Tarih Soru Bankası",
    sinif: "12", ders: "Tarih", yayinevi: "Birey", icon: "📚",
    uniteler: [
      { baslik: "Bölüm 1 — Osmanlı Tarihi", cevaplar: {1:"C",2:"E",3:"B",4:"D",5:"A",6:"C",7:"E",8:"B",9:"D",10:"A",11:"C",12:"E",13:"B",14:"D",15:"A"} }
    ]
  },

  // ==================== FDD ====================
  {
    id: 16,
    ad: "TYT Matematik Konu Anlatımlı",
    sinif: "12", ders: "Matematik", yayinevi: "FDD", icon: "📓",
    uniteler: [
      { baslik: "Bölüm 1 — Sayılar", cevaplar: {1:"D",2:"A",3:"C",4:"B",5:"E",6:"D",7:"A",8:"C",9:"B",10:"E",11:"D",12:"A",13:"C",14:"B",15:"E",16:"D",17:"A",18:"C",19:"B",20:"E"} },
      { baslik: "Bölüm 2 — Mantık", cevaplar: {1:"B",2:"E",3:"A",4:"D",5:"C",6:"B",7:"E",8:"A",9:"D",10:"C"} }
    ]
  },
  {
    id: 17,
    ad: "AYT Biyoloji Konu Anlatımlı",
    sinif: "12", ders: "Biyoloji", yayinevi: "FDD", icon: "📓",
    uniteler: [
      { baslik: "Bölüm 1 — Ekosistem", cevaplar: {1:"A",2:"D",3:"B",4:"E",5:"C",6:"A",7:"D",8:"B",9:"E",10:"C",11:"A",12:"D",13:"B",14:"E",15:"C"} }
    ]
  },

  // ==================== ZAMBAK ====================
  {
    id: 18,
    ad: "Matematik 10. Sınıf Soru Bankası",
    sinif: "10", ders: "Matematik", yayinevi: "Zambak", icon: "📓",
    uniteler: [
      { baslik: "Bölüm 1 — Fonksiyonlar", cevaplar: {1:"C",2:"A",3:"E",4:"B",5:"D",6:"C",7:"A",8:"E",9:"B",10:"D",11:"C",12:"A",13:"E",14:"B",15:"D"} },
      { baslik: "Bölüm 2 — Trigonometri", cevaplar: {1:"E",2:"D",3:"A",4:"C",5:"B",6:"E",7:"D",8:"A",9:"C",10:"B",11:"E",12:"D",13:"A",14:"C",15:"B"} }
    ]
  },
  {
    id: 19,
    ad: "Fizik 11. Sınıf Soru Bankası",
    sinif: "11", ders: "Fizik", yayinevi: "Zambak", icon: "📓",
    uniteler: [
      { baslik: "Bölüm 1 — Kuvvet ve Hareket", cevaplar: {1:"B",2:"C",3:"D",4:"A",5:"E",6:"B",7:"C",8:"D",9:"A",10:"E",11:"B",12:"C",13:"D",14:"A",15:"E"} }
    ]
  },
  {
    id: 20,
    ad: "Kimya 9. Sınıf Soru Bankası",
    sinif: "9", ders: "Kimya", yayinevi: "Zambak", icon: "📓",
    uniteler: [
      { baslik: "Bölüm 1 — Madde ve Özellikleri", cevaplar: {1:"D",2:"B",3:"E",4:"C",5:"A",6:"D",7:"B",8:"E",9:"C",10:"A",11:"D",12:"B",13:"E",14:"C",15:"A"} }
    ]
  },

  // ==================== KOZA ====================
  {
    id: 21,
    ad: "TYT Türkçe Konu Anlatımlı",
    sinif: "12", ders: "Türkçe", yayinevi: "Koza", icon: "📓",
    uniteler: [
      { baslik: "Bölüm 1 — Sözcük Türleri", cevaplar: {1:"A",2:"C",3:"E",4:"B",5:"D",6:"A",7:"C",8:"E",9:"B",10:"D",11:"A",12:"C",13:"E",14:"B",15:"D"} },
      { baslik: "Bölüm 2 — Cümle Bilgisi", cevaplar: {1:"E",2:"B",3:"D",4:"A",5:"C",6:"E",7:"B",8:"D",9:"A",10:"C"} }
    ]
  },
  {
    id: 22,
    ad: "AYT Coğrafya Soru Bankası",
    sinif: "12", ders: "Coğrafya", yayinevi: "Koza", icon: "📓",
    uniteler: [
      { baslik: "Bölüm 1 — Türkiye'nin Coğrafi Özellikleri", cevaplar: {1:"C",2:"D",3:"A",4:"E",5:"B",6:"C",7:"D",8:"A",9:"E",10:"B",11:"C",12:"D",13:"A",14:"E",15:"B"} }
    ]
  },

  // ==================== SINAV ====================
  {
    id: 23,
    ad: "TYT Fizik Soru Bankası",
    sinif: "12", ders: "Fizik", yayinevi: "Sınav", icon: "📓",
    uniteler: [
      { baslik: "Bölüm 1 — Kuvvet ve Hareket", cevaplar: {1:"E",2:"A",3:"C",4:"B",5:"D",6:"E",7:"A",8:"C",9:"B",10:"D",11:"E",12:"A",13:"C",14:"B",15:"D",16:"E",17:"A",18:"C",19:"B",20:"D"} }
    ]
  },
  {
    id: 24,
    ad: "AYT Matematik Soru Bankası",
    sinif: "12", ders: "Matematik", yayinevi: "Sınav", icon: "📓",
    uniteler: [
      { baslik: "Bölüm 1 — Diziler ve Seriler", cevaplar: {1:"B",2:"D",3:"E",4:"A",5:"C",6:"B",7:"D",8:"E",9:"A",10:"C",11:"B",12:"D",13:"E",14:"A",15:"C"} },
      { baslik: "Bölüm 2 — Olasılık ve İstatistik", cevaplar: {1:"D",2:"C",3:"A",4:"E",5:"B",6:"D",7:"C",8:"A",9:"E",10:"B"} }
    ]
  },

  // ==================== HİPER ZEKA ====================
  {
    id: 25,
    ad: "TYT Kimya Soru Bankası",
    sinif: "12", ders: "Kimya", yayinevi: "Hiper Zeka", icon: "📓",
    uniteler: [
      { baslik: "Bölüm 1 — Atom ve Periyodik Tablo", cevaplar: {1:"A",2:"E",3:"C",4:"B",5:"D",6:"A",7:"E",8:"C",9:"B",10:"D",11:"A",12:"E",13:"C",14:"B",15:"D"} }
    ]
  },
  {
    id: 26,
    ad: "AYT Türk Dili ve Edebiyatı Soru Bankası",
    sinif: "12", ders: "Türk Dili ve Edebiyatı", yayinevi: "Hiper Zeka", icon: "📓",
    uniteler: [
      { baslik: "Bölüm 1 — Şiir Bilgisi", cevaplar: {1:"C",2:"B",3:"D",4:"A",5:"E",6:"C",7:"B",8:"D",9:"A",10:"E",11:"C",12:"B",13:"D",14:"A",15:"E"} },
      { baslik: "Bölüm 2 — Nesir Türleri", cevaplar: {1:"E",2:"A",3:"B",4:"D",5:"C",6:"E",7:"A",8:"B",9:"D",10:"C"} }
    ]
  },


  // ==================== ANKARA YAYINCILIK ====================
  // 8. Sınıf Güçlendiren Paragraf Soru Bankası — Eren Akyüz

  {
    id: 27,
    ad: "8. Sınıf Güçlendiren Paragraf Soru Bankası",
    sinif: "8",
    ders: "Türkçe",
    yayinevi: "Ankara Yayıncılık",
    icon: "📙",
    uniteler: [

      // --- PARÇADA ANLAM / PARAGRAFİN ANLAM YÖNÜ ---
      {
        baslik: "Test 1 / Paragrafın Anlam Yönü",
        cevaplar: {1:"C",2:"C",3:"D",4:"A",5:"C",6:"B",7:"A",8:"C",9:"C",10:"C",11:"B",12:"D"}
      },
      {
        baslik: "Test 2 / Paragrafın Anlam Yönü",
        cevaplar: {1:"B",2:"C",3:"B",4:"B",5:"D",6:"B",7:"C",8:"B",9:"C",10:"C",11:"B",12:"D"}
      },
      {
        baslik: "Test 3 / Paragrafın Anlam Yönü",
        cevaplar: {1:"B",2:"B",3:"A",4:"B",5:"D",6:"B",7:"C",8:"C",9:"D",10:"C",11:"C",12:"D"}
      },
      {
        baslik: "Test 4 / Paragrafın Anlam Yönü",
        cevaplar: {1:"B",2:"C",3:"B",4:"D",5:"C",6:"C",7:"B",8:"C",9:"A",10:"B",11:"C",12:"D"}
      },
      {
        baslik: "Test 5 / Paragrafın Anlam Yönü",
        cevaplar: {1:"A",2:"B",3:"B",4:"B",5:"C",6:"D",7:"C",8:"C",9:"D",10:"B",11:"C",12:"D"}
      },
      {
        baslik: "Test 6 / Paragrafın Anlam Yönü",
        cevaplar: {1:"B",2:"C",3:"B",4:"B",5:"C",6:"A",7:"C",8:"C",9:"C",10:"B",11:"C",12:"D"}
      },
      {
        baslik: "Test 7 / Paragrafın Anlam Yönü",
        cevaplar: {1:"C",2:"C",3:"D",4:"B",5:"C",6:"D",7:"B",8:"C",9:"B",10:"C",11:"C",12:"A"}
      },
      {
        baslik: "Test 8 / Paragrafın Anlam Yönü",
        cevaplar: {1:"C",2:"D",3:"A",4:"C",5:"C",6:"D",7:"B",8:"A",9:"B",10:"B",11:"C",12:"D"}
      },

      // --- PARÇADA ANLAM / PARAGRAFİN ANLAM YÖNÜ (Test 1-10, ikinci bölüm) ---
      {
        baslik: "Paragrafın Anlam Yönü — Test 1",
        cevaplar: {1:"B",2:"D",3:"B",4:"A",5:"D",6:"A",7:"B",8:"B",9:"B",10:"C"}
      },
      {
        baslik: "Paragrafın Anlam Yönü — Test 2",
        cevaplar: {1:"C",2:"A",3:"C",4:"B",5:"B",6:"A",7:"C",8:"D",9:"A",10:"C"}
      },
      {
        baslik: "Paragrafın Anlam Yönü — Test 3",
        cevaplar: {1:"D",2:"C",3:"C",4:"D",5:"D",6:"C",7:"C",8:"A",9:"A",10:"D"}
      },
      {
        baslik: "Paragrafın Anlam Yönü — Test 4",
        cevaplar: {1:"C",2:"B",3:"C",4:"D",5:"A",6:"B",7:"D",8:"A",9:"D",10:"B"}
      },
      {
        baslik: "Paragrafın Anlam Yönü — Test 5",
        cevaplar: {1:"B",2:"B",3:"B",4:"C",5:"D",6:"C",7:"C",8:"C",9:"D",10:"B"}
      },
      {
        baslik: "Paragrafın Anlam Yönü — Test 6",
        cevaplar: {1:"C",2:"B",3:"A",4:"B",5:"C",6:"C",7:"C",8:"C",9:"C",10:"B"}
      },
      {
        baslik: "Paragrafın Anlam Yönü — Test 7",
        cevaplar: {1:"B",2:"C",3:"A",4:"B",5:"A",6:"A",7:"C",8:"A",9:"A",10:"C"}
      },
      {
        baslik: "Paragrafın Anlam Yönü — Test 8",
        cevaplar: {1:"C",2:"D",3:"A",4:"C",5:"C",6:"C",7:"B",8:"C",9:"B",10:"B"}
      },
      {
        baslik: "Paragrafın Anlam Yönü — Test 9",
        cevaplar: {1:"C",2:"B",3:"C",4:"D",5:"A",6:"B",7:"C",8:"A",9:"C",10:"B"}
      },
      {
        baslik: "Paragrafın Anlam Yönü — Test 10",
        cevaplar: {1:"C",2:"D",3:"D",4:"D",5:"D",6:"C",7:"C",8:"C",9:"C",10:"A"}
      },

      // --- PARAGRAFİ İKİYE BÖLME ---
      {
        baslik: "Paragrafı İkiye Bölme",
        cevaplar: {1:"IV",2:"V",3:"III",4:"V"}
      },

      // --- PARAGRAFTA AKIŞI BOZAN CÜMLE ---
      {
        baslik: "Paragrafta Akışı Bozan Cümle",
        cevaplar: {1:"B",2:"I",3:"III",4:"I ve III"}
      },

      // --- PARAGRAFTA CÜMLELERİN YER DEĞİŞTİRMESİ ---
      {
        baslik: "Paragrafta Cümlelerin Yer Değiştirmesi — Test 1",
        cevaplar: {1:"II ve III",2:"I ve III",3:"II ve V",4:"I ve III"}
      },

      // --- GÖRSEL YORUM / GRAFİK / İNFOGRAFİK / YARATICI VE ANALİTİK DÜŞÜNME ---
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 1",
        cevaplar: {1:"A",2:"B",3:"C",4:"C",5:"B",6:"D"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 2",
        cevaplar: {1:"C",2:"B",3:"B",4:"C",5:"A",6:"B",7:"A",8:"B",9:"B",10:"D"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 3",
        cevaplar: {1:"C",2:"C",3:"B",4:"C",5:"A",6:"C",7:"B",8:"B",9:"C",10:"D"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 4",
        cevaplar: {1:"C",2:"C",3:"B",4:"A",5:"C",6:"D",7:"D",8:"C",9:"C",10:"B",11:"A"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 5",
        cevaplar: {1:"B",2:"C",3:"B",4:"D",5:"A",6:"C",7:"A",8:"C",9:"D"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 6",
        cevaplar: {1:"B",2:"B",3:"A",4:"C",5:"A",6:"B",7:"C",8:"A",9:"B"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 7",
        cevaplar: {1:"C",2:"D",3:"D",4:"C",5:"B",6:"C",7:"B",8:"A",9:"C",10:"B"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 8",
        cevaplar: {1:"B",2:"D",3:"C",4:"D",5:"C",6:"B",7:"D",8:"D",9:"B",10:"C"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 9",
        cevaplar: {1:"B",2:"D",3:"B",4:"B",5:"A",6:"B",7:"A",8:"A",9:"C",10:"D",11:"B",12:"C"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 10",
        cevaplar: {1:"B",2:"C",3:"D",4:"B",5:"D",6:"D",7:"A",8:"D",9:"C",10:"A",11:"D",12:"A"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 11",
        cevaplar: {1:"B",2:"A",3:"D",4:"A",5:"C",6:"C",7:"D",8:"C",9:"B",10:"A",11:"C"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 12",
        cevaplar: {1:"C",2:"D",3:"C",4:"C",5:"D",6:"A",7:"A",8:"A",9:"D",10:"A",11:"B",12:"C"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 13",
        cevaplar: {1:"C",2:"A",3:"D",4:"C",5:"C",6:"B",7:"A",8:"B",9:"C",10:"D",11:"C",12:"B"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 14",
        cevaplar: {1:"C",2:"A",3:"D",4:"B",5:"B",6:"C",7:"A",8:"B",9:"C"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 15",
        cevaplar: {1:"C",2:"B",3:"D",4:"D",5:"B",6:"D"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 16",
        cevaplar: {1:"D",2:"D",3:"B",4:"B",5:"D",6:"A",7:"D",8:"B",9:"D"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 17",
        cevaplar: {1:"B",2:"B",3:"D",4:"D",5:"A",6:"B",7:"D",8:"D",9:"B"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 18",
        cevaplar: {1:"A",2:"C",3:"C",4:"B",5:"D",6:"B",7:"B",8:"B",9:"C",10:"D"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 19",
        cevaplar: {1:"D",2:"B",3:"B",4:"C",5:"D",6:"A",7:"D",8:"B"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 20",
        cevaplar: {1:"B",2:"C",3:"D",4:"B",5:"C",6:"C",7:"A",8:"C"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 21",
        cevaplar: {1:"A",2:"A",3:"B",4:"C",5:"C",6:"C",7:"C",8:"D",9:"B"}
      },
      {
        baslik: "Görsel-Grafik-İnfografik Yorum Test 22",
        cevaplar: {1:"C",2:"D",3:"C",4:"C",5:"A",6:"C",7:"B",8:"B",9:"B",10:"A"}
      },

      // --- SÖZCÜĞÜN ANLAM ÖZELLİKLERİ ---
      {
        baslik: "Sözcüğün Anlam Özellikleri Test 1",
        cevaplar: {1:"B",2:"B",3:"B",4:"A",5:"D",6:"C",7:"C",8:"C",9:"A",10:"B",11:"D",12:"B"}
      },
      {
        baslik: "Sözcüğün Anlam Özellikleri Test 2",
        cevaplar: {1:"B",2:"C",3:"C",4:"D",5:"B",6:"C",7:"A",8:"C",9:"C",10:"B",11:"C",12:"D"}
      },
      {
        baslik: "Sözcüğün Anlam Özellikleri Test 3",
        cevaplar: {1:"B",2:"B",3:"C",4:"A",5:"D",6:"A",7:"C",8:"C",9:"C",10:"B",11:"D",12:"C"}
      },

      // --- SÖZCÜKTE ANLAM İLİŞKİLERİ ---
      {
        baslik: "Sözcükte Anlam İlişkileri Test 1",
        cevaplar: {1:"A",2:"B",3:"C",4:"D",5:"D",6:"C",7:"C",8:"B",9:"B",10:"B",11:"A",12:"B"}
      },
      {
        baslik: "Sözcükte Anlam İlişkileri Test 2",
        cevaplar: {1:"A",2:"B",3:"C",4:"D",5:"D",6:"C",7:"C",8:"B",9:"B",10:"B",11:"A",12:"C"}
      },
      {
        baslik: "Sözcükte Anlam İlişkileri Test 3",
        cevaplar: {1:"D",2:"B",3:"B",4:"D",5:"C",6:"C",7:"C",8:"D",9:"B",10:"B",11:"A",12:"C"}
      },

      // --- SÖZ GRUPLARINDA ANLAM ---
      {
        baslik: "Söz Gruplarında Anlam Test 1",
        cevaplar: {1:"A",2:"C",3:"B",4:"C",5:"C",6:"C",7:"B",8:"C",9:"C",10:"C",11:"B",12:"B"}
      },
      {
        baslik: "Söz Gruplarında Anlam Test 2",
        cevaplar: {1:"B",2:"A",3:"C",4:"C",5:"A",6:"B",7:"B",8:"D",9:"D",10:"B",11:"D",12:"A"}
      },

      // --- CÜMLELERİN ANLAM İLİŞKİLERİ ---
      {
        baslik: "Cümlede Anlam İlişkileri Test 4",
        cevaplar: {1:"B",2:"A",3:"B",4:"B",5:"A",6:"D",7:"C",8:"C",9:"A",10:"C",11:"D",12:"B"}
      },

      // --- PARAGRAFIN DİL VE ANLATIM YÖNÜ ---
      {
        baslik: "Paragrafın Dil ve Anlatım Yönü Test 1",
        cevaplar: {1:"B",2:"B",3:"A",4:"D",5:"D",6:"B",7:"D",8:"A",9:"C",10:"A",11:"C",12:"D"}
      },
      {
        baslik: "Paragrafın Dil ve Anlatım Yönü Test 2",
        cevaplar: {1:"B",2:"C",3:"B",4:"B",5:"B",6:"D",7:"C",8:"B",9:"C",10:"A",11:"D",12:"D"}
      },
      {
        baslik: "Paragrafın Dil ve Anlatım Yönü Test 3",
        cevaplar: {1:"C",2:"C",3:"A",4:"C",5:"B",6:"D",7:"A",8:"A",9:"B",10:"C",11:"A",12:"C"}
      },
      {
        baslik: "Paragrafın Dil ve Anlatım Yönü Test 4",
        cevaplar: {1:"A",2:"C",3:"A",4:"B",5:"B",6:"D",7:"A",8:"D",9:"B",10:"C",11:"A",12:"D"}
      },
      {
        baslik: "Paragrafın Dil ve Anlatım Yönü Test 5",
        cevaplar: {1:"C",2:"B",3:"B",4:"D",5:"A",6:"C",7:"B",8:"D",9:"A",10:"C",11:"A",12:"C"}
      },
      {
        baslik: "Paragrafın Dil ve Anlatım Yönü Test 6",
        cevaplar: {1:"C",2:"B",3:"A",4:"C",5:"A",6:"C",7:"B",8:"D",9:"A",10:"C",11:"A",12:"C"}
      },
      {
        baslik: "Paragrafın Dil ve Anlatım Yönü Test 7",
        cevaplar: {1:"C",2:"D",3:"A",4:"D",5:"D",6:"C",7:"A",8:"D",9:"A",10:"C",11:"D",12:"D"}
      },
      {
        baslik: "Paragrafın Dil ve Anlatım Yönü Test 8",
        cevaplar: {1:"C",2:"B",3:"B",4:"D",5:"A",6:"A",7:"A",8:"D",9:"A",10:"C",11:"A",12:"A"}
      },
      {
        baslik: "Paragrafın Dil ve Anlatım Yönü Test 9",
        cevaplar: {1:"C",2:"C",3:"D",4:"B",5:"B",6:"C",7:"D",8:"B",9:"A",10:"C",11:"D",12:"A"}
      },
      {
        baslik: "Paragrafın Dil ve Anlatım Yönü Test 10",
        cevaplar: {1:"C",2:"D",3:"A",4:"D",5:"D",6:"B",7:"C",8:"A",9:"C",10:"A",11:"D",12:"B"}
      },
      {
        baslik: "Paragrafın Dil ve Anlatım Yönü Test 11",
        cevaplar: {1:"C",2:"D",3:"C",4:"C",5:"C",6:"C",7:"B",8:"A",9:"C",10:"B",11:"C",12:"B"}
      },

      // --- BÖLÜM DEĞERLENDİRME ---
      {
        baslik: "Bölüm Değerlendirme 1",
        cevaplar: {1:"C",2:"C",3:"B",4:"C",5:"C",6:"D",7:"B",8:"A",9:"C",10:"A",11:"D",12:"B"}
      },
      {
        baslik: "Bölüm Değerlendirme 2",
        cevaplar: {1:"A",2:"C",3:"B",4:"C",5:"C",6:"D",7:"B",8:"A",9:"C",10:"B",11:"B",12:"B"}
      },
      {
        baslik: "Bölüm Değerlendirme 3",
        cevaplar: {1:"C",2:"A",3:"B",4:"B",5:"A",6:"D",7:"B",8:"D",9:"B",10:"C",11:"C",12:"C"}
      },
      {
        baslik: "Bölüm Değerlendirme 4",
        cevaplar: {1:"A",2:"D",3:"A",4:"D",5:"A",6:"D",7:"B",8:"D",9:"B",10:"C",11:"A",12:"B"}
      },
      {
        baslik: "Bölüm Değerlendirme 5",
        cevaplar: {1:"B",2:"C",3:"A",4:"B",5:"C",6:"A",7:"B",8:"B",9:"B",10:"A",11:"A",12:"B"}
      },
      {
        baslik: "Bölüm Değerlendirme 6",
        cevaplar: {1:"B",2:"C",3:"C",4:"D",5:"B",6:"D",7:"D",8:"A",9:"C",10:"A",11:"B",12:"B"}
      }
    ]
  }

];
