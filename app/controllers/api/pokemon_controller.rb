class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    pokemon = Pokemon.find(params[:id])
    render json: pokemon
  end

end
