import Form from "@/components/form";
import Panel from "@/components/panel";
import Title from "@/components/title";
import { Head, useForm } from "@inertiajs/react";
import CourseForm from "./course-form";
import ICourse from "@/types/ICourse";

export default function Edit({ course }: { course: ICourse }) {
  const { data, setData, errors, put } = useForm({
    title: course.title,
    description: course.description,
    end_date: course.end_date,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    put(course.update_course_url)
  }

  return (
    <>
      <Head title="Editar Curso" />

      <div className="grid lg:grid-cols-2">
        <Panel>
          <div className="mb-4">
            <Title>Editar Curso: {course.title}</Title>
          </div>

          <Form onSubmit={handleSubmit} className="space-y-4">
            <CourseForm
              data={data}
              setData={setData}
              errors={errors}
            />

            <Form.Button>Editar</Form.Button>
          </Form>
        </Panel>
      </div>
    </>
  )
}
