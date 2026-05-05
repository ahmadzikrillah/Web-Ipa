export interface Material {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  content?: string;
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  bgGradient: string;
  materials: Material[];
  progress: number;
  totalMaterials: number;
  icon: string;
}

export const subjects: Subject[] = [
  {
    id: "matematika",
    name: "Matematika",
    description: "Pelajari bilangan, geometri, aljabar, dan statistika dengan cara yang menyenangkan!",
    image: "/math-subject.jpg",
    color: "#2563EB",
    bgGradient: "from-blue-500 to-cyan-400",
    icon: "📐",
    progress: 35,
    totalMaterials: 12,
    materials: [
      {
        id: "mat-1",
        title: "Bilangan Bulat",
        description: "Memahami operasi penjumlahan, pengurangan, perkalian, dan pembagian bilangan bulat.",
        duration: "30 menit",
        completed: true,
        content: "Bilangan bulat adalah bilangan yang terdiri dari bilangan positif, nol, dan bilangan negatif. Operasi pada bilangan bulat mengikuti aturan tertentu."
      },
      {
        id: "mat-2",
        title: "Pecahan",
        description: "Belajar mengenal, menyederhanakan, dan mengoperasikan pecahan.",
        duration: "35 menit",
        completed: true,
        content: "Pecahan terdiri dari pembilang dan penyebut. Kita dapat melakukan operasi penjumlahan, pengurangan, perkalian, dan pembagian pada pecahan."
      },
      {
        id: "mat-3",
        title: "Persamaan Linear",
        description: "Memahami konsep persamaan linear satu variabel dan cara menyelesaikannya.",
        duration: "40 menit",
        completed: false,
        content: "Persamaan linear adalah persamaan yang variabelnya berpangkat satu. Bentuk umumnya adalah ax + b = c."
      },
      {
        id: "mat-4",
        title: "Teorema Pythagoras",
        description: "Mempelajari hubungan sisi-sisi pada segitiga siku-siku.",
        duration: "25 menit",
        completed: false,
        content: "Teorema Pythagoras menyatakan bahwa pada segitiga siku-siku, kuadrat hipotenusa sama dengan jumlah kuadrat kedua sisi lainnya."
      },
      {
        id: "mat-5",
        title: "Statistika Dasar",
        description: "Mengenal mean, median, modus, dan penyajian data dalam bentuk tabel dan diagram.",
        duration: "30 menit",
        completed: false,
        content: "Statistika membantu kita mengumpulkan, mengolah, dan menyajikan data secara efektif."
      }
    ]
  },
  {
    id: "ipa",
    name: "Ilmu Pengetahuan Alam",
    description: "Jelajahi dunia sains melalui materi biologi, fisika, dan kimia yang menarik!",
    image: "/science-subject.jpg",
    color: "#16A34A",
    bgGradient: "from-green-500 to-emerald-400",
    icon: "🔬",
    progress: 20,
    totalMaterials: 15,
    materials: [
      {
        id: "ipa-1",
        title: "Sel dan Organisme",
        description: "Mengenal struktur sel sebagai unit terkecil makhluk hidup.",
        duration: "35 menit",
        completed: true,
        content: "Sel adalah unit terkecil kehidupan. Semua makhluk hidup tersusun dari satu atau lebih sel."
      },
      {
        id: "ipa-2",
        title: "Sistem Pencernaan",
        description: "Memahami bagaimana tubuh mengolah makanan menjadi energi.",
        duration: "40 menit",
        completed: false,
        content: "Sistem pencernaan manusia terdiri dari mulut, kerongkongan, lambung, usus halus, usus besar, dan anus."
      },
      {
        id: "ipa-3",
        title: "Gaya dan Gerak",
        description: "Mempelajari hukum Newton dan konsep kecepatan serta percepatan.",
        duration: "30 menit",
        completed: false,
        content: "Gaya adalah sesuatu yang dapat menyebabkan benda bergerak, berhenti, atau berubah arah."
      },
      {
        id: "ipa-4",
        title: "Perubahan Wujud Benda",
        description: "Mengamati perubahan wujud zat dari padat, cair, dan gas.",
        duration: "25 menit",
        completed: false,
        content: "Zat dapat berubah wujud melalui proses mencair, membeku, menguap, mengembun, menyublim, dan mengkristal."
      },
      {
        id: "ipa-5",
        title: "Ekosistem dan Lingkungan",
        description: "Memahami hubungan antara makhluk hidup dan lingkungannya.",
        duration: "35 menit",
        completed: false,
        content: "Ekosistem terdiri dari komponen biotik dan abiotik yang saling berinteraksi."
      }
    ]
  },
  {
    id: "ips",
    name: "Ilmu Pengetahuan Sosial",
    description: "Kenali sejarah, geografi, ekonomi, dan kehidupan bermasyarakat di Indonesia!",
    image: "/ips-subject.jpg",
    color: "#EA580C",
    bgGradient: "from-orange-500 to-amber-400",
    icon: "🗺️",
    progress: 50,
    totalMaterials: 10,
    materials: [
      {
        id: "ips-1",
        title: "Letak dan Luas Indonesia",
        description: "Mempelajari kondisi geografis Indonesia sebagai negara maritim.",
        duration: "25 menit",
        completed: true,
        content: "Indonesia terletak di antara dua benua dan dua samudra, dengan luas wilayah sekitar 5 juta km²."
      },
      {
        id: "ips-2",
        title: "Sejarah Kerajaan Hindu-Buddha",
        description: "Mengenal kerajaan-kerajaan besar di Nusantara pada masa lampau.",
        duration: "35 menit",
        completed: true,
        content: "Kerajaan Sriwijaya dan Majapahit adalah dua kerajaan besar yang pernah berjaya di Nusantara."
      },
      {
        id: "ips-3",
        title: "Pembagian Administrasi",
        description: "Memahami struktur pemerintahan dari pusat hingga daerah.",
        duration: "30 menit",
        completed: true,
        content: "Indonesia dibagi menjadi provinsi, kabupaten/kota, kecamatan, dan desa/kelurahan."
      },
      {
        id: "ips-4",
        title: "Kegiatan Ekonomi",
        description: "Mengenal berbagai sektor ekonomi yang mendukung kehidupan masyarakat.",
        duration: "30 menit",
        completed: false,
        content: "Kegiatan ekonomi meliputi produksi, distribusi, dan konsumsi barang serta jasa."
      },
      {
        id: "ips-5",
        title: "Keragaman Sosial Budaya",
        description: "Menghargai keberagaman suku, agama, dan budaya di Indonesia.",
        duration: "25 menit",
        completed: false,
        content: "Indonesia memiliki lebih dari 1.300 suku bangsa dengan beragam budaya dan bahasa daerah."
      }
    ]
  },
  {
    id: "bahasa-indonesia",
    name: "Bahasa Indonesia",
    description: "Tingkatkan kemampuan membaca, menulis, berbicara, dan mendengar dengan baik!",
    image: "/bindo-subject.jpg",
    color: "#7C3AED",
    bgGradient: "from-violet-500 to-purple-400",
    icon: "📖",
    progress: 60,
    totalMaterials: 10,
    materials: [
      {
        id: "bi-1",
        title: "Teks Deskripsi",
        description: "Belajar menulis teks yang menggambarkan objek secara detail.",
        duration: "25 menit",
        completed: true,
        content: "Teks deskripsi adalah teks yang menggambarkan suatu objek, tempat, atau peristiwa secara rinci."
      },
      {
        id: "bi-2",
        title: "Teks Narasi",
        description: "Memahami struktur dan kaidah kebahasaan teks cerita.",
        duration: "30 menit",
        completed: true,
        content: "Teks narasi menceritakan suatu peristiwa atau rangkaian peristiwa secara kronologis."
      },
      {
        id: "bi-3",
        title: "Teks Prosedur",
        description: "Menyusun langkah-langkah melakukan sesuatu secara sistematis.",
        duration: "25 menit",
        completed: true,
        content: "Teks prosedur memberikan petunjuk langkah demi langkah untuk melakukan suatu aktivitas."
      },
      {
        id: "bi-4",
        title: "Puisi dan Pantun",
        description: "Mengenal ciri-ciri puisi baru dan pantun tradisional.",
        duration: "30 menit",
        completed: false,
        content: "Puisi adalah karya sastra yang menggunakan bahasa kiasan dan irama tertentu."
      },
      {
        id: "bi-5",
        title: "Kalimat Efektif",
        description: "Belajar menyusun kalimat yang jelas, tepat, dan komunikatif.",
        duration: "20 menit",
        completed: false,
        content: "Kalimat efektif memiliki ciri kejelasan, kelogisan, kesederhanaan, keparalelan, dan kehematan."
      }
    ]
  },
  {
    id: "bahasa-inggris",
    name: "Bahasa Inggris",
    description: "Kuasai bahasa internasional dengan materi listening, speaking, reading, dan writing!",
    image: "/english-subject.jpg",
    color: "#DC2626",
    bgGradient: "from-red-500 to-rose-400",
    icon: "🌍",
    progress: 15,
    totalMaterials: 12,
    materials: [
      {
        id: "en-1",
        title: "Greetings and Introductions",
        description: "Belajar menyapa dan memperkenalkan diri dalam bahasa Inggris.",
        duration: "20 menit",
        completed: true,
        content: "Greetings are expressions used when meeting someone. Common greetings include 'Hello', 'Good morning', and 'How are you?'"
      },
      {
        id: "en-2",
        title: "Simple Present Tense",
        description: "Memahami penggunaan tenses untuk kegiatan sehari-hari.",
        duration: "30 menit",
        completed: false,
        content: "Simple Present Tense digunakan untuk menyatakan kebiasaan, fakta umum, atau keadaan yang bersifat permanen."
      },
      {
        id: "en-3",
        title: "Descriptive Text",
        description: "Menulis teks yang menggambarkan orang, tempat, atau benda.",
        duration: "25 menit",
        completed: false,
        content: "Descriptive text is a text that describes a particular person, place, or thing in detail."
      },
      {
        id: "en-4",
        title: "Narrative Text",
        description: "Memahami dan menulis cerita dengan struktur orientation, complication, dan resolution.",
        duration: "35 menit",
        completed: false,
        content: "Narrative text tells a story with a sequence of events, usually involving characters and a plot."
      },
      {
        id: "en-5",
        title: "Asking and Giving Opinion",
        description: "Belajar cara meminta dan memberikan pendapat dengan sopan.",
        duration: "20 menit",
        completed: false,
        content: "Common phrases for asking opinion: 'What do you think about...?' 'Do you have any opinion on...?'"
      }
    ]
  },
  {
    id: "ppkn",
    name: "PPKn",
    description: "Membangun karakter bangsa dengan memahami hak, kewajiban, dan nilai Pancasila!",
    image: "/ppkn-subject.jpg",
    color: "#0891B2",
    bgGradient: "from-cyan-600 to-teal-400",
    icon: "🇮🇩",
    progress: 40,
    totalMaterials: 8,
    materials: [
      {
        id: "pkn-1",
        title: "Pancasila sebagai Ideologi",
        description: "Memahami makna dan nilai-nilai luhur Pancasila dalam kehidupan bermasyarakat.",
        duration: "30 menit",
        completed: true,
        content: "Pancasila adalah ideologi dan dasar negara Indonesia yang terdiri dari lima sila."
      },
      {
        id: "pkn-2",
        title: "Hak dan Kewajiban Warga Negara",
        description: "Mengenal hak serta kewajiban sebagai warga negara Indonesia.",
        duration: "25 menit",
        completed: true,
        content: "Setiap warga negara memiliki hak dan kewajiban yang harus dijalankan secara seimbang."
      },
      {
        id: "pkn-3",
        title: "Bhineka Tunggal Ika",
        description: "Menghargai keberagaman sebagai kekuatan persatuan bangsa.",
        duration: "25 menit",
        completed: false,
        content: "Bhineka Tunggal Ika berarti berbeda-beda tetapi tetap satu, menggambarkan persatuan dalam keberagaman."
      },
      {
        id: "pkn-4",
        title: "Demokrasi di Indonesia",
        description: "Memahami sistem pemerintahan dan partisipasi warga negara.",
        duration: "30 menit",
        completed: false,
        content: "Indonesia menganut sistem demokrasi pancasila yang mengedepankan musyawarah mufakat."
      }
    ]
  }
];

export function getSubjectById(id: string): Subject | undefined {
  return subjects.find(s => s.id === id);
}
