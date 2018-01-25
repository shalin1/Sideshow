class Category < ApplicationRecord

  has_many :category_memberships,
  foreign_key: :category_id,
  class_name: 'CategoryMembership'

  has_many :events,
  through: :category_memberships,
  source: :event

  has_attached_file(
    :category_image,
    styles: {
      big: "1200x1200",
      medium: "720x720",
      small: "300x300"
    }
  )

end
