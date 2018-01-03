class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # TODO: figure out how to query database for whether user exists

  def show
    @user = User.find_by_email(params[:user][:email])

    if @user
      render "api/users/show"
    else
      render json: ["No user with that email"], status: 422
    end
  end

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :emails_opt_in)
  end
end
