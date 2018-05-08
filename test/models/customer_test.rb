require "test_helper"

class CustomerTest < ActiveSupport::TestCase

  def setup
    @customer = Customer.new(firstname: "Stephanie", lastname: "Wong", company_id: 1)
  end
  
  test "customer should be valid" do
    assert @customer.valid?
  end
  
  test "firstname should be present" do 
    @customer.firstname = " "
    assert_not @customer.valid?
  end

  test "lastname should be present" do 
    @customer.lastname = " "
    assert_not @customer.valid?
  end
  
  test "firstname should be unique" do
    @customer.save
    customer2 = Customer.new(firstname: "Stephanie")
    assert_not customer2.valid?
  end
  
  test "lastname should be unique" do
    @customer.save
    customer2 = Customer.new(lastname: "Wong")
    assert_not customer2.valid?
  end
  
end
