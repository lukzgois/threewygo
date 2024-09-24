class VideoSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  include ActionView::Helpers::NumberHelper

  attributes :id, :title, :video_url, :delete_video_url, :byte_size_formatted

  def video_url
    if object.video.attached?
      rails_blob_url(object.video, only_path: true)
    end
  end

  def delete_video_url
    admin_course_video_path(object.course_id, object.id)
  end

  def byte_size_formatted
    number_to_human_size(object.video.byte_size)
  end
end
