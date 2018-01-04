class Event < ApplicationRecord
  belongs_to :user,
  foreign_key: :organizer_id,
  class_name: 'User'

end
