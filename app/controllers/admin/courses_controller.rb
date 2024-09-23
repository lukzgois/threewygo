class Admin::CoursesController < ApplicationController
  use_inertia_instance_props
  include Auth

  def index
    @new_course_path = new_admin_course_path
  end

  def new
  end

  def create
    course = Course.new(request_params)

    if course.save
      redirect_to admin_courses_path, notice: 'Curso cadastrado.'
    else
      redirect_to new_admin_course_path, inertia: { errors: course.errors }
    end
  end

  private

  def request_params
    params.permit(:title, :description, :end_date)
  end
end
