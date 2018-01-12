class AddTicketPriceAndTicketQuantityToTickets < ActiveRecord::Migration[5.1]
  def change
    add_column :tickets, :ticket_price, :integer
    add_column :tickets, :ticket_quantity, :integer
  end
end
