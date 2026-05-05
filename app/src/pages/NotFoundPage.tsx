import { Button } from "@/components/ui/button";
import { Home, BookOpen } from "lucide-react";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-4">🔍</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">404</h1>
        <h2 className="text-xl font-semibold text-slate-700 mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-slate-500 mb-8">
          Sepertinya halaman yang kamu cari tidak tersedia. Yuk kembali ke beranda atau lihat daftar pelajaran!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl px-6">
              <Home className="w-4 h-4 mr-2" />
              Beranda
            </Button>
          </Link>
          <Link to="/pelajaran">
            <Button variant="outline" className="rounded-xl px-6 border-2">
              <BookOpen className="w-4 h-4 mr-2" />
              Lihat Pelajaran
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
