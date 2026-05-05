import { GraduationCap, Heart, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold">BelajarSMP</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Platform pembelajaran digital untuk siswa SMP yang menyenangkan, 
              interaktif, dan mudah diakses kapan saja, di mana saja.
            </p>
            <p className="text-slate-500 text-sm">
              Dibuat dengan <Heart className="w-3 h-3 inline text-red-400" /> untuk pendidikan Indonesia
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu Cepat</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="text-slate-400 hover:text-white transition-colors">Beranda</a>
              </li>
              <li>
                <a href="/pelajaran" className="text-slate-400 hover:text-white transition-colors">Daftar Pelajaran</a>
              </li>
              <li>
                <a href="/prestasi" className="text-slate-400 hover:text-white transition-colors">Prestasi</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Panduan Pengguna</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Kebijakan Privasi</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4" />
                <span>support@belajarsmp.id</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4" />
                <span>0812-3456-7890</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Jl. Pendidikan No. 123, Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            &copy; 2025 BelajarSMP. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
