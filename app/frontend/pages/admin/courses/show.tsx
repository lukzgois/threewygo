import Icon from '@/components/icon'
import LinkButton from '@/components/link-button'
import Modal from '@/components/modal'
import Panel from '@/components/panel'
import Title from '@/components/title'
import ICourse from '@/types/ICourse'
import IVideo from '@/types/IVideo'
import { Head, Link, useForm } from '@inertiajs/react'
import { useState } from 'react'

export default function Show({ course, new_course_video_path }: { course: ICourse, new_course_video_path: string }) {
  const [showDeleModal, setShowDeleteModal] = useState(false)
  const [showCourseDeleModal, setShowCourseDeleteModal] = useState(false)
  const { data, setData, delete: deleteVideo } = useForm({
    video: null
  })
  const { data: courseData, setData: setCourseData, delete: deleteCourse } = useForm({
    course: null
  })

  const openCourseDeleteModal = (e) => {
    setCourseData('course', course)
    setShowCourseDeleteModal(true)
    e.preventDefault()
  }

  const cancelCourseDelete = () => {
    setShowCourseDeleteModal(false)
  }

  const confirmDeleteCourse = () => {
    deleteCourse(course.delete_course_url)
  }

  const openDeleteModal = (video: IVideo) => {
    setData('video', video)
    setShowDeleteModal(true)
  }

  const onConfirm = () => {
    if(data.video === null)
      return

    deleteVideo(data.video.delete_video_url)
    setShowDeleteModal(false)
  }

  const onCancel = () => {
    setData('video', null)
    setShowDeleteModal(false)
  }

  return (
    <>
      <Head title="Cursos" />

      <Panel className="mb-4">
        <div className="flex justify-between gap-4">
          <div>
            <div className="mb-4">
              <Title>{course.title}</Title>
            </div>

            <div className="text-xs flex mb-4 text-gray-500">
              <p className="mr-2">Data de término do curso: </p>
              <p className="font-bold">{course.end_date_formatted}</p>
            </div>

            <p>{course.description}</p>
          </div>

          <div className="space-y-2">
            <LinkButton href={course.edit_course_url} className="flex items-center">
              <Icon.Edit className="mr-1"/>
              Editar
            </LinkButton>

            <LinkButton href="#" onClick={ openCourseDeleteModal } variant="warning" className="flex items-center">
              <Icon.Trash className="mr-1"/>
              Excluir
            </LinkButton>
          </div>
        </div>
      </Panel>

      <Panel>
        <div className="flex justify-between items-center">
          <Title>Vídeos do Curso</Title>

          <LinkButton
            href={new_course_video_path}
          >Adicionar novo vídeo</LinkButton>
        </div>

        {!!course.videos.length &&
          <div className="relative overflow-x-auto mt-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Título do vídeo
                  </th>

                  <th scope="col" className="px-6 py-3 text-right">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {course.videos.map(video => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={video.id}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {video.title}
                    </th>

                    <td className="px-6 py-4 text-right">
                      <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <a
                          href="#"
                          className="text-red-500"
                          onClick={() => openDeleteModal(video)}
                        >Excluir</a>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }

        {!!!course.videos.length &&
          <div className="text-sm text-center mt-4 pt-20 pb-20 bg-gray-100 rounded-lg">
            <p>Ops! Parece que este curso ainda não possui nenhum vídeo</p>

            <Link href={new_course_video_path} className="inline-block mt-1 text-blue-500">
              Adicione o primeiro vídeo deste curso
            </Link>
          </div>
        }

        {
          showDeleModal &&
          <Modal
            message="Você tem certeza que deseja excluir esse vídeo?"
            onConfirm={onConfirm}
            onCancel={onCancel}
          />
        }

        {
          showCourseDeleModal &&
          <Modal
            onConfirm={confirmDeleteCourse}
            onCancel={cancelCourseDelete}
            message="Você tem certeza que deseja excluir esse curso?"
          />
        }
      </Panel>
    </>
  )
}
