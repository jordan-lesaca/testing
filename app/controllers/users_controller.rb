class UsersController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :authorize, only: [:create]

    def index 
      users = User.all
      render json: users
    end

    def show 
      render json: @current_user
    end

    def myGames 
      user = User.find(session[:user_id])
      userGames = user.games
      render json: userGames
    end

    def create 
      user = User.create(user_params) 
      render json: user, status: :created
    end

    private

    def user_params
      params.require(:user).permit(:username, :age, :competitive)
    end

    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end 