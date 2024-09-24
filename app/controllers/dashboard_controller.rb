class DashboardController < ApplicationController
  use_inertia_instance_props

  def index
    @courses = ActiveModel::Serializer::CollectionSerializer.new(Course.all, each_serializer: CourseSerializer)
  end
end
