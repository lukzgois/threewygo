class Admin::CoursesController < ApplicationController
  use_inertia_instance_props
  include Auth

  def index
    @new_course_path = new_admin_course_path
  end

  def new
  end
end
