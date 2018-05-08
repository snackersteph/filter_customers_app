class AddCustomerIdToCompanies < ActiveRecord::Migration[5.2]
  def change
    add_column :customers, :company_id, :integer
  end
end
