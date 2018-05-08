require "test_helper"

class CompanyTest < ActiveSupport::TestCase

  def setup
    @company = Company.new(title: "New Relic")
  end
  
  test "company should be valid" do
    assert @company.valid?
  end
  
  test "title should be present" do 
    @company.title = " "
    assert_not @company.valid?
  end
  
  test "title should be unique" do
    @company.save
    company2 = Company.new(title: "New Relic")
    assert_not company2.valid?
  end
  
  
end
