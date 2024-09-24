class CourseSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  include ActionView::Helpers::NumberHelper

  attributes :id, :title, :description, :end_date, :end_date_formatted,
    :view_course_url, :delete_course_url, :edit_course_url, :update_course_url,
    :videos_total_size
  has_many :videos

  def end_date_formatted
    I18n.localize object.end_date
  end

  def update_course_url
    admin_course_path(object.id)
  end

  def view_course_url
    admin_course_path(object.id)
  end

  def delete_course_url
    admin_course_path(object.id)
  end

  def edit_course_url
    edit_admin_course_path(object.id)
  end

  def videos_total_size
    number_to_human_size(
      ActiveStorage::Blob.
        joins(:attachments).
        where(active_storage_attachments: { record_id: object.videos.pluck(:id), record_type: "Video" }).
        sum(:byte_size)
    )
  end
end
