import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { subjects } from "@/data/subjects";
import { Link } from "react-router";
import { BookOpen, Clock, ChevronRight, Search, GraduationCap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function SubjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSubjects = subjects.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-10 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            Daftar Pelajaran
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Semua Mata Pelajaran SMP
          </h1>
          <p className="text-white/80 max-w-xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
            Pilih pelajaran yang ingin kamu pelajari hari ini. Semua materi lengkap dengan latihan soal!
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              placeholder="Cari pelajaran..."
              className="pl-12 pr-4 py-5 md:py-6 rounded-xl bg-white border-0 shadow-lg text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredSubjects.map((subject) => (
              <Link key={subject.id} to={`/pelajaran/${subject.id}`}>
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer h-full bg-white">
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <img
                      src={subject.image}
                      alt={subject.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl md:text-2xl">{subject.icon}</span>
                        <span className="text-white font-bold text-base md:text-lg">{subject.name}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-xs md:text-sm">
                        <Clock className="w-3 h-3" />
                        <span>{subject.totalMaterials} Materi</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-5">
                    <p className="text-slate-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                      {subject.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className="text-slate-500">Progress</span>
                        <span className="font-semibold text-slate-700">{subject.progress}%</span>
                      </div>
                      <Progress value={subject.progress} className="h-1.5 md:h-2" />
                    </div>
                    <div className="mt-3 md:mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span>Lihat Materi</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredSubjects.length === 0 && (
            <div className="text-center py-16 md:py-20">
              <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-slate-700 mb-2">
                Pelajaran tidak ditemukan
              </h3>
              <p className="text-slate-500 text-sm md:text-base">
                Coba cari dengan kata kunci lain
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
