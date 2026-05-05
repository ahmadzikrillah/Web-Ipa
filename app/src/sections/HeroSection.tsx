import { Button } from "@/components/ui/button";
import { Play, BookOpen, Star, Users } from "lucide-react";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 md:py-20">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              <Star className="w-3 h-3 md:w-4 md:h-4 fill-blue-700" />
              Platform Belajar Digital untuk Siswa SMP
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-3 md:mb-4">
              Belajar Jadi Lebih{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Menyenangkan
              </span>
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Akses materi pelajaran lengkap, video pembelajaran interaktif, dan latihan soal 
              untuk membantumu meraih nilai terbaik di sekolah!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link to="/pelajaran">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold shadow-lg shadow-blue-200 transition-all hover:scale-105 w-full sm:w-auto">
                  <BookOpen className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Lihat Pelajaran
                </Button>
              </Link>
              <Button variant="outline" className="rounded-xl px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold border-2 border-slate-200 hover:bg-slate-50 transition-all hover:scale-105 w-full sm:w-auto">
                <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-600" />
                Video Perkenalan
              </Button>
            </div>
            
            <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-4 md:gap-6 justify-center md:justify-start text-xs md:text-sm text-slate-500">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                <span><strong className="text-slate-800">5,000+</strong> Siswa Aktif</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-indigo-600" />
                <span><strong className="text-slate-800">50+</strong> Materi Lengkap</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 relative order-1 md:order-2 w-full max-w-md md:max-w-none mx-auto">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl shadow-blue-200/50 border-2 md:border-4 border-white">
              <img
                src="/hero-education.jpg"
                alt="Siswa SMP belajar bersama"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating cards - hidden on small mobile, shown on larger screens */}
            <div className="hidden sm:block absolute -bottom-3 md:-bottom-4 -left-3 md:-left-4 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg border border-slate-100 animate-bounce" style={{ animationDuration: "3s" }}>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-green-100 flex items-center justify-center">
                  <span className="text-lg md:text-2xl">🎯</span>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-slate-500">Progress Belajar</p>
                  <p className="text-sm md:text-lg font-bold text-slate-800">75% Selesai</p>
                </div>
              </div>
            </div>
            {/* Another floating card */}
            <div className="hidden sm:block absolute -top-3 md:-top-4 -right-3 md:-right-4 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg border border-slate-100 animate-bounce" style={{ animationDuration: "4s" }}>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-amber-100 flex items-center justify-center">
                  <span className="text-lg md:text-2xl">🏆</span>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-slate-500">Peringkat</p>
                  <p className="text-sm md:text-lg font-bold text-slate-800">Top 10%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
