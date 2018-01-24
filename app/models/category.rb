class Category < ApplicationRecord

  has_many :category_memberships,
  foreign_key: :category_id,
  class_name: 'CategoryMembership'

  has_many :events,
  through: :category_memberships,
  source: :event 

end
