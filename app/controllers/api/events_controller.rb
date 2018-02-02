class Api::EventsController < ApplicationController

  def index
    events = Event.all
    @events = events.includes(:categories)
  end

  def currentUserEvents
    @user = current_user
    @events = Event.where(id: @user.event_ids)
    render :index
  end

  def show
    @event = Event.find(params[:id])
    if @event
      render :show
    else
      render json: ['Could not find event'], status: 404
    end
  end

  def create
    @event = current_user.events.new(event_params.except(:category_memberships))
    if @event.save
      @event.category_ids = event_params[:category_memberships]
      render :show
    else
      render json: @event.errors.messages, status: 422
    end
  end

  def update
    @event = current_user.events.find(params[:id])
    if @event.update_attributes(event_params.except(:category_memberships))
       @user = current_user
       @event.category_ids = event_params[:category_memberships].split(',')
       render :show
    else
      render json:  @event.errors.messages, status: 422
    end
  end

  def destroy
    @user = current_user
    @event = current_user.events.find(params[:id])
    @event.destroy
    render :show
  end

  private

  def event_params
  params.require(:event).permit(:id, :event_start, :event_end, :title, :description,
    :venue_name, :venue_address, :ticket_price, :tickets_available, :organizer_id, :hero_image, :category_memberships)
  end
end
