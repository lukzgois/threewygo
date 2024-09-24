import Form from "@/components/form";
import Panel from "@/components/panel";
import Title from "@/components/title";
import { Head, useForm } from "@inertiajs/react";

export default function New({ create_video_path }: { create_video_path: string }) {
  const { data, setData, errors, progress, post } = useForm({
    title: '',
    video: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post(create_video_path)
  }

  return (
    <>
      <Head title="Novo Vídeo" />

      <Panel>
        <div className="mb-4">
          <Title>
            Adicionar vídeo
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

          <Form.Label text="Vídeo">
            <Form.FileInput
              onChange={(e) => setData('video', e.target.files[0])}
            />
            {errors.video && <Form.Label.Error>{errors.video}</Form.Label.Error>}

            {progress && <progress
              className="w-full h-2"
              value={progress.percentage}
              max="100"
            />}
          </Form.Label>


          <Form.Button>Cadastrar</Form.Button>
        </Form>
      </Panel>
    </>
  )
}
