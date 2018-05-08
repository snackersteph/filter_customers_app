class Company < ApplicationRecord
  has_many :customers
  validates :title, presence: true
end
