class Ticket < ApplicationRecord
    validates :event_id, :ticket_holder_id, :code, :ticket_price, :ticket_quantity, presence: true

    belongs_to :ticket_holder,
    foreign_key: :ticket_holder_id,
    class_name: 'User'

    belongs_to :event,
    foreign_key: :event_id,
    class_name: 'Event'

    before_validation :ensure_ticket_code

    def ensure_ticket_code
      self.code = SecureRandom.random_number(999999999)
    end

end
