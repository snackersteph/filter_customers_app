class Customer < ApplicationRecord
  scope :firstname, -> (firstname) { where("firstname like ?", "#{firstname}%")}
  scope :lastname, -> (lastname) { where("lastname like ?", "#{lastname}%")}
  scope :company, -> (company) { where("company like ?", "#{company}%")}
end
