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
    this.isSelected = !this.isSelected
    console.log(this.isSelected)
    const data = event.target.style.backgroundColor
    this.dataEvent.emit(data)
  }

  isSelected: boolean = false;



}