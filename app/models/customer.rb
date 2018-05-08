class Customer < ApplicationRecord
  belongs_to :company
  validates :firstname, presence: true, uniqueness: true
  validates :lastname, presence: true, uniqueness: true
end
