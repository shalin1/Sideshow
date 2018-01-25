class Api::CategoriesController < ApplicationController

    def index
      @categories = Category.all
    end

    def show
      @category = Category.find(params[:id])
      if @category
        render :show
      else
        render json: ['Could not find category'], status: 404
      end
    end

    def create
      @category = Category.new(catagory_params)
      if @category.save
        @user = current_user
        render :show
      else
        render json: @category.errors.full_messages, status: 422
      end
    end

    def update
      @category = current_user.events.find(params[:id])
      if @category.update_attributes(event_params)
        render :show
      else
        render json: @event.errors.messages, status: 422
      end
    end

    def destroy
      @category = Category.find(category_params[:id])
      if @category.destroy
        render :index
      else
        render json: @category.errors.full_messages, status: 422
      end
    end

    private

    def category_params
      params.require(:category).permit(:id, :name, :description, :category_image)
    end
end
