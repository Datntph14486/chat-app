// src/chat/chat.gateway.ts
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private messages: { sender: string; message: string; time: number }[] = [];

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
    client.emit('chatHistory', this.messages);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('chat')
  handleMessage(@MessageBody() data: { sender: string; message: string }) {
    const msg = {
      sender: data.sender,
      message: data.message,
      time: Date.now(),
    };

    this.messages.push(msg);
    this.server.emit('chat', msg);
  }
}
