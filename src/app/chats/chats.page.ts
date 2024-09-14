import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage {

  chats = [
    {
      id: 1,
      title: 'Colaboración Diseño Gráfico',
      preview: 'Tengo una idea de app y necesito un diseñador...',
      messages: [
        'Hola, tengo una idea de app y necesito un diseñador gráfico.',
        'Pensé en ti para el diseño, ¿te interesa?',
        'Sí, claro. Hablemos más a fondo sobre el proyecto.'
      ]
    },
    {
      id: 2,
      title: 'Asociación de Negocios',
      preview: 'Me gustaría hablar sobre una colaboración...',
      messages: [
        'Me gustaría hablar sobre una posible colaboración entre nuestras empresas.',
        'Estoy interesado. ¿Cuándo podríamos reunirnos?'
      ]
    },
    {
      id: 3,
      title: 'Nueva Idea de App',
      preview: 'Tengo una nueva idea de app. ¿Te gustaría unirte?',
      messages: [
        'Tengo una nueva idea de app. ¿Te gustaría unirte al equipo de desarrollo?',
        'Suena interesante, ¿me puedes dar más detalles?'
      ]
    },
    {
      id: 4,
      title: 'Oportunidad de Inversión',
      preview: 'Estoy buscando inversores para mi nuevo proyecto...',
      messages: [
        'Estoy buscando inversores para mi nuevo proyecto. ¿Te gustaría participar?',
        'Cuéntame más sobre el proyecto. Estoy interesado.'
      ]
    },
    {
      id: 5,
      title: 'Evento de Networking',
      preview: 'Te invito a un evento de networking...',
      messages: [
        'Te invito a un evento de networking que organizo la próxima semana.',
        '¡Gracias! Me encantaría asistir.'
      ]
    }
  ];

  selectedChat: any = null;

  openChat(chat: any) {
    this.selectedChat = chat;
  }

  closeChat() {
    this.selectedChat = null;
  }

  /* chats ts finish */


  constructor() { }


}
