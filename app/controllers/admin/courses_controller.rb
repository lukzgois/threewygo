class Admin::CoursesController < ApplicationController
  use_inertia_instance_props
  include Auth

  def index
    @new_course_path = new_admin_course_path
  end

  def new
    @create_course_path = admin_courses_path
  end

  def create
    course = Course.new(request_params)

    if course.save
      redirect_to admin_course_path(course.id), notice: "Curso cadastrado."
    else
      redirect_to new_admin_course_path, inertia: { errors: course.errors }
    end
  end

  def show
    @course = CourseSerializer.new(course)
    @new_course_video_path = new_admin_course_video_path(course)
  end

  private

  def request_params
    params.permit(:title, :description, :end_date)
  end

  def course
    Course.find(params[:id])
  end
end
