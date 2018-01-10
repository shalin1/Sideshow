# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180110142010) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.datetime "event_start", null: false
    t.datetime "event_end", null: false
    t.string "title", null: false
    t.string "description", null: false
    t.string "venue_name", null: false
    t.string "venue_address", null: false
    t.decimal "ticket_price", null: false
    t.integer "tickets_available", null: false
    t.integer "organizer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "hero_image_file_name"
    t.string "hero_image_content_type"
    t.integer "hero_image_file_size"
    t.datetime "hero_image_updated_at"
    t.index ["organizer_id"], name: "index_events_on_organizer_id"
    t.index ["title"], name: "index_events_on_title"
  end

  create_table "tickets", force: :cascade do |t|
    t.integer "event_id", null: false
    t.integer "ticket_holder_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.boolean "emails_opt_in", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
