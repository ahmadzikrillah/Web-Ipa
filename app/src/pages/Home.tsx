import HeroSection from "@/sections/HeroSection";
import SubjectSection from "@/sections/SubjectSection";
import FeaturesSection from "@/sections/FeaturesSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Star, TrendingUp, BookOpen } from "lucide-react";
import { Link } from "react-router";
import "../App.css";

function StatsSection() {
  const stats = [
    { icon: BookOpen, label: "Materi", value: "50+" },
    { icon: Trophy, label: "Prestasi", value: "1.2K" },
    { icon: Star, label: "Rating", value: "4.9" },
    { icon: TrendingUp, label: "Siswa Aktif", value: "5K+" },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-0 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-white/80 mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
            Siap Untuk Mulai Belajar?
          </h2>
          <p className="text-slate-600 mb-8">
            Bergabung bersama ribuan siswa SMP lainnya yang sedang meningkatkan prestasi akademiknya.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold shadow-lg shadow-blue-200">
              Mulai Belajar Gratis
            </Button>
            <Link to="/pelajaran">
              <Button variant="outline" className="rounded-xl px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold border-2 border-slate-300 hover:bg-white w-full">
                Lihat Semua Pelajaran
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <SubjectSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}
