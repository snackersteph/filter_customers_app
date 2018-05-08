class Company < ApplicationRecord
  has_many :customers
  validates :title, presence: true, uniqueness: true
end
