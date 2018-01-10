class Ticket < ApplicationRecord
    validates :event_id, :ticket_holder_id, presence: true

    belongs_to :ticket_holder,
    foreign_key: :ticket_holder_id,
    class_name: 'User'

    belongs_to :event

  end
end
