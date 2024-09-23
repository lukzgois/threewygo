class Course < ApplicationRecord
  validates_presence_of :title, :description, :end_date
  validates :end_date, comparison: { greater_than: Date.current }
end
