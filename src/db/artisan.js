import amed from "@/assets/artisan/JAR_AMED.png";
import krayan from "@/assets/artisan/JAR_KRAYAN.png";
import nipah from "@/assets/artisan/JAR_NIPAH.png";
import kusamba from "@/assets/artisan/JAR_KUSAMBA.png";
import kuwu from "@/assets/artisan/JAR_KUWU_I.png";
import tejakula from "@/assets/artisan/JAR_TEJAKULA_I.png";

import stepOne from "@/assets/artisan/tejakula/1.png";
import stepTwo from "@/assets/artisan/tejakula/2.png";
import stepThree from "@/assets/artisan/tejakula/3.png";
import stepFour from "@/assets/artisan/tejakula/4.png";
import stepFive from "@/assets/artisan/tejakula/5.png";
import stepSix from "@/assets/artisan/tejakula/6.png";
import stepSeven from "@/assets/artisan/tejakula/7.png";
import stepEight from "@/assets/artisan/tejakula/8.png";

import storyTejakulaImg from "@/assets/artisan/tejakula/STORY_TEJAKULA.jpg";
import storyAmedImg from "@/assets/artisan/amed/STORY_AMED.jpg";
import storyKusambaImg from "@/assets/artisan/kusamba/STORY_KUSAMBA.jpg";
import storyBledugKuwu from "@/assets/artisan/bledug_kuwu/STORY_BLEDUG_KUWU.jpg";
import storyKrayanImg from "@/assets/artisan/krayan/STORY_KRAYAN.jpg";
import storyNipahImg from "@/assets/artisan/nipah/STORY_NIPAH.jpg";

const artisan = [
  {
    id: 1,
    title: "Garam Amed",
    subtitle: "Mengenal Kristal Asin dari Karangasem",
    slug: "garam-amed",
    image: amed,
    storyImg: storyAmedImg,
    intro:
      "Amed menyimpan keunikan lainnya yang bisa dirasakan bagi semua orang belum mendapat kesempatan untuk mengunjunginya. Yaitu, mencicipi garam yang dihasilkan di sini. Garam di sini sangatlah unik, karena di buat dengan cara tradisional. Yuk, ketahui lebih lanjut tentang garam Amed!",
    description: [
      "Banyak yang mengenal pantai Amed di Karangasem, Bali adalah tempat dengan panorama yang Indah. Birunya hamparan lautan yang luas, diiringi dengan keindahan perbukitan, jadi daya tarik tersendiri bagi para wisatawan. Terlebih, area bawah laut di sini sangat Indah. Menjadikannya surga bagi para pecinta olahraga diving.",
      "Kehidupan petani garam di Amed adalah kisah tentang ketekunan dan warisan. Mereka hidup dengan mengandalkan matahari dan laut. Mereka menjalani hidup sederhana, bekerja dari pagi hingga sore di bawah terik matahari. Pekerjaan ini tidaklah mudah, mereka harus menghadapi cuaca yang tidak menentu, dengan musim hujan yang bisa mengacaukan hasil panen. Namun, mereka tetap berpegang teguh pada tradisi, menjaga agar pengetahuan leluhur tidak punah.",
      "Bagi mereka, garam bukan hanya komoditas, melainkan bagian dari identitas. Setiap butir garam adalah hasil dari kerja keras yang tulus dan ikatan batin dengan alam. Kehidupan mereka adalah cerminan dari kesederhanaan, keikhlasan, dan rasa syukur atas rezeki yang diberikan oleh alam. Mereka adalah penjaga tradisi yang sesungguhnya.",
    ],
    stories: [
      "Di ujung timur Pulau Bali, di sebuah desa bernama Amed, laut tak hanya menghadirkan ombak dan angin asin, tapi juga sebuah tradisi yang diwariskan dari leluhur, yaitu membuat garam dengan cara alami.",
      "Setiap pagi, saat matahari baru bangun dari balik Gunung Agung, para petani garam berjalan menuju pantai. Bahu mereka memanggul ember bambu, langkah kaki menjejak pasir hitam vulkanis yang hangat. Mereka bukan sekadar menjemput rezeki, tapi juga melanjutkan sebuah warisan ratusan tahun yang tidak boleh padam.",
      "Air laut yang jernih mereka angkat ke permukaan, lalu dituangkan ke hamparan pasir hitam. Pasir itu menyerap garam laut, menjadi “tanah asin” yang kelak diperas kembali hingga menghasilkan air laut pekat. Dari sanalah butiran garam Amed lahir—dalam wadah kayu kelapa, berkilau putih di bawah cahaya matahari.",
      "Bagi masyarakat Amed, setiap butir garam adalah hasil kerja keras yang panjang dan penuh cinta. Bayangkan, betapa panasnya terik matahari Bali di tengah hari. Tubuh mereka basah oleh keringat, tangan mereka terasa asin karena terus bersentuhan dengan laut. Namun, senyum tetap merekah, sebab mereka tahu garam ini bukan sekadar bumbu, melainkan juga identitas.",
      "Anak-anak kecil sering ikut bermain di tepi pantai, menggambar di pasir sambil menunggu orang tua mereka bekerja. Sesekali, mereka membantu mengangkat ember kecil berisi air laut, belajar pelan-pelan tentang tradisi yang kelak bisa mereka lanjutkan.",
      "Namun kehidupan ini penuh tantangan. Produksi garam sangat bergantung pada cuaca. Hujan deras bisa merusak semua pasir asin yang sudah dikeringkan. Harga garam pun tak selalu berpihak, kadang tak sebanding dengan peluh yang mereka keluarkan. Banyak generasi muda yang memilih merantau ke kota, mencari pekerjaan lain yang lebih pasti.",
      "Meski begitu, para petani garam Amed tetap bertahan. Mereka percaya, garam adalah hadiah dari laut. Garam ini membawa cerita leluhur, menyimpan doa, dan menjadi bagian dari wajah Bali yang sesungguhnya.",
      "Di malam hari, saat suara ombak hanya terdengar sebagai bisikan, petani garam duduk di beranda rumah sederhana mereka. Tangan mereka masih menyimpan rasa asin, tapi hati mereka penuh syukur. Karena esok hari, matahari akan kembali terbit, pasir hitam akan kembali hangat, dan tradisi akan terus hidup bersama butiran garam putih yang lahir dari laut.",
    ],
    productions: [
      {
        name: "Persiapan Lahan",
        image: stepOne,
        text: "Membersihkan dan meratakan pasir agar bebas dari kotoran serta siap menyerap air laut.",
      },
      {
        name: "Pengambilan Air Laut",
        image: stepTwo,
        text: "Petani membawa air laut ke tepi pantai menggunakan wadah bambu atau ember besar.",
      },
      {
        name: "Penggunaan Pasir Hitam",
        image: stepThree,
        text: "Air laut dituangkan ke pasir hitam pantai, agar pasir menyerap kandungan asin dari air.",
      },
      {
        name: "Pengeringan Pasir",
        image: stepFive,
        text: "Pasir asin dijemur di bawah terik matahari hingga kering.",
      },
      {
        name: "Ekstraksi Air Pekat",
        image: stepSix,
        text: "Pasir kering yang asin lalu dikumpulkan dan disaring untuk menghasilkan air asin pekat (air tua).",
      },
      {
        name: "Penguapan di Wadah Kayu Kelapa",
        image: stepSeven,

        text: "Air tua dituangkan ke dalam wadah tradisional dari batang kelapa yang dibelah. Di bawah sinar matahari, air ini menguap dan meninggalkan kristal garam putih.",
      },
      {
        name: "Panen Garam",
        image: stepEight,
        text: "Setelah 1–2 hari, kristal garam dipanen dengan tangan, menghasilkan butiran halus, putih bersih, dan kaya mineral.",
      },
    ],
    pros: [
      "Mengandung mineral penting seperti magnesium, kalsium, dan kalium, sehingga lebih sehat dibanding garam rafinasi pabrik.",
      "100% alami: tanpa mesin, tanpa bahan kimia, hanya mengandalkan laut, pasir, kayu kelapa, dan matahari.",
      "Garam Amed banyak dicari oleh koki profesional untuk masakan gourmet karena kualitas dan keunikannya.",
      "Produksi sangat terbatas, hanya bisa dilakukan saat musim kemarau → membuatnya termasuk garam bernilai tinggi dan langka.",
      "Proses tradisional ini telah diakui sebagai bagian dari warisan budaya tak benda Bali.",
      "Garam Amed memiliki butiran yang lebih kasar dan warna yang tidak seputih garam pabrik. Warna alaminya ini menunjukkan kekayaan mineral yang terkandung di dalamnya.",
    ],
    packaging: [
      "Grid dengan gambar jar 250g & 500g",
      "Tambahkan CTA “Pesan Sekarang”",
    ],
    location: "Amed, Karangasem, Bali, Indonesia",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: "Garam Kusamba",
    subtitle: "Mengenal Keunikan Rasa dari Klungkung",
    slug: "garam-kusamba",
    image: kusamba,
    storyImg: storyKusambaImg,
    intro:
      "Garam Kusamba dibuat dengan cara tradisional. Penggunaan wadah dari batang pohon kelapa yang usianya sudah puluhan tahun jadi keunikan tersendiri. Kehidupan petani garam di Kusamba adalah cerminan dari ketekunan dan kesetiaan terhadap tradisi. Bagi mereka, memproduksi garam bukan hanya soal pekerjaan, tetapi juga ritual suci yang diwariskan oleh leluhur. Yuk, kita ketahui bersama-sama lebih jauh tentang garam Kusamba!",
    description: [
      "Saat kita mengunjungi pesisir timur pulau Bali, akan kita dapati salah satu desa yang dipadati dengan kesibukan warganya dalam mencari ikan di laut atau memproduksi garam. Yaps, itulah Kusamba. Di salah satu pantainya, terlihat warga yang berlalu lalang, menimba air laut, lalu menyiramkannya ke pasir hitam, menyiapkan batang pohon kelapa, hingga menimbang butiran garam yang telah dipanen. Mereka bahu membahu, bekerja sama agar menghasilkan garam alami yang berkualitas.",
      "Yang unik dari hasil garam di sini adalah prosesnya yang masih sangat tradisional. Penggunaan wadah dari batang pohon kelapa yang usianya sudah puluhan tahun jadi keunikan tersendiri karena bisa menghasilkan rasa garam yang unik. Tak hanya menggunakan batang pohon kelapa, garam di sini juga ada yang menggunakan geomembrane sebagai wadah untuk menghasilkan kristal garam. Yuk, kita ketahui bersama-sama lebih jauh tentang garam Kusamba!",
    ],
    stories: [
      "Di pesisir timur Bali, di sebuah desa bernama Kusamba, laut biru tak hanya menghadirkan ombak, tapi juga sebuah aktivitas keseharian yang telah berakar sejak ratusan tahun lalu, yaitu membuat garam dengan cara tradisional.",
      "Pagi-pagi sekali, sebelum matahari memanjat tinggi, para petani garam Kusamba berjalan ke tepi pantai. Di pundak mereka tergantung ember-ember bambu, sementara langkah kaki menjejak pasir hitam yang dingin. Mereka tahu, laut akan selalu setia memberi rezeki, asalkan manusia juga setia menjaga dan menghormatinya.",
      "Air laut jernih ditimba, dibawa ke daratan, lalu dituang ke hamparan pasir hitam. Pasir itu menyerap asin laut, yang kemudian dikeringkan. Dari situlah, air pasir tersebut disaring dan diuapkan di atas wadah dari batang pohon kelapa, lahirlah kristal-kristal garam putih Kusamba, berkilau seperti permata kecil di bawah cahaya matahari Bali.",
      "Namun, di balik kilaunya, tersimpan cerita perjuangan. Membuat garam di Kusamba bukan pekerjaan ringan. Panas matahari yang menyengat, bahu terasa berat memikul air laut, atau bahkan tangan yang kerap terluka oleh butiran kasar garam. Hasilnya pun sering tidak menetap. Harga garam bisa naik-turun, sementara kebutuhan hidup tak pernah berhenti.",
      "Banyak anak muda Kusamba memilih merantau, mencari pekerjaan di kota atau pariwisata. Hanya sebagian kecil yang mau melanjutkan profesi leluhur ini. Para orang tua sering berkata, “garam bukan hanya soal makan, tapi soal warisan.” Dengan penuh cinta, mereka tetap mengajarkan teknik tradisional ini pada siapa pun yang mau belajar.",
      "Bagi petani Kusamba, garam adalah simbol kesabaran. Mereka tahu hasil kerja mereka tidak akan membuat kaya raya, tapi membuat mereka tetap teguh berdiri di tanah leluhur, menjaga identitas desa, dan menjaga hubungan dengan laut.",
      "Saat senja tiba, ombak perlahan tenang, dan para petani pulang dengan pikulan garam di pundak. Di wajah mereka ada lelah, tapi juga ada kepuasan. Sebab mereka tahu, setiap butir garam yang lahir dari laut Kusamba bukan sekadar rasa asin—melainkan cerita tentang ketekunan, warisan budaya, dan cinta tanpa syarat kepada alam.",
    ],
    productions: [
      {
        name: "Persiapan Lahan",
        image: stepOne,
        text: "Membersihkan dan meratakan pasir agar bebas dari kotoran serta siap menyerap air laut.",
      },
      {
        name: "Penyiraman",
        image: stepTwo,
        text: "Petani mengambil air laut dengan ember, lalu menyiramkannya di atas bedeng-bedeng pasir hitam yang telah disiapkan.",
      },
      {
        name: "Pengeringan Awal",
        image: stepThree,
        text: "Di bawah terik matahari, air laut akan menguap. Kandungan garam dan mineral akan tertinggal di permukaan pasir. Proses ini biasanya memakan waktu beberapa jam.",
      },
      {
        name: "Pengerikan",
        image: stepFour,
        text: "Setelah pasir mengering, lapisan atasnya yang sudah mengandung konsentrasi garam tinggi dikikis dengan hati-hati. Hasilnya adalah pasir yang kaya akan garam.",
      },
      {
        name: "Proses Kristalisasi Akhir",
        image: stepSix,
        text: "Pasir yang sudah dikikis ini kemudian dicampur dengan air laut kembali, lalu disaring. Air yang sudah tersaring dan sangat pekat akan dialirkan ke dalam palung-palung yang terbuat dari batang pohon kelapa yang dibelah.",
      },
      {
        name: "Pemanenan",
        image: stepSeven,

        text: "Di dalam palung, air garam akan mengkristal menjadi butiran-butiran garam. Setelah kering sempurna, garam ini dipanen dan siap untuk dijual.",
      },
    ],
    pros: [
      "Diproduksi tanpa menggunakan mesin atau bahan kimia tambahan.",
      "Kaya akan mineral alami seperti magnesium, kalsium dan kalium.",
      "Telah mendapatkan sertifikasi Indikasi Geografis, keaslian dan kualitasnya sebagai produk khas daerah terjamin.",
      "Memiliki rasa gurih yang lebih kompleks.",
      "Produksi terbatas karena sangat bergantung pada musim kemarau.",
      "Diakui sebagai warisan budaya tak benda Bali karena keunikan dan tradisinya.",
    ],
    packaging: [
      "Grid dengan gambar jar 250g & 500g",
      "Tambahkan CTA “Pesan Sekarang”",
    ],
    location: "Kusamba, Klungkung, Bali, Indonesia",
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "Garam Tejakula",
    subtitle: "Mengenal Butiran Garam Dari Pesisir Utara Bali",
    slug: "garam-tejakula",
    image: tejakula,
    storyImg: storyTejakulaImg,
    intro:
      "Garam Tejakula menjadi salah satu bukti warisan dari pesisir Utara Bali. Garam laut ini diproduksi secara tradisional oleh petani setempat. Memiliki rasa unik, ada rasa creamy dan gurih. Membuat siapapun yang mencicipinya akan langsung jatuh cinta. Yuk, kita ketahui lebih lanjut mengenai garam Tejakula di sini!",
    description: [
      "Di pesisir utara Bali, tepatnya di Tejakula kita akan mendapati hamparan pantai yang bukan sekedar laut tenang. Di sana, ada sekumpulan orang yang akan belalu lalang untuk memproduksi garam. Yaps, di sinilah garam Tejakula tercipta. Tak ada banyak mesin canggih. Produksi garam di sini masih menggunakan cara Tradisional.",
      "Uniknya, garam di sini memiliki rasa unik. Bukan cuma rasa asin, ada rasa creamy dan gurih. Membuat siapapun yang mencicipinya akan langsung jatuh cinta.",
    ],
    stories: [
      "Di ujung utara pulau Bali, di sebuah desa pesisir bernama Tejakula, laut biru membentang luas, ombaknya tenang, dan angin sejuk berhembus setiap waktu. Di sana, kehidupan masyarakatnya menyatu erat dengan laut, terutama melalui tradisi turun-temurun, yaitu membuat garam laut alami.",
      "Setiap hari sebelum fajar menyingsing, para petani garam Tejakula sudah memulai ritual harian mereka. Dengan tapak kaki dan lengan yang kokoh, mereka memikul air laut dalam ember kayu dan menumpahkannya ke ladang pasir hitam yang sudah dipadatkan. Pasir itu kemudian akan menyerap air laut, lalu dikumpulkan, disaring, dan ditaruh dalam wadah bambu untuk mengalirkan sari garamnya. Dari situlah lahir garam kristal putih yang rasanya sangat unik.",
      "Bagi pak Gunarsa, seorang petani garam yang sudah cukup berusia, pekerjaan ini bukan sekadar mencari nafkah. Baginya, garam ini adalah warisan leluhur yang harus terus dilestarikan agar keberadaannya tidak punah, di tengah maraknya pembangunan di lahan yang awalnya digunakan untuk membuat garam.",
      "Baginya, panas terik matahari yang memancar seharian adalah sebuah kebahagiaan yang ia dapati di hari itu. Walau tangannya legam, kulitnya terbakar matahari, kakinya dipenuhi dengan pecahnya kulit, tak menyurutkan kebahagiaan itu.",
      "Ia tahu betul suka dukanya menjadi petani garam selama puluhan tahun. Harga yang tidak menentu, sarana pemasaran yang minim, hingga sulitnya akses pengiriman garam ke kota-kota lain. Namun semua tantangan itu pak Gunarsa hadapi dengan lapang dada, karena yang terpenting baginya adalah menjaga tradisi agar anak cucunya tahu bahwa garam bukan hanya soal rasa, tapi juga tentang jati diri desa Tejakula.",
      "Di rumahnya, istri dari pak Gunarsa juga tak kalah besar perannya untuk mengasilkan garam Tejakula yang bersih. Terkadang, garam yang sudah jadi masih terdapat sedikit remahan kayu dan daun kering. Dengan tangan yang cekatan dan mata yang keli, ibu ….. Membersihkan garam-garam dari remahan kotoran tersebut satu persatu. Karena jasanya, kita semua bisa mendapatkan garam Tejakula yang bersih.",
      "Keinginan ibu …. Sederhana saja, bisa menyekolahkan anak-anaknya ke jenjang yang lebih tinggi dan memberikan segala kecukupan.",
      "Hidup sebagai petani garam di Tejakula memang berat: panas menyengat, tubuh lelah, hasil tak menentu. Namun di balik itu, ada sesuatu yang membuat mereka tetap bertahan, yaitu kebanggaan.",
      "Bagi masyarakat Tejakula, garam bukan sekadar kristal putih yang asin. Ia adalah cinta pada laut, warisan dari leluhur, dan ikatan yang menyatukan komunitas.",
      "Di setiap butir garam Tejakula, ada cerita: tentang ayah yang pekerja keras, ibu yang sabar, anak muda yang berjuang dengan harapan, dan sebuah desa yang menolak menyerah meski waktu terus berubah.",
      "Garam ini bukan hanya bumbu di meja makan dunia. Ia adalah kisah hidup yang lahir dari pasir, laut, dan hati manusia yang penuh keteguhan.",
    ],
    productions: [
      {
        name: "Persiapan Lahan",
        image: stepOne,
        text: "Membersihkan dan meratakan pasir agar bebas dari kotoran serta siap menyerap air laut.",
      },
      {
        name: "Pengambilan Air Laut",
        image: stepTwo,
        text: "Petani mengambil air laut menggunakan ember besar lalu dituangkan ke pasir hitam di tepi pantai.",
      },
      {
        name: "Penyaringan melalui Pasir",
        image: stepThree,
        text: "Pasir hitam berfungsi sebagai filter alami. Air yang dituangkan akan meresap dan membuat pasir menjadi asin.",
      },
      {
        name: "Pengumpulan Pasir Asin",
        image: stepFour,
        text: "Pasir asin dikumpulkan, lalu diperas atau dialirkan kembali untuk mendapatkan air laut yang lebih pekat (air tua).",
      },
      {
        name: "Penguapan di Tempat Khusus",
        image: stepSix,
        text: "Air asin pekat dituangkan ke wadah kayu lebar (sering dari batang kelapa), lalu dibiarkan mengering di bawah sinar matahari.",
      },
      {
        name: "Kristalisasi Garam",
        image: stepSeven,

        text: "Dalam 1–2 hari, terbentuk kristal garam putih bersih dengan butiran halus.",
      },
      {
        name: "Pembersihan",
        image: stepEight,
        text: "Garam yang sudah jadi akan dibersihkan dari sisa-sisa remah kayu atau daun kering menggunakan cara tradisional agar garam bisa terlihat lebih bersih.",
      },
    ],
    pros: [
      "100% Alami Tanpa Bahan Tambahan",
      "Kaya Akan Mineral Penting",
      "Diproduksi dengan Metode Tradisional",
      "Ramah Lingkuangan & Berkelanjutan",
    ],
    packaging: [
      "Grid dengan gambar jar 250g & 500g",
      "Tambahkan CTA “Pesan Sekarang”",
    ],
    location: "Tejakula, Buleleng, Bali, Indonesia",
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "Garam Bledug Kuwu",
    subtitle: "Mengenal Butiran Garam Dari Vulkanik Bumi",
    slug: "garam-bledug-kuwu",
    image: kuwu,
    storyImg: storyBledugKuwu,
    intro:
      "Bukan dari laut. Garam ini yang berasal dari letupan lumpur yang hanya berada di suatu kawasan di Desa Kuwu, Kecamatan Grobogan, Purwodadi, Jawa Tengah. Para petani garam Bledug Kuwu berusaha keras menjaga warisan ini untuk generasi sekarang dan yang akan datang. Yuk, kita ketahui lebih lanjut mengenai garam Bledug Kuwu di sini!",
    description: [
      "Jika kita biasanya mengenal garam itu berasal dari laut, namun berbeda dengan garam ini, karena berasal dari air letupan tanah. Yaps, inilah garam Bledug Kuwu. Kenapa dinamakan Bledug Kuwu? Karena garam ini dihasilkan dari fenomena letupan tanah yang berada di Desa Kuwu, Grobogan, Provinsi Jawa Tengah.",
      "Di sana ada suatu lokasi yang tanahnya menghasilkan letupan dari dalam tanah. Nah, karena suara letupan ini terdengar seperti ledakan, warga sekitar menyebutnya dengan kata ‘Bledug’. Dan karena fenomena ini ada di Desa Kuwu, oleh karena itu dinamakan Bledug Kuwu.",
      "Uniknya, dari letupan ini menghasilkan air yang rasanya asin. Dan oleh warga sekitar, air tersebut diolah menjadi garam. Yuk, ketahui lebih lanjut mengenai garam unik ini!",
    ],
    stories: [
      "Setiap pagi buta ketika matahari masih malu-malu untuk menampakkan wujudnya, warga sekitar sudah mulai bergerak. Mereka membawa ember, jerigen, atau alat sederhana lainnya untuk mengambil air asin dari kawah, beradu dengan genangan lumpur yang menyulitkan langkah. Dari air asin inilah, mereka menjemur, mengolah, lalu menghasilkan garam.",
      "Bagi para petani, garam ini bukan sekadar bumbu. Di dalamnya terdapat doa dan harapan agar anak-anak mereka bisa sekolah, agar dapur tetap mengepul dan agar masyarakat luas bisa menikmati lezatnya masakan yang dibumbui dengan garam Bledug Kuwu.",
      "Tak jauh dari kawah, terlihat Mbah Siyem, seorang nenek yang telah hidup lebih dari 70 tahun setiap harinya menghabiskan waktunya di sini. Tangannya yang keriput, dengan cekatan menimbang garam-garam yang sudah jadi untuk ia jual kepada para wisatawan. Dengan ramah, beliau menawarkan garam, dengan penuh harap bisa membawa hasil penjualan garam untuk anaknya yang sedang sakit, menunggu mbah siyem pulang ke rumah dalam keadaan sehat.",
      "Di sisi selatan kawah, terlihat seorang ibu muda bernama ibu Asih, yang setiap hari membantu suami mengangkut air asin ke dalam hamparan geomembrane. Panas terik matahari sudah menjadi teman sehari-hari. Baginya, kehidupan di Bledug Kuwu adalah pelajaran tentang kesabaran.",
      "“Kadang air asin banyak, kadang sedikit. Kadang tiba-tiba hujan sebelum garam kering. Semua serba nggak pasti. Tapi kami harus tetap berusaha dan sabar. Ini demi anak-anak” katanya dengan senyum yang tegar. Dalam setiap butir garam yang dihasilkan, terselip harapan sederhana: agar anaknya bisa tumbuh dengan kehidupan yang lebih baik daripada dirinya.",
      "Hidup di sekitar Bledug Kuwu memang tidak mudah. Panas menyengat, jalanan berdebu, dan hasil garam yang tidak selalu sebanding dengan tenaga yang dicurahkan. Namun, ada sesuatu yang membuat desa ini selalu bertahan: kebersamaan.",
      "Saat musim panen garam, semua yang ada di sana saling membantu. Mereka gotong royong menjemur, mengangkut, hingga menjual hasil panen. Tak ada yang benar-benar dibiarkan sendiri. Di desa ini, mereka percaya: “Kalau satu keluarga lapar, maka semua harus ikut berusaha.”",
      "Bagi sebagian orang luar, Bledug Kuwu hanyalah kawah lumpur yang meletup-letup. Namun bagi masyarakat sekitar, ia adalah sahabat tua, guru kehidupan, dan sumber penghidupan. Ia mengajarkan arti syukur, ketabahan, dan harapan.",
      "Di balik butir garam yang sederhana, tersimpan cerita-cerita penuh makna: tentang kakek yang setia bekerja meski renta, ibu yang tak kenal lelah demi anaknya, dan remaja yang menatap masa depan dengan mimpi besar.",
      "Bledug Kuwu adalah bukti bahwa keindahan hidup tak selalu lahir dari kemewahan, melainkan dari hati yang tabah dan kebersamaan yang tulus.",
    ],
    productions: [
      {
        name: "Persiapan Lahan",
        image: stepOne,
        text: "Membersihkan dan meratakan bedeng agar bebas dari kotoran serta siap menyerap air asin.",
      },
      {
        name: "Penyaringan Air Asin",
        image: stepTwo,
        text: "Air asin yang keluar dari Bledug Kuwu disalurkan ke kolam penampungan. Air ini kemudian disaring untuk membersihkan lumpur dan kotoran.",
      },
      {
        name: "Penjemuran",
        image: stepThree,
        text: "Air asin yang sudah bersih lalu dipindahkan ke kolam penjemuran yang lebih dangkal. Di sini, air dibiarkan menguap secara alami di bawah sinar matahari.",
      },
      {
        name: "Pembentukan Kristal Garam",
        image: stepFour,
        text: "Setelah air menguap, kristal garam mulai terbentuk di dasar kolam. Proses ini memakan waktu beberapa hari, tergantung intensitas terik matahari.",
      },
      {
        name: "Pembersihan & Panen",
        image: stepSix,
        text: "Kemudian, garam yang sudah dipanen dicuci dengan air asin bersih untuk menghilangkan sisa-sisa kotoran. Setelah itu, garam dijemur kembali hingga benar-benar kering untuk dijual.",
      },
    ],
    pros: [
      "Diproses secara tradisional, tanpa bahan tambahan.",
      "Kaya akan kandungan mineral alami (natrium klorida, magnesium, kalsium, dan kalium).",
      "Memiliki rasa asin yang lembut & gurih.",
      "Ramah Lingkungan",
    ],
    packaging: [
      "Grid dengan gambar jar 250g & 500g",
      "Tambahkan CTA “Pesan Sekarang”",
    ],
    location: "Desa Kuwu, Grobogan, Purwodadi, Jawa Tengah, Indonesia",
    createdAt: new Date(),
  },
  {
    id: 5,
    title: "Garam Krayan",
    subtitle: "Mengenal Butiran Garam Dari Pesisir Utara Bali",
    slug: "garam-krayan",
    image: krayan,
    storyImg: storyKrayanImg,
    intro:
      "Garam ini tidak berasal dari laut, melainkan dari sumber air asin alami yang muncul dari perut bumi di tengah pegunungan. Masyarakat Dayak Lundayeh, suku asli Krayan telah memproduksi garam ini sejak ratusan tahun. Yuk, kita ketahui bersama-sama lebih jauh tentang garam Krayan!",
    description: [
      "Garam Krayan berasal dari wilayah pegunungan Krayan, di Kabupaten Nunukan, Kalimantan Utara, tepat di perbatasan antara Indonesia dan Malaysia (Sabah). Wilayah ini merupakan bagian dari Pegunungan Borneo bagian utara, yang dulu — jutaan tahun lalu — merupakan dasar laut. Ketika daratan ini terangkat karena aktivitas tektonik, endapan mineral laut purba tertinggal di bawah tanah dan melahirkan sumber air asin alami.",
      "Masyarakat Dayak Lundayeh, penduduk asli Krayan, telah memproduksi garam ini secara turun-temurun selama lebih dari seratus tahun. Tradisi ini bukan hanya kegiatan ekonomi, tapi juga bagian dari identitas budaya mereka.",
    ],
    stories: [
      "Di perbatasan sunyi Kalimantan Utara, jauh dari riuhnya kota, terhampar barisan hijaunya Pegunungan Krayan. Di sanalah, masyarakat Dayak Lundayeh merajut kehidupan mereka dari alam, dari air, tanah, dan warisan leluhur yang masih dijaga dengan sepenuh hati.",
      "Dari perut bumi pegunungan ini, muncul sumber air asin alami — jejak laut purba yang tertinggal jutaan tahun lalu. Air asin itu tak berasal dari samudra, tapi dari lapisan tanah yang menyimpan kisah masa lalu bumi. Dari sanalah Garam Krayan lahir.",
      "Prosesnya sederhana, namun sarat makna. Air asin alami diambil dari sumur tradisional, lalu direbus perlahan di atas tungku kayu hingga seluruh air menguap, menyisakan kristal garam putih keabu-abuan. Setiap butir garam adalah hasil dari ketekunan, waktu, dan kehangatan api yang dijaga sepanjang hari. Tidak ada mesin, tidak ada bahan kimia. Hanya tangan-tangan sabar yang menjaga tradisi agar tetap hidup.",
      "Garam Krayan bukan sekadar asin. Ia membawa rasa gurih yang lembut, menonjolkan keaslian bahan masakan tanpa menutupi cita rasanya. Setiap taburan menghadirkan aroma alam pegunungan, udara bersih, dan ketenangan yang lahir dari harmoni dengan bumi.",
      "Bagi masyarakat Krayan, garam ini adalah simbol persaudaraan dan kesejahteraan. Dahulu, Garam Krayan menjadi alat tukar lintas batas dengan Malaysia, bukti betapa berharganya garam ini, bukan hanya karena rasanya, tapi karena nilai sosial yang terkandung di dalamnya.",
      "Mengandung mineral alami seperti magnesium, kalsium, dan kalium, Garam Krayan dikenal menyehatkan tubuh, menjaga keseimbangan elektrolit, dan membantu proses detoks alami. Rasanya alami, manfaatnya nyata, dan kisahnya begitu manusiawi.",
      "LaBumbu menghadirkan Garam Krayan sebagai bagian dari upaya melestarikan warisan kuliner Nusantara dan memberdayakan petani lokal. Karena kami percaya, setiap bumbu menyimpan cerita, dan dalam setiap cerita, selalu ada rasa yang menyatukan.",
    ],
    productions: [
      {
        name: "Persiapan Lahan",
        image: stepOne,
        text: "Membersihkan dan meratakan lahan agar bebas dari kotoran serta siap menyerap air asin.",
      },
      {
        name: "Pengambilan Air Asin Alami",
        image: stepTwo,
        text: "Air diambil dari sumur asin menggunakan wadah bambu atau jerigen tradisional.",
      },
      {
        name: "Perebusan Air Asin",
        image: stepThree,
        text: "Air asin direbus dalam kuali besar di atas tungku kayu bakar selama berjam-jam hingga airnya menguap.",
      },
      {
        name: "Kristalisasi Garam",
        image: stepFour,
        text: "Setelah air menguap, tersisa endapan kristal garam berwarna putih keabu-abuan.",
      },
      {
        name: "Pengeringan dan Pencetakan",
        image: stepSix,
        text: "Garam kemudian dikeringkan, dicetak dalam bentuk batangan atau bongkahan kecil — sering disebut “Garam Gunung”.",
      },
      {
        name: "Penyimpanan Alami",
        image: stepSeven,

        text: "Garam yang sudah jadi disimpan di wadah anyaman bambu, menjaga kelembapan dan aromanya tetap khas.",
      },
    ],
    pros: [
      "Diproduksi secara tradisional tanpa bahan kimia.",
      "Mengandung mineral tinggi seperti magnesium, kalsium dan kalium.",
      "Memiliki rasa gurih & lembut, tidak terlalu asin seperti garam industri.",
      "Menjadi simbol budaya dan ekonomi masyarakat Dayak lundayeh.",
      "Memiliki nilai spiritual & sosial yang dianggap sebagai simbol kesejahteraan & persaudaraan.",
    ],
    packaging: [
      "Grid dengan gambar jar 250g & 500g",
      "Tambahkan CTA “Pesan Sekarang”",
    ],
    location: "Pegunungan Krayan, Nunukan, Kalimantan Utara, Indonesia",
    createdAt: new Date(),
  },
  {
    id: 5,
    title: "Garam Nipah",
    subtitle: "Mengenal Butiran Garam Dari Pesisir Utara Bali",
    slug: "garam-nipah",
    image: nipah,
    storyImg: storyNipahImg,
    intro:
      "Garam Nipah diproduksi oleh masyarakat adat di wilayah pesisir dan rawa-rawa Papua yang memiliki hutan mangrove yang luas. Garam ini adalah solusi tradisional bagi masyarakat yang tinggal jauh di pedalaman atau di wilayah rawa yang sulit mengakses sumber garam murni. Mereka memanfaatkan kekayaan alam terdekat, yaitu Pohon Nipah (Nypa fruticans). Yuk, ketahui lebih lanjut tentang Garam Nipah dari Papua!",
    description: [
      "Garam Nipah berasal dari getah atau nira pohon nipah (Nypa fruticans) — sejenis palma yang tumbuh di kawasan pesisir dan rawa payau. Masyarakat di beberapa wilayah Indonesia, terutama di wilayah Sorong, Papua Barat Daya sudah memanfaatkan nira nipah sebagai bahan pangan, salah satunya untuk membuat garam.",
      "Konon, tradisi membuat garam dari nira nipah telah diwariskan sejak masa kerajaan pesisir, ketika masyarakat memanfaatkan apa pun yang tersedia di alam, termasuk pohon nipah yang melimpah di tepi sungai dan muara. Inilah yang melahirkan Garam Nipah — garam dari hasil air kehidupan pepohonan, bukan dari air laut.",
    ],
    stories: [
      "Di antara heningnya rawa dan bisikan angin laut, tumbuhlah pohon-pohon nipah yang menjulang tenang di tepian air payau. Dari batang bunganya yang disadap dengan hati-hati, mengalir nira manis — air kehidupan yang menyimpan rahasia alam pesisir. Dari sinilah Garam Nipah lahir, bukan dari laut, melainkan dari pohon yang menyaring garam dari tanah.",
      "Masyarakat Sorong, Papua Barat Daya telah lama menjaga tradisi ini. Mereka menampung nira dari pelepah nipah, lalu merebusnya perlahan di atas tungku kayu. Jam demi jam, air nira itu menguap, meninggalkan endapan lembut berwarna keabu-abuan hingga menjadi garam yang membawa cerita tentang kesabaran dan ketekunan.",
      "Tak ada bahan kimia. Tak ada mesin. Hanya panas api, aroma nira, dan tangan-tangan yang bekerja dengan hati.",
      "Garam Nipah punya rasa asin yang lembut, dengan sentuhan manis alami dari nira. Ia menghadirkan keseimbangan rasa yang menenangkan, seperti laut yang bertemu sungai, atau asin yang bertemu manis dalam satu harmoni. Setiap butir garam ini membawa rasa kehidupan dari pohon-pohon yang tumbuh di pertemuan air asin dan tawar.",
      "Tak seperti tambak garam yang luas atau industri besar, Garam Nipah lahir dari ekosistem mangrove yang dijaga. Pohon nipah membantu mencegah abrasi dan menyerap karbon — sementara nira yang diambil tak merusak tumbuhannya. Inilah bentuk hubungan selaras antara manusia dan alam, di mana rasa, manfaat, dan keberlanjutan saling menyatu.",
      "Mengandung mineral alami seperti magnesium, kalium, dan kalsium, Garam Nipah dikenal rendah natrium dan baik untuk tubuh. Rasa lembutnya menambah harmoni di masakan tanpa membuatnya berlebihan. Lebih dari itu, setiap butirnya adalah hasil dari cinta masyarakat pesisir terhadap alam dan kehidupan sederhana yang mereka rawat.",
      "LaBumbu menghadirkan Garam Nipah sebagai bentuk penghormatan pada kearifan lokal dan alam Indonesia. Karena kami percaya, rasa terbaik tak hanya lahir dari dapur, tapi juga dari tangan-tangan yang mencintai bumi.",
    ],
    productions: [
      {
        name: "Persiapan Lahan",
        image: stepOne,
        text: "Membersihkan dan meratakan lahan agar bebas dari kotoran serta siap menyerap air asin.",
      },
      {
        name: "Pengambilan Air Asin Alami",
        image: stepTwo,
        text: "Air diambil dari sumur asin menggunakan wadah bambu atau jerigen tradisional.",
      },
      {
        name: "Perebusan Air Asin",
        image: stepThree,
        text: "Air asin direbus dalam kuali besar di atas tungku kayu bakar selama berjam-jam hingga airnya menguap.",
      },
      {
        name: "Kristalisasi Garam",
        image: stepFour,
        text: "Setelah air menguap, tersisa endapan kristal garam berwarna putih keabu-abuan.",
      },
      {
        name: "Pengeringan dan Pencetakan",
        image: stepSix,
        text: "Garam kemudian dikeringkan, dicetak dalam bentuk batangan atau bongkahan kecil — sering disebut “Garam Gunung”.",
      },
      {
        name: "Penyimpanan Alami",
        image: stepSeven,

        text: "Garam yang sudah jadi disimpan di wadah anyaman bambu, menjaga kelembapan dan aromanya tetap khas.",
      },
    ],
    pros: [
      "Diproduksi secara tradisional tanpa bahan kimia.",
      "Mengandung mineral tinggi seperti magnesium, kalsium dan kalium.",
      "Memiliki rasa gurih & lembut, tidak terlalu asin seperti garam industri.",
      "Menjadi simbol budaya dan ekonomi masyarakat Dayak lundayeh.",
      "Memiliki nilai spiritual & sosial yang dianggap sebagai simbol kesejahteraan & persaudaraan.",
    ],
    packaging: [
      "Grid dengan gambar jar 250g & 500g",
      "Tambahkan CTA “Pesan Sekarang”",
    ],
    location: "Sorong, Papua Barat Daya, Indonesia",
    createdAt: new Date(),
  },
];

export default artisan;
