class GamesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  
    def index
      games = Game.all.where(is_member_only: false).includes(:user)
      render json: games, each_serializer: GameListSerializer
    end
  
    def show
      game = Game.find(params[:id])
      render json: game
    end

    def create
      game = Game.create(game_params)
      render json: game
    end

      def update
        game = Game.find(params[:id])
        game.update(game_params)
        render json: game
    end

    def destroy
        game = Game.find(params[:id])
        game.destroy
    end
  
    private
  
    def record_not_found
      render json: { error: "Game not found" }, status: :not_found
    end

    def game_params
      params.require(:game).permit(:title, :release_year, :genre, :user_id)
    end
  
  end
  