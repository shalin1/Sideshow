class Event < ApplicationRecord
  validates :event_start, :event_end, :title, :description, :venue_name,
  :venue_address, :ticket_price, :tickets_available, :organizer_id, presence: true
  validate :event_cannot_end_after_it_starts

  def event_cannot_end_after_it_starts
    errors.add(:event_start, "must be after event_end") if
      !event_start.blank? && :event_end > :event_start
  end

  belongs_to :user,
  foreign_key: :organizer_id,
  class_name: 'User'

  has_many :tickets

  has_many :attendees,
  through: :tickets,
  source: :ticket_holder

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

  has_many :bookmarks,
  foreign_key: :event_id,
  class_name: 'Bookmark'

  has_many :bookmarking_users,
  through: :bookmarks,
  source: :user

  has_many :category_memberships,
  foreign_key: :event_id,
  class_name: 'CategoryMembership'

  has_many :categories,
  through: :category_memberships,
  source: :category

  accepts_nested_attributes_for :categories,
  :allow_destroy => true

end
