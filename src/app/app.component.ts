import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'antra-first-angular-project';

  textColor:string = 'black'

  receivedData!: string;

  onDataReceived(data:string) {
    this.textColor = data
  }

  data = [
    {
      title: 'Title 1',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eaque soluta eum obcaecati impedit iste animi, sapiente quae repellat asperiores ratione officiis nam odio molestiae sit in? Dignissimos, sint id!',
      color: 'blue'
    },
    {
      title: 'Title 2',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eaque soluta eum obcaecati impedit iste animi, sapiente quae repellat asperiores ratione officiis nam odio molestiae sit in? Dignissimos, sint id!',
      color: 'black'
    },
    {
      title: 'Title 3',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eaque soluta eum obcaecati impedit iste animi, sapiente quae repellat asperiores ratione officiis nam odio molestiae sit in? Dignissimos, sint id!',
      color: 'red'
    },
    {
      title: 'Title 4',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eaque soluta eum obcaecati impedit iste animi, sapiente quae repellat asperiores ratione officiis nam odio molestiae sit in? Dignissimos, sint id!',
      color: 'green'
    },
  ]
}
