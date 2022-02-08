class SessionsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found 
  before_action :authorize, except: :create
  
    def create
      user = User.find(username: params[:username])
      session[:user_id] = user.id
      render json: user
    end
  
    def destroy
      session.delete :user_id
      head :no_content
    end

    private

    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end 

    def record_not_found
      render json: { error: "User not found" }, status: :not_found
    end
  
  end