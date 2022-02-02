class MembersOnlyGamesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    before_action :authorize
  
    def index
      games = Game.where(is_member_only: true).includes(:user)
      render json: games, each_serializer: GameListSerializer
    end
  
    def show
      game = Game.find(params[:id])
      render json: game
    end
  
    private
  
    def record_not_found
      render json: { error: "Game not found" }, status: :not_found
    end
  
    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end 
  
  end
  
  