class User < ApplicationRecord
  validates :email, :session_token, :password_digest, :first_name, :last_name, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  def event_ids
    return events.map(&:id)
  end

  has_many :events,
  foreign_key: :organizer_id,
  class_name: 'Event'

  has_many :tickets,
  foreign_key: :ticket_holder_id,
  class_name: 'Ticket'

  has_many :bookmarks,
  foreign_key: :user_id,
  class_name: 'Bookmark'

  has_many :bookmarked_events,
  through: :bookmarks,
  source: :event

  has_many :events_attending,
  through: :tickets,
  source: :event

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  after_initialize :ensure_session_token

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def self.find_by_email(email)
    user = User.find_by(email: email)
  end

  def self.find_by_credentials(email,password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end
end
