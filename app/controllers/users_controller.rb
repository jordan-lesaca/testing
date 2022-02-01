class UsersController < ApplicationController

    def index
        user = User.all
        render json: user
    end

    def show
        user = User.(params[:id])
        render json: user
    end

    def create
        user = User.create(user_params)
        render json: user
    end

    private

    def user_params
        params.permit(:username, :age, :comeptitive)
    end

end