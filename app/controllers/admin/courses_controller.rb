class Admin::CoursesController < ApplicationController
  use_inertia_instance_props
  include Auth

  def index
    @new_course_path = new_admin_course_path
    @courses = ActiveModel::Serializer::CollectionSerializer.new(Course.all, each_serializer: CourseSerializer)
  end

  def new
    @create_course_path = admin_courses_path
  end

  def edit
    @course = CourseSerializer.new(find_course)
  end

  def create
    course = Course.new(request_params)

    if course.save
      redirect_to admin_course_path(course.id), notice: "Curso cadastrado."
    else
      redirect_to new_admin_course_path, inertia: { errors: course.errors }
    end
  end

  def update
    course = find_course

    if course.update(request_params)
      redirect_to admin_course_path(course), notice: "Curso alterado."
    else
      redirect_to edit_admin_course_path(course), inertia: { errors: course.errors }
    end
  end

  def show
    course = find_course
    @course = CourseSerializer.new(course)
    @new_course_video_path = new_admin_course_video_path(course)
  end

  def destroy
    course = find_course

    if course.destroy
      redirect_to admin_courses_path
    else
      redirect_to admin_course_path(params[:course_id]), alert: "O curso não pode ser excluído!"
    end
  end

  private

  def request_params
    params.permit(:title, :description, :end_date)
  end

  def find_course
    Course.find(params[:id])
  end
end
