import Form from "@/components/form";
import Panel from "@/components/panel";
import Title from "@/components/title";
import { Head } from "@inertiajs/react";

export default function New() {
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

          <Form className="space-y-6" onSubmit={(e) => { e.preventDefault() }}>
            <Form.Label text="Título">
              <Form.TextInput />
            </Form.Label>

            <Form.Label text="Descrição">
              <Form.TextArea />
            </Form.Label>

            <Form.Button
              onClick={() => { console.log('test') }}
            >Cadastrar</Form.Button>
          </Form>
        </Panel>
      </div>
    </>
  )
}
