class DashboardController < PublicController
  use_inertia_instance_props

  def index
    @courses = ActiveModel::Serializer::CollectionSerializer.new(
      Course.where("end_date > ?", Date.current),
      each_serializer: CourseSerializer
    )
  end

  def course
    course = Course.find(params[:id])
    @course = CourseSerializer.new(course)
    add_breadcrumb(course.title)
  end
end
