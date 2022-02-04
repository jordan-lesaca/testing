class GamesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    def index
      games = Game.all
      render json: games, each_serializer: GameSerializer
    end
  
    def show
      game = Game.find(params[:id])
      render json: game
    end

    def create
      game = Game.create!(game_params)
      render json: game, status: :created
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

    def game_params
      params.require(:game).permit(:title, :release_year, :genre, :user_id)
    end
  
    def record_not_found
      render json: { error: "Game not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  
  end
  