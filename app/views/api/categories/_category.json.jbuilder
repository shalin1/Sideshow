json.extract! category, :id, :name

json.category_image_url asset_path(category.category_image.url(:medium))
