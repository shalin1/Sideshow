class AddTicketCodeToTickets < ActiveRecord::Migration[5.1]
  def change
    add_column :tickets, :code, :integer
  end
end
