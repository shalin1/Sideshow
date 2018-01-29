class Api::CategoryMembershipsController < ApplicationController

  def create
    @category_membership = CategoryMembership.new(category_membership_params)
    if @category_membership.save
      render "/api/events/show"
    else
      render json: @category_membership.errors.messages, status: 422
    end
  end

  def destroy
    @user = current_user
    @user_event = @user.events.find(params[:event_id])
    
  end

  private

  def category_membership_params
    params.require(:category_membership).permit(:event_id, :category_id)
  end
end
