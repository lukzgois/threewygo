import Form from "@/components/form";
import Panel from "@/components/panel";
import Title from "@/components/title";
import { Head, useForm } from "@inertiajs/react";
import CourseForm from "./course-form";

export default function New({ create_course_path }: { create_course_path: string }) {
  const { data, setData, errors, post } = useForm({
    title: '',
    description: '',
    end_date: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post(create_course_path)
  }

  return (
    <>
      <Head title="Adicionar Curso" />

      <div className="grid lg:grid-cols-2">
        <Panel>
          <div className="mb-4">
            <Title>
              Adicionar Curso
            </Title>
          </div>

          <Form onSubmit={handleSubmit} className="space-y-4">
            <CourseForm
              data={data}
              setData={setData}
              errors={errors}
            />

            <Form.Button>Cadastrar</Form.Button>
          </Form>
        </Panel>
      </div>
    </>
  )
}
