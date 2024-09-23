require 'rails_helper'

RSpec.describe Video, type: :model do
  describe "validations" do
    it { should validate_presence_of :title }
    it { should validate_presence_of :video }
  end
end
