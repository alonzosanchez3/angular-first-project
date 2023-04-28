import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() contentData!: {title: string, content: string, color: string};

  @Output() dataEvent = new EventEmitter<string>()

  onButtonClick(event:any) {
    console.log('button click fired')
    let data = event.target.style.backgroundColor
    this.isSelected = !this.isSelected
    if(!this.isSelected) {
      data = 'black'
    }
    this.dataEvent.emit(data)
  }

  onLoseFocus(event:any) {
    if(this.isSelected) {
      console.log('lost focus fired')
      let data = 'black'
      this.isSelected = !this.isSelected
      this.dataEvent.emit(data)
    }
  }

  isSelected: boolean = false;



}