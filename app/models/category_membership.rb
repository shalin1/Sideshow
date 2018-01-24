class CategoryMembership < ApplicationRecord

  belongs_to :event,
  foreign_key: :event_id,
  class_name: 'Event'

  belongs_to :category,
  foreign_key: :category_id,
  class_name: 'Category'
end
