import Card from '@/components/card'
import ICourse from '@/types/ICourse'
import { Head } from '@inertiajs/react'

export default function Index({ courses }: { courses: ICourse[] }) {
  return (
    <>
      <Head title="Threewygo" />

      <div className="flex flex-col items-center justify-center bg-gradient-to-bl from-indigo-600 to-cyan-500 text-white h-96 p-8">
        <h1 className="text-6xl mb-3">Threewygo</h1>
        <p className="text-lg text-center">Uma plataforma de cursos completa para você!</p>
      </div>

      <div className="mt-8">
        <h1 className="text-3xl text-center font-bold">Conheça nossos cursos</h1>
      </div>

      <div className="flex justify-center">
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} href={`/course/${course.id}`}>
              <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">{ course.title }</h5>
              <p className="font-normal text-gray-700">{ course.description }</p>
              <p className="text-sm text-gray-500 mt-6">Termina em: <span className="font-bold">{ course.end_date_formatted }</span></p>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
