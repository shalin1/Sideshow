class Event < ApplicationRecord
  validates :event_start, :event_end,:title,:description,:venue_name,
  :venue_address,:ticket_price,:tickets_available,:organizer_id, presence: true

  belongs_to :user,
  foreign_key: :organizer_id,
  class_name: 'User'

  has_many :tickets

  has_attached_file(
    :hero_image,
    styles: {
      big: "1200x1200",
      medium: "720x720",
      small: "300x300"
    }
  )

  validates_attachment_content_type(
    :hero_image,
    content_type: /\Aimage\/.*\Z/
  )

end
