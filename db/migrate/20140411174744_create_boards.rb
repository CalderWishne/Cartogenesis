class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.integer :board_size

      t.timestamps
    end
  end
end
