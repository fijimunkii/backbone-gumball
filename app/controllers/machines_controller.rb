class MachinesController < ApplicationController

  def index
    @machines = Machine.all
    render json: @machines
  end

  def show
    @machine = Machine.find params[:id]
    render json: @machine
  end

  def update
    @machine = Machine.find params[:id]
    @machine.update_attributes({
      cost: params[:cost],
      location: params[:location],
      machinetype: params[:machinetype],
      money: params[:money],
      numCandy: params[:numCandy]
    })
    render json: @machine
  end

  def create
    @machine = Machine.create({
      cost: params[:cost],
      location: params[:location],
      machinetype: params[:machinetype],
      money: params[:money],
      numCandy: params[:numCandy]
    })
    render json: @machine
  end

  def destroy
    machine = Machine.find(params[:id])
    if machine.destroy
      render json: {success: true}
    else
      render json: {success: false}
    end
  end

end
