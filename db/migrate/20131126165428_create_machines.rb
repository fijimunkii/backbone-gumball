class CreateMachines < ActiveRecord::Migration
  def change
    create_table :machines do |t|
      t.integer :numCandy
      t.float :money
      t.float :cost
      t.string :machinetype
      t.string :location

      t.timestamps
    end
  end
end
