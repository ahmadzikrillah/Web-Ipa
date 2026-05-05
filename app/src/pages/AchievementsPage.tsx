import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Star, Crown, TrendingUp, Award, Flame, Target } from "lucide-react";

const leaderboard = [
  { rank: 1, name: "Ahmad Rizky", points: 2450, subject: "Matematika", streak: 12, avatar: "👦" },
  { rank: 2, name: "Siti Nurhaliza", points: 2380, subject: "IPA", streak: 10, avatar: "👧" },
  { rank: 3, name: "Budi Santoso", points: 2290, subject: "IPS", streak: 8, avatar: "👦" },
  { rank: 4, name: "Dewi Lestari", points: 2150, subject: "Bahasa Indonesia", streak: 7, avatar: "👧" },
  { rank: 5, name: "Eko Prasetyo", points: 2080, subject: "Matematika", streak: 6, avatar: "👦" },
  { rank: 6, name: "Fitriani", points: 1950, subject: "Bahasa Inggris", streak: 5, avatar: "👧" },
];

const achievements = [
  { icon: Flame, title: "Streak 7 Hari", desc: "Belajar tanpa putus selama 7 hari", color: "bg-orange-100 text-orange-600", earned: true },
  { icon: Target, title: "Perfectionist", desc: "Selesaikan 10 materi dengan nilai sempurna", color: "bg-blue-100 text-blue-600", earned: true },
  { icon: Crown, title: "Juara Kelas", desc: "Capai peringkat 1 di leaderboard", color: "bg-amber-100 text-amber-600", earned: false },
  { icon: Star, title: "Bintang Pelajar", desc: "Kumpulkan 5000 poin belajar", color: "bg-purple-100 text-purple-600", earned: false },
];

function getRankStyle(rank: number) {
  if (rank === 1) return "bg-gradient-to-r from-amber-400 to-yellow-500 text-white border-amber-400";
  if (rank === 2) return "bg-gradient-to-r from-slate-300 to-slate-400 text-white border-slate-300";
  if (rank === 3) return "bg-gradient-to-r from-orange-400 to-orange-500 text-white border-orange-400";
  return "bg-white text-slate-700 border-slate-200";
}

function getRankIcon(rank: number) {
  if (rank === 1) return <Crown className="w-5 h-5" />;
  if (rank === 2) return <Medal className="w-5 h-5" />;
  if (rank === 3) return <Award className="w-5 h-5" />;
  return <span className="font-bold w-5 text-center">{rank}</span>;
}

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            Prestasi & Peringkat
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Leaderboard Siswa Berprestasi
          </h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Lihat peringkatmu dan motivasi dirimu untuk belajar lebih giat setiap hari!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Leaderboard */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Peringkat Tertinggi
            </h2>
            <div className="space-y-3">
              {leaderboard.map((student) => (
                <Card
                  key={student.rank}
                  className={`border-2 shadow-md transition-all hover:shadow-lg ${getRankStyle(student.rank)}`}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10">
                      {getRankIcon(student.rank)}
                    </div>
                    <div className="text-3xl">{student.avatar}</div>
                    <div className="flex-1">
                      <h3 className="font-bold">{student.name}</h3>
                      <p className="text-sm opacity-80">Favorit: {student.subject}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{student.points.toLocaleString()}</p>
                      <p className="text-xs opacity-70 flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        {student.streak} hari streak
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-600" />
              Pencapaian
            </h2>
            <div className="space-y-3">
              {achievements.map((ach, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-md ${ach.earned ? "bg-white" : "bg-slate-100 opacity-60"}`}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${ach.color} flex items-center justify-center`}>
                      <ach.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{ach.title}</h3>
                      <p className="text-sm text-slate-500">{ach.desc}</p>
                    </div>
                    {ach.earned && (
                      <CheckBadge />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* My Stats Card */}
            <Card className="mt-6 border-0 shadow-md bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Statistik Kamu</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/15 rounded-xl">
                    <p className="text-2xl font-bold">1,250</p>
                    <p className="text-xs text-white/70">Total Poin</p>
                  </div>
                  <div className="text-center p-3 bg-white/15 rounded-xl">
                    <p className="text-2xl font-bold">5</p>
                    <p className="text-xs text-white/70">Hari Streak</p>
                  </div>
                  <div className="text-center p-3 bg-white/15 rounded-xl">
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-xs text-white/70">Materi Selesai</p>
                  </div>
                  <div className="text-center p-3 bg-white/15 rounded-xl">
                    <p className="text-2xl font-bold">#24</p>
                    <p className="text-xs text-white/70">Peringkat</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckBadge() {
  return (
    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}
