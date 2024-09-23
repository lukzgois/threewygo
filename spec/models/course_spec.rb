require 'rails_helper'

RSpec.describe Course, type: :model do
  subject {
    described_class.new(
      title: "title",
      description: "description",
      end_date: Date.tomorrow
    )
  }

  describe "validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it { should validate_presence_of :title }
    it { should validate_presence_of :description }
    it { should validate_presence_of :end_date }

    context "end_date attribute" do
      it "should be greater than today" do
        subject.end_date = Date.yesterday

        expect(subject).to_not be_valid
      end
    end
  end
end
