class CustomersController < ApplicationController

  def index
    @customers = Customer.where(nil)
    filtering_params(params).each do |key, value|
      @customers = @customers.public_send(key, value) if value.present?
    end
  end

  private
  # A list of the param names that can be used for filtering the Customers table
  def filtering_params(params)
    params.slice(:firstname, :lastname, :company)
  end
end
