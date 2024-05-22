class CreateBalls < ActiveRecord::Migration[6.1]
  def change
    create_table :balls do |t|
      t.float :x
      t.float :y
      t.float :z

      t.timestamps
    end
  end
end
