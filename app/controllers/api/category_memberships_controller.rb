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
    @category_membership = current_user.category_memberships.find_by(event_id: params[:id])
    render "api/users/show/" if @category_membership.destroy
  end

  private

  def category_membership_params
    params.require(:category_membership).permit(:event_id, :category_id)
  end
end
