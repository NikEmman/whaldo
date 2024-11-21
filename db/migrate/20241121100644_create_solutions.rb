class CreateSolutions < ActiveRecord::Migration[8.0]
  def change
    create_table :solutions do |t|
      t.string :difficulty
      t.float :x
      t.float :y

      t.timestamps
    end
  end
end
