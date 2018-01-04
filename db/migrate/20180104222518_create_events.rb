class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.datetime :event_start, null: false
      t.datetime :event_end, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.string :venue_name, null: false
      t.string :venue_address, null: false
      t.decimal :ticket_price, null: false
      t.integer :tickets_available, null: false
      t.integer :organizer_id, null: false

      t.timestamps

    end
    add_index :events, :organizer_id
    add_index :events, :title
  end
end
