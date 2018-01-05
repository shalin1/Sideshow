class Event < ApplicationRecord
  belongs_to :user,
  foreign_key: :organizer_id,
  class_name: 'User'

  has_attached_file(
    :hero_image,
    styles: {
      big: "1000x1000",
      medium: "600x600",
      small: "300x300"
    }
  )

  validates_attachment_content_type(
    :hero_image,
    content_type: /\Aimage\/.*\Z/
  )

end
