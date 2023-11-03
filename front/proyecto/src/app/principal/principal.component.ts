import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  images = [
    './assets/carrusel1.png',
    './assets/carrusel2.png',
    './assets/carrusel3.jpg',
    
  ];
  currentImageIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.autoSlide(); // Iniciar la función de desplazamiento automático
  }

  nextSlide() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  autoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambia la imagen cada 5 segundos
  }

  @ViewChild('audioPlayer') audioPlayer: ElementRef | undefined; 

  isPlaying = false;
  currentTrackIndex = 0;
  tracks = [
    './assets/reproductor1.mp3',
    './assets/reproductor2.mp3',
    './assets/reproductor3.mp3'
    
  ];

  get currentTrack(): string {
    return this.tracks[this.currentTrackIndex];
  }

  playPause() {
    const audio: HTMLAudioElement | undefined = this.audioPlayer?.nativeElement;
    if (audio) {
      if (this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      this.isPlaying = !this.isPlaying;
    }
  }

  previousTrack() {
    if (this.currentTrackIndex > 0) {
      this.currentTrackIndex--;
      this.playTrack();
    }
  }

  nextTrack() {
    if (this.currentTrackIndex < this.tracks.length - 1) {
      this.currentTrackIndex++;
      this.playTrack();
    }
  }

  playTrack() {
    const audio: HTMLAudioElement | undefined = this.audioPlayer?.nativeElement;
    if (audio) {
      audio.load();
      audio.play();
      this.isPlaying = true;
    }
  }

  newsList: string[] = [
    'Noticia 1',
    'Noticia 2',
    'Noticia 3',
    'Noticia 4',
    
  ];
  currentNewIndex = 0;

  showNextNews() {
    this.currentNewIndex = (this.currentNewIndex + 1) % this.newsList.length;
  }

  showPreviousNews() {
    this.currentNewIndex = (this.currentNewIndex - 1 + this.newsList.length) % this.newsList.length;
  }
}
