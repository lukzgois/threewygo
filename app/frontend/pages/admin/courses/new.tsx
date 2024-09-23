import Form from "@/components/form";
import Panel from "@/components/panel";
import Title from "@/components/title";
import { Head, useForm } from "@inertiajs/react";

export default function New({ create_course_path }) {
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

          <Form className="space-y-6" onSubmit={handleSubmit}>
            <Form.Label text="Título">
              <Form.TextInput
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
              />
              {errors.title && <Form.Label.Error>{errors.title}</Form.Label.Error>}
            </Form.Label>

            <Form.Label text="Descrição">
              <Form.TextArea
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
              />
              {errors.description && <Form.Label.Error>{errors.description}</Form.Label.Error>}
            </Form.Label>

            <Form.Label text="Data de término">
              <Form.DateInput
                value={data.end_date}
                onChange={(e) => setData('end_date', e.target.value)}
              />
              {errors.end_date && <Form.Label.Error>{errors.end_date}</Form.Label.Error>}
            </Form.Label>

            <Form.Button>Cadastrar</Form.Button>
          </Form>
        </Panel>
      </div>
    </>
  )
}
