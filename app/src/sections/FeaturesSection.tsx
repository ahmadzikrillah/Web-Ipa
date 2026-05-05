import { Card, CardContent } from "@/components/ui/card";
import { Video, FileQuestion, Target, MessageCircle, Zap, Award } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Video Pembelajaran",
    description: "Tonton video penjelasan materi dengan animasi menarik dan mudah dipahami.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: FileQuestion,
    title: "Latihan Soal Interaktif",
    description: "Uji pemahamanmu dengan soal pilihan ganda dan esai yang langsung dinilai.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Target,
    title: "Target Belajar Harian",
    description: "Atur target belajar harianmu dan pantau progress secara real-time.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: MessageCircle,
    title: "Diskusi dengan Teman",
    description: "Bertanya dan berdiskusi dengan siswa lain melalui forum pembelajaran.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Zap,
    title: "Quiz Menarik",
    description: "Ikuti kuis berhadiah untuk mengasah kemampuan dengan cara seru.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: Award,
    title: "Sertifikat Digital",
    description: "Dapatkan sertifikat penyelesaian materi sebagai motivasi belajar.",
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Fitur Unggulan
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
            Apa Saja yang Bisa Kamu Lakukan?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Platform ini dirancang khusus untuk membuat belajar jadi lebih mudah, seru, dan efektif.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md shadow-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
