class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from("main_room")
    content = {
      key: SecureRandom.hex(5),
      message: 'someone has arrived'
    }
    ActionCable.server.broadcast('main_room', content: content)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    content = data.merge(key: SecureRandom.hex(5))
    ActionCable.server.broadcast('main_room', content: content)
  end
end
