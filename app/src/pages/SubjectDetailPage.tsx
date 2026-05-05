import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getSubjectById } from "@/data/subjects";
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  Circle, 
  Play, 
  FileText,
  ChevronRight,
  BookOpen,
  Lock
} from "lucide-react";

export default function SubjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeMaterial, setActiveMaterial] = useState<string | null>(null);

  const subject = getSubjectById(id || "");

  if (!subject) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-700 mb-2">Pelajaran Tidak Ditemukan</h2>
          <p className="text-slate-500 mb-4">Pelajaran yang kamu cari tidak tersedia.</p>
          <Button onClick={() => navigate("/pelajaran")} className="rounded-xl">
            Kembali ke Daftar Pelajaran
          </Button>
        </div>
      </div>
    );
  }

  const completedCount = subject.materials.filter((m) => m.completed).length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className={`bg-gradient-to-br ${subject.bgGradient} py-10 md:py-14`}>
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="text-white/90 hover:text-white hover:bg-white/20 mb-6 -ml-4"
            onClick={() => navigate("/pelajaran")}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali
          </Button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="text-5xl md:text-6xl bg-white/20 rounded-3xl p-4 md:p-6 backdrop-blur-sm">
              {subject.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {subject.name}
              </h1>
              <p className="text-white/80 max-w-xl">
                {subject.description}
              </p>
              <div className="flex items-center gap-6 mt-4 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{subject.totalMaterials} Materi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{completedCount} Selesai</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-8 bg-white/15 backdrop-blur-sm rounded-2xl p-4 md:p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-medium">Progress Belajar</span>
              <span className="text-white font-bold">{subject.progress}%</span>
            </div>
            <Progress value={subject.progress} className="h-3 bg-white/30" />
          </div>
        </div>
      </section>

      {/* Materials List */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
            Daftar Materi
          </h2>

          <div className="space-y-4">
            {subject.materials.map((material, index) => {
              const isActive = activeMaterial === material.id;
              const isLocked = index > 0 && !subject.materials[index - 1].completed;

              return (
                <Card
                  key={material.id}
                  className={`border-0 shadow-md transition-all duration-300 overflow-hidden ${
                    isActive ? "ring-2 ring-blue-500 shadow-lg" : "shadow-slate-100"
                  } ${isLocked ? "opacity-60" : "hover:shadow-lg"}`}
                >
                  <CardContent className="p-0">
                    <button
                      className="w-full text-left p-5 md:p-6"
                      onClick={() => {
                        if (!isLocked) {
                          setActiveMaterial(isActive ? null : material.id);
                        }
                      }}
                      disabled={isLocked}
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          {isLocked ? (
                            <Lock className="w-6 h-6 text-slate-400" />
                          ) : material.completed ? (
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                          ) : (
                            <Circle className="w-6 h-6 text-blue-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className={`font-bold ${isLocked ? "text-slate-400" : "text-slate-900"}`}>
                              {index + 1}. {material.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                              <Clock className="w-3 h-3" />
                              <span>{material.duration}</span>
                            </div>
                          </div>
                          <p className="text-slate-600 text-sm mb-3">
                            {material.description}
                          </p>
                          <div className="flex items-center gap-3">
                            {!isLocked && (
                              <>
                                <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
                                  <Play className="w-3 h-3" />
                                  Video
                                </span>
                                <span className="inline-flex items-center gap-1 text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-lg">
                                  <FileText className="w-3 h-3" />
                                  Bacaan
                                </span>
                              </>
                            )}
                            {material.completed && (
                              <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                                <CheckCircle2 className="w-3 h-3" />
                                Selesai
                              </span>
                            )}
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 mt-1 transition-transform ${
                            isActive ? "rotate-90 text-blue-600" : "text-slate-400"
                          } ${isLocked ? "text-slate-300" : ""}`}
                        />
                      </div>
                    </button>

                    {/* Expanded Content */}
                    {isActive && (
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                        <div className="border-t border-slate-100 pt-4 ml-10">
                          <div className="bg-slate-50 rounded-xl p-4 md:p-6">
                            <h4 className="font-semibold text-slate-900 mb-3">
                              Ringkasan Materi
                            </h4>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                              {material.content}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl">
                                <Play className="w-4 h-4 mr-2" />
                                Tonton Video
                              </Button>
                              <Button variant="outline" className="rounded-xl border-2">
                                <FileText className="w-4 h-4 mr-2" />
                                Baca Materi Lengkap
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
