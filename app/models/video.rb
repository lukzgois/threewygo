class Video < ApplicationRecord
  belongs_to :course
  has_one_attached :video

  validates_presence_of :title, :video
end
