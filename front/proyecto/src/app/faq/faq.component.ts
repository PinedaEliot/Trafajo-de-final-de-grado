import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqList: { question: string, answer: string, expanded: boolean }[] = [
    {
      question: '¿Pregunta 1?',
      answer: 'Respuesta a la pregunta 1.',
      expanded: false
    },
    {
      question: '¿Pregunta 2?',
      answer: 'Respuesta a la pregunta 2.',
      expanded: false
    },
    // Agrega más preguntas y respuestas según sea necesario
  ];

  toggleFaq(faq: any): void {
    faq.expanded = !faq.expanded;
  }
}