export const bookingContent = {
  whatsappMessageIntro: "Halo Crosscut Barber, saya ingin mengajukan booking:",
  whatsappMessageOutro:
    "Jadwal ini merupakan preferensi dan menunggu konfirmasi.",
  formEyebrow: "Formulir Reservasi",
  formTitle: "Isi Data Booking",
  formDescription:
    "Lengkapi data dan preferensi kunjungan. Permintaan Anda akan diteruskan ke WhatsApp untuk dicek dan dikonfirmasi oleh barbershop.",
  policyTitle: "Ketentuan Reservasi",
  policyItems: [
    {
      title: "Jadwal pilihan",
      description:
        "Tanggal dan jam merupakan preferensi, bukan slot yang sudah tersedia.",
    },
    {
      title: "Menunggu konfirmasi",
      description:
        "Permintaan baru terkonfirmasi setelah mendapat balasan dari barbershop.",
    },
    {
      title: "Nomor WhatsApp aktif",
      description:
        "Pastikan nomor yang diisi dapat menerima balasan dari admin.",
    },
    {
      title: "Datang tepat waktu",
      description: "Mohon datang sesuai jadwal yang telah dikonfirmasi.",
    },
  ],
  timeOptions: [
    { value: "09:00", label: "09.00 WIB" },
    { value: "10:00", label: "10.00 WIB" },
    { value: "11:00", label: "11.00 WIB" },
    { value: "12:00", label: "12.00 WIB" },
    { value: "13:00", label: "13.00 WIB" },
    { value: "14:00", label: "14.00 WIB" },
    { value: "15:00", label: "15.00 WIB" },
    { value: "16:00", label: "16.00 WIB" },
    { value: "17:00", label: "17.00 WIB" },
    { value: "18:00", label: "18.00 WIB" },
    { value: "19:00", label: "19.00 WIB" },
    { value: "20:00", label: "20.00 WIB" },
    { value: "21:00", label: "21.00 WIB" },
  ],
  submitLabel: "Booking via WhatsApp",
  summary: {
    title: "Ringkasan pilihan",
    serviceLabel: "Layanan",
    durationLabel: "Durasi",
    scheduleLabel: "Jadwal pilihan",
    schedulePlaceholder: "Pilih tanggal dan jam",
    priceLabel: "Harga",
  },
  fields: {
    nameLabel: "Nama Lengkap",
    phoneLabel: "Nomor WhatsApp",
    phoneHint: "Masukkan nomor yang dapat menerima balasan.",
    namePlaceholder: "Contoh: Farhan Pratama",
    phonePlaceholder: "Contoh: 081234567890",
    serviceLabel: "Layanan",
    dateLabel: "Tanggal pilihan",
    dateHint: "Pilih tanggal kedatangan yang diinginkan.",
    timeLabel: "Jam pilihan",
    timePlaceholder: "Pilih jam yang diinginkan",
    timeHint: "Ini waktu pilihan, admin akan mengonfirmasi ketersediaannya.",
    notesLabel: "Catatan khusus (opsional)",
    notesPlaceholder:
      "Contoh: request kapster tertentu, preferensi gaya, atau permintaan khusus.",
  },
  confirmationNote:
    "WhatsApp terbuka. Permintaan ini belum menjadi booking terkonfirmasi sampai barbershop membalas.",
  header: {
    eyebrow: "Online Reservation",
    title: "Booking Jadwal Grooming Anda",
    description:
      "Pilih layanan dan waktu yang Anda inginkan. Permintaan jadwal akan diteruskan melalui WhatsApp dan menunggu konfirmasi.",
  },
};
