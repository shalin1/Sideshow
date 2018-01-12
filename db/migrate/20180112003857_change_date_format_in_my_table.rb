class ChangeDateFormatInMyTable < ActiveRecord::Migration[5.1]
  def change
    change_column :tickets, :code, :string
  end
end
