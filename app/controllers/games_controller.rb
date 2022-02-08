class GamesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index 
    games = Game.all.order(release_year: :desc) 
    render json: games
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
      head :no_content 
  end

  private

  def game_params 
    params.require(:game).permit(:title, :release_year, :genre, :user_id) 
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end