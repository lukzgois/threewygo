class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :end_date, :end_date_formatted

  def end_date_formatted
    I18n.localize object.end_date
  end
end
