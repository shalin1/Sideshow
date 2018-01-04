# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo = User.create({email: 'demo@gmail.com', password:'password', first_name: 'Demo', last_name: 'User', emails_opt_in: true})

Event.destroy_all
heron = Event.create({
  event_start: Date.new(2018,4,4,4),
  event_end: Date.new(2018,4,4,5),
  title: "night heron",
  description: "test",
  venue_name: "Watertower",
  venue_address: "530 W 27th St, New York, NY 10001",
  ticket_price: 83,
  tickets_available: 8,
  organizer_id: demo.id,
})
