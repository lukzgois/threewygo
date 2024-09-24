class CourseSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :description, :end_date, :end_date_formatted, :view_course_url, :delete_course_url
  has_many :videos

  def end_date_formatted
    I18n.localize object.end_date
  end

  def view_course_url
    admin_course_path(object.id)
  end

  def delete_course_url
    admin_course_path(object.id)
  end
end
