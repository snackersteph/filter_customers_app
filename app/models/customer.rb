class Customer < ApplicationRecord
  belongs_to :company
  validates :firstname, presence: true
  validates :lastname, presence: true
end
