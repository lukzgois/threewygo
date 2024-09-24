class DashboardController < ApplicationController
  use_inertia_instance_props

  def index
    @courses = ActiveModel::Serializer::CollectionSerializer.new(
      Course.where("end_date > ?", Date.current),
      each_serializer: CourseSerializer
    )
  end

  def course
    @course = CourseSerializer.new(Course.find(params[:id]))
  end
end
