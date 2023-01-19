class Adduserinfotouser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :name, :string
    add_column :users, :grateful, :string
    add_column :todos, :title, :string
    add_column :todos, :done, :boolean, default: false
    add_column :tomatoclocks, :time, :integer
  end
end
