class AddCityLngLatToMessage < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :city, :string
    add_column :messages, :lng, :float
    add_column :messages, :lat, :float
  end
end
