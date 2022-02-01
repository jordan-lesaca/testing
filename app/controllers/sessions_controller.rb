class SessionsController < ApplicationController
    
    def create #Login
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
    end

    def destroy #Logout
        session.delete :user_id
    end

end