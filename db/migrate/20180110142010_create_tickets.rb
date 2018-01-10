class CreateTickets < ActiveRecord::Migration[5.1]
  def change
    create_table :tickets do |t|
      t.integer :event_id, null: false
      t.integer :ticket_holder_id, null: false
      t.timestamps
    end
  end
end
