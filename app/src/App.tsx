import { Routes, Route, Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SubjectsPage from './pages/SubjectsPage'
import SubjectDetailPage from './pages/SubjectDetailPage'
import AchievementsPage from './pages/AchievementsPage'
import NotFoundPage from './pages/NotFoundPage'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pelajaran" element={<SubjectsPage />} />
        <Route path="/pelajaran/:id" element={<SubjectDetailPage />} />
        <Route path="/prestasi" element={<AchievementsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
