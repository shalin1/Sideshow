class ChangeTicketPriceToFloat < ActiveRecord::Migration[5.1]
  def change
    change_column :tickets, :ticket_price, :float
  end
end
