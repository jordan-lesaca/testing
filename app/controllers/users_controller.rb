class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found #rescue_from is a method that can handle the ActiveRecord::RecordNotFound exception
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  #if any of our controller actions throw an ActiveRecord::ResponseNotFound exceptionm our render_not_found_response method will return the appropriate JSON response
  skip_before_action :authorize, only: :create

    def index #shows all users
      users = User.all
      render json: users
    end

    def show #shows self user by finding session. 
      render json: @current_user

    end

    def myGames #shows all games associated with user
      user = User.find(session[:user_id])
      userGames = user.games
      render json: userGames
    end

    def create #creates new user. 
      user = User.create(user_params) 
      render json: user, status: :created
    end

    private

    def user_params
      params.permit(:username, :age, :competitive)
    end

    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
      render json: { error: "User not found" }, status: :not_found
    end

  
  end 
