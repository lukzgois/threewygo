import Form from "@/components/form";

export default function CourseForm({ data, setData, errors }) {
  return (
    <>
      <Form.Label text="Título">
        <Form.TextInput
          value={data.title}
          onChange={(e) => setData('title', e.target.value)}
        />
        {errors.title && <Form.Label.Error>{errors.title}</Form.Label.Error>}
      </Form.Label>

      <Form.Label text="Descrição">
        <Form.TextArea
          onChange={e => setData('description', e.target.value)}
          value={data.description}
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
    </>
  )
}
