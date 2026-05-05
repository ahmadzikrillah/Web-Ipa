import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { subjects } from "@/data/subjects";
import { Link } from "react-router";
import { BookOpen, Clock, ChevronRight } from "lucide-react";

export default function SubjectSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Mata Pelajaran
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
            Pilih Pelajaran Favoritmu
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Semua mata pelajaran SMP tersedia lengkap dengan materi, latihan soal, dan video pembelajaran.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Link key={subject.id} to={`/pelajaran/${subject.id}`}>
              <Card className="overflow-hidden border-0 shadow-lg shadow-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={subject.image}
                    alt={subject.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{subject.icon}</span>
                      <span className="text-white font-bold text-lg">{subject.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <Clock className="w-3 h-3" />
                      <span>{subject.totalMaterials} Materi</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-5">
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {subject.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Progress</span>
                      <span className="font-semibold text-slate-700">{subject.progress}%</span>
                    </div>
                    <Progress 
                      value={subject.progress} 
                      className="h-2"
                    />
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span>Mulai Belajar</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
