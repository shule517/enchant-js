class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel"
    @id = Time.now
    puts "subscribed:#{@id}"
    # p cookies
    p self
  end

  def unsubscribed
    puts "unsubscribed:#{@id}"
    p self
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    ActionCable.server.broadcast 'room_channel', message: data['message']
  end
end
