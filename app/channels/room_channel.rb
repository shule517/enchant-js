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
    # data = { 'message': { 'type': 'delete', 'id': @id }}
    data = { type: 'delete', id: @id }
    ActionCable.server.broadcast 'room_channel', message: data
  end

  def speak(data)
    ActionCable.server.broadcast 'room_channel', message: data['message']

    if (data['message']['type'] == 'hello')
      @id = data['message']['id']
      puts "my id is " + @id
    end
  end
end
