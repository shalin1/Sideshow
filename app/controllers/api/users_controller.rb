class Api::UsersController < ApplicationController
  def create
p @user
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :emails_opt_in)
  end
end
